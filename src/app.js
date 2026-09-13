/* src/app.js
 *
 * Loading strategy, and nothing else.
 *
 * The page has to work in two places that behave differently:
 *
 *   opened off disk (file://) — fetch() is blocked by the browser, so the
 *     only data available is the snapshot compiled into data/snapshot.js
 *
 *   served over HTTP (GitHub Pages, any static host) — fetch() works, so a
 *     fresher window can be pulled from data/latest.json
 *
 * So: paint the snapshot immediately, then try to fetch. If the fetch wins,
 * repaint with the newer data. If it fails, the page is already useful and
 * the badge says SNAPSHOT rather than pretending to be live.
 *
 * No storage, no cookies, no analytics. One optional refresh timer.
 */
(function () {
  'use strict';

  var REFRESH_MS = 5 * 60 * 1000;

  function paint(win, mode) {
    try {
      window.RHC.render(win, mode);
    } catch (err) {
      window.RHC.renderEmpty('Could not render this window: ' + err.message);
    }
  }

  function valid(win) {
    return win && typeof win === 'object' && typeof win.launches === 'number';
  }

  function loadHistory() {
    fetch('data/history.json', { cache: 'no-store' })
      .then(function (res) { return res.ok ? res.json() : []; })
      .then(function (list) {
        if (window.RHC.history) { window.RHC.history(list); }
      })
      .catch(function () {
        /* Absent on file:// and before the first run. The section says so
         * itself rather than the page pretending the archive is empty. */
        if (window.RHC.history) { window.RHC.history([]); }
      });
  }

  function load(initial) {
    return fetch('data/latest.json', { cache: 'no-store' })
      .then(function (res) {
        if (!res.ok) { throw new Error('HTTP ' + res.status); }
        return res.json();
      })
      .then(function (win) {
        if (!valid(win)) { throw new Error('unexpected shape'); }
        paint(win, 'live');
        return true;
      })
      .catch(function () {
        /* Expected on file://, and expected before the collector has ever
         * run. Neither is an error worth shouting about: fall back quietly
         * and let the badge carry the truth. */
        if (initial) {
          if (valid(window.RHC_SNAPSHOT)) {
            paint(window.RHC_SNAPSHOT, 'snapshot');
          } else {
            window.RHC.renderEmpty(
              'No window has been collected yet. Run scripts/bootstrap-baseline.mjs ' +
              'then scripts/collect.mjs, or open this page over HTTP rather than from disk.'
            );
          }
        }
        return false;
      });
  }

  function start() {
    if (valid(window.RHC_SNAPSHOT)) {
      paint(window.RHC_SNAPSHOT, 'snapshot');
    }
    load(true);
    loadHistory();
    setInterval(function () { load(false); loadHistory(); }, REFRESH_MS);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
