/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-14T23:50:33.000Z",
    "opened_at": "2026-11-14T22:50:33.000Z",
    "window_hours": 1,
    "head_block": 114542666,
    "start_block": 114508504,
    "blocks_scanned": 34162,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 231,
    "unnamed_contracts": 13,
    "via_factory": 217,
    "no_receipt": 0,
    "candidates": 244,
    "mint_events": 13833,
    "deployers": 168,
    "roots": 324,
    "cleared_multiple": 210,
    "failed_gates": 206,
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
      "agents-intelligence-super",
      "bill"
    ],
    "top": {
      "root": "bill",
      "launches": 11,
      "deployers": 11,
      "baseline_share": 0.0004,
      "multiple": 119,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "bill",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 119,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "agents",
        "launches": 13,
        "deployers": 13,
        "baseline_share": 0.0025,
        "multiple": 22.5,
        "state": "MERGED",
        "reason": "agents + intelligence co-occur 100%, merged to agents-intelligence-super"
      },
      {
        "root": "super",
        "launches": 13,
        "deployers": 13,
        "baseline_share": 0.0032,
        "multiple": 17.6,
        "state": "MERGED",
        "reason": "agents + intelligence co-occur 100%, merged to agents-intelligence-super"
      },
      {
        "root": "intelligence",
        "launches": 13,
        "deployers": 13,
        "baseline_share": 0.0036,
        "multiple": 15.6,
        "state": "MERGED",
        "reason": "agents + intelligence co-occur 100%, merged to agents-intelligence-super"
      },
      {
        "root": "usdg",
        "launches": 12,
        "deployers": 12,
        "baseline_share": 0.0203,
        "multiple": 2.6,
        "state": "BELOW",
        "reason": "usdg: 2.6x over baseline < 6.0x required"
      },
      {
        "root": "uniswap",
        "launches": 11,
        "deployers": 10,
        "baseline_share": 0.0509,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "uniswap: 0.9x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 9,
        "deployers": 8,
        "baseline_share": 0.0424,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "uni: 0.9x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0167,
        "multiple": 1.6,
        "state": "BELOW",
        "reason": "positions: 1.6x over baseline < 6.0x required"
      },
      {
        "root": "chop",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0041,
        "multiple": 5.3,
        "state": "BELOW",
        "reason": "chop: 5.3x over baseline < 6.0x required"
      },
      {
        "root": "liquid",
        "launches": 5,
        "deployers": 2,
        "baseline_share": 0.0044,
        "multiple": 4.9,
        "state": "BELOW",
        "reason": "liquid: 4.9x over baseline < 6.0x required"
      },
      {
        "root": "nft",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0201,
        "multiple": 1.1,
        "state": "BELOW",
        "reason": "nft: 1.1x over baseline < 6.0x required"
      },
      {
        "root": "robinhood",
        "launches": 5,
        "deployers": 2,
        "baseline_share": 0.0513,
        "multiple": 0.4,
        "state": "BELOW",
        "reason": "robinhood: 0.4x over baseline < 6.0x required"
      },
      {
        "root": "egg",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 43.3,
        "state": "THIN",
        "reason": "egg: 4 launches < 5 required"
      },
      {
        "root": "als",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0014,
        "multiple": 12.4,
        "state": "THIN",
        "reason": "als: 4 launches < 5 required"
      },
      {
        "root": "shares",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0014,
        "multiple": 12.4,
        "state": "THIN",
        "reason": "shares: 4 launches < 5 required"
      },
      {
        "root": "brownfi",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0025,
        "multiple": 6.9,
        "state": "THIN",
        "reason": "brownfi: 4 launches < 5 required"
      },
      {
        "root": "bf",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0027,
        "multiple": 6.4,
        "state": "THIN",
        "reason": "bf: 4 launches < 5 required"
      },
      {
        "root": "layerbank",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0053,
        "multiple": 3.3,
        "state": "BELOW",
        "reason": "layerbank: 3.3x over baseline < 6.0x required"
      },
      {
        "root": "position",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0054,
        "multiple": 3.2,
        "state": "BELOW",
        "reason": "position: 3.2x over baseline < 6.0x required"
      },
      {
        "root": "aero",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0056,
        "multiple": 3.1,
        "state": "BELOW",
        "reason": "aero: 3.1x over baseline < 6.0x required"
      },
      {
        "root": "staked",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0069,
        "multiple": 2.5,
        "state": "BELOW",
        "reason": "staked: 2.5x over baseline < 6.0x required"
      },
      {
        "root": "factory",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 32.5,
        "state": "THIN",
        "reason": "factory: 3 launches < 5 required"
      },
      {
        "root": "longbow",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 32.5,
        "state": "THIN",
        "reason": "longbow: 3 launches < 5 required"
      },
      {
        "root": "never",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 32.5,
        "state": "THIN",
        "reason": "never: 3 launches < 5 required"
      },
      {
        "root": "bear",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0008,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "bear: 3 launches < 5 required"
      },
      {
        "root": "mars",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0018,
        "multiple": 7.2,
        "state": "THIN",
        "reason": "mars: 3 launches < 5 required"
      },
      {
        "root": "borrowable",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0027,
        "multiple": 4.8,
        "state": "BELOW",
        "reason": "borrowable: 4.8x over baseline < 6.0x required"
      },
      {
        "root": "lend",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0027,
        "multiple": 4.8,
        "state": "BELOW",
        "reason": "lend: 4.8x over baseline < 6.0x required"
      },
      {
        "root": "fund",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0029,
        "multiple": 4.5,
        "state": "BELOW",
        "reason": "fund: 4.5x over baseline < 6.0x required"
      },
      {
        "root": "black",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.003,
        "multiple": 4.3,
        "state": "BELOW",
        "reason": "black: 4.3x over baseline < 6.0x required"
      },
      {
        "root": "flock",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0032,
        "multiple": 4.1,
        "state": "BELOW",
        "reason": "flock: 4.1x over baseline < 6.0x required"
      },
      {
        "root": "deposit",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0049,
        "multiple": 2.7,
        "state": "BELOW",
        "reason": "deposit: 2.7x over baseline < 6.0x required"
      },
      {
        "root": "dog",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0058,
        "multiple": 2.2,
        "state": "BELOW",
        "reason": "dog: 2.2x over baseline < 6.0x required"
      },
      {
        "root": "hood",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0108,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "hood: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "chen",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "chen: 2 launches < 5 required"
      },
      {
        "root": "dd",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "dd: 2 launches < 5 required"
      },
      {
        "root": "donuts",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "donuts: 2 launches < 5 required"
      },
      {
        "root": "eggs",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "eggs: 2 launches < 5 required"
      },
      {
        "root": "fullrange",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "fullrange: 2 launches < 5 required"
      },
      {
        "root": "give",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "give: 2 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x7934663139dd7974a6fcbcbc67e4c715b54b1e18",
        "name": "LinkCat",
        "symbol": "LINKCAT",
        "deployer": "0xd20278dc748cfe4a381e8969751873f1ab80cce4",
        "block": 114542626,
        "ts": "2026-11-14T23:50:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x32e6aeb2b976963387061f0fcfb98eaad051208d",
        "name": "Fear Of Mcdonalds Outfit",
        "symbol": "FOMO",
        "deployer": "0x20b11eab081c7bb9897228163968658ee395f039",
        "block": 114542144,
        "ts": "2026-11-14T23:49:37.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x192b0e9fade63de9d9e3b747118367f783045728",
        "name": "Vensa",
        "symbol": "VENSA",
        "deployer": "0xe22f062c994b30d7ae35212bec88ceeb8a184738",
        "block": 114541639,
        "ts": "2026-11-14T23:48:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x442967226227a33c7f6481976bb1825195dc7777",
        "name": "Crashpad",
        "symbol": "CRASHPAD",
        "deployer": "0xba99a63b9ab6033451b21666851b8070af73cbe8",
        "block": 114541431,
        "ts": "2026-11-14T23:48:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdf6efbe5667514c9153a4503515b6ed49ed67777",
        "name": "Life after losing everything",
        "symbol": "Life",
        "deployer": "0x442e63ede41fc0cd9f9a9ac2cb92092beb1438d2",
        "block": 114541345,
        "ts": "2026-11-14T23:48:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x42aaf792696dba88d3975f99df2c38395d3828d4",
        "name": "never give up",
        "symbol": "Never",
        "deployer": "0x766a61650be1bb6a05e8a1e4142b469378a7e4ee",
        "block": 114541299,
        "ts": "2026-11-14T23:48:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8662c6f2315e3c4b41978e3e805d83b458cd1e18",
        "name": "never give up",
        "symbol": "NGU",
        "deployer": "0xd20278dc748cfe4a381e8969751873f1ab80cce4",
        "block": 114541007,
        "ts": "2026-11-14T23:47:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x07d8cc39f8180067ad1e9dcf4cc4386a2ab77783",
        "name": "Index Basket STOCK",
        "symbol": "IB-STOCK",
        "deployer": "0x19e5bc1b78b720971438b965ac70939fcdde4d84",
        "block": 114540331,
        "ts": "2026-11-14T23:46:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcb18d1e9dd13ab232c3c553e59a926253432a6ea",
        "name": "1pill",
        "symbol": "1PILL",
        "deployer": "0xc9c07482b2e683bfd4f7c30ef95647b698b4ef68",
        "block": 114539683,
        "ts": "2026-11-14T23:45:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x507aaad81dc4638e015c62d8be959d1832cc2568",
        "name": "Vensa",
        "symbol": "VENSA",
        "deployer": "0xe22f062c994b30d7ae35212bec88ceeb8a184738",
        "block": 114539041,
        "ts": "2026-11-14T23:44:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0cf333f0c8aeb8de92cc305f29d126ac95862d69",
        "name": "DARN",
        "symbol": "DARN",
        "deployer": "0xfa322cfea4ede2a06e527f54f8273d36831a40de",
        "block": 114538549,
        "ts": "2026-11-14T23:43:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9c71cf5b8d39cce128e5bb0d84fe64d992038747",
        "name": "BurstingBagel",
        "symbol": "BAGEL",
        "deployer": "0xd7700668871795d023cbf9514fb3442d18c2d078",
        "block": 114538040,
        "ts": "2026-11-14T23:42:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x64ca10c60bdbabc94cb4abb834d8c8bf3c464e7e",
        "name": "Chen 陈",
        "symbol": "陈",
        "deployer": "0x7435e6f31b7b6010c6b617f4b669beb2cb4b6d7f",
        "block": 114537985,
        "ts": "2026-11-14T23:42:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5b69f1e127cb8cbe0b3880e8c1411185ae719e37",
        "name": "Heeshilio",
        "symbol": "HEESH",
        "deployer": "0xfa322cfea4ede2a06e527f54f8273d36831a40de",
        "block": 114537725,
        "ts": "2026-11-14T23:41:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x53f9ed4253f67947fddf445363f3970fe99ad56e",
        "name": "Sprinkles",
        "symbol": "SPRINK",
        "deployer": "0xd7700668871795d023cbf9514fb3442d18c2d078",
        "block": 114537690,
        "ts": "2026-11-14T23:41:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x47f8d24d42f1905561de75765373b3fcb1416d26",
        "name": "Cow Aero SPY-WETH",
        "symbol": "cowAeroSPY-WETH",
        "deployer": "0x03d9964f4d93a24b58c0fc3a8df3474b59ba8557",
        "block": 114537577,
        "ts": "2026-11-14T23:41:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3e0f152c1323299fe91a24dcb915808950c74fee",
        "name": "Reward Cow Aero SPY-WETH",
        "symbol": "rcowAeroSPY-WETH",
        "deployer": "0x03d9964f4d93a24b58c0fc3a8df3474b59ba8557",
        "block": 114537577,
        "ts": "2026-11-14T23:41:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x87a9d14e05b2cbf3e4e789fd7c3d93c7479edc5e",
        "name": "unstable coin",
        "symbol": "USDUC",
        "deployer": "0x6b710ab16c2bf86975b00a6491bb054a74861841",
        "block": 114537573,
        "ts": "2026-11-14T23:41:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x546f0500bd317db99bcba43398949e50d1b17c44",
        "name": "BTC",
        "symbol": "BTC",
        "deployer": "0xfa322cfea4ede2a06e527f54f8273d36831a40de",
        "block": 114537314,
        "ts": "2026-11-14T23:40:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x34b725a4268e409d15cd70cc09489d99372306ea",
        "name": "Dinu",
        "symbol": "DINU",
        "deployer": "0x7ed97e9c654890941022c4bdcbbcd1bc486b9a18",
        "block": 114537267,
        "ts": "2026-11-14T23:40:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfb60d29158e9f1ba236f372d4dab47ba09577d29",
        "name": "Notchd",
        "symbol": "NOTCHD",
        "deployer": "0xbd1ebeaf6f279b621c5dd01aaf4da4949f8a6253",
        "block": 114537263,
        "ts": "2026-11-14T23:40:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x45f8e09164787dd1bf54d5abb1adf973df802031",
        "name": "test45645",
        "symbol": "test45645",
        "deployer": "0xded2dbae18ccd01940f7696e2988c40263c32622",
        "block": 114536826,
        "ts": "2026-11-14T23:40:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc9c3802af99a6e9b9c3e7f5f8c5093e048fac1ca",
        "name": "POPT-V2 USDG LP on SPY/USDG 5bps",
        "symbol": "poUSDG",
        "deployer": "0x2e28d3b652b4f18fdbce26ea3af4f7af0cfa7a4b",
        "block": 114536325,
        "ts": "2026-11-14T23:39:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4932b3528896b7ad82118b940f3140fa556056ea",
        "name": "BNB",
        "symbol": "BNB",
        "deployer": "0xc9c07482b2e683bfd4f7c30ef95647b698b4ef68",
        "block": 114536179,
        "ts": "2026-11-14T23:39:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc38607e6feb43a402efc2855b0b2951c50c07777",
        "name": "The Black Bear",
        "symbol": "Bear",
        "deployer": "0xa5836e65e193949ab21f2138a55ae725a729db8e",
        "block": 114535763,
        "ts": "2026-11-14T23:38:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf286da61146ac5492616b2d894e56e1ebf3856ce",
        "name": "bill",
        "symbol": "bill",
        "deployer": "0x9c2d29e6c190f411d08906a24128b2b3aeddd7fd",
        "block": 114535672,
        "ts": "2026-11-14T23:38:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4a35a5ec2a50a4d2957b2f2366e017f526cab318",
        "name": "Foundry Compute Dollar",
        "symbol": "USDF",
        "deployer": "0xc1f3547241fe1bc7cb4fb943c67ef5d0263da352",
        "block": 114535393,
        "ts": "2026-11-14T23:37:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd0aa68e99bf3dc609a3a28c3773087c99e0d0a52",
        "name": "CZ",
        "symbol": "CZGLAZ",
        "deployer": "0x0478ce6c290f722cdc00e64147035ec4c1cd2b24",
        "block": 114535218,
        "ts": "2026-11-14T23:37:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0035c5219a5278d73ced6abcc74f1e41478af721",
        "name": "SpaceEggs",
        "symbol": "EGG",
        "deployer": "0x3e5da3e1f890c94312bc21a443f06eeccbcca9f1",
        "block": 114534888,
        "ts": "2026-11-14T23:36:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8fc5051d8e540fbc4b0fc4f7eb9b8e5faae87777",
        "name": "Stable Inu",
        "symbol": "SI",
        "deployer": "0x0243b4b0d042a3da9219bb210d0fd5c5148fa54a",
        "block": 114534466,
        "ts": "2026-11-14T23:35:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0dc9cc91f82f46d1e8def02cfab171412c7c1d56",
        "name": "Few Wrapped 羊高",
        "symbol": "fwYANGGAO",
        "deployer": "0xb90e4590937d9d4c1ec0cf09be36e4f51af1d102",
        "block": 114534419,
        "ts": "2026-11-14T23:35:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc25506a323d3b391ba8f216276015d70c579d94a",
        "name": "Heartlight",
        "symbol": "LIGHT",
        "deployer": "0xdbf303ac9cd59b6c0e5739590dacdbc4e582dbb7",
        "block": 114533661,
        "ts": "2026-11-14T23:34:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x64d6301a4793922a5cc6a4cd428c28dd6c3ef682",
        "name": "The Black Bear",
        "symbol": "Bear",
        "deployer": "0x4cff7ca236045e3a9be90cacedeafb96ab9e4ca4",
        "block": 114533552,
        "ts": "2026-11-14T23:34:22.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x61bd43c1bda81573e3bcbada96aaa81690000a50",
        "name": "Edge Fund",
        "symbol": "EDGE",
        "deployer": "0xd7700668871795d023cbf9514fb3442d18c2d078",
        "block": 114533467,
        "ts": "2026-11-14T23:34:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x99347d5f70d3838763f6bddcf80304c8aa953b57",
        "name": "NetNet Credit",
        "symbol": "nnUSDG",
        "deployer": "0x4fcf6a45fb787ce8686b0fb9545bffc3102b0e9a",
        "block": 114533001,
        "ts": "2026-11-14T23:33:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x66eba3356eaf6e2c0bd8cd997ae70819d0ceb8a3",
        "name": "Join us in our WhatsApp group",
        "symbol": "Welcome",
        "deployer": "0xdce6fb43fd27d6ae88041477e0dd23d244adefac",
        "block": 114532695,
        "ts": "2026-11-14T23:32:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x25553ce77ffca819429db75a2f3feac52dd8bcfc",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xfa3372c06b56b3c3097428d530599cadbb848497",
        "block": 114532298,
        "ts": "2026-11-14T23:32:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x416d0c4b431cfa33b4a4974e3dfc9f5089137148",
        "name": "ARROWFARM",
        "symbol": "ARROWFARM",
        "deployer": "0x6f1db80f20e9ac0cda697ac58c64f148344c58e1",
        "block": 114532111,
        "ts": "2026-11-14T23:31:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1c7dddc2fa9bec0549fcdeabcfebd37452d2cdcb",
        "name": "Overcall Channel",
        "symbol": "OCCH",
        "deployer": "0x80bbac5d3e5ab47257ccac2528dd6b3382209804",
        "block": 114531864,
        "ts": "2026-11-14T23:31:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xded0562520963ca4f7c46c3f8b8cd17877681e18",
        "name": "Ham",
        "symbol": "HAM",
        "deployer": "0xd20278dc748cfe4a381e8969751873f1ab80cce4",
        "block": 114531753,
        "ts": "2026-11-14T23:31:10.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
