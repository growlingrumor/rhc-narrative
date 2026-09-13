import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

/* Load the browser file the way the browser does, with a window to hang on. */
function loadMascot() {
  const scope = { matchMedia: () => ({ matches: true }) };
  const document = {
    createElementNS: () => ({
      setAttribute() {}, appendChild() {}, style: {},
      classList: { add() {}, remove() {}, toggle() {} },
      getAttribute: () => null, textContent: ''
    })
  };
  const source = fs.readFileSync(path.join(ROOT, 'src', 'mascot.js'), 'utf8');
  new Function('window', 'document', source)(scope, document);
  return scope.RHC.mascot;
}

const mascot = loadMascot();

test('every character is drawn on the same grid', () => {
  /* One short row and the face tears: a cell would read a character from the
   * wrong column, or none at all. Cheaper to assert than to notice by eye. */
  const { w, h } = mascot._size;
  for (const [name, rows] of Object.entries(mascot._shapes)) {
    assert.equal(rows.length, h, `${name} has ${rows.length} rows, expected ${h}`);
    rows.forEach((row, i) => {
      assert.equal(row.length, w, `${name} row ${i} is ${row.length} wide, expected ${w}`);
    });
  }
});

test('every character has two eyes and a mouth', () => {
  for (const [name, rows] of Object.entries(mascot._shapes)) {
    const body = rows.join('');
    assert.ok(body.split('O').length - 1 >= 4, `${name} is missing eyes`);
    assert.ok(body.includes('M'), `${name} is missing a mouth`);
    assert.ok(body.split('X').length - 1 > 60, `${name} has too little body to read as a face`);
  }
});

test('shape maps use only known characters', () => {
  for (const [name, rows] of Object.entries(mascot._shapes)) {
    for (const row of rows) {
      assert.match(row, /^[.XOM]+$/, `${name} contains an unknown character: ${row}`);
    }
  }
});

test('there is more than one character to morph between', () => {
  assert.ok(Object.keys(mascot._shapes).length >= 2);
});
