/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-13T16:32:08.000Z",
    "opened_at": "2026-11-13T15:32:08.000Z",
    "window_hours": 1,
    "head_block": 113496898,
    "start_block": 113461618,
    "blocks_scanned": 35280,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 517,
    "unnamed_contracts": 18,
    "via_factory": 510,
    "no_receipt": 0,
    "candidates": 535,
    "mint_events": 25309,
    "deployers": 282,
    "roots": 639,
    "cleared_multiple": 106,
    "failed_gates": 105,
    "baseline_ready": true,
    "baseline_days": 14,
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
      "trump"
    ],
    "top": {
      "root": "trump",
      "launches": 10,
      "deployers": 10,
      "baseline_share": 0.0032,
      "multiple": 6,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "trump",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0032,
        "multiple": 6,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "robinhood",
        "launches": 38,
        "deployers": 11,
        "baseline_share": 0.0513,
        "multiple": 1.4,
        "state": "BELOW",
        "reason": "robinhood: 1.4x over baseline < 6.0x required"
      },
      {
        "root": "usdg",
        "launches": 13,
        "deployers": 13,
        "baseline_share": 0.0203,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "usdg: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "uniswap",
        "launches": 13,
        "deployers": 12,
        "baseline_share": 0.0509,
        "multiple": 0.5,
        "state": "BELOW",
        "reason": "uniswap: 0.5x over baseline < 6.0x required"
      },
      {
        "root": "counterparty",
        "launches": 11,
        "deployers": 1,
        "baseline_share": 0.0055,
        "multiple": 3.9,
        "state": "BELOW",
        "reason": "counterparty: 3.9x over baseline < 6.0x required"
      },
      {
        "root": "predictor",
        "launches": 11,
        "deployers": 1,
        "baseline_share": 0.0055,
        "multiple": 3.9,
        "state": "BELOW",
        "reason": "predictor: 3.9x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 11,
        "deployers": 10,
        "baseline_share": 0.0424,
        "multiple": 0.5,
        "state": "BELOW",
        "reason": "uni: 0.5x over baseline < 6.0x required"
      },
      {
        "root": "prd",
        "launches": 10,
        "deployers": 1,
        "baseline_share": 0.0048,
        "multiple": 4,
        "state": "BELOW",
        "reason": "prd: 4.0x over baseline < 6.0x required"
      },
      {
        "root": "ctr",
        "launches": 10,
        "deployers": 1,
        "baseline_share": 0.0049,
        "multiple": 3.9,
        "state": "BELOW",
        "reason": "ctr: 3.9x over baseline < 6.0x required"
      },
      {
        "root": "nft",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0201,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "nft: 0.9x over baseline < 6.0x required"
      },
      {
        "root": "agent",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0068,
        "multiple": 2.3,
        "state": "BELOW",
        "reason": "agent: 2.3x over baseline < 6.0x required"
      },
      {
        "root": "ai",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0081,
        "multiple": 1.9,
        "state": "BELOW",
        "reason": "ai: 1.9x over baseline < 6.0x required"
      },
      {
        "root": "hood",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0108,
        "multiple": 1.3,
        "state": "BELOW",
        "reason": "hood: 1.3x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0167,
        "multiple": 0.8,
        "state": "BELOW",
        "reason": "positions: 0.8x over baseline < 6.0x required"
      },
      {
        "root": "club",
        "launches": 6,
        "deployers": 4,
        "baseline_share": 0.0014,
        "multiple": 8.3,
        "state": "THIN",
        "reason": "club: 4 deployers < 6 required"
      },
      {
        "root": "trust",
        "launches": 6,
        "deployers": 4,
        "baseline_share": 0.0036,
        "multiple": 3.2,
        "state": "BELOW",
        "reason": "trust: 3.2x over baseline < 6.0x required"
      },
      {
        "root": "ophiris",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 24.2,
        "state": "THIN",
        "reason": "ophiris: 5 deployers < 6 required"
      },
      {
        "root": "speed",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 24.2,
        "state": "THIN",
        "reason": "speed: 5 deployers < 6 required"
      },
      {
        "root": "spdr",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0018,
        "multiple": 5.4,
        "state": "BELOW",
        "reason": "spdr: 5.4x over baseline < 6.0x required"
      },
      {
        "root": "si",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0019,
        "multiple": 5.1,
        "state": "BELOW",
        "reason": "si: 5.1x over baseline < 6.0x required"
      },
      {
        "root": "aero",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0056,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "aero: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "inc",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0057,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "inc: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "amd",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 19.3,
        "state": "THIN",
        "reason": "amd: 4 launches < 5 required"
      },
      {
        "root": "code",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 19.3,
        "state": "THIN",
        "reason": "code: 4 launches < 5 required"
      },
      {
        "root": "goo",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 19.3,
        "state": "THIN",
        "reason": "goo: 4 launches < 5 required"
      },
      {
        "root": "jacket",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 19.3,
        "state": "THIN",
        "reason": "jacket: 4 launches < 5 required"
      },
      {
        "root": "leather",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 19.3,
        "state": "THIN",
        "reason": "leather: 4 launches < 5 required"
      },
      {
        "root": "lil",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 19.3,
        "state": "THIN",
        "reason": "lil: 4 launches < 5 required"
      },
      {
        "root": "milo",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 19.3,
        "state": "THIN",
        "reason": "milo: 4 launches < 5 required"
      },
      {
        "root": "tidebound",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 19.3,
        "state": "THIN",
        "reason": "tidebound: 4 launches < 5 required"
      },
      {
        "root": "veltrix",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 19.3,
        "state": "THIN",
        "reason": "veltrix: 4 launches < 5 required"
      },
      {
        "root": "bloom",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.001,
        "multiple": 7.7,
        "state": "THIN",
        "reason": "bloom: 4 launches < 5 required"
      },
      {
        "root": "nvda",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0024,
        "multiple": 3.2,
        "state": "BELOW",
        "reason": "nvda: 3.2x over baseline < 6.0x required"
      },
      {
        "root": "variable",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0024,
        "multiple": 3.2,
        "state": "BELOW",
        "reason": "variable: 3.2x over baseline < 6.0x required"
      },
      {
        "root": "brownfi",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0025,
        "multiple": 3.1,
        "state": "BELOW",
        "reason": "brownfi: 3.1x over baseline < 6.0x required"
      },
      {
        "root": "bf",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0027,
        "multiple": 2.9,
        "state": "BELOW",
        "reason": "bf: 2.9x over baseline < 6.0x required"
      },
      {
        "root": "bucket",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0036,
        "multiple": 2.1,
        "state": "BELOW",
        "reason": "bucket: 2.1x over baseline < 6.0x required"
      },
      {
        "root": "rh",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0036,
        "multiple": 2.1,
        "state": "BELOW",
        "reason": "rh: 2.1x over baseline < 6.0x required"
      },
      {
        "root": "layerbank",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0053,
        "multiple": 1.5,
        "state": "BELOW",
        "reason": "layerbank: 1.5x over baseline < 6.0x required"
      },
      {
        "root": "amm",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0062,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "amm: 1.2x over baseline < 6.0x required"
      }
    ],
    "recent": [
      {
        "address": "0x2edc2de6fc0f14c32ca126488d4783a7cdaf1e18",
        "name": "chuna",
        "symbol": "CHUNA",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 113496870,
        "ts": "2026-11-13T16:32:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfd7cc7e3b75fdc21140830fb000c59cd2e66d6ea",
        "name": "Pangea Cat",
        "symbol": "PCAT",
        "deployer": "0x4e2bd87ec828601cedaee948d61f64c0a2673b84",
        "block": 113496817,
        "ts": "2026-11-13T16:32:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa0cfec7be0faa49c985251660f271e407e027777",
        "name": "SyGra",
        "symbol": "SYGRA",
        "deployer": "0xa72d384419e08b0eeb43d96c73ba62b627de39a7",
        "block": 113496753,
        "ts": "2026-11-13T16:31:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x719a69d51a9c165c18607ae0341d6e4b263396a2",
        "name": "The Lil Giraffies Club",
        "symbol": "TLGC",
        "deployer": "0x08a8aa8e9e6f6ee85c2645d6756d479047d3b09b",
        "block": 113496747,
        "ts": "2026-11-13T16:31:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x75ef46bd2f734644074adb22688b95efb59973ab",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x168b921aa662cac2a0b76a7d1fc95ccaa85210eb",
        "block": 113496701,
        "ts": "2026-11-13T16:31:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb65662111bebaa479817a9f9aae0334ba47f5ad6",
        "name": "SyGra",
        "symbol": "SYGRA",
        "deployer": "0xa21c136b5c2c87e13c1942ecc8295c05932871d6",
        "block": 113496675,
        "ts": "2026-11-13T16:31:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x25e5ce47daa1d82ef2b3383f20d8b1262fe52eaa",
        "name": "nicejar",
        "symbol": "NICEJAR",
        "deployer": "0x127eb81c3ea98e10fca4a10a908ae311776c6e7b",
        "block": 113496667,
        "ts": "2026-11-13T16:31:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x099b811e5353fc120f50eb669a8192ccee177777",
        "name": "GET A JOB",
        "symbol": "GETAJOB",
        "deployer": "0xbe969c5bc42f1e30814fbde46538451791e40187",
        "block": 113496538,
        "ts": "2026-11-13T16:31:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9b23573b156b52565012f5ce02cdf60afbaa70be",
        "name": "Penguin Solutions • Robinhood Token",
        "symbol": "PENG",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 113496525,
        "ts": "2026-11-13T16:31:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x49b5a9fcd24ca5083fa05f9136e7d04564647621",
        "name": "Melaps",
        "symbol": "MELAPS",
        "deployer": "0xf7cea09397478330e650016d228ebb2f71a28985",
        "block": 113496471,
        "ts": "2026-11-13T16:31:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2bfe069f81b388996fa8839f448af27889ffb838",
        "name": "Hubrix",
        "symbol": "HUB",
        "deployer": "0x89cee9e823b5baf388b52c6e9305390a0e8a2444",
        "block": 113496298,
        "ts": "2026-11-13T16:31:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xca9c78dd337a67f6e0077f65f5e9218719d30edf",
        "name": "NetNet",
        "symbol": "NET",
        "deployer": "0x724344c74d3d03fef5e8a3cd02e49f2163a19c37",
        "block": 113496163,
        "ts": "2026-11-13T16:30:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x164e1c87a56f4971df2b6371cac43324382a33e6",
        "name": "Robinhood Phunksape",
        "symbol": "Robinhoodphunksape",
        "deployer": "0xc18a0029637f1803dc347761cd10dd3b5c7a7ef5",
        "block": 113496098,
        "ts": "2026-11-13T16:30:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x43488827e8b3a697d8d10bd87e067a465c82fda9",
        "name": "Wise Sage",
        "symbol": "SAGE",
        "deployer": "0x7d0ee670819225d8718631019e43836a0f91e64b",
        "block": 113496082,
        "ts": "2026-11-13T16:30:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x69ea323a3f23a2e3bf9ba6991406baa02fa90dd1",
        "name": "Robinhood Rocks",
        "symbol": "RobinhoodRocks",
        "deployer": "0x08a8aa8e9e6f6ee85c2645d6756d479047d3b09b",
        "block": 113496021,
        "ts": "2026-11-13T16:30:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x24460b8625c9acce9acd0d2e1451fbd4d99d1111",
        "name": "A Meme Dick",
        "symbol": "AMD",
        "deployer": "0x41a8e3d2c3e3f015c49a4ffca4e5f5f6e1a71cb2",
        "block": 113495826,
        "ts": "2026-11-13T16:30:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa263d3f4b5318b20e085e28320808c672bd41111",
        "name": "Torchpad Agent",
        "symbol": "TPAGENT",
        "deployer": "0xf7a29fa8d4f88df83b3782d93358d0d36379549d",
        "block": 113495813,
        "ts": "2026-11-13T16:30:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa77d4a97e216a826b9753aa90489a14aa5093900",
        "name": "Wumble",
        "symbol": "WUMBLE",
        "deployer": "0x7ea3bc1e0bba3e7867a9a36175b882309faeaabc",
        "block": 113495692,
        "ts": "2026-11-13T16:30:05.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x82f02f5de1ab2ced29187f6066c00f099629e5d8",
        "name": "DIGI-DOG",
        "symbol": "DIGI-DOG",
        "deployer": "0x921760ec6e50fa43eb4adcdcc62ac0b95cb1053f",
        "block": 113495683,
        "ts": "2026-11-13T16:30:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe6b771192807d87720be6d85fd32bc9a05717777",
        "name": "Vibecool",
        "symbol": "VIBE",
        "deployer": "0x22be0787ea7621328214b466d07bf3d2f5cda2b2",
        "block": 113495676,
        "ts": "2026-11-13T16:30:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x39f5f9abf4c79232c36bb39046e69c5d1ef0c5a4",
        "name": "Cubicle",
        "symbol": "CUBE",
        "deployer": "0x7b7e96083743623df9e1a08ba5515d481d7c5578",
        "block": 113495625,
        "ts": "2026-11-13T16:29:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4c9ce6983953409a467c7694f0fbc1bf83c9af54",
        "name": "vibecool",
        "symbol": "VIBE",
        "deployer": "0x358a06ffb8228291a2c2cc94215441cbe5b631b9",
        "block": 113495608,
        "ts": "2026-11-13T16:29:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa5a859b8285aec6874e58c82aa7945ac90af44f6",
        "name": "Gooner Processing Unit",
        "symbol": "GPU",
        "deployer": "0x4337003fcd2f56de3977ccb806383e9161628d0e",
        "block": 113495567,
        "ts": "2026-11-13T16:29:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf6a0df7c7371f14dea7fd8a49c214d1de8bc7777",
        "name": "Ian Buck",
        "symbol": "BUCK",
        "deployer": "0x5ac9b0e10acdc0437a7f5fb72d75c73fa8fea805",
        "block": 113495544,
        "ts": "2026-11-13T16:29:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd61f1c33d883c9df1f6181f6d0a82bf4f7799d2a",
        "name": "Crawl Hood",
        "symbol": "Crawlhood",
        "deployer": "0x921760ec6e50fa43eb4adcdcc62ac0b95cb1053f",
        "block": 113495491,
        "ts": "2026-11-13T16:29:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa2aca4e50c0116086271e80fc40abcaf3eab8319",
        "name": "MUSE ONCHAIN",
        "symbol": "MUSE",
        "deployer": "0xded2dbae18ccd01940f7696e2988c40263c32622",
        "block": 113495286,
        "ts": "2026-11-13T16:29:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xede90451e6507e8be3bf0fcfff6378010df84f5e",
        "name": "Predictor-3de5b51a",
        "symbol": "PRD-3de5b51a",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 113495171,
        "ts": "2026-11-13T16:29:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x320999ca3c61f73b6b785e01cfddb0046be24348",
        "name": "Counterparty-3de5b51a",
        "symbol": "CTR-3de5b51a",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 113495171,
        "ts": "2026-11-13T16:29:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc48c9d0bac7b374c8399758610021a4925ec8d09",
        "name": "‮TDSU‬",
        "symbol": "‮TDSU‬",
        "deployer": "0xa34afbe31e316ef8affd06af7592ed1c5dd33333",
        "block": 113495089,
        "ts": "2026-11-13T16:28:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x36eb6fcf62e7e65ae46ec76bcd32f13b7bc97205",
        "name": "Cat Wif Sock",
        "symbol": "CWS",
        "deployer": "0x4337002c5702ce424cb62a56ca038e31e1d4a93d",
        "block": 113495024,
        "ts": "2026-11-13T16:28:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7094a40c0463fb97cc2cc9d17f2c05d182ad33e4",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x3c6a1711d1ed84663f896e8a6a7ab2eb4861984b",
        "block": 113494986,
        "ts": "2026-11-13T16:28:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1211e163472f5da40bab53c9cb53d2c20cc67777",
        "name": "Infera",
        "symbol": "INFERA",
        "deployer": "0xb66a0d760090a9389b77a9b2726f797ab718e21b",
        "block": 113494975,
        "ts": "2026-11-13T16:28:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe7ca9719b88debb68bd219242a927c7efd0dc5bc",
        "name": "Infera",
        "symbol": "INFERA",
        "deployer": "0xa2964e6e87996269df6b1024335348397df61d77",
        "block": 113494901,
        "ts": "2026-11-13T16:28:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfbb37297cf31a471e890dd884d0bdf4998014202",
        "name": "Volatile AMM - WETH/RVH",
        "symbol": "vAMM-WETH/RVH",
        "deployer": "0x21ad783890b8bc8c18733cf51cb2fdf5678171fb",
        "block": 113494700,
        "ts": "2026-11-13T16:28:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbd1c095440faeb771f7a05b2d84ab8b610cd7777",
        "name": "nicejar",
        "symbol": "NICEJAR",
        "deployer": "0xee9647974ef6926adc77a1b8fa538c4c40caaa9e",
        "block": 113494689,
        "ts": "2026-11-13T16:28:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0a7a4dd811f012a1b706e6d0318d65dd72873f04",
        "name": "Solana Inu",
        "symbol": "SI",
        "deployer": "0x562968e94bb623883be255778c2fbf797210f204",
        "block": 113494662,
        "ts": "2026-11-13T16:28:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x05c9ff954be7324b625d91712b34e726ac2fc9ca",
        "name": "Flying Tesla Roadster",
        "symbol": "FTR",
        "deployer": "0x4337003fcd2f56de3977ccb806383e9161628d0e",
        "block": 113494578,
        "ts": "2026-11-13T16:28:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3b8b9dbe0304694f9a67d43192bd070352267777",
        "name": "Nicejar",
        "symbol": "NICEJAR",
        "deployer": "0xa72d384419e08b0eeb43d96c73ba62b627de39a7",
        "block": 113494575,
        "ts": "2026-11-13T16:28:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0d0ae4fea0f31ca71cf2fe7890adab709bcb5ed8",
        "name": "MintABears",
        "symbol": ".",
        "deployer": "0x08a8aa8e9e6f6ee85c2645d6756d479047d3b09b",
        "block": 113494216,
        "ts": "2026-11-13T16:27:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6759204abd8b539d8e3e029f912936e1e22d379f",
        "name": "PLOPZ",
        "symbol": "PLOPZ",
        "deployer": "0x3215ba17b1b0d3f9a1c5d8ab96218e844ffced76",
        "block": 113494099,
        "ts": "2026-11-13T16:27:15.000Z",
        "ts_exact": true,
        "direct": true
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
