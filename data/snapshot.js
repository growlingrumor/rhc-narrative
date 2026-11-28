/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-28T02:50:01.000Z",
    "opened_at": "2026-11-28T01:50:01.000Z",
    "window_hours": 1,
    "head_block": 124723060,
    "start_block": 124692060,
    "blocks_scanned": 31000,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 281,
    "unnamed_contracts": 0,
    "via_factory": 261,
    "no_receipt": 0,
    "candidates": 281,
    "mint_events": 10936,
    "deployers": 171,
    "roots": 354,
    "cleared_multiple": 244,
    "failed_gates": 242,
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
      "project-mandy"
    ],
    "top": null,
    "rows": [
      {
        "root": "project",
        "launches": 13,
        "deployers": 13,
        "baseline_share": 0.0024,
        "multiple": 19.3,
        "state": "MERGED",
        "reason": "project + mandy co-occur 85%, merged to project-mandy"
      },
      {
        "root": "mandy",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 97.9,
        "state": "MERGED",
        "reason": "project + mandy co-occur 85%, merged to project-mandy"
      },
      {
        "root": "basket",
        "launches": 34,
        "deployers": 1,
        "baseline_share": 0.0009,
        "multiple": 134.4,
        "state": "THIN",
        "reason": "basket: 1 deployers < 6 required"
      },
      {
        "root": "index",
        "launches": 34,
        "deployers": 1,
        "baseline_share": 0.0026,
        "multiple": 46.5,
        "state": "THIN",
        "reason": "index: 1 deployers < 6 required"
      },
      {
        "root": "uniswap",
        "launches": 11,
        "deployers": 9,
        "baseline_share": 0.0509,
        "multiple": 0.8,
        "state": "BELOW",
        "reason": "uniswap: 0.8x over baseline < 6.0x required"
      },
      {
        "root": "usdg",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0203,
        "multiple": 1.4,
        "state": "BELOW",
        "reason": "usdg: 1.4x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 7,
        "deployers": 6,
        "baseline_share": 0.0424,
        "multiple": 0.6,
        "state": "BELOW",
        "reason": "uni: 0.6x over baseline < 6.0x required"
      },
      {
        "root": "mars",
        "launches": 6,
        "deployers": 5,
        "baseline_share": 0.0018,
        "multiple": 11.9,
        "state": "THIN",
        "reason": "mars: 5 deployers < 6 required"
      },
      {
        "root": "daw",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 44.5,
        "state": "THIN",
        "reason": "daw: 5 deployers < 6 required"
      },
      {
        "root": "ib",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 44.5,
        "state": "THIN",
        "reason": "ib: 1 deployers < 6 required"
      },
      {
        "root": "moonboy",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 44.5,
        "state": "THIN",
        "reason": "moonboy: 5 deployers < 6 required"
      },
      {
        "root": "robinhood",
        "launches": 5,
        "deployers": 2,
        "baseline_share": 0.0513,
        "multiple": 0.3,
        "state": "BELOW",
        "reason": "robinhood: 0.3x over baseline < 6.0x required"
      },
      {
        "root": "dawkoins",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 35.6,
        "state": "THIN",
        "reason": "dawkoins: 4 launches < 5 required"
      },
      {
        "root": "texel",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 35.6,
        "state": "THIN",
        "reason": "texel: 4 launches < 5 required"
      },
      {
        "root": "layerbank",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0053,
        "multiple": 2.7,
        "state": "BELOW",
        "reason": "layerbank: 2.7x over baseline < 6.0x required"
      },
      {
        "root": "ai",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0081,
        "multiple": 1.8,
        "state": "BELOW",
        "reason": "ai: 1.8x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0167,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "positions: 0.9x over baseline < 6.0x required"
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
        "root": "coinop",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 26.7,
        "state": "THIN",
        "reason": "coinop: 3 launches < 5 required"
      },
      {
        "root": "dawkoin",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 26.7,
        "state": "THIN",
        "reason": "dawkoin: 3 launches < 5 required"
      },
      {
        "root": "hypeball",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 26.7,
        "state": "THIN",
        "reason": "hypeball: 3 launches < 5 required"
      },
      {
        "root": "jeffle",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 26.7,
        "state": "THIN",
        "reason": "jeffle: 3 launches < 5 required"
      },
      {
        "root": "marscoin",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 26.7,
        "state": "THIN",
        "reason": "marscoin: 3 launches < 5 required"
      },
      {
        "root": "snowball",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 26.7,
        "state": "THIN",
        "reason": "snowball: 3 launches < 5 required"
      },
      {
        "root": "trumpx",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 26.7,
        "state": "THIN",
        "reason": "trumpx: 3 launches < 5 required"
      },
      {
        "root": "chop",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0041,
        "multiple": 2.6,
        "state": "BELOW",
        "reason": "chop: 2.6x over baseline < 6.0x required"
      },
      {
        "root": "giga",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0041,
        "multiple": 2.6,
        "state": "BELOW",
        "reason": "giga: 2.6x over baseline < 6.0x required"
      },
      {
        "root": "dog",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0058,
        "multiple": 1.8,
        "state": "BELOW",
        "reason": "dog: 1.8x over baseline < 6.0x required"
      },
      {
        "root": "staked",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0069,
        "multiple": 1.5,
        "state": "BELOW",
        "reason": "staked: 1.5x over baseline < 6.0x required"
      },
      {
        "root": "weth",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0073,
        "multiple": 1.5,
        "state": "BELOW",
        "reason": "weth: 1.5x over baseline < 6.0x required"
      },
      {
        "root": "volatile",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0083,
        "multiple": 1.3,
        "state": "BELOW",
        "reason": "volatile: 1.3x over baseline < 6.0x required"
      },
      {
        "root": "aetheryn",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 17.8,
        "state": "THIN",
        "reason": "aetheryn: 2 launches < 5 required"
      },
      {
        "root": "apes",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 17.8,
        "state": "THIN",
        "reason": "apes: 2 launches < 5 required"
      },
      {
        "root": "dacitycoin",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 17.8,
        "state": "THIN",
        "reason": "dacitycoin: 2 launches < 5 required"
      },
      {
        "root": "dcty",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 17.8,
        "state": "THIN",
        "reason": "dcty: 2 launches < 5 required"
      },
      {
        "root": "ghood",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 17.8,
        "state": "THIN",
        "reason": "ghood: 2 launches < 5 required"
      },
      {
        "root": "goldstein",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 17.8,
        "state": "THIN",
        "reason": "goldstein: 2 launches < 5 required"
      },
      {
        "root": "greenshoe",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 17.8,
        "state": "THIN",
        "reason": "greenshoe: 2 launches < 5 required"
      },
      {
        "root": "gshoe",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 17.8,
        "state": "THIN",
        "reason": "gshoe: 2 launches < 5 required"
      },
      {
        "root": "made",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 17.8,
        "state": "THIN",
        "reason": "made: 2 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x377c81c10965df31e139f0553672eba7c110f720",
        "name": "Lokicoin",
        "symbol": "LOKI",
        "deployer": "0x4337002c5702ce424cb62a56ca038e31e1d4a93d",
        "block": 124723014,
        "ts": "2026-11-28T02:49:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x112495a94b0ab18da95263b77513a7d40d65380a",
        "name": "Goldstein Group Seats",
        "symbol": "GSEAT",
        "deployer": "0x92370f40b793e8f5ea51ddcfc66c47bf33c237fb",
        "block": 124722919,
        "ts": "2026-11-28T02:49:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1ebbd91ead87e7f0edaf01b5e6cbdb06dbe53121",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x8c26a8a38aef7f1b0728fc7a42c12fa0ef52ceb0",
        "block": 124722863,
        "ts": "2026-11-28T02:49:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x52746cae73c92e1642041aac5130a6a4baedd84b",
        "name": "paired",
        "symbol": "paired",
        "deployer": "0xcb37b45e7975497d84adb5dd9ebbf6d82b58040b",
        "block": 124722828,
        "ts": "2026-11-28T02:49:36.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xd847bb5461e3d00a55f893a3902d5368021d4dee",
        "name": "Project Mandy",
        "symbol": "MANDY",
        "deployer": "0x8c26a8a38aef7f1b0728fc7a42c12fa0ef52ceb0",
        "block": 124722571,
        "ts": "2026-11-28T02:49:07.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x471a9200e9c7009b72520b9bd3ee5119afb641c9",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x1222435db2c4c881003043bdd36318e46d5db630",
        "block": 124722508,
        "ts": "2026-11-28T02:49:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x709844ef5d7d0d024b521e07ddb3c7448de5ce04",
        "name": "mihao",
        "symbol": "小猫仙人",
        "deployer": "0xf8307eb6b9e68b32a247f3800ae98d556f66a029",
        "block": 124722498,
        "ts": "2026-11-28T02:48:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf2d6c7310063a71fd13a376682ec5818320a8d5f",
        "name": "DacityCoin",
        "symbol": "DCTY",
        "deployer": "0x1222435db2c4c881003043bdd36318e46d5db630",
        "block": 124722154,
        "ts": "2026-11-28T02:48:23.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x1715471db8e2c34667c3712161b39b3583677777",
        "name": "ni hao cat",
        "symbol": "mihao",
        "deployer": "0xd5acc5b1aa3418d47cfceb0ffca18048df0fc108",
        "block": 124722050,
        "ts": "2026-11-28T02:48:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbba1f2627aa5440c14c2fdd8b1335c308b8a040e",
        "name": "MoonBoy",
        "symbol": "MoonBoy",
        "deployer": "0xa01e44a05ba820001f22cab452ac13ab9812b956",
        "block": 124722012,
        "ts": "2026-11-28T02:48:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x85e5c9d0e3bc109f083caca7ebdad1ab945f5303",
        "name": "Jeffle",
        "symbol": "JEFFLE",
        "deployer": "0x5e39304d0e45ee66d763cf0646e916be5a99c467",
        "block": 124722000,
        "ts": "2026-11-28T02:48:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x436aa17923095760578d7ba3580f90bf919c59ca",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x917b35fb64a7402c4a1efbe52063b83f1a19817e",
        "block": 124721956,
        "ts": "2026-11-28T02:48:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa6308e0ba1cfa652023ec053445eca609eff23ce",
        "name": "Chop AGENTOS",
        "symbol": "chAGENTOS",
        "deployer": "0x9dda4b7034666185739bd2a48e54f628e698f5a6",
        "block": 124721868,
        "ts": "2026-11-28T02:47:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x250bcaa43d59d5f8b3b4b8e14d3bca29711b21cb",
        "name": "Miss Toad Pepe",
        "symbol": "MSTOAD",
        "deployer": "0x4337001fff419768e088ce247456c1b892888084",
        "block": 124721648,
        "ts": "2026-11-28T02:47:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6a563e6d1d6877abaa46658b70d9d618f95b1e18",
        "name": "Work Work Work",
        "symbol": "WORK",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 124721626,
        "ts": "2026-11-28T02:47:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0c19439c8d547f709af7bc62c8818a0525cdcbb5",
        "name": "paired",
        "symbol": "paired",
        "deployer": "0x2afbdc7a119ca326feae2d5ece5d779813388b83",
        "block": 124721239,
        "ts": "2026-11-28T02:46:43.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x94dc55a78cdc4d71e063fa30f975b9b769897777",
        "name": "MOSS",
        "symbol": "MOSS",
        "deployer": "0x21853863aeec000ebfa52e46b366fdf2ac02ca6b",
        "block": 124720909,
        "ts": "2026-11-28T02:46:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x97e25520f75de901555996a52cffafe1e72d7777",
        "name": "MOMO",
        "symbol": "MOMO",
        "deployer": "0x980b9bb5b3163638e0a35f8f26ff40547b16e2a9",
        "block": 124720881,
        "ts": "2026-11-28T02:46:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x933e51d1063240f93e2a990a1ca79db853735b9c",
        "name": "Ramses Volatile - RAM/fBOMB on Robinhood💥",
        "symbol": "Volatile - RAM/fBOMB on Robinhood💥",
        "deployer": "0xcbeb24e8fc568001e83430ec4929ce56b29ba9a2",
        "block": 124720702,
        "ts": "2026-11-28T02:45:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xaf217b741bea86cb65308c52ac4b0d07f1ec7777",
        "name": "Jeffle",
        "symbol": "JEFFLE",
        "deployer": "0xe26a8a93a803f6dcc9355da3beac69d733ddfd5d",
        "block": 124720672,
        "ts": "2026-11-28T02:45:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8383172decf7b86f93a9121893e4bd608a151e18",
        "name": "Killing Friendly Customers",
        "symbol": "KFC",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 124720592,
        "ts": "2026-11-28T02:45:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0f34f7f7b558f43a821af4181f0f8e5bc4b74892",
        "name": "Arcadia Staked Metadex03 CL Positions",
        "symbol": "aSMDEXCLP",
        "deployer": "0x163cca8f161cbbb401a96adf4cbf4d74f3fad1ed",
        "block": 124720454,
        "ts": "2026-11-28T02:45:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x88c4c42ed68584ff02f5a00d5d3d985108a3961c",
        "name": "Edel",
        "symbol": "EDEL",
        "deployer": "0xbe9306ddf2c0ddd69227adb2c7e7ef4d0b5697d5",
        "block": 124720375,
        "ts": "2026-11-28T02:45:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8f0b4451d86d6c78b3dbf1bcc8698dacce9db6ea",
        "name": "Dollhairs",
        "symbol": "DOLLHAIRS",
        "deployer": "0x117f2067a43ec8d86f1fa562480ec6852f7aaef2",
        "block": 124719817,
        "ts": "2026-11-28T02:44:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x193078f042d7c8898c3ddf481b9e26fae3e9b02e",
        "name": "Flock Lend Borrowable",
        "symbol": "bFLOCK",
        "deployer": "0x097ba31b7acffd75b909fc7bef2e55424d2dacdc",
        "block": 124719654,
        "ts": "2026-11-28T02:43:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7f67a6886e3dd9be68b20393fe94237cbf9b3b32",
        "name": "Return to Nvidia",
        "symbol": "CEO",
        "deployer": "0x4337001fff419768e088ce247456c1b892888084",
        "block": 124719412,
        "ts": "2026-11-28T02:43:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb47a306bd89e8b6fa2b14f553e534adcd7cc337f",
        "name": "CollectorCrypt",
        "symbol": "COLLECTOR",
        "deployer": "0x7621407c82792a888d97c54d49e33195274160f2",
        "block": 124719257,
        "ts": "2026-11-28T02:42:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xffecaf2390e5ff1fa6587591f38c64a9ef280087",
        "name": "mihao",
        "symbol": "小猫仙人",
        "deployer": "0xb326902c4327d61e6c89e4944c3ef3d8a3194c0b",
        "block": 124719143,
        "ts": "2026-11-28T02:42:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7477d75cb0b74db9c6411ed855cb0bae33c17777",
        "name": "Chumbimp",
        "symbol": "CHUMBIMP",
        "deployer": "0x4f6d40378da3874cb49b6834b4c20ada43842691",
        "block": 124719066,
        "ts": "2026-11-28T02:42:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5de6f92f0c61ebe82410d683cf3c94797a71e301",
        "name": "smoking Inu",
        "symbol": "SI",
        "deployer": "0x4337005db25dbad41da5692ba1188751ee5d98b6",
        "block": 124718836,
        "ts": "2026-11-28T02:42:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x61bd43c1bda81573e3bcbada96aaa81690000a50",
        "name": "Edge Fund",
        "symbol": "EDGE",
        "deployer": "0xa3af060b6b7140866211c4d7ab608cede8432c70",
        "block": 124718813,
        "ts": "2026-11-28T02:42:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xca7278419c310ee5d659f02faa03189ca58b341c",
        "name": "Pixel Apes",
        "symbol": "pixelapes",
        "deployer": "0xb6822af5166e6bde748f73324daf352d886f1039",
        "block": 124718763,
        "ts": "2026-11-28T02:41:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1bae399b820cd6d1c0f19ffd1fbb30c87c646ae7",
        "name": "Jeffle",
        "symbol": "JEFFLE",
        "deployer": "0x04541610c29cfe986ad338b48eed1632b6ca567b",
        "block": 124718637,
        "ts": "2026-11-28T02:41:43.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x2f89f59e8f55e8340597cb6d164745623a467777",
        "name": "Vargos",
        "symbol": "VARGOS",
        "deployer": "0xea5c98a6164850f6ace669bd753de6928881b65e",
        "block": 124718634,
        "ts": "2026-11-28T02:41:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2c4c44425600120e24e9e6c871d00a9de8914d24",
        "name": "Cashfish",
        "symbol": "CASHFISH",
        "deployer": "0x4337004ec9c1417f1c7a26ebd4b4fbed6acf9e5d",
        "block": 124718408,
        "ts": "2026-11-28T02:41:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x606389fac8353a9b5151b0924187fe8e09c67391",
        "name": "Machine Inu",
        "symbol": "MI",
        "deployer": "0x9704a7ba11a60466596a74b9a65de606e53dfffe",
        "block": 124718080,
        "ts": "2026-11-28T02:40:38.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xe8191236d8c56a2e8e98b5b1ab8c3435a7a06898",
        "name": "BambooDun",
        "symbol": "BDUN",
        "deployer": "0x0413bd794363e169c173e30a998bfe4bdb97ec6b",
        "block": 124718015,
        "ts": "2026-11-28T02:40:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd0de4cc915770dcc308ac09f252bf366bfb17777",
        "name": "Bags",
        "symbol": "BAGS",
        "deployer": "0x21853863aeec000ebfa52e46b366fdf2ac02ca6b",
        "block": 124717921,
        "ts": "2026-11-28T02:40:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb6ef1999ea38b297219ca40c2433806714d87777",
        "name": "BLOCKCHAIN WEEK",
        "symbol": "Blockchain Week",
        "deployer": "0x980b9bb5b3163638e0a35f8f26ff40547b16e2a9",
        "block": 124717857,
        "ts": "2026-11-28T02:40:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe76751e34bfde76d5d4cc16a49695ce7ddb251f2",
        "name": "MoonBoy",
        "symbol": "MoonBoy",
        "deployer": "0x7bf98e35dae78cf82f3541987e654cb4f7f31df1",
        "block": 124717540,
        "ts": "2026-11-28T02:39:37.000Z",
        "ts_exact": true,
        "direct": true
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
