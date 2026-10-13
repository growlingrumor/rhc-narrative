/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-13T18:08:58.000Z",
    "opened_at": "2026-10-13T17:08:58.000Z",
    "window_hours": 1,
    "head_block": 87714417,
    "start_block": 87678844,
    "blocks_scanned": 35573,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 570,
    "unnamed_contracts": 1,
    "via_factory": 534,
    "no_receipt": 0,
    "candidates": 571,
    "mint_events": 35094,
    "deployers": 374,
    "roots": 770,
    "cleared_multiple": 202,
    "failed_gates": 193,
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
      "cfo",
      "dog",
      "nft",
      "positions",
      "robinhood",
      "uniswap-uni",
      "usdg",
      "wizardcat"
    ],
    "top": {
      "root": "robinhood",
      "launches": 41,
      "deployers": 11,
      "baseline_share": 0.0004,
      "multiple": 179.8,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "robinhood",
        "launches": 41,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 179.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "dog",
        "launches": 14,
        "deployers": 13,
        "baseline_share": 0.0004,
        "multiple": 61.4,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nft",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 43.9,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 43.9,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "wizardcat",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 43.9,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "cfo",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 26.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 26.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 23,
        "deployers": 23,
        "baseline_share": 0.0004,
        "multiple": 100.9,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 83%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 19,
        "deployers": 19,
        "baseline_share": 0.0004,
        "multiple": 83.3,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 83%, merged to uniswap-uni"
      },
      {
        "root": "long",
        "launches": 7,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 30.7,
        "state": "THIN",
        "reason": "long: 3 deployers < 6 required"
      },
      {
        "root": "volatile",
        "launches": 6,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 26.3,
        "state": "THIN",
        "reason": "volatile: 3 deployers < 6 required"
      },
      {
        "root": "arcus",
        "launches": 5,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 21.9,
        "state": "THIN",
        "reason": "arcus: 2 deployers < 6 required"
      },
      {
        "root": "cat",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 21.9,
        "state": "THIN",
        "reason": "cat: 5 deployers < 6 required"
      },
      {
        "root": "hood",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 21.9,
        "state": "THIN",
        "reason": "hood: 5 deployers < 6 required"
      },
      {
        "root": "ramses",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.9,
        "state": "THIN",
        "reason": "ramses: 3 deployers < 6 required"
      },
      {
        "root": "salmon",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 21.9,
        "state": "THIN",
        "reason": "salmon: 5 deployers < 6 required"
      },
      {
        "root": "tree",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 21.9,
        "state": "THIN",
        "reason": "tree: 5 deployers < 6 required"
      },
      {
        "root": "weth",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.9,
        "state": "THIN",
        "reason": "weth: 3 deployers < 6 required"
      },
      {
        "root": "corporation",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 17.5,
        "state": "THIN",
        "reason": "corporation: 4 launches < 5 required"
      },
      {
        "root": "hester",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17.5,
        "state": "THIN",
        "reason": "hester: 4 launches < 5 required"
      },
      {
        "root": "inc",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 17.5,
        "state": "THIN",
        "reason": "inc: 4 launches < 5 required"
      },
      {
        "root": "nvda",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 17.5,
        "state": "THIN",
        "reason": "nvda: 4 launches < 5 required"
      },
      {
        "root": "position",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17.5,
        "state": "THIN",
        "reason": "position: 4 launches < 5 required"
      },
      {
        "root": "printed",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17.5,
        "state": "THIN",
        "reason": "printed: 4 launches < 5 required"
      },
      {
        "root": "semiconductor",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 17.5,
        "state": "THIN",
        "reason": "semiconductor: 4 launches < 5 required"
      },
      {
        "root": "void",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 17.5,
        "state": "THIN",
        "reason": "void: 4 launches < 5 required"
      },
      {
        "root": "vrax",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17.5,
        "state": "THIN",
        "reason": "vrax: 4 launches < 5 required"
      },
      {
        "root": "yield",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17.5,
        "state": "THIN",
        "reason": "yield: 4 launches < 5 required"
      },
      {
        "root": "agent",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 13.2,
        "state": "THIN",
        "reason": "agent: 3 launches < 5 required"
      },
      {
        "root": "alandale",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 13.2,
        "state": "THIN",
        "reason": "alandale: 3 launches < 5 required"
      },
      {
        "root": "amm",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 13.2,
        "state": "THIN",
        "reason": "amm: 3 launches < 5 required"
      },
      {
        "root": "atum",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 13.2,
        "state": "THIN",
        "reason": "atum: 3 launches < 5 required"
      },
      {
        "root": "babylonbee",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 13.2,
        "state": "THIN",
        "reason": "babylonbee: 3 launches < 5 required"
      },
      {
        "root": "bot",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 13.2,
        "state": "THIN",
        "reason": "bot: 3 launches < 5 required"
      },
      {
        "root": "bucket",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 13.2,
        "state": "THIN",
        "reason": "bucket: 3 launches < 5 required"
      },
      {
        "root": "button",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 13.2,
        "state": "THIN",
        "reason": "button: 3 launches < 5 required"
      },
      {
        "root": "buy",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 13.2,
        "state": "THIN",
        "reason": "buy: 3 launches < 5 required"
      },
      {
        "root": "commander",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 13.2,
        "state": "THIN",
        "reason": "commander: 3 launches < 5 required"
      },
      {
        "root": "etf",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 13.2,
        "state": "THIN",
        "reason": "etf: 3 launches < 5 required"
      },
      {
        "root": "face",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 13.2,
        "state": "THIN",
        "reason": "face: 3 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x53f3e64f1fbf119401176e2067ea946b07d82efc",
        "name": "NFT Mechanic",
        "symbol": "NFTM",
        "deployer": "0xcac8124895281555cbf111376e6c496435b00982",
        "block": 87714386,
        "ts": "2026-10-13T18:08:55.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x21999d90c2cab3b41d9c8c6e38d7646f617401db",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x0063d36ff92f1550dd04ac1786f07e02a9cd3eea",
        "block": 87714301,
        "ts": "2026-10-13T18:08:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf60c9324f1248e501400799cce261867b913d521",
        "name": "The Odyssean Dog",
        "symbol": "LouLou",
        "deployer": "0xa97c53bab55bf2d0dbbecaf25ce9638eb599e1a9",
        "block": 87714285,
        "ts": "2026-10-13T18:08:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9398a8a22e4c76d918d2a9313dfa2a138ff87777",
        "name": "Trump Media & Technology Group C",
        "symbol": "DJT",
        "deployer": "0x49f5ddfb21b9452e91a4b9718dec5a4e65baede4",
        "block": 87714016,
        "ts": "2026-10-13T18:08:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x335481b66c78608fa5cf12da560e56daea434301",
        "name": "The Odyssean Dog",
        "symbol": "LouLou",
        "deployer": "0x4f833042a98089c81fb6ce6817d7a40463041b69",
        "block": 87713945,
        "ts": "2026-10-13T18:08:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcd246fcea303a10dc5e2a923a6ab954f24339615",
        "name": "Robinhood inu",
        "symbol": "Ri",
        "deployer": "0xc8abf679e14add9a6d6b6881cbdb4bca748cd2d0",
        "block": 87713851,
        "ts": "2026-10-13T18:08:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe25c20753aa9d92c347c866f0c4ee998ae40649a",
        "name": "HIRES FUN",
        "symbol": "HIRENFUN",
        "deployer": "0xa6f96d6f615231e8c9694579fb8d6bc81201a214",
        "block": 87713724,
        "ts": "2026-10-13T18:07:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4c2a2a61532f42c8173b897b780b2a66ab30e419",
        "name": "Foil",
        "symbol": "FOIL",
        "deployer": "0x601f93b84e6cbd06939107f28f2fd367a562df39",
        "block": 87713614,
        "ts": "2026-10-13T18:07:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x449200263b9b00e5a4d28df2d71b6421921608e2",
        "name": "SI.gov",
        "symbol": "SI.GOV",
        "deployer": "0x45cde31e37365c5cd378135e93bea0d0f89cb9d5",
        "block": 87713492,
        "ts": "2026-10-13T18:07:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9e325737ac6b93128f16738b8699d3cd466e904e",
        "name": "Salute face 13973",
        "symbol": "SALUTEFACE",
        "deployer": "0x06cb3a6841c92525e7a1998328e7c9d37e98d937",
        "block": 87713491,
        "ts": "2026-10-13T18:07:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd4a5a0e5c11a75af476a28be14497ff26dac0f50",
        "name": "No Tax Dog",
        "symbol": "NOTX",
        "deployer": "0x0063d36ff92f1550dd04ac1786f07e02a9cd3eea",
        "block": 87713413,
        "ts": "2026-10-13T18:07:16.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x78bd31a312a45f76beb8df1e2772668a8633aa0c",
        "name": "THE NULL KING",
        "symbol": "NULK",
        "deployer": "0xedda4aea43791a145a3e33a2d36b90e0de1a7d68",
        "block": 87713105,
        "ts": "2026-10-13T18:06:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe612292dfb26c8830bc3e149c7ae031b6dda8bc5",
        "name": "Eternal Beings Genesis",
        "symbol": "EBG",
        "deployer": "0xdca6397695fb43dd82aea0af29e65383afa1ad57",
        "block": 87713073,
        "ts": "2026-10-13T18:06:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1f89968103ae6b271c06ab98153d0a29df5583ef",
        "name": "Robbin Hood",
        "symbol": "ROBBIN",
        "deployer": "0x772b21189c59911abc4fd57f1ee5f88e09f96b74",
        "block": 87713002,
        "ts": "2026-10-13T18:06:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd902640d4483e42bb4361ac818ce9b390b22cb7c",
        "name": "Fairer Screener",
        "symbol": "FAIRR",
        "deployer": "0xb2211134c7b9d0bd97ec1c25d3876032d2543663",
        "block": 87712819,
        "ts": "2026-10-13T18:06:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x891a06b896470588c987ce287d8c61528ca52629",
        "name": "Starciest",
        "symbol": "STAR",
        "deployer": "0xe5bb3a7780dff955f220e14ce80f074de8a189e4",
        "block": 87712782,
        "ts": "2026-10-13T18:06:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xba290907220c1b2d249d3abc28ff4c136b25fd3b",
        "name": "Squall Line",
        "symbol": "SQUALL",
        "deployer": "0xc5554179770dc2baef5b4c0fb0b5e1d06482e399",
        "block": 87712739,
        "ts": "2026-10-13T18:06:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xac3feb7580afcf1e33baf443836dd91cc65936f7",
        "name": "Wrapped Nebius Group • Robinhood Token",
        "symbol": "wNBIS",
        "deployer": "0x772890c605342bcd69fc712ac242674156195028",
        "block": 87712712,
        "ts": "2026-10-13T18:06:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd0a8bac0ff36b56bfc4f3cc10eb8a5e5bca7a655",
        "name": "matt",
        "symbol": "MATT",
        "deployer": "0x76c4eee755ee20c973db55c522f1e75ad3132dff",
        "block": 87712677,
        "ts": "2026-10-13T18:06:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x40240deff3881d3c584bfa84f5e067e008d55820",
        "name": "HOOD CATS",
        "symbol": "HCATS",
        "deployer": "0xa1cc25839f484a94f0a18177f8750844c583f90b",
        "block": 87712600,
        "ts": "2026-10-13T18:05:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4a86b9d6129a694f96987bf837fc34974394ab1d",
        "name": "N01",
        "symbol": "N01",
        "deployer": "0xc6804e92ca8d57d684ceb9c4d19d5de096a45bff",
        "block": 87712585,
        "ts": "2026-10-13T18:05:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0caf647428d6613c12d6ad9ab8fbc5c41f15741e",
        "name": "Yield Fields",
        "symbol": "YIELD",
        "deployer": "0xb4f7bbbae48945deca75a7faddef2a0b9527a827",
        "block": 87712465,
        "ts": "2026-10-13T18:05:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3cb441bb906df9691c3cb09e2169e4ae9a731e18",
        "name": "Awkward Monkey",
        "symbol": "MONKEY",
        "deployer": "0xf7093908040391c187f7644c4e42f7fe6f76cc88",
        "block": 87712281,
        "ts": "2026-10-13T18:05:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf4d035b51b9511a64e0c927fa484dded73e3459e",
        "name": "Ample Robinhood USDG",
        "symbol": "aRHUSDG",
        "deployer": "0xbfa13fb39fcf3a0397dde6a616b0b1350f02673f",
        "block": 87712224,
        "ts": "2026-10-13T18:05:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x492641f648a4986844848e0befe66d14817bce34",
        "name": "ChainLink Token",
        "symbol": "LINK",
        "deployer": "0x30475b9d46d165e85e2013f40d26c76c3f4ef32a",
        "block": 87712190,
        "ts": "2026-10-13T18:05:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcc68b57819e76aeaf4b71e18ee5d4bae58714de2",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xbcc8ed2efc8f28e348765b1af9deefeaed497c5a",
        "block": 87712099,
        "ts": "2026-10-13T18:05:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1275e7e36c29caacf93ca9c2888abcfae2edc3a6",
        "name": "Roos Market",
        "symbol": "Roos",
        "deployer": "0xd91afe6c11001e5f98f3784eea4dd33bbb820247",
        "block": 87712009,
        "ts": "2026-10-13T18:04:55.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x5d321de36f0bf98d92b291280514f3878582b7b6",
        "name": "veNFT",
        "symbol": "veNFT",
        "deployer": "0xdbc9141f5dcbffe5aaad73ddb7f6e03a7de11e99",
        "block": 87711829,
        "ts": "2026-10-13T18:04:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x873f08683a14eae8949bd155bea682b858d604ab",
        "name": "USO NVDA Pair",
        "symbol": "USONVDA",
        "deployer": "0x996dcf6180d5bdb9437f04a49c9658ad3d61ad77",
        "block": 87711792,
        "ts": "2026-10-13T18:04:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa4870f9d496b75a263712118d25fdb7014014b8b",
        "name": "Ducat Passes",
        "symbol": "PASS",
        "deployer": "0x16d378f6927e43cca49b1d9af39102c02835faf0",
        "block": 87711640,
        "ts": "2026-10-13T18:04:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x251c4e7314cc8a9311eaf24abd3b26a8afd35cc3",
        "name": "Vault Street",
        "symbol": "BANK",
        "deployer": "0x4d3f20436bc295c4afd15b6c259bcbf4bd5f21a5",
        "block": 87711618,
        "ts": "2026-10-13T18:04:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x64f4362329f21f13bb1f6d75fd69d2c351e50c2d",
        "name": "CashSettled P",
        "symbol": "csP",
        "deployer": "0xe91b564eb8dff305ff8efa332f84c487b9da5171",
        "block": 87711615,
        "ts": "2026-10-13T18:04:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xed73b892d804665df8abd7ff362879ab6e355d00",
        "name": "CashSettled N",
        "symbol": "csN",
        "deployer": "0xe91b564eb8dff305ff8efa332f84c487b9da5171",
        "block": 87711615,
        "ts": "2026-10-13T18:04:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1fad04a3f68ceb7b7b2df33a48c815a2ad2e7c02",
        "name": "Casey",
        "symbol": "Casey",
        "deployer": "0x61e697835cb1bc6f0d3e7fccb83e6b819c066f1e",
        "block": 87711528,
        "ts": "2026-10-13T18:04:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9521234a2f925b2a697f946c8ce371c8832b636e",
        "name": "Space Arz",
        "symbol": "SPCARZ",
        "deployer": "0x4337032d9c9291f05bebded166d947f22b25fa00",
        "block": 87711484,
        "ts": "2026-10-13T18:04:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9742651a585e36eb141612a4d0daea24ec791e18",
        "name": "Casey",
        "symbol": "CASEY",
        "deployer": "0x7d22d3dd32f00848a54ebe00c00a9082a18d4e66",
        "block": 87711148,
        "ts": "2026-10-13T18:03:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x87c84e5e77054456b355284fe245a70af3987102",
        "name": "Unsent",
        "symbol": "UNSNT",
        "deployer": "0xf7b8cc0cb25e5e0899610da466bf06864b4557b6",
        "block": 87711061,
        "ts": "2026-10-13T18:03:20.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x438e95f8b2b254662bb6504674e9bde15550eeb3",
        "name": "SI.gov",
        "symbol": "SI.GOV",
        "deployer": "0xe243d2de1988ff91937bd8e0d670420a2c821377",
        "block": 87711019,
        "ts": "2026-10-13T18:03:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x96f64c4afc9f4b408922f2c7f07ea527162b4aca",
        "name": "POOPONS",
        "symbol": "POOPONS",
        "deployer": "0xe50450bed9cb445f774f38cb9884e8a7c6b7ce1b",
        "block": 87710975,
        "ts": "2026-10-13T18:03:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe38a007e42d7aab09b7ad5fe083293c2cc3de45b",
        "name": "Uniswap v4 Positions NFT",
        "symbol": "UNI-V4-POSM",
        "deployer": "0xe50450bed9cb445f774f38cb9884e8a7c6b7ce1b",
        "block": 87710975,
        "ts": "2026-10-13T18:03:11.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
