/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-24T13:32:59.000Z",
    "opened_at": "2026-10-24T12:32:59.000Z",
    "window_hours": 1,
    "head_block": 96800543,
    "start_block": 96766365,
    "blocks_scanned": 34178,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 393,
    "unnamed_contracts": 0,
    "via_factory": 355,
    "no_receipt": 0,
    "candidates": 393,
    "mint_events": 16008,
    "deployers": 279,
    "roots": 482,
    "cleared_multiple": 482,
    "failed_gates": 473,
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
      "dacitycoin-audacity",
      "nft",
      "opensolana",
      "robinhood",
      "uniswap-uni",
      "usdg"
    ],
    "top": {
      "root": "opensolana",
      "launches": 23,
      "deployers": 23,
      "baseline_share": 0.0004,
      "multiple": 146.3,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "opensolana",
        "launches": 23,
        "deployers": 23,
        "baseline_share": 0.0004,
        "multiple": 146.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "ai",
        "launches": 11,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 70,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "robinhood",
        "launches": 11,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 70,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 63.6,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nft",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 44.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 24,
        "deployers": 19,
        "baseline_share": 0.0004,
        "multiple": 152.7,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 67%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 16,
        "deployers": 16,
        "baseline_share": 0.0004,
        "multiple": 101.8,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 67%, merged to uniswap-uni"
      },
      {
        "root": "dacitycoin",
        "launches": 9,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 57.3,
        "state": "MERGED",
        "reason": "dacitycoin + audacity co-occur 67%, merged to dacitycoin-audacity"
      },
      {
        "root": "audacity",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 38.2,
        "state": "MERGED",
        "reason": "dacitycoin + audacity co-occur 67%, merged to dacitycoin-audacity"
      },
      {
        "root": "cow",
        "launches": 8,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 50.9,
        "state": "THIN",
        "reason": "cow: 2 deployers < 6 required"
      },
      {
        "root": "acon",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 31.8,
        "state": "THIN",
        "reason": "acon: 5 deployers < 6 required"
      },
      {
        "root": "acontext",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 31.8,
        "state": "THIN",
        "reason": "acontext: 5 deployers < 6 required"
      },
      {
        "root": "deposit",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 31.8,
        "state": "THIN",
        "reason": "deposit: 3 deployers < 6 required"
      },
      {
        "root": "layerbank",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 31.8,
        "state": "THIN",
        "reason": "layerbank: 3 deployers < 6 required"
      },
      {
        "root": "mumbo",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 31.8,
        "state": "THIN",
        "reason": "mumbo: 5 deployers < 6 required"
      },
      {
        "root": "mumbooth",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 31.8,
        "state": "THIN",
        "reason": "mumbooth: 5 deployers < 6 required"
      },
      {
        "root": "positions",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 31.8,
        "state": "THIN",
        "reason": "positions: 5 deployers < 6 required"
      },
      {
        "root": "weth",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 31.8,
        "state": "THIN",
        "reason": "weth: 5 deployers < 6 required"
      },
      {
        "root": "world",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 31.8,
        "state": "THIN",
        "reason": "world: 5 deployers < 6 required"
      },
      {
        "root": "amm",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 25.4,
        "state": "THIN",
        "reason": "amm: 4 launches < 5 required"
      },
      {
        "root": "baby",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 25.4,
        "state": "THIN",
        "reason": "baby: 4 launches < 5 required"
      },
      {
        "root": "bi",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 25.4,
        "state": "THIN",
        "reason": "bi: 4 launches < 5 required"
      },
      {
        "root": "box",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 25.4,
        "state": "THIN",
        "reason": "box: 4 launches < 5 required"
      },
      {
        "root": "hood",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 25.4,
        "state": "THIN",
        "reason": "hood: 4 launches < 5 required"
      },
      {
        "root": "index",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 25.4,
        "state": "THIN",
        "reason": "index: 4 launches < 5 required"
      },
      {
        "root": "intelligence",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 25.4,
        "state": "THIN",
        "reason": "intelligence: 4 launches < 5 required"
      },
      {
        "root": "kangaroo",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 25.4,
        "state": "THIN",
        "reason": "kangaroo: 4 launches < 5 required"
      },
      {
        "root": "ramses",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 25.4,
        "state": "THIN",
        "reason": "ramses: 4 launches < 5 required"
      },
      {
        "root": "reward",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 25.4,
        "state": "THIN",
        "reason": "reward: 4 launches < 5 required"
      },
      {
        "root": "safety",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 25.4,
        "state": "THIN",
        "reason": "safety: 4 launches < 5 required"
      },
      {
        "root": "simul",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 25.4,
        "state": "THIN",
        "reason": "simul: 4 launches < 5 required"
      },
      {
        "root": "cat",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 19.1,
        "state": "THIN",
        "reason": "cat: 3 launches < 5 required"
      },
      {
        "root": "cemete",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.1,
        "state": "THIN",
        "reason": "cemete: 3 launches < 5 required"
      },
      {
        "root": "dacity",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.1,
        "state": "THIN",
        "reason": "dacity: 3 launches < 5 required"
      },
      {
        "root": "dividend",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.1,
        "state": "THIN",
        "reason": "dividend: 3 launches < 5 required"
      },
      {
        "root": "dog",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.1,
        "state": "THIN",
        "reason": "dog: 3 launches < 5 required"
      },
      {
        "root": "hoodl",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.1,
        "state": "THIN",
        "reason": "hoodl: 3 launches < 5 required"
      },
      {
        "root": "hoodlox",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.1,
        "state": "THIN",
        "reason": "hoodlox: 3 launches < 5 required"
      },
      {
        "root": "miorail",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.1,
        "state": "THIN",
        "reason": "miorail: 3 launches < 5 required"
      },
      {
        "root": "pangea",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 19.1,
        "state": "THIN",
        "reason": "pangea: 3 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x22671c555b2f6b7837fb197bbfe9fbec774719d2",
        "name": "MUMBOOTH",
        "symbol": "MUMBO",
        "deployer": "0xe0237ab9e76446eba02b893d73331453f13c2aef",
        "block": 96800433,
        "ts": "2026-10-24T13:32:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0131a3850d981c348cdf9026e5f579d21f7dc7f2",
        "name": "Tung Tung Tung Sahur",
        "symbol": "TripleT",
        "deployer": "0x8f0b31547856e728bd013b9000c6eb7d5f309c6f",
        "block": 96800431,
        "ts": "2026-10-24T13:32:48.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x81c6d1d10da8b456db21085bf2afe33c5b833498",
        "name": "MUMBOOTH",
        "symbol": "MUMBO",
        "deployer": "0xb6a83df5ab5291db7d7b20052c5a8c16c6f9f2fe",
        "block": 96800281,
        "ts": "2026-10-24T13:32:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x79bbf4508b1391af3a0f4b30bb5fc4aa9ab0e07c",
        "name": "HeyAnon",
        "symbol": "Anon",
        "deployer": "0xe93685f3bba03016f02bd1828badd6195988d950",
        "block": 96800213,
        "ts": "2026-10-24T13:32:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc1988035934d3908c12b77165cde6104f1277777",
        "name": "Flop Labs",
        "symbol": "FLOP",
        "deployer": "0xe26a8a93a803f6dcc9355da3beac69d733ddfd5d",
        "block": 96800036,
        "ts": "2026-10-24T13:32:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x18c9719ab6ae4e1a6f95f281ef288e3af5d58602",
        "name": "SurfBoard",
        "symbol": "SURFBOARD",
        "deployer": "0x170708f2c57d65824ace0885dd8758e9f0368d6c",
        "block": 96800023,
        "ts": "2026-10-24T13:32:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8339ea50b47a57cccef25b607d615fa651937777",
        "name": "Obvance",
        "symbol": "OBVANCE",
        "deployer": "0xea5c98a6164850f6ace669bd753de6928881b65e",
        "block": 96800013,
        "ts": "2026-10-24T13:32:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0c66444b3a25a0618980d92184afa6ef90cc7777",
        "name": "Moustache Inu",
        "symbol": "MI",
        "deployer": "0x4f6d40378da3874cb49b6834b4c20ada43842691",
        "block": 96799991,
        "ts": "2026-10-24T13:31:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdda02139ac19ecedbade3d035c53142e0f95cff8",
        "name": "miorail.xyz",
        "symbol": "miorail",
        "deployer": "0x4495d404d7b14c72ead195f8e4f93ae6aee55691",
        "block": 96799938,
        "ts": "2026-10-24T13:31:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf104febc2a8bfac28e381c42bba52e2125e33726",
        "name": "Cemete",
        "symbol": "CME",
        "deployer": "0x096b70b80a9be7ce733a271c69af0c332f3d7b50",
        "block": 96799883,
        "ts": "2026-10-24T13:31:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd4b04750bc688df4edc6b832a544156682725b46",
        "name": "Obvance",
        "symbol": "OBVANCE",
        "deployer": "0x8c6f7d626cf4be49f92b04ae9251d39f01582177",
        "block": 96799861,
        "ts": "2026-10-24T13:31:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4dc48cca3ca52d5b767f9c0a71df3f00a4b822e2",
        "name": "Tung Tung Tung Sahur",
        "symbol": "TripleT",
        "deployer": "0x4f6843adcd7760892fb81e973ee252fc9ba57843",
        "block": 96799830,
        "ts": "2026-10-24T13:31:42.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xb964cb22985055322fedfe63032faf2fb565b664",
        "name": "Masha the flexer",
        "symbol": "Masha",
        "deployer": "0x530fca4efaee3b738127400056793f050cc134dc",
        "block": 96799724,
        "ts": "2026-10-24T13:31:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4685be3eb12eb980cc03c5f1a18397834d3f8429",
        "name": "MUMBOOTH",
        "symbol": "MUMBO",
        "deployer": "0x37ce1ad57068836996118144b598761b4e946f70",
        "block": 96799709,
        "ts": "2026-10-24T13:31:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4ab9a0fe5ff5e123ca965162d0a622bcd3d8fee9",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xdbe16ada40865597a4bf3d9845204b36979b51b9",
        "block": 96799702,
        "ts": "2026-10-24T13:31:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x88c4c42ed68584ff02f5a00d5d3d985108a3961c",
        "name": "Edel",
        "symbol": "EDEL",
        "deployer": "0x99e06797c9feb52391e2c14718f001be71ec1519",
        "block": 96799593,
        "ts": "2026-10-24T13:31:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x60c29b628b46ce8ca38257b353abb16d5b94704e",
        "name": "RobinVault",
        "symbol": "RobinVault",
        "deployer": "0x91db24d713baf12083db0919da910d03cd7bdea4",
        "block": 96799368,
        "ts": "2026-10-24T13:30:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbfa1c7342632acad794fefc9f573b491ba46f3e8",
        "name": "Memory",
        "symbol": "MEMORY",
        "deployer": "0x1f6de13acc202fecd009c0f85f2728498794fd9e",
        "block": 96799348,
        "ts": "2026-10-24T13:30:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x33c6b29d85ba6e59eebae5458a475cb6e03588fe",
        "name": "OpenSolana",
        "symbol": "OpenSolana",
        "deployer": "0xa194e9f31758da9c05ca82ffec76e1d45f8e0423",
        "block": 96799259,
        "ts": "2026-10-24T13:30:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5b318d6f28a8968d9dc978b9b16f1355bc03863a",
        "name": "HOOD CABAL",
        "symbol": "CABAL",
        "deployer": "0x66d76c23bd3b2a5467359c7f22143ce277bdea41",
        "block": 96799199,
        "ts": "2026-10-24T13:30:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x911e453758311e8c1c2535f1e06cba300600b514",
        "name": "WSM TEST",
        "symbol": "WSMT",
        "deployer": "0x4c6b778e5a5395c86e6f09e1e7b72c9db3958175",
        "block": 96799164,
        "ts": "2026-10-24T13:30:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe760cfa0063ec169edb8cbe14dd58c2658f6d632",
        "name": "Farsquint",
        "symbol": "FARSQUINT",
        "deployer": "0xa8e736e2d4b797ed7f55c35991526dde8356f249",
        "block": 96799051,
        "ts": "2026-10-24T13:30:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3b1f5d9dce3239d65078ec2686eba7dde7503107",
        "name": "Tung Tung Tung Sahur",
        "symbol": "TRIPLET",
        "deployer": "0x50c956260419af330fe46c5cf88a8f87f6a95fd8",
        "block": 96798911,
        "ts": "2026-10-24T13:30:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xab0ee5e213319d38d7ee6e9d8dc7ed6c8e5b4a6d",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xfd6a6ea7342885ef42ff42bd640bc39e47f93e63",
        "block": 96798901,
        "ts": "2026-10-24T13:30:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x72a41ba808a48e9e6f5a6576a96d49098d4ab942",
        "name": "HOODLOX",
        "symbol": "HOODL",
        "deployer": "0x7bcde851162efa0832239d238abf3cb3ccaa4cef",
        "block": 96798882,
        "ts": "2026-10-24T13:30:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa46672d6c53f9046c1645b048e06d26110016b67",
        "name": "Fire Cat",
        "symbol": "FIRE",
        "deployer": "0xdbe16ada40865597a4bf3d9845204b36979b51b9",
        "block": 96798828,
        "ts": "2026-10-24T13:29:57.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x1a52e95457abcf44fb9998e494be7b8c4d841157",
        "name": "Buddies",
        "symbol": "BUDDIES",
        "deployer": "0xa67d7eb4dc68fa6ce8e34ef8cadaf075b9893fbb",
        "block": 96798746,
        "ts": "2026-10-24T13:29:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9660f9fd76dfa41559f7e38ddb883950aa824578",
        "name": "OpenSolana",
        "symbol": "OpenSolana",
        "deployer": "0xe609d0960cfecb3878ea3aeacb4c0c9e057dcdd3",
        "block": 96798457,
        "ts": "2026-10-24T13:29:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x15910dd780abc0f99a17db451c0dc35477b37777",
        "name": "EU SOCIAL TOKEN CREDIT",
        "symbol": "EUSTC",
        "deployer": "0x21853863aeec000ebfa52e46b366fdf2ac02ca6b",
        "block": 96798370,
        "ts": "2026-10-24T13:29:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4abe0b77b54be9f4d07ec080df0ed0025feeccb0",
        "name": "Standard Notional",
        "symbol": "SNP",
        "deployer": "0xfd6a6ea7342885ef42ff42bd640bc39e47f93e63",
        "block": 96798139,
        "ts": "2026-10-24T13:28:42.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x3207f6f7f2de5f0fba9f7aefb54f736533a966d8",
        "name": "OpenSolana",
        "symbol": "OpenSolana",
        "deployer": "0xc463b0120dac4189c726ddee209a737c492806a4",
        "block": 96798128,
        "ts": "2026-10-24T13:28:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x00000000043c1117dafa3a3d0c7148eb48b30130",
        "name": "flETH",
        "symbol": "flETH",
        "deployer": "0x08eb627cc6945017a7daef55d9c459a2e5b5bea9",
        "block": 96798061,
        "ts": "2026-10-24T13:28:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7c153cb4d3f6513e7e9b622040f60437cdd12c65",
        "name": "MOODS",
        "symbol": "MDS",
        "deployer": "0x56eac10eb3dccecfd1d1b7e5fb319713781e05e0",
        "block": 96797988,
        "ts": "2026-10-24T13:28:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa3d2f9946f7e29d7e7774c6dff0b3c970fc37777",
        "name": "Storage Cards",
        "symbol": "CARDS",
        "deployer": "0x980b9bb5b3163638e0a35f8f26ff40547b16e2a9",
        "block": 96797970,
        "ts": "2026-10-24T13:28:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x29f9892234b954510ec825d70c3f246241827aa7",
        "name": "OpenSolana",
        "symbol": "OpenSolana",
        "deployer": "0xa2d7660d228efc8bb19c1ad20dd42986053b4d6a",
        "block": 96797863,
        "ts": "2026-10-24T13:28:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x114f19ae40ba8cd6ac7e4fe9c9089d54b6d08db8",
        "name": "Storage Cards",
        "symbol": "CARDS",
        "deployer": "0xf04304ba3c2a7523172d53c9e4907edd37e64689",
        "block": 96797858,
        "ts": "2026-10-24T13:28:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3ec130b02c15470a4555fdf88daf8c1aede73c57",
        "name": "pogcat",
        "symbol": "POGCAT",
        "deployer": "0x4a1ae6857dbf8b5440a54858e17558fcde5180cf",
        "block": 96797792,
        "ts": "2026-10-24T13:28:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x22771b45a7ebd5d0a4c087ba60eaee2039c216ab",
        "name": "Tradedothood",
        "symbol": "TRADE",
        "deployer": "0x22919a7f0a606453ad680bedf58898415b454632",
        "block": 96797575,
        "ts": "2026-10-24T13:27:40.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x974e5ab2f67928888ef12f8cf41ab0ad6a7c9851",
        "name": "Autoinc",
        "symbol": "AUTO",
        "deployer": "0xe5a5755dc95a6f66962daa63fc32c16c824e1447",
        "block": 96797524,
        "ts": "2026-10-24T13:27:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x064ab7999eee99fbae0a9600e02c0902f4b8a16a",
        "name": "Trumpcoin",
        "symbol": "1",
        "deployer": "0x40948fb0b256619daec949992ca4d3a61f693dfd",
        "block": 96796524,
        "ts": "2026-10-24T13:25:52.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
