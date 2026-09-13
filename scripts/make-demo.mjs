import fs from 'node:fs';
import detect from '/home/claude/rhc/src/detect.js';

/* A realistically shaped hour. Counts are chosen; every verdict below is
   computed by the real detector, not written by hand. */

const launches = [];
let n = 0;
const add = (name, symbol, deployer) => {
  launches.push({
    name, symbol, deployer,
    address: '0x0000' + String(n).padStart(4, '0'),
    ts: new Date(Date.now() - (n * 19000)).toISOString()
  });
  n++;
};

/* WAVE — rare word, sudden cluster, many separate wallets */
[['Restake Finance','RSTF'],['Liquid Restake','LQR'],['Restake DAO','RDAO'],
 ['restake vault','VLT'],['Super Restake','SUPR'],['restake pool','POOL'],
 ['Restake Labs','LABS'],['Auto Restake','AUTO'],['restake node','NODE'],
 ['Restake One','ONE'],['restake max','MAXR'],['Restake Yield','RYLD']]
  .forEach(([nm, sym], i) => add(nm, sym, '0xwallet' + i));

/* MERGED — two words that keep arriving together */
[['LST Basket','LSTB'],['Basket LST','BLST'],['lst basket pro','PROB'],
 ['LST basket vault','VBSK'],['basket lst index','IDXB'],['LST Basket Two','TWOB'],
 ['basket of lst','OFLB']]
  .forEach(([nm, sym], i) => add(nm, sym, '0xmerge' + i));

/* THIN on wallets — six launches, three wallets */
[['Perp Dex','PDEX'],['perp trade','PTRD'],['Perp Engine','PENG'],
 ['perp max','PMAX'],['Perp One','PONE'],['perp zero','PZRO']]
  .forEach(([nm, sym], i) => add(nm, sym, '0xperp' + (i % 3)));

/* THIN on launches — rare word, only three of them */
[['Zora Mint','ZMNT'],['zora drop','ZDRP'],['Zora Pass','ZPAS']]
  .forEach(([nm, sym], i) => add(nm, sym, '0xzora' + i));

/* BELOW — the most frequent word of the hour, and utterly ordinary */
[['Dog Money','DGMN'],['Space Dog','SPDG'],['dog inu','DGIN'],['Mega Dog','MGDG'],
 ['dog world','DGWD'],['Good Dog','GDDG'],['Dog Star','DGST'],['dog planet','DGPL'],
 ['Laser Dog','LSDG'],['dog king','DGKG'],['Happy Dog','HPDG'],['dog city','DGCT'],
 ['Cyber Dog','CBDG'],['dog island','DGIS'],['Turbo Dog','TBDG'],['dog river','DGRV']]
  .forEach(([nm, sym], i) => add(nm, sym, '0xdog' + i));

/* BELOW — rocket is always around too */
[['Rocket Fuel','RKFL'],['rocket moon','RKMN'],['Rocket Lab','RKLB'],
 ['rocket dawn','RKDW'],['Rocket Pad','RKPD']]
  .forEach(([nm, sym], i) => add(nm, sym, '0xrkt' + i));

/* Background: unique names carrying no repeated word, which is what most
   of an ordinary hour looks like. */
const A = ['amber','iron','velvet','paper','copper','slow','glass','north','red','wild',
  'open','tin','salt','echo','pine','grey','long','first','blue','silver','golden','quiet',
  'hollow','bright','narrow','plain','deep','soft','sharp','quick','still','warm','cold',
  'hidden','distant','early','late','wide','thin','round','square','loose','tight','clear',
  'dark','pale','rough','smooth','heavy','light','fresh','ancient','modern','simple',
  'complex','gentle','fierce','calm','busy','empty','crowded','silent','loud','swift'];
const B = ['fox','gate','road','crane','line','river','tower','star','lantern','garden',
  'field','roof','flats','valley','ridge','matter','shadow','light','harbor','rush','hour',
  'stone','wave','branch','cliff','meadow','pond','trail','bridge','arch','well','fence',
  'barn','mill','pier','dock','lane','court','yard','porch','attic','cellar','window',
  'door','floor','wall','beam','post','rail','step','path','curve','bend','slope','peak',
  'ledge','bank','shore','reef','dune','grove','thicket','clearing','hollow'];

