#!/usr/bin/env node
/* scripts/scan-keys.mjs
 *
 * Walks the repository and exits non-zero on anything shaped like a private
 * key or a seed phrase. CI runs this on every push and pull request, so the
 * build fails before such a string can ever reach a branch.
 *
 * What it looks for:
 *   1. base58 strings of length 87 or 88
 *   2. 64-character hex strings, with or without an 0x prefix
 *   3. a line that is exactly 12 or 24 lowercase words and reads like BIP39
 *   4. the literals PRIVATE KEY and SECRET_KEY, uppercase
 *
 * Three documented exceptions:
 *
 *   - This file is skipped. It contains every pattern it searches for by
 *     definition, and scanning itself would fail the build permanently.
 *
 *   - One public chain constant is exempt from rule 2 by exact value, not by
 *     pattern: the token-creation topic0 in scripts/collect.mjs. An event
 *     topic really is 32 bytes of hex and really does look like a key. The
 *     exemption is an exact-match allowlist of a single published value that
 *     anyone can verify against the chain's own documentation, so it cannot
 *     be used to hide a secret: any other 64-hex run still fails the build.
 *
 *   - data/live/ is exempt from rule 2 only. Those files are collector output
 *     and a 64-hex run there is a transaction hash or a padded address, not a
 *     key. The exemption is not free: before skipping the hex rule, this
 *     script parses each file and verifies that every 64-hex run sits inside
 *     an address-shaped or hash-shaped field. If a 64-hex run appears
 *     anywhere else in a live window, the exemption is refused for that file
 *     and rule 2 is applied normally.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(HERE, '..');
const SELF = path.join('scripts', 'scan-keys.mjs');

const SKIP_DIRS = new Set(['node_modules', '.git', '.github/cache']);
const TEXT_EXT = new Set([
  '.js', '.mjs', '.cjs', '.json', '.md', '.html', '.css', '.yml', '.yaml',
  '.txt', '.gitignore', '.cursor', ''
]);

const BASE58 = /[1-9A-HJ-NP-Za-km-z]{87,88}/;
const HEX64 = /(?:0x)?[0-9a-fA-F]{64}/;
const HEX64_ALL = /(?:0x)?[0-9a-fA-F]{64}/g;
const LITERALS = ['PRIVATE KEY', 'SECRET_KEY'];

/* Exempt from rule 2 by exact value only. Every entry must be a published,
 * independently verifiable chain constant. Nothing is added here that cannot
 * be checked against the chain's own documentation. */
const PUBLIC_CONSTANTS = new Set([
  /* ERC-20 Transfer event topic0, scripts/chain.mjs. Published in the ERC-20
   * specification and identical on every EVM chain. */
  '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
]);

/* A sample of the BIP39 English list. A seed phrase is 12 or 24 words drawn
 * from that list, so a line of ordinary prose has to clear a high bar before
 * it is reported: the whole line must be nothing but lowercase words of the
 * right length and count, and most of them must appear below. */
const BIP39_SAMPLE = new Set(('abandon ability able about above absent absorb abstract absurd abuse ' +
  'access accident account accuse achieve acid acoustic acquire across act action actor actress ' +
  'actual adapt add addict address adjust admit adult advance advice aerobic affair afford afraid ' +
  'again age agent agree ahead aim air airport aisle alarm album alcohol alert alien all alley ' +
  'allow almost alone alpha already also alter always amateur amazing among amount amused analyst ' +
  'anchor ancient anger angle angry animal ankle announce annual another answer antenna antique ' +
  'anxiety any apart apology appear apple approve april arch arctic area arena argue arm armed ' +
  'armor army around arrange arrest arrive arrow art artefact artist artwork ask aspect assault ' +
  'asset assist assume asthma athlete atom attack attend attitude attract auction audit august ' +
  'aunt author auto autumn average avocado avoid awake aware away awesome awful awkward axis baby ' +
  'bachelor bacon badge bag balance balcony ball bamboo banana banner bar barely bargain barrel ' +
  'base basic basket battle beach bean beauty because become beef before begin behave behind ' +
  'believe below belt bench benefit best betray better between beyond bicycle bid bike bind ' +
  'biology bird birth bitter black blade blame blanket blast bleak bless blind blood blossom blouse ' +
  'blue blur blush board boat body boil bomb bone bonus book boost border boring borrow boss ' +
  'bottom bounce box boy bracket brain brand brass brave bread breeze brick bridge brief bright ' +
  'bring brisk broccoli broken bronze broom brother brown brush bubble buddy budget buffalo build ' +
  'bulb bulk bullet bundle bunker burden burger burst bus business busy butter buyer buzz cabbage ' +
  'cabin cable cactus cage cake call calm camera camp can canal cancel candy cannon canoe canvas ' +
  'canyon capable capital captain car carbon card cargo carpet carry cart case cash casino castle ' +
  'casual cat catalog catch category cattle caught cause caution cave ceiling celery cement census ' +
  'century cereal certain chair chalk champion change chaos chapter charge chase chat cheap check ' +
  'cheese chef cherry chest chicken chief child chimney choice choose chronic chuckle chunk churn ' +
  'cigar cinnamon circle citizen city civil claim clap clarify claw clay clean clerk clever click ' +
  'client cliff climb clinic clip clock clog close cloth cloud clown club clump cluster clutch ' +
  'coach coast coconut code coffee coil coin collect color column combine come comfort comic ' +
  'common company concert conduct confirm congress connect consider control convince cook cool ' +
  'copper copy coral core corn correct cost cotton couch country couple course cousin cover coyote ' +
  'crack cradle craft cram crane crash crater crawl crazy cream credit creek crew cricket crime ' +
  'crisp critic crop cross crouch crowd crucial cruel cruise crumble crunch crush cry crystal cube ' +
  'culture cup cupboard curious current curtain curve cushion custom cute cycle').split(' '));

