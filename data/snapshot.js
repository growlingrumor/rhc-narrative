/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-07T22:51:15.000Z",
    "opened_at": "2026-11-07T21:51:15.000Z",
    "window_hours": 1,
    "head_block": 108764498,
    "start_block": 108730399,
    "blocks_scanned": 34099,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 381,
    "unnamed_contracts": 12,
    "via_factory": 361,
    "no_receipt": 0,
    "candidates": 393,
    "mint_events": 21012,
    "deployers": 246,
    "roots": 470,
    "cleared_multiple": 298,
    "failed_gates": 296,
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
      "adyros",
      "rocco"
    ],
    "top": {
      "root": "adyros",
      "launches": 10,
      "deployers": 7,
      "baseline_share": 0.0004,
      "multiple": 65.6,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "adyros",
        "launches": 10,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 65.6,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "rocco",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 59.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 12,
        "deployers": 12,
        "baseline_share": 0.0509,
        "multiple": 0.6,
        "state": "BELOW",
        "reason": "uniswap: 0.6x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0424,
        "multiple": 0.6,
        "state": "BELOW",
        "reason": "uni: 0.6x over baseline < 6.0x required"
      },
      {
        "root": "aero",
        "launches": 7,
        "deployers": 5,
        "baseline_share": 0.0056,
        "multiple": 3.3,
        "state": "BELOW",
        "reason": "aero: 3.3x over baseline < 6.0x required"
      },
      {
        "root": "ai",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0081,
        "multiple": 2.3,
        "state": "BELOW",
        "reason": "ai: 2.3x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 7,
        "deployers": 6,
        "baseline_share": 0.0167,
        "multiple": 1.1,
        "state": "BELOW",
        "reason": "positions: 1.1x over baseline < 6.0x required"
      },
      {
        "root": "usdg",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0203,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "usdg: 0.9x over baseline < 6.0x required"
      },
      {
        "root": "prd",
        "launches": 6,
        "deployers": 1,
        "baseline_share": 0.0048,
        "multiple": 3.3,
        "state": "BELOW",
        "reason": "prd: 3.3x over baseline < 6.0x required"
      },
      {
        "root": "ctr",
        "launches": 6,
        "deployers": 1,
        "baseline_share": 0.0049,
        "multiple": 3.2,
        "state": "BELOW",
        "reason": "ctr: 3.2x over baseline < 6.0x required"
      },
      {
        "root": "counterparty",
        "launches": 6,
        "deployers": 1,
        "baseline_share": 0.0055,
        "multiple": 2.9,
        "state": "BELOW",
        "reason": "counterparty: 2.9x over baseline < 6.0x required"
      },
      {
        "root": "predictor",
        "launches": 6,
        "deployers": 1,
        "baseline_share": 0.0055,
        "multiple": 2.9,
        "state": "BELOW",
        "reason": "predictor: 2.9x over baseline < 6.0x required"
      },
      {
        "root": "agent",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0068,
        "multiple": 2.3,
        "state": "BELOW",
        "reason": "agent: 2.3x over baseline < 6.0x required"
      },
      {
        "root": "cat",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.013,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "cat: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "omen",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 32.8,
        "state": "THIN",
        "reason": "omen: 5 deployers < 6 required"
      },
      {
        "root": "weth",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0073,
        "multiple": 1.8,
        "state": "BELOW",
        "reason": "weth: 1.8x over baseline < 6.0x required"
      },
      {
        "root": "robinhood",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0513,
        "multiple": 0.3,
        "state": "BELOW",
        "reason": "robinhood: 0.3x over baseline < 6.0x required"
      },
      {
        "root": "aegis",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 26.2,
        "state": "THIN",
        "reason": "aegis: 4 launches < 5 required"
      },
      {
        "root": "djnec",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 26.2,
        "state": "THIN",
        "reason": "djnec: 4 launches < 5 required"
      },
      {
        "root": "fund",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0029,
        "multiple": 3.6,
        "state": "BELOW",
        "reason": "fund: 3.6x over baseline < 6.0x required"
      },
      {
        "root": "chop",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0041,
        "multiple": 2.6,
        "state": "BELOW",
        "reason": "chop: 2.6x over baseline < 6.0x required"
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
        "root": "aegisterminal",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.7,
        "state": "THIN",
        "reason": "aegisterminal: 3 launches < 5 required"
      },
      {
        "root": "call",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.7,
        "state": "THIN",
        "reason": "call: 3 launches < 5 required"
      },
      {
        "root": "calldwog",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.7,
        "state": "THIN",
        "reason": "calldwog: 3 launches < 5 required"
      },
      {
        "root": "dwog",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.7,
        "state": "THIN",
        "reason": "dwog: 3 launches < 5 required"
      },
      {
        "root": "grokie",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.7,
        "state": "THIN",
        "reason": "grokie: 3 launches < 5 required"
      },
      {
        "root": "highcap",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.7,
        "state": "THIN",
        "reason": "highcap: 3 launches < 5 required"
      },
      {
        "root": "meet",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.7,
        "state": "THIN",
        "reason": "meet: 3 launches < 5 required"
      },
      {
        "root": "nest",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.7,
        "state": "THIN",
        "reason": "nest: 3 launches < 5 required"
      },
      {
        "root": "gta",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0016,
        "multiple": 4.9,
        "state": "BELOW",
        "reason": "gta: 4.9x over baseline < 6.0x required"
      },
      {
        "root": "pixel",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0022,
        "multiple": 3.6,
        "state": "BELOW",
        "reason": "pixel: 3.6x over baseline < 6.0x required"
      },
      {
        "root": "borrowable",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0027,
        "multiple": 2.9,
        "state": "BELOW",
        "reason": "borrowable: 2.9x over baseline < 6.0x required"
      },
      {
        "root": "lend",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0027,
        "multiple": 2.9,
        "state": "BELOW",
        "reason": "lend: 2.9x over baseline < 6.0x required"
      },
      {
        "root": "flock",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0032,
        "multiple": 2.5,
        "state": "BELOW",
        "reason": "flock: 2.5x over baseline < 6.0x required"
      },
      {
        "root": "global",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0033,
        "multiple": 2.4,
        "state": "BELOW",
        "reason": "global: 2.4x over baseline < 6.0x required"
      },
      {
        "root": "amm",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0062,
        "multiple": 1.3,
        "state": "BELOW",
        "reason": "amm: 1.3x over baseline < 6.0x required"
      },
      {
        "root": "volatile",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0083,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "volatile: 0.9x over baseline < 6.0x required"
      },
      {
        "root": "adbab",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 13.1,
        "state": "THIN",
        "reason": "adbab: 2 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0xdb62573ad101da0510cfa041220742433a371111",
        "name": "Spin Trading",
        "symbol": "SPIN",
        "deployer": "0x0c56fd58df10165ae3f32483eb0025bce8a5bb92",
        "block": 108764355,
        "ts": "2026-11-07T22:51:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x40b3992637c89293dbd4b81fa890ff470910b844",
        "name": "Sample Content",
        "symbol": "SAMPLECONTENT",
        "deployer": "0x325a2a07ada71591350a3f8c2a2664d5690a076f",
        "block": 108764227,
        "ts": "2026-11-07T22:50:46.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xb9de300d4d98790bb044e094d06d981156107d28",
        "name": "Pools",
        "symbol": "POOLS",
        "deployer": "0x4337003fcd2f56de3977ccb806383e9161628d0e",
        "block": 108764224,
        "ts": "2026-11-07T22:50:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd131531dcee2d60ea0c134d2ca50297b065c0549",
        "name": "Pangs Rally Beta",
        "symbol": "PRBETA",
        "deployer": "0xefcf5455c62deee19eb23cebc7c689f1a282a775",
        "block": 108764121,
        "ts": "2026-11-07T22:50:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5f050341cb1ab44b55370ed86fc03798d41c299a",
        "name": "Stock Token",
        "symbol": "STOKEN",
        "deployer": "0x3e434d3238563fdba513bfd952d11f54aca6c85d",
        "block": 108764068,
        "ts": "2026-11-07T22:50:30.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x65dc90cd3a0bcde967c8ae6019d6790b616e78f7",
        "name": "Longbow Frontier USDG",
        "symbol": "lbfrontUSDG",
        "deployer": "0xbbb61bd2a46eec978d84a237471304ea18e1f34c",
        "block": 108763966,
        "ts": "2026-11-07T22:50:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7a2a18ffc72cdec1367f01985cc993bcd54ef890",
        "name": "callcat",
        "symbol": "CALLCAT",
        "deployer": "0x4337003fcd2f56de3977ccb806383e9161628d0e",
        "block": 108763538,
        "ts": "2026-11-07T22:49:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xda85b16186553ef74fc344faa9bb9a2a297c911a",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xe86ecea7f91e3337e0a072b56775350879a36d33",
        "block": 108763355,
        "ts": "2026-11-07T22:49:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7d027d846a5eeb9b3958915a1588a776a7c1cfe3",
        "name": "Make high caps great again",
        "symbol": "MHCGA",
        "deployer": "0xa03d6cd3dab28abf0d1d7768eb9fc04cd3eb21a9",
        "block": 108763332,
        "ts": "2026-11-07T22:49:15.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x58c03e58e94575f408d105d36317c3c7e74dfaa4",
        "name": "LAURA",
        "symbol": "Laura",
        "deployer": "0xea209a4a5de9a8449a666c5f9fa43be7181600a9",
        "block": 108763163,
        "ts": "2026-11-07T22:48:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x50a08a9ff34f7c110d439cf23bbf134535de5c65",
        "name": "nest",
        "symbol": "NEST",
        "deployer": "0x2660974afc079a5c672bf04a59498d362729f8aa",
        "block": 108762835,
        "ts": "2026-11-07T22:48:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd39fe3b745f2091a3e1b847ea95ac8b03745809b",
        "name": "TITTYVERSE",
        "symbol": "TITTYVERSE",
        "deployer": "0x9f07dc88f6625ee8860c7bddf8a879ae24e57539",
        "block": 108762824,
        "ts": "2026-11-07T22:48:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd32c947348ebcf17939fa0cbbc5e3560ca7302fe",
        "name": "Spy Inc. Agents",
        "symbol": "SPY",
        "deployer": "0xc042d09a3eb3bf6c23b9661e385d1ad0c07a19a1",
        "block": 108762821,
        "ts": "2026-11-07T22:48:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5a8b0c74fe145873e701f665aa6059396d822e03",
        "name": "Omen Agent",
        "symbol": "OMEN",
        "deployer": "0xbe9e43ebf66dba4c5a930ccbf4db48e1299b90b6",
        "block": 108762803,
        "ts": "2026-11-07T22:48:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xba9a8f322165e5b176fe20c66c4832abe43e6760",
        "name": "Adyros",
        "symbol": "ADYROS",
        "deployer": "0xfca26b1fe1bb60387cccc2337b6b1486f176251d",
        "block": 108762718,
        "ts": "2026-11-07T22:48:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8cbb7cb2d76d8520a9ee11e5b13021a5b66349b6",
        "name": "Binary Pad",
        "symbol": "01101",
        "deployer": "0x69f187d3718e4d5cf9a0907a78c212e55dd80141",
        "block": 108762706,
        "ts": "2026-11-07T22:48:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3c5dad15bec2ce2a1ce626a034be0196bbcc1d61",
        "name": "ZENO MARKETS",
        "symbol": "ZENO",
        "deployer": "0x4332056e2da8506ccaaf5deab2bdcbf9d01eca13",
        "block": 108762693,
        "ts": "2026-11-07T22:48:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x43a16ccacb4c96c1a8d8d4e06ca0b613d634872e",
        "name": "Eisenkot Knesset Key",
        "symbol": "EISKEY",
        "deployer": "0x4337003fcd2f56de3977ccb806383e9161628d0e",
        "block": 108762514,
        "ts": "2026-11-07T22:47:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6609efb4ef2870e290e1efb3b6d4f9dc0b01d000",
        "name": "富贵",
        "symbol": "富贵",
        "deployer": "0x82ba3fcb49029e1e85cd1e2bb93882d5771d7798",
        "block": 108762155,
        "ts": "2026-11-07T22:47:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xaa5ed38c90da85f4ed437fdb6790d4ea72d7a016",
        "name": "Chop HEY",
        "symbol": "chHEY",
        "deployer": "0x2d2a8a51ccb15c280a457f3e77e4b760fbf3d5e0",
        "block": 108761999,
        "ts": "2026-11-07T22:46:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa82f26806dfb79a2bf480afe70e1f0db2c1bbb00",
        "name": "Higher Together",
        "symbol": "Together",
        "deployer": "0x167e672909e5f29545637a116e1e575ac95857ab",
        "block": 108761965,
        "ts": "2026-11-07T22:46:46.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x7e3d8f66713e19edd5e43487c266f8473344e307",
        "name": "Privacy Inu",
        "symbol": "PI",
        "deployer": "0x4337003fcd2f56de3977ccb806383e9161628d0e",
        "block": 108761841,
        "ts": "2026-11-07T22:46:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1ae5d2cfd6bd813a4f89565e4311951a14911fd3",
        "name": "Alpic",
        "symbol": "ALPIC",
        "deployer": "0x925b315fad2000b474a25fd109e52345bfbd7610",
        "block": 108761831,
        "ts": "2026-11-07T22:46:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdf28ab23e5a7dd6f294822a2c1ef1db580031e18",
        "name": "Gracie Bon",
        "symbol": "GRACIE",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 108761565,
        "ts": "2026-11-07T22:46:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4b56ccf807126627f954fdd7df834ab88f886447",
        "name": "Moo Beefy Aero AI-USDG",
        "symbol": "mooBeefyAeroAI-USDG",
        "deployer": "0xa3129d9d7d71310e3f2e2ac8392d5a5aca5b872b",
        "block": 108761436,
        "ts": "2026-11-07T22:45:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa972f9a7d0b56644e0006e92f83cc79f08350087",
        "name": "chaos cat",
        "symbol": "chaos",
        "deployer": "0xb326902c4327d61e6c89e4944c3ef3d8a3194c0b",
        "block": 108761414,
        "ts": "2026-11-07T22:45:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1dc94451241960e9f5197995aa89ca72fc3e68cc",
        "name": "SwapHood Token",
        "symbol": "SWT",
        "deployer": "0x3e361daab7f25bfbffde35c488bb0eb4d43e0f94",
        "block": 108761094,
        "ts": "2026-11-07T22:45:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbc31c6fcadf8588a8416e3496ba2f97136df514f",
        "name": "Cow Aero AI-USDG",
        "symbol": "cowAeroAI-USDG",
        "deployer": "0x33f9c12072477cb3145b2d1450e1c299147e0df4",
        "block": 108761057,
        "ts": "2026-11-07T22:45:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1d0ddf7eb33e50cc794a8071ccb93f426e8340f4",
        "name": "Reward Cow Aero AI-USDG",
        "symbol": "rcowAeroAI-USDG",
        "deployer": "0x33f9c12072477cb3145b2d1450e1c299147e0df4",
        "block": 108761057,
        "ts": "2026-11-07T22:45:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x41f9e81451af27b05b706e4864173b5110c459af",
        "name": "CannaCat",
        "symbol": "CANNACAT",
        "deployer": "0x248eb7b36f1540824ee9b75e9c5bac2a342368bc",
        "block": 108761040,
        "ts": "2026-11-07T22:45:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3002242ca197d4e7641fde7d5527d0afa861da90",
        "name": "porkchop",
        "symbol": "porkchop",
        "deployer": "0x540df6a7030461c92471a06cc9726c62a74769de",
        "block": 108760790,
        "ts": "2026-11-07T22:44:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x01d2c65cb17812e4889ff6ffa23b2972656fdec1",
        "name": "Verum",
        "symbol": "VERUM",
        "deployer": "0x4337001fff419768e088ce247456c1b892888084",
        "block": 108760462,
        "ts": "2026-11-07T22:44:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9438cda2d0c362f1a0d8503b1704010aac61dffc",
        "name": "Conta",
        "symbol": "CONTA",
        "deployer": "0x85daf343a358c15afde5fc6d12185a4d0fa5b47c",
        "block": 108760343,
        "ts": "2026-11-07T22:43:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x853744f1704710c5881b8f8bfb22fea601be30d0",
        "name": "7 Mood Battery",
        "symbol": "MDBT",
        "deployer": "0x4337001fff419768e088ce247456c1b892888084",
        "block": 108760034,
        "ts": "2026-11-07T22:43:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x977eec0bef8b7556cd6ec773d4c931de032d7777",
        "name": "Dana Whitehouse",
        "symbol": "DANA",
        "deployer": "0x4854f368755ce58ba0167e91ad59db415d637ae4",
        "block": 108759800,
        "ts": "2026-11-07T22:42:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9c242f89f2d0bd1434c057a6db8d6bf4cedcf0bd",
        "name": "Fedora Cat",
        "symbol": "FED",
        "deployer": "0x4337002c5702ce424cb62a56ca038e31e1d4a93d",
        "block": 108758839,
        "ts": "2026-11-07T22:41:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6a5ae3e491c84834cf681336a0fd604ea319bc5d",
        "name": "Chigga Its Over",
        "symbol": "CIO",
        "deployer": "0xea209a4a5de9a8449a666c5f9fa43be7181600a9",
        "block": 108758706,
        "ts": "2026-11-07T22:40:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc31cd857e284b1e0745ae64d8e8d586e8d47a86a",
        "name": "Raphael Slipstream Position",
        "symbol": "RAPH-CL-POS",
        "deployer": "0xaad0f67019ac3bbcb7b0a1625f059c695b0875f5",
        "block": 108758593,
        "ts": "2026-11-07T22:40:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5d3a1ff2b6bab83b63cd9ad0787074081a52ef34",
        "name": "USDe",
        "symbol": "USDe",
        "deployer": "0x73a063c96b5d67863deaa7b163207e769a7c2cee",
        "block": 108758482,
        "ts": "2026-11-07T22:40:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfcd61a1a286db22b7c56771d56b9cdb4157bb539",
        "name": "STOCKZ",
        "symbol": "STOCKZ",
        "deployer": "0x4337001fff419768e088ce247456c1b892888084",
        "block": 108758470,
        "ts": "2026-11-07T22:40:32.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
