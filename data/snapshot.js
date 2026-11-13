/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-13T01:26:04.000Z",
    "opened_at": "2026-11-13T00:26:04.000Z",
    "window_hours": 1,
    "head_block": 112974594,
    "start_block": 112940641,
    "blocks_scanned": 33953,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 296,
    "unnamed_contracts": 13,
    "via_factory": 277,
    "no_receipt": 0,
    "candidates": 309,
    "mint_events": 16255,
    "deployers": 208,
    "roots": 408,
    "cleared_multiple": 254,
    "failed_gates": 250,
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
      "food-foodcoin",
      "throng-thronglets"
    ],
    "top": null,
    "rows": [
      {
        "root": "food",
        "launches": 34,
        "deployers": 34,
        "baseline_share": 0.0004,
        "multiple": 287.2,
        "state": "MERGED",
        "reason": "food + foodcoin co-occur 100%, merged to food-foodcoin"
      },
      {
        "root": "foodcoin",
        "launches": 34,
        "deployers": 34,
        "baseline_share": 0.0004,
        "multiple": 287.2,
        "state": "MERGED",
        "reason": "food + foodcoin co-occur 100%, merged to food-foodcoin"
      },
      {
        "root": "throng",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 67.6,
        "state": "MERGED",
        "reason": "throng + thronglets co-occur 100%, merged to throng-thronglets"
      },
      {
        "root": "thronglets",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 67.6,
        "state": "MERGED",
        "reason": "throng + thronglets co-occur 100%, merged to throng-thronglets"
      },
      {
        "root": "robinhood",
        "launches": 18,
        "deployers": 9,
        "baseline_share": 0.0513,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "robinhood: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "uniswap",
        "launches": 14,
        "deployers": 12,
        "baseline_share": 0.0509,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "uniswap: 0.9x over baseline < 6.0x required"
      },
      {
        "root": "usdg",
        "launches": 12,
        "deployers": 12,
        "baseline_share": 0.0203,
        "multiple": 2,
        "state": "BELOW",
        "reason": "usdg: 2.0x over baseline < 6.0x required"
      },
      {
        "root": "cow",
        "launches": 10,
        "deployers": 4,
        "baseline_share": 0.0072,
        "multiple": 4.7,
        "state": "BELOW",
        "reason": "cow: 4.7x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0424,
        "multiple": 0.6,
        "state": "BELOW",
        "reason": "uni: 0.6x over baseline < 6.0x required"
      },
      {
        "root": "outcome",
        "launches": 6,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 50.7,
        "state": "THIN",
        "reason": "outcome: 1 deployers < 6 required"
      },
      {
        "root": "affair",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 42.2,
        "state": "THIN",
        "reason": "affair: 5 deployers < 6 required"
      },
      {
        "root": "reward",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0037,
        "multiple": 4.6,
        "state": "BELOW",
        "reason": "reward: 4.6x over baseline < 6.0x required"
      },
      {
        "root": "aero",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0056,
        "multiple": 3,
        "state": "BELOW",
        "reason": "aero: 3.0x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0167,
        "multiple": 1,
        "state": "BELOW",
        "reason": "positions: 1.0x over baseline < 6.0x required"
      },
      {
        "root": "layerbank",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0053,
        "multiple": 2.5,
        "state": "BELOW",
        "reason": "layerbank: 2.5x over baseline < 6.0x required"
      },
      {
        "root": "position",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0054,
        "multiple": 2.5,
        "state": "BELOW",
        "reason": "position: 2.5x over baseline < 6.0x required"
      },
      {
        "root": "ai",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0081,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "ai: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "volatile",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0083,
        "multiple": 1.6,
        "state": "BELOW",
        "reason": "volatile: 1.6x over baseline < 6.0x required"
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
        "root": "bae",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 25.3,
        "state": "THIN",
        "reason": "bae: 3 launches < 5 required"
      },
      {
        "root": "su",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 25.3,
        "state": "THIN",
        "reason": "su: 3 launches < 5 required"
      },
      {
        "root": "lp",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0009,
        "multiple": 11.3,
        "state": "THIN",
        "reason": "lp: 3 launches < 5 required"
      },
      {
        "root": "borro",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0024,
        "multiple": 4.2,
        "state": "BELOW",
        "reason": "borro: 4.2x over baseline < 6.0x required"
      },
      {
        "root": "brownfi",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0025,
        "multiple": 4.1,
        "state": "BELOW",
        "reason": "brownfi: 4.1x over baseline < 6.0x required"
      },
      {
        "root": "bf",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0027,
        "multiple": 3.8,
        "state": "BELOW",
        "reason": "bf: 3.8x over baseline < 6.0x required"
      },
      {
        "root": "fund",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0029,
        "multiple": 3.5,
        "state": "BELOW",
        "reason": "fund: 3.5x over baseline < 6.0x required"
      },
      {
        "root": "alandale",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0032,
        "multiple": 3.2,
        "state": "BELOW",
        "reason": "alandale: 3.2x over baseline < 6.0x required"
      },
      {
        "root": "chop",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0041,
        "multiple": 2.5,
        "state": "BELOW",
        "reason": "chop: 2.5x over baseline < 6.0x required"
      },
      {
        "root": "amm",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0062,
        "multiple": 1.6,
        "state": "BELOW",
        "reason": "amm: 1.6x over baseline < 6.0x required"
      },
      {
        "root": "staked",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0069,
        "multiple": 1.5,
        "state": "BELOW",
        "reason": "staked: 1.5x over baseline < 6.0x required"
      },
      {
        "root": "weth",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0073,
        "multiple": 1.4,
        "state": "BELOW",
        "reason": "weth: 1.4x over baseline < 6.0x required"
      },
      {
        "root": "cat",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.013,
        "multiple": 0.8,
        "state": "BELOW",
        "reason": "cat: 0.8x over baseline < 6.0x required"
      },
      {
        "root": "afinu",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.9,
        "state": "THIN",
        "reason": "afinu: 2 launches < 5 required"
      },
      {
        "root": "apes",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.9,
        "state": "THIN",
        "reason": "apes: 2 launches < 5 required"
      },
      {
        "root": "bandit",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.9,
        "state": "THIN",
        "reason": "bandit: 2 launches < 5 required"
      },
      {
        "root": "cache",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 16.9,
        "state": "THIN",
        "reason": "cache: 2 launches < 5 required"
      },
      {
        "root": "donuts",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 16.9,
        "state": "THIN",
        "reason": "donuts: 2 launches < 5 required"
      },
      {
        "root": "eggs",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.9,
        "state": "THIN",
        "reason": "eggs: 2 launches < 5 required"
      },
      {
        "root": "pearl",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.9,
        "state": "THIN",
        "reason": "pearl: 2 launches < 5 required"
      },
      {
        "root": "solutions",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.9,
        "state": "THIN",
        "reason": "solutions: 2 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x71e04bcee9a54ba2822ab3605beee3d7c8761e18",
        "name": "Fries",
        "symbol": "FRIES",
        "deployer": "0x0b1446ebd63014e69b4f50bd294b2458b609cada",
        "block": 112974371,
        "ts": "2026-11-13T01:25:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf7f83060de6376ad6863cc0f13e460f983d3a9c6",
        "name": "Deep-Sea Salvagers",
        "symbol": "DSS",
        "deployer": "0x683ea7866bc976d657e89346c8322dc6a7242dd7",
        "block": 112974302,
        "ts": "2026-11-13T01:25:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5ed70160c51abf2d02c2c8a2f90313e91c46dee2",
        "name": "Military apes",
        "symbol": "apes",
        "deployer": "0x9db549672a526386d6008fc846390e81f03a015c",
        "block": 112973659,
        "ts": "2026-11-13T01:24:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x99347d5f70d3838763f6bddcf80304c8aa953b57",
        "name": "NetNet Credit",
        "symbol": "nnUSDG",
        "deployer": "0xc452880536b572df0750c893289ef6d72684311f",
        "block": 112973334,
        "ts": "2026-11-13T01:23:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7b72dfa4877133b7ff99a66ce8cfc3b9b40a35a5",
        "name": "Foodcoin",
        "symbol": "FOOD",
        "deployer": "0xe82092cc103f2129f441d1d7d332bff38817edbf",
        "block": 112973249,
        "ts": "2026-11-13T01:23:40.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xef839ad8f1d490d25dcea06bc2098d3ea39cb15d",
        "name": "Staked MNTD",
        "symbol": "sMNTD",
        "deployer": "0xeca13a86173cddb53205031ec30125f0d1b8c0a4",
        "block": 112972945,
        "ts": "2026-11-13T01:23:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x45be3336f62231fdfce8a61fff283742563ee668",
        "name": "SHOOTER Awards",
        "symbol": "SHOOTAWARD",
        "deployer": "0x62c749fcff5ab757ea3010a919d1ae0b30759650",
        "block": 112972863,
        "ts": "2026-11-13T01:22:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xce2ba9160ea833512a66a4ea788f7829642bdefc",
        "name": "Chickens By EGGS",
        "symbol": "EGGS",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 112972761,
        "ts": "2026-11-13T01:22:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5b69f1e127cb8cbe0b3880e8c1411185ae719e37",
        "name": "Heeshilio",
        "symbol": "HEESH",
        "deployer": "0xfa322cfea4ede2a06e527f54f8273d36831a40de",
        "block": 112972636,
        "ts": "2026-11-13T01:22:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xccb7883f33ed8bd828a5439c2ae8b6ea0df807ea",
        "name": "Cyfrin Audit",
        "symbol": "CYFRIN",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 112972560,
        "ts": "2026-11-13T01:22:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc25506a323d3b391ba8f216276015d70c579d94a",
        "name": "Heartlight",
        "symbol": "LIGHT",
        "deployer": "0xdbf303ac9cd59b6c0e5739590dacdbc4e582dbb7",
        "block": 112972477,
        "ts": "2026-11-13T01:22:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x95b6dc912c31baa7ee42634754414bd858a2e7aa",
        "name": "Foodcoin",
        "symbol": "FOOD",
        "deployer": "0xcde3082e99c1f95651778157484238f46e8a75c1",
        "block": 112972037,
        "ts": "2026-11-13T01:21:28.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xb9f71bdc004c399d28c51f1a8c0e972d6a25fd99",
        "name": "Foodcoin",
        "symbol": "FOOD",
        "deployer": "0xb1f2b870fabaf733a6acb7ecd6b861d04d683abd",
        "block": 112971742,
        "ts": "2026-11-13T01:20:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x055c0e7962a52f42052e1149e41fbc6909268fc0",
        "name": "Tron Agent",
        "symbol": "TROGENT",
        "deployer": "0x62ab46bf245f01aa865dd0dd8ae3b5c8f631f26f",
        "block": 112971690,
        "ts": "2026-11-13T01:20:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6ba3d129d8a9b4dfe25075dc80a1b2e5d4b01e18",
        "name": "NVIDIA Coin",
        "symbol": "NVDA",
        "deployer": "0xd20278dc748cfe4a381e8969751873f1ab80cce4",
        "block": 112971549,
        "ts": "2026-11-13T01:20:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa8219d665c831ab5caadb14b24de9605383f2119",
        "name": "Surplus Intelligence",
        "symbol": "Surplus",
        "deployer": "0x73a063c96b5d67863deaa7b163207e769a7c2cee",
        "block": 112971070,
        "ts": "2026-11-13T01:19:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5af6e41fd6cbf11a5885b9f4e568a68937bb3525",
        "name": "LAMBO SLOTH",
        "symbol": "LAMBOSLOTH",
        "deployer": "0x934ccc9b58d4f1fbe2d4e04eafaea790f82a380a",
        "block": 112971058,
        "ts": "2026-11-13T01:19:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9c71cf5b8d39cce128e5bb0d84fe64d992038747",
        "name": "BurstingBagel",
        "symbol": "BAGEL",
        "deployer": "0xfa322cfea4ede2a06e527f54f8273d36831a40de",
        "block": 112970991,
        "ts": "2026-11-13T01:19:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfd9f0ad02448e5b391fca7feb07d5e1b63b72cda",
        "name": "Ever Dream This Man?",
        "symbol": "man",
        "deployer": "0x540df6a7030461c92471a06cc9726c62a74769de",
        "block": 112970866,
        "ts": "2026-11-13T01:19:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1b32ae30b8c8740f22bedbeff8e3f6dd88121292",
        "name": "Foodcoin",
        "symbol": "FOOD",
        "deployer": "0x1e2b7800e02013d9d5c81fa8deb41637fce48894",
        "block": 112970609,
        "ts": "2026-11-13T01:18:58.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xb2a5ccfd2df672e97ff1107e465bfbc392ba2d8e",
        "name": "Aetheryn V3",
        "symbol": "AETH3",
        "deployer": "0x92f947a662a5bd6d04d8a75ee074cda31e67fe3c",
        "block": 112970404,
        "ts": "2026-11-13T01:18:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6c0a0b27e7ccacd0056db1e27b5113fbfbf0476a",
        "name": "Pons",
        "symbol": "PONS",
        "deployer": "0x1890966740359cf8ee700c5687b3eab8fb0febff",
        "block": 112970275,
        "ts": "2026-11-13T01:18:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7d71a39cc90bc7ed1eb01e2a2433c3c3cfb97777",
        "name": "Trashed Panda",
        "symbol": "Panda",
        "deployer": "0xcac862a1993dea9580a96535e3f48d99b0189b10",
        "block": 112970246,
        "ts": "2026-11-13T01:18:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x494fe2d5126e197ea22dc0ec5ec47a89d6245b5e",
        "name": "Foodcoin",
        "symbol": "FOOD",
        "deployer": "0x71251c2b59de5d350899e290aa8ee6f0be440055",
        "block": 112970147,
        "ts": "2026-11-13T01:18:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x53f9ed4253f67947fddf445363f3970fe99ad56e",
        "name": "Sprinkles",
        "symbol": "SPRINK",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 112969296,
        "ts": "2026-11-13T01:16:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x522bf4b5c9280bb6bb719f2ce7f514dd63c8c0c5",
        "name": "Topaz CL Position",
        "symbol": "TOPAZ-CL-POS",
        "deployer": "0xe61916343d98ca9ca76c7133aecf20500e426a49",
        "block": 112968995,
        "ts": "2026-11-13T01:16:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xee71a51e4eb815e52b036ada9c041d479fb336ea",
        "name": "Multi",
        "symbol": "MULTI",
        "deployer": "0xc5d22a7d5b203164bfa6479d72de9297cff19bf5",
        "block": 112968593,
        "ts": "2026-11-13T01:15:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfc5dbdfa663a0b68d08d7a75024c7223a6f55998",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xf6f505e1fcccc265ad4123232cd22b5afa1b5128",
        "block": 112968554,
        "ts": "2026-11-13T01:15:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x241a4f6e183452d2f3f0ce6fb0771c4044e58d86",
        "name": "MoonCoin",
        "symbol": "MoonCoin",
        "deployer": "0xf6f505e1fcccc265ad4123232cd22b5afa1b5128",
        "block": 112968198,
        "ts": "2026-11-13T01:14:41.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x9c9df3cffc8ab24ba4f6ead51c689415074e1e18",
        "name": "nvi-dih-ahh",
        "symbol": "NVIDIHAHH",
        "deployer": "0xd20278dc748cfe4a381e8969751873f1ab80cce4",
        "block": 112967812,
        "ts": "2026-11-13T01:14:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x19993b3cf15c1055063468eb932f5e335a7526ea",
        "name": "memecoin",
        "symbol": "MEME",
        "deployer": "0x4e2bd87ec828601cedaee948d61f64c0a2673b84",
        "block": 112967784,
        "ts": "2026-11-13T01:14:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1965df93face551075633f3db4dce64b2899729a",
        "name": "TheBandits",
        "symbol": "BANDIT",
        "deployer": "0x4c79c023ab8b1f9d8aa5b1228cdf976cef462d3f",
        "block": 112967745,
        "ts": "2026-11-13T01:13:56.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x813d705a97a8600ce28651e119ef57338181b6ea",
        "name": "e/acc",
        "symbol": "E/ACC",
        "deployer": "0xc5d22a7d5b203164bfa6479d72de9297cff19bf5",
        "block": 112967646,
        "ts": "2026-11-13T01:13:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcd8701ef42b73018a4083cbc9723286117d63f4e",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xe938580a3858ce49b4578b923691795c3816e134",
        "block": 112967570,
        "ts": "2026-11-13T01:13:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3256b34d121abdd7c8b2354bb7618586b1b8c918",
        "name": "Grail",
        "symbol": "GRAIL",
        "deployer": "0xf63ccbe48524404904b0f8fc3d5992521c3d4b8f",
        "block": 112966649,
        "ts": "2026-11-13T01:11:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x546f0500bd317db99bcba43398949e50d1b17c44",
        "name": "BTC",
        "symbol": "BTC",
        "deployer": "0xf0f1e1c2bf6070a1c978ec7935b78d6baec2dabb",
        "block": 112966647,
        "ts": "2026-11-13T01:11:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4295688e1ff65ed089ed8ad95f139f19545b856e",
        "name": "Chop GHOOD",
        "symbol": "chGHOOD",
        "deployer": "0x0000000014fa07ed0bf272fec06f652f82e3b237",
        "block": 112965932,
        "ts": "2026-11-13T01:10:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5400ba4e452f832e1542662203593004cf1303d1",
        "name": "Redacted Remilios",
        "symbol": "Remilios",
        "deployer": "0x1cd9d560440aab96f7b0a007ced7c2191cac5baf",
        "block": 112965749,
        "ts": "2026-11-13T01:10:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9fb66d84764c66a7f5c11f8ee3074d0e9f610c59",
        "name": "Cow Alandale Robinhood WETH-USDG",
        "symbol": "cowAlandaleRobinhoodWETH-USDG",
        "deployer": "0x03d9964f4d93a24b58c0fc3a8df3474b59ba8557",
        "block": 112965714,
        "ts": "2026-11-13T01:10:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc5a4561d4ba56be43dd36547f70e6e8795db9824",
        "name": "Reward Cow Alandale Robinhood WETH-USDG",
        "symbol": "rcowAlandaleRobinhoodWETH-USDG",
        "deployer": "0x03d9964f4d93a24b58c0fc3a8df3474b59ba8557",
        "block": 112965714,
        "ts": "2026-11-13T01:10:20.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
