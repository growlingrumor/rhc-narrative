/* detect.js
 *
 * Theme detection. Five stages, in order: TOKENIZE, COUNT IN WINDOW,
 * COMPARE TO BASELINE, GATE, MERGE.
 *
 * The desk does not know what the word means. It counts how much more often
 * the word appears than it usually does.
 *
 * Pure functions. No DOM, no network, no storage, no model, no inference.
 * Shared verbatim between the page and scripts/collect.mjs.
 */
(function () {
  'use strict';

  /* ---------------------------------------------------------------- config
   * All five thresholds live here and nowhere else. The DETECTION panel on
   * the page prints this object as label-value rows.
   */
  var CONFIG = {
    window_minutes: 60,
    baseline_days: 14,
    baseline_multiple: 6.0,
    min_launches: 5,
    min_deployers: 6,
    cooccurrence: 0.60,
    floor_share: 0.0004,
    roots_per_launch_max: 3,
    root_min_length: 2,
    root_max_length: 14
  };

  /* ------------------------------------------------------------- stop list
   * A judgement call, kept in one place so it is reviewable line by line.
   * Words here carry no category information on this chain: they are either
   * chain furniture, launch furniture, or grammar.
   */
  var STOP_LIST = [
    'coin', 'token', 'tokens', 'inu', 'official', '2.0', 'the', 'a', 'and',
    'of', 'to', 'for', 'pump', 'pumpfun', 'solana', 'sol', 'eth', 'ethereum',
    'meme', 'memecoin', 'new', 'real', 'og', 'btc', 'bnb', 'usd', 'usdt',
    'usdc', 'dollar', 'chain', 'network', 'protocol', 'finance', 'capital',
    'labs', 'launch', 'fair', 'stealth', 'community', 'army', 'season',
    'wen', 'soon', 'gm', 'lfg', 'v2', 'v3', 'io', 'wrapped', 'test',
    /* Grammar. These carry no category information in any hour, so they are
     * dropped outright rather than left for the baseline to handle. Added
     * after a live window reported "on" as a narrative. */
    'on', 'in', 'at', 'it', 'is', 'as', 'by', 'or', 'be', 'this', 'that',
    'my', 'we', 'you', 'are', 'was', 'all', 'can', 'get', 'has', 'out',
    'now', 'not', 'but', 'its', 've', 're', 'll', 'up', 'do', 'so', 'if'
  ];

  /* Deliberately NOT on this list: robinhood, robin, hood, and other chain
   * furniture. A stop-list entry removes a word forever; the baseline
   * suppresses it only while it stays ordinary, which is the correct
   * behaviour for a word that is usually background but could carry a real
   * wave. Suppressing by history is the baseline's entire job. */

  var STOP_INDEX = (function () {
    var m = {};
    for (var i = 0; i < STOP_LIST.length; i++) { m[STOP_LIST[i]] = true; }
    return m;
  })();

  /* --------------------------------------------------- stage 1: TOKENIZE */

  var ZERO_WIDTH = /[\u200B\u200C\u200D\u2060\uFEFF\u00AD]/g;

  /* Cyrillic, Greek and fullwidth lookalikes folded onto ASCII. A launch
   * named with a Cyrillic "а" is the same string to a human eye and must be
   * the same root to the counter. */
  var HOMOGLYPHS = {
    '\u0430': 'a', '\u0435': 'e', '\u043E': 'o', '\u0441': 'c', '\u0440': 'p',
    '\u0445': 'x', '\u0443': 'y', '\u0456': 'i', '\u0455': 's', '\u043A': 'k',
    '\u043C': 'm', '\u043D': 'h', '\u0432': 'b', '\u0433': 'r', '\u0442': 't',
    '\u03B1': 'a', '\u03B2': 'b', '\u03B5': 'e', '\u03B9': 'i', '\u03BA': 'k',
    '\u03BD': 'v', '\u03BF': 'o', '\u03C1': 'p', '\u03C4': 't', '\u03C5': 'u',
    '\u0131': 'i', '\u0142': 'l', '\u00F8': 'o', '\u00E6': 'a', '\u0263': 'g'
  };

  function fold(input) {
    var s = String(input == null ? '' : input);
    s = s.replace(ZERO_WIDTH, '');
    if (typeof s.normalize === 'function') {
      s = s.normalize('NFKD').replace(/[\u0300-\u036F]/g, '');
    }
    var out = '';
    for (var i = 0; i < s.length; i++) {
      var ch = s[i];
      out += (HOMOGLYPHS[ch] || ch);
    }
    return out.toLowerCase();
  }

  function splitWords(input) {
    var folded = fold(input);
    /* punctuation and digits are separators, so they never reach a root */
    return folded.split(/[^a-z]+/).filter(function (w) { return w.length > 0; });
  }

  /* Keep 1 to 3 significant roots per launch: name first, then ticker. */
  function tokenize(name, ticker) {
    var words = splitWords(name).concat(splitWords(ticker));
    var roots = [];
    var seen = {};
    for (var i = 0; i < words.length; i++) {
      var w = words[i];
      if (w.length < CONFIG.root_min_length) { continue; }
      if (w.length > CONFIG.root_max_length) { continue; }
      if (STOP_INDEX[w]) { continue; }
      if (seen[w]) { continue; }
      seen[w] = true;
      roots.push(w);
      if (roots.length >= CONFIG.roots_per_launch_max) { break; }
    }
    return roots;
  }

  /* --------------------------------------------- stage 2: COUNT IN WINDOW
   * Distinct launches and distinct deployers only. One deployer spamming the
   * same name eight times is one deployer, not eight signals.
   */
  function launchKey(launch, index) {
    if (launch && launch.address) { return String(launch.address); }
    return 'idx:' + index;
  }

  function countWindow(launches) {
    var list = launches || [];
    var roots = {};
    for (var i = 0; i < list.length; i++) {
      var launch = list[i] || {};
      var key = launchKey(launch, i);
      var deployer = String(launch.deployer == null ? 'unknown' : launch.deployer);
      var found = tokenize(launch.name, launch.symbol);
      for (var r = 0; r < found.length; r++) {
        var root = found[r];
        if (!roots[root]) { roots[root] = { root: root, launches: {}, deployers: {} }; }
        roots[root].launches[key] = true;
        roots[root].deployers[deployer] = true;
      }
    }
    var out = {};
    var names = Object.keys(roots);
    for (var n = 0; n < names.length; n++) {
      var rec = roots[names[n]];
      out[names[n]] = {
        root: rec.root,
        launch_ids: Object.keys(rec.launches),
        launches: Object.keys(rec.launches).length,
        deployers: Object.keys(rec.deployers).length
      };
    }
    return { total: list.length, distinct_roots: names.length, roots: out };
  }

  /* ------------------------------------------ stage 3: COMPARE TO BASELINE
   * A root is a candidate only when its share in the window exceeds its
   * ordinary share over the previous 14 days by the configured multiple.
   * Roots absent from the baseline use the documented floor share, so a
   * brand-new word can still qualify.
   */
  function baselineShare(root, baseline) {
    var table = (baseline && baseline.roots) || {};
    var floor = (baseline && typeof baseline.floor_share === 'number')
      ? baseline.floor_share
      : CONFIG.floor_share;
    var share = table[root];
    if (typeof share !== 'number' || !(share > 0)) { return floor; }
    return share;
  }

  function round1(n) { return Math.round(n * 10) / 10; }
  function round4(n) { return Math.round(n * 10000) / 10000; }

  function multipleOf(windowShare, base) {
    if (!(base > 0)) { return 0; }
    return round1(windowShare / base);
  }

  /* ------------------------------------------------------- stage 4: GATE
   * Printed gate strings. These exact shapes are the contract with the feed.
   */
  function gateMultiple(root, multiple) {
    return root + ': ' + round1(multiple).toFixed(1) + 'x over baseline < ' +
      CONFIG.baseline_multiple.toFixed(1) + 'x required';
  }

  function gateLaunches(root, launches) {
    return root + ': ' + launches + ' launches < ' + CONFIG.min_launches + ' required';
  }

  function gateDeployers(root, deployers) {
    return root + ': ' + deployers + ' deployers < ' + CONFIG.min_deployers + ' required';
  }

  function mergeRow(a, b, pct, slug) {
    return a + ' + ' + b + ' co-occur ' + pct + '%, merged to ' + slug;
  }

  /* ------------------------------------------------------ stage 5: MERGE */

  function cooccurrence(idsA, idsB) {
    var setB = {};
    var i;
    for (i = 0; i < idsB.length; i++) { setB[idsB[i]] = true; }
    var shared = 0;
    var union = {};
    for (i = 0; i < idsA.length; i++) {
      union[idsA[i]] = true;
      if (setB[idsA[i]]) { shared++; }
    }
    for (i = 0; i < idsB.length; i++) { union[idsB[i]] = true; }
    var total = Object.keys(union).length;
    if (total === 0) { return 0; }
    return shared / total;
  }

  function slugOf(roots, counts) {
    var ordered = roots.slice().sort(function (a, b) {
      var d = counts[b].launches - counts[a].launches;
      if (d !== 0) { return d; }
      return a < b ? -1 : 1;
    });
    return ordered.join('-');
  }

  /* -------------------------------------------------------------- detect
   * launches: [{ address, name, symbol, deployer }]
   * baseline: { days, floor_share, roots: { root: share } }
   *
   * Returns the window record shape used by data/session-0112.js and by
   * data/live/window-<ts>.json. One shape, two producers.
   */
  function detect(launches, baseline) {
    var counted = countWindow(launches);
    var counts = counted.roots;
    var total = counted.total;
    var names = Object.keys(counts);

    var measured = {};
    var candidates = [];
    var rows = [];
    var gates = [];
    var i, j;

    /* stage 3 + stage 4 */
    for (i = 0; i < names.length; i++) {
      var root = names[i];
      var c = counts[root];
      var base = baselineShare(root, baseline);
      var share = total > 0 ? c.launches / total : 0;
      var multiple = multipleOf(share, base);
      measured[root] = {
        root: root,
        launches: c.launches,
        deployers: c.deployers,
        baseline_share: round4(base),
        multiple: multiple,
        launch_ids: c.launch_ids
      };
      if (multiple < CONFIG.baseline_multiple) {
        var below = gateMultiple(root, multiple);
        gates.push(below);
        rows.push(row(measured[root], 'BELOW', below));
        continue;
      }
      if (c.launches < CONFIG.min_launches) {
        var thinL = gateLaunches(root, c.launches);
        gates.push(thinL);
        rows.push(row(measured[root], 'THIN', thinL));
        continue;
      }
      if (c.deployers < CONFIG.min_deployers) {
        var thinD = gateDeployers(root, c.deployers);
        gates.push(thinD);
        rows.push(row(measured[root], 'THIN', thinD));
        continue;
      }
      candidates.push(root);
    }

    /* stage 5: merge surviving roots that travel together */
    var parent = {};
    candidates.forEach(function (r) { parent[r] = r; });
    function find(x) { while (parent[x] !== x) { x = parent[x]; } return x; }
    function union(x, y) { parent[find(x)] = find(y); }

    var merges = [];
    for (i = 0; i < candidates.length; i++) {
      for (j = i + 1; j < candidates.length; j++) {
        var a = candidates[i];
        var b = candidates[j];
        var cooc = cooccurrence(counts[a].launch_ids, counts[b].launch_ids);
        if (cooc > CONFIG.cooccurrence) {
          var pct = Math.round(cooc * 100);
          union(a, b);
          merges.push({ roots: [a, b], cooccurrence: pct });
        }
      }
    }

    var groups = {};
    candidates.forEach(function (r) {
      var key = find(r);
      if (!groups[key]) { groups[key] = []; }
      groups[key].push(r);
    });

    var themes = [];
    var merged_pairs = 0;
    Object.keys(groups).forEach(function (key) {
      var members = groups[key];
      var slug = slugOf(members, counts);
      themes.push(slug);
      if (members.length === 1) {
        rows.push(row(measured[members[0]], 'WAVE', ''));
        return;
      }
      merged_pairs++;
      var pct = 0;
      merges.forEach(function (m) {
        if (members.indexOf(m.roots[0]) >= 0 && members.indexOf(m.roots[1]) >= 0) {
          pct = Math.max(pct, m.cooccurrence);
        }
      });
      var ordered = slug.split('-');
      var text = mergeRow(ordered[0], ordered[1], pct, slug);
      members.forEach(function (r) { rows.push(row(measured[r], 'MERGED', text)); });
    });

    rows.sort(function (x, y) {
      var d = y.multiple - x.multiple;
      if (d !== 0) { return d; }
      return x.root < y.root ? -1 : 1;
    });

    var cleared = 0;
    var failed = 0;
    rows.forEach(function (r) {
      if (r.state !== 'BELOW') { cleared++; }
      if (r.state === 'THIN') { failed++; }
    });

    return {
      launches: total,
      roots: counted.distinct_roots,
      cleared_multiple: cleared,
      failed_gates: failed,
      merged_pairs: merged_pairs,
      themes: themes.sort(),
      rows: rows,
      gates: gates,
      merges: merges
    };
  }

  function row(m, state, reason) {
    return {
      root: m.root,
      launches: m.launches,
      deployers: m.deployers,
      baseline_share: m.baseline_share,
      multiple: m.multiple,
      state: state,
      reason: reason
    };
  }

  /* Display order. Sorting by multiple alone floats two-launch noise to the
   * top, because a rare word seen twice scores a huge ratio. What a reader
   * wants first is the words that actually filled the hour, with the verdict
   * next to each. Detected narratives lead, then everything by volume. */
  function displayOrder(rows) {
    var rank = { WAVE: 0, MERGED: 1, THIN: 2, BELOW: 2 };
    /* Object lookup, not `||`: WAVE ranks 0, and 0 is falsy, so `rank[s] || 3`
     * would send the one row that matters to the bottom of the table. */
    function rankOf(state) {
      return Object.prototype.hasOwnProperty.call(rank, state) ? rank[state] : 3;
    }
    return rows.slice().sort(function (a, b) {
      var r = rankOf(a.state) - rankOf(b.state);
      if (r !== 0) { return r; }
      if (b.launches !== a.launches) { return b.launches - a.launches; }
      if (b.multiple !== a.multiple) { return b.multiple - a.multiple; }
      return a.root < b.root ? -1 : 1;
    });
  }

  var API = {
    CONFIG: CONFIG,
    displayOrder: displayOrder,
    STOP_LIST: STOP_LIST,
    fold: fold,
    splitWords: splitWords,
    tokenize: tokenize,
    countWindow: countWindow,
    baselineShare: baselineShare,
    multipleOf: multipleOf,
    cooccurrence: cooccurrence,
    gateMultiple: gateMultiple,
    gateLaunches: gateLaunches,
    gateDeployers: gateDeployers,
    mergeRow: mergeRow,
    detect: detect,
    run: detect,
    round1: round1
  };

  if (typeof window !== 'undefined') {
    window.RHC = window.RHC || {};
    window.RHC.detect = API;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = API;
  }
})();
