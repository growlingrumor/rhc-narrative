/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-03T08:10:56.000Z",
    "opened_at": "2026-10-03T07:10:56.000Z",
    "window_hours": 1,
    "head_block": 78932572,
    "start_block": 78897139,
    "blocks_scanned": 35433,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 560,
    "unnamed_contracts": 0,
    "via_factory": 515,
    "no_receipt": 0,
    "candidates": 560,
    "mint_events": 27729,
    "deployers": 365,
    "roots": 653,
    "cleared_multiple": 164,
    "failed_gates": 150,
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
      "ai",
      "bond-non",
      "cat",
      "cosmologica-encyclopedia",
      "grand",
      "hood",
      "kin",
      "nft",
      "positions",
      "uniswap-uni",
      "zero"
    ],
    "top": {
      "root": "zero",
      "launches": 12,
      "deployers": 12,
      "baseline_share": 0.0004,
      "multiple": 53.6,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "zero",
        "launches": 12,
        "deployers": 12,
        "baseline_share": 0.0004,
        "multiple": 53.6,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "grand",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 49.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "cat",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 44.6,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "kin",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 40.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "hood",
        "launches": 8,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 35.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nft",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 35.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "ai",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 26.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 26.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 26,
        "deployers": 22,
        "baseline_share": 0.0004,
        "multiple": 116.1,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 85%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 22,
        "deployers": 19,
        "baseline_share": 0.0004,
        "multiple": 98.2,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 85%, merged to uniswap-uni"
      },
      {
        "root": "cosmologica",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 44.6,
        "state": "MERGED",
        "reason": "cosmologica + encyclopedia co-occur 100%, merged to cosmologica-encyclopedia"
      },
      {
        "root": "encyclopedia",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 44.6,
        "state": "MERGED",
        "reason": "cosmologica + encyclopedia co-occur 100%, merged to cosmologica-encyclopedia"
      },
      {
        "root": "bond",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 31.3,
        "state": "MERGED",
        "reason": "bond + non co-occur 63%, merged to bond-non"
      },
      {
        "root": "non",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 26.8,
        "state": "MERGED",
        "reason": "bond + non co-occur 63%, merged to bond-non"
      },
      {
        "root": "name",
        "launches": 8,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 35.7,
        "state": "THIN",
        "reason": "name: 2 deployers < 6 required"
      },
      {
        "root": "alandale",
        "launches": 7,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 31.3,
        "state": "THIN",
        "reason": "alandale: 3 deployers < 6 required"
      },
      {
        "root": "cow",
        "launches": 6,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 26.8,
        "state": "THIN",
        "reason": "cow: 3 deployers < 6 required"
      },
      {
        "root": "bucket",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 22.3,
        "state": "THIN",
        "reason": "bucket: 1 deployers < 6 required"
      },
      {
        "root": "counterparty",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 22.3,
        "state": "THIN",
        "reason": "counterparty: 1 deployers < 6 required"
      },
      {
        "root": "cubex",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 22.3,
        "state": "THIN",
        "reason": "cubex: 5 deployers < 6 required"
      },
      {
        "root": "dust",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 22.3,
        "state": "THIN",
        "reason": "dust: 5 deployers < 6 required"
      },
      {
        "root": "predictor",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 22.3,
        "state": "THIN",
        "reason": "predictor: 1 deployers < 6 required"
      },
      {
        "root": "robinhood",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 22.3,
        "state": "THIN",
        "reason": "robinhood: 5 deployers < 6 required"
      },
      {
        "root": "super",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 22.3,
        "state": "THIN",
        "reason": "super: 5 deployers < 6 required"
      },
      {
        "root": "usdg",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 22.3,
        "state": "THIN",
        "reason": "usdg: 5 deployers < 6 required"
      },
      {
        "root": "airtime",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17.9,
        "state": "THIN",
        "reason": "airtime: 4 launches < 5 required"
      },
      {
        "root": "ape",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17.9,
        "state": "THIN",
        "reason": "ape: 4 launches < 5 required"
      },
      {
        "root": "bamba",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17.9,
        "state": "THIN",
        "reason": "bamba: 4 launches < 5 required"
      },
      {
        "root": "chaingreets",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 17.9,
        "state": "THIN",
        "reason": "chaingreets: 4 launches < 5 required"
      },
      {
        "root": "chiichi",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17.9,
        "state": "THIN",
        "reason": "chiichi: 4 launches < 5 required"
      },
      {
        "root": "credit",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17.9,
        "state": "THIN",
        "reason": "credit: 4 launches < 5 required"
      },
      {
        "root": "ctr",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 17.9,
        "state": "THIN",
        "reason": "ctr: 4 launches < 5 required"
      },
      {
        "root": "hallow",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17.9,
        "state": "THIN",
        "reason": "hallow: 4 launches < 5 required"
      },
      {
        "root": "hi",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17.9,
        "state": "THIN",
        "reason": "hi: 4 launches < 5 required"
      },
      {
        "root": "hoodpoker",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17.9,
        "state": "THIN",
        "reason": "hoodpoker: 4 launches < 5 required"
      },
      {
        "root": "long",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 17.9,
        "state": "THIN",
        "reason": "long: 4 launches < 5 required"
      },
      {
        "root": "musegod",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17.9,
        "state": "THIN",
        "reason": "musegod: 4 launches < 5 required"
      },
      {
        "root": "pixel",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17.9,
        "state": "THIN",
        "reason": "pixel: 4 launches < 5 required"
      },
      {
        "root": "poker",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17.9,
        "state": "THIN",
        "reason": "poker: 4 launches < 5 required"
      },
      {
        "root": "prd",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 17.9,
        "state": "THIN",
        "reason": "prd: 4 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0xd5dd5f58ab2f10d579fd5cf21848535737cf197f",
        "name": "Unbefallen",
        "symbol": "ELSE",
        "deployer": "0x1b3c186509549582561c3f21baa7ddbe028f4aad",
        "block": 78932172,
        "ts": "2026-10-03T08:10:15.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x03063fcb6dac22f0d8468f55e4c9ec41669661a0",
        "name": "Arrowfarm UniV3 ARROWFARM-USDG CLM",
        "symbol": "arrowUniV3ARROWFARM-USDG",
        "deployer": "0x4dd4d97cd1bed3c4986ee9ba6da4ef701b0a7a01",
        "block": 78932104,
        "ts": "2026-10-03T08:10:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbc712b9726e6346e9c700df14b2a6a558efd222a",
        "name": "Cow Alandale Robinhood USDG-NET",
        "symbol": "cowAlandaleRobinhoodUSDG-NET",
        "deployer": "0x60c81c16b5aeac52ead4ae7b425db99526cfed53",
        "block": 78931967,
        "ts": "2026-10-03T08:09:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa9d7dad97aabee16252d71c699892be8a9cb8853",
        "name": "Reward Cow Alandale Robinhood USDG-NET",
        "symbol": "rcowAlandaleRobinhoodUSDG-NET",
        "deployer": "0x60c81c16b5aeac52ead4ae7b425db99526cfed53",
        "block": 78931967,
        "ts": "2026-10-03T08:09:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x857b3971e8038a8f8e2c0da797145447efbf6b86",
        "name": "Moo Beefy Alandale Robinhood USDG-NET",
        "symbol": "mooBeefyAlandaleRobinhoodUSDG-NET",
        "deployer": "0x60c81c16b5aeac52ead4ae7b425db99526cfed53",
        "block": 78931967,
        "ts": "2026-10-03T08:09:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7a09501ea70e395aa5727ef26467a2d64e5c1e18",
        "name": "Maltese",
        "symbol": "MALTESE",
        "deployer": "0x9df2d57182567dda4e730a0bf8507783760b46d4",
        "block": 78931918,
        "ts": "2026-10-03T08:09:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb311862a82d184152c482923070791b3ed74efa3",
        "name": "SpaceX",
        "symbol": "SpaceX",
        "deployer": "0x03aa31a8218a4e1cc734e6979ceb9f1c604cf05d",
        "block": 78931814,
        "ts": "2026-10-03T08:09:39.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xad57eb4690dc95f8cf35bd934c75e0849082535f",
        "name": "Coupons Cat",
        "symbol": "COUPONSCAT",
        "deployer": "0x7c80f82ca4f06736ee9634d1b90efc65559406b2",
        "block": 78931736,
        "ts": "2026-10-03T08:09:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3fa71334bc691935563b005700978ec59610d5f0",
        "name": "cat wif sword",
        "symbol": "swordcat",
        "deployer": "0x5157934a7cb03daa9184cdd07752398f23e59d6e",
        "block": 78931722,
        "ts": "2026-10-03T08:09:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x80e12e2ab526e687d654208c383ff6ae19a3f1f6",
        "name": "PONS 2x Long",
        "symbol": "PONS2L",
        "deployer": "0x6f988495ce30b14a63d571fe79bb84eccb10bf37",
        "block": 78931536,
        "ts": "2026-10-03T08:09:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3b1264440d0ba2b78033457cfe13b777506a48a5",
        "name": "T-OpenAI",
        "symbol": "tOpenAI",
        "deployer": "0x71251c2b59de5d350899e290aa8ee6f0be440055",
        "block": 78931524,
        "ts": "2026-10-03T08:09:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8d6cae1416e7a90b84e6765da5c9aa945a8b7777",
        "name": "Suki",
        "symbol": "SUKI",
        "deployer": "0x120bf8c773ace604ee50ec861fb45bd767bf7616",
        "block": 78931421,
        "ts": "2026-10-03T08:08:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0f1e7ef57ecac3d10ac5e9d1ff4cd3cad07ead5e",
        "name": "Stop That Shit",
        "symbol": "把任务",
        "deployer": "0x1bdea7f1e8cff9199b883d1cecea91ebe1607cf5",
        "block": 78931329,
        "ts": "2026-10-03T08:08:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x34cc276171b08805835b4061b64b6e0dbc46ab41",
        "name": "Credits",
        "symbol": "CREDITS",
        "deployer": "0x6e878dadd06c66aee353c5a8611f824f52afb791",
        "block": 78931248,
        "ts": "2026-10-03T08:08:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x52e44e319b96e6eb58542d5d9064b47b348f7777",
        "name": "MOMMY COIN",
        "symbol": "MOMMY",
        "deployer": "0xa407435e7a71f288ad65be7c64a863eb512742a1",
        "block": 78931247,
        "ts": "2026-10-03T08:08:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe13336d02aedf1bbd1a283d6f77fb5e0988f7777",
        "name": "ZecMap",
        "symbol": "ZECMAP",
        "deployer": "0xa95d81bd107298c0f7fb681962ba7df30ce5942f",
        "block": 78931225,
        "ts": "2026-10-03T08:08:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdfaf7697c21dccecd259d05b8fa5d94a45c1ab70",
        "name": "GPTDOG",
        "symbol": "GPTDOG",
        "deployer": "0x9d6daa7e35728e133a1b0d69439e293ede4d1c00",
        "block": 78931212,
        "ts": "2026-10-03T08:08:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5dd0ab87e2de63b10c4c67f109f9adb56a34a54b",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xf6ea3088a9ede28f30fe706427b026b3174a1d8f",
        "block": 78931108,
        "ts": "2026-10-03T08:08:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc93c27772f34fe60014c914f74351f6a5c358bee",
        "name": "Zero",
        "symbol": "제로",
        "deployer": "0x0db5e3df5ebb804af2de324a8bb4c14c3b87e81e",
        "block": 78931100,
        "ts": "2026-10-03T08:08:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcf98b2d66a45460908066f84700f58b1e370d000",
        "name": "牛来",
        "symbol": "牛来",
        "deployer": "0xe93685f3bba03016f02bd1828badd6195988d950",
        "block": 78931011,
        "ts": "2026-10-03T08:08:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe2cfec9a86ff6064a7a0ceedba5ec813edda5b27",
        "name": "Token Name",
        "symbol": "LOL",
        "deployer": "0x27e25a2f8c3438fc7a082862028b5b2f1159b7d0",
        "block": 78930964,
        "ts": "2026-10-03T08:08:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x704d8d6c37aab2cf001856af8066be596f241e18",
        "name": "DogGPT",
        "symbol": "DOGGPT",
        "deployer": "0x2534fd1657cb3d589c7728a053ad81f5fc10ec19",
        "block": 78930954,
        "ts": "2026-10-03T08:08:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9ea80fc7fb48e297ef3e1e4c8b05037e0970d5f0",
        "name": "cat wif sword",
        "symbol": "swordcat",
        "deployer": "0x6f6cb673ee42046a5bb58ca6a620ea2c018cafe0",
        "block": 78930921,
        "ts": "2026-10-03T08:08:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa73940d3b0bbbca3c7d3f96c748139ebf1af63b5",
        "name": "T-OpenAI",
        "symbol": "tOpenAI",
        "deployer": "0x8c560f6776ae4277cdccd4887e236a6be11ecf4b",
        "block": 78930904,
        "ts": "2026-10-03T08:08:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x95ad8436f285230c0f4f966507ab2d7968097777",
        "name": "Dexara",
        "symbol": "DEXARA",
        "deployer": "0xd37b3817a7ce91524d577175565a610a7387c46c",
        "block": 78930895,
        "ts": "2026-10-03T08:08:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9baca07339a875f3bb297b1f03bb57b3ab6c34d3",
        "name": "Zero",
        "symbol": "제로",
        "deployer": "0xe63ab50c6901f2547705fdee4958c95daf53b7f2",
        "block": 78930889,
        "ts": "2026-10-03T08:08:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3afab8f55be2b4d8b6df955cac9e8a16211aac69",
        "name": "Shoggoth",
        "symbol": "Shoggoth",
        "deployer": "0x4d9a002a369c375d4c0b2d77cd364038bd1bdfec",
        "block": 78930860,
        "ts": "2026-10-03T08:08:01.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x52c2f78273ccb482711c2bb54ba1a618364a374e",
        "name": "Astro Meow",
        "symbol": "AMEOW",
        "deployer": "0x27e25a2f8c3438fc7a082862028b5b2f1159b7d0",
        "block": 78930858,
        "ts": "2026-10-03T08:08:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9b6bd2780bceb2a63516d649f5bce4b6f4147777",
        "name": "Vtube Pro",
        "symbol": "VTUBEPRO",
        "deployer": "0x6f89ae73532fe185a4923c896184b25aec00e3c8",
        "block": 78930849,
        "ts": "2026-10-03T08:08:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xab6c2121fa626ea71dd90f38d2c4462a3409e75d",
        "name": "underdog",
        "symbol": "UNDERDOG",
        "deployer": "0xac041c1ed0120ac831193d6960abf38d8f1df178",
        "block": 78930812,
        "ts": "2026-10-03T08:07:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5e528c346dbb5c37d1b637e8b9197447513248f6",
        "name": "Dexara",
        "symbol": "DEXARA",
        "deployer": "0xc9d9656e909b61c41de1b37591f9ada02daaa020",
        "block": 78930803,
        "ts": "2026-10-03T08:07:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5fb032bf6ec9cdf3447ee6a5f9f8c1b5db1c5470",
        "name": "Vtube Pro",
        "symbol": "VTubePro",
        "deployer": "0x1b495963e0b349361bbfc7cdb1b498136c9c1bc2",
        "block": 78930770,
        "ts": "2026-10-03T08:07:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf99c5017c8fa91d95b47775bafe637f081787777",
        "name": "GPTDOG",
        "symbol": "GPTDOG",
        "deployer": "0x120bf8c773ace604ee50ec861fb45bd767bf7616",
        "block": 78930720,
        "ts": "2026-10-03T08:07:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0151a001b2eab292a36ffd8c1a42396dae221848",
        "name": "Cow Uniswap Robinhood WETH-MSTR",
        "symbol": "cowUniswapRobinhoodWETH-MSTR",
        "deployer": "0x10082016a94920abdf410cdb6f98c2ead2c57340",
        "block": 78930697,
        "ts": "2026-10-03T08:07:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc6a55d8e2a0700ffa760d1c8361a82ec4dee0dfe",
        "name": "Reward Cow Uniswap Robinhood WETH-MSTR",
        "symbol": "rcowUniswapRobinhoodWETH-MSTR",
        "deployer": "0x10082016a94920abdf410cdb6f98c2ead2c57340",
        "block": 78930697,
        "ts": "2026-10-03T08:07:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc3d45aaf3e6913244ece368fd938e88ef86d1e18",
        "name": "GPTDOG",
        "symbol": "GPTDOG",
        "deployer": "0x6b77c6f0326d90ffc73d4fdd0821a5d30aff969b",
        "block": 78930569,
        "ts": "2026-10-03T08:07:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb90a9465ac8599691cd1bdd1c971d742b252a777",
        "name": "Vtube Pro",
        "symbol": "VTubePro",
        "deployer": "0x9102f2796329dbd134d22399e2a5c18db8ec571b",
        "block": 78930470,
        "ts": "2026-10-03T08:07:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3f104d406cbe9b1a74d8c5ff23e5e2f457bc032f",
        "name": "Pixel Ape",
        "symbol": "PXLA",
        "deployer": "0xf6ea3088a9ede28f30fe706427b026b3174a1d8f",
        "block": 78930230,
        "ts": "2026-10-03T08:06:57.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x79a66f415c128c4502219e0fdac3784f2e9f97c8",
        "name": "Elon Coin",
        "symbol": "ELON",
        "deployer": "0x9d9451ee06a9c99c169fe7cc534d31e50d2bd1b0",
        "block": 78930145,
        "ts": "2026-10-03T08:06:49.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xe94594e0cefa497f20f470be81da0bef18116cd2",
        "name": "TEST",
        "symbol": "TEST",
        "deployer": "0xe039406234f4e28606ce95f6776de10a22215fe3",
        "block": 78930092,
        "ts": "2026-10-03T08:06:43.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
