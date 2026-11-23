/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-23T22:17:44.000Z",
    "opened_at": "2026-11-23T21:17:44.000Z",
    "window_hours": 1,
    "head_block": 121751720,
    "start_block": 121718466,
    "blocks_scanned": 33254,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 278,
    "unnamed_contracts": 5,
    "via_factory": 270,
    "no_receipt": 0,
    "candidates": 283,
    "mint_events": 32014,
    "deployers": 164,
    "roots": 385,
    "cleared_multiple": 252,
    "failed_gates": 249,
    "baseline_ready": true,
    "baseline_days": 14,
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
      "huang",
      "nvidia",
      "pepe"
    ],
    "top": {
      "root": "huang",
      "launches": 6,
      "deployers": 6,
      "baseline_share": 0.0004,
      "multiple": 54,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "pepe",
        "launches": 14,
        "deployers": 14,
        "baseline_share": 0.0021,
        "multiple": 24,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nvidia",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0019,
        "multiple": 13.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "huang",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 54,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "robinhood",
        "launches": 22,
        "deployers": 10,
        "baseline_share": 0.0513,
        "multiple": 1.5,
        "state": "BELOW",
        "reason": "robinhood: 1.5x over baseline < 6.0x required"
      },
      {
        "root": "uniswap",
        "launches": 15,
        "deployers": 12,
        "baseline_share": 0.0509,
        "multiple": 1.1,
        "state": "BELOW",
        "reason": "uniswap: 1.1x over baseline < 6.0x required"
      },
      {
        "root": "usdg",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0203,
        "multiple": 1.6,
        "state": "BELOW",
        "reason": "usdg: 1.6x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 9,
        "deployers": 8,
        "baseline_share": 0.0424,
        "multiple": 0.8,
        "state": "BELOW",
        "reason": "uni: 0.8x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0167,
        "multiple": 1.5,
        "state": "BELOW",
        "reason": "positions: 1.5x over baseline < 6.0x required"
      },
      {
        "root": "cow",
        "launches": 6,
        "deployers": 3,
        "baseline_share": 0.0072,
        "multiple": 3,
        "state": "BELOW",
        "reason": "cow: 3.0x over baseline < 6.0x required"
      },
      {
        "root": "popt",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 45,
        "state": "THIN",
        "reason": "popt: 3 deployers < 6 required"
      },
      {
        "root": "lp",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0009,
        "multiple": 20,
        "state": "THIN",
        "reason": "lp: 3 deployers < 6 required"
      },
      {
        "root": "bf",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0027,
        "multiple": 6.7,
        "state": "THIN",
        "reason": "bf: 5 deployers < 6 required"
      },
      {
        "root": "bucket",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0036,
        "multiple": 5,
        "state": "BELOW",
        "reason": "bucket: 5.0x over baseline < 6.0x required"
      },
      {
        "root": "chop",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0041,
        "multiple": 4.4,
        "state": "BELOW",
        "reason": "chop: 4.4x over baseline < 6.0x required"
      },
      {
        "root": "pork",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 36,
        "state": "THIN",
        "reason": "pork: 4 launches < 5 required"
      },
      {
        "root": "shirudo",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 36,
        "state": "THIN",
        "reason": "shirudo: 4 launches < 5 required"
      },
      {
        "root": "brownfi",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0025,
        "multiple": 5.8,
        "state": "BELOW",
        "reason": "brownfi: 5.8x over baseline < 6.0x required"
      },
      {
        "root": "layerbank",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0053,
        "multiple": 2.7,
        "state": "BELOW",
        "reason": "layerbank: 2.7x over baseline < 6.0x required"
      },
      {
        "root": "aero",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0056,
        "multiple": 2.6,
        "state": "BELOW",
        "reason": "aero: 2.6x over baseline < 6.0x required"
      },
      {
        "root": "ai",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0081,
        "multiple": 1.8,
        "state": "BELOW",
        "reason": "ai: 1.8x over baseline < 6.0x required"
      },
      {
        "root": "nft",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0201,
        "multiple": 0.7,
        "state": "BELOW",
        "reason": "nft: 0.7x over baseline < 6.0x required"
      },
      {
        "root": "change",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 27,
        "state": "THIN",
        "reason": "change: 3 launches < 5 required"
      },
      {
        "root": "chip",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 27,
        "state": "THIN",
        "reason": "chip: 3 launches < 5 required"
      },
      {
        "root": "jensin",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 27,
        "state": "THIN",
        "reason": "jensin: 3 launches < 5 required"
      },
      {
        "root": "momo",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 27,
        "state": "THIN",
        "reason": "momo: 3 launches < 5 required"
      },
      {
        "root": "momocoin",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 27,
        "state": "THIN",
        "reason": "momocoin: 3 launches < 5 required"
      },
      {
        "root": "toby",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 27,
        "state": "THIN",
        "reason": "toby: 3 launches < 5 required"
      },
      {
        "root": "turtle",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 27,
        "state": "THIN",
        "reason": "turtle: 3 launches < 5 required"
      },
      {
        "root": "nvda",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0024,
        "multiple": 4.5,
        "state": "BELOW",
        "reason": "nvda: 4.5x over baseline < 6.0x required"
      },
      {
        "root": "variable",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0024,
        "multiple": 4.5,
        "state": "BELOW",
        "reason": "variable: 4.5x over baseline < 6.0x required"
      },
      {
        "root": "reward",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0037,
        "multiple": 2.9,
        "state": "BELOW",
        "reason": "reward: 2.9x over baseline < 6.0x required"
      },
      {
        "root": "one",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0043,
        "multiple": 2.5,
        "state": "BELOW",
        "reason": "one: 2.5x over baseline < 6.0x required"
      },
      {
        "root": "amm",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0062,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "amm: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "weth",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0073,
        "multiple": 1.5,
        "state": "BELOW",
        "reason": "weth: 1.5x over baseline < 6.0x required"
      },
      {
        "root": "volatile",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0083,
        "multiple": 1.3,
        "state": "BELOW",
        "reason": "volatile: 1.3x over baseline < 6.0x required"
      },
      {
        "root": "amd",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18,
        "state": "THIN",
        "reason": "amd: 2 launches < 5 required"
      },
      {
        "root": "back",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18,
        "state": "THIN",
        "reason": "back: 2 launches < 5 required"
      },
      {
        "root": "brokr",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18,
        "state": "THIN",
        "reason": "brokr: 2 launches < 5 required"
      },
      {
        "root": "clip",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18,
        "state": "THIN",
        "reason": "clip: 2 launches < 5 required"
      },
      {
        "root": "gage",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18,
        "state": "THIN",
        "reason": "gage: 2 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0xbbff8909a385c2a1bff2c8e8e18ff28b9878e174",
        "name": "Aria Inu",
        "symbol": "AI",
        "deployer": "0x4337003fcd2f56de3977ccb806383e9161628d0e",
        "block": 121751712,
        "ts": "2026-11-23T22:17:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3eff63fcedac1b2973b2e6130ba9a1afe15cd7c3",
        "name": "POPT-V2 USDG LP on TSLA/USDG 30bps",
        "symbol": "poUSDG",
        "deployer": "0xc42abe2d3195cda2a17524a59d79e2f2f2b11fa8",
        "block": 121751494,
        "ts": "2026-11-23T22:17:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa6d38f3e9f94e876bb77c294c5d2efc0f22871e3",
        "name": "POPT-V2 TSLA LP on TSLA/USDG 30bps",
        "symbol": "poTSLA",
        "deployer": "0xc42abe2d3195cda2a17524a59d79e2f2f2b11fa8",
        "block": 121751242,
        "ts": "2026-11-23T22:16:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb3f5dc074460d857bb95819dd62745fb9796a584",
        "name": "PORK",
        "symbol": "PORK",
        "deployer": "0x32911ece7e8936b7383c934d4d81f00dd76ebca7",
        "block": 121751159,
        "ts": "2026-11-23T22:16:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcb97df0b5412f36ca852f9be29bddf955c274c58",
        "name": "AMC Entertainment  Robinhood Tok",
        "symbol": "AMC",
        "deployer": "0xdda6031c170ac9bc6ccb4df0d01cae88a857b00e",
        "block": 121750915,
        "ts": "2026-11-23T22:16:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8c22a011632a681d0ced2e4c019d2f5887f748a3",
        "name": "ROBI",
        "symbol": "ROBI",
        "deployer": "0x09d373c4b269dbf64eb6e31cc34df3fe31e87547",
        "block": 121750873,
        "ts": "2026-11-23T22:16:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8d8c411ee2d0df29a01c17fb6768c3b1f0769c24",
        "name": "Republic Of X",
        "symbol": "MARS",
        "deployer": "0x4337005db25dbad41da5692ba1188751ee5d98b6",
        "block": 121750587,
        "ts": "2026-11-23T22:15:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdd819754abe17ca5bf581480e46bdd1d6fab7777",
        "name": "FOFT OIL TRUST FUND",
        "symbol": "FOTF",
        "deployer": "0x7485fbfd99993dab4c9964f53791e40d14253c97",
        "block": 121750525,
        "ts": "2026-11-23T22:15:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2e1231eaf13ed31fb1b6f2faa0370b1141c97777",
        "name": "Debx.App",
        "symbol": "BX",
        "deployer": "0xa7ba884561771e707f7f29bd5388b77f1e470daf",
        "block": 121750301,
        "ts": "2026-11-23T22:15:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbe1f2b7049e428fb3f7cff4ddcd0b7565de59f2c",
        "name": "ClipCat",
        "symbol": "CLIP",
        "deployer": "0x4337003fcd2f56de3977ccb806383e9161628d0e",
        "block": 121750248,
        "ts": "2026-11-23T22:15:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd2ae7ecce63a0444d487b708402e8f2436090800",
        "name": "Hexncoin",
        "symbol": "HEXN",
        "deployer": "0x329ca263df30c3e506c39081403ec95d5942ece8",
        "block": 121750218,
        "ts": "2026-11-23T22:14:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x049b0bf8fad4b694a50def27c290d61cef507777",
        "name": "VAPI Network VAPI",
        "symbol": "VAPI",
        "deployer": "0x1b4ebe73585b94578dc055c6ac7e89333fdadcf7",
        "block": 121750182,
        "ts": "2026-11-23T22:14:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x06e10a833c2447ba5ec840fb80c64eb099976d1e",
        "name": "MEMO",
        "symbol": "MEMO",
        "deployer": "0xc50181eedbe3532dad3bf0699b92f2bf4ad4668d",
        "block": 121749889,
        "ts": "2026-11-23T22:14:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf63d5db8883d1b38cfc36bae3d9d39e4b79ea235",
        "name": "Clip Inu",
        "symbol": "CLIPINU",
        "deployer": "0x4337001fff419768e088ce247456c1b892888084",
        "block": 121749842,
        "ts": "2026-11-23T22:14:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf2f600059be3e70b5042e2c9fd4659d7d3e2a0e8",
        "name": "Jensen Is Back",
        "symbol": "JENSEN",
        "deployer": "0xa0c396b922624b7e7858131dd34670c1101d3f25",
        "block": 121749598,
        "ts": "2026-11-23T22:13:48.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x1cf1f24594d9ce5e8516adbb9cd8737b82eb179e",
        "name": "Anthropic Satoshi",
        "symbol": "ANTOSHI",
        "deployer": "0x4337005db25dbad41da5692ba1188751ee5d98b6",
        "block": 121749474,
        "ts": "2026-11-23T22:13:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9c44d2e2a8ea5cbb51089cad56dae76667f4b293",
        "name": "Nvidia 5x Long",
        "symbol": "NVDA",
        "deployer": "0x4337004ec9c1417f1c7a26ebd4b4fbed6acf9e5d",
        "block": 121749288,
        "ts": "2026-11-23T22:13:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x67f4a9dfba8ead2ded56d6d08913255dea817777",
        "name": "Nvidia Pepe",
        "symbol": "FROGGY",
        "deployer": "0xfe2cb6b8c284d632390268d8007873ac5865db0b",
        "block": 121748875,
        "ts": "2026-11-23T22:12:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x61bd43c1bda81573e3bcbada96aaa81690000a50",
        "name": "Edge Fund",
        "symbol": "EDGE",
        "deployer": "0xc50181eedbe3532dad3bf0699b92f2bf4ad4668d",
        "block": 121748715,
        "ts": "2026-11-23T22:12:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc1d2e17c1bf9fda483d8e53f4b34834ea202ff45",
        "name": "Femme",
        "symbol": "FEMME",
        "deployer": "0xf407b20f5da219a21b68d6b7f9054042bb218033",
        "block": 121748652,
        "ts": "2026-11-23T22:12:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x601edd8671898ac2d4bf1531187f6052192a7777",
        "name": "Morpho Token MORPHO",
        "symbol": "MORPHO",
        "deployer": "0x498b1bee7a146a4d10514f2d8eb1201b447ad384",
        "block": 121748488,
        "ts": "2026-11-23T22:11:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x35ce9fdfdf542038b7ebafc5d2ee4b4791a84360",
        "name": "alphamorph",
        "symbol": "MORPH",
        "deployer": "0xdda6031c170ac9bc6ccb4df0d01cae88a857b00e",
        "block": 121748237,
        "ts": "2026-11-23T22:11:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xabcf138eb791e126b611f0d2693613e0a16e7777",
        "name": "The Janitor",
        "symbol": "MOP",
        "deployer": "0x7485fbfd99993dab4c9964f53791e40d14253c97",
        "block": 121748225,
        "ts": "2026-11-23T22:11:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x52fae872af1b88a8dd96a6715c29afd7ee63d767",
        "name": "The Janitor",
        "symbol": "MOP",
        "deployer": "0x626f97cef9ba2df3ebc898891229d1331b4c2f40",
        "block": 121748146,
        "ts": "2026-11-23T22:11:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3e9233ed3145fe9fc0ba943dabe00f2693220087",
        "name": "Jensin Huang",
        "symbol": "JENSIN",
        "deployer": "0x000ece0e598f89c0c567f652e2ab48d6edac7bf6",
        "block": 121748112,
        "ts": "2026-11-23T22:11:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x06b04412975a9d5365899db2aca7d2a810bb2ee6",
        "name": "GeForce Trading Cards",
        "symbol": "GTC",
        "deployer": "0x4337004ec9c1417f1c7a26ebd4b4fbed6acf9e5d",
        "block": 121748020,
        "ts": "2026-11-23T22:10:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1b18c4f8c08616035cedd33570b641956fe87777",
        "name": "Jensin Huang",
        "symbol": "JENSIN",
        "deployer": "0xa7ba884561771e707f7f29bd5388b77f1e470daf",
        "block": 121747692,
        "ts": "2026-11-23T22:10:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x663add5712443584a46922218ca6d0fa16b87777",
        "name": "Shield Inu",
        "symbol": "SI",
        "deployer": "0x1b4ebe73585b94578dc055c6ac7e89333fdadcf7",
        "block": 121747612,
        "ts": "2026-11-23T22:10:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xffa4b31fc68a37c8fc1fdccb50d4004a8057c6ee",
        "name": "Kaskad Robinhood Variable Debt USDG",
        "symbol": "variableDebtRhUSDG",
        "deployer": "0xc31bd8a6cfcaacec6f26f7120ddd81f680047195",
        "block": 121747608,
        "ts": "2026-11-23T22:10:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x87086329b677c94df4da5dfe9a8da90c73c535bf",
        "name": "Volatile AMM - UP/USDG",
        "symbol": "vAMM-UP/USDG",
        "deployer": "0x1f07ed80ec4074cf68a544e7049457e531cc5580",
        "block": 121747527,
        "ts": "2026-11-23T22:09:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x131b711e37bc42d3f101c98001416edb64dd138f",
        "name": "Orbit",
        "symbol": "ORBIT",
        "deployer": "0x4337004ec9c1417f1c7a26ebd4b4fbed6acf9e5d",
        "block": 121747503,
        "ts": "2026-11-23T22:09:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc665fddfa9dd272f3d7d5938dfb6a189a5c81e18",
        "name": "Jensin Huang",
        "symbol": "JENSIN",
        "deployer": "0xd20278dc748cfe4a381e8969751873f1ab80cce4",
        "block": 121747473,
        "ts": "2026-11-23T22:09:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf2c77286c4e9bac73c61308d83cadf364a0f3dca",
        "name": "Kaskad Robinhood TIBBIR",
        "symbol": "aRhTIBBIR",
        "deployer": "0xc31bd8a6cfcaacec6f26f7120ddd81f680047195",
        "block": 121747320,
        "ts": "2026-11-23T22:09:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x568d3a1d06d51642ee98b2cc2d648357fc35440e",
        "name": "chips",
        "symbol": "CHIPS",
        "deployer": "0x4337002c5702ce424cb62a56ca038e31e1d4a93d",
        "block": 121747194,
        "ts": "2026-11-23T22:09:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0bf85d7dfa0de5d4ba8776bf848f187b53276bfc",
        "name": "Nami CL Positions",
        "symbol": "NAMI-CL-POS",
        "deployer": "0xbd0ca42fbc65c7e67220ec99c075697ef0a82c3e",
        "block": 121746997,
        "ts": "2026-11-23T22:08:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2467b7ccd616d3f5a2b4e5dce152fef76dbe7777",
        "name": "PEPE",
        "symbol": "PEPE",
        "deployer": "0x93b8e6818d12b03cc79c7eb2a624dcbbb80233b6",
        "block": 121746732,
        "ts": "2026-11-23T22:08:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x348469009d2c1978138f7bc714ed183ad39b7777",
        "name": "Venice Token VVV",
        "symbol": "VVV",
        "deployer": "0xfe2cb6b8c284d632390268d8007873ac5865db0b",
        "block": 121746669,
        "ts": "2026-11-23T22:08:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa430e777254c0ff48fa37767ae4bb3a8b83cb607",
        "name": "pepe",
        "symbol": "pepe",
        "deployer": "0x5f8f5ba16515ef70a72183058a144dd09325bd40",
        "block": 121746597,
        "ts": "2026-11-23T22:08:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfcb7c823a1663f6d6a243ae8023b71cc00bdc00d",
        "name": "Chadsen",
        "symbol": "CHADSEN",
        "deployer": "0x4337005db25dbad41da5692ba1188751ee5d98b6",
        "block": 121746371,
        "ts": "2026-11-23T22:07:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe33322da1380e61e5ae5dfb21e7f62924c73004c",
        "name": "Orbio Credit",
        "symbol": "CREDIT",
        "deployer": "0xfe4e11aca92f73b421daab1e473308c104d4c45a",
        "block": 121746327,
        "ts": "2026-11-23T22:07:38.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
