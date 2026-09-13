#!/usr/bin/env node
/* scripts/bootstrap-baseline.mjs
 *
 * Builds data/baseline.json: how often each word normally appears in new
 * token names. Without it every word looks new, every word looks like a
 * spike, and the page reports noise.
 *
 * WHY IT SAMPLES
 *
 * Fourteen days is roughly 11.8 million blocks on this chain. Reading every
 * one of them would cost thousands of requests against a shared public
 * endpoint for an answer that does not need that precision: a word's
 * ordinary share is a proportion, and a proportion is well estimated from a
 * sample.
 *
 * So it reads a few full hours per day, spread across the day, and reports
 * exactly how many hours it sampled. The number in the file is an estimate
 * from a stated sample, not a census dressed up as one.
 *
 *   node scripts/bootstrap-baseline.mjs
 *   node scripts/bootstrap-baseline.mjs --days 14 --per-day 4
 *   node scripts/bootstrap-baseline.mjs --full        read every block
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import detect from '../src/detect.js';
import {
  RPC, head, blockAt, sweepMints, candidatesFrom, resolveLaunches, stats, setPace, batching
} from './chain.mjs';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const argv = process.argv.slice(2);
const FULL = argv.includes('--full');
const numArg = (flag, fallback) => {
  const i = argv.indexOf(flag);
  const n = i >= 0 ? Number(argv[i + 1]) : NaN;
  return Number.isFinite(n) && n > 0 ? n : fallback;
};
const DAYS = numArg('--days', detect.CONFIG.baseline_days);
const PER_DAY = numArg('--per-day', 4);
const CHUNK = numArg('--chunk', 2000);
setPace(numArg('--gap', 120));
batching.size = numArg('--batch', 50);

(async () => {
  const tip = await head();
  process.stderr.write(`head ${tip.number.toLocaleString('en-US')} · building ${DAYS}-day baseline\n`);

  /* Each sample is one full hour. Hours are spread evenly through each day so
   * the estimate is not taken entirely from one time of day, when launch
   * behaviour is likely to differ. */
  const windows = [];
  if (FULL) {
    windows.push({ from: tip.ts - DAYS * 86400, to: tip.ts, hours: DAYS * 24 });
  } else {
    for (let day = 0; day < DAYS; day++) {
      for (let slot = 0; slot < PER_DAY; slot++) {
        const end = tip.ts - day * 86400 - Math.round((slot * 86400) / PER_DAY);
        windows.push({ from: end - 3600, to: end, hours: 1 });
      }
    }
  }

  const rootLaunches = new Map();
  let launchesTotal = 0;
  let hoursSampled = 0;
  let oldest = null;
  let skipped = 0;

  for (let i = 0; i < windows.length; i++) {
    const w = windows[i];
    const label = `[${i + 1}/${windows.length}]`;

    let fromBlock;
    let toBlock;
    try {
      fromBlock = (await blockAt(w.from, tip.number, tip.ts)).block;
      toBlock = (await blockAt(w.to, tip.number, tip.ts)).block;
    } catch (err) {
      process.stderr.write(`${label} could not locate blocks: ${err.message}\n`);
      skipped++;
      continue;
    }
    if (toBlock <= fromBlock) { skipped++; continue; }

    let logs;
    try {
      logs = await sweepMints(fromBlock, toBlock, CHUNK);
    } catch (err) {
      /* A public node may not serve logs this far back. That is a real limit
       * on how much history is reachable, so it is reported rather than
       * silently producing a thinner baseline than the file claims. */
      process.stderr.write(`${label} logs unavailable for this range: ${err.message}\n`);
      skipped++;
      continue;
    }

    const candidates = [...candidatesFrom(logs).values()];
    /* The baseline needs names and wallets, never timestamps. */
    const { launches } = await resolveLaunches(candidates, { withTimes: false });

    for (const launch of launches) {
      launchesTotal++;
      for (const root of new Set(detect.tokenize(launch.name, launch.symbol))) {
        rootLaunches.set(root, (rootLaunches.get(root) || 0) + 1);
      }
    }

    hoursSampled += w.hours;
    oldest = new Date(w.from * 1000).toISOString();
    process.stderr.write(
      `${label} ${new Date(w.to * 1000).toISOString().slice(0, 16)} · ` +
      `${launches.length} tokens · running total ${launchesTotal}\n`
    );
  }

  if (launchesTotal === 0) {
    console.error('\nNo launches found in any sampled hour.');
    console.error('Either the chain creates very few tokens, or the RPC is not serving logs.');
    console.error('Run: node scripts/collect.mjs --dry-run --hours 24');
    process.exit(1);
  }

  const roots = {};
  let dropped = 0;
  for (const [root, count] of [...rootLaunches.entries()].sort()) {
    const share = count / launchesTotal;
    /* Below the floor the honest answer is the floor: the sample is too small
     * to claim a word is rarer than that. */
    if (share >= detect.CONFIG.floor_share) {
      roots[root] = Math.round(share * 10000) / 10000;
    } else {
      dropped++;
    }
  }

  const baseline = {
    schema: 1,
    built_at: new Date().toISOString(),
    days: DAYS,
    method: FULL ? 'every block in the period' : `${PER_DAY} sampled hours per day`,
    hours_sampled: hoursSampled,
    hours_in_period: DAYS * 24,
    launches_observed: launchesTotal,
    oldest_seen: oldest,
    windows_skipped: skipped,
    source: RPC,
    floor_share: detect.CONFIG.floor_share,
    roots
  };

  fs.writeFileSync(path.join(ROOT, 'data', 'baseline.json'), JSON.stringify(baseline, null, 2));

  process.stderr.write('\n');
  process.stderr.write(`baseline written from ${launchesTotal} launches\n`);
  process.stderr.write(`sampled ${hoursSampled} of ${DAYS * 24} hours (${Math.round((hoursSampled / (DAYS * 24)) * 100)}%)\n`);
  process.stderr.write(`words kept: ${Object.keys(roots).length} · below the floor: ${dropped}\n`);
  process.stderr.write(
    `[rpc] calls ${stats.calls} in ${batching.batches} batches · retries ${stats.retries}\n`
  );

  if (skipped > 0) {
    process.stderr.write(`\nWARNING: ${skipped} sampled windows were skipped.\n`);
    process.stderr.write('The baseline covers less history than --days claims.\n');
  }
  if (launchesTotal < 200) {
    process.stderr.write(
      `\nWARNING: ${launchesTotal} launches is a thin sample for a baseline.\n` +
      'Raise --per-day, or accept that rare-word shares will be rough.\n'
    );
  }
})().catch((err) => {
  console.error('\nbaseline failed: ' + err.message);
  process.exit(1);
});
