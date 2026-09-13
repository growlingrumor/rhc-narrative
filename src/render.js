/* src/render.js
 *
 * Turns one window object into DOM. No fetching, no timers, no state of its
 * own: hand it a window and it paints. Kept separate from app.js so the
 * loading logic and the drawing logic can be read independently.
 */
(function () {
  'use strict';

  var mounted = false;

  function el(id) { return document.getElementById(id); }

  /* One sweep of the strip whenever a window is painted, so an update is
   * visible instead of numbers silently changing under the reader. */
  function sweep() {
    var strip = el('scanstrip');
    if (!strip) { return; }
    strip.classList.remove('sweep');
    void strip.offsetWidth;
    strip.classList.add('sweep');
  }
  function txt(node, value) { if (node) { node.textContent = value; } }

  function group(n) {
    return typeof n === 'number' ? n.toLocaleString('en-US') : '—';
  }

  function ago(iso) {
    var then = Date.parse(iso);
    if (!isFinite(then)) { return 'never'; }
    var mins = Math.round((Date.now() - then) / 60000);
    if (mins < 1) { return 'just now'; }
    if (mins === 1) { return '1 minute ago'; }
    if (mins < 60) { return mins + ' minutes ago'; }
    var hrs = Math.round(mins / 60);
    return hrs === 1 ? '1 hour ago' : hrs + ' hours ago';
  }

  function shortAddr(a) {
    if (!a || a.length < 12) { return a || '—'; }
    return a.slice(0, 6) + '…' + a.slice(-4);
  }

  /* ------------------------------------------------------------ status */
  function status(w, mode) {
    var badge = el('badge');
    var age = Date.now() - Date.parse(w.closed_at || 0);
    var stale = !(age < 20 * 60 * 1000);

    if (w.demo) {
      badge.className = 'badge stale';
      badge.textContent = 'DEMO DATA';
    } else {
      badge.className = 'badge ' + (mode === 'empty' ? 'empty' : (stale ? 'stale' : 'live'));
      badge.textContent = mode === 'empty' ? 'NO DATA'
        : (mode === 'snapshot' ? 'SNAPSHOT' : 'LIVE');
    }

    txt(el('st-updated'), w.closed_at ? ago(w.closed_at) : '—');
    txt(el('st-block'), w.head_block ? group(w.head_block) : '—');
    txt(el('st-window'), (w.window_hours || 1) + 'h');
    txt(el('st-launches'), group(w.launches));
    txt(el('st-deployers'), group(w.deployers));
    txt(el('foot-source'), 'source: ' + (w.source || 'unknown'));
  }

  /* -------------------------------------------------------------- hero */
  function hero(w) {
    var word = el('hero-word');
    var read = el('hero-read');
    var note = el('hero-note');

    var top = w.top && w.top.state === 'WAVE' ? w.top : null;

    if (!top) {
      word.className = 'word none';
      word.textContent = 'no narrative this hour';
      read.innerHTML = '';
      read.textContent = w.launches
        ? 'read ' + group(w.launches) + ' new tokens. no word beat its normal rate by enough, from enough separate wallets.'
        : 'no tokens were created in this window.';
      note.textContent = 'that is a normal result. most hours do not carry one.';
      return;
    }

    word.className = 'word';
    word.textContent = top.root;

    read.innerHTML = '';
    read.appendChild(document.createTextNode('appeared in '));
    read.appendChild(strong(group(top.launches) + ' of ' + group(w.launches) + ' new tokens'));
    read.appendChild(document.createTextNode(' this hour, from '));
    read.appendChild(strong(group(top.deployers) + ' separate wallets'));
    read.appendChild(document.createTextNode(' — that is '));
    read.appendChild(strong(top.multiple + '× its normal rate'));
    read.appendChild(document.createTextNode('.'));

    note.textContent = 'normally this word appears in ' +
      (top.baseline_share * 100).toFixed(2) + '% of launches.';
  }

  function strong(s) {
    var em = document.createElement('em');
    em.textContent = s;
    return em;
  }

  /* ------------------------------------------------------------- table */
  function rows(w) {
    var body = el('rows');
    body.textContent = '';

    if (!w.rows || !w.rows.length) {
      var tr = document.createElement('tr');
      var td = document.createElement('td');
      td.colSpan = 7;
      td.className = 'reason';
      td.textContent = 'no words counted in this window.';
      tr.appendChild(td);
      body.appendChild(tr);
      return;
    }

    w.rows.forEach(function (r) {
      var tr = document.createElement('tr');
      tr.className = String(r.state || '').toLowerCase();

      cell(tr, r.root, 'root');
      cell(tr, group(r.launches), 'num');
      cell(tr, group(r.deployers), 'num');
      cell(tr, (r.baseline_share * 100).toFixed(2) + '%', 'num hide-s');
      cell(tr, r.multiple + '×', 'num');

      var st = document.createElement('td');
      var span = document.createElement('span');
      span.className = 'state ' + r.state;
      span.textContent = r.state;
      st.appendChild(span);
      tr.appendChild(st);

      cell(tr, r.reason || '', 'reason hide-s');
      body.appendChild(tr);
    });
  }

  function cell(tr, value, cls) {
    var td = document.createElement('td');
    if (cls) { td.className = cls; }
    td.appendChild(document.createTextNode(value));
    tr.appendChild(td);
    return td;
  }

  function counts(w) {
    var shown = (w.rows || []).length;
    var total = w.roots || shown;
    txt(el('rows-count'), total > shown
      ? 'showing the top ' + group(shown) + ' of ' + group(total) + ' distinct words counted this hour'
      : group(total) + ' distinct words counted this hour');

    var feedShown = (w.recent || []).length;
    var caption = 'the raw input. matched words are highlighted.';
    if (w.launches > feedShown) {
      caption = 'the latest ' + group(feedShown) + ' of ' + group(w.launches) +
        ' tokens read this hour. matched words are highlighted.';
    }
    txt(el('feed-count'), caption);
  }

  /* -------------------------------------------------------------- feed */
  function feed(w) {
    var box = el('feed');
    box.textContent = '';

    if (!w.recent || !w.recent.length) {
      var p = document.createElement('p');
      p.className = 'caption';
      p.textContent = 'no tokens created in this window.';
      box.appendChild(p);
      return;
    }

    /* Highlight any word that the table reported as a live narrative. */
    var live = {};
    (w.rows || []).forEach(function (r) {
      if (r.state === 'WAVE' || r.state === 'MERGED') {
        String(r.root).split('-').forEach(function (part) { live[part] = true; });
      }
    });

    var d = window.RHC && window.RHC.detect;

    w.recent.forEach(function (t) {
      var row = document.createElement('div');
      row.className = 'row';
      /* The roots this token actually produced, from the same tokenizer the
       * counter uses, so filtering by a word cannot disagree with the count. */
      if (d) {
        row.setAttribute('data-roots', d.tokenize(t.name || '', t.symbol || '').join(' '));
      }

      var time = document.createElement('span');
      time.className = 'time';
      time.textContent = t.ts ? String(t.ts).slice(11, 16) : '—';
      row.appendChild(time);

      var name = document.createElement('span');
      name.className = 'name';
      highlight(name, t.name || '(unnamed)', live);
      row.appendChild(name);

      var sym = document.createElement('span');
      sym.className = 'sym';
      sym.textContent = t.symbol || '';
      row.appendChild(sym);

      var who = document.createElement('span');
      who.className = 'who';
      who.textContent = shortAddr(t.deployer);
      row.appendChild(who);

      box.appendChild(row);
    });
  }

  /* Splits on the same boundaries the tokenizer uses, so what is highlighted
   * is exactly what was counted. */
  function highlight(node, text, live) {
    var parts = String(text).split(/([^A-Za-z0-9]+)/);
    parts.forEach(function (part) {
      var key = window.RHC && window.RHC.detect
        ? window.RHC.detect.fold(part.toLowerCase())
        : part.toLowerCase();
      if (live[key]) {
        var mark = document.createElement('mark');
        mark.textContent = part;
        node.appendChild(mark);
      } else {
        node.appendChild(document.createTextNode(part));
      }
    });
  }

  /* ------------------------------------------------------------ config */
  function config(w) {
    var dl = el('config');
    dl.textContent = '';
    var c = w.config || (window.RHC && window.RHC.detect.CONFIG) || {};

    var pairs = [
      ['window', (w.window_hours || 1) + ' hour'],
      ['must beat its normal rate by', c.baseline_multiple + '×'],
      ['minimum separate launches', c.min_launches],
      ['minimum separate wallets', c.min_deployers],
      ['merge words that co-occur above', Math.round((c.cooccurrence || 0) * 100) + '%'],
      ['normal rate measured over', (w.baseline_days || c.baseline_days) + ' days'],
      ['words counted per launch, max', c.roots_per_launch_max]
    ];

    pairs.forEach(function (p) {
      var dt = document.createElement('dt');
      dt.textContent = p[0];
      var dd = document.createElement('dd');
      dd.textContent = p[1];
      dl.appendChild(dt);
      dl.appendChild(dd);
    });
  }

  /* ------------------------------------------------------------ warning */
  function warning(w) {
    var slot = el('warn-slot');
    slot.textContent = '';
    var messages = [];

    if (w.demo) {
      messages.push(
        'This is example data, shipped so the page has something to show before ' +
        'you run the collector. Nothing below was read from the chain. Run ' +
        'scripts/bootstrap-baseline.mjs then scripts/collect.mjs to replace it.'
      );
    }
    if (w.demo !== true && w.baseline_ready === false) {
      messages.push(
        'No baseline yet. Without a record of what is normal, every word looks ' +
        'like a spike. Run scripts/bootstrap-baseline.mjs before trusting anything below.'
      );
    }
    if (w.complete === false) {
      messages.push(
        'This window is incomplete: the collector hit its page ceiling before ' +
        'reaching the start of the hour. Counts below are a floor, not a total.'
      );
    }

    messages.forEach(function (m) {
      var div = document.createElement('div');
      div.className = 'warn';
      div.textContent = m;
      slot.appendChild(div);
    });
  }

  window.RHC = window.RHC || {};
  window.RHC.render = function (w, mode) {
    if (window.RHC.mascot && !mounted) {
      window.RHC.mascot.mount(el('mascot'));
      mounted = true;
    }
    sweep();
    status(w, mode);
    warning(w);
    hero(w);
    rows(w);
    counts(w);
    feed(w);
    config(w);
    if (window.RHC.mascot) {
      window.RHC.mascot.crown(!!(w.top && w.top.state === 'WAVE'));
    }
    if (window.RHC.live) { window.RHC.live(w); }
  };

  window.RHC.renderEmpty = function (reason) {
    status({ closed_at: null }, 'empty');
    var word = el('hero-word');
    word.className = 'word none';
    word.textContent = 'no data yet';
    txt(el('hero-read'), reason);
    txt(el('hero-note'), '');
    el('rows').textContent = '';
    config({});
  };
})();
