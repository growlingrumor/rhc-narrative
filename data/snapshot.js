/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-27T07:42:02.000Z",
    "opened_at": "2026-10-27T06:42:02.000Z",
    "window_hours": 1,
    "head_block": 99078605,
    "start_block": 99044323,
    "blocks_scanned": 34282,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 325,
    "unnamed_contracts": 0,
    "via_factory": 306,
    "no_receipt": 0,
    "candidates": 325,
    "mint_events": 23277,
    "deployers": 221,
    "roots": 428,
    "cleared_multiple": 428,
    "failed_gates": 415,
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
      "backed-belief-nothing",
      "elon",
      "nft",
      "positions",
      "robinhood",
      "space",
      "super-intelligence",
      "uniswap-uni",
      "usdg"
    ],
    "top": {
      "root": "robinhood",
      "launches": 19,
      "deployers": 12,
      "baseline_share": 0.0004,
      "multiple": 146.2,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "robinhood",
        "launches": 19,
        "deployers": 12,
        "baseline_share": 0.0004,
        "multiple": 146.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "elon",
        "launches": 14,
        "deployers": 14,
        "baseline_share": 0.0004,
        "multiple": 107.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 12,
        "deployers": 12,
        "baseline_share": 0.0004,
        "multiple": 92.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nft",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 76.9,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 61.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "space",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 61.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 19,
        "deployers": 18,
        "baseline_share": 0.0004,
        "multiple": 146.2,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 74%, merged to uniswap-uni"
      },
      {
        "root": "backed",
        "launches": 14,
        "deployers": 14,
        "baseline_share": 0.0004,
        "multiple": 107.7,
        "state": "MERGED",
        "reason": "backed + belief co-occur 100%, merged to backed-belief-nothing"
      },
      {
        "root": "belief",
        "launches": 14,
        "deployers": 14,
        "baseline_share": 0.0004,
        "multiple": 107.7,
        "state": "MERGED",
        "reason": "backed + belief co-occur 100%, merged to backed-belief-nothing"
      },
      {
        "root": "uni",
        "launches": 14,
        "deployers": 14,
        "baseline_share": 0.0004,
        "multiple": 107.7,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 74%, merged to uniswap-uni"
      },
      {
        "root": "nothing",
        "launches": 13,
        "deployers": 13,
        "baseline_share": 0.0004,
        "multiple": 100,
        "state": "MERGED",
        "reason": "backed + belief co-occur 100%, merged to backed-belief-nothing"
      },
      {
        "root": "super",
        "launches": 9,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 69.2,
        "state": "MERGED",
        "reason": "super + intelligence co-occur 89%, merged to super-intelligence"
      },
      {
        "root": "intelligence",
        "launches": 8,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 61.5,
        "state": "MERGED",
        "reason": "super + intelligence co-occur 89%, merged to super-intelligence"
      },
      {
        "root": "moon",
        "launches": 6,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 46.2,
        "state": "THIN",
        "reason": "moon: 5 deployers < 6 required"
      },
      {
        "root": "cow",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 38.5,
        "state": "THIN",
        "reason": "cow: 3 deployers < 6 required"
      },
      {
        "root": "fullrange",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 38.5,
        "state": "THIN",
        "reason": "fullrange: 5 deployers < 6 required"
      },
      {
        "root": "musdg",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 38.5,
        "state": "THIN",
        "reason": "musdg: 5 deployers < 6 required"
      },
      {
        "root": "signal",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 38.5,
        "state": "THIN",
        "reason": "signal: 5 deployers < 6 required"
      },
      {
        "root": "spacex",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 38.5,
        "state": "THIN",
        "reason": "spacex: 5 deployers < 6 required"
      },
      {
        "root": "agent",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 30.8,
        "state": "THIN",
        "reason": "agent: 4 launches < 5 required"
      },
      {
        "root": "alandale",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 30.8,
        "state": "THIN",
        "reason": "alandale: 4 launches < 5 required"
      },
      {
        "root": "corp",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 30.8,
        "state": "THIN",
        "reason": "corp: 4 launches < 5 required"
      },
      {
        "root": "dog",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 30.8,
        "state": "THIN",
        "reason": "dog: 4 launches < 5 required"
      },
      {
        "root": "hood",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 30.8,
        "state": "THIN",
        "reason": "hood: 4 launches < 5 required"
      },
      {
        "root": "ramses",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 30.8,
        "state": "THIN",
        "reason": "ramses: 4 launches < 5 required"
      },
      {
        "root": "stampede",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 30.8,
        "state": "THIN",
        "reason": "stampede: 4 launches < 5 required"
      },
      {
        "root": "volatile",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 30.8,
        "state": "THIN",
        "reason": "volatile: 4 launches < 5 required"
      },
      {
        "root": "world",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 30.8,
        "state": "THIN",
        "reason": "world: 4 launches < 5 required"
      },
      {
        "root": "amm",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "amm: 3 launches < 5 required"
      },
      {
        "root": "arcus",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "arcus: 3 launches < 5 required"
      },
      {
        "root": "fables",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "fables: 3 launches < 5 required"
      },
      {
        "root": "long",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "long: 3 launches < 5 required"
      },
      {
        "root": "macroharde",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "macroharde: 3 launches < 5 required"
      },
      {
        "root": "musk",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "musk: 3 launches < 5 required"
      },
      {
        "root": "penchants",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "penchants: 3 launches < 5 required"
      },
      {
        "root": "qq",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "qq: 3 launches < 5 required"
      },
      {
        "root": "rh",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "rh: 3 launches < 5 required"
      },
      {
        "root": "rush",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "rush: 3 launches < 5 required"
      },
      {
        "root": "slvr",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "slvr: 3 launches < 5 required"
      },
      {
        "root": "vote",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "vote: 3 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x0b04f0555ccc51885400c045018fb8204adfc6ea",
        "name": "GinnanCoin",
        "symbol": "GINNAN",
        "deployer": "0x0e183f1d7286cc260761d15fc07514a39b5a36c2",
        "block": 99078529,
        "ts": "2026-10-27T07:41:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2250f5d7e10717e7078c69476194d655d890af9d",
        "name": "Venus  Space Corp",
        "symbol": "VSC",
        "deployer": "0x43379206f4bba42b231450b533dac402f17215e5",
        "block": 99078509,
        "ts": "2026-10-27T07:41:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2801f9f778c529473a2e75ee91737634c2b6f1d0",
        "name": "Asteroid Super Intelligence",
        "symbol": "ASI",
        "deployer": "0x4337017d2e3f5e4160a27f6fdbdc38719343c62f",
        "block": 99078091,
        "ts": "2026-10-27T07:40:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe02476866f79df4138b979286ca99f76f357de95",
        "name": "Wrapped Apple • Robinhood Token",
        "symbol": "wAAPL",
        "deployer": "0x9efc87801ffb0b27766d6c568e3c0d76bd59d605",
        "block": 99077920,
        "ts": "2026-10-27T07:40:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6e56d7f620c04245780dfe67a474964ec8139669",
        "name": "Net World",
        "symbol": "NWPLOT",
        "deployer": "0xdab784b57ea4471720ccb8fd1d57c888270cf0a9",
        "block": 99077882,
        "ts": "2026-10-27T07:40:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x574f94eb7e8b311860c40d09f119299f06cd4959",
        "name": "Groklet Super Intelligence",
        "symbol": "GSI",
        "deployer": "0x4337032d9c9291f05bebded166d947f22b25fa00",
        "block": 99077798,
        "ts": "2026-10-27T07:40:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x24b84023c8e4da635be228c380c09bfe5271bf9d",
        "name": "Meridian Liquidity Provider",
        "symbol": "MLP",
        "deployer": "0x7f1a30357db82bc0d722e97504e027dc6b715253",
        "block": 99077689,
        "ts": "2026-10-27T07:40:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x155ec0c11a39c2655ae90b4d9173ebbd12d97777",
        "name": "Bunkercoin",
        "symbol": "BUNK",
        "deployer": "0xfe2cb6b8c284d632390268d8007873ac5865db0b",
        "block": 99077299,
        "ts": "2026-10-27T07:39:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x15aa3c0d5e69552c9498f48f01cc7f9c076ba717",
        "name": "Stampede",
        "symbol": "STAMPEDE",
        "deployer": "0xc4df8c7291105fbd838029591df94d4cdf9b1097",
        "block": 99077254,
        "ts": "2026-10-27T07:39:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd35e9ca72f64c7f93be30fad67524323396b36d7",
        "name": "Fee Beneficiary",
        "symbol": "FEEB",
        "deployer": "0xc4df8c7291105fbd838029591df94d4cdf9b1097",
        "block": 99077254,
        "ts": "2026-10-27T07:39:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x540b7241d9a894585e03fabb5dd41ca69094d901",
        "name": "Space Inu Super Intelligence",
        "symbol": "SISI",
        "deployer": "0x4337a10434f284b583402514d8f4539bc89983d9",
        "block": 99077243,
        "ts": "2026-10-27T07:39:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x450c3ab56172eb2be1f18e969e21980bfef272e9",
        "name": "Volatile AMM - SWT/s33",
        "symbol": "vAMM-SWT/s33",
        "deployer": "0x2130fd01026867a6c8dde24ad5e64f2e2dfce196",
        "block": 99077134,
        "ts": "2026-10-27T07:39:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb313390c367d2b2b106a1242b6dc9b34cea77dbe",
        "name": "Runitup cock",
        "symbol": "RIUCOCK",
        "deployer": "0xa3ea6f49f7175a059ad262c48d7e463b717c67be",
        "block": 99076931,
        "ts": "2026-10-27T07:38:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x93358e0f7fdb067113dcb8a9a42f16a9354d9316",
        "name": "FU",
        "symbol": "FU",
        "deployer": "0x56c09caf7a77d5d254dae3438bb843a1ffd06aa2",
        "block": 99076719,
        "ts": "2026-10-27T07:38:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x74d6e9443849e108cfcd12d5cb910b9f08697777",
        "name": "Backed By Belief",
        "symbol": "Nothing",
        "deployer": "0x434aedf53e6300b15bb45f96fe00ac761ef3c6c2",
        "block": 99076553,
        "ts": "2026-10-27T07:38:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa803a1970bcd9226dd4fb0fcff1e1820e87f8e06",
        "name": "CRAZYROLL",
        "symbol": "CRAZYROLL",
        "deployer": "0x43371bf8c9701442ad5e97ebff025fbbbad7c021",
        "block": 99076524,
        "ts": "2026-10-27T07:38:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcdcb1dabd6dfcef20bdacbc8165c817c04dba4b4",
        "name": "Elon 2028",
        "symbol": "ELON2028",
        "deployer": "0x7004131756707b1c289c7f933d62aaf5831c2246",
        "block": 99076516,
        "ts": "2026-10-27T07:38:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3a43aea03efe76901618d6ac6a871f4a480059df",
        "name": "Backed By Belief",
        "symbol": "Nothing",
        "deployer": "0xfcaee3a775e7d8968cbe88976a6ca281cd00fc5f",
        "block": 99076482,
        "ts": "2026-10-27T07:38:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4a35a5ec2a50a4d2957b2f2366e017f526cab318",
        "name": "Foundry Compute Dollar",
        "symbol": "USDF",
        "deployer": "0x26e9ae7a1677e2fd80138781c05211abd314188d",
        "block": 99076238,
        "ts": "2026-10-27T07:37:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x803b4ff6234224b14b89d97b859863d0c528b5a7",
        "name": "DIVIDEND_TRACKER",
        "symbol": "DIVIDEND_TRACKER",
        "deployer": "0x416b2477ff00458a85d02f845d8ea0723298e76e",
        "block": 99075915,
        "ts": "2026-10-27T07:37:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x861d1f7421d81bf87434854de19830a3b35ef20b",
        "name": "Blackout Super Intelligence",
        "symbol": "BSI",
        "deployer": "0x4337b26ca98c42cd74672e06a033ac8cd1cd5da8",
        "block": 99075853,
        "ts": "2026-10-27T07:36:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x84d59ee37910fa278d239454864cddbded364aa4",
        "name": "Bunkercoin",
        "symbol": "BUNK",
        "deployer": "0x3819f4757d8293e08bcc8d9cf2bf8320758c85d8",
        "block": 99075810,
        "ts": "2026-10-27T07:36:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0f68f1e6bf75bce204cc4468bfd414a8dc3a4582",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x6d63324518220d0aeec20c26fd3d68ad3fe6efad",
        "block": 99075751,
        "ts": "2026-10-27T07:36:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x13035cc53596a29aec35a0fff7ba9c5899b22f5c",
        "name": "Shinobi Cards",
        "symbol": "SCROLL",
        "deployer": "0xf3e584fcfdce53d7680cc9635547634d0e09b861",
        "block": 99075521,
        "ts": "2026-10-27T07:36:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4231743b8b3772b8c772a05b77a13a89bf726c98",
        "name": "Chop VRAX",
        "symbol": "chVRAX",
        "deployer": "0x00000000eabd4cbbd440bd3831372bf5ecf7a7ca",
        "block": 99075312,
        "ts": "2026-10-27T07:36:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfd37085cbe43ba485baacd3c02e788a2ae197777",
        "name": "Moriusa",
        "symbol": "MORIUSA",
        "deployer": "0x498b1bee7a146a4d10514f2d8eb1201b447ad384",
        "block": 99075292,
        "ts": "2026-10-27T07:36:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x39c02ae61437e4845308d16182fbd84817b5c412",
        "name": "Super Intelligence Doge",
        "symbol": "SID",
        "deployer": "0x4337b26ca98c42cd74672e06a033ac8cd1cd5da8",
        "block": 99075145,
        "ts": "2026-10-27T07:35:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xca75082b85bb7bec8325d513f615b16bda260020",
        "name": "HASHCATS",
        "symbol": "HASH",
        "deployer": "0x02468cb42b8217d0ecaac3d79bb4318a53b924ec",
        "block": 99074930,
        "ts": "2026-10-27T07:35:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x099f85055969e78707c9b21951529c0075b1a469",
        "name": "Volcano Frog",
        "symbol": "VOLF",
        "deployer": "0x6d63324518220d0aeec20c26fd3d68ad3fe6efad",
        "block": 99074897,
        "ts": "2026-10-27T07:35:19.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x45be3336f62231fdfce8a61fff283742563ee668",
        "name": "SHOOTER Awards",
        "symbol": "SHOOTAWARD",
        "deployer": "0x62c749fcff5ab757ea3010a919d1ae0b30759650",
        "block": 99074882,
        "ts": "2026-10-27T07:35:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xba4754d9bbf0ea6fd6df5712be666c771128bbbb",
        "name": "qq",
        "symbol": "qq",
        "deployer": "0xf5de7696dfa6e5f7a3ee16ab2239005352bf8b92",
        "block": 99074730,
        "ts": "2026-10-27T07:35:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8412ba4d194498096da353f622f024d747107df1",
        "name": "Super Intelligence Space Corp",
        "symbol": "SISC",
        "deployer": "0x43375c62236bc5524b02d388baaadc5bb5f56168",
        "block": 99074429,
        "ts": "2026-10-27T07:34:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5d0fbabf3fd0b2c74ba9cf612087186f0bbfb8a0",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x2fb2ab06c46a1b3deea55e974bcd5204e67dc001",
        "block": 99074240,
        "ts": "2026-10-27T07:34:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x46d34ed68406934ca9f138fc94926816fa1fbbbb",
        "name": "qq",
        "symbol": "qq",
        "deployer": "0xf5de7696dfa6e5f7a3ee16ab2239005352bf8b92",
        "block": 99074222,
        "ts": "2026-10-27T07:34:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf7882892ecf72bfc565c3c9908a358f11d289525",
        "name": "Moon Space Corp",
        "symbol": "MSC",
        "deployer": "0x433702873e33d4846d399a75aaf96eacf181d0b2",
        "block": 99073913,
        "ts": "2026-10-27T07:33:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5d36c86edc4dc14c2425788965894a906baf7777",
        "name": "GMO",
        "symbol": "GMO",
        "deployer": "0x7485fbfd99993dab4c9964f53791e40d14253c97",
        "block": 99073805,
        "ts": "2026-10-27T07:33:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xace6e326a80076f09e4178fa61ee1c4f7402972a",
        "name": "Forever Pass",
        "symbol": "FPASS",
        "deployer": "0xf70bd5596f83110208db05b413ff8ed907cf778f",
        "block": 99073710,
        "ts": "2026-10-27T07:33:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x28c37351ccc5b419a644414b3c673cc75200dc73",
        "name": "Mars  Space Corp",
        "symbol": "MSC",
        "deployer": "0x43370606d17d51d3c34c2319c5f8f1411e18a4ab",
        "block": 99073550,
        "ts": "2026-10-27T07:33:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x68f96c7c288c992c814c339a974e710c39ba1e18",
        "name": "solguy",
        "symbol": "SOLGUY",
        "deployer": "0xd20278dc748cfe4a381e8969751873f1ab80cce4",
        "block": 99073493,
        "ts": "2026-10-27T07:32:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x30a0f09e7b1ee101d46041e1bff17b7d7aca8341",
        "name": "MoonCoin",
        "symbol": "MoonCoin",
        "deployer": "0x2fb2ab06c46a1b3deea55e974bcd5204e67dc001",
        "block": 99073444,
        "ts": "2026-10-27T07:32:49.000Z",
        "ts_exact": true,
        "direct": true
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
