/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-26T19:26:41.000Z",
    "opened_at": "2026-10-26T18:26:41.000Z",
    "window_hours": 1,
    "head_block": 98657494,
    "start_block": 98622436,
    "blocks_scanned": 35058,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 685,
    "unnamed_contracts": 0,
    "via_factory": 631,
    "no_receipt": 0,
    "candidates": 685,
    "mint_events": 21869,
    "deployers": 434,
    "roots": 745,
    "cleared_multiple": 205,
    "failed_gates": 189,
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
      "assay",
      "fun-mutual",
      "hogan-hulk",
      "hood",
      "mooncoin",
      "nft",
      "positions",
      "robinhood",
      "sojo",
      "tmf",
      "uniswap-uni",
      "usdg",
      "weth"
    ],
    "top": {
      "root": "assay",
      "launches": 59,
      "deployers": 53,
      "baseline_share": 0.0004,
      "multiple": 215.3,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "assay",
        "launches": 59,
        "deployers": 53,
        "baseline_share": 0.0004,
        "multiple": 215.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "robinhood",
        "launches": 34,
        "deployers": 13,
        "baseline_share": 0.0004,
        "multiple": 124.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "sojo",
        "launches": 19,
        "deployers": 19,
        "baseline_share": 0.0004,
        "multiple": 69.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 12,
        "deployers": 12,
        "baseline_share": 0.0004,
        "multiple": 43.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "hood",
        "launches": 10,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 36.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "mooncoin",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 36.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nft",
        "launches": 10,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 36.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 32.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "tmf",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 29.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "weth",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 21.9,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 22,
        "deployers": 21,
        "baseline_share": 0.0004,
        "multiple": 80.3,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 86%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 19,
        "deployers": 18,
        "baseline_share": 0.0004,
        "multiple": 69.3,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 86%, merged to uniswap-uni"
      },
      {
        "root": "hogan",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 40.1,
        "state": "MERGED",
        "reason": "hogan + hulk co-occur 91%, merged to hogan-hulk"
      },
      {
        "root": "hulk",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 36.5,
        "state": "MERGED",
        "reason": "hogan + hulk co-occur 91%, merged to hogan-hulk"
      },
      {
        "root": "fun",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 21.9,
        "state": "MERGED",
        "reason": "fun + mutual co-occur 100%, merged to fun-mutual"
      },
      {
        "root": "mutual",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 21.9,
        "state": "MERGED",
        "reason": "fun + mutual co-occur 100%, merged to fun-mutual"
      },
      {
        "root": "sniper",
        "launches": 9,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 32.8,
        "state": "THIN",
        "reason": "sniper: 1 deployers < 6 required"
      },
      {
        "root": "arcus",
        "launches": 6,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 21.9,
        "state": "THIN",
        "reason": "arcus: 1 deployers < 6 required"
      },
      {
        "root": "long",
        "launches": 6,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 21.9,
        "state": "THIN",
        "reason": "long: 2 deployers < 6 required"
      },
      {
        "root": "st",
        "launches": 6,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 21.9,
        "state": "THIN",
        "reason": "st: 1 deployers < 6 required"
      },
      {
        "root": "volatile",
        "launches": 6,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.9,
        "state": "THIN",
        "reason": "volatile: 4 deployers < 6 required"
      },
      {
        "root": "agent",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 18.2,
        "state": "THIN",
        "reason": "agent: 5 deployers < 6 required"
      },
      {
        "root": "ai",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 18.2,
        "state": "THIN",
        "reason": "ai: 5 deployers < 6 required"
      },
      {
        "root": "clout",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 18.2,
        "state": "THIN",
        "reason": "clout: 5 deployers < 6 required"
      },
      {
        "root": "inc",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 18.2,
        "state": "THIN",
        "reason": "inc: 4 deployers < 6 required"
      },
      {
        "root": "minehood",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 18.2,
        "state": "THIN",
        "reason": "minehood: 5 deployers < 6 required"
      },
      {
        "root": "one",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 18.2,
        "state": "THIN",
        "reason": "one: 4 deployers < 6 required"
      },
      {
        "root": "trade",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 18.2,
        "state": "THIN",
        "reason": "trade: 5 deployers < 6 required"
      },
      {
        "root": "world",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 18.2,
        "state": "THIN",
        "reason": "world: 5 deployers < 6 required"
      },
      {
        "root": "xd",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 18.2,
        "state": "THIN",
        "reason": "xd: 5 deployers < 6 required"
      },
      {
        "root": "alandale",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 14.6,
        "state": "THIN",
        "reason": "alandale: 4 launches < 5 required"
      },
      {
        "root": "amm",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 14.6,
        "state": "THIN",
        "reason": "amm: 4 launches < 5 required"
      },
      {
        "root": "dog",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 14.6,
        "state": "THIN",
        "reason": "dog: 4 launches < 5 required"
      },
      {
        "root": "net",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 14.6,
        "state": "THIN",
        "reason": "net: 4 launches < 5 required"
      },
      {
        "root": "night",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 14.6,
        "state": "THIN",
        "reason": "night: 4 launches < 5 required"
      },
      {
        "root": "place",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 14.6,
        "state": "THIN",
        "reason": "place: 4 launches < 5 required"
      },
      {
        "root": "ramses",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 14.6,
        "state": "THIN",
        "reason": "ramses: 4 launches < 5 required"
      },
      {
        "root": "staked",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 14.6,
        "state": "THIN",
        "reason": "staked: 4 launches < 5 required"
      },
      {
        "root": "strategy",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 14.6,
        "state": "THIN",
        "reason": "strategy: 4 launches < 5 required"
      },
      {
        "root": "xplace",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 14.6,
        "state": "THIN",
        "reason": "xplace: 4 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x85d5ed836bcf32824fa9b5e5e02a81dbeb3a7777",
        "name": "VELUM",
        "symbol": "VELUM",
        "deployer": "0xa72d384419e08b0eeb43d96c73ba62b627de39a7",
        "block": 98657236,
        "ts": "2026-10-26T19:26:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc2473c27debcafb23bac7d18fe546da431b0c043",
        "name": "HallowInu",
        "symbol": "HALLOWINU",
        "deployer": "0xea209a4a5de9a8449a666c5f9fa43be7181600a9",
        "block": 98657171,
        "ts": "2026-10-26T19:26:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x26ac44dd5599bb44621e10ce123a5d3f80d73432",
        "name": "VELUM",
        "symbol": "VELUM",
        "deployer": "0x44ad3f58271d56bc1301d819cd962e500d03a487",
        "block": 98657144,
        "ts": "2026-10-26T19:25:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x87086329b677c94df4da5dfe9a8da90c73c535bf",
        "name": "Volatile AMM - UP/USDG",
        "symbol": "vAMM-UP/USDG",
        "deployer": "0x21ad783890b8bc8c18733cf51cb2fdf5678171fb",
        "block": 98656982,
        "ts": "2026-10-26T19:25:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa80c9f59886057591f247da76e07c70f14eecbf7",
        "name": "Rondwyn",
        "symbol": "RONDWYN",
        "deployer": "0x69b4736586fa106d479ee6920e839014c95529e5",
        "block": 98656944,
        "ts": "2026-10-26T19:25:37.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x3f00a24fae00c4d42dcc69d0911032eb6e527777",
        "name": "Robinhood L3 Network",
        "symbol": "RHL3",
        "deployer": "0xbe969c5bc42f1e30814fbde46538451791e40187",
        "block": 98656738,
        "ts": "2026-10-26T19:25:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x112b2fef9b3dd1bd56a5a5dc61d20147eddec8e7",
        "name": "RobinhoodGnomes",
        "symbol": "GNOME",
        "deployer": "0xfc3d50ec8f1502760f3117e071147ea65d88abbd",
        "block": 98656675,
        "ts": "2026-10-26T19:25:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc25663afacb429b5afa1cae7280c1e71f824a2a8",
        "name": "Robinhood L3 Network",
        "symbol": "RHL3",
        "deployer": "0x3e44783ec210dc9bc300fd327772daab8962ce3b",
        "block": 98656633,
        "ts": "2026-10-26T19:25:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfbf066a40482c775601bc193bf02171d18c47777",
        "name": "Aurum",
        "symbol": "AU",
        "deployer": "0x22be0787ea7621328214b466d07bf3d2f5cda2b2",
        "block": 98656619,
        "ts": "2026-10-26T19:25:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfc0492c6d086db83dd281cdc23eeb955f3e993fe",
        "name": "Aurum",
        "symbol": "AU",
        "deployer": "0x0ca655c2e0b1da32e26be63fd95a3fd09f8c5ccf",
        "block": 98656532,
        "ts": "2026-10-26T19:24:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2d427692e928fa156ec22acfabafa0447c5805b7",
        "name": "Galaxy Digital Inc. • Robinhood Token",
        "symbol": "GLXY",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 98656527,
        "ts": "2026-10-26T19:24:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xea66a5b52c815f1580724f0dd9bd4b25e9da7777",
        "name": "Buildkite",
        "symbol": "BLDKITE",
        "deployer": "0x5ac9b0e10acdc0437a7f5fb72d75c73fa8fea805",
        "block": 98656310,
        "ts": "2026-10-26T19:24:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa2d69bb3f8b8301d60da74fa91980737cdd0941c",
        "name": "Giga Volatile AMM - USDG/fBOMB on Robinhood💥",
        "symbol": "GIGA-vAMM-USDG/fBOMB on Robinhood💥",
        "deployer": "0xf0897d5a5d4b959d189a791a574aae5a09e1af0d",
        "block": 98656305,
        "ts": "2026-10-26T19:24:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x80055d802879c88747a25c7bc96b0f0d0a36ea44",
        "name": "Minehood",
        "symbol": "MINEHOOD",
        "deployer": "0xbafe9380ef751d1d13bc01ba59260b696e593c09",
        "block": 98656280,
        "ts": "2026-10-26T19:24:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4ee2d32388caca8b8912f8ccf87cd54b5a0f69a6",
        "name": "Buildkite",
        "symbol": "BLDKITE",
        "deployer": "0x31938e0a7d80bef53d1884ccd42c58fc2c7183e8",
        "block": 98656233,
        "ts": "2026-10-26T19:24:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd5134a2f92fcfd6fdf58fa51576c6fc8c8442d6e",
        "name": "Hawtest",
        "symbol": "Hawtest",
        "deployer": "0xcb57bceb9bd080c153225acd028b906887d20e3f",
        "block": 98656134,
        "ts": "2026-10-26T19:24:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x29317a6e78eda1a371b7b3db3e650df36c6be6ea",
        "name": "Kermit",
        "symbol": "KERMIT",
        "deployer": "0x4e2bd87ec828601cedaee948d61f64c0a2673b84",
        "block": 98655989,
        "ts": "2026-10-26T19:24:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf43508ea8c082e0ec55c4cc65bdc7bfa781425e0",
        "name": "Liquid Fart Inu",
        "symbol": "SHART",
        "deployer": "0x22cafc94f1c50bd44c7fc2776b470654677fe7da",
        "block": 98655870,
        "ts": "2026-10-26T19:23:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x462803f3e323a4eda118c80265361c75f2e97777",
        "name": "The Cortical Dog",
        "symbol": "CL1",
        "deployer": "0xb66a0d760090a9389b77a9b2726f797ab718e21b",
        "block": 98655814,
        "ts": "2026-10-26T19:23:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x602ec2efb8acc5033e6a84a0e8b0b62317153b2f",
        "name": "Minehood",
        "symbol": "MINEHOOD",
        "deployer": "0xbd581c040ba1bddddc688dadd3aeac6a0c188f4b",
        "block": 98655692,
        "ts": "2026-10-26T19:23:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x02751d84b43a69e42ef8d04f86b7a67f677d00c7",
        "name": "Hulk Hogan",
        "symbol": "Hulk",
        "deployer": "0xeb4bf825ce1f121ba0c61b1640bb0af390974211",
        "block": 98655606,
        "ts": "2026-10-26T19:23:21.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xec5a56c01267cdf307affdaf2b23b8aed951e1b3",
        "name": "Hosico Cat",
        "symbol": "HOSICO",
        "deployer": "0x43375ce21e2c538a13bd3b46dd5c6001ca7c9b7c",
        "block": 98655529,
        "ts": "2026-10-26T19:23:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8f5542fa30fb442d6da4c52e657a1097a79bc782",
        "name": "Orvex V4 Positions NFT",
        "symbol": "ORVEX-V4",
        "deployer": "0xad4fcb7645caaf023993353bb6782dfd14ab01b7",
        "block": 98655522,
        "ts": "2026-10-26T19:23:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x447b3ad134fdddb2c6245e3245121dbc540d7777",
        "name": "Getofflinexyz",
        "symbol": "OFFLINE",
        "deployer": "0xa72d384419e08b0eeb43d96c73ba62b627de39a7",
        "block": 98655452,
        "ts": "2026-10-26T19:23:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd5e055f8191b5d8d82c6a67559dcaa6bf10f5c1f",
        "name": "MoonCoin",
        "symbol": "MoonCoin",
        "deployer": "0xd571c296eb23cda429d8f7f60a2b7dc70fe9080c",
        "block": 98655420,
        "ts": "2026-10-26T19:23:02.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x39342f88ff6606f866d7ac4e0d5dff7baad77777",
        "name": "PPT",
        "symbol": "PPT",
        "deployer": "0xbe969c5bc42f1e30814fbde46538451791e40187",
        "block": 98655411,
        "ts": "2026-10-26T19:23:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xebfab524e8a7c08ef5a08f97977f25601413baa3",
        "name": "PPT",
        "symbol": "PPT",
        "deployer": "0xde388997de1539d89a1a8d732b9bffa198951000",
        "block": 98655336,
        "ts": "2026-10-26T19:22:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd35e9ca72f64c7f93be30fad67524323396b36d7",
        "name": "Fee Beneficiary",
        "symbol": "FEEB",
        "deployer": "0xde388997de1539d89a1a8d732b9bffa198951000",
        "block": 98655336,
        "ts": "2026-10-26T19:22:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4d655c8f2db92970b93bdad76d78e6d93c4b1e18",
        "name": "Hullk Hogan",
        "symbol": "HULLK",
        "deployer": "0x173abad5f1fdb6334e40774667be6fc9a8447209",
        "block": 98655053,
        "ts": "2026-10-26T19:22:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x564805f0be81f41792b29362fd1bb141c651bbff",
        "name": "a letter to alon",
        "symbol": "letter",
        "deployer": "0x8e4ebecc6f1fc3d3328f1d156a98a46e5e5435ce",
        "block": 98654786,
        "ts": "2026-10-26T19:21:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcfe00932ba057dd7f184371f93f564f074891512",
        "name": "Minehood",
        "symbol": "MINEHOOD",
        "deployer": "0x7834726200908b5a548c26e1978d10b820f314ee",
        "block": 98654671,
        "ts": "2026-10-26T19:21:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7491fe0bab6e854bf78cae1d46ba9d3d760ee969",
        "name": "Plurenne",
        "symbol": "PLURENNE",
        "deployer": "0xa101910d1ad6bf55baccb27d8bfde5a06e422bf1",
        "block": 98654580,
        "ts": "2026-10-26T19:21:34.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x1900fe2c2f06775d392a94103ed791075a227777",
        "name": "Noctara",
        "symbol": "NOCTARA",
        "deployer": "0x22be0787ea7621328214b466d07bf3d2f5cda2b2",
        "block": 98654500,
        "ts": "2026-10-26T19:21:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x679bcd44aedb5862d6718bbd3af387e8ab587777",
        "name": "A Letter To Alon",
        "symbol": "LETTER",
        "deployer": "0x5ac9b0e10acdc0437a7f5fb72d75c73fa8fea805",
        "block": 98654425,
        "ts": "2026-10-26T19:21:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbbd6376b861d4910e24dcfba980623dcd93a090a",
        "name": "Noctara",
        "symbol": "NOCTARA",
        "deployer": "0x6e919111f4d1b5a3def9bd44505a12cebc62613e",
        "block": 98654406,
        "ts": "2026-10-26T19:21:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc8a4da681508d5f89044bc050443726f089d14c5",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x33eb675c4069bda2ee03275eb6592cfa08b38c7d",
        "block": 98654348,
        "ts": "2026-10-26T19:21:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x918bd15da6b1502678b33008dc2fc4b9de5afdce",
        "name": "Aeon",
        "symbol": "AEONCORE",
        "deployer": "0x4337216e7d0687bfccf868058e10c9685ba116bf",
        "block": 98654334,
        "ts": "2026-10-26T19:21:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0d64cc71d2463d5bdf3901f5f3357af8d70a1c2f",
        "name": "Inkbit Pets",
        "symbol": "IPETS",
        "deployer": "0x5a49a3c79b49a00a962ad1affaa11764cb293ad2",
        "block": 98654329,
        "ts": "2026-10-26T19:21:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xff6e9631b1c4930013845e17ccda2ab32b157777",
        "name": "a letter to alon",
        "symbol": "letter",
        "deployer": "0x4854f368755ce58ba0167e91ad59db415d637ae4",
        "block": 98654293,
        "ts": "2026-10-26T19:21:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x651625289a15d929737c29bfea2db5a8cd20ccd0",
        "name": "Assay Labs",
        "symbol": "ASSAY",
        "deployer": "0xea209a4a5de9a8449a666c5f9fa43be7181600a9",
        "block": 98654210,
        "ts": "2026-10-26T19:20:57.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
