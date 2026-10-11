/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-11T13:26:31.000Z",
    "opened_at": "2026-10-11T12:26:31.000Z",
    "window_hours": 1,
    "head_block": 85866525,
    "start_block": 85831976,
    "blocks_scanned": 34549,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 422,
    "unnamed_contracts": 0,
    "via_factory": 387,
    "no_receipt": 15,
    "candidates": 437,
    "mint_events": 18547,
    "deployers": 279,
    "roots": 551,
    "cleared_multiple": 135,
    "failed_gates": 125,
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
      "dacity",
      "dog",
      "ma-yilong",
      "nft",
      "positions",
      "spacex",
      "uniswap-uni",
      "usdg"
    ],
    "top": {
      "root": "dacity",
      "launches": 11,
      "deployers": 11,
      "baseline_share": 0.0004,
      "multiple": 65.2,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "dacity",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 65.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "spacex",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 53.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "dog",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 47.4,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nft",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 47.4,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 47.4,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 35.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 23,
        "deployers": 23,
        "baseline_share": 0.0004,
        "multiple": 136.3,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 83%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 19,
        "deployers": 19,
        "baseline_share": 0.0004,
        "multiple": 112.6,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 83%, merged to uniswap-uni"
      },
      {
        "root": "ma",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 53.3,
        "state": "MERGED",
        "reason": "ma + yilong co-occur 100%, merged to ma-yilong"
      },
      {
        "root": "yilong",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 53.3,
        "state": "MERGED",
        "reason": "ma + yilong co-occur 100%, merged to ma-yilong"
      },
      {
        "root": "ramses",
        "launches": 12,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 71.1,
        "state": "THIN",
        "reason": "ramses: 3 deployers < 6 required"
      },
      {
        "root": "volatile",
        "launches": 12,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 71.1,
        "state": "THIN",
        "reason": "volatile: 3 deployers < 6 required"
      },
      {
        "root": "rh",
        "launches": 9,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 53.3,
        "state": "THIN",
        "reason": "rh: 4 deployers < 6 required"
      },
      {
        "root": "weth",
        "launches": 7,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 41.5,
        "state": "THIN",
        "reason": "weth: 3 deployers < 6 required"
      },
      {
        "root": "opening",
        "launches": 6,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 35.5,
        "state": "THIN",
        "reason": "opening: 1 deployers < 6 required"
      },
      {
        "root": "counterparty",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 29.6,
        "state": "THIN",
        "reason": "counterparty: 1 deployers < 6 required"
      },
      {
        "root": "ctr",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 29.6,
        "state": "THIN",
        "reason": "ctr: 1 deployers < 6 required"
      },
      {
        "root": "prd",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 29.6,
        "state": "THIN",
        "reason": "prd: 1 deployers < 6 required"
      },
      {
        "root": "predictor",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 29.6,
        "state": "THIN",
        "reason": "predictor: 1 deployers < 6 required"
      },
      {
        "root": "super",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 29.6,
        "state": "THIN",
        "reason": "super: 5 deployers < 6 required"
      },
      {
        "root": "virtuals",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 29.6,
        "state": "THIN",
        "reason": "virtuals: 5 deployers < 6 required"
      },
      {
        "root": "backpack",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 23.7,
        "state": "THIN",
        "reason": "backpack: 4 launches < 5 required"
      },
      {
        "root": "green",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 23.7,
        "state": "THIN",
        "reason": "green: 4 launches < 5 required"
      },
      {
        "root": "moony",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 23.7,
        "state": "THIN",
        "reason": "moony: 4 launches < 5 required"
      },
      {
        "root": "quantum",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 23.7,
        "state": "THIN",
        "reason": "quantum: 4 launches < 5 required"
      },
      {
        "root": "rose",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 23.7,
        "state": "THIN",
        "reason": "rose: 4 launches < 5 required"
      },
      {
        "root": "securities",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 23.7,
        "state": "THIN",
        "reason": "securities: 4 launches < 5 required"
      },
      {
        "root": "alpha",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 17.8,
        "state": "THIN",
        "reason": "alpha: 3 launches < 5 required"
      },
      {
        "root": "arrow",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 17.8,
        "state": "THIN",
        "reason": "arrow: 3 launches < 5 required"
      },
      {
        "root": "cat",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 17.8,
        "state": "THIN",
        "reason": "cat: 3 launches < 5 required"
      },
      {
        "root": "code",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 17.8,
        "state": "THIN",
        "reason": "code: 3 launches < 5 required"
      },
      {
        "root": "elon",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 17.8,
        "state": "THIN",
        "reason": "elon: 3 launches < 5 required"
      },
      {
        "root": "etf",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 17.8,
        "state": "THIN",
        "reason": "etf: 3 launches < 5 required"
      },
      {
        "root": "family",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 17.8,
        "state": "THIN",
        "reason": "family: 3 launches < 5 required"
      },
      {
        "root": "little",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 17.8,
        "state": "THIN",
        "reason": "little: 3 launches < 5 required"
      },
      {
        "root": "market",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 17.8,
        "state": "THIN",
        "reason": "market: 3 launches < 5 required"
      },
      {
        "root": "marrow",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 17.8,
        "state": "THIN",
        "reason": "marrow: 3 launches < 5 required"
      },
      {
        "root": "missrose",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 17.8,
        "state": "THIN",
        "reason": "missrose: 3 launches < 5 required"
      },
      {
        "root": "moon",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 17.8,
        "state": "THIN",
        "reason": "moon: 3 launches < 5 required"
      },
      {
        "root": "orbis",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 17.8,
        "state": "THIN",
        "reason": "orbis: 3 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0xab4ae20503b4d4559fab74052e724af27d7b7777",
        "name": "Rise",
        "symbol": "RISE",
        "deployer": "0x7485fbfd99993dab4c9964f53791e40d14253c97",
        "block": 85866417,
        "ts": "2026-10-11T13:26:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x44d9710ed6185024fab1acc5176db8323a298e59",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x93213206431aa8483090d1b235b0bf2d8b18151f",
        "block": 85866405,
        "ts": "2026-10-11T13:26:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfe5bc1fd48fdc3a8d99beb5bbfad385d3e26f777",
        "name": "Normie",
        "symbol": "Normie",
        "deployer": "0x0572f13e7792141e3484707ed8b77f4033652043",
        "block": 85866296,
        "ts": "2026-10-11T13:26:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcf1737bf057df9ca98f5d8a2ebf975ddb90ee3de",
        "name": "..",
        "symbol": "Base",
        "deployer": "0x90381a3c665a46a28ef314ad17dffc7ace841727",
        "block": 85865991,
        "ts": "2026-10-11T13:25:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe68484f70701662b2416702b6109fb88bd1f7777",
        "name": "NATIONAL INTEGRATED COMPUTING",
        "symbol": "NICPN",
        "deployer": "0xa7ba884561771e707f7f29bd5388b77f1e470daf",
        "block": 85865839,
        "ts": "2026-10-11T13:25:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7a59adc36aeb4fcf4b1a60db4b2eef8d80aff1e5",
        "name": "Ape City Buildings",
        "symbol": "ACB",
        "deployer": "0xb67fb4323495f84968d44f980c60812f82f60278",
        "block": 85865795,
        "ts": "2026-10-11T13:25:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x52a7a7d6522667742a4a7cb74c4b4bd7b66f8a81",
        "name": "Moon Cat",
        "symbol": "MOON",
        "deployer": "0x93213206431aa8483090d1b235b0bf2d8b18151f",
        "block": 85865551,
        "ts": "2026-10-11T13:24:49.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x6be91da1f6d96ad04d7b65c1e09bba9aa6af7777",
        "name": "Elyvar",
        "symbol": "ELYVAR",
        "deployer": "0x1b4ebe73585b94578dc055c6ac7e89333fdadcf7",
        "block": 85865196,
        "ts": "2026-10-11T13:24:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0117a10c561acc45061731cbd26a339f14ccc827",
        "name": "Wok Street (SBT)",
        "symbol": "WOK",
        "deployer": "0x7ddc5da29703ed145c4fcfb65807bd5444aa0021",
        "block": 85865054,
        "ts": "2026-10-11T13:23:59.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x2d14997756e31778ef6ba4afe7439b888dff0d8b",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xf1f2a9f46816bcb1782630a1ab01e050a80655a6",
        "block": 85865020,
        "ts": "2026-10-11T13:23:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x38a5580ed3ccf7b4aa97d9588059b363d2d84954",
        "name": "SCOOBY DOO",
        "symbol": "SCOOBY",
        "deployer": "0xf062f707ffe0e121c5b82567d2c0403d47f8b66b",
        "block": 85865014,
        "ts": "2026-10-11T13:23:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x647969d3a70afef09334c40dda7540c91c51f4e9",
        "name": "opcode",
        "symbol": "OP",
        "deployer": "0xf1f2a9f46816bcb1782630a1ab01e050a80655a6",
        "block": 85864854,
        "ts": "2026-10-11T13:23:38.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x78aa89d37cd12bdc091606395667f18f5d986e1f",
        "name": "Elon coin",
        "symbol": "ELON",
        "deployer": "0x80abbe12ea567e94fb2ce83acfeb1c4dfb476698",
        "block": 85864808,
        "ts": "2026-10-11T13:23:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe91cefc8f4eb7489e93ee5cfedfb20469be07796",
        "name": "Windrose Market",
        "symbol": "WROSE",
        "deployer": "0x1f3851f47d5826d514955196ab09d759d8dc402c",
        "block": 85864763,
        "ts": "2026-10-11T13:23:29.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xc4079117c4efa0c680218db1e92b07337ce65940",
        "name": "Chog Genesis V1",
        "symbol": "C",
        "deployer": "0x522063bbc0874ab1c1e507702c670444d6bf7641",
        "block": 85864710,
        "ts": "2026-10-11T13:23:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa6b4be1f75af4f09c8d25a46a322109036a6da9b",
        "name": "Influence Family",
        "symbol": "INFLUENCE",
        "deployer": "0x5fcb0732e92c1adf1e7f10fbaa917a6daa3b6ec7",
        "block": 85864680,
        "ts": "2026-10-11T13:23:20.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xefb0f76e9bdd6f3349b3e3257c9a013ffbccf9fc",
        "name": "Gradus",
        "symbol": "Gradus",
        "deployer": "0x0312f70169d6919a6e54c0c9b67ea554986e4980",
        "block": 85864665,
        "ts": "2026-10-11T13:23:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5dd044677a4fcc69834f9ba3d9228f7963277777",
        "name": "POOPER",
        "symbol": "POOPER",
        "deployer": "0xfe2cb6b8c284d632390268d8007873ac5865db0b",
        "block": 85864392,
        "ts": "2026-10-11T13:22:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3bf69be34cb02631f37f397e3bba36aa9b0fa593",
        "name": "RUNITUP INU",
        "symbol": "RUNINU",
        "deployer": "0x8920751d3a2d19d95ddc6e68e425e9fed68adce3",
        "block": 85864388,
        "ts": "2026-10-11T13:22:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc867ad7d07239a1bd3d1e2730df6a062a5579331",
        "name": "JeanPhillHoods",
        "symbol": "Jph",
        "deployer": "0x19310357eeb9b5af955bbd8ff639e65172e2995b",
        "block": 85864322,
        "ts": "2026-10-11T13:22:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3ec8a03c62bde9eea98159043f155ebe9eeeed75",
        "name": "Open Hence by Virtuals",
        "symbol": "HENCE",
        "deployer": "0x3b9273d8d3c8991a2fad758f914070cac4eca7a1",
        "block": 85864214,
        "ts": "2026-10-11T13:22:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5bec65898d27219972ad298e4f4dbd3733bb7777",
        "name": "Orbis",
        "symbol": "ORBIS",
        "deployer": "0x498b1bee7a146a4d10514f2d8eb1201b447ad384",
        "block": 85864189,
        "ts": "2026-10-11T13:22:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa68f135079038cebf538a9948c3f0eff26947777",
        "name": "Merhaba",
        "symbol": "MERHABA",
        "deployer": "0xa7ba884561771e707f7f29bd5388b77f1e470daf",
        "block": 85864102,
        "ts": "2026-10-11T13:22:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xeff3d95e54dd96ff2da06f43c7ba1791a7587777",
        "name": "Qwave.Fun",
        "symbol": "QWAVE",
        "deployer": "0x7485fbfd99993dab4c9964f53791e40d14253c97",
        "block": 85864089,
        "ts": "2026-10-11T13:22:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbfe22c20ab1c888a078aafe2f1a13856cc172035",
        "name": "Fishy Yodel",
        "symbol": "FISHY",
        "deployer": "0x7fdaa83d7aa460dbb2d712e5d35728338e3cfb4e",
        "block": 85861966,
        "ts": "2026-10-11T13:18:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8f299b596202502c5601a9fd99653ec2b1e640c8",
        "name": "Dacity Coin",
        "symbol": "Dacity",
        "deployer": "0xd1b3c4f60593ba22ad0d8380029dde3e8ef25277",
        "block": 85861915,
        "ts": "2026-10-11T13:18:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe0bdba7691e4051b9a196f4852d4dc267cacc6cf",
        "name": "Delusion",
        "symbol": "DELU",
        "deployer": "0xf22e13f4fecf19c17cd142b58a3ed3fbfc361ff5",
        "block": 85861839,
        "ts": "2026-10-11T13:18:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe9c7167b947f07e4e66a2d453696dfc5348032e3",
        "name": "Miss Rose",
        "symbol": "ROSE",
        "deployer": "0x0810c1da82b27ad95f3a457dc810e1832a55b64a",
        "block": 85861838,
        "ts": "2026-10-11T13:18:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5caa49874497675c7702f7bb4d88a1ffd39ce7fd",
        "name": "Teach My Little Sister",
        "symbol": "SISTER",
        "deployer": "0x9c44894d8e6e2929f5f29dbd830d328d88dab13c",
        "block": 85861796,
        "ts": "2026-10-11T13:18:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2e0ee70e238c8227fefa72dcdcc0b5b9cf28cfc6",
        "name": "Dacity Coin",
        "symbol": "Dacity",
        "deployer": "0x90da7c33437d011df212ac31655c1bbf721e549a",
        "block": 85861759,
        "ts": "2026-10-11T13:18:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x82096a06ae7085a4506474eb906a23a873f37777",
        "name": "Paper Strategy",
        "symbol": "PSTR",
        "deployer": "0x084f3e813918776de4092016b66e05a70b0849f3",
        "block": 85861738,
        "ts": "2026-10-11T13:18:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2acd1b3dc156fa54027a65c23f2b87e722476ace",
        "name": "Predictor-6a2cebc8",
        "symbol": "PRD-6a2cebc8",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 85861661,
        "ts": "2026-10-11T13:18:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x577cb3f8f89963748036b447c2df04605dcdf012",
        "name": "Counterparty-6a2cebc8",
        "symbol": "CTR-6a2cebc8",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 85861661,
        "ts": "2026-10-11T13:18:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0be5119660ff949607ee67cb36f7b42767477777",
        "name": "CHILLALTAI",
        "symbol": "CHILLALTAI",
        "deployer": "0xfe2cb6b8c284d632390268d8007873ac5865db0b",
        "block": 85861650,
        "ts": "2026-10-11T13:18:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9599223eaa2505a0afef4d968a6b0d93bb4e8e25",
        "name": "USELESS COIN",
        "symbol": "USELESS",
        "deployer": "0x840949e54f2735a0f45de483804c9dc9a2fde9b5",
        "block": 85861629,
        "ts": "2026-10-11T13:18:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb14238d3c0d954ffc4b5d98c50f64413a25b27eb",
        "name": "Dacity Coin",
        "symbol": "Dacity",
        "deployer": "0xb0f87e47a505dff505f808a22d1fe3c70d55090f",
        "block": 85861609,
        "ts": "2026-10-11T13:17:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc998e2b9435fe189373cb6304e0544039abc1e18",
        "name": "Schrödinger's Cat",
        "symbol": "SCHRDINGER",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 85861447,
        "ts": "2026-10-11T13:17:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x96d29cb1a06be7e549ed9082f34d0eff3f687777",
        "name": "12345",
        "symbol": "12345",
        "deployer": "0x498b1bee7a146a4d10514f2d8eb1201b447ad384",
        "block": 85861436,
        "ts": "2026-10-11T13:17:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5729d7e9c129c63eb17af90f85afdc4a0004499d",
        "name": "Semiconductor Supply Chain",
        "symbol": "ETF-SEMI",
        "deployer": "0x3e960e93b811d5f6727eebe48ea5bb6a73639306",
        "block": 85861010,
        "ts": "2026-10-11T13:16:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x47e0c8b40be0b545d3b856bcfa09b51b8d71165d",
        "name": "TeleMoney Airdrop",
        "symbol": "TM",
        "deployer": "0x001bdbfbb4f42008a06f920ef11680088c756271",
        "block": 85860826,
        "ts": "2026-10-11T13:16:38.000Z",
        "ts_exact": true,
        "direct": true
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
