/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-31T23:46:10.000Z",
    "opened_at": "2026-10-31T22:46:10.000Z",
    "window_hours": 1,
    "head_block": 102945183,
    "start_block": 102910897,
    "blocks_scanned": 34286,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 302,
    "unnamed_contracts": 9,
    "via_factory": 286,
    "no_receipt": 0,
    "candidates": 311,
    "mint_events": 15249,
    "deployers": 213,
    "roots": 394,
    "cleared_multiple": 394,
    "failed_gates": 384,
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
      "jong-kim-un",
      "nft",
      "origo",
      "positions",
      "uniswap-uni",
      "usdg"
    ],
    "top": {
      "root": "origo",
      "launches": 24,
      "deployers": 23,
      "baseline_share": 0.0004,
      "multiple": 198.7,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "origo",
        "launches": 24,
        "deployers": 23,
        "baseline_share": 0.0004,
        "multiple": 198.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "cat",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 74.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nft",
        "launches": 8,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 66.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 49.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 49.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 20,
        "deployers": 18,
        "baseline_share": 0.0004,
        "multiple": 165.6,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 85%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 17,
        "deployers": 15,
        "baseline_share": 0.0004,
        "multiple": 140.7,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 85%, merged to uniswap-uni"
      },
      {
        "root": "jong",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 82.8,
        "state": "MERGED",
        "reason": "jong + kim co-occur 100%, merged to jong-kim-un"
      },
      {
        "root": "kim",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 82.8,
        "state": "MERGED",
        "reason": "jong + kim co-occur 100%, merged to jong-kim-un"
      },
      {
        "root": "un",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 82.8,
        "state": "MERGED",
        "reason": "jong + kim co-occur 100%, merged to jong-kim-un"
      },
      {
        "root": "robinhood",
        "launches": 9,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 74.5,
        "state": "THIN",
        "reason": "robinhood: 5 deployers < 6 required"
      },
      {
        "root": "flock",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 41.4,
        "state": "THIN",
        "reason": "flock: 3 deployers < 6 required"
      },
      {
        "root": "borrowable",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 33.1,
        "state": "THIN",
        "reason": "borrowable: 4 launches < 5 required"
      },
      {
        "root": "chop",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 33.1,
        "state": "THIN",
        "reason": "chop: 4 launches < 5 required"
      },
      {
        "root": "dopamine",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 33.1,
        "state": "THIN",
        "reason": "dopamine: 4 launches < 5 required"
      },
      {
        "root": "layerbank",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 33.1,
        "state": "THIN",
        "reason": "layerbank: 4 launches < 5 required"
      },
      {
        "root": "lend",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 33.1,
        "state": "THIN",
        "reason": "lend: 4 launches < 5 required"
      },
      {
        "root": "pepe",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 33.1,
        "state": "THIN",
        "reason": "pepe: 4 launches < 5 required"
      },
      {
        "root": "weth",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 33.1,
        "state": "THIN",
        "reason": "weth: 4 launches < 5 required"
      },
      {
        "root": "amm",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.8,
        "state": "THIN",
        "reason": "amm: 3 launches < 5 required"
      },
      {
        "root": "baby",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.8,
        "state": "THIN",
        "reason": "baby: 3 launches < 5 required"
      },
      {
        "root": "brainchain",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.8,
        "state": "THIN",
        "reason": "brainchain: 3 launches < 5 required"
      },
      {
        "root": "doo",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.8,
        "state": "THIN",
        "reason": "doo: 3 launches < 5 required"
      },
      {
        "root": "enginex",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.8,
        "state": "THIN",
        "reason": "enginex: 3 launches < 5 required"
      },
      {
        "root": "enginexrh",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.8,
        "state": "THIN",
        "reason": "enginexrh: 3 launches < 5 required"
      },
      {
        "root": "halloween",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.8,
        "state": "THIN",
        "reason": "halloween: 3 launches < 5 required"
      },
      {
        "root": "hamster",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.8,
        "state": "THIN",
        "reason": "hamster: 3 launches < 5 required"
      },
      {
        "root": "karen",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 24.8,
        "state": "THIN",
        "reason": "karen: 3 launches < 5 required"
      },
      {
        "root": "king",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.8,
        "state": "THIN",
        "reason": "king: 3 launches < 5 required"
      },
      {
        "root": "kinghamste",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.8,
        "state": "THIN",
        "reason": "kinghamste: 3 launches < 5 required"
      },
      {
        "root": "macrohard",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.8,
        "state": "THIN",
        "reason": "macrohard: 3 launches < 5 required"
      },
      {
        "root": "no",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.8,
        "state": "THIN",
        "reason": "no: 3 launches < 5 required"
      },
      {
        "root": "position",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.8,
        "state": "THIN",
        "reason": "position: 3 launches < 5 required"
      },
      {
        "root": "purr",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.8,
        "state": "THIN",
        "reason": "purr: 3 launches < 5 required"
      },
      {
        "root": "risk",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.8,
        "state": "THIN",
        "reason": "risk: 3 launches < 5 required"
      },
      {
        "root": "scooby",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.8,
        "state": "THIN",
        "reason": "scooby: 3 launches < 5 required"
      },
      {
        "root": "take",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.8,
        "state": "THIN",
        "reason": "take: 3 launches < 5 required"
      },
      {
        "root": "volatile",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.8,
        "state": "THIN",
        "reason": "volatile: 3 launches < 5 required"
      },
      {
        "root": "aero",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.6,
        "state": "THIN",
        "reason": "aero: 2 launches < 5 required"
      },
      {
        "root": "agent",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.6,
        "state": "THIN",
        "reason": "agent: 2 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x445846ca5d93b89f7e0505ae3ce43e43cf1b4e7a",
        "name": "Salute face",
        "symbol": "saluteface",
        "deployer": "0x6dabeb80c49df4a996cdb5f787b9c51112ab80a5",
        "block": 102945160,
        "ts": "2026-10-31T23:46:07.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xe6e6b7dbf1a66dfb25c6f6a87a916b3186113169",
        "name": "BrainChain Proofs",
        "symbol": "PROOF",
        "deployer": "0x375d922b7b7d8ab77260852b9b46cd6c74d48b31",
        "block": 102945114,
        "ts": "2026-10-31T23:46:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x439f31c03b94e2270762f275c988d64f14dbf204",
        "name": "Chudbob",
        "symbol": "CHUDBOB",
        "deployer": "0xb92447fbd93b9265220c392f838a2fc12158a727",
        "block": 102944999,
        "ts": "2026-10-31T23:45:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x31496f74056cfd986df3331032a47a9aafd40087",
        "name": "Evolut.fun",
        "symbol": "EVOLUT",
        "deployer": "0x378447d1bc980ff876557e4debebc99a050b73d9",
        "block": 102944622,
        "ts": "2026-10-31T23:45:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd0b96f21149e92863a7c7ddf83d3d62e006f7777",
        "name": "Americam Fund Oil Dividend AODF",
        "symbol": "AFOD",
        "deployer": "0xa72d384419e08b0eeb43d96c73ba62b627de39a7",
        "block": 102944387,
        "ts": "2026-10-31T23:44:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa657b47c171ea417be8f12c72a6f1e57e79ae349",
        "name": "Pugz",
        "symbol": "PUGZ",
        "deployer": "0xd8b3d2c942d872c75c42f9be9448873475d7ec54",
        "block": 102944165,
        "ts": "2026-10-31T23:44:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdc504c2de9c26846afdac56385673b039c2e27cb",
        "name": "Uniswap V3 Positions NFT-V1",
        "symbol": "UNI-V3-POS",
        "deployer": "0x36e00755041c9d233d2e4d98ea419059d148bb59",
        "block": 102944068,
        "ts": "2026-10-31T23:44:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x36366b9408ec7be234e49af7f5ee2889e58e7777",
        "name": "COMRADE PINGU",
        "symbol": "CRP",
        "deployer": "0xbe969c5bc42f1e30814fbde46538451791e40187",
        "block": 102944040,
        "ts": "2026-10-31T23:44:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x18a22bf90f1b7fdcb084e7131383194e363fd09e",
        "name": "Halloween Coin",
        "symbol": "HALL0WEEN",
        "deployer": "0x0312f70169d6919a6e54c0c9b67ea554986e4980",
        "block": 102943867,
        "ts": "2026-10-31T23:43:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc80333bf7f4078e14ce5b6e223af607adca44418",
        "name": "BrainChain",
        "symbol": "BRAIN",
        "deployer": "0xf07eb9c975dc7947f66d0483084ff13efcf5427f",
        "block": 102943818,
        "ts": "2026-10-31T23:43:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x09561e944506d7ff001ded897d8c405b6fcea4e9",
        "name": "Robs",
        "symbol": "ROBS",
        "deployer": "0xbfccb8cd455bc1737275a3cd50fea61d10c2971b",
        "block": 102943577,
        "ts": "2026-10-31T23:43:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8db6b3a8a171f1f0cfd558884d0600cdbf017777",
        "name": "NILF",
        "symbol": "NILF",
        "deployer": "0x22be0787ea7621328214b466d07bf3d2f5cda2b2",
        "block": 102943536,
        "ts": "2026-10-31T23:43:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd1bb14155113d696f9cd364b80401d4669570790",
        "name": "NILF",
        "symbol": "NILF",
        "deployer": "0xfe0b278207ee969af3732fbf83b57e756aa58bad",
        "block": 102943464,
        "ts": "2026-10-31T23:43:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x15237ac97655d27ec88d063fe685368ad5e18c5c",
        "name": "Jarvest",
        "symbol": "JARV",
        "deployer": "0xad4e0ead71e5afbb3db065e8bfee72bd5bc78c98",
        "block": 102943292,
        "ts": "2026-10-31T23:42:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x571c7fa2ac8f23d3868dcc4026ebfe63deb67777",
        "name": "Justice For Marcello",
        "symbol": "MARCELLO",
        "deployer": "0x4412cfb4de7c089086fc43306218f8f2f1811a22",
        "block": 102943203,
        "ts": "2026-10-31T23:42:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0199b69a95a765688a0a6fa23bd550cb240f6a9b",
        "name": "React Summit",
        "symbol": "REACTSUMM",
        "deployer": "0xea209a4a5de9a8449a666c5f9fa43be7181600a9",
        "block": 102943113,
        "ts": "2026-10-31T23:42:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5234bb15dcaac8cdf68b8d3508205d6b5523c3ba",
        "name": "Origo",
        "symbol": "ORIGO",
        "deployer": "0x4689b85e6beeffa71cd8e3b4d518ac0e6028e5b0",
        "block": 102943102,
        "ts": "2026-10-31T23:42:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7166d30cb20bfc5d07de807f4ea1d30272d022aa",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x37330f2b45feeb79bf431063355ce1c49bd10bfa",
        "block": 102943043,
        "ts": "2026-10-31T23:42:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x376cbe45d40c844ed88b2db48f05214a091526f4",
        "name": "Maxxing",
        "symbol": "Maxxing",
        "deployer": "0x37330f2b45feeb79bf431063355ce1c49bd10bfa",
        "block": 102942926,
        "ts": "2026-10-31T23:42:12.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x0000d92074135a698030d2762ad9166fcec4f9be",
        "name": "Cope",
        "symbol": "COPE",
        "deployer": "0xc86ffde0b2f7d6fa78530a74b2017b3c08764049",
        "block": 102942546,
        "ts": "2026-10-31T23:41:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6ba9e9c7b4098afd72adf4bb17ec6ec203db557e",
        "name": "Kim Jong Un Coin",
        "symbol": "KIM",
        "deployer": "0xc31f3bcfe22f58f7798b56e8b7ebaf23c3541172",
        "block": 102942431,
        "ts": "2026-10-31T23:41:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3e45e90d83d87f961561968709d5ab844eb7422f",
        "name": "Stonk Locker Position",
        "symbol": "SLP",
        "deployer": "0xca1ca254fed6f9c924ea24b82140c646fcf06a14",
        "block": 102942371,
        "ts": "2026-10-31T23:41:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5be5b092ad0d1f0c81f394f0e00086196115779c",
        "name": "Goldstein Robinhood Chain Index",
        "symbol": "gHOOD",
        "deployer": "0x4f5afc62098c36e6d8d018f26f8f6785bba4dbd3",
        "block": 102942309,
        "ts": "2026-10-31T23:41:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x77bce7db16d364585c1ee8b6d369f522557ae69f",
        "name": "Origo",
        "symbol": "ORIGO",
        "deployer": "0x7a3719dd02acda57f1d322b345f1c219b13d0e63",
        "block": 102942141,
        "ts": "2026-10-31T23:40:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdbb6b11233b49c6f56379fe85bb5fd69ed26db56",
        "name": "Reiver Agent",
        "symbol": "REIVER",
        "deployer": "0x5f4d9cb2351424a5d6d64ac0d43cef62e2259fff",
        "block": 102941913,
        "ts": "2026-10-31T23:40:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x555c4c7328b81e8daa44838512d2fce18b1fc3ba",
        "name": "Origo",
        "symbol": "ORIGO",
        "deployer": "0x7893c2264018f7bf03607824d538349fedd908e5",
        "block": 102941892,
        "ts": "2026-10-31T23:40:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x599ac767099bb6f01712867bfa1fc1aa27defd37",
        "name": "Cow Up33 Robinhood USDG-INTC",
        "symbol": "cowUp33RobinhoodUSDG-INTC",
        "deployer": "0x03d9964f4d93a24b58c0fc3a8df3474b59ba8557",
        "block": 102941885,
        "ts": "2026-10-31T23:40:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0e7fb97a89b20a682521c5d29868e50a7b693979",
        "name": "Reward Cow Up33 Robinhood USDG-INTC",
        "symbol": "rcowUp33RobinhoodUSDG-INTC",
        "deployer": "0x03d9964f4d93a24b58c0fc3a8df3474b59ba8557",
        "block": 102941885,
        "ts": "2026-10-31T23:40:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8d4684bcedcd4c9b9698891db520d2741c88bfa5",
        "name": "FEFER",
        "symbol": "FEFER",
        "deployer": "0xa472b9ceee3dd6d596cab3c8c276596ef0226aa4",
        "block": 102941767,
        "ts": "2026-10-31T23:40:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8cc0e7b60f4dce9d9810693169d7ce76d4247667",
        "name": "Flock Lend Borrowable",
        "symbol": "bFLOCK",
        "deployer": "0x097ba31b7acffd75b909fc7bef2e55424d2dacdc",
        "block": 102941730,
        "ts": "2026-10-31T23:40:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x193078f042d7c8898c3ddf481b9e26fae3e9b02e",
        "name": "Flock Lend Borrowable",
        "symbol": "bFLOCK",
        "deployer": "0x097ba31b7acffd75b909fc7bef2e55424d2dacdc",
        "block": 102941730,
        "ts": "2026-10-31T23:40:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7a4b4168192e2db4f9321aa96ba942c4d017c4b0",
        "name": "No Mames",
        "symbol": "Mames",
        "deployer": "0xfbca5fb6cab29ae598f6bdb91b49cdb38cd69076",
        "block": 102941680,
        "ts": "2026-10-31T23:40:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe306b9f0607414172ea0f2211f1b4f7b65393f7d",
        "name": "Kim Jong Un Coin",
        "symbol": "KIM",
        "deployer": "0xbb09bda2333349341461e33956808e722ae4c188",
        "block": 102941654,
        "ts": "2026-10-31T23:39:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcc3ac29b005dc0d6f629d742a84a0c50d5ab8b9d",
        "name": "Shibinhood",
        "symbol": "WOOF",
        "deployer": "0xde93851b75fb2a724fc31c23a71b841643e43e08",
        "block": 102941347,
        "ts": "2026-10-31T23:39:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa6512b55a86236db8e75506579fce6949c79c3ba",
        "name": "Origo",
        "symbol": "ORIGO",
        "deployer": "0xad6eac1b61f4d0e9b6f3752d1a02c00704cef26b",
        "block": 102940759,
        "ts": "2026-10-31T23:38:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x30b7a34c13f877f4c731c069fb72065351550985",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x0d87fa3d26cbab2adc9cab8ebf15b64c625e18a4",
        "block": 102940755,
        "ts": "2026-10-31T23:38:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4e81f09315ac14fdaba94f351da945a4cbab0361",
        "name": "Origo",
        "symbol": "ORIGO",
        "deployer": "0x0b8f8b91545ef3fb271c8142482ba9893fc68462",
        "block": 102940706,
        "ts": "2026-10-31T23:38:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2c34f28ad20dd318d6abba4f1cac55e34912a547",
        "name": "Kim Jong Un Coin",
        "symbol": "KIM",
        "deployer": "0x4f4aac09db4707fbf5276868c9c0cad63128517a",
        "block": 102940705,
        "ts": "2026-10-31T23:38:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe3ef4aeabfd9ec0af545fd74a24f0510dd6aa7fd",
        "name": "GTA6CAT",
        "symbol": "GATO",
        "deployer": "0x0d87fa3d26cbab2adc9cab8ebf15b64c625e18a4",
        "block": 102940401,
        "ts": "2026-10-31T23:37:48.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xf93b07dff6bb7a7b64f8cd08baf334cf25a01e18",
        "name": "No Mames",
        "symbol": "MAMES",
        "deployer": "0xd20278dc748cfe4a381e8969751873f1ab80cce4",
        "block": 102940344,
        "ts": "2026-10-31T23:37:41.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
