#!/usr/bin/env node
/* scripts/collect.mjs
 *
 * Reads real token creations from Robinhood Chain over plain JSON-RPC and
 * writes one window. No explorer, no API key, no account.
 *
 * All chain access lives in chain.mjs, which is read-only by construction.
 *
 *   node scripts/collect.mjs --dry-run    measure and print, write nothing
 *   node scripts/collect.mjs              write the window files
 *   node scripts/collect.mjs --hours 6    widen the window
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import detect from '../src/detect.js';
import {
  RPC, head, blockAt, sweepMints, candidatesFrom, resolveLaunches,
  stats, setPace, batching
} from './chain.mjs';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA = path.join(ROOT, 'data');

const argv = process.argv.slice(2);
const DRY = argv.includes('--dry-run');
const numArg = (flag, fallback) => {
  const i = argv.indexOf(flag);
  const n = i >= 0 ? Number(argv[i + 1]) : NaN;
  return Number.isFinite(n) && n > 0 ? n : fallback;
};
const HOURS = numArg('--hours', 1);
const CHUNK = numArg('--chunk', 2000);
const MAX_TOKENS = numArg('--max-tokens', 5000);
batching.size = numArg('--batch', 50);
const KEEP_WINDOWS = numArg('--keep', 24);   // 4 hours at one window per 10 minutes
setPace(numArg('--gap', 120));

function readBaseline() {
  const file = path.join(DATA, 'baseline.json');
  if (!fs.existsSync(file)) {
    return { days: 0, launches_observed: 0, floor_share: detect.CONFIG.floor_share, roots: {}, ready: false };
  }
  const b = JSON.parse(fs.readFileSync(file, 'utf8'));
  b.ready = (b.launches_observed || 0) > 0;
  return b;
}

function write(win) {
  fs.mkdirSync(DATA, { recursive: true });
  fs.writeFileSync(path.join(DATA, 'latest.json'), JSON.stringify(win, null, 2));
  fs.writeFileSync(
    path.join(DATA, 'snapshot.js'),
    '/* Written by scripts/collect.mjs. Do not edit by hand. */\n' +
    ';(function (scope) {\n  scope.RHC_SNAPSHOT = ' +
    JSON.stringify(win, null, 2).replace(/\n/g, '\n  ') +
    ';\n})(typeof window !== \'undefined\' ? window : globalThis);\n'
  );

  let history = [];
  const hfile = path.join(DATA, 'history.json');
  if (fs.existsSync(hfile)) {
    try { history = JSON.parse(fs.readFileSync(hfile, 'utf8')); } catch { history = []; }
  }
  history.push({
    closed_at: win.closed_at,
    window_hours: win.window_hours,
    launches: win.launches,
    deployers: win.deployers,
    roots: win.roots,
    narratives: win.themes.length,
    top: win.top ? win.top.root : null,
    top_launches: win.top ? win.top.launches : null,
    top_wallets: win.top ? win.top.deployers : null,
    multiple: win.top ? win.top.multiple : null,
    baseline_ready: win.baseline_ready
  });

  /* Four hours at one window every ten minutes. The file itself is tiny —
   * 24 entries is about 4 KB — but every commit of it is kept by git
   * forever, so the bound is about repository growth, not disk. */
  fs.writeFileSync(hfile, JSON.stringify(history.slice(-KEEP_WINDOWS), null, 2));
}

