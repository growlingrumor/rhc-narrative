/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-08T20:04:49.000Z",
    "opened_at": "2026-10-08T19:04:49.000Z",
    "window_hours": 1,
    "head_block": 83581381,
    "start_block": 83546156,
    "blocks_scanned": 35225,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 607,
    "unnamed_contracts": 0,
    "via_factory": 567,
    "no_receipt": 50,
    "candidates": 657,
    "mint_events": 28036,
    "deployers": 378,
    "roots": 757,
    "cleared_multiple": 181,
    "failed_gates": 169,
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
      "cat",
      "dog",
      "hype",
      "lol",
      "nft",
      "positions",
      "realm",
      "robinhood",
      "tiktok",
      "uniswap-uni",
      "usdg"
    ],
    "top": {
      "root": "robinhood",
      "launches": 37,
      "deployers": 10,
      "baseline_share": 0.0004,
      "multiple": 152.4,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "robinhood",
        "launches": 37,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 152.4,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "tiktok",
        "launches": 21,
        "deployers": 21,
        "baseline_share": 0.0004,
        "multiple": 86.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "cat",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 45.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nft",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 41.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 41.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "lol",
        "launches": 9,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 37.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 32.9,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "hype",
        "launches": 7,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 28.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "dog",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 24.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "realm",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 24.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 32,
        "deployers": 30,
        "baseline_share": 0.0004,
        "multiple": 131.8,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 91%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 29,
        "deployers": 27,
        "baseline_share": 0.0004,
        "multiple": 119.4,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 91%, merged to uniswap-uni"
      },
      {
        "root": "ramses",
        "launches": 12,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 49.4,
        "state": "THIN",
        "reason": "ramses: 2 deployers < 6 required"
      },
      {
        "root": "volatile",
        "launches": 10,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 41.2,
        "state": "THIN",
        "reason": "volatile: 1 deployers < 6 required"
      },
      {
        "root": "long",
        "launches": 6,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.7,
        "state": "THIN",
        "reason": "long: 3 deployers < 6 required"
      },
      {
        "root": "agent",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 20.6,
        "state": "THIN",
        "reason": "agent: 5 deployers < 6 required"
      },
      {
        "root": "arcus",
        "launches": 5,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.6,
        "state": "THIN",
        "reason": "arcus: 2 deployers < 6 required"
      },
      {
        "root": "arrowfarm",
        "launches": 5,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.6,
        "state": "THIN",
        "reason": "arrowfarm: 2 deployers < 6 required"
      },
      {
        "root": "hypers",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 20.6,
        "state": "THIN",
        "reason": "hypers: 5 deployers < 6 required"
      },
      {
        "root": "instagram",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 20.6,
        "state": "THIN",
        "reason": "instagram: 5 deployers < 6 required"
      },
      {
        "root": "paxos",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 20.6,
        "state": "THIN",
        "reason": "paxos: 1 deployers < 6 required"
      },
      {
        "root": "texas",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 20.6,
        "state": "THIN",
        "reason": "texas: 5 deployers < 6 required"
      },
      {
        "root": "texcat",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 20.6,
        "state": "THIN",
        "reason": "texcat: 5 deployers < 6 required"
      },
      {
        "root": "aiden",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "aiden: 4 launches < 5 required"
      },
      {
        "root": "bf",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "bf: 4 launches < 5 required"
      },
      {
        "root": "brownfi",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "brownfi: 4 launches < 5 required"
      },
      {
        "root": "cube",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "cube: 4 launches < 5 required"
      },
      {
        "root": "golden",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "golden: 4 launches < 5 required"
      },
      {
        "root": "hood",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "hood: 4 launches < 5 required"
      },
      {
        "root": "inc",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "inc: 4 launches < 5 required"
      },
      {
        "root": "schip",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "schip: 4 launches < 5 required"
      },
      {
        "root": "spmt",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "spmt: 4 launches < 5 required"
      },
      {
        "root": "staked",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "staked: 4 launches < 5 required"
      },
      {
        "root": "super",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "super: 4 launches < 5 required"
      },
      {
        "root": "superchip",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "superchip: 4 launches < 5 required"
      },
      {
        "root": "trader",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "trader: 4 launches < 5 required"
      },
      {
        "root": "weth",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "weth: 4 launches < 5 required"
      },
      {
        "root": "age",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 12.4,
        "state": "THIN",
        "reason": "age: 3 launches < 5 required"
      },
      {
        "root": "ai",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 12.4,
        "state": "THIN",
        "reason": "ai: 3 launches < 5 required"
      },
      {
        "root": "bauls",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 12.4,
        "state": "THIN",
        "reason": "bauls: 3 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x726e6c065e7bf5604192eaa745089809fd2daea4",
        "name": "Claw Machine 01",
        "symbol": "MAN",
        "deployer": "0x41e9efee3fb76cc923b2588284157479c99f0027",
        "block": 83581193,
        "ts": "2026-10-08T20:04:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4c579b4a1ab9054b8e44f5ee37e79d73ebdabcb7",
        "name": "Cube Twist Pressed Edition",
        "symbol": "PRESSED",
        "deployer": "0x8c10efbe5ce57e24eeb08d601e4a62306c8a29eb",
        "block": 83581091,
        "ts": "2026-10-08T20:04:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1529d437e474e1612ffe9aeb745b0305457213ca",
        "name": "Dealink",
        "symbol": "DLINK",
        "deployer": "0xf67dec5a2ed083d38db72ef1aa539f0865b8b9dc",
        "block": 83581075,
        "ts": "2026-10-08T20:04:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9cc2240ea76afa3e33a50731a97f13daa3688d72",
        "name": "POPHEAD",
        "symbol": "POP",
        "deployer": "0x41e9efee3fb76cc923b2588284157479c99f0027",
        "block": 83581024,
        "ts": "2026-10-08T20:04:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7bfee28a56ea3361ec5bf7d9d1553cd4631f0000",
        "name": "LOL 352bc",
        "symbol": "LOL",
        "deployer": "0xb22c03db53594d73c393a7479b04e52a5efe68cb",
        "block": 83581020,
        "ts": "2026-10-08T20:04:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa4da500ac07e2f5783a348fc4d919ac385ababe3",
        "name": "Algonaut",
        "symbol": "ALGONAUT",
        "deployer": "0xdbbd038cb4d6fad39f52cfb68b0bf3b8a665acfb",
        "block": 83580908,
        "ts": "2026-10-08T20:04:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xac9e4ec187384c229a30a7195f493c41eba2ba8b",
        "name": "Worldinmotion",
        "symbol": "WIM",
        "deployer": "0xa760fa20d1bd5ce3d15ed2fbe2c9e3886ef55f88",
        "block": 83580848,
        "ts": "2026-10-08T20:03:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x972873d0866d0d3c9875a5c780269f1f1563e78f",
        "name": "SHAPE",
        "symbol": "SHA",
        "deployer": "0x41e9efee3fb76cc923b2588284157479c99f0027",
        "block": 83580746,
        "ts": "2026-10-08T20:03:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9d1b343202ddc6bd6d299217daf715108ff2fd4a",
        "name": "LOL 0b183",
        "symbol": "LOL",
        "deployer": "0x06cb3a6841c92525e7a1998328e7c9d37e98d937",
        "block": 83580732,
        "ts": "2026-10-08T20:03:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf6d5aae77dd3560d951d81cfa062baf6ecc91e18",
        "name": "CASBERİ",
        "symbol": "CASBER",
        "deployer": "0xba7e2bac765141cc92a4994a3d0ff6654d1a6f24",
        "block": 83580711,
        "ts": "2026-10-08T20:03:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2cce16d8ff61adf8b96b01562a8b4a95670efb37",
        "name": "SPMT12",
        "symbol": "SPMT12",
        "deployer": "0xc28b7a418bf3abb93f1a08c8208d08880bfa55a0",
        "block": 83580693,
        "ts": "2026-10-08T20:03:39.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x8a04d320ea84623544bde6b4d4549a5bc20e6666",
        "name": "Grumplings",
        "symbol": "Grumplings",
        "deployer": "0xb15e42104b1c3df556d8f63732cfb85082968368",
        "block": 83580642,
        "ts": "2026-10-08T20:03:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbffcfdc2a068f9242dbecc558e15120a79e023ae",
        "name": "Dollars",
        "symbol": "DOLL",
        "deployer": "0x41e9efee3fb76cc923b2588284157479c99f0027",
        "block": 83580542,
        "ts": "2026-10-08T20:03:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9eb1aa5f3b1afe597e5064375aeadcd8da8b713b",
        "name": "Terminator",
        "symbol": "TERM",
        "deployer": "0x41e9efee3fb76cc923b2588284157479c99f0027",
        "block": 83580329,
        "ts": "2026-10-08T20:03:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x028aa08fc2f6c25c8883e434297a5a6ae0576d4b",
        "name": "kenzocoin",
        "symbol": "KENZO",
        "deployer": "0x831941887194c241a9b03c5ace608be9ef90f647",
        "block": 83580206,
        "ts": "2026-10-08T20:02:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x14e7899dbb1c83b682d2acd5ad6c15b88a0b3777",
        "name": "Tiktok Coin",
        "symbol": "TikTok",
        "deployer": "0x3232ce751b75c11a35851d5cec9bca8ae713c450",
        "block": 83580189,
        "ts": "2026-10-08T20:02:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x59ab3b2b285b3d4dfcc169c6a18e773eb60cf9cc",
        "name": "LMEOW",
        "symbol": "LMEOW",
        "deployer": "0x88b1b6595848fafb732e39a2f59a65a7ac4af361",
        "block": 83580166,
        "ts": "2026-10-08T20:02:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe63c13254833159872d49acc21918f7bb15e76f0",
        "name": "Old Luv",
        "symbol": "LUV",
        "deployer": "0x41e9efee3fb76cc923b2588284157479c99f0027",
        "block": 83580153,
        "ts": "2026-10-08T20:02:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf354bdba1ab800a8311b7df3645d1db63da07777",
        "name": "AICoin",
        "symbol": "AICoin",
        "deployer": "0x603014acb5c4d4f24418e009f2adb569de316a14",
        "block": 83580094,
        "ts": "2026-10-08T20:02:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfe02d05944243b4a252b5a3760b156ca12b7943b",
        "name": "Tiktok Con",
        "symbol": "TIKTOK",
        "deployer": "0x5ea9160937f1ee906b7ab0658a07ffc05169fcba",
        "block": 83580001,
        "ts": "2026-10-08T20:02:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfc3317cd003a4e0d063ca5257df3748a29e4e79e",
        "name": "Gold Tortoise",
        "symbol": "TOR",
        "deployer": "0x41e9efee3fb76cc923b2588284157479c99f0027",
        "block": 83579974,
        "ts": "2026-10-08T20:02:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x14aac47e8b56204ecdfe86da3b881bbdbd542874",
        "name": "Magical  Hammer",
        "symbol": "HAMM",
        "deployer": "0x41e9efee3fb76cc923b2588284157479c99f0027",
        "block": 83579820,
        "ts": "2026-10-08T20:02:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe6ca9db82d224e73114a0862892e162c760f0ba3",
        "name": "MEME",
        "symbol": "MEME",
        "deployer": "0x0834037443fa5b23504f7b8226bceea812ed9771",
        "block": 83579619,
        "ts": "2026-10-08T20:01:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbdfa783ce0a4d89d4d7edb1abd86f06b5f6d7777",
        "name": "Bounty Markets",
        "symbol": "BOUNTY",
        "deployer": "0xfe2cb6b8c284d632390268d8007873ac5865db0b",
        "block": 83579593,
        "ts": "2026-10-08T20:01:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa3aaa22bc8e80984be3e871440e7d66610c9870e",
        "name": "Where is Sam Trabucco",
        "symbol": "TRABUCCO",
        "deployer": "0x16e2c559d953847604fba0e853a0645246d8f1e3",
        "block": 83579554,
        "ts": "2026-10-08T20:01:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa0e65a3abec08858c83e302dd4f62a14f1eb282e",
        "name": "Egypt Crown",
        "symbol": "EGY",
        "deployer": "0x41e9efee3fb76cc923b2588284157479c99f0027",
        "block": 83579464,
        "ts": "2026-10-08T20:01:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x32ac8c1d7672667d5ebdea22935f7b06fc8d496f",
        "name": "HOOD",
        "symbol": "HOOD",
        "deployer": "0x2cfbed26a6bc44035b677cb689c0eb05c165458b",
        "block": 83579388,
        "ts": "2026-10-08T20:01:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc9eb9e9ae77aa24f909a4b14c3383ef72a677777",
        "name": "PAIR IT",
        "symbol": "PAIRIT",
        "deployer": "0x498b1bee7a146a4d10514f2d8eb1201b447ad384",
        "block": 83579378,
        "ts": "2026-10-08T20:01:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0e82fcc360e57ff1776a6d961083c4f33371eaa9",
        "name": "Pet Bird",
        "symbol": "BIR",
        "deployer": "0x41e9efee3fb76cc923b2588284157479c99f0027",
        "block": 83579258,
        "ts": "2026-10-08T20:01:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd9cf316bede69c291c9dbe16c8f9b0508de6b5e8",
        "name": "Clipped",
        "symbol": "CLIPPED",
        "deployer": "0xa161c619c7a49d610d2b584bdbdb3bf5018589f0",
        "block": 83579199,
        "ts": "2026-10-08T20:01:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3346fee820c4c521d160b1d81341b3b4f1b77777",
        "name": "Fishr",
        "symbol": "FISH",
        "deployer": "0x7485fbfd99993dab4c9964f53791e40d14253c97",
        "block": 83578914,
        "ts": "2026-10-08T20:00:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9de8a21877c3aa06ab8d0a2f1f97b93bd7587807",
        "name": "Jeff's Dog",
        "symbol": "MAX",
        "deployer": "0x520c016f5c59f0b2db1dd11849b330337350974e",
        "block": 83578817,
        "ts": "2026-10-08T20:00:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x51d0e5188afe12d502e29d982d20c190e7816107",
        "name": "SushiSwap V3 Positions NFT-V1",
        "symbol": "SUSHI-V3-POS",
        "deployer": "0x520c016f5c59f0b2db1dd11849b330337350974e",
        "block": 83578817,
        "ts": "2026-10-08T20:00:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbfcb903a2f7233c0a08dfb4f57cab54bfe806aa4",
        "name": "Wrapped Tesla • Robinhood Token",
        "symbol": "wTSLA",
        "deployer": "0x4a438c7c4052209b71cc403f28b9976300bffbbe",
        "block": 83578739,
        "ts": "2026-10-08T20:00:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9749e37f03294507b160e03848c3f036ddb61e18",
        "name": "Diggold",
        "symbol": "DIGGOLD",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 83578729,
        "ts": "2026-10-08T20:00:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf3393076dc9aac2170606c82116b099a6eb91e18",
        "name": "LONG",
        "symbol": "REALONG",
        "deployer": "0xba7e2bac765141cc92a4994a3d0ff6654d1a6f24",
        "block": 83578721,
        "ts": "2026-10-08T20:00:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0e9a580a69d1925a02dd2da61db7c72af3d1e2e0",
        "name": "ROB HAT",
        "symbol": "HAT",
        "deployer": "0x41e9efee3fb76cc923b2588284157479c99f0027",
        "block": 83578614,
        "ts": "2026-10-08T20:00:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd891819cc80d59a9c7caeb3214501d3240062271",
        "name": "Incovia",
        "symbol": "INCOVIA",
        "deployer": "0xc9a9da6cd4ae413950b4284faff678a351084926",
        "block": 83578398,
        "ts": "2026-10-08T19:59:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3da23e2c217d954cadaba7e7d0ca58c3210e60f1",
        "name": "MEME",
        "symbol": "MEME",
        "deployer": "0x36e002151f5f6a89296545a8c80ebe76b737cc6a",
        "block": 83578358,
        "ts": "2026-10-08T19:59:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8b35537f19c9db89d3c5cd30c88672553049e814",
        "name": "Roblynz",
        "symbol": "ROBLYNZ",
        "deployer": "0x7517aba14cf20bbfa660946eb5007492c3ba389f",
        "block": 83578234,
        "ts": "2026-10-08T19:59:26.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
