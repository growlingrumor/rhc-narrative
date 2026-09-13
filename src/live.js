/* src/live.js
 *
 * The moving parts. Three of them, all showing real work rather than
 * decoration:
 *
 *   1. the lane   — a token name arriving and being split into words, with
 *                   stop-list words visibly discarded
 *   2. the tally  — the counters those words land in, flashing when the
 *                   streamed token contributes to one
 *   3. the gauges — the actual decision: rate against normal, launches, and
 *                   wallets, each against its threshold
 *
 * Nothing here invents data. The lane replays tokens the collector really
 * read, split by the same tokenizer the counter uses, and the tally shows
 * this hour's real totals. Motion stops entirely under prefers-reduced-motion.
 */
(function () {
  'use strict';

  var STEP_MS = 1600;
  var reduced = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var state = {
    window: null,
    index: 0,
    timer: null,
    running: true,
    focus: null
  };

  function el(id) { return document.getElementById(id); }
  function group(n) { return typeof n === 'number' ? n.toLocaleString('en-US') : '—'; }

  function detect() {
    return window.RHC && window.RHC.detect;
  }

  /* Split exactly the way the counter splits, then work out which pieces
   * survived, so the discarded chips on screen are the real discards. */
  function analyse(token) {
    var d = detect();
    var text = ((token.name || '') + ' ' + (token.symbol || '')).trim();
    var pieces = text.split(/[^A-Za-z0-9]+/).filter(Boolean);
    var kept = d ? d.tokenize(token.name || '', token.symbol || '') : [];
    var keptIndex = {};
    kept.forEach(function (k) { keptIndex[k] = true; });

    return pieces.map(function (piece) {
      var folded = d ? d.fold(piece.toLowerCase()) : piece.toLowerCase();
      return { text: piece, root: folded, kept: !!keptIndex[folded] };
    });
  }

  /* ---------------------------------------------------------------- lane */
  function renderLane(token) {
    var nameBox = el('lane-token');
    var wordBox = el('lane-words');
    if (!nameBox || !wordBox) { return; }

    nameBox.textContent = '';
    wordBox.textContent = '';

    var name = document.createElement('span');
    name.className = 'lane-name';
    name.textContent = token.name || '(unnamed)';
    nameBox.appendChild(name);

    var sym = document.createElement('span');
    sym.className = 'lane-sym';
    sym.textContent = token.symbol || '';
    nameBox.appendChild(sym);

    var parts = analyse(token);
    parts.forEach(function (part, i) {
      var chip = document.createElement('span');
      chip.className = 'chip ' + (part.kept ? 'kept' : 'dropped');
      chip.textContent = part.root;
      chip.title = part.kept
        ? 'counted as "' + part.root + '"'
        : 'ignored: stop list, or too short';
      if (!reduced) { chip.style.animationDelay = (i * 90) + 'ms'; }
      wordBox.appendChild(chip);
    });

    if (parts.length === 0) {
      var none = document.createElement('span');
      none.className = 'chip dropped';
      none.textContent = 'nothing countable';
      wordBox.appendChild(none);
    }

    var kept = parts.filter(function (p) { return p.kept; });
    flashTally(kept);
    if (window.RHC.mascot) { window.RHC.mascot.react(kept.length > 0); }
  }

  /* --------------------------------------------------------------- tally */
  function buildTally(w) {
    var box = el('tally');
    if (!box) { return; }
    box.textContent = '';

    var shown = (w.rows || []).slice(0, 8);

    /* The bar has to be scaled against the largest count on screen, not the
     * first row: rows are ordered with the detected narrative first, and a
     * more common word further down would then overflow its track. */
    var top = 1;
    shown.forEach(function (row) {
      if (row.launches > top) { top = row.launches; }
    });

    shown.forEach(function (row) {
      var item = document.createElement('button');
      item.className = 'tally-row state-' + row.state;
      item.setAttribute('data-root', row.root);

      var word = document.createElement('span');
      word.className = 'tally-word';
      word.textContent = row.root;

      var count = document.createElement('span');
      count.className = 'tally-count';
      count.textContent = group(row.launches);

      var bar = document.createElement('span');
      bar.className = 'tally-bar';
      var fill = document.createElement('span');
      fill.className = 'tally-fill';
      fill.style.width = Math.max(4, Math.min(100, Math.round((row.launches / top) * 100))) + '%';
      bar.appendChild(fill);

      item.appendChild(word);
      item.appendChild(bar);
      item.appendChild(count);
      item.addEventListener('click', function () { setFocus(row.root); });
      box.appendChild(item);
    });
  }

  function flashTally(keptParts) {
    var roots = {};
    keptParts.forEach(function (p) { roots[p.root] = true; });
    var rows = document.querySelectorAll('.tally-row');
    for (var i = 0; i < rows.length; i++) {
      var root = rows[i].getAttribute('data-root');
      var hit = roots[root] || (root.indexOf('-') > 0 && root.split('-').some(function (part) {
        return roots[part];
      }));
      rows[i].classList.toggle('hit', !!hit);
    }
  }

  /* -------------------------------------------------------------- gauges
   * The decision itself: three comparisons, each against its threshold. A
   * word passes only if all three clear. */
  function buildGauges(w) {
    var box = el('gauges');
    if (!box) { return; }
    box.textContent = '';

    var cfg = w.config || (detect() && detect().CONFIG) || {};
    var rows = (w.rows || []).slice(0, 6);

    rows.forEach(function (row) {
      var card = document.createElement('button');
      card.className = 'gauge-card state-' + row.state;
      card.setAttribute('data-root', row.root);

      var head = document.createElement('div');
      head.className = 'gauge-head';

      var word = document.createElement('span');
      word.className = 'gauge-word';
      word.textContent = row.root;
      head.appendChild(word);

      var verdict = document.createElement('span');
      verdict.className = 'state ' + row.state;
      verdict.textContent = row.state;
      head.appendChild(verdict);
      card.appendChild(head);

      card.appendChild(gauge('vs normal rate', row.multiple, cfg.baseline_multiple,
        row.multiple + '×', cfg.baseline_multiple + '× needed'));
      card.appendChild(gauge('tokens', row.launches, cfg.min_launches,
        group(row.launches), cfg.min_launches + ' needed'));
      card.appendChild(gauge('wallets', row.deployers, cfg.min_deployers,
        group(row.deployers), cfg.min_deployers + ' needed'));

      card.addEventListener('click', function () { setFocus(row.root); });
      box.appendChild(card);
    });
  }

  function gauge(label, value, threshold, valueText, needText) {
    var wrap = document.createElement('div');
    wrap.className = 'gauge';

    var top = document.createElement('div');
    top.className = 'gauge-label';
    top.appendChild(document.createTextNode(label));
    var v = document.createElement('span');
    v.className = 'gauge-value ' + (value >= threshold ? 'pass' : 'fail');
    v.textContent = valueText;
    top.appendChild(v);
    wrap.appendChild(top);

    /* The bar is capped at the threshold plus a little headroom, so clearing
     * the bar is visible rather than compressing every other word to nothing
     * when one word scores 300x. */
    var track = document.createElement('div');
    track.className = 'gauge-track';
    var mark = document.createElement('span');
    mark.className = 'gauge-mark';
    mark.style.left = Math.round((threshold / (threshold * 1.6)) * 100) + '%';
    mark.title = needText;
    var fill = document.createElement('span');
    fill.className = 'gauge-fill ' + (value >= threshold ? 'pass' : 'fail');
    var pct = Math.min(100, Math.round((value / (threshold * 1.6)) * 100));
    if (reduced) {
      fill.style.width = pct + '%';
    } else {
      fill.style.width = '0%';
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { fill.style.width = pct + '%'; });
      });
    }
    track.appendChild(fill);
    track.appendChild(mark);
    wrap.appendChild(track);
    return wrap;
  }

  /* --------------------------------------------------------------- focus
   * Clicking a word shows only the tokens that carried it. This is the one
   * question the table cannot answer on its own: which launches were these? */
  function setFocus(root) {
    state.focus = (state.focus === root) ? null : root;
    applyFocus();
  }

  function applyFocus() {
    var root = state.focus;
    var parts = root ? root.split('-') : [];

    var cards = document.querySelectorAll('.gauge-card, .tally-row');
    for (var i = 0; i < cards.length; i++) {
      cards[i].classList.toggle('focused', root && cards[i].getAttribute('data-root') === root);
    }

    var note = el('focus-note');
    var rows = document.querySelectorAll('#feed .row');
    var shown = 0;

    for (var j = 0; j < rows.length; j++) {
      var roots = (rows[j].getAttribute('data-roots') || '').split(' ');
      var match = !root || parts.some(function (p) { return roots.indexOf(p) >= 0; });
      rows[j].style.display = match ? '' : 'none';
      if (match) { shown++; }
    }

    if (note) {
      if (root) {
        note.textContent = 'showing ' + shown + ' of the listed tokens carrying "' + root +
          '" — click again to clear';
        note.classList.add('on');
      } else {
        note.textContent = '';
        note.classList.remove('on');
      }
    }
  }

  /* ---------------------------------------------------------------- loop */
  function tick() {
    var list = (state.window && state.window.recent) || [];
    if (!list.length) { return; }
    renderLane(list[state.index % list.length]);
    state.index++;
  }

  function start() {
    stop();
    if (reduced) { return; }
    state.timer = setInterval(tick, STEP_MS);
    state.running = true;
    updateToggle();
  }

  function stop() {
    if (state.timer) { clearInterval(state.timer); state.timer = null; }
    state.running = false;
    updateToggle();
  }

  function updateToggle() {
    var button = el('lane-toggle');
    if (!button) { return; }
    button.textContent = state.running ? 'pause' : 'play';
    button.setAttribute('aria-pressed', state.running ? 'true' : 'false');
  }

  /* --------------------------------------------------------------- mount */
  window.RHC = window.RHC || {};

  /* -------------------------------------------------------------- history
   * The last four hours of closed windows, eight to a page. Kept short on
   * purpose: the collector only retains 24 entries, because every commit of
   * this file is kept by git forever. */
  var hist = { list: [], page: 0, perPage: 8 };

  function buildHistory(list) {
    hist.list = Array.isArray(list) ? list.slice().reverse() : [];
    hist.page = 0;
    renderHistory();
  }

  function renderHistory() {
    var box = el('history');
    var pager = el('history-pager');
    if (!box) { return; }
    box.textContent = '';

    if (!hist.list.length) {
      var empty = document.createElement('p');
      empty.className = 'caption';
      empty.textContent = 'no closed windows yet — the first appears after the collector runs twice.';
      box.appendChild(empty);
      if (pager) { pager.textContent = ''; }
      return;
    }

    var pages = Math.ceil(hist.list.length / hist.perPage);
    if (hist.page >= pages) { hist.page = pages - 1; }
    var slice = hist.list.slice(hist.page * hist.perPage, (hist.page + 1) * hist.perPage);

    slice.forEach(function (h) {
      var row = document.createElement('div');
      row.className = 'hist-row' + (h.top ? '' : ' quiet');

      add(row, 'hist-time', h.closed_at ? String(h.closed_at).slice(11, 16) : '—');

      var word = document.createElement('span');
      word.className = 'hist-word';
      word.textContent = h.top || 'no narrative';
      row.appendChild(word);

      add(row, 'hist-mult', h.multiple ? h.multiple + '×' : '');
      add(row, 'hist-num', h.top_launches ? h.top_launches + ' tokens' : '');
      add(row, 'hist-num', h.top_wallets ? h.top_wallets + ' wallets' : '');
      add(row, 'hist-read', group(h.launches) + ' read');

      box.appendChild(row);
    });

    if (pager) {
      pager.textContent = '';
      pager.appendChild(pageButton('◀ newer', hist.page > 0, function () {
        hist.page--; renderHistory();
      }));
      var label = document.createElement('span');
      label.className = 'caption';
      label.textContent = 'page ' + (hist.page + 1) + ' of ' + pages +
        ' · ' + hist.list.length + ' windows kept';
      pager.appendChild(label);
      pager.appendChild(pageButton('older ▶', hist.page < pages - 1, function () {
        hist.page++; renderHistory();
      }));
    }
  }

  function add(row, cls, text) {
    var span = document.createElement('span');
    span.className = cls;
    span.textContent = text;
    row.appendChild(span);
    return span;
  }

  function pageButton(label, enabled, onClick) {
    var button = document.createElement('button');
    button.className = 'ghost';
    button.textContent = label;
    if (!enabled) {
      button.setAttribute('disabled', 'disabled');
      button.className = 'ghost off';
    } else {
      button.addEventListener('click', onClick);
    }
    return button;
  }

  window.RHC.history = buildHistory;

  window.RHC.live = function (w) {
    state.window = w;
    state.index = 0;
    state.focus = null;

    buildTally(w);
    buildGauges(w);
    applyFocus();

    var list = w.recent || [];
    if (list.length) { tick(); }

    var button = el('lane-toggle');
    if (button && !button._wired) {
      button._wired = true;
      button.addEventListener('click', function () {
        if (state.running) { stop(); } else { start(); }
      });
    }

    if (reduced) {
      var hint = el('lane-hint');
      if (hint) { hint.textContent = 'motion is off because your system asks for reduced motion.'; }
      stop();
    } else {
      start();
    }
  };
})();
