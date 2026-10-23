/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-23T15:19:36.000Z",
    "opened_at": "2026-10-23T14:19:36.000Z",
    "window_hours": 1,
    "head_block": 96038897,
    "start_block": 96004338,
    "blocks_scanned": 34559,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 587,
    "unnamed_contracts": 0,
    "via_factory": 558,
    "no_receipt": 0,
    "candidates": 587,
    "mint_events": 22603,
    "deployers": 372,
    "roots": 707,
    "cleared_multiple": 231,
    "failed_gates": 221,
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
      "anthropic",
      "cupsey",
      "dog",
      "nft-positions",
      "robinhood",
      "uniswap-uni",
      "usdg"
    ],
    "top": {
      "root": "robinhood",
      "launches": 43,
      "deployers": 7,
      "baseline_share": 0.0004,
      "multiple": 183.1,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "robinhood",
        "launches": 43,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 183.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "cupsey",
        "launches": 16,
        "deployers": 16,
        "baseline_share": 0.0004,
        "multiple": 68.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 12,
        "deployers": 12,
        "baseline_share": 0.0004,
        "multiple": 51.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "ai",
        "launches": 9,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 38.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "dog",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 29.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "anthropic",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 25.6,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 31,
        "deployers": 27,
        "baseline_share": 0.0004,
        "multiple": 132,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 87%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 27,
        "deployers": 23,
        "baseline_share": 0.0004,
        "multiple": 115,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 87%, merged to uniswap-uni"
      },
      {
        "root": "nft",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 46.8,
        "state": "MERGED",
        "reason": "nft + positions co-occur 62%, merged to nft-positions"
      },
      {
        "root": "positions",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 42.6,
        "state": "MERGED",
        "reason": "nft + positions co-occur 62%, merged to nft-positions"
      },
      {
        "root": "arcus",
        "launches": 6,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 25.6,
        "state": "THIN",
        "reason": "arcus: 2 deployers < 6 required"
      },
      {
        "root": "trust",
        "launches": 6,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 25.6,
        "state": "THIN",
        "reason": "trust: 4 deployers < 6 required"
      },
      {
        "root": "ane",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 21.3,
        "state": "THIN",
        "reason": "ane: 5 deployers < 6 required"
      },
      {
        "root": "ant",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 21.3,
        "state": "THIN",
        "reason": "ant: 5 deployers < 6 required"
      },
      {
        "root": "cat",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 21.3,
        "state": "THIN",
        "reason": "cat: 5 deployers < 6 required"
      },
      {
        "root": "counterparty",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 21.3,
        "state": "THIN",
        "reason": "counterparty: 1 deployers < 6 required"
      },
      {
        "root": "inc",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.3,
        "state": "THIN",
        "reason": "inc: 4 deployers < 6 required"
      },
      {
        "root": "indicator",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 21.3,
        "state": "THIN",
        "reason": "indicator: 5 deployers < 6 required"
      },
      {
        "root": "long",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 21.3,
        "state": "THIN",
        "reason": "long: 1 deployers < 6 required"
      },
      {
        "root": "openhooks",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 21.3,
        "state": "THIN",
        "reason": "openhooks: 5 deployers < 6 required"
      },
      {
        "root": "pbc",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 21.3,
        "state": "THIN",
        "reason": "pbc: 5 deployers < 6 required"
      },
      {
        "root": "predictor",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 21.3,
        "state": "THIN",
        "reason": "predictor: 1 deployers < 6 required"
      },
      {
        "root": "united",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.3,
        "state": "THIN",
        "reason": "united: 4 deployers < 6 required"
      },
      {
        "root": "ape",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17,
        "state": "THIN",
        "reason": "ape: 4 launches < 5 required"
      },
      {
        "root": "aucert",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17,
        "state": "THIN",
        "reason": "aucert: 4 launches < 5 required"
      },
      {
        "root": "cow",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 17,
        "state": "THIN",
        "reason": "cow: 4 launches < 5 required"
      },
      {
        "root": "ctr",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 17,
        "state": "THIN",
        "reason": "ctr: 4 launches < 5 required"
      },
      {
        "root": "db",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 17,
        "state": "THIN",
        "reason": "db: 4 launches < 5 required"
      },
      {
        "root": "fund",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 17,
        "state": "THIN",
        "reason": "fund: 4 launches < 5 required"
      },
      {
        "root": "grok",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17,
        "state": "THIN",
        "reason": "grok: 4 launches < 5 required"
      },
      {
        "root": "hood",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17,
        "state": "THIN",
        "reason": "hood: 4 launches < 5 required"
      },
      {
        "root": "just",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17,
        "state": "THIN",
        "reason": "just: 4 launches < 5 required"
      },
      {
        "root": "mcrib",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17,
        "state": "THIN",
        "reason": "mcrib: 4 launches < 5 required"
      },
      {
        "root": "planchet",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 17,
        "state": "THIN",
        "reason": "planchet: 4 launches < 5 required"
      },
      {
        "root": "position",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17,
        "state": "THIN",
        "reason": "position: 4 launches < 5 required"
      },
      {
        "root": "prd",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 17,
        "state": "THIN",
        "reason": "prd: 4 launches < 5 required"
      },
      {
        "root": "ramses",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17,
        "state": "THIN",
        "reason": "ramses: 4 launches < 5 required"
      },
      {
        "root": "squads",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17,
        "state": "THIN",
        "reason": "squads: 4 launches < 5 required"
      },
      {
        "root": "super",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17,
        "state": "THIN",
        "reason": "super: 4 launches < 5 required"
      },
      {
        "root": "ufo",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17,
        "state": "THIN",
        "reason": "ufo: 4 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x8e7a202068216e6e3c4d6191647af08720f32a92",
        "name": "Wrapped Exxon Mobil • Robinhood Token",
        "symbol": "wXOM",
        "deployer": "0x9efc87801ffb0b27766d6c568e3c0d76bd59d605",
        "block": 96038786,
        "ts": "2026-10-23T15:19:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x100b0d8968efd4785c844a3768646889e64d7777",
        "name": "XREIGN",
        "symbol": "XREIGN",
        "deployer": "0x7485fbfd99993dab4c9964f53791e40d14253c97",
        "block": 96038728,
        "ts": "2026-10-23T15:19:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x141b9bcbb096af847181a3af1bf2a280cb679bc5",
        "name": "Pikro",
        "symbol": "PIKRO",
        "deployer": "0x40a65bf8c4a6957d9198d1736d8d9d0ee3f39582",
        "block": 96038681,
        "ts": "2026-10-23T15:19:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x92b5c0242398d5f2480505b883d26a4014246b71",
        "name": "XREIGN",
        "symbol": "XREIGN",
        "deployer": "0x7aed1071720148ff6cfaebe30046adfabd68f960",
        "block": 96038646,
        "ts": "2026-10-23T15:19:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe01a12ddb0bd8e5e23bd949401ca7fd86e481e18",
        "name": "Bladefur",
        "symbol": "BLADEFUR",
        "deployer": "0xcae860b8724e0693123a2156ee8ef4f98859c402",
        "block": 96038240,
        "ts": "2026-10-23T15:18:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9d978ce85d3ad99cd7df20d9584ecfaa77b17777",
        "name": "The McRib Indicator",
        "symbol": "McRib",
        "deployer": "0x0c9dfc5cdec8d2f25e575c7368ea11fd25fd582c",
        "block": 96038126,
        "ts": "2026-10-23T15:18:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1be5e006fb0781197f5915dca48b151569f16bab",
        "name": "Planchet",
        "symbol": "PLANCHET",
        "deployer": "0x2b83f77b90b85877e49f6809c806b2005c6f5a33",
        "block": 96038028,
        "ts": "2026-10-23T15:18:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x50bf58684cd256bd21356868b4231c34ca697777",
        "name": "apeonapp",
        "symbol": "app",
        "deployer": "0x4854f368755ce58ba0167e91ad59db415d637ae4",
        "block": 96038012,
        "ts": "2026-10-23T15:18:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb8303f5c2907835e22424037f648d3368486cfcc",
        "name": "UFO",
        "symbol": "UFO",
        "deployer": "0xad694c03a2df63c66bfe294b4caf9c68ba06a4b1",
        "block": 96037992,
        "ts": "2026-10-23T15:18:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf4e00d46a63d5474535178183ad4cf600c709913",
        "name": "Kimchi Un",
        "symbol": "Kimchi Un",
        "deployer": "0x2bce0e66caeb46206afb5109372816a7ae268da5",
        "block": 96037987,
        "ts": "2026-10-23T15:18:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfdebff9e82fc6e4b1ce77942a9824f1350321e18",
        "name": "Black Triangle UFO",
        "symbol": "BTUFO",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 96037969,
        "ts": "2026-10-23T15:18:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x58a1f7c3f1d9fa416727c28f1410d6d105afe56c",
        "name": "Rebate Pad",
        "symbol": "REBATE",
        "deployer": "0xe3cbf8c067d85322bf283de6be2a821f185022f1",
        "block": 96037939,
        "ts": "2026-10-23T15:18:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x36079f0c8600fe8644e55a83c26aefdd64ff1e18",
        "name": "The Skinwalker",
        "symbol": "SKINWALKER",
        "deployer": "0x7d22d3dd32f00848a54ebe00c00a9082a18d4e66",
        "block": 96037919,
        "ts": "2026-10-23T15:17:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb06a7a96d7fbfdcc64aee0f0b185204b66e41b3b",
        "name": "Liquid Staked SLVR",
        "symbol": "liSLVR",
        "deployer": "0xbd26ccaf6b53f9ba8769ac47c866657756f889e8",
        "block": 96037852,
        "ts": "2026-10-23T15:17:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb96826b4ec9e636d7816034bf0803da9b38a7777",
        "name": "Wrench Pons",
        "symbol": "WRENCH",
        "deployer": "0xa7ba884561771e707f7f29bd5388b77f1e470daf",
        "block": 96037624,
        "ts": "2026-10-23T15:17:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdade76921902c1f76f83ed906707b6c845907777",
        "name": "Pickle Bier Jr",
        "symbol": "PBJ",
        "deployer": "0x1b4ebe73585b94578dc055c6ac7e89333fdadcf7",
        "block": 96037580,
        "ts": "2026-10-23T15:17:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x65d8e6f0a118402f6a2afa8cdd12134c0b32c6ee",
        "name": "Pickle Bier Jr",
        "symbol": "PBJ",
        "deployer": "0xc5311b61bb17eba46e054692d6648b8cd608e6da",
        "block": 96037492,
        "ts": "2026-10-23T15:17:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdb2be54e68911800891b069a994d0457912ef8bb",
        "name": "killing machine",
        "symbol": "killing machine",
        "deployer": "0x2422fe8a1ccb19189d9536583452cda95acbc7b6",
        "block": 96037431,
        "ts": "2026-10-23T15:17:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xad7437647f3207407b9d124cfb9004c62dc3b235",
        "name": "Wrench Pons",
        "symbol": "WRENCH",
        "deployer": "0xfdef136e77657133ac1c91c83d96293dfbb8d28e",
        "block": 96037386,
        "ts": "2026-10-23T15:17:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x091f0c7e675a787a4018eb47c30bed3fa2013b65",
        "name": "MintStakeShare 2",
        "symbol": "MSS2",
        "deployer": "0x1990852348c7ab9f29ad13e7e41cef8bc2375cc5",
        "block": 96037384,
        "ts": "2026-10-23T15:17:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x528e9638e0770ded89978538928685fd6bff0087",
        "name": "QUANT",
        "symbol": "QUANT",
        "deployer": "0x4536165a526c73cf0b144447003189403080c2f1",
        "block": 96037369,
        "ts": "2026-10-23T15:17:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x28e857056628e9604c03ab28ed2ac1374144071f",
        "name": "Vault Street",
        "symbol": "VST",
        "deployer": "0x221bba391ea1da3eb3efc8f9eaa57e0b075f02ad",
        "block": 96037233,
        "ts": "2026-10-23T15:16:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb92fdb8fd1841fe35d2951d46b68e2aae2247777",
        "name": "Netboxlabs",
        "symbol": "NETBOX",
        "deployer": "0xfe2cb6b8c284d632390268d8007873ac5865db0b",
        "block": 96036993,
        "ts": "2026-10-23T15:16:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe783647f0cd6d3722fb4098d39c769f498b62c12",
        "name": "Netboxlabs",
        "symbol": "NETBOX",
        "deployer": "0x8be797a9ffd4e9fccca7e5e20ce5dfc85490c0a5",
        "block": 96036863,
        "ts": "2026-10-23T15:16:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3b0aabf9d0daded922bec9ec5691c7a422421e18",
        "name": "UFOINU",
        "symbol": "UFOINU",
        "deployer": "0xf7093908040391c187f7644c4e42f7fe6f76cc88",
        "block": 96036596,
        "ts": "2026-10-23T15:15:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcec185eb182c47d1ba1efc84e6959e18cd620be4",
        "name": "Coinbase Wrapped BTC",
        "symbol": "cbBTC",
        "deployer": "0x2088ebe245942860ab5ab895c9613a9c1dcdbd3e",
        "block": 96036519,
        "ts": "2026-10-23T15:15:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x92214e5f8c68ba3c6a446039ac4c77cf756b7777",
        "name": "TradingBox",
        "symbol": "TRADINGBOX",
        "deployer": "0x498b1bee7a146a4d10514f2d8eb1201b447ad384",
        "block": 96036498,
        "ts": "2026-10-23T15:15:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x97cfedba06a093347f9702da4831a6f053841e18",
        "name": "Unidentified Flying Dorito",
        "symbol": "UFD",
        "deployer": "0x7d22d3dd32f00848a54ebe00c00a9082a18d4e66",
        "block": 96036438,
        "ts": "2026-10-23T15:15:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7685925f3e3ed5406834156fb03a36fb230c5f3a",
        "name": "Latch Remora",
        "symbol": "REMORA",
        "deployer": "0xcf3be4a2979e5a9c7b1d7ebb4e451fd9ea807364",
        "block": 96036382,
        "ts": "2026-10-23T15:15:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9f7238188a06aa8b662afd2cc6205c63c6975154",
        "name": "TradingBox",
        "symbol": "TRADINGBOX",
        "deployer": "0x2f9c2e8e74701adf70a57712d165215cf72f4490",
        "block": 96036371,
        "ts": "2026-10-23T15:15:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc5677d5a0366a8580440ca33f23dc70b396c7777",
        "name": "Riemann Rock",
        "symbol": "RIEMANN",
        "deployer": "0x7485fbfd99993dab4c9964f53791e40d14253c97",
        "block": 96036314,
        "ts": "2026-10-23T15:15:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9bfd019fa69109954850481978422b6a8ebade7e",
        "name": "UFO",
        "symbol": "UFO",
        "deployer": "0x3c62f04c815c3b9d8296a3dd8ee80f30341d7e15",
        "block": 96036298,
        "ts": "2026-10-23T15:15:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf98d663d190e0e5eda25346e38dff5b1a19d7777",
        "name": "Dark Tunnel",
        "symbol": "DARKTUNNEL",
        "deployer": "0xa7ba884561771e707f7f29bd5388b77f1e470daf",
        "block": 96036287,
        "ts": "2026-10-23T15:15:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xffe349082eb373e92857b113f21690e881963001",
        "name": "Dark Tunnel",
        "symbol": "DARKTUNNEL",
        "deployer": "0x89c31f39b825651537c4c7d8928d22107e541b24",
        "block": 96036211,
        "ts": "2026-10-23T15:15:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbcfa7438208f67d8be9e8af08fc31d3fcdba8bd3",
        "name": "Pixel Hoodies",
        "symbol": "Pixel Hoodies",
        "deployer": "0x3e21f7ccce59522f91467a588cd9cf403d5ced3e",
        "block": 96036171,
        "ts": "2026-10-23T15:15:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8ca57b7e101eabbaa7e60a11dbcc05423ec93445",
        "name": "aucert",
        "symbol": "AUCERT",
        "deployer": "0xe9e803a159ed606159683d1c5420978731654806",
        "block": 96036154,
        "ts": "2026-10-23T15:15:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa6a47f69d758b3c2d51036dd165d1791e7cea8ed",
        "name": "Riemann Rock",
        "symbol": "RIEMANN",
        "deployer": "0x8f4fffad06de90b77ecacf1cf696680d4d0e190f",
        "block": 96036143,
        "ts": "2026-10-23T15:14:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3504d9950de0a94d10b4e80d4c5bfcd132a87777",
        "name": "Neura",
        "symbol": "NEURA",
        "deployer": "0x1b4ebe73585b94578dc055c6ac7e89333fdadcf7",
        "block": 96036058,
        "ts": "2026-10-23T15:14:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x558353e7350217c2f5295ee22296f54df99b0c1f",
        "name": "Neura",
        "symbol": "NEURA",
        "deployer": "0xe77e02d9d7f3c4bb9b01b30e475497a302eaa04c",
        "block": 96035992,
        "ts": "2026-10-23T15:14:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x321f04432c811f05a30bc395d43d48ed473dc967",
        "name": "Underground",
        "symbol": "UNDERGROUN",
        "deployer": "0xd9b27095395ab95509657887eaaf1131f0ba6355",
        "block": 96035859,
        "ts": "2026-10-23T15:14:30.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
