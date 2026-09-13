/* scripts/chain.mjs
 *
 * Everything that talks to the chain, in one place, so the collector and the
 * baseline builder cannot drift apart.
 *
 * Read-only by construction. Five read methods, no key material, no signing
 * path, nothing that can move an asset:
 *
 *   eth_blockNumber  eth_getBlockByNumber  eth_getLogs
 *   eth_getTransactionReceipt  eth_call
 */

export const RPC = process.env.RHC_RPC || 'https://rpc.mainnet.chain.robinhood.com';

/* Published ERC-20 constants. Verifiable by anyone, secret to no one. */
export const TRANSFER_TOPIC0 =
  '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';
export const ZERO_TOPIC = '0x' + '0'.repeat(64);
const SELECTOR_NAME = '0x06fdde03';    // name()
const SELECTOR_SYMBOL = '0x95d89b41';  // symbol()

export const hex = (n) => '0x' + n.toString(16);
export const toNum = (h) => parseInt(h, 16);
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const stats = { calls: 0, retries: 0 };

let lastCall = 0;
let minGap = 120;
export function setPace(ms) { minGap = Math.max(0, ms); }

/* One paced entry point. There is no path around it. */
export async function rpc(method, params = [], attempt = 0) {
  const wait = Math.max(0, lastCall + minGap - Date.now());
  if (wait > 0) { await sleep(wait); }
  lastCall = Date.now();
  stats.calls++;

  let json;
  try {
    const res = await fetch(RPC, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ jsonrpc: '2.0', id: stats.calls, method, params })
    });
    if (res.status === 429 || res.status >= 500) { throw new Error('HTTP ' + res.status); }
    json = await res.json();
  } catch (err) {
    if (attempt >= 4) { throw new Error(`${method}: ${err.message}`); }
    stats.retries++;
    await sleep(Math.min(20000, 400 * 2 ** attempt));
    return rpc(method, params, attempt + 1);
  }

  if (json.error) {
    const e = new Error(`${method}: ${json.error.message || JSON.stringify(json.error)}`);
    e.rpcError = true;
    throw e;
  }
  return json.result;
}

/* ------------------------------------------------------------- batching
 * JSON-RPC accepts an array of requests in one POST. At 1,500 tokens an hour
 * the per-token work is 4,500 calls; batched 50 at a time that is 90 HTTP
 * requests instead, which is the difference between nine minutes and fifteen
 * seconds.
 *
 * Not every node allows batches. The first batch that comes back malformed
 * flips this module to sequential mode permanently, so a node that refuses
 * costs one failed attempt rather than a failed run. */
export const batching = { enabled: true, size: 50, batches: 0 };

export async function rpcBatch(requests, onProgress) {
  const out = new Array(requests.length);

  for (let i = 0; i < requests.length;) {
    if (!batching.enabled) {
      /* Sequential fallback: same calls, same pacing, just slower. */
      const req = requests[i];
      out[i] = await rpc(req.method, req.params).catch(() => null);
      i++;
      if (onProgress) { onProgress(i, requests.length); }
      continue;
    }

    const slice = requests.slice(i, i + batching.size);
    const body = slice.map((req, n) => ({
      jsonrpc: '2.0', id: i + n, method: req.method, params: req.params
    }));

    const wait = Math.max(0, lastCall + minGap - Date.now());
    if (wait > 0) { await sleep(wait); }
    lastCall = Date.now();
    stats.calls += slice.length;
    batching.batches++;

    let parsed = null;
    try {
      const res = await fetch(RPC, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body)
      });
      if (res.status === 429 || res.status >= 500) { throw new Error('HTTP ' + res.status); }
      parsed = await res.json();
    } catch (err) {
      stats.retries++;
      if (batching.size > 10) {
        /* Too large a batch looks the same as a busy node. Shrink once
         * before concluding the node cannot batch at all. */
        batching.size = Math.floor(batching.size / 2);
        await sleep(500);
        continue;
      }
      batching.enabled = false;
      continue;
    }

    if (!Array.isArray(parsed)) {
      batching.enabled = false;
      continue;
    }

    for (const item of parsed) {
      const index = typeof item.id === 'number' ? item.id : -1;
      if (index >= 0) { out[index] = item.error ? null : item.result; }
    }
    i += slice.length;
    if (onProgress) { onProgress(Math.min(i, requests.length), requests.length); }
  }

  return out;
}

export async function head() {
  const h = await rpc('eth_blockNumber');
  const block = await rpc('eth_getBlockByNumber', [h, false]);
  return { number: toNum(h), ts: toNum(block.timestamp) };
}

/* Block time is stable but not exact, so estimate and correct by re-reading
 * timestamps rather than trusting the estimate. */
export async function blockAt(targetTs, headNumber, headTs) {
  const older = await rpc('eth_getBlockByNumber', [hex(Math.max(1, headNumber - 5000)), false]);
  const perBlock = (headTs - toNum(older.timestamp)) / 5000 || 0.1;

  let guess = Math.max(1, Math.round(headNumber - (headTs - targetTs) / perBlock));
  for (let i = 0; i < 3; i++) {
    if (guess >= headNumber) { guess = headNumber - 1; break; }
    const block = await rpc('eth_getBlockByNumber', [hex(guess), false]);
    const drift = toNum(block.timestamp) - targetTs;
    if (Math.abs(drift) <= 30) { break; }
    guess = Math.max(1, Math.round(guess - drift / perBlock));
  }
  return { block: guess, perBlock };
}

/* Mint events are Transfer from the zero address: what a token emits when it
 * is created. Asking for those in chunks costs ~18 calls per hour of chain
 * instead of 35,000. A rejected range is a normal answer from a public node,
 * so the chunk halves and retries instead of failing the run. */
