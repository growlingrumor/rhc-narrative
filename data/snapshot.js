/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-17T22:45:14.000Z",
    "opened_at": "2026-10-17T21:45:14.000Z",
    "window_hours": 1,
    "head_block": 91289834,
    "start_block": 91254471,
    "blocks_scanned": 35363,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 359,
    "unnamed_contracts": 0,
    "via_factory": 324,
    "no_receipt": 0,
    "candidates": 359,
    "mint_events": 18121,
    "deployers": 255,
    "roots": 463,
    "cleared_multiple": 463,
    "failed_gates": 454,
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
      "el",
      "gato",
      "nft-positions",
      "trencher",
      "uniswap-uni",
      "usdg"
    ],
    "top": {
      "root": "gato",
      "launches": 24,
      "deployers": 21,
      "baseline_share": 0.0004,
      "multiple": 167.1,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "gato",
        "launches": 24,
        "deployers": 21,
        "baseline_share": 0.0004,
        "multiple": 167.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "el",
        "launches": 19,
        "deployers": 19,
        "baseline_share": 0.0004,
        "multiple": 132.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "ai",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 62.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "trencher",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 41.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 41.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 15,
        "deployers": 14,
        "baseline_share": 0.0004,
        "multiple": 104.5,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 73%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 11,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 76.6,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 73%, merged to uniswap-uni"
      },
      {
        "root": "nft",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 62.7,
        "state": "MERGED",
        "reason": "nft + positions co-occur 64%, merged to nft-positions"
      },
      {
        "root": "positions",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 62.7,
        "state": "MERGED",
        "reason": "nft + positions co-occur 64%, merged to nft-positions"
      },
      {
        "root": "hypurrt",
        "launches": 10,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 69.6,
        "state": "THIN",
        "reason": "hypurrt: 4 deployers < 6 required"
      },
      {
        "root": "hypurrtrade",
        "launches": 10,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 69.6,
        "state": "THIN",
        "reason": "hypurrtrade: 4 deployers < 6 required"
      },
      {
        "root": "route",
        "launches": 10,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 69.6,
        "state": "THIN",
        "reason": "route: 4 deployers < 6 required"
      },
      {
        "root": "trt",
        "launches": 10,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 69.6,
        "state": "THIN",
        "reason": "trt: 4 deployers < 6 required"
      },
      {
        "root": "ei",
        "launches": 5,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 34.8,
        "state": "THIN",
        "reason": "ei: 2 deployers < 6 required"
      },
      {
        "root": "aixdnt",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 27.9,
        "state": "THIN",
        "reason": "aixdnt: 4 launches < 5 required"
      },
      {
        "root": "anir",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 27.9,
        "state": "THIN",
        "reason": "anir: 4 launches < 5 required"
      },
      {
        "root": "anirmemecoins",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 27.9,
        "state": "THIN",
        "reason": "anirmemecoins: 4 launches < 5 required"
      },
      {
        "root": "empirex",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 27.9,
        "state": "THIN",
        "reason": "empirex: 4 launches < 5 required"
      },
      {
        "root": "fetchn",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 27.9,
        "state": "THIN",
        "reason": "fetchn: 4 launches < 5 required"
      },
      {
        "root": "kev",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 27.9,
        "state": "THIN",
        "reason": "kev: 4 launches < 5 required"
      },
      {
        "root": "world",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 27.9,
        "state": "THIN",
        "reason": "world: 4 launches < 5 required"
      },
      {
        "root": "alandale",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "alandale: 3 launches < 5 required"
      },
      {
        "root": "bucket",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "bucket: 3 launches < 5 required"
      },
      {
        "root": "cat",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "cat: 3 launches < 5 required"
      },
      {
        "root": "ea",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "ea: 3 launches < 5 required"
      },
      {
        "root": "elon",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "elon: 3 launches < 5 required"
      },
      {
        "root": "flock",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "flock: 3 launches < 5 required"
      },
      {
        "root": "hood",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "hood: 3 launches < 5 required"
      },
      {
        "root": "hoot",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "hoot: 3 launches < 5 required"
      },
      {
        "root": "jumper",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "jumper: 3 launches < 5 required"
      },
      {
        "root": "kakudo",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "kakudo: 3 launches < 5 required"
      },
      {
        "root": "koinu",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "koinu: 3 launches < 5 required"
      },
      {
        "root": "position",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "position: 3 launches < 5 required"
      },
      {
        "root": "si",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "si: 3 launches < 5 required"
      },
      {
        "root": "spark",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "spark: 3 launches < 5 required"
      },
      {
        "root": "two",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "two: 3 launches < 5 required"
      },
      {
        "root": "vault",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "vault: 3 launches < 5 required"
      },
      {
        "root": "absturd",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 13.9,
        "state": "THIN",
        "reason": "absturd: 2 launches < 5 required"
      },
      {
        "root": "agent",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 13.9,
        "state": "THIN",
        "reason": "agent: 2 launches < 5 required"
      },
      {
        "root": "agents",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 13.9,
        "state": "THIN",
        "reason": "agents: 2 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0xe3c15d0408bb7458f1ef7a3e29aad53cd2a491ea",
        "name": "faggot",
        "symbol": "FAGGOT",
        "deployer": "0x6e71a85c1ad06e5d358db34b14f2d9e7d03238fb",
        "block": 91289803,
        "ts": "2026-10-17T22:45:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb323a58c7fdbe51d2aece372b31ca2ac03ac6732",
        "name": "Future Hookscribe by Virtuals",
        "symbol": "FT-HOOK",
        "deployer": "0x81f7ca6af86d1ca6335e44a2c28bc88807491415",
        "block": 91289428,
        "ts": "2026-10-17T22:44:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x29e8d621b6b89814babcb487b82813ab25ca2278",
        "name": "Giga Meow",
        "symbol": "GM",
        "deployer": "0x43373c042e4217e29b65c408857553f8e7e84b72",
        "block": 91289367,
        "ts": "2026-10-17T22:44:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x187ffacd4bf9439b242c75217bcb8b9da8098224",
        "name": "Chicago Sky",
        "symbol": "ETH",
        "deployer": "0x43370648aa914e8d3c0cf1c10b00f2a636ab6c92",
        "block": 91289228,
        "ts": "2026-10-17T22:44:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x03f7c9ee73c52704df2f4a7e22eeab3baee57777",
        "name": "Anirmemecoins",
        "symbol": "ANIR",
        "deployer": "0xe26a8a93a803f6dcc9355da3beac69d733ddfd5d",
        "block": 91289119,
        "ts": "2026-10-17T22:44:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x422ddebfad8e0af1c404419baec74660e101b30c",
        "name": "HYPURRTRADE e3221",
        "symbol": "HYPURRT",
        "deployer": "0x06cb3a6841c92525e7a1998328e7c9d37e98d937",
        "block": 91288967,
        "ts": "2026-10-17T22:43:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x550c36567af6ac2df7e983d088e8a1492ff1b1ee",
        "name": "Test Route Four",
        "symbol": "TRT4",
        "deployer": "0x34cd851fedae68c727ac419c3cbbf1ef1e914395",
        "block": 91288776,
        "ts": "2026-10-17T22:43:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6e0e97143052ca473100a0cdb388c70f49beaf1f",
        "name": "Hookscribe by Virtuals",
        "symbol": "HOOK",
        "deployer": "0xbf8a4e3ef6607c9e6078576d4e589c0b4968971d",
        "block": 91288745,
        "ts": "2026-10-17T22:43:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe93dd9f5e025f598b11d311d269f2920627fd1e9",
        "name": "Sampler",
        "symbol": "SAMPLER",
        "deployer": "0x43370371e0bb085d04d02a815230aaf67b35ef25",
        "block": 91288734,
        "ts": "2026-10-17T22:43:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6ad636e78e64c3f96b7b231195ad123b171ab071",
        "name": "Infinite Money Glitch",
        "symbol": "GLITCH",
        "deployer": "0x8725fe903bef6df2ce71ab8e5df293716d518ec7",
        "block": 91288529,
        "ts": "2026-10-17T22:43:01.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xcc4ad12aabbc56b4fe070d293ae7d7140115fa96",
        "name": "OreOS",
        "symbol": "OREOS",
        "deployer": "0x1532c4b32d868ffab20266ea4a8509a654bf7957",
        "block": 91288081,
        "ts": "2026-10-17T22:42:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6571990ed543a9daecfa58066f7d550142a57777",
        "name": "3com",
        "symbol": "COMS",
        "deployer": "0xe26a8a93a803f6dcc9355da3beac69d733ddfd5d",
        "block": 91287930,
        "ts": "2026-10-17T22:42:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x415a3dc3db04262c4acadf95c9d006f9dde3e2b2",
        "name": "OTX",
        "symbol": "OTX",
        "deployer": "0x43371bf8c9701442ad5e97ebff025fbbbad7c021",
        "block": 91287862,
        "ts": "2026-10-17T22:41:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3647c679902fe5b126ab8d9a9633169962be5b0d",
        "name": "EI Gato",
        "symbol": "Gato",
        "deployer": "0x030e1354c5e2bfcb96c0373b2686f0112caf9ebd",
        "block": 91287860,
        "ts": "2026-10-17T22:41:53.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x5c6a086bdf2eed6b5e4b040cccac1963254a341d",
        "name": "3com",
        "symbol": "COMS",
        "deployer": "0x08a49f7db6dc69f25037fd0da74d31bb0c774d6e",
        "block": 91287836,
        "ts": "2026-10-17T22:41:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xac7d36f189e1673fa4d0581679d032db3ad20713",
        "name": "Test Route Three",
        "symbol": "TRT3",
        "deployer": "0x201b8a23eb7013e1a4286a6e1148b82f6d4d58c6",
        "block": 91287637,
        "ts": "2026-10-17T22:41:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe5e568324fe4b7c27c4ec428a1557904adc14efe",
        "name": "Build",
        "symbol": "BUILD",
        "deployer": "0x4337003fcd2f56de3977ccb806383e9161628d0e",
        "block": 91287458,
        "ts": "2026-10-17T22:41:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbc79084450b3c648a2fa29237812f31e10527777",
        "name": "anirmemecoins",
        "symbol": "anir",
        "deployer": "0x309a9435af56d4ce19e5ab30017e58d6e3540548",
        "block": 91287419,
        "ts": "2026-10-17T22:41:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe6a153227aa43d662edb34ea92f06609f74f9869",
        "name": "Farm Valley Token Packs",
        "symbol": "FVPT",
        "deployer": "0x2082dfd75329096fb4a1c21e7e412b1f572ef00d",
        "block": 91287393,
        "ts": "2026-10-17T22:41:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7ed72234a49157e7c20ca7e8ecabf2efe941bcfa",
        "name": "anirmemecoins",
        "symbol": "anir",
        "deployer": "0xbf2d27ed61c2c6dca26ae9de8f9dfcd317416239",
        "block": 91287152,
        "ts": "2026-10-17T22:40:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf4d0de222dd5816cba50a72b19558df517953434",
        "name": "Agent City",
        "symbol": "AGC",
        "deployer": "0x43370460d26b10de805d4cdfe4d331adb7219ffe",
        "block": 91287149,
        "ts": "2026-10-17T22:40:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe1684ef69ce00ec7ce0f8384af2163b5aab16aac",
        "name": "chillphysics",
        "symbol": "CLDUST",
        "deployer": "0xec5f1fe90d9212c8b4b7c70a278ec32730906eba",
        "block": 91287077,
        "ts": "2026-10-17T22:40:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7a8f684ae4389c089593f687ae1999f2f29462b3",
        "name": "Snaxx Machines",
        "symbol": "Snaxx Machines",
        "deployer": "0x08a8aa8e9e6f6ee85c2645d6756d479047d3b09b",
        "block": 91286745,
        "ts": "2026-10-17T22:40:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2ce8f289095070164eae00e7705ce76085610dce",
        "name": "Flying Cat",
        "symbol": "FCAT",
        "deployer": "0x433704940ad127f33b441418a3c17e4c47e45393",
        "block": 91286744,
        "ts": "2026-10-17T22:40:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x15bc6cac7dce3ba978cf49901940ea9207a8afd9",
        "name": "Test Route Two",
        "symbol": "TRT2",
        "deployer": "0x34f404a0676f1d29a43ad7ba122bc14f08ac5da1",
        "block": 91286566,
        "ts": "2026-10-17T22:39:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x88b7743dea68fd0a75e16f270690a17998d67d71",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xf8dce6ac449e423a9da059de7b9f6c9a29bc1a21",
        "block": 91286444,
        "ts": "2026-10-17T22:39:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x35e8263735662edd710ccacd8779b9f5a341451f",
        "name": "Wrapped ORBIO Bridge v2",
        "symbol": "wORBIO2",
        "deployer": "0xf8dce6ac449e423a9da059de7b9f6c9a29bc1a21",
        "block": 91286367,
        "ts": "2026-10-17T22:39:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x85f8328b827a21ae87c5a6b4fd9b8f9ae4d04ff4",
        "name": "Crest",
        "symbol": "CREST",
        "deployer": "0x433768867635038eef028526125d551b580bbc7a",
        "block": 91286334,
        "ts": "2026-10-17T22:39:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7fa989d5d0f0c23fb0493949fdb45977a9e91e18",
        "name": "anirmemecoins",
        "symbol": "ANIR",
        "deployer": "0xd20278dc748cfe4a381e8969751873f1ab80cce4",
        "block": 91286128,
        "ts": "2026-10-17T22:38:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x281ef55951bdf6adfa2c0c817526c82f7d2dd248",
        "name": "Hashfield",
        "symbol": "HASHFIELD",
        "deployer": "0x43370350f0a1c28aba50545fb34722b06ae25627",
        "block": 91285995,
        "ts": "2026-10-17T22:38:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x25a8a9a0b62b218cb51aeff28f055d9315170165",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x0dc0550d94445e306e453d99ac1b580bdb3a3e7d",
        "block": 91285840,
        "ts": "2026-10-17T22:38:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x522bf4b5c9280bb6bb719f2ce7f514dd63c8c0c5",
        "name": "Topaz CL Position",
        "symbol": "TOPAZ-CL-POS",
        "deployer": "0x46c1a75b213e48403245b75f0604cb0f4c81ed29",
        "block": 91285731,
        "ts": "2026-10-17T22:38:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xce95e8e22a63e2cde0a4faa52e03713173567777",
        "name": "Hashfield",
        "symbol": "Hashfield",
        "deployer": "0x7bddaebac7634776b098c48def77624b87fe3294",
        "block": 91285668,
        "ts": "2026-10-17T22:38:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x007882f8acd0a2347d8ccf5ee4854b2e423eb6c8",
        "name": "El Gato",
        "symbol": "Gato",
        "deployer": "0xe3dfc77168aeb447be8b072817b50220c6b55ff9",
        "block": 91285633,
        "ts": "2026-10-17T22:38:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x98ff82f0d84d953f5aec07a0ebdcc3296729147b",
        "name": "koinu",
        "symbol": "koinu",
        "deployer": "0xe8b1fb55d25746166030b8cc15472943157113dc",
        "block": 91285620,
        "ts": "2026-10-17T22:38:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x743d1db4967db2c43ef7ee6e71ba942dc7c01da8",
        "name": "Cabbit",
        "symbol": "CABBIT",
        "deployer": "0x43375ce534ea8d3b6b8876186084044f03578826",
        "block": 91285548,
        "ts": "2026-10-17T22:37:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x95952cd8ef7e40878610d5ac27526940156504ec",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xd30514f5ba1ac36526b24eedc55673ba8b12d598",
        "block": 91285400,
        "ts": "2026-10-17T22:37:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x72fc4b6fa653c089c5af97c9ebe41962afb452e7",
        "name": "Velum",
        "symbol": "VELUM",
        "deployer": "0x433705768549b21d1e681fe454a7d2ff26a22e1c",
        "block": 91285129,
        "ts": "2026-10-17T22:37:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4e449583c26bd27706bf1b06a76442d670ff6c2d",
        "name": "Mechafolio",
        "symbol": "FOLIO",
        "deployer": "0x0dc0550d94445e306e453d99ac1b580bdb3a3e7d",
        "block": 91285125,
        "ts": "2026-10-17T22:37:15.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x3ab756048ef77c959c0096f3f9862585e3dffb7d",
        "name": "smoking Inu 75c12",
        "symbol": "SI",
        "deployer": "0x06cb3a6841c92525e7a1998328e7c9d37e98d937",
        "block": 91284867,
        "ts": "2026-10-17T22:36:49.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
