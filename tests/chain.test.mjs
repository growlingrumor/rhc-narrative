import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { decodeString, candidatesFrom, rpcBatch, batching, setPace } from '../scripts/chain.mjs';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const FILES = ['scripts/chain.mjs', 'scripts/collect.mjs', 'scripts/bootstrap-baseline.mjs'];

/* If any of these appears, the read-only claim on the page stops being true,
 * so the build stops instead. */
const FORBIDDEN = [
  'privateKey', 'private_key', 'signTransaction', 'sendTransaction',
  'eth_sendRawTransaction', 'eth_sendTransaction', 'eth_sign',
  'Wallet', 'Keypair', 'mnemonic', 'seedPhrase'
];

const PERMITTED_RPC = [
  'eth_blockNumber', 'eth_getBlockByNumber', 'eth_getLogs',
  'eth_getTransactionReceipt', 'eth_call'
];

test('the chain scripts contain no signing identifiers', () => {
  const found = [];
  for (const rel of FILES) {
    const lines = fs.readFileSync(path.join(ROOT, rel), 'utf8').split(/\r?\n/);
    lines.forEach((line, i) => {
      for (const needle of FORBIDDEN) {
        /* Match the identifier, not the substring: the word "wallets" in an
         * output line is not a signing API, and a check that cannot tell the
         * difference gets switched off the first time it cries wolf. */
        const pattern = new RegExp('\\b' + needle + '\\b');
        if (pattern.test(line)) {
          found.push(`${rel}:${i + 1}: ${needle}: ${line.trim()}`);
        }
      }
    });
  }
  assert.deepEqual(found, [], `read-only code contains:\n${found.join('\n')}`);
});

test('only the five read methods are referenced', () => {
  const source = FILES.map((f) => fs.readFileSync(path.join(ROOT, f), 'utf8')).join('\n');
  const referenced = [...new Set(source.match(/eth_[A-Za-z]+/g) || [])].sort();
  for (const method of referenced) {
    assert.ok(PERMITTED_RPC.includes(method), `${method} is outside the permitted read methods`);
  }
  for (const method of PERMITTED_RPC) {
    assert.ok(referenced.includes(method), `${method} should be used`);
  }
});

test('no endpoint is hardcoded beyond the documented public default', () => {
  const source = fs.readFileSync(path.join(ROOT, 'scripts', 'chain.mjs'), 'utf8');
  const urls = source.match(/https?:\/\/[^\s'"`)]+/g) || [];
  for (const url of urls) {
    assert.match(url, /^https:\/\/rpc\.mainnet\.chain\.robinhood\.com/,
      `unexpected endpoint in chain.mjs: ${url}`);
  }
});

test('token names are decoded from both ABI string and bytes32 returns', () => {
  /* Built rather than pasted: a 64-character hex literal is exactly the shape
   * scan-keys.mjs refuses, and it is right to refuse it. */
  const word = (n) => n.toString(16).padStart(64, '0');
  const abiString = '0x' + word(32) + word(12) +
    Buffer.from('Restake Labs').toString('hex').padEnd(64, '0');
  assert.equal(decodeString(abiString), 'Restake Labs');

  /* Older tokens return a fixed bytes32 instead. */
  const bytes32 = '0x' + Buffer.from('OLDCOIN').toString('hex').padEnd(64, '0');
  assert.equal(decodeString(bytes32), 'OLDCOIN');

  assert.equal(decodeString('0x'), '');
  assert.equal(decodeString(''), '');
});

test('a repeated mint counts the token once, at its first appearance', () => {
  /* An existing token can mint more than once. Counting every mint would
   * report one token as many launches and inflate its word. */
  const logs = [
    { address: '0xAAA', transactionHash: '0x1', blockNumber: '0x64' },
    { address: '0xAAA', transactionHash: '0x2', blockNumber: '0x65' },
    { address: '0xBBB', transactionHash: '0x3', blockNumber: '0x66' }
  ];
  const map = candidatesFrom(logs);
  assert.equal(map.size, 2);
  assert.equal(map.get('0xaaa').tx, '0x1', 'keeps the first mint, not the latest');
  assert.equal(map.get('0xaaa').block, 100);
});

/* ------------------------------------------------------------- batching */

function mockFetch({ allowBatch }) {
  let httpRequests = 0;
  global.fetch = async (url, opts) => {
    httpRequests++;
    const body = JSON.parse(opts.body);
    if (Array.isArray(body)) {
      if (!allowBatch) {
        return { status: 200, json: async () => ({ error: { message: 'batch not supported' } }) };
      }
      return { status: 200, json: async () => body.map((r) => ({ jsonrpc: '2.0', id: r.id, result: 'v' + r.id })) };
    }
    return { status: 200, json: async () => ({ jsonrpc: '2.0', id: body.id, result: 'v' + body.id }) };
  };
  return () => httpRequests;
}

test('batching collapses many calls into few requests, in order', async () => {
  const count = mockFetch({ allowBatch: true });
  setPace(0);
  batching.enabled = true;
  batching.size = 50;

  const requests = Array.from({ length: 300 }, (_, i) => ({ method: 'eth_call', params: [i] }));
  const out = await rpcBatch(requests);

  assert.equal(out.length, 300);
  assert.equal(out[0], 'v0', 'results are placed by id, not by arrival order');
  assert.equal(out[299], 'v299');
  assert.equal(count(), 6, '300 calls in 50-call batches is 6 requests');
});

test('a node that refuses batches falls back instead of failing', async () => {
  const count = mockFetch({ allowBatch: false });
  setPace(0);
  batching.enabled = true;
  batching.size = 50;

  const out = await rpcBatch(Array.from({ length: 12 }, (_, i) => ({ method: 'eth_call', params: [i] })));

  assert.equal(batching.enabled, false, 'batching switches off once refused');
  assert.equal(out.filter(Boolean).length, 12, 'every result still arrives');
  assert.ok(count() >= 12, 'it completed the work one call at a time');
});
