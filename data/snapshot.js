/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-25T10:23:29.000Z",
    "opened_at": "2026-11-25T09:23:29.000Z",
    "window_hours": 1,
    "head_block": 122970269,
    "start_block": 122936906,
    "blocks_scanned": 33363,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 299,
    "unnamed_contracts": 0,
    "via_factory": 287,
    "no_receipt": 0,
    "candidates": 299,
    "mint_events": 10096,
    "deployers": 169,
    "roots": 439,
    "cleared_multiple": 277,
    "failed_gates": 277,
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
    "themes": [],
    "top": null,
    "rows": [
      {
        "root": "robinhood",
        "launches": 25,
        "deployers": 7,
        "baseline_share": 0.0513,
        "multiple": 1.6,
        "state": "BELOW",
        "reason": "robinhood: 1.6x over baseline < 6.0x required"
      },
      {
        "root": "uniswap",
        "launches": 13,
        "deployers": 12,
        "baseline_share": 0.0509,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "uniswap: 0.9x over baseline < 6.0x required"
      },
      {
        "root": "game",
        "launches": 11,
        "deployers": 2,
        "baseline_share": 0.0005,
        "multiple": 73.6,
        "state": "THIN",
        "reason": "game: 2 deployers < 6 required"
      },
      {
        "root": "bond",
        "launches": 11,
        "deployers": 2,
        "baseline_share": 0.0008,
        "multiple": 46,
        "state": "THIN",
        "reason": "bond: 2 deployers < 6 required"
      },
      {
        "root": "uni",
        "launches": 11,
        "deployers": 10,
        "baseline_share": 0.0424,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "uni: 0.9x over baseline < 6.0x required"
      },
      {
        "root": "usdg",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0203,
        "multiple": 1.5,
        "state": "BELOW",
        "reason": "usdg: 1.5x over baseline < 6.0x required"
      },
      {
        "root": "nvda",
        "launches": 8,
        "deployers": 2,
        "baseline_share": 0.0024,
        "multiple": 11.1,
        "state": "THIN",
        "reason": "nvda: 2 deployers < 6 required"
      },
      {
        "root": "slotbound",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 41.8,
        "state": "THIN",
        "reason": "slotbound: 5 deployers < 6 required"
      },
      {
        "root": "bucket",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0036,
        "multiple": 4.6,
        "state": "BELOW",
        "reason": "bucket: 4.6x over baseline < 6.0x required"
      },
      {
        "root": "staked",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0069,
        "multiple": 2.4,
        "state": "BELOW",
        "reason": "staked: 2.4x over baseline < 6.0x required"
      },
      {
        "root": "layerbank",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0053,
        "multiple": 2.5,
        "state": "BELOW",
        "reason": "layerbank: 2.5x over baseline < 6.0x required"
      },
      {
        "root": "agent",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0068,
        "multiple": 2,
        "state": "BELOW",
        "reason": "agent: 2.0x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0167,
        "multiple": 0.8,
        "state": "BELOW",
        "reason": "positions: 0.8x over baseline < 6.0x required"
      },
      {
        "root": "nft",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0201,
        "multiple": 0.7,
        "state": "BELOW",
        "reason": "nft: 0.7x over baseline < 6.0x required"
      },
      {
        "root": "apeit",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 25.1,
        "state": "THIN",
        "reason": "apeit: 3 launches < 5 required"
      },
      {
        "root": "google",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 25.1,
        "state": "THIN",
        "reason": "google: 3 launches < 5 required"
      },
      {
        "root": "land",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 25.1,
        "state": "THIN",
        "reason": "land: 3 launches < 5 required"
      },
      {
        "root": "popt",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 25.1,
        "state": "THIN",
        "reason": "popt: 3 launches < 5 required"
      },
      {
        "root": "quiv",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 25.1,
        "state": "THIN",
        "reason": "quiv: 3 launches < 5 required"
      },
      {
        "root": "quiver",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 25.1,
        "state": "THIN",
        "reason": "quiver: 3 launches < 5 required"
      },
      {
        "root": "hype",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0008,
        "multiple": 12.5,
        "state": "THIN",
        "reason": "hype: 3 launches < 5 required"
      },
      {
        "root": "liquidity",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0008,
        "multiple": 12.5,
        "state": "THIN",
        "reason": "liquidity: 3 launches < 5 required"
      },
      {
        "root": "lp",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0009,
        "multiple": 11.1,
        "state": "THIN",
        "reason": "lp: 3 launches < 5 required"
      },
      {
        "root": "oil",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.003,
        "multiple": 3.3,
        "state": "BELOW",
        "reason": "oil: 3.3x over baseline < 6.0x required"
      },
      {
        "root": "inc",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0057,
        "multiple": 1.8,
        "state": "BELOW",
        "reason": "inc: 1.8x over baseline < 6.0x required"
      },
      {
        "root": "dog",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0058,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "dog: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "weth",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0073,
        "multiple": 1.4,
        "state": "BELOW",
        "reason": "weth: 1.4x over baseline < 6.0x required"
      },
      {
        "root": "ai",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0081,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "ai: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "agoreth",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.7,
        "state": "THIN",
        "reason": "agoreth: 2 launches < 5 required"
      },
      {
        "root": "agrth",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.7,
        "state": "THIN",
        "reason": "agrth: 2 launches < 5 required"
      },
      {
        "root": "apetst",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 16.7,
        "state": "THIN",
        "reason": "apetst: 2 launches < 5 required"
      },
      {
        "root": "bank",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.7,
        "state": "THIN",
        "reason": "bank: 2 launches < 5 required"
      },
      {
        "root": "bit",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.7,
        "state": "THIN",
        "reason": "bit: 2 launches < 5 required"
      },
      {
        "root": "blackberry",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.7,
        "state": "THIN",
        "reason": "blackberry: 2 launches < 5 required"
      },
      {
        "root": "clud",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.7,
        "state": "THIN",
        "reason": "clud: 2 launches < 5 required"
      },
      {
        "root": "dig",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.7,
        "state": "THIN",
        "reason": "dig: 2 launches < 5 required"
      },
      {
        "root": "digger",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.7,
        "state": "THIN",
        "reason": "digger: 2 launches < 5 required"
      },
      {
        "root": "drills",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.7,
        "state": "THIN",
        "reason": "drills: 2 launches < 5 required"
      },
      {
        "root": "exit",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.7,
        "state": "THIN",
        "reason": "exit: 2 launches < 5 required"
      },
      {
        "root": "goldstein",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.7,
        "state": "THIN",
        "reason": "goldstein: 2 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0xd6dbade2efdaf1e427b7a8db8d96ef4d49de2358",
        "name": "BASEBALL PACK RATS",
        "symbol": "BPRS",
        "deployer": "0x10c6e3823684e0663d87ea598ab193e4b5222491",
        "block": 122970093,
        "ts": "2026-11-25T10:23:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9a82c9db730a8aeadd300f429eeea59f1b2d636d",
        "name": "The Realm of Ravenguard Land",
        "symbol": "LAND",
        "deployer": "0x11c2794be7e62ebf396e8f8a8a4cb540478f61e8",
        "block": 122969829,
        "ts": "2026-11-25T10:22:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x068e7b739a9b7fe920cf45b6dd42a261272de038",
        "name": "Basket",
        "symbol": "BASKET",
        "deployer": "0x4d729b88acb9c4f4565d8aebd1d628a1d47d4f98",
        "block": 122969342,
        "ts": "2026-11-25T10:21:45.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x2dcc2bb60ebe0af96ec1cac6c0dec39aac5acce5",
        "name": "Panic Receipt",
        "symbol": "RCPTPAN",
        "deployer": "0xacfae4bee17d7204b662a4935e4f48a650750bab",
        "block": 122969246,
        "ts": "2026-11-25T10:21:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x35646e480fa4ccd428e0fe7d66708a51aa998056",
        "name": "ソラナちゃん",
        "symbol": "SOLCHAN",
        "deployer": "0x0dbacb713c8206189ae767912587caa9eb119d25",
        "block": 122968461,
        "ts": "2026-11-25T10:20:08.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xf8e0ab443098c0738489b5baffbd32a1341f2289",
        "name": "Borro USDG",
        "symbol": "bUSDG",
        "deployer": "0x3a17bfff7c6fb05f8c49d3d7181849e531026896",
        "block": 122968429,
        "ts": "2026-11-25T10:20:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0d41b088103c61eea5d16c7adecad8e54fcece2a",
        "name": "Buffer Pigeon",
        "symbol": "BUFPIGE",
        "deployer": "0xacfae4bee17d7204b662a4935e4f48a650750bab",
        "block": 122968319,
        "ts": "2026-11-25T10:19:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdf3ab69835c94c1ed6f74e46dc8cc429a45a3d72",
        "name": "synovax_test",
        "symbol": "SYNOVAX",
        "deployer": "0xd60ef285f67d03598ffeb47ae47ede76aa268fbd",
        "block": 122968261,
        "ts": "2026-11-25T10:19:47.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xb0711574537f61298d43be9cebc05d8c5e6101e9",
        "name": "Stray Dog",
        "symbol": "DOG",
        "deployer": "0x1cd9d560440aab96f7b0a007ced7c2191cac5baf",
        "block": 122968166,
        "ts": "2026-11-25T10:19:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9953323399baf7496e88cdef143807b1af0b7777",
        "name": "Money Drills",
        "symbol": "DRILLS",
        "deployer": "0x980b9bb5b3163638e0a35f8f26ff40547b16e2a9",
        "block": 122968161,
        "ts": "2026-11-25T10:19:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc3d6bfb054dff40023c7d254924d46d6be1d49d7",
        "name": "SkeleBuddies",
        "symbol": "SB",
        "deployer": "0x16b1b983429fe0777f4802f6ff9b01585f62d143",
        "block": 122968136,
        "ts": "2026-11-25T10:19:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7e2c1dc6106a0466d3fa2b3a8505a71f9890789e",
        "name": "Money Drills",
        "symbol": "DRILLS",
        "deployer": "0x6fadb7d3178c1803aae6fcdd83ea5f1c9e25a68a",
        "block": 122967455,
        "ts": "2026-11-25T10:18:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa2f64ac7e81c379c33dcac3fe114b464dbc77777",
        "name": "PatronCoin",
        "symbol": "Patron",
        "deployer": "0xe3433710a910fa9785cb5f9a283a3958a4060fae",
        "block": 122967435,
        "ts": "2026-11-25T10:18:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3b95ad332eb9a72f93af7dd10b6bfd7ea8de89ea",
        "name": "Chop CTRL",
        "symbol": "chCTRL",
        "deployer": "0x659933048ed5f8da1556c4a6aea936312c328b62",
        "block": 122967432,
        "ts": "2026-11-25T10:18:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdf75cae0f508e7814eb5911243363e64bc893336",
        "name": "Is This a Chair?",
        "symbol": "SITQUIZ",
        "deployer": "0xacfae4bee17d7204b662a4935e4f48a650750bab",
        "block": 122967334,
        "ts": "2026-11-25T10:18:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5e5485d8a70dcdca6b5c11d1df3ca0972ed9525a",
        "name": "Odley",
        "symbol": "ODLEY",
        "deployer": "0x9dfde7596cc948a5489d5f96de6eeb5c7dc5275f",
        "block": 122967032,
        "ts": "2026-11-25T10:17:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x24b2e8be76c76dc88d516bdb3cc573076b4c0087",
        "name": "The 4 Sea Otters",
        "symbol": "4",
        "deployer": "0xd4875af0ae4491868c1ad20c752232a6b54a3568",
        "block": 122966935,
        "ts": "2026-11-25T10:17:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x845feed4e3ad46db918ab0d2ba0cd00dc122cccc",
        "name": "tether",
        "symbol": "USDT",
        "deployer": "0x01a0d2903d1dc59474f2c8bacd391efeea066f00",
        "block": 122966907,
        "ts": "2026-11-25T10:17:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x93fb347aaec4116b6dc05fd3c0386316b4fb0a79",
        "name": "Mesa Springs Land",
        "symbol": "MSLAND",
        "deployer": "0x11c2794be7e62ebf396e8f8a8a4cb540478f61e8",
        "block": 122966688,
        "ts": "2026-11-25T10:16:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0086ec1540719d4199432797e2b6068e6ae5a0e5",
        "name": "Gage V2 Reclaim Right",
        "symbol": "GAGE-R",
        "deployer": "0xc31bd8a6cfcaacec6f26f7120ddd81f680047195",
        "block": 122966546,
        "ts": "2026-11-25T10:16:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x88e45a904e2e43de281624610bf4d359f89f7c32",
        "name": "POPT-V2 ANT LP on USDG/ANT 5bps",
        "symbol": "poANT",
        "deployer": "0xd2d6618d82e23a3572fd5ff8be6f3d1ce92fe09a",
        "block": 122966420,
        "ts": "2026-11-25T10:16:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbde7e8d3c43e6fd345a45ba06eee18454891049b",
        "name": "Tiny Supervisor",
        "symbol": "TNYBOSS",
        "deployer": "0xacfae4bee17d7204b662a4935e4f48a650750bab",
        "block": 122966287,
        "ts": "2026-11-25T10:16:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8f6b1c38c71cf8d54b061cd44ce5e20ec0632dca",
        "name": "Red Heights Land",
        "symbol": "LAND",
        "deployer": "0x11c2794be7e62ebf396e8f8a8a4cb540478f61e8",
        "block": 122965775,
        "ts": "2026-11-25T10:15:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x595a539c565a12b8106a305430454ce99158cccc",
        "name": "USDT.",
        "symbol": "TETHER",
        "deployer": "0x01a0d2903d1dc59474f2c8bacd391efeea066f00",
        "block": 122965256,
        "ts": "2026-11-25T10:14:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x902ff861b8338d772d3147e101040791a9fc2aac",
        "name": "Dealhound",
        "symbol": "HOUND",
        "deployer": "0xd34171d2ed56ef17c9313ca831938d756e26c213",
        "block": 122965106,
        "ts": "2026-11-25T10:13:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x76cf788606f3d968b93b8a243d0e185c974ee407",
        "name": "Origami hOHM",
        "symbol": "hOHM",
        "deployer": "0x0e183f1d7286cc260761d15fc07514a39b5a36c2",
        "block": 122964958,
        "ts": "2026-11-25T10:13:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xba8687399e63a070fcec61b9a767ff1f6ee61a76",
        "name": "TheGoatBAYC",
        "symbol": "TGBAYC",
        "deployer": "0xb38a349d6379be68a65f13945cbaab83cb081e08",
        "block": 122964953,
        "ts": "2026-11-25T10:13:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb8afde77ea2cf15477c271cc071e5200c961a0a7",
        "name": "Wrapped Figma • Robinhood Token",
        "symbol": "wFIG",
        "deployer": "0x1e9891b933c123eb860a4ae8ba75f7c5b506eed5",
        "block": 122964558,
        "ts": "2026-11-25T10:12:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xca2084a55c1b565e3c30e6594b51414e8e427777",
        "name": "Census Curve",
        "symbol": "CENSUS",
        "deployer": "0xe26a8a93a803f6dcc9355da3beac69d733ddfd5d",
        "block": 122964176,
        "ts": "2026-11-25T10:12:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x934eabb61df87b665c7ff01b071864d4769138b3",
        "name": "Mini Chain",
        "symbol": "MINI",
        "deployer": "0x968fc806b967c1b4a10e7d30f539c794d7d07777",
        "block": 122964146,
        "ts": "2026-11-25T10:12:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcef928c09c35b131277e6791d70cb49ab9017777",
        "name": "Khione",
        "symbol": "KHIONE",
        "deployer": "0x4f6d40378da3874cb49b6834b4c20ada43842691",
        "block": 122963950,
        "ts": "2026-11-25T10:11:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x77586669762e9ac1fd02d666378c1bd966330db3",
        "name": "Khione",
        "symbol": "KHIONE",
        "deployer": "0x25d0c784a111005418012c172eb9885e27837807",
        "block": 122963866,
        "ts": "2026-11-25T10:11:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0830a9dd26a04e959657ab6788d45f5725590c32",
        "name": "DEGEN",
        "symbol": "DEGEN",
        "deployer": "0xd0dcacd0135d463b553bf7ac8c68f32fa178c279",
        "block": 122963471,
        "ts": "2026-11-25T10:10:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2cc7b06e3081f4dd3f3432677bad3c4af94421b1",
        "name": "Pocket Apex",
        "symbol": "PKTAPX",
        "deployer": "0xacfae4bee17d7204b662a4935e4f48a650750bab",
        "block": 122963324,
        "ts": "2026-11-25T10:10:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x26d2f7acb07707034406a0dc458351bb63c02553",
        "name": "Fee Beneficiary",
        "symbol": "FEEB",
        "deployer": "0xacfae4bee17d7204b662a4935e4f48a650750bab",
        "block": 122963324,
        "ts": "2026-11-25T10:10:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xad345c2088bf0b6140aa78abb7fe8336e328686a",
        "name": "POPT-V2 SPY LP on SPY/USDG 5bps",
        "symbol": "poSPY",
        "deployer": "0xd2d6618d82e23a3572fd5ff8be6f3d1ce92fe09a",
        "block": 122962816,
        "ts": "2026-11-25T10:09:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa999960168fd21c152cc806d406425e04fb8cccc",
        "name": "Mini Chain",
        "symbol": "MINICHAIN",
        "deployer": "0x968fc806b967c1b4a10e7d30f539c794d7d07777",
        "block": 122962381,
        "ts": "2026-11-25T10:08:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf9f1b19cdcd10fb66924baea142a9e3845880087",
        "name": "ニピ",
        "symbol": "Nipi",
        "deployer": "0xd9b27095395ab95509657887eaaf1131f0ba6355",
        "block": 122962352,
        "ts": "2026-11-25T10:08:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x58ba50e74487df387b93984f5179748221797777",
        "name": "Slotbound",
        "symbol": "Slotbound",
        "deployer": "0xdd17e9208f1172b360e8e677843811fdebf60671",
        "block": 122962006,
        "ts": "2026-11-25T10:08:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1bab921d47659f00fe35431dfdc10ebffff1f513",
        "name": "Quiver",
        "symbol": "QUIV",
        "deployer": "0x4e533c8825aea8ce48087ab21f66f8f6b43078c4",
        "block": 122961769,
        "ts": "2026-11-25T10:07:47.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
