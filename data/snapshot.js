/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-28T07:28:48.000Z",
    "opened_at": "2026-10-28T06:28:48.000Z",
    "window_hours": 1,
    "head_block": 99901823,
    "start_block": 99867732,
    "blocks_scanned": 34091,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 381,
    "unnamed_contracts": 1,
    "via_factory": 355,
    "no_receipt": 0,
    "candidates": 382,
    "mint_events": 13410,
    "deployers": 294,
    "roots": 395,
    "cleared_multiple": 395,
    "failed_gates": 385,
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
      "agent-harmonic",
      "imagine",
      "nft",
      "positions",
      "robinhood",
      "robotaxi",
      "uniswap-uni",
      "usdg"
    ],
    "top": {
      "root": "robotaxi",
      "launches": 75,
      "deployers": 75,
      "baseline_share": 0.0004,
      "multiple": 492.1,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "robotaxi",
        "launches": 75,
        "deployers": 75,
        "baseline_share": 0.0004,
        "multiple": 492.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "robinhood",
        "launches": 14,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 91.9,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 72.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nft",
        "launches": 9,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 59.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 52.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "imagine",
        "launches": 7,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 45.9,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 26,
        "deployers": 23,
        "baseline_share": 0.0004,
        "multiple": 170.6,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 88%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 23,
        "deployers": 20,
        "baseline_share": 0.0004,
        "multiple": 150.9,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 88%, merged to uniswap-uni"
      },
      {
        "root": "agent",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 65.6,
        "state": "MERGED",
        "reason": "agent + harmonic co-occur 64%, merged to agent-harmonic"
      },
      {
        "root": "harmonic",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 52.5,
        "state": "MERGED",
        "reason": "agent + harmonic co-occur 64%, merged to agent-harmonic"
      },
      {
        "root": "weth",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 32.8,
        "state": "THIN",
        "reason": "weth: 5 deployers < 6 required"
      },
      {
        "root": "world",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 32.8,
        "state": "THIN",
        "reason": "world: 5 deployers < 6 required"
      },
      {
        "root": "ai",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 26.2,
        "state": "THIN",
        "reason": "ai: 4 launches < 5 required"
      },
      {
        "root": "dog",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 26.2,
        "state": "THIN",
        "reason": "dog: 4 launches < 5 required"
      },
      {
        "root": "grokbot",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 26.2,
        "state": "THIN",
        "reason": "grokbot: 4 launches < 5 required"
      },
      {
        "root": "layerbank",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 26.2,
        "state": "THIN",
        "reason": "layerbank: 4 launches < 5 required"
      },
      {
        "root": "pontara",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 26.2,
        "state": "THIN",
        "reason": "pontara: 4 launches < 5 required"
      },
      {
        "root": "virtuals",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 26.2,
        "state": "THIN",
        "reason": "virtuals: 4 launches < 5 required"
      },
      {
        "root": "volatile",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 26.2,
        "state": "THIN",
        "reason": "volatile: 4 launches < 5 required"
      },
      {
        "root": "agents",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.7,
        "state": "THIN",
        "reason": "agents: 3 launches < 5 required"
      },
      {
        "root": "amm",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 19.7,
        "state": "THIN",
        "reason": "amm: 3 launches < 5 required"
      },
      {
        "root": "cat",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.7,
        "state": "THIN",
        "reason": "cat: 3 launches < 5 required"
      },
      {
        "root": "chop",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 19.7,
        "state": "THIN",
        "reason": "chop: 3 launches < 5 required"
      },
      {
        "root": "hood",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 19.7,
        "state": "THIN",
        "reason": "hood: 3 launches < 5 required"
      },
      {
        "root": "pangea",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.7,
        "state": "THIN",
        "reason": "pangea: 3 launches < 5 required"
      },
      {
        "root": "pos",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.7,
        "state": "THIN",
        "reason": "pos: 3 launches < 5 required"
      },
      {
        "root": "ramses",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.7,
        "state": "THIN",
        "reason": "ramses: 3 launches < 5 required"
      },
      {
        "root": "robot",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.7,
        "state": "THIN",
        "reason": "robot: 3 launches < 5 required"
      },
      {
        "root": "slvr",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.7,
        "state": "THIN",
        "reason": "slvr: 3 launches < 5 required"
      },
      {
        "root": "staked",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.7,
        "state": "THIN",
        "reason": "staked: 3 launches < 5 required"
      },
      {
        "root": "vote",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.7,
        "state": "THIN",
        "reason": "vote: 3 launches < 5 required"
      },
      {
        "root": "waddleworld",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.7,
        "state": "THIN",
        "reason": "waddleworld: 3 launches < 5 required"
      },
      {
        "root": "aero",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 13.1,
        "state": "THIN",
        "reason": "aero: 2 launches < 5 required"
      },
      {
        "root": "analong",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 13.1,
        "state": "THIN",
        "reason": "analong: 2 launches < 5 required"
      },
      {
        "root": "arrowfarm",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 13.1,
        "state": "THIN",
        "reason": "arrowfarm: 2 launches < 5 required"
      },
      {
        "root": "beneficiary",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 13.1,
        "state": "THIN",
        "reason": "beneficiary: 2 launches < 5 required"
      },
      {
        "root": "borrowable",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 13.1,
        "state": "THIN",
        "reason": "borrowable: 2 launches < 5 required"
      },
      {
        "root": "branch",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 13.1,
        "state": "THIN",
        "reason": "branch: 2 launches < 5 required"
      },
      {
        "root": "chihuahood",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 13.1,
        "state": "THIN",
        "reason": "chihuahood: 2 launches < 5 required"
      },
      {
        "root": "companion",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 13.1,
        "state": "THIN",
        "reason": "companion: 2 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x9dfba78969d1fbb4c271c87abf85868b7eb362f8",
        "name": "F",
        "symbol": "F",
        "deployer": "0xc029d9badc3e023043a5c1309f00a2b69a58ce51",
        "block": 99901484,
        "ts": "2026-10-28T07:28:13.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x75235827f020b5320430d07bc1de06380e043997",
        "name": "Grokbot",
        "symbol": "Grokbot",
        "deployer": "0xa770c8bd37531317d1c3f48e9a03a5d0c5e38a7b",
        "block": 99901452,
        "ts": "2026-10-28T07:28:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf2a5c11e69121563b0055cf7cb2ed3ef29e57777",
        "name": "Xiaomi AI Companion",
        "symbol": "XIAOMI",
        "deployer": "0x498b1bee7a146a4d10514f2d8eb1201b447ad384",
        "block": 99901343,
        "ts": "2026-10-28T07:27:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6d16675c346f42c3ed73093dd3eac5240ea47777",
        "name": "LaunchLens",
        "symbol": "LAUNCHLENS",
        "deployer": "0x7485fbfd99993dab4c9964f53791e40d14253c97",
        "block": 99901123,
        "ts": "2026-10-28T07:27:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x785163cebc56860536d76ee06169009f8056d2d6",
        "name": "LaunchLens",
        "symbol": "LAUNCHLENS",
        "deployer": "0x03fc3d4d71da192d4f8776647bfc5d6d4988b925",
        "block": 99901051,
        "ts": "2026-10-28T07:27:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x190e9088b5b942a79cac81bc2884feee9df79aac",
        "name": "Claudeback",
        "symbol": "CDBCK",
        "deployer": "0x9a216bce667109b49146b734733d15b3bff70f40",
        "block": 99901014,
        "ts": "2026-10-28T07:27:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x17dcdc4a19bfd97d071f95231f58034d4c4b05f9",
        "name": "The Sisyphean Penguin",
        "symbol": "PENGUIN",
        "deployer": "0x4337026d731283f9917fa3c9194d74809bfbec26",
        "block": 99900224,
        "ts": "2026-10-28T07:25:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5a331f55175b9893c5e5f48af2e2daefff2c1d61",
        "name": "Xiaomi AI Companion",
        "symbol": "XIAOMI",
        "deployer": "0x43370597af41d9345b1b91391849dcdb748c2838",
        "block": 99899781,
        "ts": "2026-10-28T07:25:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x98985db23595c54d65caacedf5fdeae17bee82ff",
        "name": "DeployXBOT",
        "symbol": "DXBOT",
        "deployer": "0x4337009be43c7ecc9bfbde0f1780553aa065187e",
        "block": 99899346,
        "ts": "2026-10-28T07:24:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfd7cc7e3b75fdc21140830fb000c59cd2e66d6ea",
        "name": "Pangea Cat",
        "symbol": "PCAT",
        "deployer": "0xd0576fe5444f2a4851c4674734310326d38a223a",
        "block": 99899320,
        "ts": "2026-10-28T07:24:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x34661c2ba9eb3fa39f1c6290cbece646c944c7eb",
        "name": "3 Head Dog",
        "symbol": "ODG",
        "deployer": "0x0dc767ca57d118fda591b8ef5041d105ec484e29",
        "block": 99899283,
        "ts": "2026-10-28T07:24:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfafd35c1ab38bb07e09a1004f7986270d44e7777",
        "name": "US Oil Exchange 🇺🇸",
        "symbol": "UOSE",
        "deployer": "0xa7ba884561771e707f7f29bd5388b77f1e470daf",
        "block": 99899229,
        "ts": "2026-10-28T07:24:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x30de7ae4c9578d110a97367ede9f7765cdce06ea",
        "name": "Pangea",
        "symbol": "PANGEA",
        "deployer": "0x4e2bd87ec828601cedaee948d61f64c0a2673b84",
        "block": 99899142,
        "ts": "2026-10-28T07:24:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf1d4b26b8a7d66ac01a39bd20232721e53dc4b65",
        "name": "Poser",
        "symbol": "POSE",
        "deployer": "0x4337005db25dbad41da5692ba1188751ee5d98b6",
        "block": 99898746,
        "ts": "2026-10-28T07:23:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd603dd791c4aa7c8ddebe3a2745bfb8deaef76f9",
        "name": "Evorph by Virtuals",
        "symbol": "EVORPH",
        "deployer": "0xd92e31db7aec72229b63391818dccf53d7802f0e",
        "block": 99898668,
        "ts": "2026-10-28T07:23:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6da38dec993c47a8e43af0352dbc043a3b3f7777",
        "name": "Stock Spin",
        "symbol": "SPIN",
        "deployer": "0x1b4ebe73585b94578dc055c6ac7e89333fdadcf7",
        "block": 99898618,
        "ts": "2026-10-28T07:23:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7b2d6b03ca994a8cf14dce8e716cb34ca1bd52ae",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x5d43189cd7145e070541c61de344604b44893ee7",
        "block": 99898569,
        "ts": "2026-10-28T07:23:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xca2a5fdf9388b766db84ae183419f2ce410763a0",
        "name": "Stock Spin",
        "symbol": "SPIN",
        "deployer": "0x4e343b777c3e1f996a31c650039a0bbabc9560e0",
        "block": 99898529,
        "ts": "2026-10-28T07:22:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x21e05087b1dea98a1fbdcbdcea718b77d74d0087",
        "name": "potatoz",
        "symbol": "POTATOZ",
        "deployer": "0xd4875af0ae4491868c1ad20c752232a6b54a3568",
        "block": 99898436,
        "ts": "2026-10-28T07:22:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x05027990513969ed1452a067056bf969bbc27777",
        "name": "Nothing Wojak",
        "symbol": "NOTJAK",
        "deployer": "0xfe2cb6b8c284d632390268d8007873ac5865db0b",
        "block": 99898423,
        "ts": "2026-10-28T07:22:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe5060739dae04c97d5373dcce0e5dbbc55fa37bb",
        "name": "Grokbot",
        "symbol": "Grokbot",
        "deployer": "0x45a40c5e9a45ca30ee4ffc998252f370174b8a46",
        "block": 99898410,
        "ts": "2026-10-28T07:22:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbf8f775f18bf1e7c9ec77ed879e5373a9f816c88",
        "name": "S&P500",
        "symbol": "S&P500",
        "deployer": "0x43370240c309f6cc0815929a176609267971224f",
        "block": 99898387,
        "ts": "2026-10-28T07:22:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc0d92cb4bf9d358e7c1d662c20d97c4f131b3046",
        "name": "CHIHUAHOOD",
        "symbol": "CHIHUAHOOD",
        "deployer": "0xcbdfecf34f6a164d3c7907bd198ceb4ffc7a143f",
        "block": 99898363,
        "ts": "2026-10-28T07:22:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7b98d0e8cfc62fb91a4c5ee765ecec4a273b2d7a",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xd5b7c7969eabaf5f10ebe440b7e89dd16fa51ea8",
        "block": 99897960,
        "ts": "2026-10-28T07:21:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x82bfbd23126c5cc602e8eda10353cb80f2054731",
        "name": "Skull Cap",
        "symbol": "SKCAP",
        "deployer": "0x43370473d8d9527c84d8cc9464dbbed89085dddf",
        "block": 99897929,
        "ts": "2026-10-28T07:21:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x121506e6d7011d4f6408d9be4afd5d3c61949103",
        "name": "SlideHood",
        "symbol": "SHD",
        "deployer": "0xb6379b52b5a4f3b923f72157678f944030b70b68",
        "block": 99897848,
        "ts": "2026-10-28T07:21:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2882e37e3a53b8e0fcdb7a97e48f4cf18b73444c",
        "name": "Astro Dog",
        "symbol": "ASTD",
        "deployer": "0x5d43189cd7145e070541c61de344604b44893ee7",
        "block": 99897706,
        "ts": "2026-10-28T07:21:31.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x7e187fe67ae04c1b1738f01b424656390e45e1c9",
        "name": "TETRAVAULT",
        "symbol": "TETRA",
        "deployer": "0xa2ec86960ab32a60353db3d172f00fae4232ef03",
        "block": 99897534,
        "ts": "2026-10-28T07:21:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x58caa1e015ee8433c7528730acc4967cb14fd9b6",
        "name": "HELL DEMONS",
        "symbol": "DEMONS",
        "deployer": "0x9cda5d20c2fc8d0e25fd53f9542162c48c61309e",
        "block": 99897414,
        "ts": "2026-10-28T07:21:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x87cf0a33af7978591dcf449e67db794239afa657",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xfdf1bff1850f05641075588e380622d25774a7ec",
        "block": 99897398,
        "ts": "2026-10-28T07:20:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x77b98002bfd4a87be619319cfe88f709ea5166a3",
        "name": "Staked Chop CHOP",
        "symbol": "schCHOP",
        "deployer": "0xfdf1bff1850f05641075588e380622d25774a7ec",
        "block": 99897398,
        "ts": "2026-10-28T07:20:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6b7c74d0c969ea62f32ce381b99232982a62c298",
        "name": "Bedrock",
        "symbol": "BEDROCK",
        "deployer": "0x4337fffb5082dea8b2e188e8288eafaa12f12f0f",
        "block": 99897368,
        "ts": "2026-10-28T07:20:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x814a5924d38aab643382bf78a8a256347763b142",
        "name": "test3",
        "symbol": "TT",
        "deployer": "0x0f37d69c82db7b6fb2a451fa614c4d62b659cb8e",
        "block": 99897318,
        "ts": "2026-10-28T07:20:51.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x5f7bb59365ce557c26dbcaa4ee9d39a4b95b7127",
        "name": "Identity.md",
        "symbol": "IMD",
        "deployer": "0x73a063c96b5d67863deaa7b163207e769a7c2cee",
        "block": 99897090,
        "ts": "2026-10-28T07:20:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcdfdf45f1ff346998a49e8113735081b923498df",
        "name": "Chop CHOP",
        "symbol": "chCHOP",
        "deployer": "0xfdf1bff1850f05641075588e380622d25774a7ec",
        "block": 99897006,
        "ts": "2026-10-28T07:20:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc46b1eddb59d423145d74cf8cefaef73f9158538",
        "name": "MiningCat",
        "symbol": "MINECAT",
        "deployer": "0x4337009be43c7ecc9bfbde0f1780553aa065187e",
        "block": 99896942,
        "ts": "2026-10-28T07:20:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf8e0ab443098c0738489b5baffbd32a1341f2289",
        "name": "Borro USDG",
        "symbol": "bUSDG",
        "deployer": "0x3a17bfff7c6fb05f8c49d3d7181849e531026896",
        "block": 99896919,
        "ts": "2026-10-28T07:20:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x672828daa4652c87117a3f91f3cb7c80afd218c3",
        "name": "DGDreams RH Badge",
        "symbol": "DGB-RH",
        "deployer": "0x8a394953f15d80f0e299c717a310e933a269313b",
        "block": 99896918,
        "ts": "2026-10-28T07:20:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xaf5ae508b2b57587c6cb9704950fa86c4090c634",
        "name": "Paboxo Earn USDG",
        "symbol": "peUSDG",
        "deployer": "0x14bbb1b02e2c3356b92fcaa8c3d0c168e0920cb7",
        "block": 99896910,
        "ts": "2026-10-28T07:20:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3f439e52e7220100cc88426b4ac90ceee4d760de",
        "name": "qsdqd",
        "symbol": "qsdqsd",
        "deployer": "0x05440568b70b454f3509a9df797b1e1e9ac0cc13",
        "block": 99896865,
        "ts": "2026-10-28T07:20:04.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
