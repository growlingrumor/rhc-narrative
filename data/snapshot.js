/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-24T05:10:55.000Z",
    "opened_at": "2026-10-24T04:10:55.000Z",
    "window_hours": 1,
    "head_block": 96515085,
    "start_block": 96481250,
    "blocks_scanned": 33835,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 287,
    "unnamed_contracts": 0,
    "via_factory": 248,
    "no_receipt": 0,
    "candidates": 287,
    "mint_events": 13594,
    "deployers": 227,
    "roots": 390,
    "cleared_multiple": 390,
    "failed_gates": 381,
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
      "baby-moustache",
      "bitches-missed-ymb",
      "uniswap-uni",
      "usdg",
      "wallhook"
    ],
    "top": {
      "root": "usdg",
      "launches": 10,
      "deployers": 9,
      "baseline_share": 0.0004,
      "multiple": 87.1,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "usdg",
        "launches": 10,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 87.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "wallhook",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 61,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 19,
        "deployers": 18,
        "baseline_share": 0.0004,
        "multiple": 165.5,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 89%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 17,
        "deployers": 16,
        "baseline_share": 0.0004,
        "multiple": 148.1,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 89%, merged to uniswap-uni"
      },
      {
        "root": "baby",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 95.8,
        "state": "MERGED",
        "reason": "baby + moustache co-occur 83%, merged to baby-moustache"
      },
      {
        "root": "moustache",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 95.8,
        "state": "MERGED",
        "reason": "baby + moustache co-occur 83%, merged to baby-moustache"
      },
      {
        "root": "bitches",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 61,
        "state": "MERGED",
        "reason": "bitches + missed co-occur 100%, merged to bitches-missed-ymb"
      },
      {
        "root": "missed",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 61,
        "state": "MERGED",
        "reason": "bitches + missed co-occur 100%, merged to bitches-missed-ymb"
      },
      {
        "root": "ymb",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 61,
        "state": "MERGED",
        "reason": "bitches + missed co-occur 100%, merged to bitches-missed-ymb"
      },
      {
        "root": "layerbank",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 43.6,
        "state": "THIN",
        "reason": "layerbank: 3 deployers < 6 required"
      },
      {
        "root": "positions",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 43.6,
        "state": "THIN",
        "reason": "positions: 5 deployers < 6 required"
      },
      {
        "root": "robinhood",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 43.6,
        "state": "THIN",
        "reason": "robinhood: 3 deployers < 6 required"
      },
      {
        "root": "cat",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 34.8,
        "state": "THIN",
        "reason": "cat: 4 launches < 5 required"
      },
      {
        "root": "cyber",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 34.8,
        "state": "THIN",
        "reason": "cyber: 4 launches < 5 required"
      },
      {
        "root": "doe",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 34.8,
        "state": "THIN",
        "reason": "doe: 4 launches < 5 required"
      },
      {
        "root": "elon",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 34.8,
        "state": "THIN",
        "reason": "elon: 4 launches < 5 required"
      },
      {
        "root": "long",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 34.8,
        "state": "THIN",
        "reason": "long: 4 launches < 5 required"
      },
      {
        "root": "nft",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 34.8,
        "state": "THIN",
        "reason": "nft: 4 launches < 5 required"
      },
      {
        "root": "position",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 34.8,
        "state": "THIN",
        "reason": "position: 4 launches < 5 required"
      },
      {
        "root": "weth",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 34.8,
        "state": "THIN",
        "reason": "weth: 4 launches < 5 required"
      },
      {
        "root": "ai",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 26.1,
        "state": "THIN",
        "reason": "ai: 3 launches < 5 required"
      },
      {
        "root": "ape",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 26.1,
        "state": "THIN",
        "reason": "ape: 3 launches < 5 required"
      },
      {
        "root": "doge",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 26.1,
        "state": "THIN",
        "reason": "doge: 3 launches < 5 required"
      },
      {
        "root": "pve",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 26.1,
        "state": "THIN",
        "reason": "pve: 3 launches < 5 required"
      },
      {
        "root": "ramses",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 26.1,
        "state": "THIN",
        "reason": "ramses: 3 launches < 5 required"
      },
      {
        "root": "rax",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 26.1,
        "state": "THIN",
        "reason": "rax: 3 launches < 5 required"
      },
      {
        "root": "volatile",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 26.1,
        "state": "THIN",
        "reason": "volatile: 3 launches < 5 required"
      },
      {
        "root": "aero",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 17.4,
        "state": "THIN",
        "reason": "aero: 2 launches < 5 required"
      },
      {
        "root": "agent",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 17.4,
        "state": "THIN",
        "reason": "agent: 2 launches < 5 required"
      },
      {
        "root": "algos",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 17.4,
        "state": "THIN",
        "reason": "algos: 2 launches < 5 required"
      },
      {
        "root": "amm",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 17.4,
        "state": "THIN",
        "reason": "amm: 2 launches < 5 required"
      },
      {
        "root": "anon",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 17.4,
        "state": "THIN",
        "reason": "anon: 2 launches < 5 required"
      },
      {
        "root": "aramco",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 17.4,
        "state": "THIN",
        "reason": "aramco: 2 launches < 5 required"
      },
      {
        "root": "arcus",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 17.4,
        "state": "THIN",
        "reason": "arcus: 2 launches < 5 required"
      },
      {
        "root": "awards",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 17.4,
        "state": "THIN",
        "reason": "awards: 2 launches < 5 required"
      },
      {
        "root": "buzzo",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 17.4,
        "state": "THIN",
        "reason": "buzzo: 2 launches < 5 required"
      },
      {
        "root": "crawlscan",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 17.4,
        "state": "THIN",
        "reason": "crawlscan: 2 launches < 5 required"
      },
      {
        "root": "deposit",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 17.4,
        "state": "THIN",
        "reason": "deposit: 2 launches < 5 required"
      },
      {
        "root": "ed",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 17.4,
        "state": "THIN",
        "reason": "ed: 2 launches < 5 required"
      },
      {
        "root": "fables",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 17.4,
        "state": "THIN",
        "reason": "fables: 2 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0xf4a1cb908e5d98c4a36c6664b972ea1541959573",
        "name": "ELON",
        "symbol": "ELON",
        "deployer": "0xca23ab070fc04b37635119fe23aac64d1119306a",
        "block": 96514598,
        "ts": "2026-10-24T05:09:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf17463940f72cfa1c02d8c1ea9b8d00fbc5e1e18",
        "name": "DacityCoin",
        "symbol": "CITY",
        "deployer": "0xd20278dc748cfe4a381e8969751873f1ab80cce4",
        "block": 96514559,
        "ts": "2026-10-24T05:09:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xea32f20ff0121d4e1113b9a09cd1f50e3965d804",
        "name": "loudscene",
        "symbol": "LOUD",
        "deployer": "0x43379206f4bba42b231450b533dac402f17215e5",
        "block": 96514261,
        "ts": "2026-10-24T05:09:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa284738cd511ad068eb12b9636403d8831e5c7f6",
        "name": "anon",
        "symbol": "anon",
        "deployer": "0x530fca4efaee3b738127400056793f050cc134dc",
        "block": 96513993,
        "ts": "2026-10-24T05:08:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1ef86e57c5cbfc811f83a325d843fd2cd74f6c68",
        "name": "Yuzu USDG Equity Basis",
        "symbol": "yzBasisUSD",
        "deployer": "0xbf602a04d7683cd54e327e7a54d7f3d56cd4b536",
        "block": 96513898,
        "ts": "2026-10-24T05:08:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd77399c73bf87c0e27f84c791b817901309a9573",
        "name": "ELON",
        "symbol": "ELON",
        "deployer": "0x9f5017089c523ebaa2c6122c9dc118e419a8ba4c",
        "block": 96513709,
        "ts": "2026-10-24T05:08:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x08f95105844ad82ae7b03eca8ba408bf1383ca26",
        "name": "Moustache Baby",
        "symbol": "Moustache",
        "deployer": "0xb61dad6b84856af307bc6a35e57503f2fab91e72",
        "block": 96513605,
        "ts": "2026-10-24T05:08:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd3bd1a346a8d35c232241d39cf8e30e7f8ca928b",
        "name": "███",
        "symbol": "███",
        "deployer": "0xe67ae57e99f4294f9cbbbc46697bca845adfe4be",
        "block": 96513602,
        "ts": "2026-10-24T05:08:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x022e9a5d96b53507b1ea9131521dee5a32237777",
        "name": "PlutoCoin",
        "symbol": "PLUTOCOIN",
        "deployer": "0xea5c98a6164850f6ace669bd753de6928881b65e",
        "block": 96513571,
        "ts": "2026-10-24T05:08:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8c61e6996e779e75b5fbf23cd854cf88462494a7",
        "name": "PlutoCoin",
        "symbol": "PLUTOCOIN",
        "deployer": "0x1a37597a84a3981389df102640774590376ef47b",
        "block": 96513450,
        "ts": "2026-10-24T05:07:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x52dc7ef1859c203f01a979432a0cd0302072c009",
        "name": "The Meme King",
        "symbol": "Haaland",
        "deployer": "0x49948bf62959f9fb90e050240c85920530d00f4e",
        "block": 96513093,
        "ts": "2026-10-24T05:07:18.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xe7500c4fa9db229b15bd8dfc63e9c2d3ca817777",
        "name": "ZDDIKS",
        "symbol": "ZDDIKS",
        "deployer": "0x21853863aeec000ebfa52e46b366fdf2ac02ca6b",
        "block": 96512819,
        "ts": "2026-10-24T05:06:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb237cbd16f1ecbb463f3b83f81a3697c29c832ab",
        "name": "ZDDIKS",
        "symbol": "ZDDIKS",
        "deployer": "0xf2b8e64f237b1f398500e58f7033e084c5b887f1",
        "block": 96512737,
        "ts": "2026-10-24T05:06:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb5d46c1804737e464e6497a4a393848872ec7777",
        "name": "Aramco",
        "symbol": "ARAMCO",
        "deployer": "0x980b9bb5b3163638e0a35f8f26ff40547b16e2a9",
        "block": 96512610,
        "ts": "2026-10-24T05:06:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4282cbaa66301ac298821ad9625da108f90050c0",
        "name": "MoodengPnutPenguinWifHat",
        "symbol": "PVE",
        "deployer": "0x024e7f17a53e2468782b6c6bc907437054147d2b",
        "block": 96512496,
        "ts": "2026-10-24T05:06:16.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xc9d9506bd22fa02008d696540d7d23fda8524ab3",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x168b921aa662cac2a0b76a7d1fc95ccaa85210eb",
        "block": 96512463,
        "ts": "2026-10-24T05:06:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0545e777928de305632ecc1982a83283caec5b08",
        "name": "MoodengPnutPenguinWifHat",
        "symbol": "PVE",
        "deployer": "0x024e7f17a53e2468782b6c6bc907437054147d2b",
        "block": 96512420,
        "ts": "2026-10-24T05:06:08.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x8ee0115938f67b828f07a69969c48886cf2b7777",
        "name": "Moustache Trump",
        "symbol": "MP",
        "deployer": "0xe26a8a93a803f6dcc9355da3beac69d733ddfd5d",
        "block": 96512373,
        "ts": "2026-10-24T05:06:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8be9aaa77990940a21fe84a480b5e60f02ae742e",
        "name": "MarlinX",
        "symbol": "MRLX",
        "deployer": "0x12a254fc19c70c46e6ce1eac6a0052aafca1a89a",
        "block": 96512215,
        "ts": "2026-10-24T05:05:47.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x18189c22135de7fa626d21211910dae82f78f9b2",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x078e6075407c4a1e361aa1471538e6c3aa29070d",
        "block": 96512203,
        "ts": "2026-10-24T05:05:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2abacd6acc88f94c9e24a03e870ab5061467778d",
        "name": "███",
        "symbol": "███",
        "deployer": "0xa1b6162765de75c26d03eefac2ad98b2e939c2d6",
        "block": 96511853,
        "ts": "2026-10-24T05:05:09.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xd9d674b04a72affe00e06385535eaac10b988fca",
        "name": "Project Mars",
        "symbol": "DRILL",
        "deployer": "0x81015f2bc2f680d307be755726aa34bfa2e108c1",
        "block": 96511837,
        "ts": "2026-10-24T05:05:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcdf569a7c5d18283c9e9134dfe2e380df73c1984",
        "name": "Salute face",
        "symbol": "saluteface",
        "deployer": "0x078e6075407c4a1e361aa1471538e6c3aa29070d",
        "block": 96511829,
        "ts": "2026-10-24T05:05:07.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x8a1658f80d61ab9b6bb624df755bd686020f4bbc",
        "name": "aramco",
        "symbol": "ARAMCO",
        "deployer": "0xa190a87d5eda63395a56825a4e18d16f317e7ec0",
        "block": 96511647,
        "ts": "2026-10-24T05:04:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x15bbc5eb8ccbb2fc7801fdad0c8ce7167d253250",
        "name": "DOGE PEPE MUSTACHE",
        "symbol": "DPM",
        "deployer": "0x3fa26cc2828615a6d628597a6bc9287d10d137ba",
        "block": 96511610,
        "ts": "2026-10-24T05:04:45.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x091f0c7e675a787a4018eb47c30bed3fa2013b65",
        "name": "MintStakeShare 2",
        "symbol": "MSS2",
        "deployer": "0x7ddca859d0a6f4d9b4a4a9209e97ac0c73e454ec",
        "block": 96511418,
        "ts": "2026-10-24T05:04:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa188c3700449ce57e2e67fb10dc51d3c3dd8e4e7",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x168b921aa662cac2a0b76a7d1fc95ccaa85210eb",
        "block": 96511098,
        "ts": "2026-10-24T05:03:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa96cc1c7a26a5fee91645b96b22e9b8adc913425",
        "name": "STARCROP TROOPERS",
        "symbol": "STARCROP",
        "deployer": "0x62c749fcff5ab757ea3010a919d1ae0b30759650",
        "block": 96510929,
        "ts": "2026-10-24T05:03:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x86cd2eef558a069413e1e544b34dc0812587180b",
        "name": "Avalon Test 4",
        "symbol": "TEST4",
        "deployer": "0xa43cb087134ebc0344416cec7fd1d3379ea1a8ba",
        "block": 96510866,
        "ts": "2026-10-24T05:03:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfbb0e71126011f785d7c3c18ffbf20276e82b8c4",
        "name": "IncognitoPad",
        "symbol": "INCO",
        "deployer": "0x43370589c7500e4bf597b3e620b094dc27ce3392",
        "block": 96510768,
        "ts": "2026-10-24T05:03:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xaf47146b781f16ca5a898803e641d8a4e5ad5222",
        "name": "Nvidia xStock",
        "symbol": "NVDAX",
        "deployer": "0x4337e1a2689cf73ecc12d798477e1ede4f4d56c6",
        "block": 96510727,
        "ts": "2026-10-24T05:03:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd429d8cde37547fa809706ed4909c750673d7d48",
        "name": "Error 888",
        "symbol": "E888",
        "deployer": "0x4337063e01d266b3aea4a4e91053025cbc8e3a73",
        "block": 96510357,
        "ts": "2026-10-24T05:02:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x03d103fc3d8a1f6fce6df08d834c35cd02e27777",
        "name": "CrawlScan",
        "symbol": "SCAN",
        "deployer": "0x4f6d40378da3874cb49b6834b4c20ada43842691",
        "block": 96510206,
        "ts": "2026-10-24T05:02:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x68cfa4b62c20779e8655afb7c9b1eaaf557b977f",
        "name": "CrawlScan",
        "symbol": "SCAN",
        "deployer": "0x45ea1a26f88a00305141b1ea985f9a66e9b65c1b",
        "block": 96510107,
        "ts": "2026-10-24T05:02:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4e3a5b5f8d78b2e4c47a5a32df40794b201e9fac",
        "name": "SNOWBALL",
        "symbol": "FLYWHEEL",
        "deployer": "0xa36bd8aa9ef16e484ced468fcb1a7675bc4c860c",
        "block": 96510050,
        "ts": "2026-10-24T05:02:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa8aba632ac7b345c97fd55087a399de528ca913c",
        "name": "John Doe",
        "symbol": "John",
        "deployer": "0x41f16d1bc7c35e4766e6cdf811aaa75a45422a95",
        "block": 96510046,
        "ts": "2026-10-24T05:01:59.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x58ed296773a03d33ff1c685e80dfe0b51ad22829",
        "name": "Sogni AI",
        "symbol": "SOGNI",
        "deployer": "0x433785af3a50bb3d281d3d44dbd0391a30c6cd3e",
        "block": 96510018,
        "ts": "2026-10-24T05:01:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf42e85a2227d44c3419a618e4223925cccff5bfe",
        "name": "Spark Pad",
        "symbol": "SPARK",
        "deployer": "0x85b76c74a86fd1db7cb2933f5fb835cdb451ff7d",
        "block": 96509961,
        "ts": "2026-10-24T05:01:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x40de5b73e4209fdc16ef0cf1901aca6a6132187f",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x810376e7a327635c50f6e36566ee3a6721c87703",
        "block": 96509864,
        "ts": "2026-10-24T05:01:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb8c31f3be40355cde00f4bf23777e9488b47e0cc",
        "name": "bnb",
        "symbol": "bnb",
        "deployer": "0x9ed8a4ea140e76ea25199464732acb441da77675",
        "block": 96509284,
        "ts": "2026-10-24T05:00:42.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
