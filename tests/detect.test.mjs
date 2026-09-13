import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import detect from '../src/detect.js';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const baseline = {
  days: 14,
  launches_observed: 40000,
  floor_share: detect.CONFIG.floor_share,
  roots: { dog: 0.09, restake: 0.0009 }
};

const many = (word, count, wallets = count) =>
  Array.from({ length: count }, (_, i) => ({
    name: `${word} ${i}`,
    symbol: `S${i}`,
    deployer: '0x' + (i % wallets)
  }));

test('a word far above its normal rate, from enough wallets, is a narrative', () => {
  const r = detect.run(many('restake', 10), baseline);
  const row = r.rows.find((x) => x.root === 'restake');
  assert.equal(row.state, 'WAVE');
  assert.ok(row.multiple >= detect.CONFIG.baseline_multiple);
  assert.ok(r.themes.includes('restake'));
});

test('the most frequent word of the hour is not a narrative if it is always frequent', () => {
  /* 18 of 200 launches carry "dog", which is its ordinary share. Frequency
   * is not the signal; frequency against its own history is. */
  const launches = [...many('dog', 18), ...many('unique', 182).map((l, i) => ({
    ...l, name: `word${i} thing${i}`
  }))];
  const r = detect.run(launches, baseline);
  const row = r.rows.find((x) => x.root === 'dog');
  assert.equal(row.state, 'BELOW');
  assert.ok(!r.themes.includes('dog'));
  assert.match(row.reason, /over baseline/);
});

test('one wallet spamming the same word does not open a narrative', () => {
  const r = detect.run(many('restake', 9, 1), baseline);
  const row = r.rows.find((x) => x.root === 'restake');
  assert.equal(row.state, 'THIN');
  assert.equal(row.deployers, 1);
  assert.match(row.reason, /deployers < 6 required/);
});

test('too few launches fails even at a huge multiple', () => {
  const r = detect.run(many('restake', 3), baseline);
  const row = r.rows.find((x) => x.root === 'restake');
  assert.equal(row.state, 'THIN');
  assert.match(row.reason, /launches < 5 required/);
});

test('words that always arrive together merge into one narrative', () => {
  const launches = Array.from({ length: 8 }, (_, i) => ({
    name: `lst basket ${i}`, symbol: `B${i}`, deployer: '0x' + i
  }));
  const r = detect.run(launches, baseline);
  const merged = r.rows.filter((x) => x.state === 'MERGED');
  assert.ok(merged.length >= 2, 'both contributing words are reported');
  assert.match(merged[0].reason, /co-occur \d+%, merged to/);
  assert.equal(r.themes.length, 1, 'one narrative, not two');
});

test('the same word spelled with lookalike characters counts once', () => {
  /* Cyrillic "а" reads as "a" to a human, so it must count as "a" here too,
   * otherwise one narrative splits into two halves and neither clears. */
  const launches = [
    ...Array.from({ length: 4 }, (_, i) => ({ name: `restake ${i}`, symbol: 'A', deployer: '0x' + i })),
    ...Array.from({ length: 4 }, (_, i) => ({ name: `rest\u0430ke x${i}`, symbol: 'A', deployer: '0xx' + i }))
  ];
  const r = detect.run(launches, baseline);
  const row = r.rows.find((x) => x.root === 'restake');
  assert.equal(row.launches, 8);
  assert.equal(row.state, 'WAVE');
});

test('stop-list words never become narratives', () => {
  const r = detect.run(many('token', 40), baseline);
  assert.ok(!r.rows.some((x) => x.root === 'token'));
  assert.ok(!r.themes.includes('token'));
});

test('an empty hour produces an empty result rather than throwing', () => {
  const r = detect.run([], baseline);
  assert.equal(r.launches, 0);
  assert.deepEqual(r.themes, []);
  assert.deepEqual(r.rows, []);
});

test('display order puts detected narratives first', () => {
  /* Regression: WAVE ranks 0, and `rank[state] || 3` treated that 0 as
   * missing, sending the only row that matters to the bottom. */
  const rows = [
    { root: 'noise', state: 'THIN', launches: 4, multiple: 90 },
    { root: 'dog', state: 'BELOW', launches: 20, multiple: 1 },
    { root: 'restake', state: 'WAVE', launches: 9, multiple: 70 }
  ];
  const ordered = detect.displayOrder(rows);
  assert.equal(ordered[0].root, 'restake');
});

test('display order does not mutate the array it is given', () => {
  const rows = [
    { root: 'a', state: 'THIN', launches: 1, multiple: 5 },
    { root: 'b', state: 'WAVE', launches: 9, multiple: 70 }
  ];
  const before = rows.map((r) => r.root).join(',');
  detect.displayOrder(rows);
  assert.equal(rows.map((r) => r.root).join(','), before);
});

test('thresholds live in one object and nowhere else', () => {
  const source = fs.readFileSync(path.join(ROOT, 'src', 'detect.js'), 'utf8');
  const body = source.slice(source.indexOf('var CONFIG'));
  const afterConfig = body.slice(body.indexOf('};'));
  assert.ok(!/\b6\.0\b/.test(afterConfig.replace(/baseline_multiple/g, '')),
    'the multiple is read from CONFIG, not repeated in the logic');
});

/* ------------------------------------------------------- window schema */

const STATES = ['WAVE', 'BELOW', 'THIN', 'MERGED'];

function loadShipped() {
  const file = path.join(ROOT, 'data', 'latest.json');
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

test('the shipped window matches the shape the page expects', () => {
  const w = loadShipped();
  for (const key of ['schema', 'closed_at', 'window_hours', 'launches', 'deployers', 'rows', 'recent', 'config']) {
    assert.ok(key in w, `missing field: ${key}`);
  }
  assert.equal(typeof w.launches, 'number');
  assert.ok(Array.isArray(w.rows));
  assert.ok(Array.isArray(w.recent));
});

test('every row carries a known verdict, and only failures carry a reason', () => {
  const w = loadShipped();
  for (const row of w.rows) {
    assert.ok(STATES.includes(row.state), `unknown verdict: ${row.state}`);
    if (row.state === 'WAVE') {
      assert.equal(row.reason, '', `${row.root} is a narrative and should print no failure`);
    } else {
      assert.ok(row.reason.length > 0, `${row.root} failed and must say why`);
    }
  }
});

test('example data is labelled as example data', () => {
  /* If the shipped window is a demo it must say so, because the page draws
   * its warning banner off this flag. A demo that forgets the flag looks
   * exactly like live chain data, which is the one failure not tolerated. */
  const w = loadShipped();
  if (w.source && /example/i.test(w.source)) {
    assert.equal(w.demo, true, 'example data must carry demo: true');
  }
  if (w.demo === true) {
    assert.match(w.source, /example/i, 'demo windows must not claim a chain source');
  }
});

test('the snapshot and latest.json agree', () => {
  const snapshotSource = fs.readFileSync(path.join(ROOT, 'data', 'snapshot.js'), 'utf8');
  /* The snapshot targets `window`, so hand it one. This runs the file exactly
   * as the browser would rather than rewriting it to fit the test. */
  const scope = {};
  new Function('window', snapshotSource)(scope);
  assert.equal(scope.RHC_SNAPSHOT.closed_at, loadShipped().closed_at);
  assert.equal(scope.RHC_SNAPSHOT.launches, loadShipped().launches);
});
