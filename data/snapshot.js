/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-10T23:26:45.000Z",
    "opened_at": "2026-11-10T22:26:45.000Z",
    "window_hours": 1,
    "head_block": 111262422,
    "start_block": 111228714,
    "blocks_scanned": 33708,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 364,
    "unnamed_contracts": 14,
    "via_factory": 349,
    "no_receipt": 0,
    "candidates": 378,
    "mint_events": 21683,
    "deployers": 261,
    "roots": 437,
    "cleared_multiple": 270,
    "failed_gates": 268,
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
      "agent-zolva"
    ],
    "top": null,
    "rows": [
      {
        "root": "zolva",
        "launches": 19,
        "deployers": 19,
        "baseline_share": 0.0004,
        "multiple": 130.5,
        "state": "MERGED",
        "reason": "agent + zolva co-occur 100%, merged to agent-zolva"
      },
      {
        "root": "agent",
        "launches": 19,
        "deployers": 19,
        "baseline_share": 0.0068,
        "multiple": 7.7,
        "state": "MERGED",
        "reason": "agent + zolva co-occur 100%, merged to agent-zolva"
      },
      {
        "root": "uniswap",
        "launches": 30,
        "deployers": 25,
        "baseline_share": 0.0509,
        "multiple": 1.6,
        "state": "BELOW",
        "reason": "uniswap: 1.6x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 26,
        "deployers": 21,
        "baseline_share": 0.0424,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "uni: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "robinhood",
        "launches": 17,
        "deployers": 8,
        "baseline_share": 0.0513,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "robinhood: 0.9x over baseline < 6.0x required"
      },
      {
        "root": "cat",
        "launches": 11,
        "deployers": 8,
        "baseline_share": 0.013,
        "multiple": 2.3,
        "state": "BELOW",
        "reason": "cat: 2.3x over baseline < 6.0x required"
      },
      {
        "root": "usdg",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0203,
        "multiple": 1.4,
        "state": "BELOW",
        "reason": "usdg: 1.4x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0167,
        "multiple": 1.3,
        "state": "BELOW",
        "reason": "positions: 1.3x over baseline < 6.0x required"
      },
      {
        "root": "hood",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0108,
        "multiple": 1.5,
        "state": "BELOW",
        "reason": "hood: 1.5x over baseline < 6.0x required"
      },
      {
        "root": "nft",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0201,
        "multiple": 0.8,
        "state": "BELOW",
        "reason": "nft: 0.8x over baseline < 6.0x required"
      },
      {
        "root": "elyra",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 34.3,
        "state": "THIN",
        "reason": "elyra: 5 deployers < 6 required"
      },
      {
        "root": "inference",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 34.3,
        "state": "THIN",
        "reason": "inference: 5 deployers < 6 required"
      },
      {
        "root": "rooq",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 34.3,
        "state": "THIN",
        "reason": "rooq: 5 deployers < 6 required"
      },
      {
        "root": "pool",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 27.5,
        "state": "THIN",
        "reason": "pool: 4 launches < 5 required"
      },
      {
        "root": "cashcat",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0006,
        "multiple": 18.3,
        "state": "THIN",
        "reason": "cashcat: 4 launches < 5 required"
      },
      {
        "root": "cash",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0021,
        "multiple": 5.2,
        "state": "BELOW",
        "reason": "cash: 5.2x over baseline < 6.0x required"
      },
      {
        "root": "flock",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0032,
        "multiple": 3.4,
        "state": "BELOW",
        "reason": "flock: 3.4x over baseline < 6.0x required"
      },
      {
        "root": "chop",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0041,
        "multiple": 2.7,
        "state": "BELOW",
        "reason": "chop: 2.7x over baseline < 6.0x required"
      },
      {
        "root": "giga",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0041,
        "multiple": 2.7,
        "state": "BELOW",
        "reason": "giga: 2.7x over baseline < 6.0x required"
      },
      {
        "root": "layerbank",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0053,
        "multiple": 2.1,
        "state": "BELOW",
        "reason": "layerbank: 2.1x over baseline < 6.0x required"
      },
      {
        "root": "amm",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0062,
        "multiple": 1.8,
        "state": "BELOW",
        "reason": "amm: 1.8x over baseline < 6.0x required"
      },
      {
        "root": "volatile",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0083,
        "multiple": 1.3,
        "state": "BELOW",
        "reason": "volatile: 1.3x over baseline < 6.0x required"
      },
      {
        "root": "delta",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.6,
        "state": "THIN",
        "reason": "delta: 3 launches < 5 required"
      },
      {
        "root": "kaskad",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.001,
        "multiple": 8.2,
        "state": "THIN",
        "reason": "kaskad: 3 launches < 5 required"
      },
      {
        "root": "share",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.001,
        "multiple": 8.2,
        "state": "THIN",
        "reason": "share: 3 launches < 5 required"
      },
      {
        "root": "nvidia",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0019,
        "multiple": 4.3,
        "state": "BELOW",
        "reason": "nvidia: 4.3x over baseline < 6.0x required"
      },
      {
        "root": "pepe",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0021,
        "multiple": 3.9,
        "state": "BELOW",
        "reason": "pepe: 3.9x over baseline < 6.0x required"
      },
      {
        "root": "nvda",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0024,
        "multiple": 3.4,
        "state": "BELOW",
        "reason": "nvda: 3.4x over baseline < 6.0x required"
      },
      {
        "root": "variable",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0024,
        "multiple": 3.4,
        "state": "BELOW",
        "reason": "variable: 3.4x over baseline < 6.0x required"
      },
      {
        "root": "brownfi",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0025,
        "multiple": 3.3,
        "state": "BELOW",
        "reason": "brownfi: 3.3x over baseline < 6.0x required"
      },
      {
        "root": "bf",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0027,
        "multiple": 3.1,
        "state": "BELOW",
        "reason": "bf: 3.1x over baseline < 6.0x required"
      },
      {
        "root": "lend",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0027,
        "multiple": 3.1,
        "state": "BELOW",
        "reason": "lend: 3.1x over baseline < 6.0x required"
      },
      {
        "root": "fund",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0029,
        "multiple": 2.8,
        "state": "BELOW",
        "reason": "fund: 2.8x over baseline < 6.0x required"
      },
      {
        "root": "pos",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0044,
        "multiple": 1.9,
        "state": "BELOW",
        "reason": "pos: 1.9x over baseline < 6.0x required"
      },
      {
        "root": "staked",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0069,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "staked: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "weth",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0073,
        "multiple": 1.1,
        "state": "BELOW",
        "reason": "weth: 1.1x over baseline < 6.0x required"
      },
      {
        "root": "donuts",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 13.7,
        "state": "THIN",
        "reason": "donuts: 2 launches < 5 required"
      },
      {
        "root": "eggs",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 13.7,
        "state": "THIN",
        "reason": "eggs: 2 launches < 5 required"
      },
      {
        "root": "everyone",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 13.7,
        "state": "THIN",
        "reason": "everyone: 2 launches < 5 required"
      },
      {
        "root": "longbow",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 13.7,
        "state": "THIN",
        "reason": "longbow: 2 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0xfa8bd8ff1460996d124866626dd8e97caff2f2d2",
        "name": "Kaskad Robinhood wtWMT",
        "symbol": "aRhwtWMT",
        "deployer": "0x89a07d251bb04206bd98637486795332bc89f468",
        "block": 111262216,
        "ts": "2026-11-10T23:26:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe5529a921225f497f23b43e5b891b98f3a97535f",
        "name": "Laser Cat",
        "symbol": "LZRC",
        "deployer": "0xf0867a395bd4962d21d7a0b2f7e66134ea741043",
        "block": 111262165,
        "ts": "2026-11-10T23:26:16.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x0a6d35569061802a50e051d2a38d39c24ab85ed8",
        "name": "mihao",
        "symbol": "NIHAOCAT",
        "deployer": "0xcb5f59cccbf0eb4843602f4f6e691a12c33d3041",
        "block": 111262126,
        "ts": "2026-11-10T23:26:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2d6292b59afd65b0a23889c2fd0ea94a77867777",
        "name": "ni hao inu",
        "symbol": "NINU",
        "deployer": "0x4412cfb4de7c089086fc43306218f8f2f1811a22",
        "block": 111261521,
        "ts": "2026-11-10T23:25:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfff071b77c3a711db411e16058ede07cbe43614f",
        "name": "KEYFO",
        "symbol": "KEYFO",
        "deployer": "0x3c96be8751561824901da3ff9d9b9597404b5591",
        "block": 111261150,
        "ts": "2026-11-10T23:24:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3b7a8deb3f7c4848e6d54965f9b7bd4e67b868db",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x42f5f67bc468872e2c761f374ca6f0cc14095b50",
        "block": 111261110,
        "ts": "2026-11-10T23:24:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xffa4b31fc68a37c8fc1fdccb50d4004a8057c6ee",
        "name": "Kaskad Robinhood Variable Debt USDG",
        "symbol": "variableDebtRhUSDG",
        "deployer": "0x89a07d251bb04206bd98637486795332bc89f468",
        "block": 111261070,
        "ts": "2026-11-10T23:24:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5bb4128aa616e5d1f19140cb9f0acc1ad5d8f145",
        "name": "Glazzy Dog",
        "symbol": "GDOG",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 111261014,
        "ts": "2026-11-10T23:24:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xccd425ee5822dfa674b493b4609ca6112e86a138",
        "name": "Test1",
        "symbol": "VVVVVV",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 111260983,
        "ts": "2026-11-10T23:24:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x750fa02232ef3b42baa1e62385a875fac4c60467",
        "name": "Yield Fields",
        "symbol": "YIELD",
        "deployer": "0x33351dd1526c63e00571726a4e9dcbf0e879493f",
        "block": 111260981,
        "ts": "2026-11-10T23:24:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf0ac8f401f5a70efdf069a50969638b9b31883dd",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x1d53960165188ee0c74a5705ee6307fea517c613",
        "block": 111260955,
        "ts": "2026-11-10T23:24:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc2eeb5d7eafcdd2fa2ac774b3e3035b0ead0f369",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xf62283d5bb2dd9bf646d137bcf9787303e9e2324",
        "block": 111260805,
        "ts": "2026-11-10T23:23:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf5fa3597a782e50e7dda821e8b3759188b8830cd",
        "name": "GLAZMEDADDY",
        "symbol": "GLAZDY",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 111260669,
        "ts": "2026-11-10T23:23:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8a17d94a5b93c52848f919e0eb978b68c0fdf864",
        "name": "Agesic",
        "symbol": "AGESIC",
        "deployer": "0x7a0453754b4d4f6713fffbc5cc20c3a44b62f1e5",
        "block": 111260602,
        "ts": "2026-11-10T23:23:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe0ad9abea2473e0b766d316d332772ebd70fffa7",
        "name": "AI-Mafia-FUND",
        "symbol": "AIFUND",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 111260486,
        "ts": "2026-11-10T23:23:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x19e2b52fc1607786d0645e4ef21a2bd45ad71943",
        "name": "WEN_VLAD?",
        "symbol": "WEN",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 111260126,
        "ts": "2026-11-10T23:22:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x442d614cdd3d3a005e6804035baf4cc967fc0087",
        "name": "Hekatos",
        "symbol": "HEKATOS",
        "deployer": "0x2bcb6d7b5b12f94b91441aa2cdce68e3d96877af",
        "block": 111260116,
        "ts": "2026-11-10T23:22:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x04abe047fa7c970f70f6294e83a776d3097aa79b",
        "name": "Rocket Hands",
        "symbol": "RCKH",
        "deployer": "0xf62283d5bb2dd9bf646d137bcf9787303e9e2324",
        "block": 111259974,
        "ts": "2026-11-10T23:22:25.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x5c689324312fc8ef13b491e32774b4424aaf4e79",
        "name": "test",
        "symbol": "TEST",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 111259706,
        "ts": "2026-11-10T23:21:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x78ec2da07700e8c220e3afb724b4534d1335b23d",
        "name": "Kaskad Robinhood NVDA",
        "symbol": "aRhNVDA",
        "deployer": "0x89a07d251bb04206bd98637486795332bc89f468",
        "block": 111259369,
        "ts": "2026-11-10T23:21:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xccb7883f33ed8bd828a5439c2ae8b6ea0df807ea",
        "name": "Cyfrin Audit",
        "symbol": "CYFRIN",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 111259356,
        "ts": "2026-11-10T23:21:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6349b59738e4a931ec76042ae92c90cd55f91ecd",
        "name": "Zolva Agent",
        "symbol": "ZOLVA",
        "deployer": "0x9290b22c6f5269a602dee986a2ecd8a31a58890e",
        "block": 111259345,
        "ts": "2026-11-10T23:21:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf21843e34cbea42485f2e5c4cc01f43620838fce",
        "name": "purrchainsiege_v14",
        "symbol": "PURR",
        "deployer": "0xee758fe4f59db3f2d64197ad601236d407ed08bf",
        "block": 111259326,
        "ts": "2026-11-10T23:21:17.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x3db744585f892dc77750b2f4376b4fc1dd66d510",
        "name": "Pyramid",
        "symbol": "PYR",
        "deployer": "0x9d915ceb820b5243d4a609f149799b540ecd5c67",
        "block": 111259145,
        "ts": "2026-11-10T23:20:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x401ede80b47dbf25c3196ff84343acc315251e41",
        "name": "ok",
        "symbol": "OK",
        "deployer": "0x855151d5ac201e0931805d8bba04400176036288",
        "block": 111259082,
        "ts": "2026-11-10T23:20:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf8e0ab443098c0738489b5baffbd32a1341f2289",
        "name": "Borro USDG",
        "symbol": "bUSDG",
        "deployer": "0x3a17bfff7c6fb05f8c49d3d7181849e531026896",
        "block": 111258680,
        "ts": "2026-11-10T23:20:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfd36b8bb554fbced36adf35c6e871c0ebb95e1b8",
        "name": "Elysium Genesis",
        "symbol": "Elysiumgenesis",
        "deployer": "0x331d9a049d496385998067abf6cbb6371c8d2466",
        "block": 111258642,
        "ts": "2026-11-10T23:20:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd881830feafb6ffc3a1d5ca26ed73ad02cdb9a42",
        "name": "Crack",
        "symbol": "CRACK",
        "deployer": "0xcb3ccc1c844a209e5ccb185012fe28a9c57814f3",
        "block": 111258595,
        "ts": "2026-11-10T23:19:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf74599f28aa8ea46d86041c5a1e22464cbdf590c",
        "name": "SmartRH",
        "symbol": "SRH",
        "deployer": "0x38b43067f535aad736c0fcc240e3e26e7a817915",
        "block": 111258576,
        "ts": "2026-11-10T23:19:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcbcd71e5d4894a64c146ba5af207d462c1a11036",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x8cdc5e5f61ac325d7662a54205536bd7cb91fde7",
        "block": 111258460,
        "ts": "2026-11-10T23:19:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x707d6eb5dc4bd3a7844c4f5c9a95233de7aa3204",
        "name": "Chop SURPLUS",
        "symbol": "chSURPLUS",
        "deployer": "0x659933048ed5f8da1556c4a6aea936312c328b62",
        "block": 111258355,
        "ts": "2026-11-10T23:19:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x95effc836fdf19e9cd2d6e2889c58d6bdf13c4e8",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x8964f5f325eab46fbef894a25da44632fd8e142c",
        "block": 111258226,
        "ts": "2026-11-10T23:19:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x14e4586b268f1431e01673ec7e9fa17141bc0730",
        "name": "Wrapped Trump Media & Technology Group • Robinhood Token",
        "symbol": "wDJT",
        "deployer": "0x9efc87801ffb0b27766d6c568e3c0d76bd59d605",
        "block": 111258193,
        "ts": "2026-11-10T23:19:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa45fd576f48f163336f442d59b40f7d5ad7a08fa",
        "name": "Pulse",
        "symbol": "PULSE",
        "deployer": "0x8964f5f325eab46fbef894a25da44632fd8e142c",
        "block": 111257906,
        "ts": "2026-11-10T23:18:44.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x5b69f1e127cb8cbe0b3880e8c1411185ae719e37",
        "name": "Heeshilio",
        "symbol": "HEESH",
        "deployer": "0xfa322cfea4ede2a06e527f54f8273d36831a40de",
        "block": 111257771,
        "ts": "2026-11-10T23:18:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb2ddb16194c0b8838d287ae0ad55c807a4d69001",
        "name": "Rich Duck",
        "symbol": "RDUC",
        "deployer": "0x8cdc5e5f61ac325d7662a54205536bd7cb91fde7",
        "block": 111257626,
        "ts": "2026-11-10T23:18:12.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x154ad60c39573589a2d1f7cb6869fff9a765769c",
        "name": "Delta Pool Share",
        "symbol": "DELTA-LP",
        "deployer": "0x9cacc286f404fc73284e387df7e83208c9476709",
        "block": 111257606,
        "ts": "2026-11-10T23:18:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x37788ff0c1d4e45a7fe06bc7e71e0cc00121d0a8",
        "name": "Purinta USDG",
        "symbol": "PurintaUSDG",
        "deployer": "0x9f3cbe8145050c8fcad2c3168706c7ec0c48fa3d",
        "block": 111257565,
        "ts": "2026-11-10T23:18:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5ab1d3a7add04d5173c6088beb2a953db9272b4c",
        "name": "Zolva Agent",
        "symbol": "ZOLVA",
        "deployer": "0x5e110615f61dd84ab2f062d05a1a2a73a3f3b2c4",
        "block": 111257552,
        "ts": "2026-11-10T23:18:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xac00d7bdfe3d9243c356e6efd68cb0fabdf4e97e",
        "name": "Delta Pool Share",
        "symbol": "DELTA-LP",
        "deployer": "0x9cacc286f404fc73284e387df7e83208c9476709",
        "block": 111257293,
        "ts": "2026-11-10T23:17:37.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
