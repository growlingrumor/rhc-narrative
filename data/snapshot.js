/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-14T02:17:41.000Z",
    "opened_at": "2026-11-14T01:17:41.000Z",
    "window_hours": 1,
    "head_block": 113827343,
    "start_block": 113795101,
    "blocks_scanned": 32242,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 239,
    "unnamed_contracts": 20,
    "via_factory": 237,
    "no_receipt": 0,
    "candidates": 259,
    "mint_events": 10980,
    "deployers": 171,
    "roots": 317,
    "cleared_multiple": 195,
    "failed_gates": 192,
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
      "jensen-stand-with"
    ],
    "top": null,
    "rows": [
      {
        "root": "jensen",
        "launches": 25,
        "deployers": 23,
        "baseline_share": 0.0004,
        "multiple": 261.5,
        "state": "MERGED",
        "reason": "jensen + stand co-occur 100%, merged to jensen-stand-with"
      },
      {
        "root": "stand",
        "launches": 23,
        "deployers": 22,
        "baseline_share": 0.0004,
        "multiple": 240.6,
        "state": "MERGED",
        "reason": "jensen + stand co-occur 100%, merged to jensen-stand-with"
      },
      {
        "root": "with",
        "launches": 23,
        "deployers": 22,
        "baseline_share": 0.0004,
        "multiple": 240.6,
        "state": "MERGED",
        "reason": "jensen + stand co-occur 100%, merged to jensen-stand-with"
      },
      {
        "root": "usdg",
        "launches": 18,
        "deployers": 11,
        "baseline_share": 0.0203,
        "multiple": 3.7,
        "state": "BELOW",
        "reason": "usdg: 3.7x over baseline < 6.0x required"
      },
      {
        "root": "uniswap",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0509,
        "multiple": 0.7,
        "state": "BELOW",
        "reason": "uniswap: 0.7x over baseline < 6.0x required"
      },
      {
        "root": "nvda",
        "launches": 7,
        "deployers": 1,
        "baseline_share": 0.0024,
        "multiple": 12.2,
        "state": "THIN",
        "reason": "nvda: 1 deployers < 6 required"
      },
      {
        "root": "positions",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0167,
        "multiple": 1.8,
        "state": "BELOW",
        "reason": "positions: 1.8x over baseline < 6.0x required"
      },
      {
        "root": "nft",
        "launches": 7,
        "deployers": 6,
        "baseline_share": 0.0201,
        "multiple": 1.5,
        "state": "BELOW",
        "reason": "nft: 1.5x over baseline < 6.0x required"
      },
      {
        "root": "sunbuck",
        "launches": 6,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 62.8,
        "state": "THIN",
        "reason": "sunbuck: 5 deployers < 6 required"
      },
      {
        "root": "uni",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0424,
        "multiple": 0.6,
        "state": "BELOW",
        "reason": "uni: 0.6x over baseline < 6.0x required"
      },
      {
        "root": "cocoro",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 52.3,
        "state": "THIN",
        "reason": "cocoro: 5 deployers < 6 required"
      },
      {
        "root": "cocorocoin",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 41.8,
        "state": "THIN",
        "reason": "cocorocoin: 4 launches < 5 required"
      },
      {
        "root": "brownfi",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0025,
        "multiple": 6.7,
        "state": "THIN",
        "reason": "brownfi: 4 launches < 5 required"
      },
      {
        "root": "bf",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0027,
        "multiple": 6.2,
        "state": "THIN",
        "reason": "bf: 4 launches < 5 required"
      },
      {
        "root": "layerbank",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0053,
        "multiple": 3.2,
        "state": "BELOW",
        "reason": "layerbank: 3.2x over baseline < 6.0x required"
      },
      {
        "root": "aero",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0056,
        "multiple": 3,
        "state": "BELOW",
        "reason": "aero: 3.0x over baseline < 6.0x required"
      },
      {
        "root": "amm",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0062,
        "multiple": 2.7,
        "state": "BELOW",
        "reason": "amm: 2.7x over baseline < 6.0x required"
      },
      {
        "root": "staked",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0069,
        "multiple": 2.4,
        "state": "BELOW",
        "reason": "staked: 2.4x over baseline < 6.0x required"
      },
      {
        "root": "volatile",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0083,
        "multiple": 2,
        "state": "BELOW",
        "reason": "volatile: 2.0x over baseline < 6.0x required"
      },
      {
        "root": "robinhood",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0513,
        "multiple": 0.3,
        "state": "BELOW",
        "reason": "robinhood: 0.3x over baseline < 6.0x required"
      },
      {
        "root": "cregg",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 31.4,
        "state": "THIN",
        "reason": "cregg: 3 launches < 5 required"
      },
      {
        "root": "eggs",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 31.4,
        "state": "THIN",
        "reason": "eggs: 3 launches < 5 required"
      },
      {
        "root": "sunbucks",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 31.4,
        "state": "THIN",
        "reason": "sunbucks: 3 launches < 5 required"
      },
      {
        "root": "fund",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0029,
        "multiple": 4.3,
        "state": "BELOW",
        "reason": "fund: 4.3x over baseline < 6.0x required"
      },
      {
        "root": "rh",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0036,
        "multiple": 3.5,
        "state": "BELOW",
        "reason": "rh: 3.5x over baseline < 6.0x required"
      },
      {
        "root": "giga",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0041,
        "multiple": 3.1,
        "state": "BELOW",
        "reason": "giga: 3.1x over baseline < 6.0x required"
      },
      {
        "root": "weth",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0073,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "weth: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "ai",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0081,
        "multiple": 1.5,
        "state": "BELOW",
        "reason": "ai: 1.5x over baseline < 6.0x required"
      },
      {
        "root": "back",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "back: 2 launches < 5 required"
      },
      {
        "root": "bring",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "bring: 2 launches < 5 required"
      },
      {
        "root": "buck",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "buck: 2 launches < 5 required"
      },
      {
        "root": "ca",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "ca: 2 launches < 5 required"
      },
      {
        "root": "delta",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "delta: 2 launches < 5 required"
      },
      {
        "root": "donuts",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "donuts: 2 launches < 5 required"
      },
      {
        "root": "fullrange",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "fullrange: 2 launches < 5 required"
      },
      {
        "root": "haas",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "haas: 2 launches < 5 required"
      },
      {
        "root": "kress",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "kress: 2 launches < 5 required"
      },
      {
        "root": "legends",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "legends: 2 launches < 5 required"
      },
      {
        "root": "longbow",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "longbow: 2 launches < 5 required"
      },
      {
        "root": "medieval",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "medieval: 2 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x8a36341fc7a2dfe912f22142691bcbda414e6786",
        "name": "Tiny Legends",
        "symbol": "GRIT",
        "deployer": "0x31e39bc7fb4d55b2a272ada926725977213e4409",
        "block": 113827281,
        "ts": "2026-11-14T02:17:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd9d674b04a72affe00e06385535eaac10b988fca",
        "name": "Project Mars",
        "symbol": "DRILL",
        "deployer": "0x9a0daa98309448135195bfa0cb95e3b63fed3e22",
        "block": 113827232,
        "ts": "2026-11-14T02:17:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x384bed880a5bd6834504079d3a5ef097d9a0d560",
        "name": "Aether",
        "symbol": "AETH",
        "deployer": "0x4a3954dd4db411c24092bd2017b7841d26fe2d51",
        "block": 113826812,
        "ts": "2026-11-14T02:16:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x77ed45aba441bd651dba3356637a778362128425",
        "name": "Diversified Donuts",
        "symbol": "DD",
        "deployer": "0x0478ce6c290f722cdc00e64147035ec4c1cd2b24",
        "block": 113826769,
        "ts": "2026-11-14T02:16:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd2ae7ecce63a0444d487b708402e8f2436090800",
        "name": "Hexncoin",
        "symbol": "HEXN",
        "deployer": "0xafa54e6945803ec0025bb5adf7dea1e50c32bb41",
        "block": 113826491,
        "ts": "2026-11-14T02:16:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x05e0014f45ceec0412fb46a30dfe185ec158067c",
        "name": "Wishmas",
        "symbol": "WISHMAS",
        "deployer": "0x2f7f021f92fbf8e7b0bbab84e7d656656001f64c",
        "block": 113826265,
        "ts": "2026-11-14T02:15:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb70780d977692e6be6f74bcbf7cc62a60b69a45e",
        "name": "Plank Beard Punks",
        "symbol": "PBP",
        "deployer": "0xb8ebbe55b5c18ad0075b3b247b50ea82385bda0d",
        "block": 113825990,
        "ts": "2026-11-14T02:15:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xac00d7bdfe3d9243c356e6efd68cb0fabdf4e97e",
        "name": "Delta Pool Share",
        "symbol": "DELTA-LP",
        "deployer": "0x9cacc286f404fc73284e387df7e83208c9476709",
        "block": 113825702,
        "ts": "2026-11-14T02:14:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8da184498f89f4d78330b1d04dc640ae131ed62c",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x9bee6167102ac060989aa80b3a22d624014731f8",
        "block": 113825676,
        "ts": "2026-11-14T02:14:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0ffef9658e664d6fe2a30d463cc129de6c60da1c",
        "name": "XH",
        "symbol": "XH",
        "deployer": "0x3fffc1c98cb7c28ac8b572ee5405748343ee1539",
        "block": 113824452,
        "ts": "2026-11-14T02:12:20.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x9cf5e31e75dbeb8bc437a054b62e49d39e6fe171",
        "name": "Mars Fund",
        "symbol": "MARS",
        "deployer": "0xc50181eedbe3532dad3bf0699b92f2bf4ad4668d",
        "block": 113824367,
        "ts": "2026-11-14T02:12:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x47f8d24d42f1905561de75765373b3fcb1416d26",
        "name": "Cow Aero SPY-WETH",
        "symbol": "cowAeroSPY-WETH",
        "deployer": "0x03d9964f4d93a24b58c0fc3a8df3474b59ba8557",
        "block": 113823949,
        "ts": "2026-11-14T02:11:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3e0f152c1323299fe91a24dcb915808950c74fee",
        "name": "Reward Cow Aero SPY-WETH",
        "symbol": "rcowAeroSPY-WETH",
        "deployer": "0x03d9964f4d93a24b58c0fc3a8df3474b59ba8557",
        "block": 113823949,
        "ts": "2026-11-14T02:11:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7d9ec8330e2f766d66336302091303deb8c02e43",
        "name": "PEARL",
        "symbol": "PRL",
        "deployer": "0x0478ce6c290f722cdc00e64147035ec4c1cd2b24",
        "block": 113823830,
        "ts": "2026-11-14T02:11:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x86a9555569a38fd6cd0da3b80c5fd8ffd5a54d8f",
        "name": "Trench Chimps",
        "symbol": "TC",
        "deployer": "0xa7ce207e577b7b1ca3ab18f82beeaa63e0335d6f",
        "block": 113823411,
        "ts": "2026-11-14T02:10:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfad7640b97be27a04e96838c3de9dc4c467ee51b",
        "name": "Celios Agent",
        "symbol": "CELIOS",
        "deployer": "0x10936c73f2edd5e7a5efd3397411daee0655ccfd",
        "block": 113823394,
        "ts": "2026-11-14T02:10:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4bf696a9ac8f7ab5aa5a0cfaf75b829f33d984c9",
        "name": "Mechazilla",
        "symbol": "Mechazilla",
        "deployer": "0x2fc624a6f9d18c184bc7d22f87a09a0d83d9ef00",
        "block": 113823100,
        "ts": "2026-11-14T02:09:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x026df18fbd2a7639089d0a16293383ec687a5ca1",
        "name": "Longbow Core USDG",
        "symbol": "lbcoreUSDG",
        "deployer": "0xdeb46ef4e3861e746f14eab2523ca9399626a0e8",
        "block": 113822982,
        "ts": "2026-11-14T02:09:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd04d8f42f5a0d04b77f7806171400839f9701f9a",
        "name": "Chrome Squirrel",
        "symbol": "CHRM",
        "deployer": "0xc50181eedbe3532dad3bf0699b92f2bf4ad4668d",
        "block": 113822753,
        "ts": "2026-11-14T02:09:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x039507fac85d47a4129a260bd3cd1b08a5b0a6ea",
        "name": "UNFOLD",
        "symbol": "UNFOLD",
        "deployer": "0xe09b502c95ad7b76c1f34f9f1878b3a2f26259a3",
        "block": 113822689,
        "ts": "2026-11-14T02:09:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc85081d905074dfe942b2691f14b851632c3d6aa",
        "name": "mihaoo",
        "symbol": "mihaoo",
        "deployer": "0xb7e688b1f6f55be262a8b3d3ea0ea5a12eaf3d2a",
        "block": 113822349,
        "ts": "2026-11-14T02:08:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xce5219cb417cddf4388ced8699a7cb8923ec914b",
        "name": "FullRange-WSM-USDG-20000-0",
        "symbol": "FullRange-WSM-USDG-20000-0",
        "deployer": "0xfbce537fa9841034ad1fd5708a4c8b7fe1436b60",
        "block": 113822348,
        "ts": "2026-11-14T02:08:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xef2c40dc388639a1e6e5c61299f0e0c0c1d37777",
        "name": "milly",
        "symbol": "milly",
        "deployer": "0xbcedc75891e38dd59b63eea47ed33da36811c000",
        "block": 113822198,
        "ts": "2026-11-14T02:08:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd6adce5eac5f40d29e2101436c38cf1cee8f4856",
        "name": "Bridged HYPE",
        "symbol": "HYPE",
        "deployer": "0xf5f3ef3787a1c068c8cafef35f07fa784977bea1",
        "block": 113822129,
        "ts": "2026-11-14T02:08:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf10e5d96ff3808701fa9da1c21d221984a2b1d12",
        "name": "Stand With Jensen",
        "symbol": "SWJ",
        "deployer": "0xfe9420bdb1ceeb4c8f0e7c017c5a3e9e5e4025b8",
        "block": 113822128,
        "ts": "2026-11-14T02:08:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xce3a83ab43c3235e2d500aaa7654a092f013004f",
        "name": "stnkCAT",
        "symbol": "STNCAT",
        "deployer": "0x0478ce6c290f722cdc00e64147035ec4c1cd2b24",
        "block": 113821985,
        "ts": "2026-11-14T02:07:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdceb70c2b4fe6230cb815d6a3a5851cec1532f8d",
        "name": "Predictor-ca86629d",
        "symbol": "PRD-ca86629d",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 113821663,
        "ts": "2026-11-14T02:07:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2b9918195d04437a050d4c85bdea02a1e8d15c0c",
        "name": "Counterparty-ca86629d",
        "symbol": "CTR-ca86629d",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 113821663,
        "ts": "2026-11-14T02:07:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x39ba87ef3a129ef38b84d779eb1ee47c1310678b",
        "name": "BrownFi V3",
        "symbol": "BF-V3",
        "deployer": "0xb0e4413e1eb8df9de7e61fc8654746d8e85852cf",
        "block": 113821523,
        "ts": "2026-11-14T02:07:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6728d3e2c8be234b82eb97f692137d5ad2f4ee56",
        "name": "Predictor-28440c62",
        "symbol": "PRD-28440c62",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 113821478,
        "ts": "2026-11-14T02:06:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbdaffff6ae284bcfbd0722fed5a0dd3862f2a369",
        "name": "Counterparty-28440c62",
        "symbol": "CTR-28440c62",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 113821478,
        "ts": "2026-11-14T02:06:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x36a0ff21ed15388dbbccf3e3e9c52b0f643fe6ea",
        "name": "Drift",
        "symbol": "DRIFT",
        "deployer": "0xcf75e3acba5124f6971600c33668cd4c1eb937a2",
        "block": 113821460,
        "ts": "2026-11-14T02:06:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x54da163942726883b6ef8ee509e60c18bbcbbe29",
        "name": "Giga Volatile AMM - GIGA/USDG",
        "symbol": "GIGA-vAMM-GIGA/USDG",
        "deployer": "0xf0ed0dbe36d332d470e8280debb9761863567dd4",
        "block": 113821238,
        "ts": "2026-11-14T02:06:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x97297f3da24b25af615fc73f205a75eb64b5f3ab",
        "name": "GAS V2",
        "symbol": "GASV2",
        "deployer": "0xfb32a11ae512ed3ca15282a8e408f5c804bb8847",
        "block": 113820939,
        "ts": "2026-11-14T02:05:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2ac0f457636ce3cf939a19f34713d446e841f0af",
        "name": "Cuck Capital",
        "symbol": "CUCK",
        "deployer": "0xfa322cfea4ede2a06e527f54f8273d36831a40de",
        "block": 113820797,
        "ts": "2026-11-14T02:05:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x91d5d2c999c35ce061fd4967e6764cdd9cf1b3e1",
        "name": "Ixs Token",
        "symbol": "IXS",
        "deployer": "0x96111cc4867c5e1c22da4b79bb8852b9e2a07eb1",
        "block": 113820682,
        "ts": "2026-11-14T02:05:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xaadc29ed2a61adc40e5273d5375f701acc741e18",
        "name": "SunBux Coin",
        "symbol": "SUNBUX",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 113820560,
        "ts": "2026-11-14T02:05:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc1d5adc963a57d24adaf63aae1bfbecab95f6edd",
        "name": "Vote-Escrowed Fables",
        "symbol": "veFABLES",
        "deployer": "0x2423b90dd0f4cf0926786b16151f9b7d880604d9",
        "block": 113820556,
        "ts": "2026-11-14T02:05:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe2d887bc78f95c4bbd90868e20e95678ae16ad68",
        "name": "Drip Fellas",
        "symbol": "Dripfellas",
        "deployer": "0xc79a057a545f011d8580af78e9edfa635d8ef24c",
        "block": 113820545,
        "ts": "2026-11-14T02:05:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdceeffd8534bca14b8bdb391a25662f9483b3b2e",
        "name": "GROOT 2",
        "symbol": "GROOT2",
        "deployer": "0x7a40140d3d60af86e5995a15ad5b27d87097b127",
        "block": 113820318,
        "ts": "2026-11-14T02:04:47.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