(async () => {
  const tip = await head();
  const cutoffTs = tip.ts - HOURS * 3600;
  const { block: start, perBlock } = await blockAt(cutoffTs, tip.number, tip.ts);
  const span = tip.number - start;

  process.stderr.write(
    `head ${tip.number.toLocaleString('en-US')} · block time ${perBlock.toFixed(3)}s · ` +
    `scanning ${span.toLocaleString('en-US')} blocks\n`
  );

  const logs = await sweepMints(start, tip.number, CHUNK, (cursor, end, found) => {
    const pct = Math.round(((cursor - start) / (end - start)) * 100);
    process.stderr.write(`\r  sweeping ${pct}% · ${found} mint events   `);
  });
  process.stderr.write(`\rmint events found: ${logs.length.toLocaleString('en-US')}          \n`);

  const candidates = candidatesFrom(logs);
  process.stderr.write(`distinct addresses minting from zero: ${candidates.size}\n`);

  const complete = candidates.size <= MAX_TOKENS;
  if (!complete) {
    process.stderr.write(
      `[cap] ${candidates.size} candidates exceeds --max-tokens ${MAX_TOKENS}. ` +
      'Reporting the most recent; the window is marked incomplete.\n'
    );
  }

  const list = [...candidates.values()].sort((a, b) => b.block - a.block).slice(0, MAX_TOKENS);

  const { launches, viaFactory, unnamed, noReceipt } = await resolveLaunches(list, {
    headNumber: tip.number,
    headTs: tip.ts,
    perBlock,
    timesFor: 40,
    onProgress: (stage, done, total) => {
      process.stderr.write(`\r  ${stage} ${done}/${total}          `);
    }
  });
  process.stderr.write('\r' + ' '.repeat(40) + '\r');

  const baseline = readBaseline();
  const result = detect.run(launches, baseline);

  const win = {
    schema: 1,
    chain: 'robinhood',
    chain_id: 4663,
    closed_at: new Date(tip.ts * 1000).toISOString(),
    opened_at: new Date(cutoffTs * 1000).toISOString(),
    window_hours: HOURS,
    head_block: tip.number,
    start_block: start,
    blocks_scanned: span,
    source: RPC,
    complete,
    launches: launches.length,
    unnamed_contracts: unnamed,
    via_factory: viaFactory,
    no_receipt: noReceipt,
    candidates: candidates.size,
    mint_events: logs.length,
    deployers: new Set(launches.map((l) => l.deployer)).size,
    roots: result.roots,
    cleared_multiple: result.cleared_multiple,
    failed_gates: result.failed_gates,
    baseline_ready: baseline.ready,
    baseline_days: baseline.days || 0,
    config: detect.CONFIG,
    themes: result.themes,
    top: result.rows.find((r) => r.state === 'WAVE') || null,
    rows: detect.displayOrder(result.rows).slice(0, 40),
    recent: launches.slice(0, 40)
  };

  process.stderr.write(
    `\nwindow ${HOURS}h · tokens ${win.launches} · wallets ${win.deployers} · ` +
    `words ${win.roots} · narratives ${win.themes.length}\n`
  );
  process.stderr.write(
    `  ${launches.filter((l) => l.direct).length} deployed directly, ` +
    `${viaFactory} through a factory, ${unnamed} with no readable name` +
    (noReceipt ? `, ${noReceipt} with no receipt` : '') + '\n'
  );
  process.stderr.write(
    `[rpc] calls ${stats.calls} in ${batching.batches} batches · retries ${stats.retries}` +
    (batching.enabled ? '' : ' · batching refused by node, ran sequentially') + '\n'
  );

  if (!baseline.ready) {
    process.stderr.write('[baseline] empty — run bootstrap-baseline.mjs, or every word reads as new\n');
  }
  if (win.launches < 20) {
    process.stderr.write(
      `\n[volume] ${win.launches} tokens in ${HOURS}h is thin for hourly detection.\n` +
      '[volume] Try --hours 6 or --hours 24, and lower the gates in src/detect.js.\n'
    );
  }

  if (DRY) {
    console.log(JSON.stringify({ ...win, rows: win.rows.slice(0, 15), recent: win.recent.slice(0, 15) }, null, 2));
    return;
  }
  write(win);
  process.stderr.write('wrote data/latest.json, data/snapshot.js, data/history.json\n');
})().catch((err) => {
  console.error('\ncollector failed: ' + err.message);
  process.exit(1);
});