let k = 0;
for (let i = 0; i < 130; i++) {
  const a = A[i % A.length];
  const b = B[(i * 7 + Math.floor(i / B.length)) % B.length];
  const sym = (a.slice(0, 2) + b.slice(0, 2)).toUpperCase() + (i % 10);
  add(a[0].toUpperCase() + a.slice(1) + ' ' + b[0].toUpperCase() + b.slice(1), sym, '0xbg' + (k++));
}

const baseline = {
  days: 14,
  launches_observed: 41200,
  floor_share: detect.CONFIG.floor_share,
  roots: {
    dog: 0.0880, money: 0.0210, space: 0.0180, mega: 0.0120, rocket: 0.0265,
    moon: 0.0240, star: 0.0160, laser: 0.0090, turbo: 0.0080, cyber: 0.0110,
    king: 0.0100, happy: 0.0090, city: 0.0070, planet: 0.0060, world: 0.0130,
    good: 0.0080, island: 0.0050, river: 0.0060, fuel: 0.0040, dawn: 0.0030,
    lab: 0.0070, pad: 0.0040,
    restake: 0.0009, basket: 0.0011, lst: 0.0008, perp: 0.0042, zora: 0.0006,
    yield: 0.0190, vault: 0.0150, pool: 0.0140, node: 0.0090, auto: 0.0080
  }
};

const r = detect.run(launches, baseline);

const win = {
  schema: 1,
  demo: true,
  chain: 'robinhood',
  chain_id: 4663,
  closed_at: new Date().toISOString(),
  opened_at: new Date(Date.now() - 3600000).toISOString(),
  window_hours: 1,
  head_block: 18446201,
  source: 'example data, not the chain',
  complete: true,
  launches: launches.length,
  unnamed_contracts: 12,
  deployers: new Set(launches.map((l) => l.deployer)).size,
  roots: r.roots,
  cleared_multiple: r.cleared_multiple,
  failed_gates: r.failed_gates,
  baseline_ready: true,
  baseline_days: 14,
  config: detect.CONFIG,
  themes: r.themes,
  top: r.rows.find((x) => x.state === 'WAVE') || null,
  rows: detect.displayOrder(r.rows).slice(0, 40),
  recent: launches.slice(0, 40)
};

fs.writeFileSync('/home/claude/rhc/data/snapshot.js',
  '/* data/snapshot.js — EXAMPLE DATA.\n' +
  ' * Shipped so the page renders before the collector has ever run.\n' +
  ' * Overwritten with real chain data by scripts/collect.mjs.\n' +
  ' */\n;(function (scope) {\n  scope.RHC_SNAPSHOT = ' +
  JSON.stringify(win, null, 2).replace(/\n/g, '\n  ') +
  ';\n})(typeof window !== \'undefined\' ? window : globalThis);\n');

fs.writeFileSync('/home/claude/rhc/data/latest.json', JSON.stringify(win, null, 2));

console.log('launches:', win.launches, '| deployers:', win.deployers, '| roots:', win.roots);
console.log('top:', win.top.root, win.top.multiple + 'x', win.top.launches + ' launches', win.top.deployers + ' wallets');
console.log('themes:', win.themes.join(', ') || '(none)');
const by = (s) => r.rows.filter((x) => x.state === s);
console.log('WAVE', by('WAVE').length, '| MERGED', by('MERGED').length,
  '| THIN', by('THIN').length, '| BELOW', by('BELOW').length);
console.log('\nfirst 12 rows:');
detect.displayOrder(r.rows).slice(0, 12).forEach((x) => console.log(
  '  ' + x.root.padEnd(14), String(x.launches).padStart(3), 'launches',
  String(x.deployers).padStart(3), 'wallets', (x.multiple + 'x').padStart(9), x.state.padEnd(7), x.reason));
