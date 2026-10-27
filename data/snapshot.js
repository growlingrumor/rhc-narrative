/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-27T02:05:45.000Z",
    "opened_at": "2026-10-27T01:05:45.000Z",
    "window_hours": 1,
    "head_block": 98886507,
    "start_block": 98852303,
    "blocks_scanned": 34204,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 360,
    "unnamed_contracts": 0,
    "via_factory": 330,
    "no_receipt": 0,
    "candidates": 360,
    "mint_events": 16302,
    "deployers": 253,
    "roots": 441,
    "cleared_multiple": 441,
    "failed_gates": 428,
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
      "beria",
      "elon",
      "hachi",
      "nft",
      "positions",
      "robinhood",
      "uniswap-uni",
      "usdg",
      "wiener"
    ],
    "top": {
      "root": "robinhood",
      "launches": 19,
      "deployers": 10,
      "baseline_share": 0.0004,
      "multiple": 131.9,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "robinhood",
        "launches": 19,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 131.9,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "elon",
        "launches": 18,
        "deployers": 18,
        "baseline_share": 0.0004,
        "multiple": 125,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "hachi",
        "launches": 12,
        "deployers": 12,
        "baseline_share": 0.0004,
        "multiple": 83.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 69.4,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "beria",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 48.6,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nft",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 48.6,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 48.6,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "wiener",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 41.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 35,
        "deployers": 33,
        "baseline_share": 0.0004,
        "multiple": 243.1,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 77%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 27,
        "deployers": 26,
        "baseline_share": 0.0004,
        "multiple": 187.5,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 77%, merged to uniswap-uni"
      },
      {
        "root": "backed",
        "launches": 12,
        "deployers": 12,
        "baseline_share": 0.0004,
        "multiple": 83.3,
        "state": "MERGED",
        "reason": "backed + belief co-occur 100%, merged to backed-belief-nothing"
      },
      {
        "root": "belief",
        "launches": 12,
        "deployers": 12,
        "baseline_share": 0.0004,
        "multiple": 83.3,
        "state": "MERGED",
        "reason": "backed + belief co-occur 100%, merged to backed-belief-nothing"
      },
      {
        "root": "nothing",
        "launches": 12,
        "deployers": 12,
        "baseline_share": 0.0004,
        "multiple": 83.3,
        "state": "MERGED",
        "reason": "backed + belief co-occur 100%, merged to backed-belief-nothing"
      },
      {
        "root": "cow",
        "launches": 6,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 41.7,
        "state": "THIN",
        "reason": "cow: 2 deployers < 6 required"
      },
      {
        "root": "dog",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 34.7,
        "state": "THIN",
        "reason": "dog: 5 deployers < 6 required"
      },
      {
        "root": "retain",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 34.7,
        "state": "THIN",
        "reason": "retain: 5 deployers < 6 required"
      },
      {
        "root": "big",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 27.8,
        "state": "THIN",
        "reason": "big: 4 launches < 5 required"
      },
      {
        "root": "chop",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 27.8,
        "state": "THIN",
        "reason": "chop: 4 launches < 5 required"
      },
      {
        "root": "derangement",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 27.8,
        "state": "THIN",
        "reason": "derangement: 4 launches < 5 required"
      },
      {
        "root": "pons",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 27.8,
        "state": "THIN",
        "reason": "pons: 4 launches < 5 required"
      },
      {
        "root": "rewards",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 27.8,
        "state": "THIN",
        "reason": "rewards: 4 launches < 5 required"
      },
      {
        "root": "syndrome",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 27.8,
        "state": "THIN",
        "reason": "syndrome: 4 launches < 5 required"
      },
      {
        "root": "alandale",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.8,
        "state": "THIN",
        "reason": "alandale: 3 launches < 5 required"
      },
      {
        "root": "amc",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.8,
        "state": "THIN",
        "reason": "amc: 3 launches < 5 required"
      },
      {
        "root": "astral",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.8,
        "state": "THIN",
        "reason": "astral: 3 launches < 5 required"
      },
      {
        "root": "bucket",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 20.8,
        "state": "THIN",
        "reason": "bucket: 3 launches < 5 required"
      },
      {
        "root": "cat",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.8,
        "state": "THIN",
        "reason": "cat: 3 launches < 5 required"
      },
      {
        "root": "lavrentiy",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.8,
        "state": "THIN",
        "reason": "lavrentiy: 3 launches < 5 required"
      },
      {
        "root": "pangea",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.8,
        "state": "THIN",
        "reason": "pangea: 3 launches < 5 required"
      },
      {
        "root": "paper",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.8,
        "state": "THIN",
        "reason": "paper: 3 launches < 5 required"
      },
      {
        "root": "paws",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.8,
        "state": "THIN",
        "reason": "paws: 3 launches < 5 required"
      },
      {
        "root": "ramses",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.8,
        "state": "THIN",
        "reason": "ramses: 3 launches < 5 required"
      },
      {
        "root": "reward",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.8,
        "state": "THIN",
        "reason": "reward: 3 launches < 5 required"
      },
      {
        "root": "staked",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.8,
        "state": "THIN",
        "reason": "staked: 3 launches < 5 required"
      },
      {
        "root": "stock",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.8,
        "state": "THIN",
        "reason": "stock: 3 launches < 5 required"
      },
      {
        "root": "tickerspring",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.8,
        "state": "THIN",
        "reason": "tickerspring: 3 launches < 5 required"
      },
      {
        "root": "weth",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.8,
        "state": "THIN",
        "reason": "weth: 3 launches < 5 required"
      },
      {
        "root": "aero",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 13.9,
        "state": "THIN",
        "reason": "aero: 2 launches < 5 required"
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
        "root": "alibaba",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 13.9,
        "state": "THIN",
        "reason": "alibaba: 2 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0xd77794e9082ba1ca601c46a27f7a260430be7777",
        "name": "⬛⬛⬛",
        "symbol": "⬛⬛⬛",
        "deployer": "0x498b1bee7a146a4d10514f2d8eb1201b447ad384",
        "block": 98886287,
        "ts": "2026-10-27T02:05:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3912bdca5f489d0f00a054734aed5dfda3c328f5",
        "name": "Hallowfolk",
        "symbol": "BO0",
        "deployer": "0x30edc17c817059d728535155f80a5f9ddd4b6b5b",
        "block": 98886256,
        "ts": "2026-10-27T02:05:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x88e4301477b826325da8045a00987b261f806104",
        "name": "⬛⬛⬛",
        "symbol": "⬛⬛⬛",
        "deployer": "0x45f487c30a8f8b74dbcddc2a8ae1c8f78a62a972",
        "block": 98886196,
        "ts": "2026-10-27T02:05:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8e7d76659c37414d7b8f35094bc8504ffe7d2759",
        "name": "Sam Bankman-Fried",
        "symbol": "SBF",
        "deployer": "0x85b5fd96c3668009d0ba450a69f4f90564866943",
        "block": 98886153,
        "ts": "2026-10-27T02:05:10.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x8e1c2c25e920ecbd70635a2266fbfe5cb3fb7777",
        "name": "Trump Pepe",
        "symbol": "TRUMPE",
        "deployer": "0x7485fbfd99993dab4c9964f53791e40d14253c97",
        "block": 98886101,
        "ts": "2026-10-27T02:05:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x422410b733843cc1dfe7f11d9273ffaa119f36c3",
        "name": "Trump Pepe",
        "symbol": "TRUMPE",
        "deployer": "0xad911acc7d1a7084f1b9c6277ec78272b952a7c5",
        "block": 98886016,
        "ts": "2026-10-27T02:04:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb3ecf4e995bf179b55407a3edb49645e9f1e337c",
        "name": "LFG",
        "symbol": "LFG",
        "deployer": "0x2ccc152ad68419f777531e6a40a52325e2a80ee2",
        "block": 98885872,
        "ts": "2026-10-27T02:04:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd9d674b04a72affe00e06385535eaac10b988fca",
        "name": "Project Mars",
        "symbol": "DRILL",
        "deployer": "0x39f38c04f217acc55549d54ce43b0666bb635d54",
        "block": 98885781,
        "ts": "2026-10-27T02:04:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x595d02477ba88ca8e0892124dc36656b6c977061",
        "name": "House Agent",
        "symbol": "aHOUSE",
        "deployer": "0x2ccc152ad68419f777531e6a40a52325e2a80ee2",
        "block": 98885670,
        "ts": "2026-10-27T02:04:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf76abcf54e6f1fe29cba14e860d041bcbeaabdac",
        "name": "Bucket: Safety",
        "symbol": "bSAFETY",
        "deployer": "0x2ccc152ad68419f777531e6a40a52325e2a80ee2",
        "block": 98885621,
        "ts": "2026-10-27T02:04:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf04a7a20a1462ba7dbbe153ae31a90b41a1dce75",
        "name": "SNOCRO",
        "symbol": "Snocro",
        "deployer": "0xa621164c4fcfe74e86093cbfa5fc84ae4991fd13",
        "block": 98885544,
        "ts": "2026-10-27T02:04:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb5783ec5b95641a3df4b057e28030feb30707777",
        "name": "No Pump November",
        "symbol": "NPN",
        "deployer": "0xa7ba884561771e707f7f29bd5388b77f1e470daf",
        "block": 98885241,
        "ts": "2026-10-27T02:03:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf4949453698d9c0231db45f4ca761bffac124af9",
        "name": "No Pump November",
        "symbol": "NPN",
        "deployer": "0xa77696bde54da38d472afc5b493ad69798bed66f",
        "block": 98885170,
        "ts": "2026-10-27T02:03:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x553fd91ea3d5fb1dc4b222779c88c46d35ea6b67",
        "name": "Mixedbread",
        "symbol": "MIXBREAD",
        "deployer": "0x6d6a7d6fa8f857803b10fcabd927b76279f9d1c4",
        "block": 98885162,
        "ts": "2026-10-27T02:03:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x18c9719ab6ae4e1a6f95f281ef288e3af5d58602",
        "name": "SurfBoard",
        "symbol": "SURFBOARD",
        "deployer": "0x6155b6d14e91aeffbbd916000978f822288cdd85",
        "block": 98885151,
        "ts": "2026-10-27T02:03:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7eb0266a56c01e58f53c9bfd2591c08a35729db8",
        "name": "RobinBones Club",
        "symbol": "RobinBones Club",
        "deployer": "0xe4ff50ed8907898a5f0489054afce8610054d2ab",
        "block": 98884744,
        "ts": "2026-10-27T02:02:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xeb669b3c7515941680bc3400563b235b8b95cca8",
        "name": "woli",
        "symbol": "WLCOIN",
        "deployer": "0xc0a21015b1acdfdcc4b2443bcff4371825a30935",
        "block": 98884196,
        "ts": "2026-10-27T02:01:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x26d2f7acb07707034406a0dc458351bb63c02553",
        "name": "Fee Beneficiary",
        "symbol": "FEEB",
        "deployer": "0xc0a21015b1acdfdcc4b2443bcff4371825a30935",
        "block": 98884196,
        "ts": "2026-10-27T02:01:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xddac87050fc7ae3253183fe0141fafd4cbe9b3ca",
        "name": "the Friendly Ghost and Friends",
        "symbol": "GHOST",
        "deployer": "0xef39a18d2810f0c54974c92a9c66734d61a93e52",
        "block": 98883837,
        "ts": "2026-10-27T02:01:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9b661086b86c041d70d2f43c1c611cba117776ea",
        "name": "BOB",
        "symbol": "BOB",
        "deployer": "0xc5d22a7d5b203164bfa6479d72de9297cff19bf5",
        "block": 98883541,
        "ts": "2026-10-27T02:00:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4c566ea0a7d67994aa5be6d72191ef74d23497b9",
        "name": "Wrapped Lockheed • Robinhood Token",
        "symbol": "wLMT",
        "deployer": "0x4a438c7c4052209b71cc403f28b9976300bffbbe",
        "block": 98883312,
        "ts": "2026-10-27T02:00:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x78723aea5b10a0ab17306e0366da57ccb7dc7777",
        "name": "Sam Bankman Fried",
        "symbol": "SBF",
        "deployer": "0x1b4ebe73585b94578dc055c6ac7e89333fdadcf7",
        "block": 98883238,
        "ts": "2026-10-27T02:00:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb6a7f6211e97f341bb270479ce0348dc1cf156ea",
        "name": "Wojak",
        "symbol": "WOJAK",
        "deployer": "0x4e2bd87ec828601cedaee948d61f64c0a2673b84",
        "block": 98883150,
        "ts": "2026-10-27T02:00:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8cc0e7b60f4dce9d9810693169d7ce76d4247667",
        "name": "Flock Lend Borrowable",
        "symbol": "bFLOCK",
        "deployer": "0x097ba31b7acffd75b909fc7bef2e55424d2dacdc",
        "block": 98882916,
        "ts": "2026-10-27T01:59:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x193078f042d7c8898c3ddf481b9e26fae3e9b02e",
        "name": "Flock Lend Borrowable",
        "symbol": "bFLOCK",
        "deployer": "0x097ba31b7acffd75b909fc7bef2e55424d2dacdc",
        "block": 98882916,
        "ts": "2026-10-27T01:59:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2cb72a498c4af7c7827a43699033dd5012ba0000",
        "name": "Sick Day ec84d",
        "symbol": "1119",
        "deployer": "0x67e8490eaf377d1680aed3d1b44acf6b5a830aad",
        "block": 98882819,
        "ts": "2026-10-27T01:59:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x78a81c044b5ba826a693563d9ce9f886256d1111",
        "name": "Fx100Perp",
        "symbol": "FX100",
        "deployer": "0xa4037acfc073c286cd9cf0dad78a18fe9fff9620",
        "block": 98882511,
        "ts": "2026-10-27T01:58:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x23002e62acb551224e26449ad85743a680741e18",
        "name": "JEY-ZEE",
        "symbol": "JEYZEE",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 98882444,
        "ts": "2026-10-27T01:58:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9a3a2cebcab8d133919f4eb17e82facc4d972bfa",
        "name": "eepy",
        "symbol": "eepy",
        "deployer": "0x000ece0e598f89c0c567f652e2ab48d6edac7bf6",
        "block": 98882183,
        "ts": "2026-10-27T01:58:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb1d5c70e24bda7a27cde3c8e7222e8c220527777",
        "name": "Backed By Belief",
        "symbol": "Nothing",
        "deployer": "0x372f3bd1e7fc0acdb7313b5923774cad656dff72",
        "block": 98882165,
        "ts": "2026-10-27T01:58:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdff8242d45c79fc7e9cd940bc309b2d227321967",
        "name": "Elon 2028",
        "symbol": "ELON2028",
        "deployer": "0xa340ee5f321482583b75a17d86044d4db9f489e9",
        "block": 98882080,
        "ts": "2026-10-27T01:58:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x361f696cbd5a35d5ceb01fada5be372c6550efdd",
        "name": "Elon 2028",
        "symbol": "ELON2028",
        "deployer": "0x3c15703e5ccf46397a69a3f250304c16fd6c366e",
        "block": 98882075,
        "ts": "2026-10-27T01:58:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7732a304cf4f44e366ae901dc3cdd1bfc4cf2a91",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x7962488e28f7889584769c7ceeb18cc4818514c7",
        "block": 98881992,
        "ts": "2026-10-27T01:57:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe92bd1c05e4e308792003c8205127a6fa662b4d4",
        "name": "Wrapped Staked O",
        "symbol": "wstO",
        "deployer": "0xe93685f3bba03016f02bd1828badd6195988d950",
        "block": 98881982,
        "ts": "2026-10-27T01:57:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x500a02a20b0b0a3f3efccfc0559543f5743bd1c4",
        "name": "o1.exchange",
        "symbol": "O",
        "deployer": "0xd0dcacd0135d463b553bf7ac8c68f32fa178c279",
        "block": 98881850,
        "ts": "2026-10-27T01:57:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4a0e65a3eccec6dbe60ae065f2e7bb85fae35eea",
        "name": "Space Exploration Technologies Corp. Class A Common Stock • Robinhood Token",
        "symbol": "SPCX",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 98881474,
        "ts": "2026-10-27T01:57:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7fd640c881345f0afdf47261b52503d5c2ab7c99",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x45d8dbe4241d91da4901aad837ae7242cfda380e",
        "block": 98881399,
        "ts": "2026-10-27T01:56:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6278248c011ddaa2b5b42d1870bd895fb87d1e18",
        "name": "11/19",
        "symbol": "SICKDAY",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 98881263,
        "ts": "2026-10-27T01:56:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x78fcc6a622b52dabdfa7d7fb7aaef26cbde47523",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xedfff5221755c7ba84fb4544ce147938a197ee99",
        "block": 98881127,
        "ts": "2026-10-27T01:56:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x88c4c42ed68584ff02f5a00d5d3d985108a3961c",
        "name": "Edel",
        "symbol": "EDEL",
        "deployer": "0x2171a1b6c8753920330a3b58d9305b277057dd3f",
        "block": 98881125,
        "ts": "2026-10-27T01:56:05.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
