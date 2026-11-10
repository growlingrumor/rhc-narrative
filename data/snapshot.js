/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-10T18:17:15.000Z",
    "opened_at": "2026-11-10T17:17:15.000Z",
    "window_hours": 1,
    "head_block": 111084885,
    "start_block": 111049642,
    "blocks_scanned": 35243,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 401,
    "unnamed_contracts": 8,
    "via_factory": 375,
    "no_receipt": 0,
    "candidates": 409,
    "mint_events": 24030,
    "deployers": 273,
    "roots": 593,
    "cleared_multiple": 380,
    "failed_gates": 379,
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
      "nate"
    ],
    "top": {
      "root": "nate",
      "launches": 6,
      "deployers": 6,
      "baseline_share": 0.0004,
      "multiple": 37.4,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "nate",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 37.4,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "robinhood",
        "launches": 42,
        "deployers": 13,
        "baseline_share": 0.0513,
        "multiple": 2,
        "state": "BELOW",
        "reason": "robinhood: 2.0x over baseline < 6.0x required"
      },
      {
        "root": "uniswap",
        "launches": 23,
        "deployers": 20,
        "baseline_share": 0.0509,
        "multiple": 1.1,
        "state": "BELOW",
        "reason": "uniswap: 1.1x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 17,
        "deployers": 16,
        "baseline_share": 0.0424,
        "multiple": 1,
        "state": "BELOW",
        "reason": "uni: 1.0x over baseline < 6.0x required"
      },
      {
        "root": "usdg",
        "launches": 13,
        "deployers": 12,
        "baseline_share": 0.0203,
        "multiple": 1.6,
        "state": "BELOW",
        "reason": "usdg: 1.6x over baseline < 6.0x required"
      },
      {
        "root": "ramses",
        "launches": 7,
        "deployers": 4,
        "baseline_share": 0.0068,
        "multiple": 2.6,
        "state": "BELOW",
        "reason": "ramses: 2.6x over baseline < 6.0x required"
      },
      {
        "root": "volatile",
        "launches": 7,
        "deployers": 3,
        "baseline_share": 0.0083,
        "multiple": 2.1,
        "state": "BELOW",
        "reason": "volatile: 2.1x over baseline < 6.0x required"
      },
      {
        "root": "cat",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.013,
        "multiple": 1.3,
        "state": "BELOW",
        "reason": "cat: 1.3x over baseline < 6.0x required"
      },
      {
        "root": "agent",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0068,
        "multiple": 2.2,
        "state": "BELOW",
        "reason": "agent: 2.2x over baseline < 6.0x required"
      },
      {
        "root": "cow",
        "launches": 6,
        "deployers": 3,
        "baseline_share": 0.0072,
        "multiple": 2.1,
        "state": "BELOW",
        "reason": "cow: 2.1x over baseline < 6.0x required"
      },
      {
        "root": "hood",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0108,
        "multiple": 1.4,
        "state": "BELOW",
        "reason": "hood: 1.4x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0167,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "positions: 0.9x over baseline < 6.0x required"
      },
      {
        "root": "memelink",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 31.2,
        "state": "THIN",
        "reason": "memelink: 4 deployers < 6 required"
      },
      {
        "root": "brownfi",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0025,
        "multiple": 5,
        "state": "BELOW",
        "reason": "brownfi: 5.0x over baseline < 6.0x required"
      },
      {
        "root": "bf",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0027,
        "multiple": 4.6,
        "state": "BELOW",
        "reason": "bf: 4.6x over baseline < 6.0x required"
      },
      {
        "root": "weth",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0073,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "weth: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "nft",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0201,
        "multiple": 0.6,
        "state": "BELOW",
        "reason": "nft: 0.6x over baseline < 6.0x required"
      },
      {
        "root": "rich",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 24.9,
        "state": "THIN",
        "reason": "rich: 4 launches < 5 required"
      },
      {
        "root": "slowly",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 24.9,
        "state": "THIN",
        "reason": "slowly: 4 launches < 5 required"
      },
      {
        "root": "awards",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0013,
        "multiple": 7.7,
        "state": "THIN",
        "reason": "awards: 4 launches < 5 required"
      },
      {
        "root": "dog",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0058,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "dog: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "ai",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0081,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "ai: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "amd",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 18.7,
        "state": "THIN",
        "reason": "amd: 3 launches < 5 required"
      },
      {
        "root": "musig",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.7,
        "state": "THIN",
        "reason": "musig: 3 launches < 5 required"
      },
      {
        "root": "peanut",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 18.7,
        "state": "THIN",
        "reason": "peanut: 3 launches < 5 required"
      },
      {
        "root": "sudo",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 18.7,
        "state": "THIN",
        "reason": "sudo: 3 launches < 5 required"
      },
      {
        "root": "zolva",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 18.7,
        "state": "THIN",
        "reason": "zolva: 3 launches < 5 required"
      },
      {
        "root": "doge",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0012,
        "multiple": 6.2,
        "state": "THIN",
        "reason": "doge: 3 launches < 5 required"
      },
      {
        "root": "house",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0014,
        "multiple": 5.3,
        "state": "BELOW",
        "reason": "house: 5.3x over baseline < 6.0x required"
      },
      {
        "root": "overload",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0022,
        "multiple": 3.4,
        "state": "BELOW",
        "reason": "overload: 3.4x over baseline < 6.0x required"
      },
      {
        "root": "fund",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0029,
        "multiple": 2.6,
        "state": "BELOW",
        "reason": "fund: 2.6x over baseline < 6.0x required"
      },
      {
        "root": "black",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.003,
        "multiple": 2.5,
        "state": "BELOW",
        "reason": "black: 2.5x over baseline < 6.0x required"
      },
      {
        "root": "bucket",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0036,
        "multiple": 2.1,
        "state": "BELOW",
        "reason": "bucket: 2.1x over baseline < 6.0x required"
      },
      {
        "root": "reward",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0037,
        "multiple": 2,
        "state": "BELOW",
        "reason": "reward: 2.0x over baseline < 6.0x required"
      },
      {
        "root": "chop",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0041,
        "multiple": 1.8,
        "state": "BELOW",
        "reason": "chop: 1.8x over baseline < 6.0x required"
      },
      {
        "root": "layerbank",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0053,
        "multiple": 1.4,
        "state": "BELOW",
        "reason": "layerbank: 1.4x over baseline < 6.0x required"
      },
      {
        "root": "position",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0054,
        "multiple": 1.4,
        "state": "BELOW",
        "reason": "position: 1.4x over baseline < 6.0x required"
      },
      {
        "root": "amm",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0062,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "amm: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "aetheryn",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 12.5,
        "state": "THIN",
        "reason": "aetheryn: 2 launches < 5 required"
      },
      {
        "root": "apes",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 12.5,
        "state": "THIN",
        "reason": "apes: 2 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0xb7ca231f9966333d5da95771a4839f04c92c0578",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x719a143654a0c4621f49fa77077800ef3f5c3b40",
        "block": 111084767,
        "ts": "2026-11-10T18:17:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7da16414695e3619e4a10759f42ec6ae2a6b0114",
        "name": "Jensen Huang Coin",
        "symbol": "JENSEN",
        "deployer": "0x4337002c5702ce424cb62a56ca038e31e1d4a93d",
        "block": 111084754,
        "ts": "2026-11-10T18:17:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x319ee71356d2b70a05ca27b2fac13ec9889097de",
        "name": "Bao Bao",
        "symbol": "BAOBAO",
        "deployer": "0xfa13e453b8fae3f673aeb27f2b559fd2a5538283",
        "block": 111084531,
        "ts": "2026-11-10T18:16:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf55512ad94f9687f4f85d669124ed78c7b7525c4",
        "name": "VoidKin",
        "symbol": "KIN",
        "deployer": "0x84bc54f916617fe040cbf4f97953403a33505f43",
        "block": 111084487,
        "ts": "2026-11-10T18:16:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x71978510a452c018bf24cf914642f0cf08b6983c",
        "name": "AudaCoin",
        "symbol": "DACITYCOIN",
        "deployer": "0x4337004ec9c1417f1c7a26ebd4b4fbed6acf9e5d",
        "block": 111083952,
        "ts": "2026-11-10T18:15:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x215602fbbd93ef23ac6daf7956051635e206f5be",
        "name": "Norf",
        "symbol": "NORF",
        "deployer": "0x7243cb7743ddeda2f67c2d505e8612018d23df7d",
        "block": 111083917,
        "ts": "2026-11-10T18:15:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x95dd9d1a7114d5571069692ee71f8fada95bb918",
        "name": "Big Guy",
        "symbol": "BIG",
        "deployer": "0xa3407068448323bb809e3f7400245237a23943cd",
        "block": 111083810,
        "ts": "2026-11-10T18:15:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc7e1e5686812f21891efafc9ea5d86a5920ec1e8",
        "name": "Cartoon Money",
        "symbol": "CBUCKS",
        "deployer": "0xa3407068448323bb809e3f7400245237a23943cd",
        "block": 111083726,
        "ts": "2026-11-10T18:15:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6078d15ba22a58840fb35b4626740a3fb290de9d",
        "name": "$Bond Game Token",
        "symbol": "SPICE",
        "deployer": "0x65ce981b83b748197e0ff0747382035e78a2ab8d",
        "block": 111083630,
        "ts": "2026-11-10T18:15:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd4723cdc6bfa98384454ee5c326db3534686c6c7",
        "name": "ANTLANDS Awards",
        "symbol": "ANTAWARD",
        "deployer": "0x62c749fcff5ab757ea3010a919d1ae0b30759650",
        "block": 111083625,
        "ts": "2026-11-10T18:15:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf4d035b51b9511a64e0c927fa484dded73e3459e",
        "name": "Ample Robinhood USDG",
        "symbol": "aRHUSDG",
        "deployer": "0xf913a1d59d081972e0087c1e23513c06018e916c",
        "block": 111083610,
        "ts": "2026-11-10T18:15:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6ed10421b7e1a45b797a2e5fb4deb04953c3374f",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xd0dd43dc71b16b854690406de1a5d18335c5d15a",
        "block": 111083540,
        "ts": "2026-11-10T18:14:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xea53da3922e7c9ee13d7ca5211775adb61851269",
        "name": "AUTOPOLIS Awards",
        "symbol": "AUTOPOLIS",
        "deployer": "0x62c749fcff5ab757ea3010a919d1ae0b30759650",
        "block": 111083192,
        "ts": "2026-11-10T18:14:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7b0a2c9780d516be4a1b62d37e69676c42a9b770",
        "name": "Solar",
        "symbol": "SOLAR",
        "deployer": "0x3d58e42d3a920de4c1f71ee041c7ebb82ee23f49",
        "block": 111083137,
        "ts": "2026-11-10T18:14:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x745299bbe5ddab8be874757889d313bd7d750087",
        "name": "U.S. House Pussy",
        "symbol": "USHP",
        "deployer": "0x2bcb6d7b5b12f94b91441aa2cdce68e3d96877af",
        "block": 111082983,
        "ts": "2026-11-10T18:13:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfadf7557ed52f2a612a7ee2f68125af4ae6d8a24",
        "name": "Vethood",
        "symbol": "VET",
        "deployer": "0x69bd585d7124bcbbab0288d2f66442fc27dcb4c8",
        "block": 111082978,
        "ts": "2026-11-10T18:13:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5eabade6ea720fe6ba13b7575f5079869ce24e41",
        "name": "Ice Dog",
        "symbol": "ICED",
        "deployer": "0xd0dd43dc71b16b854690406de1a5d18335c5d15a",
        "block": 111082701,
        "ts": "2026-11-10T18:13:26.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x124cceb3a5456850a167e44f20fbb7846f4ebd45",
        "name": "Wrapped SoundHound AI • Robinhood Token",
        "symbol": "wSOUN",
        "deployer": "0x9efc87801ffb0b27766d6c568e3c0d76bd59d605",
        "block": 111082608,
        "ts": "2026-11-10T18:13:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4a35a5ec2a50a4d2957b2f2366e017f526cab318",
        "name": "Foundry Compute Dollar",
        "symbol": "USDF",
        "deployer": "0xf928736559804a96b1b41c21c9ff7338baed453e",
        "block": 111082141,
        "ts": "2026-11-10T18:12:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3c02085dc8abef1ef552520da95845183c4daa06",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xc03ce5a3a706cb7cce14119fb0fdbdbf5e855ca5",
        "block": 111081999,
        "ts": "2026-11-10T18:12:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x78f08362c8673fcd65f705981aac71ac46251e18",
        "name": "Jellyfish Coin",
        "symbol": "JELLYFISH",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 111081940,
        "ts": "2026-11-10T18:12:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd2d4ff358797b5a26827fc253b6c4c705dc6be36",
        "name": "Pppercolator",
        "symbol": "PPP",
        "deployer": "0xb07e36c69459536f95b820bba05fc0c607b6237d",
        "block": 111081875,
        "ts": "2026-11-10T18:12:03.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xb17cbb73d76b676450098b089b27a8bf4f38e0fd",
        "name": "APEX UTILITY",
        "symbol": "APEX",
        "deployer": "0x3c68ba0c5852a588f247440076228636211cb5b3",
        "block": 111081846,
        "ts": "2026-11-10T18:12:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbc2f6fed647e917fd60c8990f2c6b91f0c426f12",
        "name": "Ramses Volatile - CASHCAT/USDG",
        "symbol": "Volatile - CASHCAT/USDG",
        "deployer": "0x84d0f74d21a89f86b67e9a38d8559d0b4e10f12d",
        "block": 111081807,
        "ts": "2026-11-10T18:11:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x933e51d1063240f93e2a990a1ca79db853735b9c",
        "name": "Ramses Volatile - RAM/fBOMB on Robinhood💥",
        "symbol": "Volatile - RAM/fBOMB on Robinhood💥",
        "deployer": "0x84d0f74d21a89f86b67e9a38d8559d0b4e10f12d",
        "block": 111081807,
        "ts": "2026-11-10T18:11:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x28eac301ff97864f7f887a4fe4529f401a398045",
        "name": "Ramses Volatile - USDG/GFANG",
        "symbol": "Volatile - USDG/GFANG",
        "deployer": "0x84d0f74d21a89f86b67e9a38d8559d0b4e10f12d",
        "block": 111081807,
        "ts": "2026-11-10T18:11:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd8b66ac1a247db8f32ce0ea9770ce6966eb9f567",
        "name": "Ramses Volatile - r33/USDG",
        "symbol": "Volatile - r33/USDG",
        "deployer": "0x84d0f74d21a89f86b67e9a38d8559d0b4e10f12d",
        "block": 111081807,
        "ts": "2026-11-10T18:11:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x707d6eb5dc4bd3a7844c4f5c9a95233de7aa3204",
        "name": "Chop SURPLUS",
        "symbol": "chSURPLUS",
        "deployer": "0x9dda4b7034666185739bd2a48e54f628e698f5a6",
        "block": 111081733,
        "ts": "2026-11-10T18:11:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xef4f339e3a545a400ee1b2cd0d17817bc9c37908",
        "name": "One Share Cat",
        "symbol": "1SHARE",
        "deployer": "0x87fdeccd967817f1f56cc84ad66066a166d3b0df",
        "block": 111081650,
        "ts": "2026-11-10T18:11:41.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xb5e10a3ae1755ff9aed06e53f7ba80e2589c9f6a",
        "name": "Super Xero",
        "symbol": "XERO",
        "deployer": "0xb439ff2ae35597e049d7822c3a555693bc2cee26",
        "block": 111081363,
        "ts": "2026-11-10T18:11:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x65dc90cd3a0bcde967c8ae6019d6790b616e78f7",
        "name": "Longbow Frontier USDG",
        "symbol": "lbfrontUSDG",
        "deployer": "0x0015eb253cfa822e7190e21e90ee4091d379cdda",
        "block": 111081274,
        "ts": "2026-11-10T18:11:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x52492779ad7a54588c9f6849f5cae4b4745b9231",
        "name": "E.T.A",
        "symbol": "ETA",
        "deployer": "0xa41a0113c1f838df35f2943ad7d386460c0c36c9",
        "block": 111081226,
        "ts": "2026-11-10T18:10:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x757b0b691e17a61670866e9831f2df08a9bcc75e",
        "name": "test",
        "symbol": "tesv9",
        "deployer": "0x1a4c653beb3abe1a7333fc337f523d2b6c53ecac",
        "block": 111081200,
        "ts": "2026-11-10T18:10:55.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x8fe3a97c8cb90d868c1453333591e2438e12a8b7",
        "name": "Trial Xtreme",
        "symbol": "TRIAL",
        "deployer": "0xeb64d4f22d2e6ec4694bc3fe7827b3aa5a39139e",
        "block": 111081184,
        "ts": "2026-11-10T18:10:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1d11f0496982706c5e14a514d4e79f2e6bde4516",
        "name": "Trump Media & Technology Group • Robinhood Token",
        "symbol": "DJT",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 111080944,
        "ts": "2026-11-10T18:10:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9fc3e64c92b744829dfaec49fc79136aff7a582e",
        "name": "Sepia",
        "symbol": "SEPIA",
        "deployer": "0x5aca4ecd55772727f183131caf3478617ef28518",
        "block": 111080446,
        "ts": "2026-11-10T18:09:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x068428f6182fc791fab5e70a644a151245ceb410",
        "name": "YURI-KIRI",
        "symbol": "BredApeYuriClub",
        "deployer": "0xd6d61ef253a8740f9d5472965c794e164b5944dc",
        "block": 111080420,
        "ts": "2026-11-10T18:09:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x32cdbd713b32faa3a28a6e685c3e3778785baf0d",
        "name": "Pppercolator",
        "symbol": "PPP",
        "deployer": "0x0aece9b76afa98048780e411022834df14440388",
        "block": 111079863,
        "ts": "2026-11-10T18:08:37.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x5ccd2db99f4b2c199ea08da0debc67a737c3655e",
        "name": "music coin",
        "symbol": "MUSIG",
        "deployer": "0x6a32be9443c9872e66ad0fdd3505d0b7036f5326",
        "block": 111079848,
        "ts": "2026-11-10T18:08:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd55a309423e08d0f1d4b46b08defb6d201315ff8",
        "name": "Earn",
        "symbol": "EARN",
        "deployer": "0xb33fd3adf35fa3e9a3de673fa03722f0d52af839",
        "block": 111079775,
        "ts": "2026-11-10T18:08:28.000Z",
        "ts_exact": true,
        "direct": true
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
