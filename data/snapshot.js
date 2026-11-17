/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-17T19:45:32.000Z",
    "opened_at": "2026-11-17T18:45:32.000Z",
    "window_hours": 1,
    "head_block": 116833448,
    "start_block": 116798833,
    "blocks_scanned": 34615,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 372,
    "unnamed_contracts": 5,
    "via_factory": 344,
    "no_receipt": 0,
    "candidates": 377,
    "mint_events": 13898,
    "deployers": 242,
    "roots": 499,
    "cleared_multiple": 305,
    "failed_gates": 301,
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
      "grand-theft-auto",
      "gta"
    ],
    "top": {
      "root": "gta",
      "launches": 6,
      "deployers": 6,
      "baseline_share": 0.0016,
      "multiple": 10.1,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "gta",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0016,
        "multiple": 10.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "grand",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0012,
        "multiple": 15.7,
        "state": "MERGED",
        "reason": "grand + theft co-occur 100%, merged to grand-theft-auto"
      },
      {
        "root": "theft",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0013,
        "multiple": 14.5,
        "state": "MERGED",
        "reason": "grand + theft co-occur 100%, merged to grand-theft-auto"
      },
      {
        "root": "auto",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0015,
        "multiple": 10.8,
        "state": "MERGED",
        "reason": "grand + theft co-occur 100%, merged to grand-theft-auto"
      },
      {
        "root": "memelink",
        "launches": 19,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 127.7,
        "state": "THIN",
        "reason": "memelink: 5 deployers < 6 required"
      },
      {
        "root": "robinhood",
        "launches": 18,
        "deployers": 5,
        "baseline_share": 0.0513,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "robinhood: 0.9x over baseline < 6.0x required"
      },
      {
        "root": "uniswap",
        "launches": 15,
        "deployers": 10,
        "baseline_share": 0.0509,
        "multiple": 0.8,
        "state": "BELOW",
        "reason": "uniswap: 0.8x over baseline < 6.0x required"
      },
      {
        "root": "usdg",
        "launches": 13,
        "deployers": 10,
        "baseline_share": 0.0203,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "usdg: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 13,
        "deployers": 8,
        "baseline_share": 0.0424,
        "multiple": 0.8,
        "state": "BELOW",
        "reason": "uni: 0.8x over baseline < 6.0x required"
      },
      {
        "root": "amm",
        "launches": 9,
        "deployers": 3,
        "baseline_share": 0.0062,
        "multiple": 3.9,
        "state": "BELOW",
        "reason": "amm: 3.9x over baseline < 6.0x required"
      },
      {
        "root": "volatile",
        "launches": 9,
        "deployers": 3,
        "baseline_share": 0.0083,
        "multiple": 2.9,
        "state": "BELOW",
        "reason": "volatile: 2.9x over baseline < 6.0x required"
      },
      {
        "root": "cat",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.013,
        "multiple": 1.9,
        "state": "BELOW",
        "reason": "cat: 1.9x over baseline < 6.0x required"
      },
      {
        "root": "giga",
        "launches": 8,
        "deployers": 3,
        "baseline_share": 0.0041,
        "multiple": 5.2,
        "state": "BELOW",
        "reason": "giga: 5.2x over baseline < 6.0x required"
      },
      {
        "root": "aero",
        "launches": 7,
        "deployers": 4,
        "baseline_share": 0.0056,
        "multiple": 3.4,
        "state": "BELOW",
        "reason": "aero: 3.4x over baseline < 6.0x required"
      },
      {
        "root": "cool",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 33.6,
        "state": "THIN",
        "reason": "cool: 5 deployers < 6 required"
      },
      {
        "root": "orbit",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0008,
        "multiple": 16.8,
        "state": "THIN",
        "reason": "orbit: 5 deployers < 6 required"
      },
      {
        "root": "brownfi",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0025,
        "multiple": 5.4,
        "state": "BELOW",
        "reason": "brownfi: 5.4x over baseline < 6.0x required"
      },
      {
        "root": "bf",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0027,
        "multiple": 5,
        "state": "BELOW",
        "reason": "bf: 5.0x over baseline < 6.0x required"
      },
      {
        "root": "bucket",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0036,
        "multiple": 3.7,
        "state": "BELOW",
        "reason": "bucket: 3.7x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0167,
        "multiple": 0.8,
        "state": "BELOW",
        "reason": "positions: 0.8x over baseline < 6.0x required"
      },
      {
        "root": "card",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 26.9,
        "state": "THIN",
        "reason": "card: 4 launches < 5 required"
      },
      {
        "root": "coolcat",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 26.9,
        "state": "THIN",
        "reason": "coolcat: 4 launches < 5 required"
      },
      {
        "root": "fullrange",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 26.9,
        "state": "THIN",
        "reason": "fullrange: 4 launches < 5 required"
      },
      {
        "root": "gtai",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 26.9,
        "state": "THIN",
        "reason": "gtai: 4 launches < 5 required"
      },
      {
        "root": "trust",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0036,
        "multiple": 3,
        "state": "BELOW",
        "reason": "trust: 3.0x over baseline < 6.0x required"
      },
      {
        "root": "layerbank",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0053,
        "multiple": 2,
        "state": "BELOW",
        "reason": "layerbank: 2.0x over baseline < 6.0x required"
      },
      {
        "root": "cow",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0072,
        "multiple": 1.5,
        "state": "BELOW",
        "reason": "cow: 1.5x over baseline < 6.0x required"
      },
      {
        "root": "nft",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0201,
        "multiple": 0.5,
        "state": "BELOW",
        "reason": "nft: 0.5x over baseline < 6.0x required"
      },
      {
        "root": "cabal",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.2,
        "state": "THIN",
        "reason": "cabal: 3 launches < 5 required"
      },
      {
        "root": "eggs",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.2,
        "state": "THIN",
        "reason": "eggs: 3 launches < 5 required"
      },
      {
        "root": "gp",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.2,
        "state": "THIN",
        "reason": "gp: 3 launches < 5 required"
      },
      {
        "root": "jessica",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.2,
        "state": "THIN",
        "reason": "jessica: 3 launches < 5 required"
      },
      {
        "root": "vaj",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.2,
        "state": "THIN",
        "reason": "vaj: 3 launches < 5 required"
      },
      {
        "root": "amc",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.001,
        "multiple": 8.1,
        "state": "THIN",
        "reason": "amc: 3 launches < 5 required"
      },
      {
        "root": "spdr",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0018,
        "multiple": 4.5,
        "state": "BELOW",
        "reason": "spdr: 4.5x over baseline < 6.0x required"
      },
      {
        "root": "states",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0025,
        "multiple": 3.2,
        "state": "BELOW",
        "reason": "states: 3.2x over baseline < 6.0x required"
      },
      {
        "root": "united",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0033,
        "multiple": 2.4,
        "state": "BELOW",
        "reason": "united: 2.4x over baseline < 6.0x required"
      },
      {
        "root": "prd",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0048,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "prd: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "ctr",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0049,
        "multiple": 1.6,
        "state": "BELOW",
        "reason": "ctr: 1.6x over baseline < 6.0x required"
      },
      {
        "root": "counterparty",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0055,
        "multiple": 1.5,
        "state": "BELOW",
        "reason": "counterparty: 1.5x over baseline < 6.0x required"
      }
    ],
    "recent": [
      {
        "address": "0x500855ca9f281a1383482399addd1651269bb866",
        "name": "Called It",
        "symbol": "CALLED",
        "deployer": "0x0527425cdd726136bf0773c4178238833ea56b44",
        "block": 116833386,
        "ts": "2026-11-17T19:45:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc18195e3bfc449d4a52a91b4804cbb9f9c080926",
        "name": "Predictor-a7a56dbc",
        "symbol": "PRD-a7a56dbc",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 116833347,
        "ts": "2026-11-17T19:45:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5be1b3979843f5f96432e6004633dacbad20e2f4",
        "name": "Counterparty-a7a56dbc",
        "symbol": "CTR-a7a56dbc",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 116833347,
        "ts": "2026-11-17T19:45:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3db744585f892dc77750b2f4376b4fc1dd66d510",
        "name": "Pyramid",
        "symbol": "PYR",
        "deployer": "0xa6614e006c2a40ce4933a98e9d57cea09ea47c02",
        "block": 116833325,
        "ts": "2026-11-17T19:45:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc65f3aa0d293e594129e77cba4d1948247aa6043",
        "name": "Giga Volatile AMM - evaUSDC/fBOMB",
        "symbol": "GIGA-vAMM-evaUSDC/fBOMB",
        "deployer": "0xfdda1c96426f39e55cbbc9d6d6b66442e4e8eefe",
        "block": 116833076,
        "ts": "2026-11-17T19:44:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x46ebd5fce8583b98fe1c218d4b0d3f4f9f951fe8",
        "name": "Giga Volatile AMM - MONEY/fBOMB",
        "symbol": "GIGA-vAMM-MONEY/fBOMB",
        "deployer": "0xfdda1c96426f39e55cbbc9d6d6b66442e4e8eefe",
        "block": 116833063,
        "ts": "2026-11-17T19:44:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9b2d9988ef047b76d048a839305e5f9c1d10cb73",
        "name": "HOOD CODES",
        "symbol": "HOODC",
        "deployer": "0xfd1a4564c0271d5000ea46c3a8ad4dd6352493ff",
        "block": 116833049,
        "ts": "2026-11-17T19:44:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa40687ce76b1a488f3adde921c7f59273acc7a98",
        "name": "Giga Volatile AMM - fBOMB on Robinhood💥/RVH",
        "symbol": "GIGA-vAMM-fBOMB on Robinhood💥/RVH",
        "deployer": "0xfdda1c96426f39e55cbbc9d6d6b66442e4e8eefe",
        "block": 116833039,
        "ts": "2026-11-17T19:44:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x54da163942726883b6ef8ee509e60c18bbcbbe29",
        "name": "Giga Volatile AMM - GIGA/USDG",
        "symbol": "GIGA-vAMM-GIGA/USDG",
        "deployer": "0xfdda1c96426f39e55cbbc9d6d6b66442e4e8eefe",
        "block": 116833025,
        "ts": "2026-11-17T19:44:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa2d69bb3f8b8301d60da74fa91980737cdd0941c",
        "name": "Giga Volatile AMM - USDG/fBOMB on Robinhood💥",
        "symbol": "GIGA-vAMM-USDG/fBOMB on Robinhood💥",
        "deployer": "0xfdda1c96426f39e55cbbc9d6d6b66442e4e8eefe",
        "block": 116833017,
        "ts": "2026-11-17T19:44:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x555d770f5ccf2d2ad1b67ff11519698fffa24693",
        "name": "Giga Volatile AMM - WETH/RVH",
        "symbol": "GIGA-vAMM-WETH/RVH",
        "deployer": "0xfdda1c96426f39e55cbbc9d6d6b66442e4e8eefe",
        "block": 116833003,
        "ts": "2026-11-17T19:44:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9deab6d5450205b48ee2caba352ce26132b14ba1",
        "name": "Wrapped United States Oil Fund • Robinhood Token",
        "symbol": "wUSO",
        "deployer": "0x9efc87801ffb0b27766d6c568e3c0d76bd59d605",
        "block": 116832979,
        "ts": "2026-11-17T19:44:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x83ed5903ae47a476a645f0a4526035615ede6bc1",
        "name": "Get Money",
        "symbol": "GM",
        "deployer": "0xfab6bad6fcdf5d26a21cbaf6aa4cffc9bfe863aa",
        "block": 116832804,
        "ts": "2026-11-17T19:44:26.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x97bff719a833b331781a0372eb67b5d25d1c4387",
        "name": "Portlift",
        "symbol": "PLIFT",
        "deployer": "0x2d65d26ea6f749e074b17857dd2ed1cd8d596571",
        "block": 116832538,
        "ts": "2026-11-17T19:43:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc7c987b4297740eeb1dc4c12353dc150832441dc",
        "name": "Plenum",
        "symbol": "PLENUM",
        "deployer": "0x006af74237d434ba6e4f45f696ef4004c0e234ae",
        "block": 116832446,
        "ts": "2026-11-17T19:43:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3e2a2edb44b11856e21aaf09b9a15db999a0ccff",
        "name": "Peter Bucket",
        "symbol": "bPeter",
        "deployer": "0x2ccc152ad68419f777531e6a40a52325e2a80ee2",
        "block": 116832389,
        "ts": "2026-11-17T19:43:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5fc5360d0400a0fd4f2af552add042d716f1d168",
        "name": "Global Dollar",
        "symbol": "USDG",
        "deployer": "0xe93685f3bba03016f02bd1828badd6195988d950",
        "block": 116832195,
        "ts": "2026-11-17T19:43:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9aee0d7438b177b537d0a948c21d2e3287c31111",
        "name": "Clover Family",
        "symbol": "CLOVER",
        "deployer": "0xcf3dd88face430592262b38b8a88b917f2941888",
        "block": 116831933,
        "ts": "2026-11-17T19:42:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdbc79c20552991172e9055e002fc8051ab64db10",
        "name": "Vexi-Protocol",
        "symbol": "VEXI",
        "deployer": "0xb754bb3ffe7de094e87515a98fd44a0aad4f4703",
        "block": 116831901,
        "ts": "2026-11-17T19:42:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x82f128a02334a36b8a5ae35a49b79111d05c0087",
        "name": "Looksee",
        "symbol": "LOOK",
        "deployer": "0xd4875af0ae4491868c1ad20c752232a6b54a3568",
        "block": 116831707,
        "ts": "2026-11-17T19:42:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x50bb8db7a7ede9849522ff60dffbd94d20a54780",
        "name": "Kant",
        "symbol": "KANT",
        "deployer": "0xb11c4b588ee5f08c0731469ab1639f819700a2d4",
        "block": 116831586,
        "ts": "2026-11-17T19:42:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x32212590550406bc9b65efa0fe08e9d67457783d",
        "name": "bruv",
        "symbol": "BRUV",
        "deployer": "0x42656e79aab69dfdaeaabbef87cd6b60840a9cf4",
        "block": 116831134,
        "ts": "2026-11-17T19:41:31.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x5d934dcf4b193594869d145252b4978572950254",
        "name": "bruv",
        "symbol": "BRUV",
        "deployer": "0x780b402f3497f43b540945f391265b9c04194bf3",
        "block": 116830974,
        "ts": "2026-11-17T19:41:15.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xb83a91e4ee80b68ebf9abc3186f8d8c91acfb603",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x84a43b5b45df8e03b9c7a23d59d945fede1838f5",
        "block": 116830687,
        "ts": "2026-11-17T19:40:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9727ecc1479e5bf50afcff9bb46c47dae75c3071",
        "name": "KGDS",
        "symbol": "KGDS",
        "deployer": "0x84a43b5b45df8e03b9c7a23d59d945fede1838f5",
        "block": 116830679,
        "ts": "2026-11-17T19:40:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc7096a0eacfc8601617ad05c11497cfd2d4a1e18",
        "name": "Pixie-Paw",
        "symbol": "PIXIEPAW",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 116830563,
        "ts": "2026-11-17T19:40:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x621d6d21de13d0af8e6b89abaf6f2008dbb13350",
        "name": "Lacuna",
        "symbol": "LACUNA",
        "deployer": "0xf296549e660f038f7b2bddfd1e5b3e61f70028d0",
        "block": 116830325,
        "ts": "2026-11-17T19:40:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5b20c9d06d759ad395e2d614ab3fbc86f317e13d",
        "name": "Chop RAETO",
        "symbol": "chRAETO",
        "deployer": "0x9dda4b7034666185739bd2a48e54f628e698f5a6",
        "block": 116829961,
        "ts": "2026-11-17T19:39:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xff080c8ce2e5feadaca0da81314ae59d232d4afd",
        "name": "Micron Technology • Robinhood Token",
        "symbol": "MU",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 116829918,
        "ts": "2026-11-17T19:39:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9e02f4e267fcef8c1dc89f148529d20f1ad040a1",
        "name": "Piggy Banks USDG Sleeve",
        "symbol": "PIGGY-USDG",
        "deployer": "0xab00e78c25713f0aaba9ce4525c101055f045d25",
        "block": 116829882,
        "ts": "2026-11-17T19:39:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbf33661be70528edf569f917fc71369ea1322118",
        "name": "DEBUGZ by Unvault",
        "symbol": "DEBUGZ",
        "deployer": "0x675086947a77ded6e615104fb39bf7a5a3a6da63",
        "block": 116829745,
        "ts": "2026-11-17T19:39:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4533d55b88bb957cfd682cf4265e20e8a64f4479",
        "name": "BrownFi V3",
        "symbol": "BF-V3",
        "deployer": "0x36b854931a60d7d9c0820648a67e25dd39390440",
        "block": 116829666,
        "ts": "2026-11-17T19:38:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x117157032fbb78249b9ae24eb288c42a38194949",
        "name": "Hood Drakes",
        "symbol": "DrakesRH",
        "deployer": "0x0da374929e57293ae323f202296eb58f83ca8e70",
        "block": 116829525,
        "ts": "2026-11-17T19:38:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9e04a1991c0a828ca5aee91b9c9a276868e53d5d",
        "name": "Cow Aero AMD-USDG",
        "symbol": "cowAeroAMD-USDG",
        "deployer": "0x040b924d562c75692a62de70d3b1af8ee38856dd",
        "block": 116829487,
        "ts": "2026-11-17T19:38:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1cca680dc620737ef43b0ddcfc529d0f1e3bec01",
        "name": "Reward Cow Aero AMD-USDG",
        "symbol": "rcowAeroAMD-USDG",
        "deployer": "0x040b924d562c75692a62de70d3b1af8ee38856dd",
        "block": 116829487,
        "ts": "2026-11-17T19:38:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x53dbb65d50efa9d84bcbaa3ddd18b3c962e3daa6",
        "name": "Moo Beefy Aero AMD-USDG",
        "symbol": "mooBeefyAeroAMD-USDG",
        "deployer": "0x040b924d562c75692a62de70d3b1af8ee38856dd",
        "block": 116829487,
        "ts": "2026-11-17T19:38:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xad221259d4a1f2d7376dc1012c561bc86640f009",
        "name": "Meridian USD",
        "symbol": "merUSD",
        "deployer": "0xe9aadc3e08d712d341daa757caa752b7f6452195",
        "block": 116829477,
        "ts": "2026-11-17T19:38:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0f34f7f7b558f43a821af4181f0f8e5bc4b74892",
        "name": "Arcadia Staked Metadex03 CL Positions",
        "symbol": "aSMDEXCLP",
        "deployer": "0x23f62fcfb261d3f8dc7f2c1da34206a27e18544f",
        "block": 116829341,
        "ts": "2026-11-17T19:38:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc0f012c22afcb1a48de6c12f97cf11e1960e7777",
        "name": "GTA6",
        "symbol": "GTA6",
        "deployer": "0x1a7aae730775486bcf259bbb7a89fdc3d0c4812b",
        "block": 116829254,
        "ts": "2026-11-17T19:38:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3164dfd6de3dfb61c3decb4539e4a2d75d5bdd95",
        "name": "Official Grand Theft Auto VI",
        "symbol": "GTAVI",
        "deployer": "0x52c6e90a0928df4d6e4a6164ee0c7851144b1454",
        "block": 116829192,
        "ts": "2026-11-17T19:38:09.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