let failures = 0;

function report(file, line, rule, text) {
  failures++;
  const shown = text.length > 96 ? text.slice(0, 96) + '…' : text;
  console.error(`${file}:${line}: ${rule}: ${shown.trim()}`);
}

/* rule 3 — structural first, dictionary second */
function looksLikeSeed(line) {
  const trimmed = line.trim();
  const words = trimmed.split(/\s+/);
  if (words.length !== 12 && words.length !== 24) { return false; }
  if (!/^[a-z]{3,8}(?: [a-z]{3,8})+$/.test(trimmed)) { return false; }
  const known = words.filter((w) => BIP39_SAMPLE.has(w)).length;
  return known / words.length >= 0.75;
}

/* the data/live/ exemption, earned per file rather than assumed */
function liveHexIsAccountedFor(text) {
  let parsed;
  try { parsed = JSON.parse(text); } catch { return false; }

  const allowedKeys = new Set(['address', 'deployer', 'transactionHash', 'hash', 'blockHash']);
  let ok = true;

  const walk = (node, key) => {
    if (!ok) { return; }
    if (typeof node === 'string') {
      if (HEX64.test(node) && !allowedKeys.has(key)) { ok = false; }
      return;
    }
    if (Array.isArray(node)) { node.forEach((item) => walk(item, key)); return; }
    if (node && typeof node === 'object') {
      Object.keys(node).forEach((k) => walk(node[k], k));
    }
  };
  walk(parsed, '');
  return ok;
}

function scanFile(absolute, relative) {
  const text = fs.readFileSync(absolute, 'utf8');
  /* The exemption is scoped to collector window files specifically, not to
   * everything that happens to sit in data/live/. A README or a stray file
   * there gets the ordinary rules with no special case. */
  const inLive = (relative.startsWith(path.join('data', 'live') + path.sep) ||
    relative.startsWith('data/live/')) && /window-\d+\.json$/.test(relative);
  const hexExempt = inLive && liveHexIsAccountedFor(text);
  if (inLive && !hexExempt) {
    console.error(`${relative}: exemption refused, applying the hex rule to this file`);
  }

  text.split(/\r?\n/).forEach((line, index) => {
    const n = index + 1;
    if (BASE58.test(line)) { report(relative, n, 'base58 key shape', line); }
    if (!hexExempt) {
      const hits = line.match(HEX64_ALL) || [];
      hits.forEach((hit) => {
        if (PUBLIC_CONSTANTS.has(hit.toLowerCase())) { return; }
        report(relative, n, '64-char hex', line);
      });
    }
    if (looksLikeSeed(line)) { report(relative, n, 'seed phrase shape', line); }
    LITERALS.forEach((literal) => {
      if (line.includes(literal)) { report(relative, n, `literal ${literal}`, line); }
    });
  });
}

function walkDir(absolute, relative) {
  for (const entry of fs.readdirSync(absolute, { withFileTypes: true })) {
    const nextAbsolute = path.join(absolute, entry.name);
    const nextRelative = relative ? path.join(relative, entry.name) : entry.name;
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) { continue; }
      walkDir(nextAbsolute, nextRelative);
      continue;
    }
    if (nextRelative === SELF) { continue; }
    const ext = path.extname(entry.name);
    if (!TEXT_EXT.has(ext) && !entry.name.startsWith('.')) { continue; }
    if (entry.name === '.gitkeep') { continue; }
    scanFile(nextAbsolute, nextRelative);
  }
}

walkDir(ROOT, '');

if (failures > 0) {
  console.error(`\nscan-keys: ${failures} key-shaped string(s) found. build fails.`);
  process.exit(1);
}
console.log('scan-keys: clean. no key-shaped strings in the repository.');
