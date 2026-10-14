/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-14T01:22:32.000Z",
    "opened_at": "2026-10-14T00:22:32.000Z",
    "window_hours": 1,
    "head_block": 87971400,
    "start_block": 87935756,
    "blocks_scanned": 35644,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 396,
    "unnamed_contracts": 0,
    "via_factory": 352,
    "no_receipt": 0,
    "candidates": 396,
    "mint_events": 28524,
    "deployers": 291,
    "roots": 534,
    "cleared_multiple": 534,
    "failed_gates": 522,
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
      "nft",
      "positions",
      "robinhood",
      "txgym-gym-tx",
      "uniswap-uni",
      "usdg",
      "yield-fields-yld"
    ],
    "top": {
      "root": "nft",
      "launches": 11,
      "deployers": 10,
      "baseline_share": 0.0004,
      "multiple": 69.4,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "nft",
        "launches": 11,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 69.4,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "robinhood",
        "launches": 10,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 63.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 56.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 50.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 27,
        "deployers": 25,
        "baseline_share": 0.0004,
        "multiple": 170.5,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 93%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 25,
        "deployers": 23,
        "baseline_share": 0.0004,
        "multiple": 157.8,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 93%, merged to uniswap-uni"
      },
      {
        "root": "yield",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 63.1,
        "state": "MERGED",
        "reason": "yield + fields co-occur 88%, merged to yield-fields-yld"
      },
      {
        "root": "fields",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 50.5,
        "state": "MERGED",
        "reason": "yield + fields co-occur 88%, merged to yield-fields-yld"
      },
      {
        "root": "txgym",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 44.2,
        "state": "MERGED",
        "reason": "txgym + gym co-occur 100%, merged to txgym-gym-tx"
      },
      {
        "root": "yld",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 44.2,
        "state": "MERGED",
        "reason": "yield + fields co-occur 88%, merged to yield-fields-yld"
      },
      {
        "root": "gym",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 37.9,
        "state": "MERGED",
        "reason": "txgym + gym co-occur 100%, merged to txgym-gym-tx"
      },
      {
        "root": "tx",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 37.9,
        "state": "MERGED",
        "reason": "txgym + gym co-occur 100%, merged to txgym-gym-tx"
      },
      {
        "root": "volatile",
        "launches": 9,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 56.8,
        "state": "THIN",
        "reason": "volatile: 4 deployers < 6 required"
      },
      {
        "root": "ramses",
        "launches": 8,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 50.5,
        "state": "THIN",
        "reason": "ramses: 3 deployers < 6 required"
      },
      {
        "root": "flock",
        "launches": 7,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 44.2,
        "state": "THIN",
        "reason": "flock: 4 deployers < 6 required"
      },
      {
        "root": "net",
        "launches": 7,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 44.2,
        "state": "THIN",
        "reason": "net: 5 deployers < 6 required"
      },
      {
        "root": "staked",
        "launches": 6,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 37.9,
        "state": "THIN",
        "reason": "staked: 4 deployers < 6 required"
      },
      {
        "root": "weth",
        "launches": 6,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 37.9,
        "state": "THIN",
        "reason": "weth: 5 deployers < 6 required"
      },
      {
        "root": "bucket",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 31.6,
        "state": "THIN",
        "reason": "bucket: 1 deployers < 6 required"
      },
      {
        "root": "coolcat",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 31.6,
        "state": "THIN",
        "reason": "coolcat: 5 deployers < 6 required"
      },
      {
        "root": "lend",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 31.6,
        "state": "THIN",
        "reason": "lend: 3 deployers < 6 required"
      },
      {
        "root": "onre",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 31.6,
        "state": "THIN",
        "reason": "onre: 5 deployers < 6 required"
      },
      {
        "root": "onrefinance",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 31.6,
        "state": "THIN",
        "reason": "onrefinance: 5 deployers < 6 required"
      },
      {
        "root": "pair",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 31.6,
        "state": "THIN",
        "reason": "pair: 3 deployers < 6 required"
      },
      {
        "root": "spy",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 31.6,
        "state": "THIN",
        "reason": "spy: 5 deployers < 6 required"
      },
      {
        "root": "borrowable",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 25.3,
        "state": "THIN",
        "reason": "borrowable: 4 launches < 5 required"
      },
      {
        "root": "chop",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 25.3,
        "state": "THIN",
        "reason": "chop: 4 launches < 5 required"
      },
      {
        "root": "dexsi",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 25.3,
        "state": "THIN",
        "reason": "dexsi: 4 launches < 5 required"
      },
      {
        "root": "dog",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 25.3,
        "state": "THIN",
        "reason": "dog: 4 launches < 5 required"
      },
      {
        "root": "hood",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 25.3,
        "state": "THIN",
        "reason": "hood: 4 launches < 5 required"
      },
      {
        "root": "merge",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 25.3,
        "state": "THIN",
        "reason": "merge: 4 launches < 5 required"
      },
      {
        "root": "pepe",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 25.3,
        "state": "THIN",
        "reason": "pepe: 4 launches < 5 required"
      },
      {
        "root": "unicorn",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 25.3,
        "state": "THIN",
        "reason": "unicorn: 4 launches < 5 required"
      },
      {
        "root": "amm",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 18.9,
        "state": "THIN",
        "reason": "amm: 3 launches < 5 required"
      },
      {
        "root": "arrowfarm",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.9,
        "state": "THIN",
        "reason": "arrowfarm: 3 launches < 5 required"
      },
      {
        "root": "art",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 18.9,
        "state": "THIN",
        "reason": "art: 3 launches < 5 required"
      },
      {
        "root": "cat",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 18.9,
        "state": "THIN",
        "reason": "cat: 3 launches < 5 required"
      },
      {
        "root": "corporation",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 18.9,
        "state": "THIN",
        "reason": "corporation: 3 launches < 5 required"
      },
      {
        "root": "embryo",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 18.9,
        "state": "THIN",
        "reason": "embryo: 3 launches < 5 required"
      },
      {
        "root": "lab",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 18.9,
        "state": "THIN",
        "reason": "lab: 3 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0xd6d74d4e5c700d223c1dddfd9f5f2edc6ab0fe6e",
        "name": "Pusheen",
        "symbol": "Pusheen",
        "deployer": "0xe243d2de1988ff91937bd8e0d670420a2c821377",
        "block": 87971134,
        "ts": "2026-10-14T01:22:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x893c937854873f31fb4bf993aa3ff3073708fa70",
        "name": "MetaPlanet",
        "symbol": "MP",
        "deployer": "0x43370277ecaab8cb1f98622138efc679f9ac3063",
        "block": 87970606,
        "ts": "2026-10-14T01:21:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5c6eaddeb56d266e56fb2855c741c3a7bb537d29",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xf9504a7dcf63830cccd772644ba91033fe58c11e",
        "block": 87970573,
        "ts": "2026-10-14T01:21:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xba6d200cdba27acb4d65a1e7158ac27a8c27a8de",
        "name": "Roblette",
        "symbol": "RBL",
        "deployer": "0x433aeeaa92c76c4e465229f1bd17af6bf3c4ee2a",
        "block": 87970553,
        "ts": "2026-10-14T01:21:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf0545da454a0b0a18d956d0d8bd356cc100ef0b9",
        "name": "Fireball Wizards",
        "symbol": "FWIZ",
        "deployer": "0x200e90594e9faa4d7cca65b4e98ad42e1087702b",
        "block": 87970232,
        "ts": "2026-10-14T01:20:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdfbfe6d3d01d99ce6d61c9e66f26e49878e25a18",
        "name": "MORROW",
        "symbol": "MORROW",
        "deployer": "0x06cb3a6841c92525e7a1998328e7c9d37e98d937",
        "block": 87970209,
        "ts": "2026-10-14T01:20:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x039e4cc74db4983c7c1d5bc9ab50fb8e43ffbd05",
        "name": "Ramses Volatile - RAM/USDG",
        "symbol": "Volatile - RAM/USDG",
        "deployer": "0x19d1021b7fb8871f9b58f2fe7585963c22132b14",
        "block": 87970156,
        "ts": "2026-10-14T01:20:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5c919acb310764e27b1dd09541f3f63d4de4c701",
        "name": "Ramses Volatile - WETH/USDG",
        "symbol": "Volatile - WETH/USDG",
        "deployer": "0x19d1021b7fb8871f9b58f2fe7585963c22132b14",
        "block": 87970156,
        "ts": "2026-10-14T01:20:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8217ca22aacd2eb83c04a1717ecb0b4700489e06",
        "name": "Ramses Volatile - r33/RAM",
        "symbol": "Volatile - r33/RAM",
        "deployer": "0x19d1021b7fb8871f9b58f2fe7585963c22132b14",
        "block": 87970156,
        "ts": "2026-10-14T01:20:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbc2f6fed647e917fd60c8990f2c6b91f0c426f12",
        "name": "Ramses Volatile - CASHCAT/USDG",
        "symbol": "Volatile - CASHCAT/USDG",
        "deployer": "0x19d1021b7fb8871f9b58f2fe7585963c22132b14",
        "block": 87970156,
        "ts": "2026-10-14T01:20:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd8b66ac1a247db8f32ce0ea9770ce6966eb9f567",
        "name": "Ramses Volatile - r33/USDG",
        "symbol": "Volatile - r33/USDG",
        "deployer": "0x19d1021b7fb8871f9b58f2fe7585963c22132b14",
        "block": 87970156,
        "ts": "2026-10-14T01:20:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdc5baa131c844d0ca548f4e0aa7ce9f50c742ec5",
        "name": "Ramses Volatile - CASHCAT/WETH",
        "symbol": "Volatile - CASHCAT/WETH",
        "deployer": "0x19d1021b7fb8871f9b58f2fe7585963c22132b14",
        "block": 87970156,
        "ts": "2026-10-14T01:20:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5d70ca75b7ec89296cac0dd09f186ba73d0a7777",
        "name": "Maze Runner",
        "symbol": "MAZE",
        "deployer": "0xfe2cb6b8c284d632390268d8007873ac5865db0b",
        "block": 87970099,
        "ts": "2026-10-14T01:20:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x46a736a42fb54610e56d8bb6e4c60a66761d7380",
        "name": "Maze Runner",
        "symbol": "MAZE",
        "deployer": "0x99f382d36b9522c88d3e617eb9aabcf834779377",
        "block": 87970012,
        "ts": "2026-10-14T01:20:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7c4d59f3e69c66791a307ad5b46e790c6a60999f",
        "name": "AUREUS",
        "symbol": "AUREUS",
        "deployer": "0x9558790173e4857ba7956ce5a197e335bbc44cf8",
        "block": 87969890,
        "ts": "2026-10-14T01:19:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1863001281a4583508fc522dd4ebd8496705aee8",
        "name": "Red Candle",
        "symbol": "REDC",
        "deployer": "0xf9504a7dcf63830cccd772644ba91033fe58c11e",
        "block": 87969679,
        "ts": "2026-10-14T01:19:38.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x24fa2c65864fb9f638e20c9eb08f4a5d29877777",
        "name": "D",
        "symbol": "D",
        "deployer": "0x498b1bee7a146a4d10514f2d8eb1201b447ad384",
        "block": 87969644,
        "ts": "2026-10-14T01:19:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8f5542fa30fb442d6da4c52e657a1097a79bc782",
        "name": "Orvex V4 Positions NFT",
        "symbol": "ORVEX-V4",
        "deployer": "0x068372dc7e977f4fb57b2f54da266bede7dd275d",
        "block": 87969422,
        "ts": "2026-10-14T01:19:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2489eaf3a6cfff241d36c0f9d9ad19fef92f12ff",
        "name": "Market Cap",
        "symbol": "MCAP",
        "deployer": "0x4337006f33e2940fcbebd899bf2396117e65df9b",
        "block": 87969339,
        "ts": "2026-10-14T01:19:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfa711421f049108637f01c27bd397a62262c7777",
        "name": "E",
        "symbol": "E",
        "deployer": "0x7485fbfd99993dab4c9964f53791e40d14253c97",
        "block": 87969252,
        "ts": "2026-10-14T01:18:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4d99a573fd65f1f3c3cbc0efa7acde25eec71797",
        "name": "Mirror",
        "symbol": "IMD",
        "deployer": "0x5ea5ad3e74d6083de440bfb19ad76dc712373048",
        "block": 87968957,
        "ts": "2026-10-14T01:18:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe69c404cb50e5cf5c840137a4769071148c715a2",
        "name": "Grok Bot",
        "symbol": "GROK",
        "deployer": "0x196da7b62b807e76a00496ff0a4e7e3c30dde4cb",
        "block": 87968794,
        "ts": "2026-10-14T01:18:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdf110fb49b04e55258e7f6602777d10482a23aac",
        "name": "haloledger",
        "symbol": "HALED",
        "deployer": "0xbfa33dd97ea284800d1181957deaec2c5e6280a4",
        "block": 87968787,
        "ts": "2026-10-14T01:18:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc9a11b8805c7479a3034f27ed14cd8dfa4607777",
        "name": "The Embryo Corporation",
        "symbol": "UNICORN",
        "deployer": "0x0c9dfc5cdec8d2f25e575c7368ea11fd25fd582c",
        "block": 87968766,
        "ts": "2026-10-14T01:18:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x91b9c625176860953a78b9daadf43e3bd46e51a7",
        "name": "The Embryo Corporation",
        "symbol": "UNICORN",
        "deployer": "0x2be123d4c26e3bca75fab1bea45aa5eac014f141",
        "block": 87968761,
        "ts": "2026-10-14T01:18:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf34b92d05eef6105a5829663a5fcf695026ea221",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x4c3170dba3fa999f9fe0fa5d6d87f12d79b592f5",
        "block": 87968633,
        "ts": "2026-10-14T01:17:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb25f6f54b0a89664fc0da2bd3ac6d21e640d5c75",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xb6b522c4ce110a90972f13891836880d8e615cf4",
        "block": 87968631,
        "ts": "2026-10-14T01:17:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf6e865b598e615d32cadeab08ddb2b8780fa7777",
        "name": "The Embryo Corporation",
        "symbol": "UNICORN",
        "deployer": "0x2258bd78e794b837aa28cd4c3b12c50607fe8ce3",
        "block": 87968524,
        "ts": "2026-10-14T01:17:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3c615198210db67feb7de0e9f6eef7d82d557c5b",
        "name": "ONREFINANCE",
        "symbol": "ONRE",
        "deployer": "0x8d17e9291e8a1a34b76d16c6c63770901ecd1b7e",
        "block": 87968276,
        "ts": "2026-10-14T01:17:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb8259575b6097abf773b0e45297baf87d5d41684",
        "name": "Stagwood Herd",
        "symbol": "STAG",
        "deployer": "0xb1d6825fba1e95ff01186c499cdf9c0f9c2de332",
        "block": 87968035,
        "ts": "2026-10-14T01:16:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe9d99c58fa634677e557031608fcb13bf5f5da99",
        "name": "Gear",
        "symbol": "GEAR",
        "deployer": "0xdb763eee817dbf805525d65eb0e8e8d44f487510",
        "block": 87968025,
        "ts": "2026-10-14T01:16:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xec7e09b24d077a93bb47a4efd061f98b2576810b",
        "name": "Chop",
        "symbol": "CHOP",
        "deployer": "0x4c3170dba3fa999f9fe0fa5d6d87f12d79b592f5",
        "block": 87967947,
        "ts": "2026-10-14T01:16:43.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xc9a981fee1f9dec688bb123ccdecc63d0debfc4e",
        "name": "SPDR Gold Trust • Robinhood Token",
        "symbol": "GLD",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 87967917,
        "ts": "2026-10-14T01:16:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5b467ee2c7092b2e2455d529f116ce7ed41a7b10",
        "name": "Maze Runner",
        "symbol": "MAZE",
        "deployer": "0x1ac9805694b28cd2e556e84761cfb03a804023a2",
        "block": 87967796,
        "ts": "2026-10-14T01:16:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x17cf68dabb08fccab6ef645683489ee228074f44",
        "name": "Yield Fields",
        "symbol": "YLD",
        "deployer": "0x53f34ffd24c64299a82ffc319cddee0b1e930429",
        "block": 87967794,
        "ts": "2026-10-14T01:16:28.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x3a3efb57f5ee3f65bf6f8087711c2821e79156db",
        "name": "Mneme Research",
        "symbol": "Mneme",
        "deployer": "0xcc0ecbc2c7f0b6ae547d05709092341880cef4cd",
        "block": 87967758,
        "ts": "2026-10-14T01:16:24.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x4715fc6f3e4d24bdb761362c22bd12b697e67a9c",
        "name": "Green Candle",
        "symbol": "GRNC",
        "deployer": "0xb6b522c4ce110a90972f13891836880d8e615cf4",
        "block": 87967745,
        "ts": "2026-10-14T01:16:23.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x5fc5360d0400a0fd4f2af552add042d716f1d168",
        "name": "Global Dollar",
        "symbol": "USDG",
        "deployer": "0xe93685f3bba03016f02bd1828badd6195988d950",
        "block": 87967492,
        "ts": "2026-10-14T01:15:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf00c1f213eec0ddd9665918e199e8e1d7a4e6842",
        "name": "SI Chill Guy",
        "symbol": "SICG",
        "deployer": "0x06cb3a6841c92525e7a1998328e7c9d37e98d937",
        "block": 87966938,
        "ts": "2026-10-14T01:15:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7456bdc97bb41bda9e87505a781a4b23e0f61e18",
        "name": "Gemini 4 TiKz unicorn",
        "symbol": "TIKZ",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 87966719,
        "ts": "2026-10-14T01:14:38.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
