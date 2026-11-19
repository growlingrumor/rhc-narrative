/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-19T07:41:38.000Z",
    "opened_at": "2026-11-19T06:41:38.000Z",
    "window_hours": 1,
    "head_block": 118058870,
    "start_block": 118025055,
    "blocks_scanned": 33815,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 309,
    "unnamed_contracts": 0,
    "via_factory": 263,
    "no_receipt": 0,
    "candidates": 309,
    "mint_events": 9982,
    "deployers": 207,
    "roots": 366,
    "cleared_multiple": 248,
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
      "dacitycoin",
      "dca",
      "dcty",
      "gta-irl-com"
    ],
    "top": {
      "root": "dacitycoin",
      "launches": 36,
      "deployers": 26,
      "baseline_share": 0.0004,
      "multiple": 291.3,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "dacitycoin",
        "launches": 36,
        "deployers": 26,
        "baseline_share": 0.0004,
        "multiple": 291.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "dcty",
        "launches": 19,
        "deployers": 12,
        "baseline_share": 0.0004,
        "multiple": 153.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "dca",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 72.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "gta",
        "launches": 22,
        "deployers": 21,
        "baseline_share": 0.0016,
        "multiple": 44.5,
        "state": "MERGED",
        "reason": "gta + irl co-occur 94%, merged to gta-irl-com"
      },
      {
        "root": "irl",
        "launches": 16,
        "deployers": 16,
        "baseline_share": 0.0004,
        "multiple": 129.4,
        "state": "MERGED",
        "reason": "gta + irl co-occur 94%, merged to gta-irl-com"
      },
      {
        "root": "com",
        "launches": 15,
        "deployers": 15,
        "baseline_share": 0.0004,
        "multiple": 121.4,
        "state": "MERGED",
        "reason": "gta + irl co-occur 94%, merged to gta-irl-com"
      },
      {
        "root": "uniswap",
        "launches": 19,
        "deployers": 15,
        "baseline_share": 0.0509,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "uniswap: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 15,
        "deployers": 13,
        "baseline_share": 0.0424,
        "multiple": 1.1,
        "state": "BELOW",
        "reason": "uni: 1.1x over baseline < 6.0x required"
      },
      {
        "root": "robinhood",
        "launches": 10,
        "deployers": 6,
        "baseline_share": 0.0513,
        "multiple": 0.6,
        "state": "BELOW",
        "reason": "robinhood: 0.6x over baseline < 6.0x required"
      },
      {
        "root": "usdg",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0203,
        "multiple": 1.1,
        "state": "BELOW",
        "reason": "usdg: 1.1x over baseline < 6.0x required"
      },
      {
        "root": "nft",
        "launches": 6,
        "deployers": 5,
        "baseline_share": 0.0201,
        "multiple": 1,
        "state": "BELOW",
        "reason": "nft: 1.0x over baseline < 6.0x required"
      },
      {
        "root": "doe",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 40.5,
        "state": "THIN",
        "reason": "doe: 1 deployers < 6 required"
      },
      {
        "root": "layerbank",
        "launches": 5,
        "deployers": 2,
        "baseline_share": 0.0053,
        "multiple": 3.1,
        "state": "BELOW",
        "reason": "layerbank: 3.1x over baseline < 6.0x required"
      },
      {
        "root": "dog",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0058,
        "multiple": 2.8,
        "state": "BELOW",
        "reason": "dog: 2.8x over baseline < 6.0x required"
      },
      {
        "root": "staked",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0069,
        "multiple": 2.3,
        "state": "BELOW",
        "reason": "staked: 2.3x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0167,
        "multiple": 1,
        "state": "BELOW",
        "reason": "positions: 1.0x over baseline < 6.0x required"
      },
      {
        "root": "vice",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0005,
        "multiple": 25.9,
        "state": "THIN",
        "reason": "vice: 4 launches < 5 required"
      },
      {
        "root": "city",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0008,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "city: 4 launches < 5 required"
      },
      {
        "root": "market",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0011,
        "multiple": 11.8,
        "state": "THIN",
        "reason": "market: 4 launches < 5 required"
      },
      {
        "root": "cat",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.013,
        "multiple": 1,
        "state": "BELOW",
        "reason": "cat: 1.0x over baseline < 6.0x required"
      },
      {
        "root": "rbh",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.3,
        "state": "THIN",
        "reason": "rbh: 3 launches < 5 required"
      },
      {
        "root": "semiosis",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 24.3,
        "state": "THIN",
        "reason": "semiosis: 3 launches < 5 required"
      },
      {
        "root": "heroes",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0006,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "heroes: 3 launches < 5 required"
      },
      {
        "root": "ant",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0012,
        "multiple": 8.1,
        "state": "THIN",
        "reason": "ant: 3 launches < 5 required"
      },
      {
        "root": "nvda",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0024,
        "multiple": 4,
        "state": "BELOW",
        "reason": "nvda: 4.0x over baseline < 6.0x required"
      },
      {
        "root": "pos",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0044,
        "multiple": 2.2,
        "state": "BELOW",
        "reason": "pos: 2.2x over baseline < 6.0x required"
      },
      {
        "root": "position",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0054,
        "multiple": 1.8,
        "state": "BELOW",
        "reason": "position: 1.8x over baseline < 6.0x required"
      },
      {
        "root": "weth",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0073,
        "multiple": 1.3,
        "state": "BELOW",
        "reason": "weth: 1.3x over baseline < 6.0x required"
      },
      {
        "root": "ai",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0081,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "ai: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "agnt",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "agnt: 2 launches < 5 required"
      },
      {
        "root": "agntmarket",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "agntmarket: 2 launches < 5 required"
      },
      {
        "root": "alif",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "alif: 2 launches < 5 required"
      },
      {
        "root": "alifcash",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "alifcash: 2 launches < 5 required"
      },
      {
        "root": "araico",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "araico: 2 launches < 5 required"
      },
      {
        "root": "arcadia",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "arcadia: 2 launches < 5 required"
      },
      {
        "root": "audacity",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "audacity: 2 launches < 5 required"
      },
      {
        "root": "cdog",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "cdog: 2 launches < 5 required"
      },
      {
        "root": "citizen",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "citizen: 2 launches < 5 required"
      },
      {
        "root": "clc",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "clc: 2 launches < 5 required"
      },
      {
        "root": "cool",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "cool: 2 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x7f49387510ac366abc6cd572d2c6b36396047777",
        "name": "Elyra",
        "symbol": "ELYRA",
        "deployer": "0x7485fbfd99993dab4c9964f53791e40d14253c97",
        "block": 118058692,
        "ts": "2026-11-19T07:41:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3be02bc883667f333321fc49c7b756c5ae137c6d",
        "name": "Elyra",
        "symbol": "ELYRA",
        "deployer": "0x132131dba5274bb3e78239b39e40919f84d32f4d",
        "block": 118058627,
        "ts": "2026-11-19T07:41:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4822c9cd8d756c69550676dc2e7213686e1cca69",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xac71a993c81f6677eed4d9e281a67ceedecb7bf5",
        "block": 118058465,
        "ts": "2026-11-19T07:40:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x26f3b1d3531600d75e5b968e4f384d6af0a16299",
        "name": "Wrapped Blackberry • Robinhood Token",
        "symbol": "wBB",
        "deployer": "0x772890c605342bcd69fc712ac242674156195028",
        "block": 118058353,
        "ts": "2026-11-19T07:40:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2621ac9474d23e2bfef50d552a0c5f51f9c4164a",
        "name": "GTA6CAT",
        "symbol": "GATO",
        "deployer": "0x4337004ec9c1417f1c7a26ebd4b4fbed6acf9e5d",
        "block": 118058318,
        "ts": "2026-11-19T07:40:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x24b84023c8e4da635be228c380c09bfe5271bf9d",
        "name": "Meridian Liquidity Provider",
        "symbol": "MLP",
        "deployer": "0x7f1a30357db82bc0d722e97504e027dc6b715253",
        "block": 118057951,
        "ts": "2026-11-19T07:40:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x68ae3a8c8a61256fe927111816225a106f4d7777",
        "name": "Curb Market",
        "symbol": "CURB",
        "deployer": "0xa7ba884561771e707f7f29bd5388b77f1e470daf",
        "block": 118057903,
        "ts": "2026-11-19T07:40:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2f93115915414a9f8b029d5e3b3d0fce60aed632",
        "name": "Curb Market",
        "symbol": "CURB",
        "deployer": "0xd6a4a37d22606b8b355fd9e10398ab1ae8878abc",
        "block": 118057831,
        "ts": "2026-11-19T07:39:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xab521a90c2223bbdbb1bebc8fa797a0e70187777",
        "name": "PumpMas",
        "symbol": "PUMPMAS",
        "deployer": "0x1b4ebe73585b94578dc055c6ac7e89333fdadcf7",
        "block": 118057800,
        "ts": "2026-11-19T07:39:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x72b8a22d45ca061ba6d8f452cb2be4f579bc5515",
        "name": "Quackers",
        "symbol": "QUACKERS",
        "deployer": "0xa11dc00f919d02232cd2f9714d76762acd09fbef",
        "block": 118057777,
        "ts": "2026-11-19T07:39:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9fae770e44e64f22b4fd5c2974a78f067640c90b",
        "name": "BrownFi V3",
        "symbol": "BF-V3",
        "deployer": "0x67337a62e42f0e021323d4feeec22ddf431aa8ae",
        "block": 118057692,
        "ts": "2026-11-19T07:39:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1fd8cb41085a8544244f44ae6db81e8552277777",
        "name": "Dealt52",
        "symbol": "DEALT52",
        "deployer": "0xfe2cb6b8c284d632390268d8007873ac5865db0b",
        "block": 118057506,
        "ts": "2026-11-19T07:39:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa313bcff42d77679e218ab7b77ac790f3c357d99",
        "name": "dealt52",
        "symbol": "DEALT52",
        "deployer": "0x72042beadbb251e9e24d3c41a4d89d2bd6f3d18f",
        "block": 118057392,
        "ts": "2026-11-19T07:39:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc4b77a448e26c90f67c3b2c5e745c195e05d5344",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xc9964fddbb7e50f3429606101340b513f9000c44",
        "block": 118057290,
        "ts": "2026-11-19T07:38:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0c43dec1e5204ab380c332846b5be06407757777",
        "name": "Claudia",
        "symbol": "CLAUDIA",
        "deployer": "0x49e73fb39d82753c6384e2226e1ee239153a2d57",
        "block": 118056953,
        "ts": "2026-11-19T07:38:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9c71cf5b8d39cce128e5bb0d84fe64d992038747",
        "name": "BurstingBagel",
        "symbol": "BAGEL",
        "deployer": "0x6866a6a28129839f67da069ceb68ad258830363e",
        "block": 118056927,
        "ts": "2026-11-19T07:38:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfe38805d8d87a3dcf9356d7029aecaa83afb240d",
        "name": "DacityCoin",
        "symbol": "DCTY",
        "deployer": "0xb11a7d4f6d524870f01bf17964442b082bf53799",
        "block": 118056810,
        "ts": "2026-11-19T07:38:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x09e1806b6f72eb1a57b5b232d645f61a52d1f510",
        "name": "GTA VI Leaked Map State Of Leonida",
        "symbol": "GTA6MAP",
        "deployer": "0x4337004ec9c1417f1c7a26ebd4b4fbed6acf9e5d",
        "block": 118056675,
        "ts": "2026-11-19T07:37:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4a35a5ec2a50a4d2957b2f2366e017f526cab318",
        "name": "Foundry Compute Dollar",
        "symbol": "USDF",
        "deployer": "0xc1f3547241fe1bc7cb4fb943c67ef5d0263da352",
        "block": 118056564,
        "ts": "2026-11-19T07:37:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6166dfea6f51dad6102b4d1d9c2683dcab7aea82",
        "name": "Space Ape",
        "symbol": "SPCA",
        "deployer": "0xc9964fddbb7e50f3429606101340b513f9000c44",
        "block": 118056393,
        "ts": "2026-11-19T07:37:29.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x1c7dddc2fa9bec0549fcdeabcfebd37452d2cdcb",
        "name": "Overcall Channel",
        "symbol": "OCCH",
        "deployer": "0x1748818e600ffa7e0204136fccf114a657623de6",
        "block": 118056359,
        "ts": "2026-11-19T07:37:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc96591de59a62246fff2ab15f95370d488e863fa",
        "name": "Fatty Dog",
        "symbol": "DOG",
        "deployer": "0x67337a62e42f0e021323d4feeec22ddf431aa8ae",
        "block": 118056049,
        "ts": "2026-11-19T07:36:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcdfdf45f1ff346998a49e8113735081b923498df",
        "name": "Chop CHOP",
        "symbol": "chCHOP",
        "deployer": "0x863f34365af083fe1cf378cf601a44bca593dba3",
        "block": 118056032,
        "ts": "2026-11-19T07:36:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4cd16a7d7df18010c845087f4ad7ffc3ac0f0087",
        "name": "GTA IRL",
        "symbol": "IRL",
        "deployer": "0x2bcb6d7b5b12f94b91441aa2cdce68e3d96877af",
        "block": 118055709,
        "ts": "2026-11-19T07:36:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9f506b0d84c9e9e190bfeacc987d4e6caebd3c8a",
        "name": "Condom",
        "symbol": "CONDOM",
        "deployer": "0xbe4545a880fe5193c273fa83a9bdacc74cc2db54",
        "block": 118055598,
        "ts": "2026-11-19T07:36:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf41e538c64639f939e1ed5da6748dd64746d685f",
        "name": "Cool Dog",
        "symbol": "CDOG",
        "deployer": "0x9f55b86be89e6f6c94694e7e324bb39b93bc350d",
        "block": 118055407,
        "ts": "2026-11-19T07:35:50.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xd2e68a37abbf7e95f2cfc87c6c7052f5aaf07777",
        "name": "Longbefore",
        "symbol": "LONGBEFORE",
        "deployer": "0x498b1bee7a146a4d10514f2d8eb1201b447ad384",
        "block": 118055064,
        "ts": "2026-11-19T07:35:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2aebc208c12567a35d6792c0c84e717fff31d68b",
        "name": "longbefore",
        "symbol": "LONGBEFORE",
        "deployer": "0xf47705d77f91883085b2a76efe70a26149127a64",
        "block": 118054991,
        "ts": "2026-11-19T07:35:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe1f8f792a0f2cd2e75268dd7b290d70e1c99c1f1",
        "name": "Sherwood II",
        "symbol": "SHERW2",
        "deployer": "0x052fea3be12ce8633752e7b324c86e57b94c04f9",
        "block": 118054588,
        "ts": "2026-11-19T07:34:28.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x694edb09726df6589496bfef30c350a65f441a08",
        "name": "TEST Sale AA9Y",
        "symbol": "TESTAA9Y",
        "deployer": "0x690bfe2daf7436620e79a130a2dbd772b94d1f1f",
        "block": 118054554,
        "ts": "2026-11-19T07:34:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xac05e358b1a63e44ff8f549e13ecbddc7d172fd7",
        "name": "Overload BETA TESTING",
        "symbol": "OVLDBETA",
        "deployer": "0xf6e39aed488043217d58d875ec83c597da844500",
        "block": 118054311,
        "ts": "2026-11-19T07:34:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3676945fa6d1e85dce1c6171cf8f7b228a12dad1",
        "name": "Quad Grifters: Quitters",
        "symbol": "QUIT",
        "deployer": "0xd968a09e2b065fd6d7df05dc9c5a657f281e565a",
        "block": 118053990,
        "ts": "2026-11-19T07:33:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x89a2570fc2bbeabd915ffa869fada4a8dbdb4738",
        "name": "Cool Dog",
        "symbol": "CDOG",
        "deployer": "0xd09eede1264213f8b510953a58b2bb3a8424881d",
        "block": 118053872,
        "ts": "2026-11-19T07:33:16.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x2e546ed14a5393791a1a53e3069b1722ad8c7777",
        "name": "Wreckd",
        "symbol": "WRECKD",
        "deployer": "0x7485fbfd99993dab4c9964f53791e40d14253c97",
        "block": 118053768,
        "ts": "2026-11-19T07:33:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x34818dd35a2caac5108c80bccf1dae1ecda75d8d",
        "name": "Wreckd",
        "symbol": "WRECKD",
        "deployer": "0xf68070dae9ffecd9d34eee97e79fde5ab4d0e0fc",
        "block": 118053702,
        "ts": "2026-11-19T07:32:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x58353a92b0b2e66cb8b70a4568a086b8a95f61d6",
        "name": "GTA TRAIN",
        "symbol": "TRAIN",
        "deployer": "0x4337001fff419768e088ce247456c1b892888084",
        "block": 118053635,
        "ts": "2026-11-19T07:32:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9286d5939f92254925d5849e1ce97cb5f97783e7",
        "name": "LayerBank Robinhood NVDA",
        "symbol": "lRobNVDA",
        "deployer": "0xa0b80717e10523b009e1ffa8a09ee978699639a5",
        "block": 118053569,
        "ts": "2026-11-19T07:32:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3502f5c3bcb8d71b357961105c4124e07b497777",
        "name": "The Dacitytard",
        "symbol": "DACITYTARD",
        "deployer": "0xa7ba884561771e707f7f29bd5388b77f1e470daf",
        "block": 118053344,
        "ts": "2026-11-19T07:32:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x46ad36c7a65e938ff939ebc96800b758d5bc9b00",
        "name": "DCA",
        "symbol": "DacityCoin",
        "deployer": "0x729fc8b84e4138a43f0650675cf3208f3fcc3745",
        "block": 118053314,
        "ts": "2026-11-19T07:32:20.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xd593b4c6f3209f03d62cdcf54bfbd2d21ba67eed",
        "name": "biketyson",
        "symbol": "BYKETYSON",
        "deployer": "0x5e1f83c555f4bc80d0587388591c5730b8872e80",
        "block": 118053236,
        "ts": "2026-11-19T07:32:12.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
