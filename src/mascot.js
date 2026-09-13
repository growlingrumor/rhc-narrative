/* src/mascot.js
 *
 * The face. Six characters drawn on one 16x13 grid, every square a real
 * pixel, every square its own shade.
 *
 * The grid is built once and never rebuilt. Morphing between characters is
 * done by re-dressing the same 208 rects — each one fades to its new state
 * with a delay taken from its distance to the centre, so the face rebuilds
 * itself as a wave rather than cutting between two stamps.
 *
 * API: mount(host), react(found), crown(on)
 */
(function () {
  'use strict';

  var W = 16;
  var H = 13;

  /* . empty   X body   O eye   M mouth */
  var SHAPES = {
    blob: [
      '....XXXXXXXX....',
      '..XXXXXXXXXXXX..',
      '.XXXXXXXXXXXXXX.',
      'XXXXXXXXXXXXXXXX',
      'XXXXXXXXXXXXXXXX',
      'XXXOOXXXXXXOOXXX',
      'XXXOOXXXXXXOOXXX',
      'XXXXXXXXXXXXXXXX',
      'XXXXXXMMMMXXXXXX',
      'XXXXXXXXXXXXXXXX',
      '.XXXXXXXXXXXXXX.',
      '..XXXXXXXXXXXX..',
      '....XXXXXXXX....'
    ],
    cat: [
      '..XX........XX..',
      '..XXX......XXX..',
      '..XXXXXXXXXXXX..',
      '.XXXXXXXXXXXXXX.',
      'XXXXXXXXXXXXXXXX',
      'XXXOOXXXXXXOOXXX',
      'XXXOOXXXXXXOOXXX',
      'XXXXXXXMMXXXXXXX',
      'XXXXXMMMMMMXXXXX',
      'XXXXXXXXXXXXXXXX',
      '.XXXXXXXXXXXXXX.',
      '..XXXXXXXXXXXX..',
      '...XXXXXXXXXX...'
    ],
    dog: [
      '....XXXXXXXX....',
      '..XXXXXXXXXXXX..',
      'XXXXXXXXXXXXXXXX',
      'XXXXXXXXXXXXXXXX',
      'XXXXXXXXXXXXXXXX',
      'XXXOOXXXXXXOOXXX',
      'XXXOOXXXXXXOOXXX',
      'XXXXXXXMMXXXXXXX',
      'XXXXXXMMMMXXXXXX',
      'XXXXXXXXXXXXXXXX',
      'XX.XXXXXXXXXX.XX',
      'XX..XXXXXXXX..XX',
      '.....XXXXXX.....'
    ],
    human: [
      '...XXXXXXXXXX...',
      '..XXXXXXXXXXXX..',
      '..XXXXXXXXXXXX..',
      '..XXXXXXXXXXXX..',
      '..XXXXXXXXXXXX..',
      '..XXOOXXXXOOXX..',
      '..XXOOXXXXOOXX..',
      '..XXXXXXXXXXXX..',
      '..XXXMMMMMMXX...',
      '..XXXXXXXXXXXX..',
      '...XXXXXXXXXX...',
      '.....XXXXXX.....',
      'XXXXXXXXXXXXXXXX'
    ],
    ghost: [
      '....XXXXXXXX....',
      '..XXXXXXXXXXXX..',
      '.XXXXXXXXXXXXXX.',
      'XXXXXXXXXXXXXXXX',
      'XXXXXXXXXXXXXXXX',
      'XXOOXXXXXXXXOOXX',
      'XXOOXXXXXXXXOOXX',
      'XXXXXXXXXXXXXXXX',
      'XXXXXMMMMMMXXXXX',
      'XXXXXXXXXXXXXXXX',
      'XXXXXXXXXXXXXXXX',
      'XX.XX.XXXX.XX.XX',
      'X...X..XX..X...X'
    ],
    robot: [
      '.......XX.......',
      '.......XX.......',
      '.XXXXXXXXXXXXXX.',
      '.XXXXXXXXXXXXXX.',
      '.XXXXXXXXXXXXXX.',
      '.XXOOXXXXXXOOXX.',
      '.XXOOXXXXXXOOXX.',
      '.XXXXXXXXXXXXXX.',
      '.XXXMMMMMMMMXXX.',
      '.XXXXXXXXXXXXXX.',
      '.XXXXXXXXXXXXXX.',
      '.XX.XXXXXXXX.XX.',
      '.XX..........XX.'
    ]
  };

  var NAMES = Object.keys(SHAPES);

  /* Every square picks its own hue. Weighted so one colour leads and the
   * others read as texture, otherwise the face turns into confetti and stops
   * reading as a face at all. */
  var TONES = [
    'var(--green)', 'var(--green)', 'var(--green)',
    'var(--orange)', 'var(--orange)',
    'var(--teal)', 'var(--teal)',
    'var(--blue)', 'var(--blue)',
    'var(--violet)',
    'var(--yellow)',
    'var(--red)',
    'var(--green-dim)', 'var(--green-deep)', 'var(--gold-dark)'
  ];

  var SIZE = 6;
  var GAP = 1;

  var state = {
    svg: null,
    cells: [],
    current: 'blob',
    reduced: false,
    blinkTimer: null,
    morphTimer: null,
    blinking: false
  };

  function tone() { return TONES[Math.floor(Math.random() * TONES.length)]; }

  function build(host) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 ' + W * (SIZE + GAP) + ' ' + H * (SIZE + GAP));
    svg.setAttribute('class', 'mascot-svg');
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', 'pixel face');

    var cx = (W - 1) / 2;
    var cy = (H - 1) / 2;

    for (var y = 0; y < H; y++) {
      for (var x = 0; x < W; x++) {
        var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x', x * (SIZE + GAP));
        rect.setAttribute('y', y * (SIZE + GAP));
        rect.setAttribute('width', SIZE);
        rect.setAttribute('height', SIZE);
        rect.setAttribute('class', 'px');

        /* Distance from the centre drives the morph delay, so the shape
         * changes outward from the middle. */
        var distance = Math.sqrt(Math.pow(x - cx, 2) + Math.pow(y - cy, 2));
        state.cells.push({ node: rect, x: x, y: y, delay: Math.round(distance * 34) });
        svg.appendChild(rect);
      }
    }

    host.textContent = '';
    host.appendChild(svg);
    state.svg = svg;
  }

  function dress(shapeName, animate) {
    var map = SHAPES[shapeName];
    if (!map) { return; }
    state.current = shapeName;

    for (var i = 0; i < state.cells.length; i++) {
      var cell = state.cells[i];
      var ch = map[cell.y].charAt(cell.x);
      var node = cell.node;

      node.style.transitionDelay = (animate && !state.reduced) ? cell.delay + 'ms' : '0ms';

      if (ch === '.') {
        node.style.opacity = '0';
        node.style.fill = 'transparent';
        continue;
      }

      node.style.opacity = '1';
      if (ch === 'O') {
        node.style.fill = 'var(--bg)';
        node.setAttribute('data-part', 'eye');
      } else if (ch === 'M') {
        node.style.fill = 'var(--gold-dark)';
        node.setAttribute('data-part', 'mouth');
      } else {
        /* Fresh tone per cell on every morph: the face is never the same
         * twice, which is the point. */
        node.style.fill = tone();
        node.setAttribute('data-part', 'body');
      }
    }
  }

  function morph() {
    var next = state.current;
    while (next === state.current) {
      next = NAMES[Math.floor(Math.random() * NAMES.length)];
    }
    dress(next, true);
    scheduleMorph();
  }

  function scheduleMorph() {
    clearTimeout(state.morphTimer);
    state.morphTimer = setTimeout(morph, 2200 + Math.random() * 2200);
  }

  function setEyes(open) {
    for (var i = 0; i < state.cells.length; i++) {
      var node = state.cells[i].node;
      if (node.getAttribute('data-part') !== 'eye') { continue; }
      node.style.transitionDelay = '0ms';
      node.style.fill = open ? 'var(--bg)' : 'var(--border-lit)';
    }
  }

  function blink() {
    if (state.reduced) { return; }
    state.blinking = true;
    setEyes(false);
    setTimeout(function () {
      setEyes(true);
      state.blinking = false;
    }, 120);
    scheduleBlink();
  }

  /* Irregular gaps: a face blinking on a fixed beat reads as a metronome. */
  function scheduleBlink() {
    clearTimeout(state.blinkTimer);
    state.blinkTimer = setTimeout(blink, 2600 + Math.random() * 4200);
  }

  window.RHC = window.RHC || {};
  window.RHC.mascot = {
    mount: function (host) {
      if (!host) { return; }
      state.reduced = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      build(host);
      dress('blob', false);

      if (!state.reduced) {
        scheduleBlink();
        scheduleMorph();
      }
    },

    /* Fires when the lane finds a countable word. Brief, and never while
     * blinking, so the two do not fight over the eyes. */
    react: function (found) {
      if (state.reduced || !state.svg) { return; }
      state.svg.classList.add(found ? 'ate' : 'shrug');
      setTimeout(function () {
        state.svg.classList.remove('ate');
        state.svg.classList.remove('shrug');
      }, 420);
    },

    crown: function (on) {
      if (!state.svg) { return; }
      state.svg.classList.toggle('crowned', !!on);
    },

    /* Exposed so the shape maps can be checked by a test rather than by eye. */
    _shapes: SHAPES,
    _size: { w: W, h: H }
  };
})();
