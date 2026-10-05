/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-04T23:59:13.000Z",
    "opened_at": "2026-10-04T22:59:13.000Z",
    "window_hours": 1,
    "head_block": 80345519,
    "start_block": 80309734,
    "blocks_scanned": 35785,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 457,
    "unnamed_contracts": 0,
    "via_factory": 423,
    "no_receipt": 0,
    "candidates": 457,
    "mint_events": 35909,
    "deployers": 336,
    "roots": 532,
    "cleared_multiple": 134,
    "failed_gates": 118,
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
      "cashpig",
      "cat",
      "claus",
      "dance-tecktonik",
      "dog",
      "holding-our-own",
      "nft",
      "orbio",
      "positions",
      "pstr-pokestrategy",
      "uniswap-uni"
    ],
    "top": {
      "root": "cashpig",
      "launches": 19,
      "deployers": 15,
      "baseline_share": 0.0004,
      "multiple": 103.9,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "cashpig",
        "launches": 19,
        "deployers": 15,
        "baseline_share": 0.0004,
        "multiple": 103.9,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nft",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 49.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 43.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "cat",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 32.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "claus",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 32.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "dog",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 32.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "orbio",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 32.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 27,
        "deployers": 25,
        "baseline_share": 0.0004,
        "multiple": 147.7,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 85%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 23,
        "deployers": 22,
        "baseline_share": 0.0004,
        "multiple": 125.8,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 85%, merged to uniswap-uni"
      },
      {
        "root": "holding",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 38.3,
        "state": "MERGED",
        "reason": "holding + our co-occur 100%, merged to holding-our-own"
      },
      {
        "root": "our",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 38.3,
        "state": "MERGED",
        "reason": "holding + our co-occur 100%, merged to holding-our-own"
      },
      {
        "root": "own",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 38.3,
        "state": "MERGED",
        "reason": "holding + our co-occur 100%, merged to holding-our-own"
      },
      {
        "root": "pstr",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 38.3,
        "state": "MERGED",
        "reason": "pstr + pokestrategy co-occur 86%, merged to pstr-pokestrategy"
      },
      {
        "root": "dance",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 32.8,
        "state": "MERGED",
        "reason": "dance + tecktonik co-occur 100%, merged to dance-tecktonik"
      },
      {
        "root": "pokestrategy",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 32.8,
        "state": "MERGED",
        "reason": "pstr + pokestrategy co-occur 86%, merged to pstr-pokestrategy"
      },
      {
        "root": "tecktonik",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 32.8,
        "state": "MERGED",
        "reason": "dance + tecktonik co-occur 100%, merged to dance-tecktonik"
      },
      {
        "root": "ramses",
        "launches": 9,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 49.2,
        "state": "THIN",
        "reason": "ramses: 3 deployers < 6 required"
      },
      {
        "root": "volatile",
        "launches": 8,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 43.8,
        "state": "THIN",
        "reason": "volatile: 3 deployers < 6 required"
      },
      {
        "root": "counterparty",
        "launches": 7,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 38.3,
        "state": "THIN",
        "reason": "counterparty: 1 deployers < 6 required"
      },
      {
        "root": "ctr",
        "launches": 7,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 38.3,
        "state": "THIN",
        "reason": "ctr: 1 deployers < 6 required"
      },
      {
        "root": "prd",
        "launches": 7,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 38.3,
        "state": "THIN",
        "reason": "prd: 1 deployers < 6 required"
      },
      {
        "root": "predictor",
        "launches": 7,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 38.3,
        "state": "THIN",
        "reason": "predictor: 1 deployers < 6 required"
      },
      {
        "root": "cow",
        "launches": 6,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 32.8,
        "state": "THIN",
        "reason": "cow: 3 deployers < 6 required"
      },
      {
        "root": "arena",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 27.4,
        "state": "THIN",
        "reason": "arena: 5 deployers < 6 required"
      },
      {
        "root": "bucket",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 27.4,
        "state": "THIN",
        "reason": "bucket: 1 deployers < 6 required"
      },
      {
        "root": "mochi",
        "launches": 5,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 27.4,
        "state": "THIN",
        "reason": "mochi: 2 deployers < 6 required"
      },
      {
        "root": "mochioracle",
        "launches": 5,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 27.4,
        "state": "THIN",
        "reason": "mochioracle: 2 deployers < 6 required"
      },
      {
        "root": "nara",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 27.4,
        "state": "THIN",
        "reason": "nara: 5 deployers < 6 required"
      },
      {
        "root": "owl",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 27.4,
        "state": "THIN",
        "reason": "owl: 5 deployers < 6 required"
      },
      {
        "root": "privacy",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 27.4,
        "state": "THIN",
        "reason": "privacy: 5 deployers < 6 required"
      },
      {
        "root": "usdg",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 27.4,
        "state": "THIN",
        "reason": "usdg: 5 deployers < 6 required"
      },
      {
        "root": "ai",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.9,
        "state": "THIN",
        "reason": "ai: 4 launches < 5 required"
      },
      {
        "root": "box",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.9,
        "state": "THIN",
        "reason": "box: 4 launches < 5 required"
      },
      {
        "root": "deposit",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.9,
        "state": "THIN",
        "reason": "deposit: 4 launches < 5 required"
      },
      {
        "root": "hood",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.9,
        "state": "THIN",
        "reason": "hood: 4 launches < 5 required"
      },
      {
        "root": "https",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.9,
        "state": "THIN",
        "reason": "https: 4 launches < 5 required"
      },
      {
        "root": "pons",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.9,
        "state": "THIN",
        "reason": "pons: 4 launches < 5 required"
      },
      {
        "root": "robinhood",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.9,
        "state": "THIN",
        "reason": "robinhood: 4 launches < 5 required"
      },
      {
        "root": "safety",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.9,
        "state": "THIN",
        "reason": "safety: 4 launches < 5 required"
      },
      {
        "root": "weth",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.9,
        "state": "THIN",
        "reason": "weth: 4 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0xe2688e048b018d5bd2895835adadcfbd76a84a7e",
        "name": "DUCAT money by Virtuals",
        "symbol": "DUCAT",
        "deployer": "0xb56e5d24e16155a79365696220a9d48f4164815b",
        "block": 80345253,
        "ts": "2026-10-04T23:58:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdf8f2657dd5008113f5aa3af0c9bec4e6cf896b5",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x489448e984b3d2631564c6e31af6a6c6b51a1d60",
        "block": 80345086,
        "ts": "2026-10-04T23:58:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe0080c00910bf55383884216b260c31e526268b7",
        "name": "Orbio Capital",
        "symbol": "CAPITAL",
        "deployer": "0x013a12270d4da655e336d3bb47e0d8d2e2e7b6e5",
        "block": 80345066,
        "ts": "2026-10-04T23:58:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb0711574537f61298d43be9cebc05d8c5e6101e9",
        "name": "Stray Dog",
        "symbol": "DOG",
        "deployer": "0xd335ada7a1265adb5b2c37b56c5b19db57f37600",
        "block": 80345061,
        "ts": "2026-10-04T23:58:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb7c0d231492eece66873778f93ea02bfa6e3d292",
        "name": "Nara",
        "symbol": "NARA",
        "deployer": "0x7129f93626cdcc142338d81255ccb464498069fe",
        "block": 80344891,
        "ts": "2026-10-04T23:58:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x65bbd7c7f13c562b61f8d421aa975b8250b91e18",
        "name": "EldenCraft",
        "symbol": "EC",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 80344850,
        "ts": "2026-10-04T23:58:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x36a1c741a5eb34a1def09906cd32016c65b2a53f",
        "name": "Wiggification",
        "symbol": "Wiggify",
        "deployer": "0x2aa9ca6a0f1e8b2a46cadac3678d0366bfd03a67",
        "block": 80344842,
        "ts": "2026-10-04T23:58:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd1bc4b69e5d1dc2369beb4f91a22d8ca78ffbf95",
        "name": "claus",
        "symbol": "CLAUS",
        "deployer": "0x58d90b932fcfa8a92d68ed0707d5eb313802c795",
        "block": 80344811,
        "ts": "2026-10-04T23:58:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x768a99ee1d75a5b80dbf5a605a59d55859580777",
        "name": "Wiggification",
        "symbol": "Wiggify",
        "deployer": "0x8275f7a54cd84e2c84282d6caa252dfa44544746",
        "block": 80344807,
        "ts": "2026-10-04T23:58:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfb1fee077a23bbfc8b10371b85d3d1b9b27982c7",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x8723711328acb07fe60045ebee00a0669df119a4",
        "block": 80344752,
        "ts": "2026-10-04T23:57:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9f51d9902c2ea998a9393a62d2881c266cc90ca6",
        "name": "FOUNDRY",
        "symbol": "FOUNDRY",
        "deployer": "0x9f6e4ea47754e2a691b2910753a78c0ba3c68246",
        "block": 80344748,
        "ts": "2026-10-04T23:57:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xacec656deef94ff68f802b3a59b36d762a62ecde",
        "name": "OpenHence",
        "symbol": "HENCE",
        "deployer": "0x2ae15b89aa1545b02a1347d8d4808194b27f830e",
        "block": 80344653,
        "ts": "2026-10-04T23:57:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xac7436413efca28cc93cce6f2b0c4238d500cdbb",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x156dfca59d425e9f875af78d5efb1e0a7717645c",
        "block": 80344650,
        "ts": "2026-10-04T23:57:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb479570df00be9afd2752b1aac61397c6863fd90",
        "name": "Orbio Arena",
        "symbol": "ARENA",
        "deployer": "0x8f486a3bcc42ad2de048130c8a42f311d38d5e71",
        "block": 80344387,
        "ts": "2026-10-04T23:57:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9869aaba452c88a420253092d2bc09fdf14314a0",
        "name": "Super Inu",
        "symbol": "SI",
        "deployer": "0x8723711328acb07fe60045ebee00a0669df119a4",
        "block": 80344383,
        "ts": "2026-10-04T23:57:19.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x1e306ee666dc9894bc4eb710e11522ba70696d1d",
        "name": "Soon",
        "symbol": "SOON",
        "deployer": "0x156dfca59d425e9f875af78d5efb1e0a7717645c",
        "block": 80344230,
        "ts": "2026-10-04T23:57:03.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x6a9d8ed9f327e9203d2de80e0fa1206f152dbfc1",
        "name": "Rankz Collection",
        "symbol": "RANKZ",
        "deployer": "0x3554fea5520f9edb66e56cb820ef85c7dfac8d9c",
        "block": 80344230,
        "ts": "2026-10-04T23:57:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf486c9104200aa0265781d0204b30e375ed5d971",
        "name": "Pons with pamper",
        "symbol": "PIMPS",
        "deployer": "0x3a9a8c682fa4abb3d0d31d7cb687cb7bcfce4e60",
        "block": 80344183,
        "ts": "2026-10-04T23:56:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xee10b62708b6332c8f79712e69f8005c519de911",
        "name": "ROONZ by BUDZ",
        "symbol": "RBB",
        "deployer": "0x5534f511890fea8c47d7b744bab4f4845149d2d6",
        "block": 80344175,
        "ts": "2026-10-04T23:56:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf07480616815a86391c44a8e2524920ac87c9ab5",
        "name": "Orchard Credits",
        "symbol": "ORCH",
        "deployer": "0xd20db27a74c3d3fd401069a0b6784515b20f3225",
        "block": 80343842,
        "ts": "2026-10-04T23:56:24.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xb0c233701b4609ef5570268dd34d4848990c3597",
        "name": "OpenHence",
        "symbol": "HENCE",
        "deployer": "0x24b18d3fc8dee8a338993fe4d750b15d1c2ffafe",
        "block": 80343740,
        "ts": "2026-10-04T23:56:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf82f318c40b2933211006b339269e8d4a5617777",
        "name": "Dr Egg Bot",
        "symbol": "EggBot",
        "deployer": "0x2acaa14073cafab5e6c08c73a15a59ec8b6e0e50",
        "block": 80343720,
        "ts": "2026-10-04T23:56:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x041a78dfc20a89d686dc4bc48c4abe50c87cfd2b",
        "name": "money",
        "symbol": "FND",
        "deployer": "0xda4b2a28e4310db5ef705e8f950495387012f375",
        "block": 80343689,
        "ts": "2026-10-04T23:56:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2d4ed1202514c226f87304a5bcb771261481f73a",
        "name": "G+",
        "symbol": "G+",
        "deployer": "0xe93685f3bba03016f02bd1828badd6195988d950",
        "block": 80343639,
        "ts": "2026-10-04T23:56:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x46f35c48c0787bbd0b8fabd8424f3030ed510c27",
        "name": "Pons Domains",
        "symbol": "DOMAINS",
        "deployer": "0x06cb3a6841c92525e7a1998328e7c9d37e98d937",
        "block": 80343552,
        "ts": "2026-10-04T23:55:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x77fd328992162f73dcc1ff84d12b0e2f677531b2",
        "name": "Invokr",
        "symbol": "INVK",
        "deployer": "0xe02d4c779d967b3c4eaa3654725acf4772e4f7c6",
        "block": 80343546,
        "ts": "2026-10-04T23:55:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9b7c5943accbbe1a727d259e33eb4a22cca5e476",
        "name": "Cashpig",
        "symbol": "CASHPIG",
        "deployer": "0x36aa2f98ed44755172ca8d1440d2fbaa6f5d4f32",
        "block": 80343398,
        "ts": "2026-10-04T23:55:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x75729455d6469fa7fdec20f2f5c16a67468bd083",
        "name": "zyqoxpert",
        "symbol": "ZXPERT",
        "deployer": "0xfce783a4e7b8f740c2a8aafd7eca824bea0af6db",
        "block": 80343296,
        "ts": "2026-10-04T23:55:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xabdcb2c80b6529b7e5884e91350bdd79af297d23",
        "name": "Thrill Redemption Voucher",
        "symbol": "THRILL-IOU",
        "deployer": "0xd5c6db06f3994908ce788aca7c9100a1dd4c2594",
        "block": 80343043,
        "ts": "2026-10-04T23:55:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe153a5f5280eeb8529f8302df457cd6c31291939",
        "name": "Invokr",
        "symbol": "INVK",
        "deployer": "0x319c9c73827a3ebf1bf08927be7ed3e12c7abebc",
        "block": 80342953,
        "ts": "2026-10-04T23:54:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x55aed1a1406ad8821b3cd0b3a189757acf007447",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x433700890211c1c776c391d414cffd38efdd1811",
        "block": 80342850,
        "ts": "2026-10-04T23:54:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf5d0ad2d971b81c9edeaa48a7d390d71eb951369",
        "name": "Backstop",
        "symbol": "BSTOP",
        "deployer": "0x34d12a8152a8f1a7ea7c865d7f44fcf5d00b4c4e",
        "block": 80342715,
        "ts": "2026-10-04T23:54:30.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xcf70131b9d64ff53ce2f94fb67418907a22057aa",
        "name": "Snack Tide",
        "symbol": "SNACK",
        "deployer": "0xf33f4b9f81c96af5fda836a258972f66812a99f7",
        "block": 80342574,
        "ts": "2026-10-04T23:54:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x607949898cd8285b076a57f577874c1e8f86af7d",
        "name": "Knight Kitten NFT",
        "symbol": "Knight Kitten NFT",
        "deployer": "0x616a20530e47a155657ab5352b3776df64ee649d",
        "block": 80342477,
        "ts": "2026-10-04T23:54:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc5a7404ca7763088aebbab032fab0f99569a668d",
        "name": "Vaultopia Strategy",
        "symbol": "VAULTOPIA",
        "deployer": "0xa8cba16876d13405545c4b38d8bb9e699fcbbbb6",
        "block": 80342473,
        "ts": "2026-10-04T23:54:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfead3d1ae051e678a4eb23902b49a7a9ce2c391d",
        "name": "Ludi Arena",
        "symbol": "LUDI",
        "deployer": "0x6c13a0f46e2de55e6f0101df3874648eb2cd32a2",
        "block": 80342470,
        "ts": "2026-10-04T23:54:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xde760216837abbc4bfe76dc05a5c02a11f3db909",
        "name": "Pons Domains",
        "symbol": "DOMAINS",
        "deployer": "0xc93c572f71e69d4b55b28862e8285694285f8f36",
        "block": 80342020,
        "ts": "2026-10-04T23:53:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf740b7b89c19e3ef6a1963d673c5f2b4b47d7919",
        "name": "Sherwood Wrapped Zcash",
        "symbol": "wZEC",
        "deployer": "0x3972bb95df1d18a214dd502d1d777d97a0744815",
        "block": 80341871,
        "ts": "2026-10-04T23:53:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc01eeff0db5425914e6f732142f833674155abf1",
        "name": "PLAGUE",
        "symbol": "PLAGUE",
        "deployer": "0xc50c976293f0c6785d23fba890bc6c4817e89ccd",
        "block": 80341510,
        "ts": "2026-10-04T23:52:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1bf94b43a09581ffb8ea2eebbad1e98d9c5ef9dd",
        "name": "Orbio Arena",
        "symbol": "ARENA",
        "deployer": "0x8b6ba1f8bfe2c229cff484f7bb3dab5d4faa2781",
        "block": 80341309,
        "ts": "2026-10-04T23:52:08.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