export async function sweepMints(fromBlock, toBlock, chunkSize = 2000, onProgress) {
  const logs = [];
  let chunk = chunkSize;
  let cursor = fromBlock;

  while (cursor <= toBlock) {
    const end = Math.min(cursor + chunk - 1, toBlock);
    try {
      const batch = await rpc('eth_getLogs', [{
        fromBlock: hex(cursor),
        toBlock: hex(end),
        topics: [TRANSFER_TOPIC0, ZERO_TOPIC]
      }]);
      logs.push(...batch);
      cursor = end + 1;
      if (onProgress) { onProgress(cursor, toBlock, logs.length); }
    } catch (err) {
      if (err.rpcError && chunk > 50) {
        chunk = Math.floor(chunk / 2);
        continue;
      }
      throw err;
    }
  }
  return logs;
}

export function decodeString(data) {
  if (!data || data === '0x') { return ''; }
  const body = data.slice(2);
  try {
    /* Standard ABI string: offset, length, bytes. */
    if (body.length >= 128) {
      const len = parseInt(body.slice(64, 128), 16);
      if (Number.isFinite(len) && len > 0 && len <= 256) {
        const out = Buffer.from(body.slice(128, 128 + len * 2), 'hex').toString('utf8');
        if (out.trim()) { return out.replace(/\u0000/g, '').trim(); }
      }
    }
    /* Some tokens return a fixed bytes32 rather than a string. */
    return Buffer.from(body.slice(0, 64), 'hex').toString('utf8').replace(/\u0000/g, '').trim();
  } catch {
    return '';
  }
}

export async function readToken(address) {
  const [nameHex, symbolHex] = await Promise.all([
    rpc('eth_call', [{ to: address, data: SELECTOR_NAME }, 'latest']).catch(() => '0x'),
    rpc('eth_call', [{ to: address, data: SELECTOR_SYMBOL }, 'latest']).catch(() => '0x')
  ]);
  return { name: decodeString(nameHex), symbol: decodeString(symbolHex) };
}

/* First mint per address, which is the candidate creation event. */
export function candidatesFrom(logs) {
  const map = new Map();
  for (const log of logs) {
    const address = log.address.toLowerCase();
    if (!map.has(address)) {
      map.set(address, {
        address,
        tx: log.transactionHash,
        block: toNum(log.blockNumber)
      });
    }
  }
  return map;
}

/* A mint is not proof of creation: an existing token can mint more. The
 * receipt is the proof — when a transaction creates a contract, the receipt
 * carries its address. Deployments through a factory do not match, so they
 * are flagged rather than dropped or silently counted as direct.
 *
 * Everything here is batched, because this is the part that scales with the
 * number of tokens rather than with the length of the window. */
export async function resolveLaunches(candidates, options = {}) {
  const { withTimes = true, timesFor = 40, headNumber = null, headTs = null,
    perBlock = 0.1, onProgress = null } = options;

  if (candidates.length === 0) {
    return { launches: [], viaFactory: 0, unnamed: 0, noReceipt: 0 };
  }

  const note = (stage) => (done, total) => {
    if (onProgress) { onProgress(stage, done, total); }
  };

  const receipts = await rpcBatch(
    candidates.map((c) => ({ method: 'eth_getTransactionReceipt', params: [c.tx] })),
    note('receipts')
  );

  const names = await rpcBatch(
    candidates.map((c) => ({ method: 'eth_call', params: [{ to: c.address, data: SELECTOR_NAME }, 'latest'] })),
    note('names')
  );

  const symbols = await rpcBatch(
    candidates.map((c) => ({ method: 'eth_call', params: [{ to: c.address, data: SELECTOR_SYMBOL }, 'latest'] })),
    note('symbols')
  );

  const launches = [];
  let viaFactory = 0;
  let unnamed = 0;
  let noReceipt = 0;

  for (let i = 0; i < candidates.length; i++) {
    const c = candidates[i];
    const receipt = receipts[i];
    if (!receipt) { noReceipt++; continue; }

    const direct = (receipt.contractAddress || '').toLowerCase() === c.address;
    if (!direct) { viaFactory++; }

    const name = decodeString(names[i]);
    const symbol = decodeString(symbols[i]);
    if (!name && !symbol) { unnamed++; continue; }

    launches.push({
      address: c.address,
      name,
      symbol,
      deployer: (receipt.from || '').toLowerCase(),
      block: c.block,
      ts: null,
      ts_exact: false,
      direct
    });
  }

  /* Exact timestamps cost one call per distinct block, and at this volume
   * that is thousands of calls for a column that only shows HH:MM. So they
   * are read for the rows the page actually displays and estimated from
   * block height for the rest. Estimated ones are flagged, never presented
   * as if they had been read. */
  if (withTimes && launches.length) {
    launches.sort((a, b) => b.block - a.block);

    const wanted = [...new Set(launches.slice(0, timesFor).map((l) => l.block))];
    const blocks = await rpcBatch(
      wanted.map((n) => ({ method: 'eth_getBlockByNumber', params: [hex(n), false] })),
      note('timestamps')
    );

    const times = new Map();
    wanted.forEach((n, i) => {
      if (blocks[i]) { times.set(n, toNum(blocks[i].timestamp)); }
    });

    for (const launch of launches) {
      if (times.has(launch.block)) {
        launch.ts = new Date(times.get(launch.block) * 1000).toISOString();
        launch.ts_exact = true;
      } else if (headNumber && headTs) {
        const seconds = headTs - (headNumber - launch.block) * perBlock;
        launch.ts = new Date(seconds * 1000).toISOString();
        launch.ts_exact = false;
      }
    }
  }

  return { launches, viaFactory, unnamed, noReceipt };
}
