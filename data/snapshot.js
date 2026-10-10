/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-10T08:23:54.000Z",
    "opened_at": "2026-10-10T07:23:54.000Z",
    "window_hours": 1,
    "head_block": 84855628,
    "start_block": 84820540,
    "blocks_scanned": 35088,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 455,
    "unnamed_contracts": 0,
    "via_factory": 420,
    "no_receipt": 0,
    "candidates": 455,
    "mint_events": 16594,
    "deployers": 349,
    "roots": 483,
    "cleared_multiple": 119,
    "failed_gates": 105,
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
      "backpack-securities-spacex",
      "digital-optimus",
      "musk",
      "nft",
      "positions",
      "telemoney-tm",
      "tesselai",
      "uniswap-uni",
      "usdg"
    ],
    "top": {
      "root": "musk",
      "launches": 36,
      "deployers": 36,
      "baseline_share": 0.0004,
      "multiple": 197.8,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "musk",
        "launches": 36,
        "deployers": 36,
        "baseline_share": 0.0004,
        "multiple": 197.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nft",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 38.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 38.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "tesselai",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 33,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 33,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 24,
        "deployers": 24,
        "baseline_share": 0.0004,
        "multiple": 131.9,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 88%, merged to uniswap-uni"
      },
      {
        "root": "digital",
        "launches": 22,
        "deployers": 22,
        "baseline_share": 0.0004,
        "multiple": 120.9,
        "state": "MERGED",
        "reason": "digital + optimus co-occur 95%, merged to digital-optimus"
      },
      {
        "root": "optimus",
        "launches": 21,
        "deployers": 21,
        "baseline_share": 0.0004,
        "multiple": 115.4,
        "state": "MERGED",
        "reason": "digital + optimus co-occur 95%, merged to digital-optimus"
      },
      {
        "root": "uni",
        "launches": 21,
        "deployers": 21,
        "baseline_share": 0.0004,
        "multiple": 115.4,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 88%, merged to uniswap-uni"
      },
      {
        "root": "telemoney",
        "launches": 20,
        "deployers": 20,
        "baseline_share": 0.0004,
        "multiple": 109.9,
        "state": "MERGED",
        "reason": "telemoney + tm co-occur 100%, merged to telemoney-tm"
      },
      {
        "root": "tm",
        "launches": 20,
        "deployers": 20,
        "baseline_share": 0.0004,
        "multiple": 109.9,
        "state": "MERGED",
        "reason": "telemoney + tm co-occur 100%, merged to telemoney-tm"
      },
      {
        "root": "backpack",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 33,
        "state": "MERGED",
        "reason": "backpack + securities co-occur 100%, merged to backpack-securities-spacex"
      },
      {
        "root": "securities",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 33,
        "state": "MERGED",
        "reason": "backpack + securities co-occur 100%, merged to backpack-securities-spacex"
      },
      {
        "root": "spacex",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 33,
        "state": "MERGED",
        "reason": "backpack + securities co-occur 100%, merged to backpack-securities-spacex"
      },
      {
        "root": "ramses",
        "launches": 12,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 65.9,
        "state": "THIN",
        "reason": "ramses: 2 deployers < 6 required"
      },
      {
        "root": "volatile",
        "launches": 12,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 65.9,
        "state": "THIN",
        "reason": "volatile: 2 deployers < 6 required"
      },
      {
        "root": "mock",
        "launches": 6,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 33,
        "state": "THIN",
        "reason": "mock: 1 deployers < 6 required"
      },
      {
        "root": "quantum",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 27.5,
        "state": "THIN",
        "reason": "quantum: 5 deployers < 6 required"
      },
      {
        "root": "robinhood",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 27.5,
        "state": "THIN",
        "reason": "robinhood: 5 deployers < 6 required"
      },
      {
        "root": "weth",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 27.5,
        "state": "THIN",
        "reason": "weth: 4 deployers < 6 required"
      },
      {
        "root": "alux",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 22,
        "state": "THIN",
        "reason": "alux: 4 launches < 5 required"
      },
      {
        "root": "bucket",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 22,
        "state": "THIN",
        "reason": "bucket: 4 launches < 5 required"
      },
      {
        "root": "ram",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 22,
        "state": "THIN",
        "reason": "ram: 4 launches < 5 required"
      },
      {
        "root": "abu",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "abu: 3 launches < 5 required"
      },
      {
        "root": "agent",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "agent: 3 launches < 5 required"
      },
      {
        "root": "ape",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "ape: 3 launches < 5 required"
      },
      {
        "root": "big",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "big: 3 launches < 5 required"
      },
      {
        "root": "bingo",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "bingo: 3 launches < 5 required"
      },
      {
        "root": "br",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "br: 3 launches < 5 required"
      },
      {
        "root": "brainx",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "brainx: 3 launches < 5 required"
      },
      {
        "root": "brick",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "brick: 3 launches < 5 required"
      },
      {
        "root": "credit",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "credit: 3 launches < 5 required"
      },
      {
        "root": "danger",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "danger: 3 launches < 5 required"
      },
      {
        "root": "decoy",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "decoy: 3 launches < 5 required"
      },
      {
        "root": "dragons",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "dragons: 3 launches < 5 required"
      },
      {
        "root": "ed",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "ed: 3 launches < 5 required"
      },
      {
        "root": "enclave",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "enclave: 3 launches < 5 required"
      },
      {
        "root": "fictional",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "fictional: 3 launches < 5 required"
      },
      {
        "root": "frog",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "frog: 3 launches < 5 required"
      },
      {
        "root": "jackbox",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "jackbox: 3 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x27152d6d88288039f47c4183c77c082564361777",
        "name": "The Golden Monkey",
        "symbol": "Dolly",
        "deployer": "0xf4abdface0cc205c19f82cc0865c8b17f78b1b68",
        "block": 84855605,
        "ts": "2026-10-10T08:23:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xaa4312408ebbc7bcb674d082525d4fea740ad777",
        "name": "Tesselai",
        "symbol": "Tesselai",
        "deployer": "0x9a480a8380c3a02271936a3ddee8e034a5b06868",
        "block": 84855327,
        "ts": "2026-10-10T08:23:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x995e3afd989d995e3d429eb942c9dad9d16ee56d",
        "name": "webform",
        "symbol": "WEBFORM",
        "deployer": "0x6c14dda0ec59cd84c0bb2d26d0d39efb2bedde0b",
        "block": 84855315,
        "ts": "2026-10-10T08:23:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x00158a7cafd2349444363e08db8db5db97e46d99",
        "name": "Pebble",
        "symbol": "PEBBLE",
        "deployer": "0xce9647652dc1968a8f74524caf0450fd5c7c523d",
        "block": 84855294,
        "ts": "2026-10-10T08:23:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x952e688bdd2e2062bc4e463e98e1f031452b7a26",
        "name": "hoodlet",
        "symbol": "HOODLET",
        "deployer": "0x1efd94e3b167184e5b7c3f36cc363276e5fcfe3c",
        "block": 84855235,
        "ts": "2026-10-10T08:23:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x85bc01fb6593a27554c5dae1e9881b3c8d7a9c18",
        "name": "TeleMoney",
        "symbol": "TM",
        "deployer": "0x4465d521b228738bd8274b263decef976c64c611",
        "block": 84855191,
        "ts": "2026-10-10T08:23:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x07cfcf77caf30315408e9a6301d5e3ceebba95b3",
        "name": "asdf",
        "symbol": "asdf",
        "deployer": "0x9fd492e2394198c8824003b4a3ba6d78a0614710",
        "block": 84855027,
        "ts": "2026-10-10T08:22:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfe1f5685d28131d1529d6fc0967a3debd8e68d1b",
        "name": "MITCHELL",
        "symbol": "MITCH",
        "deployer": "0x4337050608d02173feea2e27ba65a1af0f948538",
        "block": 84855024,
        "ts": "2026-10-10T08:22:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x57069d845701b50f41327362c1c23789043f8dec",
        "name": "PitBoys",
        "symbol": "PITBOY",
        "deployer": "0x2858e8628327ab695bb751a328cfb3d5dfd762f4",
        "block": 84855012,
        "ts": "2026-10-10T08:22:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8d2939d29691de73b5c1dd0895a4b10dabca31c7",
        "name": "BULLHOOD",
        "symbol": "BULLHOOD",
        "deployer": "0xaa4e2e9ff0be4605902240f6b4009665bf4382e9",
        "block": 84854861,
        "ts": "2026-10-10T08:22:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x50af2f8ebfe5eb22e882b19012f11001a56b0cb2",
        "name": "Tesselai",
        "symbol": "Tesselai",
        "deployer": "0x5d91621b74d3f3a169e594c2ec3b24d426fe0bec",
        "block": 84854786,
        "ts": "2026-10-10T08:22:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x81fc45e35a207b57a4e1d53ffed7bcc605c3f13e",
        "name": "Predictor-49931941",
        "symbol": "PRD-49931941",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 84854587,
        "ts": "2026-10-10T08:22:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3e8aa7bd72e4894636d7ebdc32b4ce78d29c3b6f",
        "name": "Counterparty-49931941",
        "symbol": "CTR-49931941",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 84854587,
        "ts": "2026-10-10T08:22:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe4b9a60b78c90fca0dcb79d8f1cbca43ef33c83e",
        "name": "Trenchers",
        "symbol": "TRENCH",
        "deployer": "0xad020b6186f63c53e105d2d75c91ccbb1e546299",
        "block": 84854540,
        "ts": "2026-10-10T08:22:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x220e5162caed05345bf42796e8243b77ab5d7777",
        "name": "Poor",
        "symbol": "POOR",
        "deployer": "0xb66a0d760090a9389b77a9b2726f797ab718e21b",
        "block": 84854486,
        "ts": "2026-10-10T08:21:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8e030a6ae0881ae72e21cea4cd824afd560f61ac",
        "name": "TeleMoney",
        "symbol": "TM",
        "deployer": "0x691f970d59312fef5958f2dc485f8daf292d0d47",
        "block": 84854385,
        "ts": "2026-10-10T08:21:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x013812927671ae597b0a7d047c126db284e2fb3c",
        "name": "cherryOS",
        "symbol": "CHERRY",
        "deployer": "0x7b9fecdb11420c34bbabe5794cbfbb409270036e",
        "block": 84854243,
        "ts": "2026-10-10T08:21:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb46b51c511fe0f24b5973ad221a80ded5e56e235",
        "name": "Block_Lab",
        "symbol": "BLOCKLAB",
        "deployer": "0x294ef4f8a729f4c97151007121b9192f8a958f41",
        "block": 84854132,
        "ts": "2026-10-10T08:21:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1fa1712e47914cb8032d3dc6aeda06d46811f798",
        "name": "Tesselai",
        "symbol": "Tesselai",
        "deployer": "0x6e035fa80772a7af686ae767d1804d7687cf3be3",
        "block": 84854115,
        "ts": "2026-10-10T08:21:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x029dc4be537835bcb7dd2184369511ef728e7777",
        "name": "Wojo Drakula",
        "symbol": "WOJODRAK",
        "deployer": "0xa72d384419e08b0eeb43d96c73ba62b627de39a7",
        "block": 84854088,
        "ts": "2026-10-10T08:21:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5fc5360d0400a0fd4f2af552add042d716f1d168",
        "name": "Global Dollar",
        "symbol": "USDG",
        "deployer": "0x73a063c96b5d67863deaa7b163207e769a7c2cee",
        "block": 84854066,
        "ts": "2026-10-10T08:21:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2d5cb1e5282c7cce1d5c2b7d66b9c9eb0c0de689",
        "name": "Quantum Shit",
        "symbol": "QSHIT",
        "deployer": "0x9012917f51f621dbc225a556411c03dc391f46f2",
        "block": 84854038,
        "ts": "2026-10-10T08:21:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcf5fe77b974493750749079bfe40ee406efb76ee",
        "name": "Higgspad",
        "symbol": "HIGGS",
        "deployer": "0x362c61138eaa96b1cc28def290a93bf100dc06b0",
        "block": 84853800,
        "ts": "2026-10-10T08:20:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x27022411611fa8e816d3f68ada8ee0e6a1387777",
        "name": "Isithot",
        "symbol": "ISITHOT",
        "deployer": "0xbe969c5bc42f1e30814fbde46538451791e40187",
        "block": 84853723,
        "ts": "2026-10-10T08:20:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9f5723762cf9ac5a68fff15bd8f1d5365f8a7777",
        "name": "Xx",
        "symbol": "XX",
        "deployer": "0x22be0787ea7621328214b466d07bf3d2f5cda2b2",
        "block": 84853638,
        "ts": "2026-10-10T08:20:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1aac25bfce7b76adbd7f4ceb623cb57fd3750ee9",
        "name": "WRESTLERS",
        "symbol": "WRESTLER",
        "deployer": "0x97e8d1e827adb6814416c397cd4819076affb2c3",
        "block": 84853609,
        "ts": "2026-10-10T08:20:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd6074d4f65087b83821ad2ad39a54604367a23bf",
        "name": "receipts.bingo",
        "symbol": "receipts",
        "deployer": "0x3bc46589dbc78c35b7fb0f5fb532c628c3486d04",
        "block": 84853591,
        "ts": "2026-10-10T08:20:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x87469418f0ab02f2a3d4c0b0558837b7617575ed",
        "name": "Squink",
        "symbol": "SQUINK",
        "deployer": "0x6399cd6b8234a968d1a608a8f798381c54026f83",
        "block": 84853472,
        "ts": "2026-10-10T08:20:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3abb8e9c1065291c4e0b9a999e876f28eb5334ee",
        "name": "SurplusLLM",
        "symbol": "SURPLUS",
        "deployer": "0x3deb98472c24b7c9eeda1f9b85eeb8d0bfa10772",
        "block": 84853248,
        "ts": "2026-10-10T08:19:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9936ef877abbab2be1dd750fc08395bbd193264e",
        "name": "Giwa Punk",
        "symbol": "Giwa Punj",
        "deployer": "0x96535e1fb7c5ec84e8921d58d98becc5ecc8968a",
        "block": 84853237,
        "ts": "2026-10-10T08:19:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x801835950feca91203b845ae8bb61c4e2d5353ae",
        "name": "LOCK CUBE",
        "symbol": "CUBE",
        "deployer": "0xdc6fceee837ae3fabb8348042f120634658c8ae9",
        "block": 84853055,
        "ts": "2026-10-10T08:19:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6476920fa46afbb627ea4d35674f8715e1183090",
        "name": "Pebble Agent",
        "symbol": "PEBBLE",
        "deployer": "0x417cdc784fd4176d71a91ea885630f0efed4db4d",
        "block": 84853044,
        "ts": "2026-10-10T08:19:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xadea92602438db2ce3f6b525e410ff1b903598b7",
        "name": "Riptide",
        "symbol": "RIPTIDE",
        "deployer": "0xaefa2328dac75b89bfca983781adee5a30cabf5b",
        "block": 84852904,
        "ts": "2026-10-10T08:19:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd523261bd079b241869f59b9e71a28344c301e18",
        "name": "absolutely",
        "symbol": "ABSOLUTELY",
        "deployer": "0xd20278dc748cfe4a381e8969751873f1ab80cce4",
        "block": 84852817,
        "ts": "2026-10-10T08:19:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7dad9a585f935aac39e2e74818ad347ef78de685",
        "name": "Hood Siege Heroes",
        "symbol": "HSHERO",
        "deployer": "0xc74332c14fc16e3c1c6f55039adeeab5bb1aa6b3",
        "block": 84852815,
        "ts": "2026-10-10T08:19:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe8de5d5df79e1d548f0dd663413aeae0d1b8c553",
        "name": "Bishop P",
        "symbol": "BISH",
        "deployer": "0xdc6fceee837ae3fabb8348042f120634658c8ae9",
        "block": 84852772,
        "ts": "2026-10-10T08:19:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xed2fe00b0423366a29d930284a8d3c4ad4591306",
        "name": "Jeremy Boote",
        "symbol": "JeremyBoote",
        "deployer": "0x3b3180ee25e5d1ef1e30e0000056225f2d3b4049",
        "block": 84852466,
        "ts": "2026-10-10T08:18:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xaaae5223d071a13e3d1256a0ce567314a2fd7777",
        "name": "HERD",
        "symbol": "HERD",
        "deployer": "0x0e804263899712479b612e0f6c76e3223dc6da8a",
        "block": 84852350,
        "ts": "2026-10-10T08:18:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc0380c1ff9a5f9e7373fd4f19208d7187ca76cfe",
        "name": "Tesselai",
        "symbol": "Tesselai",
        "deployer": "0xe55beb76f56ad88ebdd7664742fb86744448f29f",
        "block": 84852312,
        "ts": "2026-10-10T08:18:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf264eb51b1f520538234d655ecc2c3f6d4223fdb",
        "name": "TeleMoney",
        "symbol": "TM",
        "deployer": "0x9cee8e5c2b995f6ccce723318841953547c624b6",
        "block": 84852288,
        "ts": "2026-10-10T08:18:11.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
