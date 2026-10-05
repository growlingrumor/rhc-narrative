/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-05T04:19:06.000Z",
    "opened_at": "2026-10-05T03:19:06.000Z",
    "window_hours": 1,
    "head_block": 80499187,
    "start_block": 80463824,
    "blocks_scanned": 35363,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 531,
    "unnamed_contracts": 0,
    "via_factory": 490,
    "no_receipt": 4,
    "candidates": 535,
    "mint_events": 19665,
    "deployers": 318,
    "roots": 641,
    "cleared_multiple": 186,
    "failed_gates": 173,
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
      "cat",
      "hood",
      "mochi-mochioracle",
      "nft",
      "positions",
      "robinhood",
      "super",
      "texcat",
      "uniswap-uni",
      "usdg"
    ],
    "top": {
      "root": "robinhood",
      "launches": 20,
      "deployers": 8,
      "baseline_share": 0.0004,
      "multiple": 94.2,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "robinhood",
        "launches": 20,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 94.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nft",
        "launches": 10,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 47.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "super",
        "launches": 8,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 37.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "texcat",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 37.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "ai",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 33,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "hood",
        "launches": 7,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 33,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 33,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 33,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "cat",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 28.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 38,
        "deployers": 29,
        "baseline_share": 0.0004,
        "multiple": 178.9,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 68%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 26,
        "deployers": 24,
        "baseline_share": 0.0004,
        "multiple": 122.4,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 68%, merged to uniswap-uni"
      },
      {
        "root": "mochi",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 33,
        "state": "MERGED",
        "reason": "mochi + mochioracle co-occur 100%, merged to mochi-mochioracle"
      },
      {
        "root": "mochioracle",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 33,
        "state": "MERGED",
        "reason": "mochi + mochioracle co-occur 100%, merged to mochi-mochioracle"
      },
      {
        "root": "cow",
        "launches": 15,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 70.6,
        "state": "THIN",
        "reason": "cow: 4 deployers < 6 required"
      },
      {
        "root": "box",
        "launches": 12,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 56.5,
        "state": "THIN",
        "reason": "box: 3 deployers < 6 required"
      },
      {
        "root": "deposit",
        "launches": 12,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 56.5,
        "state": "THIN",
        "reason": "deposit: 3 deployers < 6 required"
      },
      {
        "root": "safety",
        "launches": 12,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 56.5,
        "state": "THIN",
        "reason": "safety: 3 deployers < 6 required"
      },
      {
        "root": "lp",
        "launches": 10,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 47.1,
        "state": "THIN",
        "reason": "lp: 2 deployers < 6 required"
      },
      {
        "root": "hoodx",
        "launches": 9,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 42.4,
        "state": "THIN",
        "reason": "hoodx: 1 deployers < 6 required"
      },
      {
        "root": "reward",
        "launches": 9,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 42.4,
        "state": "THIN",
        "reason": "reward: 5 deployers < 6 required"
      },
      {
        "root": "stock",
        "launches": 9,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 42.4,
        "state": "THIN",
        "reason": "stock: 1 deployers < 6 required"
      },
      {
        "root": "ramses",
        "launches": 7,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 33,
        "state": "THIN",
        "reason": "ramses: 3 deployers < 6 required"
      },
      {
        "root": "bucket",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 23.5,
        "state": "THIN",
        "reason": "bucket: 1 deployers < 6 required"
      },
      {
        "root": "net",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 23.5,
        "state": "THIN",
        "reason": "net: 3 deployers < 6 required"
      },
      {
        "root": "spacex",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 23.5,
        "state": "THIN",
        "reason": "spacex: 5 deployers < 6 required"
      },
      {
        "root": "staked",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 23.5,
        "state": "THIN",
        "reason": "staked: 3 deployers < 6 required"
      },
      {
        "root": "volatile",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 23.5,
        "state": "THIN",
        "reason": "volatile: 1 deployers < 6 required"
      },
      {
        "root": "alandale",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.8,
        "state": "THIN",
        "reason": "alandale: 4 launches < 5 required"
      },
      {
        "root": "dividend",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 18.8,
        "state": "THIN",
        "reason": "dividend: 4 launches < 5 required"
      },
      {
        "root": "eagle",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 18.8,
        "state": "THIN",
        "reason": "eagle: 4 launches < 5 required"
      },
      {
        "root": "exchange",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 18.8,
        "state": "THIN",
        "reason": "exchange: 4 launches < 5 required"
      },
      {
        "root": "fomomcp",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 18.8,
        "state": "THIN",
        "reason": "fomomcp: 4 launches < 5 required"
      },
      {
        "root": "intelligence",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 18.8,
        "state": "THIN",
        "reason": "intelligence: 4 launches < 5 required"
      },
      {
        "root": "just",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 18.8,
        "state": "THIN",
        "reason": "just: 4 launches < 5 required"
      },
      {
        "root": "long",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 18.8,
        "state": "THIN",
        "reason": "long: 4 launches < 5 required"
      },
      {
        "root": "mouse",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 18.8,
        "state": "THIN",
        "reason": "mouse: 4 launches < 5 required"
      },
      {
        "root": "rh",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 18.8,
        "state": "THIN",
        "reason": "rh: 4 launches < 5 required"
      },
      {
        "root": "robot",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 18.8,
        "state": "THIN",
        "reason": "robot: 4 launches < 5 required"
      },
      {
        "root": "shitcoin",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 18.8,
        "state": "THIN",
        "reason": "shitcoin: 4 launches < 5 required"
      },
      {
        "root": "stack",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 18.8,
        "state": "THIN",
        "reason": "stack: 4 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0xe8daeb6ead7cd9cfb3858ead3df05fc2737c1aa7",
        "name": "allinuswap",
        "symbol": "ALL",
        "deployer": "0x3dd575b91f707a199dcd21d42c719a7760fe2cb6",
        "block": 80498958,
        "ts": "2026-10-05T04:18:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xac030ca46a1ad767e7793fcc13407ed3fc207777",
        "name": "Pups Companions",
        "symbol": "PUPS",
        "deployer": "0xfe2cb6b8c284d632390268d8007873ac5865db0b",
        "block": 80498946,
        "ts": "2026-10-05T04:18:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xea321e8e37ec67ec748005421db8cb057e6a15f2",
        "name": "Cow Uniswap Robinhood WETH-MOO",
        "symbol": "cowUniswapRobinhoodWETH-MOO",
        "deployer": "0x785ec636493d049469c3d10dc9fab09a229acce7",
        "block": 80498808,
        "ts": "2026-10-05T04:18:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7b6a30e2000f7ce3e61ba21fe45b23c851b10c49",
        "name": "Reward Cow Uniswap Robinhood WETH-MOO",
        "symbol": "rcowUniswapRobinhoodWETH-MOO",
        "deployer": "0x785ec636493d049469c3d10dc9fab09a229acce7",
        "block": 80498808,
        "ts": "2026-10-05T04:18:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xde0b413b3179cccad12df035fd90cb25758d7777",
        "name": "DOPE",
        "symbol": "DOPE",
        "deployer": "0x498b1bee7a146a4d10514f2d8eb1201b447ad384",
        "block": 80498780,
        "ts": "2026-10-05T04:18:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd0401bcddf4695a8d4854b627f54fcdc3884c21a",
        "name": "froglet",
        "symbol": "FROGLET",
        "deployer": "0xc77741e4b6b71fef534e3e4d8f17acce30f972bc",
        "block": 80498660,
        "ts": "2026-10-05T04:18:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8c87de4f068ab693a763a654c8a4e4bb09206d39",
        "name": "Fomolist",
        "symbol": "FOMOLIST",
        "deployer": "0x3149e0d10e063d1822488b7609b506755d96d035",
        "block": 80498659,
        "ts": "2026-10-05T04:18:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc18c934f5e18fe841758c9e234085cc782d23f21",
        "name": "LINDY",
        "symbol": "LINDY",
        "deployer": "0x3c23b07faba2c01de07e44fa265a0e83b0b72e87",
        "block": 80498596,
        "ts": "2026-10-05T04:18:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7b105be1b9987f513c15635a3a5246f86bc57777",
        "name": "Image Blaster",
        "symbol": "IMAGEBLASTER",
        "deployer": "0x7485fbfd99993dab4c9964f53791e40d14253c97",
        "block": 80498580,
        "ts": "2026-10-05T04:18:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb84ab4834960e654a6acf86ab5e4c49fe1fed62f",
        "name": "Team Human",
        "symbol": "Human",
        "deployer": "0x75562eb7f973c0cb0912571b40c938c829985b6c",
        "block": 80498577,
        "ts": "2026-10-05T04:18:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3dfd9c1f55546e3281866c81ebfa2ec707575529",
        "name": "Cow Uniswap Robinhood WETH-BONER",
        "symbol": "cowUniswapRobinhoodWETH-BONER",
        "deployer": "0x785ec636493d049469c3d10dc9fab09a229acce7",
        "block": 80498530,
        "ts": "2026-10-05T04:17:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x527c1cbb12b3e6432d48ba77ff1fcd0b025805b0",
        "name": "Reward Cow Uniswap Robinhood WETH-BONER",
        "symbol": "rcowUniswapRobinhoodWETH-BONER",
        "deployer": "0x785ec636493d049469c3d10dc9fab09a229acce7",
        "block": 80498530,
        "ts": "2026-10-05T04:17:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa67ca40fa0bccc83998924aaf2e8c7ad2abe9777",
        "name": "darkswap",
        "symbol": "dark",
        "deployer": "0x3126eeeb9b6c0ea8660472b62931efa77d817c76",
        "block": 80497895,
        "ts": "2026-10-05T04:16:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3417bb0678d95287645960e7312b46eae0a85c72",
        "name": "JUST BUY IT",
        "symbol": "NIKE",
        "deployer": "0x333aa8a9df08f49844ddad3c31c51a96f72357da",
        "block": 80497722,
        "ts": "2026-10-05T04:16:36.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xf3dad1ff17608a0e9d3c3a393f23b9c4bc053fb6",
        "name": "Periphery",
        "symbol": "PRPHRY",
        "deployer": "0x7d7bdb82fce6eca3a04c91e306f1768fbee76ec4",
        "block": 80497606,
        "ts": "2026-10-05T04:16:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa30fa36db767ad9ed3f7a60fc79526fb4d56d344",
        "name": "United States Oil Fund • Robinhood Token",
        "symbol": "USO",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 80497560,
        "ts": "2026-10-05T04:16:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5f3c492723f73a53b16cfb99e4f435a8d0644124",
        "name": "Coming Along Micely",
        "symbol": "MICELY",
        "deployer": "0x0f208b28aca0bb60d2ec0b8a3197af3bd230f3f9",
        "block": 80497552,
        "ts": "2026-10-05T04:16:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6977c31fc0714aabb4da656f6f7b0276e3fe7777",
        "name": "MascotDex",
        "symbol": "MASCOTDEX",
        "deployer": "0xa7ba884561771e707f7f29bd5388b77f1e470daf",
        "block": 80497470,
        "ts": "2026-10-05T04:16:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xde7b50e9866057036064a7dc51c1580b52e6ca36",
        "name": "Kranox",
        "symbol": "KRANOX",
        "deployer": "0x5a3bbe475e8a19a37ab8bd8c8c8bbee1d21fc9b7",
        "block": 80497305,
        "ts": "2026-10-05T04:15:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x563267a634a8f762046adebd9b128880f46baaaa",
        "name": "Cow Uniswap Robinhood USDG-DELL",
        "symbol": "cowUniswapRobinhoodUSDG-DELL",
        "deployer": "0xb86749ec6981ec5d9aae6388f2ecce5d076342ae",
        "block": 80497183,
        "ts": "2026-10-05T04:15:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x892a7c3d9ba8d456e405e35e736b1a44a7a74794",
        "name": "Reward Cow Uniswap Robinhood USDG-DELL",
        "symbol": "rcowUniswapRobinhoodUSDG-DELL",
        "deployer": "0xb86749ec6981ec5d9aae6388f2ecce5d076342ae",
        "block": 80497183,
        "ts": "2026-10-05T04:15:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x45eaf42f23a985e6a7b7629cbef688da0380001a",
        "name": "kinekoworld",
        "symbol": "Kineko",
        "deployer": "0x3dd575b91f707a199dcd21d42c719a7760fe2cb6",
        "block": 80496988,
        "ts": "2026-10-05T04:15:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x918f08783d0339bf8671d25aefb269f8b9c6346f",
        "name": "JUST BUY IT",
        "symbol": "NIKE",
        "deployer": "0xd171c54bcfe99fdd9d6ae61e36fce9c169e98381",
        "block": 80496955,
        "ts": "2026-10-05T04:15:18.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xaaa8c1e4f75ec7df802607d827ea0efe8dcddbdd",
        "name": "Cow Uniswap Robinhood TENDIES-WETH",
        "symbol": "cowUniswapRobinhoodTENDIES-WETH",
        "deployer": "0x785ec636493d049469c3d10dc9fab09a229acce7",
        "block": 80496849,
        "ts": "2026-10-05T04:15:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb6472ac872a5c51c2099ea8a5c6ff4bdb6d25eca",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x45b50db2666880ac4b02d3cae1cb1f19642dab1c",
        "block": 80496570,
        "ts": "2026-10-05T04:14:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xed467fe671f9162ab64633e3b921c7e98b5c7777",
        "name": "The Big Long",
        "symbol": "LONG",
        "deployer": "0xfe2cb6b8c284d632390268d8007873ac5865db0b",
        "block": 80496543,
        "ts": "2026-10-05T04:14:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x36124474bb3d8ee3f43cd69b5d7f67ac4c9b7777",
        "name": "CNSA",
        "symbol": "CNSA",
        "deployer": "0x1b4ebe73585b94578dc055c6ac7e89333fdadcf7",
        "block": 80496538,
        "ts": "2026-10-05T04:14:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x35c766bb7ef503c5b905bb60eff6c63818187777",
        "name": "Gizmo",
        "symbol": "GIZMO",
        "deployer": "0x498b1bee7a146a4d10514f2d8eb1201b447ad384",
        "block": 80496504,
        "ts": "2026-10-05T04:14:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6f0e8524a1db20d4a326577d7874da92bdd1635d",
        "name": "Texcat",
        "symbol": "TEXCAT",
        "deployer": "0x217bf0803aa42345f4fa1e0d0630e8f1a65ebf51",
        "block": 80496387,
        "ts": "2026-10-05T04:14:20.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x0a27e4190a03ed5e654281829b7e3329baf97004",
        "name": "SpaceXSI",
        "symbol": "SI",
        "deployer": "0x45b50db2666880ac4b02d3cae1cb1f19642dab1c",
        "block": 80496383,
        "ts": "2026-10-05T04:14:20.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xe455d4669540a36f5a92aebabea22aacb07b23dc",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x76c3eaa34b771b0caae3fb25eaa1188b3d7974f4",
        "block": 80496381,
        "ts": "2026-10-05T04:14:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6e43cec24e44792832b4ba7fc7f0230e953b6ebb",
        "name": "Degen Village Dev",
        "symbol": "DGNV",
        "deployer": "0x15ee5ba2be10df045b38d96ea2bd5b40e2a8ea72",
        "block": 80496353,
        "ts": "2026-10-05T04:14:16.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xcf5214f51ac69794625e23f299a5f9dc6da57777",
        "name": "Kranox",
        "symbol": "KRANOX",
        "deployer": "0x7485fbfd99993dab4c9964f53791e40d14253c97",
        "block": 80496162,
        "ts": "2026-10-05T04:13:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9c2a2fdbfd40b118f1302efd907b1ce2097f5eb6",
        "name": "Kranox",
        "symbol": "KRANOX",
        "deployer": "0x720e3c7f256091fab0e3eaac1cf4c09b889e8833",
        "block": 80496065,
        "ts": "2026-10-05T04:13:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x32807d54ee1570cba97e256c59426dd80dcd9fcf",
        "name": "Symbiosis",
        "symbol": "SIS",
        "deployer": "0x96111cc4867c5e1c22da4b79bb8852b9e2a07eb1",
        "block": 80495949,
        "ts": "2026-10-05T04:13:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd46383b7b01dfa558ab6f24905cf2b2b2e3ce943",
        "name": "Wall3 Labs",
        "symbol": "WALL3",
        "deployer": "0xc26fa005e9fab30761167d828b2868486a962c4d",
        "block": 80495846,
        "ts": "2026-10-05T04:13:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0c42ecc126a837b420f70ec73d21d4e81e4e7fff",
        "name": "Moon Mouse",
        "symbol": "MMSE",
        "deployer": "0x76c3eaa34b771b0caae3fb25eaa1188b3d7974f4",
        "block": 80495496,
        "ts": "2026-10-05T04:12:50.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x0304f87a24efc91014990c9ba1e43b6ec2584f25",
        "name": "Texcat",
        "symbol": "TEXCAT",
        "deployer": "0xbeb9a8a25f978315b6df061e8ac5b44dca82e06a",
        "block": 80495190,
        "ts": "2026-10-05T04:12:19.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xa1b394a6d1602d66060a6a338f606f40a9f27777",
        "name": "Loxely Partners",
        "symbol": "LOX",
        "deployer": "0xa7ba884561771e707f7f29bd5388b77f1e470daf",
        "block": 80495172,
        "ts": "2026-10-05T04:12:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xca6d37905e4f4b23f91a45829e152e38de5fd3f9",
        "name": "Clandra",
        "symbol": "CLANDRA",
        "deployer": "0x1f684a45be4df1ad92d65e45bcb3a491302a5000",
        "block": 80495146,
        "ts": "2026-10-05T04:12:14.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
