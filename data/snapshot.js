/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-14T06:18:56.000Z",
    "opened_at": "2026-10-14T05:18:56.000Z",
    "window_hours": 1,
    "head_block": 88146301,
    "start_block": 88110728,
    "blocks_scanned": 35573,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 402,
    "unnamed_contracts": 0,
    "via_factory": 369,
    "no_receipt": 0,
    "candidates": 402,
    "mint_events": 19227,
    "deployers": 263,
    "roots": 526,
    "cleared_multiple": 526,
    "failed_gates": 516,
    "baseline_ready": false,
    "baseline_days": 0,
    "config": {
      "window_minutes": 60,
      "baseline_days": 14,
      "baseline_multiple": 6,
      "min_launches": 5,
      "min_deployers": 6,
      "cooccurrence": 0.6,
      "floor_share": 0.0004,
      "roots_per_launch_max": 3,
      "root_min_length": 2,
      "root_max_length": 14
    },
    "themes": [
      "ai",
      "knightcore-oath",
      "nft",
      "positions",
      "robinhood",
      "saindra",
      "uniswap-uni",
      "usdg"
    ],
    "top": {
      "root": "robinhood",
      "launches": 25,
      "deployers": 16,
      "baseline_share": 0.0004,
      "multiple": 155.5,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "robinhood",
        "launches": 25,
        "deployers": 16,
        "baseline_share": 0.0004,
        "multiple": 155.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nft",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 68.4,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 62.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 10,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 62.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "saindra",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 49.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "ai",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 37.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 21,
        "deployers": 21,
        "baseline_share": 0.0004,
        "multiple": 130.6,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 81%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 17,
        "deployers": 17,
        "baseline_share": 0.0004,
        "multiple": 105.7,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 81%, merged to uniswap-uni"
      },
      {
        "root": "knightcore",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 49.8,
        "state": "MERGED",
        "reason": "knightcore + oath co-occur 100%, merged to knightcore-oath"
      },
      {
        "root": "oath",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 49.8,
        "state": "MERGED",
        "reason": "knightcore + oath co-occur 100%, merged to knightcore-oath"
      },
      {
        "root": "net",
        "launches": 7,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 43.5,
        "state": "THIN",
        "reason": "net: 4 deployers < 6 required"
      },
      {
        "root": "staked",
        "launches": 6,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 37.3,
        "state": "THIN",
        "reason": "staked: 3 deployers < 6 required"
      },
      {
        "root": "agent",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 31.1,
        "state": "THIN",
        "reason": "agent: 5 deployers < 6 required"
      },
      {
        "root": "altai",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 31.1,
        "state": "THIN",
        "reason": "altai: 4 deployers < 6 required"
      },
      {
        "root": "black",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 31.1,
        "state": "THIN",
        "reason": "black: 4 deployers < 6 required"
      },
      {
        "root": "dividend",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 31.1,
        "state": "THIN",
        "reason": "dividend: 5 deployers < 6 required"
      },
      {
        "root": "dog",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 31.1,
        "state": "THIN",
        "reason": "dog: 5 deployers < 6 required"
      },
      {
        "root": "give",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 31.1,
        "state": "THIN",
        "reason": "give: 5 deployers < 6 required"
      },
      {
        "root": "heads",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 31.1,
        "state": "THIN",
        "reason": "heads: 1 deployers < 6 required"
      },
      {
        "root": "hop",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 31.1,
        "state": "THIN",
        "reason": "hop: 1 deployers < 6 required"
      },
      {
        "root": "hopheads",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 31.1,
        "state": "THIN",
        "reason": "hopheads: 1 deployers < 6 required"
      },
      {
        "root": "ishares",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 31.1,
        "state": "THIN",
        "reason": "ishares: 4 deployers < 6 required"
      },
      {
        "root": "never",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 31.1,
        "state": "THIN",
        "reason": "never: 5 deployers < 6 required"
      },
      {
        "root": "volatile",
        "launches": 5,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 31.1,
        "state": "THIN",
        "reason": "volatile: 2 deployers < 6 required"
      },
      {
        "root": "claudia",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 24.9,
        "state": "THIN",
        "reason": "claudia: 4 launches < 5 required"
      },
      {
        "root": "ios",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 24.9,
        "state": "THIN",
        "reason": "ios: 4 launches < 5 required"
      },
      {
        "root": "lala",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 24.9,
        "state": "THIN",
        "reason": "lala: 4 launches < 5 required"
      },
      {
        "root": "long",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 24.9,
        "state": "THIN",
        "reason": "long: 4 launches < 5 required"
      },
      {
        "root": "minimum",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 24.9,
        "state": "THIN",
        "reason": "minimum: 4 launches < 5 required"
      },
      {
        "root": "ramses",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 24.9,
        "state": "THIN",
        "reason": "ramses: 4 launches < 5 required"
      },
      {
        "root": "roaring",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 24.9,
        "state": "THIN",
        "reason": "roaring: 4 launches < 5 required"
      },
      {
        "root": "shiba",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.9,
        "state": "THIN",
        "reason": "shiba: 4 launches < 5 required"
      },
      {
        "root": "tiger",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.9,
        "state": "THIN",
        "reason": "tiger: 4 launches < 5 required"
      },
      {
        "root": "untaxed",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 24.9,
        "state": "THIN",
        "reason": "untaxed: 4 launches < 5 required"
      },
      {
        "root": "viable",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 24.9,
        "state": "THIN",
        "reason": "viable: 4 launches < 5 required"
      },
      {
        "root": "wallet",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 24.9,
        "state": "THIN",
        "reason": "wallet: 4 launches < 5 required"
      },
      {
        "root": "agency",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.7,
        "state": "THIN",
        "reason": "agency: 3 launches < 5 required"
      },
      {
        "root": "alphabet",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 18.7,
        "state": "THIN",
        "reason": "alphabet: 3 launches < 5 required"
      },
      {
        "root": "anycode",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 18.7,
        "state": "THIN",
        "reason": "anycode: 3 launches < 5 required"
      },
      {
        "root": "arcus",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.7,
        "state": "THIN",
        "reason": "arcus: 3 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x699807a668e335df8e71ff4295fb24946bf2594e",
        "name": "Diamond Hand",
        "symbol": "DH",
        "deployer": "0x1cc5c99b6c33d988a7445622cd232feae8d1df9a",
        "block": 88146202,
        "ts": "2026-10-14T06:18:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3409b9342be278295d41424673ab1a68a45018c3",
        "name": "Knightcore",
        "symbol": "OATH",
        "deployer": "0x8c1a3314605a5004cf67dbf8a015169b1cea4faf",
        "block": 88146078,
        "ts": "2026-10-14T06:18:34.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xddddb1f3d70b9ffca0d7525e554ecc02c0a386ea",
        "name": "Coinbase Wrapped BTC",
        "symbol": "cbBTC",
        "deployer": "0xac7a72d8938aa25789d8a6c9f59a629addfa7fd6",
        "block": 88145958,
        "ts": "2026-10-14T06:18:22.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x6b37f73722dc9ac9c369e9086fcdf3ba37717777",
        "name": "named.fun",
        "symbol": "NMD",
        "deployer": "0xcffe5e089f58a0e157ed9c4af634d3400ab6a967",
        "block": 88145825,
        "ts": "2026-10-14T06:18:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7e12caed085eb9e80d893a8da3023cd7f8c94dcd",
        "name": "Saindra",
        "symbol": "SAINDRA",
        "deployer": "0x3b3db4e8f316801db690ee52d3ce7faa2f543b12",
        "block": 88145744,
        "ts": "2026-10-14T06:18:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xce4827f6668ca259d5f43e1f5d38b9ad358aac5d",
        "name": "Calvary",
        "symbol": "CALVARYAI",
        "deployer": "0xb60949d9001e3d2433fb034e4eb087423c02055d",
        "block": 88145391,
        "ts": "2026-10-14T06:17:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7bc81b903f943d0a51d8f5bf881018338bdb639f",
        "name": "Saindra",
        "symbol": "SAINDRA",
        "deployer": "0xe243d2de1988ff91937bd8e0d670420a2c821377",
        "block": 88145088,
        "ts": "2026-10-14T06:16:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x34de29ebb65337c648d4dc2774738faab8db7777",
        "name": "4faily",
        "symbol": "4FAILY",
        "deployer": "0xfe2cb6b8c284d632390268d8007873ac5865db0b",
        "block": 88145017,
        "ts": "2026-10-14T06:16:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe9126b5e51b477a9a26a61ec8bb914ec9265a931",
        "name": "XSDG",
        "symbol": "XSDG",
        "deployer": "0x4337e1a2689cf73ecc12d798477e1ede4f4d56c6",
        "block": 88144918,
        "ts": "2026-10-14T06:16:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9e8b46e478bff5265bb5a609fb8be9460afe7777",
        "name": "The Circle Of Life",
        "symbol": "The Muse King",
        "deployer": "0x498b1bee7a146a4d10514f2d8eb1201b447ad384",
        "block": 88144666,
        "ts": "2026-10-14T06:16:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4db50a671c5acd0803f3623a950caa09d3d71e18",
        "name": "AnyCode",
        "symbol": "CODE",
        "deployer": "0xf7093908040391c187f7644c4e42f7fe6f76cc88",
        "block": 88144649,
        "ts": "2026-10-14T06:16:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf740b7b89c19e3ef6a1963d673c5f2b4b47d7919",
        "name": "Sherwood Wrapped Zcash",
        "symbol": "wZEC",
        "deployer": "0x3972bb95df1d18a214dd502d1d777d97a0744815",
        "block": 88144338,
        "ts": "2026-10-14T06:15:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd323f3774c3ee0894018de171b0c8acefd6cd8fb",
        "name": "Wrapped D-Wave Quantum • Robinhood Token",
        "symbol": "wQBTS",
        "deployer": "0x4a438c7c4052209b71cc403f28b9976300bffbbe",
        "block": 88144334,
        "ts": "2026-10-14T06:15:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd625b3771ab4dd39251617ac84c36aac4a011e18",
        "name": "STOCKMARKET",
        "symbol": "STOCKMARKET",
        "deployer": "0x792dd4c93cfa919e141e6a0be37360373633cdad",
        "block": 88144179,
        "ts": "2026-10-14T06:15:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6558bfeefe134352f5227b245a58128b8bb84d52",
        "name": "VOID",
        "symbol": "VOID",
        "deployer": "0x703a11c044f50811b5590d144eb7807b83a3cca0",
        "block": 88144152,
        "ts": "2026-10-14T06:15:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbd930e8168411a65f74c3659c95f76818a7d9c13",
        "name": "100B 🆙",
        "symbol": "🆙",
        "deployer": "0x43370473d8d9527c84d8cc9464dbbed89085dddf",
        "block": 88144109,
        "ts": "2026-10-14T06:15:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4f1e14a9ffa544bccf65ef2d9df419ae1aa378a7",
        "name": "Knightcore",
        "symbol": "OATH",
        "deployer": "0x9ba0e33ca86a97840a39516138048c3b94950e60",
        "block": 88144009,
        "ts": "2026-10-14T06:15:04.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x93e66a1e62475f0ef77d14572203a694a5c09d3f",
        "name": "thedao.fund",
        "symbol": "thedao",
        "deployer": "0xc106590ad8446f1fbebe915117f8e1952bd260b6",
        "block": 88143971,
        "ts": "2026-10-14T06:15:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd37e4324476ae29a833ed0c10ec4d21dbf210c58",
        "name": "BOUNCE HOUSE",
        "symbol": "BOUNCEHOUSE",
        "deployer": "0xdc51c859fe450aa494c8960f05cab4206f8c80b5",
        "block": 88143762,
        "ts": "2026-10-14T06:14:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x63b924489a18dd6976fa954e8be52cfb9e8bb1b1",
        "name": "Minimum Viable Agent",
        "symbol": "MVA",
        "deployer": "0xcf9348e445af3f45dc197ca5b58cc14a52db75db",
        "block": 88143691,
        "ts": "2026-10-14T06:14:32.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x928082ba1e3c03f51a46fe6c58dd1ee7361cceee",
        "name": "tt",
        "symbol": "TT",
        "deployer": "0x5810a2d01a6618947d6b5de57b14ba27bf693b9c",
        "block": 88143608,
        "ts": "2026-10-14T06:14:23.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x14c49e6118f46525de9ab41a51cbaa3c6ebf181d",
        "name": "Rare Friends Generations",
        "symbol": "GENERATIONS",
        "deployer": "0xb5e1fb8f78a32877d7d302c136b75dcb4820c28c",
        "block": 88143495,
        "ts": "2026-10-14T06:14:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7899e6d7b1c22ec7537ea3198287543effb89f4f",
        "name": "PRAXEN",
        "symbol": "PRAXEN",
        "deployer": "0xa5c26078c53fe7330d96fb77dab7653d767ffb53",
        "block": 88143433,
        "ts": "2026-10-14T06:14:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x16be2ac2a1847fb7070edd47eac57c639d257777",
        "name": "T3st",
        "symbol": "T3ST",
        "deployer": "0x869772169fe20979dacb65a3c17af00c73db3ccc",
        "block": 88143365,
        "ts": "2026-10-14T06:13:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8e5680b640d2aba9398cb102c92d5f938e292412",
        "name": "Minimum Viable Agent",
        "symbol": "MVA",
        "deployer": "0x5d93de77082e194bbeea3c59f3368a7f41ccd3e5",
        "block": 88142681,
        "ts": "2026-10-14T06:12:50.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x6554253411e8c53ce8c1b273e7add6b00bb2f587",
        "name": "Market Cap",
        "symbol": "MCAP",
        "deployer": "0x4337045b9bc98b68963633ae96b34446a0c8f965",
        "block": 88142623,
        "ts": "2026-10-14T06:12:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4f7aa30873bd447e4dfdf2f2451e9f0a330f7777",
        "name": "Saindra",
        "symbol": "SAINDRA",
        "deployer": "0xddbc55509d92eba026f17f4592074a56507c6f71",
        "block": 88142616,
        "ts": "2026-10-14T06:12:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x530d921edde04f7e1fd5e3c90683456fa42d8aac",
        "name": "Nov9",
        "symbol": "NOV",
        "deployer": "0xd6fdb84e7d45da159df1493add54eea27c375585",
        "block": 88142588,
        "ts": "2026-10-14T06:12:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x56d1effdaa170393bd179b23d651bee4a807774a",
        "name": "Never Give Up",
        "symbol": "NGU",
        "deployer": "0x5a76351ebc73131757a5fbb65e344bb6ae397f5c",
        "block": 88142561,
        "ts": "2026-10-14T06:12:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf6bf5d00f35950f45778c067cc7885f6d92f7f02",
        "name": "PRAXEN",
        "symbol": "PRAXEN",
        "deployer": "0xa5c26078c53fe7330d96fb77dab7653d767ffb53",
        "block": 88142517,
        "ts": "2026-10-14T06:12:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7d080e10248b28f47f0e690fc7f063f2c00c7777",
        "name": "Altai Coin",
        "symbol": "ALTAICOIN",
        "deployer": "0x7485fbfd99993dab4c9964f53791e40d14253c97",
        "block": 88142489,
        "ts": "2026-10-14T06:12:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5d3899bc41a1b219981c4818425177f9ed478cd1",
        "name": "RoxiOS",
        "symbol": "ROXI",
        "deployer": "0x0d90361f34d54d70b443b6b22e64e9cef5c7431d",
        "block": 88142230,
        "ts": "2026-10-14T06:12:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4533d55b88bb957cfd682cf4265e20e8a64f4479",
        "name": "BrownFi V3",
        "symbol": "BF-V3",
        "deployer": "0xf32613dceb3f974029f9e31f2482b2af36948bde",
        "block": 88142221,
        "ts": "2026-10-14T06:12:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf49f006fb92679325024ee2404d835770e4d3bd8",
        "name": "Saindra",
        "symbol": "SAINDRA",
        "deployer": "0xe81b67fb093d341577e06f69c8c4756bd6d54295",
        "block": 88142201,
        "ts": "2026-10-14T06:12:01.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x813323660d4f99e709575c9e2e396a627eff0928",
        "name": "Nexchain AI",
        "symbol": "NEX AI",
        "deployer": "0x4337f1e57afeed45a765216fc961f3dc1afae09f",
        "block": 88142180,
        "ts": "2026-10-14T06:11:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x95af05f08beaffa31f01ef8d27793c662c827777",
        "name": "Assets",
        "symbol": "ASSETS",
        "deployer": "0xa7ba884561771e707f7f29bd5388b77f1e470daf",
        "block": 88142160,
        "ts": "2026-10-14T06:11:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfb053fa1d41f376eef19dd2dede81db0be168a45",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xd51cc8080c8ec02ef473716e9d353b121ea1c761",
        "block": 88141666,
        "ts": "2026-10-14T06:11:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x61c2b9434476852b243c79bcb613c69b314e7777",
        "name": "Canpad",
        "symbol": "CANPAD",
        "deployer": "0x1f0ff2315b0a9fbc8fb41450a7fda72631b15116",
        "block": 88141610,
        "ts": "2026-10-14T06:11:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0eff79bc260ca07c95d258705b40a68991ee061a",
        "name": "Robinhood 100B",
        "symbol": "100B",
        "deployer": "0x43370146366cfea21302962ae3a558d72bbcc487",
        "block": 88141546,
        "ts": "2026-10-14T06:10:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x557f3d7cfca8a0c7c5d4da20b1a05cc0c6c07777",
        "name": "Canpad",
        "symbol": "CANPAD",
        "deployer": "0x87474deeca0b1e00bdd87da2c22e6188c4a646c2",
        "block": 88141543,
        "ts": "2026-10-14T06:10:55.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
