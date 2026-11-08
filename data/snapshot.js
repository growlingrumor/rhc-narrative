/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-08T08:18:05.000Z",
    "opened_at": "2026-11-08T07:18:05.000Z",
    "window_hours": 1,
    "head_block": 109087270,
    "start_block": 109054337,
    "blocks_scanned": 32933,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 242,
    "unnamed_contracts": 12,
    "via_factory": 243,
    "no_receipt": 0,
    "candidates": 254,
    "mint_events": 12165,
    "deployers": 176,
    "roots": 342,
    "cleared_multiple": 227,
    "failed_gates": 226,
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
      "gang"
    ],
    "top": {
      "root": "gang",
      "launches": 7,
      "deployers": 7,
      "baseline_share": 0.0005,
      "multiple": 57.9,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "gang",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0005,
        "multiple": 57.9,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 20,
        "deployers": 12,
        "baseline_share": 0.0509,
        "multiple": 1.6,
        "state": "BELOW",
        "reason": "uniswap: 1.6x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 17,
        "deployers": 9,
        "baseline_share": 0.0424,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "uni: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "usdg",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0203,
        "multiple": 2,
        "state": "BELOW",
        "reason": "usdg: 2.0x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0167,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "positions: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "nft",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0201,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "nft: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "robinhood",
        "launches": 6,
        "deployers": 5,
        "baseline_share": 0.0513,
        "multiple": 0.5,
        "state": "BELOW",
        "reason": "robinhood: 0.5x over baseline < 6.0x required"
      },
      {
        "root": "claudia",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 41.3,
        "state": "THIN",
        "reason": "claudia: 4 launches < 5 required"
      },
      {
        "root": "quero",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 41.3,
        "state": "THIN",
        "reason": "quero: 4 launches < 5 required"
      },
      {
        "root": "amc",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.001,
        "multiple": 16.5,
        "state": "THIN",
        "reason": "amc: 4 launches < 5 required"
      },
      {
        "root": "position",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0054,
        "multiple": 3.1,
        "state": "BELOW",
        "reason": "position: 3.1x over baseline < 6.0x required"
      },
      {
        "root": "volatile",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0083,
        "multiple": 2,
        "state": "BELOW",
        "reason": "volatile: 2.0x over baseline < 6.0x required"
      },
      {
        "root": "modpad",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 31,
        "state": "THIN",
        "reason": "modpad: 3 launches < 5 required"
      },
      {
        "root": "stonk",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.001,
        "multiple": 12.4,
        "state": "THIN",
        "reason": "stonk: 3 launches < 5 required"
      },
      {
        "root": "mars",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0018,
        "multiple": 6.9,
        "state": "THIN",
        "reason": "mars: 3 launches < 5 required"
      },
      {
        "root": "borrowable",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0027,
        "multiple": 4.6,
        "state": "BELOW",
        "reason": "borrowable: 4.6x over baseline < 6.0x required"
      },
      {
        "root": "lend",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0027,
        "multiple": 4.6,
        "state": "BELOW",
        "reason": "lend: 4.6x over baseline < 6.0x required"
      },
      {
        "root": "fund",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0029,
        "multiple": 4.3,
        "state": "BELOW",
        "reason": "fund: 4.3x over baseline < 6.0x required"
      },
      {
        "root": "flock",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0032,
        "multiple": 3.9,
        "state": "BELOW",
        "reason": "flock: 3.9x over baseline < 6.0x required"
      },
      {
        "root": "chop",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0041,
        "multiple": 3,
        "state": "BELOW",
        "reason": "chop: 3.0x over baseline < 6.0x required"
      },
      {
        "root": "deposit",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0049,
        "multiple": 2.5,
        "state": "BELOW",
        "reason": "deposit: 2.5x over baseline < 6.0x required"
      },
      {
        "root": "layerbank",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0053,
        "multiple": 2.3,
        "state": "BELOW",
        "reason": "layerbank: 2.3x over baseline < 6.0x required"
      },
      {
        "root": "dog",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0058,
        "multiple": 2.1,
        "state": "BELOW",
        "reason": "dog: 2.1x over baseline < 6.0x required"
      },
      {
        "root": "amm",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0062,
        "multiple": 2,
        "state": "BELOW",
        "reason": "amm: 2.0x over baseline < 6.0x required"
      },
      {
        "root": "staked",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0069,
        "multiple": 1.8,
        "state": "BELOW",
        "reason": "staked: 1.8x over baseline < 6.0x required"
      },
      {
        "root": "weth",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0073,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "weth: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "aser",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.7,
        "state": "THIN",
        "reason": "aser: 2 launches < 5 required"
      },
      {
        "root": "bbc",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 20.7,
        "state": "THIN",
        "reason": "bbc: 2 launches < 5 required"
      },
      {
        "root": "chrm",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.7,
        "state": "THIN",
        "reason": "chrm: 2 launches < 5 required"
      },
      {
        "root": "donuts",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.7,
        "state": "THIN",
        "reason": "donuts: 2 launches < 5 required"
      },
      {
        "root": "eggs",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.7,
        "state": "THIN",
        "reason": "eggs: 2 launches < 5 required"
      },
      {
        "root": "fozo",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 20.7,
        "state": "THIN",
        "reason": "fozo: 2 launches < 5 required"
      },
      {
        "root": "habibi",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.7,
        "state": "THIN",
        "reason": "habibi: 2 launches < 5 required"
      },
      {
        "root": "haly",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.7,
        "state": "THIN",
        "reason": "haly: 2 launches < 5 required"
      },
      {
        "root": "halyte",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.7,
        "state": "THIN",
        "reason": "halyte: 2 launches < 5 required"
      },
      {
        "root": "locker",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 20.7,
        "state": "THIN",
        "reason": "locker: 2 launches < 5 required"
      },
      {
        "root": "mod",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.7,
        "state": "THIN",
        "reason": "mod: 2 launches < 5 required"
      },
      {
        "root": "ohmies",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.7,
        "state": "THIN",
        "reason": "ohmies: 2 launches < 5 required"
      },
      {
        "root": "ponsi",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.7,
        "state": "THIN",
        "reason": "ponsi: 2 launches < 5 required"
      },
      {
        "root": "degen",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0007,
        "multiple": 11.8,
        "state": "THIN",
        "reason": "degen: 2 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x28eac301ff97864f7f887a4fe4529f401a398045",
        "name": "Ramses Volatile - USDG/GFANG",
        "symbol": "Volatile - USDG/GFANG",
        "deployer": "0x7b004b458892a5e021e657650fd93c36e10a8d56",
        "block": 109087230,
        "ts": "2026-11-08T08:18:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x338bb09aa6d516522ec8c1d8ae85e2ab659541d3",
        "name": "Orynex 1102",
        "symbol": "ORYNX",
        "deployer": "0xb4ebc66fee84cf0fef670eebc82dedfe3fe995d3",
        "block": 109086864,
        "ts": "2026-11-08T08:17:18.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xfd407ca6b3cfbc3ea97a1988208262dfa4b4f278",
        "name": "Trench Kitten",
        "symbol": "TKIT",
        "deployer": "0x21156d4dc78e3dd6f7820a8c167d3a48a84e8ded",
        "block": 109086694,
        "ts": "2026-11-08T08:16:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3ac3f7c84a97c945d084cbcd64ce01b443f9acdb",
        "name": "Xaman",
        "symbol": "XAMAN",
        "deployer": "0x65660ec0bfb255cfd7f5d8b9d7db89a2ec62f41b",
        "block": 109086541,
        "ts": "2026-11-08T08:16:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xca9c78dd337a67f6e0077f65f5e9218719d30edf",
        "name": "NetNet",
        "symbol": "NET",
        "deployer": "0xfff15db33ca3187dfee2c9bdb7bcdac89172dae9",
        "block": 109086502,
        "ts": "2026-11-08T08:16:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x83e2902f2c121871a455d05ecdcc76a2cb505df1",
        "name": "RobinHood",
        "symbol": "RBH",
        "deployer": "0xfb6d9510387b9ef89d49978e606f87781443d210",
        "block": 109086400,
        "ts": "2026-11-08T08:16:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3ec054fc00111cdda1668342795e8e8b04e3cea0",
        "name": "flor dog",
        "symbol": "FLORDOG",
        "deployer": "0xd33d72d8a2a684e54a6b600322e1536375b1c917",
        "block": 109086384,
        "ts": "2026-11-08T08:16:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb733ddc4efec3da1ad41994db8df30e56bf95585",
        "name": "APE ONCHAIN",
        "symbol": "APE",
        "deployer": "0x141022f00dbf070e689dc6e84f6e016d9a3ae963",
        "block": 109086361,
        "ts": "2026-11-08T08:16:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3db744585f892dc77750b2f4376b4fc1dd66d510",
        "name": "Pyramid",
        "symbol": "PYR",
        "deployer": "0x71e78c7197eee4ab2a5c940477383b89bfb7c5bd",
        "block": 109086134,
        "ts": "2026-11-08T08:15:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x500855ca9f281a1383482399addd1651269bb866",
        "name": "Called It",
        "symbol": "CALLED",
        "deployer": "0x0527425cdd726136bf0773c4178238833ea56b44",
        "block": 109085773,
        "ts": "2026-11-08T08:15:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0b16e42fa4b0b0848a09e254a649149b0f539999",
        "name": "Binance 6.3B Hack",
        "symbol": "HACK63",
        "deployer": "0x3475178e253561fdd3037c0d6eefb67a0af4c50a",
        "block": 109085728,
        "ts": "2026-11-08T08:15:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcac8bf12120aad96c8ecaa08936e49471ad98c61",
        "name": "ModPad",
        "symbol": "MOD",
        "deployer": "0xbd8d0273d016639892917352c36fb2d5aadd2468",
        "block": 109085437,
        "ts": "2026-11-08T08:14:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x28be78c435d9490263ecc931e86b9fb075df409a",
        "name": "fozo",
        "symbol": "FOPO",
        "deployer": "0xd33d72d8a2a684e54a6b600322e1536375b1c917",
        "block": 109085387,
        "ts": "2026-11-08T08:14:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x09e3798b9e899f8aef13db0d6fecc6c042eec4c9",
        "name": "fozo",
        "symbol": "FOZO",
        "deployer": "0xd33d72d8a2a684e54a6b600322e1536375b1c917",
        "block": 109085175,
        "ts": "2026-11-08T08:14:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4d3f37a965b21ab4122e92dd41d2693e742c883b",
        "name": "Ripe DAO Governance Token",
        "symbol": "RIPE",
        "deployer": "0xf225c15d3aa83eb2f7d5e84f441a3d84d4ae3fd6",
        "block": 109085156,
        "ts": "2026-11-08T08:14:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x710992b2fc8ba9aaaeebe682bee35b0aa479c589",
        "name": "aser.trade",
        "symbol": "ASER",
        "deployer": "0x137193272bb9a332c5488a78a47d7da56be4014e",
        "block": 109084985,
        "ts": "2026-11-08T08:13:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb11faf17b00b459b614c0a66400d66614577d226",
        "name": "Ohmies",
        "symbol": "OHMIES",
        "deployer": "0xb4234382b425ccbf4f0c2ad5b050cc581e392036",
        "block": 109084530,
        "ts": "2026-11-08T08:12:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2f060715ef9de33236653bb5e73c62e0cac7d585",
        "name": "grow ETH",
        "symbol": "ysETH",
        "deployer": "0xa4dcc0917215b2ef895ebf375911823105b5b753",
        "block": 109084389,
        "ts": "2026-11-08T08:12:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x09644371d4f5c528ac0c8922b04688603deb45ff",
        "name": "foyo",
        "symbol": "FOYO",
        "deployer": "0xd33d72d8a2a684e54a6b600322e1536375b1c917",
        "block": 109084253,
        "ts": "2026-11-08T08:12:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x218bd0545ff32a7405aee1f5e2a8c53e19764fdc",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xda1e6cf384b8b47727bee7d5b9271b3a5ad50772",
        "block": 109084130,
        "ts": "2026-11-08T08:12:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x63c12667638f2ae6fc6ae09b43d98ec84a8586ea",
        "name": "Wrapped Staked NET",
        "symbol": "wsNET",
        "deployer": "0xfff15db33ca3187dfee2c9bdb7bcdac89172dae9",
        "block": 109084020,
        "ts": "2026-11-08T08:11:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x55a4e6384753b82bbb9b06b227864e24d8bd17e5",
        "name": "aser.trade",
        "symbol": "ASER",
        "deployer": "0x53bd318e254da7f954a965b4c67a3491d71e81f0",
        "block": 109083651,
        "ts": "2026-11-08T08:11:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7a33c2113524332efd910c6fe082e0a354687307",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x309934673ab4bc14196458039f0c57d37f5e82d2",
        "block": 109083544,
        "ts": "2026-11-08T08:11:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1e737ae752394be01d7e1b688050f090c46e1e18",
        "name": "Official OpenAI Token",
        "symbol": "COGNITION",
        "deployer": "0xf7093908040391c187f7644c4e42f7fe6f76cc88",
        "block": 109083543,
        "ts": "2026-11-08T08:11:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x309fe8e70003c03014d1a61af0693edb559d1e18",
        "name": "Token of appreciation",
        "symbol": "TOKEN",
        "deployer": "0x1cff0b6899fcd4a38bc2baf59f4b2177acd05af3",
        "block": 109083412,
        "ts": "2026-11-08T08:10:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd13980ce4f2b2f922489c60096bd9579d0240087",
        "name": "Hermano is Calling",
        "symbol": "Hermano",
        "deployer": "0xb326902c4327d61e6c89e4944c3ef3d8a3194c0b",
        "block": 109083392,
        "ts": "2026-11-08T08:10:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x384bed880a5bd6834504079d3a5ef097d9a0d560",
        "name": "Aether",
        "symbol": "AETH",
        "deployer": "0x058b7477d540d7b89b2862952432fde651a93b48",
        "block": 109083193,
        "ts": "2026-11-08T08:10:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfe842c0c70b884975d4f583db372ae751b01bf9d",
        "name": "ModPad",
        "symbol": "MOD",
        "deployer": "0x144c70c8c92206b3e1572a4ea961ddf435100cf5",
        "block": 109083158,
        "ts": "2026-11-08T08:10:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe91afe0baf7a1e54bf02ca0742bd8bc00b272ad8",
        "name": "Field Atlas",
        "symbol": "ATLAS",
        "deployer": "0xda1e6cf384b8b47727bee7d5b9271b3a5ad50772",
        "block": 109082801,
        "ts": "2026-11-08T08:09:42.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xef03e148f107d53a2017b78bf3d43d4148cca8bf",
        "name": "A Meme Dog",
        "symbol": "AMD",
        "deployer": "0x309934673ab4bc14196458039f0c57d37f5e82d2",
        "block": 109082180,
        "ts": "2026-11-08T08:08:34.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x3a3edf0a1107c785ba286d35963d6ce3d000d102",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xed885d219a11274444039eae81d5e7e07b093711",
        "block": 109082138,
        "ts": "2026-11-08T08:08:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x53f9ed4253f67947fddf445363f3970fe99ad56e",
        "name": "Sprinkles",
        "symbol": "SPRINK",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 109082093,
        "ts": "2026-11-08T08:08:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0b9341b92ad6a9b52fc0eabf91b9389c73cb919f",
        "name": "Adyros",
        "symbol": "ADYROS",
        "deployer": "0x32e1a737f5adb6949e376729153cad7e078ecc16",
        "block": 109082067,
        "ts": "2026-11-08T08:08:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2ca1b62a28aa5b242e415f223f14aeea00ffdc3d",
        "name": "CONDITIONALS",
        "symbol": "CONDITION",
        "deployer": "0x7efaefe65f1954e35f4c379369c615f5aaec5ada",
        "block": 109081946,
        "ts": "2026-11-08T08:08:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5bd53a0659de96bb087bd13e26ea8c50514f5e84",
        "name": "Claudia Coin",
        "symbol": "CLAUDIA",
        "deployer": "0x1b61f170b20d6ce0f62ebada9b2b34569c351666",
        "block": 109081938,
        "ts": "2026-11-08T08:08:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x43761556af518fa1db380fa230021be6a86faceb",
        "name": "Ashen Lantern",
        "symbol": "ASHENL",
        "deployer": "0x7276a25489f9ebabf31897ce908663dfe9e7f094",
        "block": 109081937,
        "ts": "2026-11-08T08:08:08.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xc876b3928cf2dac0d90e4cea3a1c95105f631e18",
        "name": "Official OpenAI Token",
        "symbol": "OPENAI",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 109081253,
        "ts": "2026-11-08T08:06:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x547e00db4c59317f7380db881c0df79da3050dbc",
        "name": "Pusycat",
        "symbol": "pusycat",
        "deployer": "0x6568cef47318394b17d479a7e628d4832c650890",
        "block": 109080438,
        "ts": "2026-11-08T08:05:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9d7008e169d040b6c0140eb92e7ca82b12643497",
        "name": "Vote-Escrow STONX",
        "symbol": "veSTONX",
        "deployer": "0xcf6c2952d1435c3389ade7fdd13776855b0ba4cb",
        "block": 109080306,
        "ts": "2026-11-08T08:04:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9b96d19d519694a991b9ffb34e5a200bd8fb8fbb",
        "name": "WSM",
        "symbol": "WSM",
        "deployer": "0x6866a6a28129839f67da069ceb68ad258830363e",
        "block": 109079964,
        "ts": "2026-11-08T08:04:20.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
