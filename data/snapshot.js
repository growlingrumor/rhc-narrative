/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-19T16:48:43.000Z",
    "opened_at": "2026-11-19T15:48:43.000Z",
    "window_hours": 1,
    "head_block": 118369910,
    "start_block": 118334207,
    "blocks_scanned": 35703,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 467,
    "unnamed_contracts": 1,
    "via_factory": 444,
    "no_receipt": 0,
    "candidates": 468,
    "mint_events": 19769,
    "deployers": 265,
    "roots": 552,
    "cleared_multiple": 102,
    "failed_gates": 91,
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
      "cat",
      "catmario",
      "gta",
      "mario",
      "nekomario",
      "ni",
      "nintendo-co-ltd",
      "tanuki",
      "vice"
    ],
    "top": {
      "root": "mario",
      "launches": 54,
      "deployers": 36,
      "baseline_share": 0.0004,
      "multiple": 289.1,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "mario",
        "launches": 54,
        "deployers": 36,
        "baseline_share": 0.0004,
        "multiple": 289.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "cat",
        "launches": 43,
        "deployers": 35,
        "baseline_share": 0.013,
        "multiple": 7.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "catmario",
        "launches": 22,
        "deployers": 20,
        "baseline_share": 0.0004,
        "multiple": 117.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nekomario",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 48.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "ni",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 48.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "tanuki",
        "launches": 8,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 42.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "vice",
        "launches": 7,
        "deployers": 6,
        "baseline_share": 0.0005,
        "multiple": 30,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "gta",
        "launches": 7,
        "deployers": 6,
        "baseline_share": 0.0016,
        "multiple": 9.4,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nintendo",
        "launches": 12,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 64.2,
        "state": "MERGED",
        "reason": "nintendo + co co-occur 100%, merged to nintendo-co-ltd"
      },
      {
        "root": "co",
        "launches": 9,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 48.2,
        "state": "MERGED",
        "reason": "nintendo + co co-occur 100%, merged to nintendo-co-ltd"
      },
      {
        "root": "ltd",
        "launches": 9,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 48.2,
        "state": "MERGED",
        "reason": "nintendo + co co-occur 100%, merged to nintendo-co-ltd"
      },
      {
        "root": "robinhood",
        "launches": 23,
        "deployers": 8,
        "baseline_share": 0.0513,
        "multiple": 1,
        "state": "BELOW",
        "reason": "robinhood: 1.0x over baseline < 6.0x required"
      },
      {
        "root": "uniswap",
        "launches": 23,
        "deployers": 19,
        "baseline_share": 0.0509,
        "multiple": 1,
        "state": "BELOW",
        "reason": "uniswap: 1.0x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 19,
        "deployers": 16,
        "baseline_share": 0.0424,
        "multiple": 1,
        "state": "BELOW",
        "reason": "uni: 1.0x over baseline < 6.0x required"
      },
      {
        "root": "usdg",
        "launches": 15,
        "deployers": 14,
        "baseline_share": 0.0203,
        "multiple": 1.6,
        "state": "BELOW",
        "reason": "usdg: 1.6x over baseline < 6.0x required"
      },
      {
        "root": "elon",
        "launches": 8,
        "deployers": 6,
        "baseline_share": 0.0065,
        "multiple": 2.6,
        "state": "BELOW",
        "reason": "elon: 2.6x over baseline < 6.0x required"
      },
      {
        "root": "cow",
        "launches": 8,
        "deployers": 2,
        "baseline_share": 0.0072,
        "multiple": 2.4,
        "state": "BELOW",
        "reason": "cow: 2.4x over baseline < 6.0x required"
      },
      {
        "root": "aero",
        "launches": 7,
        "deployers": 4,
        "baseline_share": 0.0056,
        "multiple": 2.7,
        "state": "BELOW",
        "reason": "aero: 2.7x over baseline < 6.0x required"
      },
      {
        "root": "dog",
        "launches": 7,
        "deployers": 5,
        "baseline_share": 0.0058,
        "multiple": 2.6,
        "state": "BELOW",
        "reason": "dog: 2.6x over baseline < 6.0x required"
      },
      {
        "root": "inc",
        "launches": 7,
        "deployers": 5,
        "baseline_share": 0.0057,
        "multiple": 2.6,
        "state": "BELOW",
        "reason": "inc: 2.6x over baseline < 6.0x required"
      },
      {
        "root": "gold",
        "launches": 6,
        "deployers": 4,
        "baseline_share": 0.0016,
        "multiple": 8,
        "state": "THIN",
        "reason": "gold: 4 deployers < 6 required"
      },
      {
        "root": "anthropic",
        "launches": 6,
        "deployers": 5,
        "baseline_share": 0.0024,
        "multiple": 5.4,
        "state": "BELOW",
        "reason": "anthropic: 5.4x over baseline < 6.0x required"
      },
      {
        "root": "hao",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 26.8,
        "state": "THIN",
        "reason": "hao: 5 deployers < 6 required"
      },
      {
        "root": "tanooki",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 26.8,
        "state": "THIN",
        "reason": "tanooki: 4 deployers < 6 required"
      },
      {
        "root": "brownfi",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0025,
        "multiple": 4.3,
        "state": "BELOW",
        "reason": "brownfi: 4.3x over baseline < 6.0x required"
      },
      {
        "root": "bf",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0027,
        "multiple": 4,
        "state": "BELOW",
        "reason": "bf: 4.0x over baseline < 6.0x required"
      },
      {
        "root": "layerbank",
        "launches": 5,
        "deployers": 2,
        "baseline_share": 0.0053,
        "multiple": 2,
        "state": "BELOW",
        "reason": "layerbank: 2.0x over baseline < 6.0x required"
      },
      {
        "root": "staked",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0069,
        "multiple": 1.6,
        "state": "BELOW",
        "reason": "staked: 1.6x over baseline < 6.0x required"
      },
      {
        "root": "nft",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0201,
        "multiple": 0.5,
        "state": "BELOW",
        "reason": "nft: 0.5x over baseline < 6.0x required"
      },
      {
        "root": "elonvice",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 21.4,
        "state": "THIN",
        "reason": "elonvice: 4 launches < 5 required"
      },
      {
        "root": "roaring",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.4,
        "state": "THIN",
        "reason": "roaring: 4 launches < 5 required"
      },
      {
        "root": "agents",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0025,
        "multiple": 3.4,
        "state": "BELOW",
        "reason": "agents: 3.4x over baseline < 6.0x required"
      },
      {
        "root": "bot",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0025,
        "multiple": 3.4,
        "state": "BELOW",
        "reason": "bot: 3.4x over baseline < 6.0x required"
      },
      {
        "root": "orbio",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0029,
        "multiple": 3,
        "state": "BELOW",
        "reason": "orbio: 3.0x over baseline < 6.0x required"
      },
      {
        "root": "reward",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0037,
        "multiple": 2.3,
        "state": "BELOW",
        "reason": "reward: 2.3x over baseline < 6.0x required"
      },
      {
        "root": "chop",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0041,
        "multiple": 2.1,
        "state": "BELOW",
        "reason": "chop: 2.1x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0167,
        "multiple": 0.5,
        "state": "BELOW",
        "reason": "positions: 0.5x over baseline < 6.0x required"
      },
      {
        "root": "agnt",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.1,
        "state": "THIN",
        "reason": "agnt: 3 launches < 5 required"
      },
      {
        "root": "amd",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.1,
        "state": "THIN",
        "reason": "amd: 3 launches < 5 required"
      },
      {
        "root": "bay",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.1,
        "state": "THIN",
        "reason": "bay: 3 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0xebfe325639789a362dcf8e74d715d7aeb3197777",
        "name": "NEKOMARIO",
        "symbol": "NEKOMARIO",
        "deployer": "0x41743a6de3bf58deb67dcc27b72cc0da33c7e6e2",
        "block": 118369836,
        "ts": "2026-11-19T16:48:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x96f5f4ac71a1470af5a145f2884d2df8bf911e18",
        "name": "Kat mario",
        "symbol": "KMARIO",
        "deployer": "0x4e074171769bc267482f96e0eb1d70c7f3368a47",
        "block": 118369826,
        "ts": "2026-11-19T16:48:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbbb6c29bcc3a1028a2b54310df73f4f7a3bcb373",
        "name": "Anthropic, PBC Class A Common Stock • Robinhood Token",
        "symbol": "ANT",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 118369806,
        "ts": "2026-11-19T16:48:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xaee1aa4cdb87f6514a3c16bdff963f4a9357020d",
        "name": "Just Change Pic On Dex??",
        "symbol": "CATMARIO",
        "deployer": "0xed60fe77073406675ae1973baddfd22a44ddf94e",
        "block": 118369800,
        "ts": "2026-11-19T16:48:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x36e0293d416d615866d30443c524e355dc241e18",
        "name": "Anthropic Ant",
        "symbol": "AANT",
        "deployer": "0x39f5f00c81a04b04da5c43d7ad94ce4c496d3ad1",
        "block": 118369783,
        "ts": "2026-11-19T16:48:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xca5446dec9a3615bcac1a91bac6b64803b92f871",
        "name": "Just Change Pic On Dex??",
        "symbol": "CATMARIO",
        "deployer": "0xed60fe77073406675ae1973baddfd22a44ddf94e",
        "block": 118369763,
        "ts": "2026-11-19T16:48:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x715dead3a80f8461d29aa6f9f7b39554c1294075",
        "name": "Chop OAK",
        "symbol": "chOAK",
        "deployer": "0x2d2a8a51ccb15c280a457f3e77e4b760fbf3d5e0",
        "block": 118369725,
        "ts": "2026-11-19T16:48:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x034c21d99cd681170a09115f83cc0bcf7e2b1ee0",
        "name": "Fury Cat Coin",
        "symbol": "FURYCAT",
        "deployer": "0xdf1ead76d2d0f8fe7494ce72def15ad0e953cb97",
        "block": 118369681,
        "ts": "2026-11-19T16:48:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf604c1d1c89c9543c7df2ae40c097112e1e7fd34",
        "name": "Fury Cat Coin",
        "symbol": "FURYCAT",
        "deployer": "0xdf2237114d595e0bf4d35cbcdebcdf43c55c4669",
        "block": 118369499,
        "ts": "2026-11-19T16:48:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x737d7e8ec94ce857a85ffd8752f34c64c960f735",
        "name": "Holldo",
        "symbol": "Holldo",
        "deployer": "0xd161c64b13f5c8bc4e96042f9a5bb04cc620ac26",
        "block": 118369222,
        "ts": "2026-11-19T16:47:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x546f0500bd317db99bcba43398949e50d1b17c44",
        "name": "BTC",
        "symbol": "BTC",
        "deployer": "0xa3af060b6b7140866211c4d7ab608cede8432c70",
        "block": 118369164,
        "ts": "2026-11-19T16:47:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3c45a2df8a5471e381ea0fb691fded0c6318e815",
        "name": "Nintendo Co Ltd",
        "symbol": "NTDOY",
        "deployer": "0xdf2237114d595e0bf4d35cbcdebcdf43c55c4669",
        "block": 118368916,
        "ts": "2026-11-19T16:47:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc27e13051340f51cf7ee281e3daf57e5e18fcef7",
        "name": "Giga Volatile AMM - evaUSDC/RVH",
        "symbol": "GIGA-vAMM-evaUSDC/RVH",
        "deployer": "0x734c6d8ad360dee39a72f63641da9574e1421396",
        "block": 118368893,
        "ts": "2026-11-19T16:47:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xef63291fba3fe56d3e6f532f9e05e49bc44d1e18",
        "name": "Ketmario",
        "symbol": "KETMARIO",
        "deployer": "0x4e074171769bc267482f96e0eb1d70c7f3368a47",
        "block": 118368814,
        "ts": "2026-11-19T16:46:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe94baf240594c31050bc8c9402e8416a80c5daac",
        "name": "Hunterchip",
        "symbol": "HUNTER",
        "deployer": "0x2ced42a5e8bf78cfd45451f1ede839dc4e92a0ee",
        "block": 118368719,
        "ts": "2026-11-19T16:46:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb47a306bd89e8b6fa2b14f553e534adcd7cc337f",
        "name": "CollectorCrypt",
        "symbol": "COLLECTOR",
        "deployer": "0x19eeb4e58310d2d7d9d202ad38cd5f0c59c1dc96",
        "block": 118368638,
        "ts": "2026-11-19T16:46:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x73a215ca60d9805ab8dd7c6bb274e8107d912d31",
        "name": "Nintendo64 Memes",
        "symbol": "Nintendo64",
        "deployer": "0x45cde31e37365c5cd378135e93bea0d0f89cb9d5",
        "block": 118368628,
        "ts": "2026-11-19T16:46:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x83d432572db3b1934ae8ebc0e5c44733b03ddb5f",
        "name": "CatMario",
        "symbol": "CatMario",
        "deployer": "0x206b094d00f04641cd13c922e78fa0742e27af60",
        "block": 118368216,
        "ts": "2026-11-19T16:45:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc5105699039a2dcabab6c35ad07769a5d0f689f5",
        "name": "PHANTOMS",
        "symbol": "PHNTM",
        "deployer": "0x39363dab27da6d678e7537f2759eee1407f321b2",
        "block": 118368122,
        "ts": "2026-11-19T16:45:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbef34ea35b1087579472cd2954dd9e3262ed0270",
        "name": "Chaotic Order",
        "symbol": "Rh",
        "deployer": "0xc934027104dce6a63539d6fb5a3966b455e13ad6",
        "block": 118367994,
        "ts": "2026-11-19T16:45:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x91d11c690c9b672075d65d0d4f2a0672bf427777",
        "name": "Mario",
        "symbol": "MARIO",
        "deployer": "0xea5c98a6164850f6ace669bd753de6928881b65e",
        "block": 118367954,
        "ts": "2026-11-19T16:45:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa461d5c46d5efe8ea59c1a5e3f0d1cf50d24475e",
        "name": "testy",
        "symbol": "testy",
        "deployer": "0x9e1df02ff70e62dbf9dc675ba802fb2487f68bde",
        "block": 118367918,
        "ts": "2026-11-19T16:45:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb2f4abb5135e94767914e9277949678f95f83323",
        "name": "Nintendo Co Ltd",
        "symbol": "7974",
        "deployer": "0x45cde31e37365c5cd378135e93bea0d0f89cb9d5",
        "block": 118367887,
        "ts": "2026-11-19T16:45:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x321fcce88a261bb00af74f129308ae96f4613ebb",
        "name": "Mario",
        "symbol": "Mario",
        "deployer": "0xdf2237114d595e0bf4d35cbcdebcdf43c55c4669",
        "block": 118367880,
        "ts": "2026-11-19T16:45:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2d0aa9c06f8ea1e4be647cf80c806c71879381f0",
        "name": "Mario",
        "symbol": "Mario",
        "deployer": "0x61e697835cb1bc6f0d3e7fccb83e6b819c066f1e",
        "block": 118367864,
        "ts": "2026-11-19T16:45:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd015ed4c509c9c46efe7169a6b6af2604deabddb",
        "name": "Assets Club",
        "symbol": "AssetsClub",
        "deployer": "0x108f5fa0dbb166a5a5a7373865d03e2b4510ca00",
        "block": 118367667,
        "ts": "2026-11-19T16:45:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9d72cb5d3abf882e64ee927304b4e7aa87481e18",
        "name": "Gabon",
        "symbol": "GABON",
        "deployer": "0x4e074171769bc267482f96e0eb1d70c7f3368a47",
        "block": 118367522,
        "ts": "2026-11-19T16:44:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xda0ba2b08693c83e11a1bf22fe5518f4fa4f0087",
        "name": "Nintendo Co Ltd",
        "symbol": "7974",
        "deployer": "0x000ece0e598f89c0c567f652e2ab48d6edac7bf6",
        "block": 118367453,
        "ts": "2026-11-19T16:44:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xab654044381b170cdf7a3a53d39d4febab4d1e18",
        "name": "Anthropig",
        "symbol": "ANTROPIG",
        "deployer": "0xe48f2e8ca7185d13c4abf4649c4d434c15192286",
        "block": 118367414,
        "ts": "2026-11-19T16:44:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd0b960942a3d44493a44f5eb5cfa95dfdafa230e",
        "name": "Cat Mario",
        "symbol": "CATMARIO",
        "deployer": "0x5cd8cf43b0df8ec528824f67faf76908213fad7b",
        "block": 118367232,
        "ts": "2026-11-19T16:44:16.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xbc278fe1f904799bcb24116b7679a2416c9ae480",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x5cd8cf43b0df8ec528824f67faf76908213fad7b",
        "block": 118367232,
        "ts": "2026-11-19T16:44:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf26032e3683fe05373c6be555bdf94c6fe311b72",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xcdc8d03a1ba3bde1886e08b6ea857e272ef5c7d2",
        "block": 118367186,
        "ts": "2026-11-19T16:44:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa1ea8b64aafd6559d85e4e70bcded5d61d753e0a",
        "name": "Cat Mario",
        "symbol": "CATMARIO",
        "deployer": "0x2c52d8e37a91090c75aa6d9168b864c87154c30c",
        "block": 118367130,
        "ts": "2026-11-19T16:44:06.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x236ad23f750a1c085602fb93317aee06aeeb7505",
        "name": "NEKOMARIO",
        "symbol": "NEKOMARIO",
        "deployer": "0x87bda98fa0dd5fb3502756dd75c9189531b2d3d7",
        "block": 118367115,
        "ts": "2026-11-19T16:44:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xaa5ed38c90da85f4ed437fdb6790d4ea72d7a016",
        "name": "Chop HEY",
        "symbol": "chHEY",
        "deployer": "0x2d2a8a51ccb15c280a457f3e77e4b760fbf3d5e0",
        "block": 118367097,
        "ts": "2026-11-19T16:44:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb478eab4a124cc973f49f0c84f869d5ff4589dd9",
        "name": "Wanted MARIO",
        "symbol": "WMARIO",
        "deployer": "0xfa13e453b8fae3f673aeb27f2b559fd2a5538283",
        "block": 118367091,
        "ts": "2026-11-19T16:44:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xafc49e30a8a770e4b571e9a96482e3ee7a097777",
        "name": "Perfect And Cute",
        "symbol": "PAC",
        "deployer": "0x21853863aeec000ebfa52e46b366fdf2ac02ca6b",
        "block": 118366964,
        "ts": "2026-11-19T16:43:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb0711574537f61298d43be9cebc05d8c5e6101e9",
        "name": "Stray Dog",
        "symbol": "DOG",
        "deployer": "0x23a3bd9d047052318fd51ff6ade53002def9f2fa",
        "block": 118366814,
        "ts": "2026-11-19T16:43:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x264aaa03dfc7bb02a2f63ae164653270b9da7723",
        "name": "AERODROME",
        "symbol": "AERO",
        "deployer": "0x4337001fff419768e088ce247456c1b892888084",
        "block": 118366813,
        "ts": "2026-11-19T16:43:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8853d52312f476d1fbe9971a3654b8c100063071",
        "name": "perfect and cute",
        "symbol": "PAC",
        "deployer": "0xff48a4ae2615a68d78c52144f960e1ef36511ee9",
        "block": 118366811,
        "ts": "2026-11-19T16:43:34.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
