/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-24T23:37:49.000Z",
    "opened_at": "2026-10-24T22:37:49.000Z",
    "window_hours": 1,
    "head_block": 97148030,
    "start_block": 97113679,
    "blocks_scanned": 34351,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 368,
    "unnamed_contracts": 0,
    "via_factory": 326,
    "no_receipt": 0,
    "candidates": 368,
    "mint_events": 10017,
    "deployers": 264,
    "roots": 435,
    "cleared_multiple": 435,
    "failed_gates": 425,
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
      "ai-anti-movie",
      "cat",
      "farming",
      "positions-nft",
      "uniswap-uni",
      "usdg"
    ],
    "top": {
      "root": "usdg",
      "launches": 10,
      "deployers": 10,
      "baseline_share": 0.0004,
      "multiple": 67.9,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "usdg",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 67.9,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "cat",
        "launches": 8,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 54.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "farming",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 47.6,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 19,
        "deployers": 18,
        "baseline_share": 0.0004,
        "multiple": 129.1,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 84%, merged to uniswap-uni"
      },
      {
        "root": "ai",
        "launches": 16,
        "deployers": 16,
        "baseline_share": 0.0004,
        "multiple": 108.7,
        "state": "MERGED",
        "reason": "ai + anti co-occur 87%, merged to ai-anti-movie"
      },
      {
        "root": "uni",
        "launches": 16,
        "deployers": 15,
        "baseline_share": 0.0004,
        "multiple": 108.7,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 84%, merged to uniswap-uni"
      },
      {
        "root": "anti",
        "launches": 15,
        "deployers": 15,
        "baseline_share": 0.0004,
        "multiple": 101.9,
        "state": "MERGED",
        "reason": "ai + anti co-occur 87%, merged to ai-anti-movie"
      },
      {
        "root": "movie",
        "launches": 13,
        "deployers": 13,
        "baseline_share": 0.0004,
        "multiple": 88.3,
        "state": "MERGED",
        "reason": "ai + anti co-occur 87%, merged to ai-anti-movie"
      },
      {
        "root": "positions",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 47.6,
        "state": "MERGED",
        "reason": "positions + nft co-occur 63%, merged to positions-nft"
      },
      {
        "root": "nft",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 40.8,
        "state": "MERGED",
        "reason": "positions + nft co-occur 63%, merged to positions-nft"
      },
      {
        "root": "volatile",
        "launches": 6,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 40.8,
        "state": "THIN",
        "reason": "volatile: 3 deployers < 6 required"
      },
      {
        "root": "lovot",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 34,
        "state": "THIN",
        "reason": "lovot: 5 deployers < 6 required"
      },
      {
        "root": "pangea",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 34,
        "state": "THIN",
        "reason": "pangea: 4 deployers < 6 required"
      },
      {
        "root": "one",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 27.2,
        "state": "THIN",
        "reason": "one: 4 launches < 5 required"
      },
      {
        "root": "racoon",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 27.2,
        "state": "THIN",
        "reason": "racoon: 4 launches < 5 required"
      },
      {
        "root": "ramses",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 27.2,
        "state": "THIN",
        "reason": "ramses: 4 launches < 5 required"
      },
      {
        "root": "amm",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "amm: 3 launches < 5 required"
      },
      {
        "root": "bike",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "bike: 3 launches < 5 required"
      },
      {
        "root": "europa",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "europa: 3 launches < 5 required"
      },
      {
        "root": "flex",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "flex: 3 launches < 5 required"
      },
      {
        "root": "gang",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "gang: 3 launches < 5 required"
      },
      {
        "root": "gh",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "gh: 3 launches < 5 required"
      },
      {
        "root": "giga",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "giga: 3 launches < 5 required"
      },
      {
        "root": "kosher",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "kosher: 3 launches < 5 required"
      },
      {
        "root": "larp",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "larp: 3 launches < 5 required"
      },
      {
        "root": "oil",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "oil: 3 launches < 5 required"
      },
      {
        "root": "openai",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "openai: 3 launches < 5 required"
      },
      {
        "root": "pepe",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "pepe: 3 launches < 5 required"
      },
      {
        "root": "position",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "position: 3 launches < 5 required"
      },
      {
        "root": "raccoon",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "raccoon: 3 launches < 5 required"
      },
      {
        "root": "rice",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "rice: 3 launches < 5 required"
      },
      {
        "root": "snell",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "snell: 3 launches < 5 required"
      },
      {
        "root": "st",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "st: 3 launches < 5 required"
      },
      {
        "root": "stonks",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "stonks: 3 launches < 5 required"
      },
      {
        "root": "sword",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "sword: 3 launches < 5 required"
      },
      {
        "root": "template",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "template: 3 launches < 5 required"
      },
      {
        "root": "weth",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "weth: 3 launches < 5 required"
      },
      {
        "root": "aero",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 13.6,
        "state": "THIN",
        "reason": "aero: 2 launches < 5 required"
      },
      {
        "root": "ape",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 13.6,
        "state": "THIN",
        "reason": "ape: 2 launches < 5 required"
      },
      {
        "root": "arcus",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 13.6,
        "state": "THIN",
        "reason": "arcus: 2 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x43ea5d5275cb7a50dbd930dd77fa8692740dc1f6",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xb246132a50bc76a456f0a781135ca9d0bc4dc304",
        "block": 97147991,
        "ts": "2026-10-24T23:37:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9892449a4e7927dda5a9f67e6bad750cbea1ed15",
        "name": "Meris Network",
        "symbol": "MERIS",
        "deployer": "0x0c3561bd85fdc51556225893f9ed536ecfd145e2",
        "block": 97147975,
        "ts": "2026-10-24T23:37:43.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x00c9f065b4945e23c66e990295b95e57360cfe51",
        "name": "Lovot",
        "symbol": "Lovot",
        "deployer": "0x789d92d029c9c84c08053c65a810b55a10bbf90a",
        "block": 97147955,
        "ts": "2026-10-24T23:37:41.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xac4a28b12bd880c28ca768b759f8909cc9947777",
        "name": "United Oil Trust Fund🇺🇸",
        "symbol": "UOTF",
        "deployer": "0xea5c98a6164850f6ace669bd753de6928881b65e",
        "block": 97147936,
        "ts": "2026-10-24T23:37:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0e4e718605b3c15c8e898eb2657b2db9d97fda86",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x168b921aa662cac2a0b76a7d1fc95ccaa85210eb",
        "block": 97147731,
        "ts": "2026-10-24T23:37:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8e19f88a888ea433e452118f1f8b117c8104847f",
        "name": "Sword Inu",
        "symbol": "SI",
        "deployer": "0xb246132a50bc76a456f0a781135ca9d0bc4dc304",
        "block": 97147634,
        "ts": "2026-10-24T23:37:07.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xa942190268b1491dd18f263cd971202ea5ea1e18",
        "name": "Sprunk",
        "symbol": "SPRUNK",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 97147429,
        "ts": "2026-10-24T23:36:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x28eac301ff97864f7f887a4fe4529f401a398045",
        "name": "Ramses Volatile - USDG/GFANG",
        "symbol": "Volatile - USDG/GFANG",
        "deployer": "0x84d0f74d21a89f86b67e9a38d8559d0b4e10f12d",
        "block": 97147314,
        "ts": "2026-10-24T23:36:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbc2f6fed647e917fd60c8990f2c6b91f0c426f12",
        "name": "Ramses Volatile - CASHCAT/USDG",
        "symbol": "Volatile - CASHCAT/USDG",
        "deployer": "0x84d0f74d21a89f86b67e9a38d8559d0b4e10f12d",
        "block": 97147314,
        "ts": "2026-10-24T23:36:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x933e51d1063240f93e2a990a1ca79db853735b9c",
        "name": "Ramses Volatile - RAM/fBOMB on Robinhood💥",
        "symbol": "Volatile - RAM/fBOMB on Robinhood💥",
        "deployer": "0x84d0f74d21a89f86b67e9a38d8559d0b4e10f12d",
        "block": 97147314,
        "ts": "2026-10-24T23:36:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xadcceee8e422050f890522fa798f8a93a4857083",
        "name": "Arcus BTC (3x Short)",
        "symbol": "sBTC3x",
        "deployer": "0xb7410dc44e2715161e9914272e2d55d7c5061faa",
        "block": 97147236,
        "ts": "2026-10-24T23:36:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x94c3bdde2b8c45c2f0ef603df92f31d333b67777",
        "name": "Polka Dot Zebra",
        "symbol": "TIRA",
        "deployer": "0x21853863aeec000ebfa52e46b366fdf2ac02ca6b",
        "block": 97147108,
        "ts": "2026-10-24T23:36:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0d2a964f0ccfaeae0ab9ea391d7b868cbb1b7777",
        "name": "Lanternhold",
        "symbol": "LANTERN",
        "deployer": "0x980b9bb5b3163638e0a35f8f26ff40547b16e2a9",
        "block": 97146695,
        "ts": "2026-10-24T23:35:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdcc494e02bb17a8cb9ebbba395cc16a254593722",
        "name": "Monkey Hug",
        "symbol": "HUG",
        "deployer": "0x0a0b5394e8413fc2a91459beaadee0231740bf7a",
        "block": 97146668,
        "ts": "2026-10-24T23:35:28.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x22ba569012a11cfff97a4eae794a1c02ffe3cd3b",
        "name": "Lanternhold",
        "symbol": "LANTERN",
        "deployer": "0xc9dfc0a41220115366b77a818b2b1687d750c12a",
        "block": 97146618,
        "ts": "2026-10-24T23:35:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x169f29eb9ac31b772f2ee0bdfca12a4a8352b01e",
        "name": "Akaru Labs",
        "symbol": "AKARU",
        "deployer": "0xd9b27095395ab95509657887eaaf1131f0ba6355",
        "block": 97146312,
        "ts": "2026-10-24T23:34:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x50d7b155caba801802b226ce8fcf3d2f10402190",
        "name": "Farm Valley Items",
        "symbol": "FVITEM",
        "deployer": "0xdd7b4c34e8fa3c12cdc2f10e028f17ec33d04817",
        "block": 97146038,
        "ts": "2026-10-24T23:34:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x85a479651526fbedb482cde88fd3fdd3c1b10970",
        "name": "OPENAI • Pre IPO Token",
        "symbol": "OPENAI",
        "deployer": "0xe3537477f9afef473998c1c86cfb1e1e678f0dc1",
        "block": 97145970,
        "ts": "2026-10-24T23:34:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xec5014e5aa1f4b8dbcd26dcb8b7103fd049b3cc5",
        "name": "YouTube",
        "symbol": "YouTube",
        "deployer": "0xbc64ae5a91aa454f283ce026c8913fa378aa78f7",
        "block": 97145922,
        "ts": "2026-10-24T23:34:12.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xd0ca71118ca21d674f9018a53026a38a0ab54dbf",
        "name": "Ducat",
        "symbol": "DUCAT",
        "deployer": "0x9b8d154e1a3ce0cd6a43d6cd493e2acef00cbc47",
        "block": 97145830,
        "ts": "2026-10-24T23:34:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xeee5d157d73b38c22a04ae916cbf55c1af421e18",
        "name": "Shithouse",
        "symbol": "SHITHOUSE",
        "deployer": "0xd20278dc748cfe4a381e8969751873f1ab80cce4",
        "block": 97145404,
        "ts": "2026-10-24T23:33:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xaf5fed1b42ea62c1e8aef33df625e3098b02f6c8",
        "name": "Catday",
        "symbol": "CAT",
        "deployer": "0x0c7e546d4ba3ba6b8979485b78e329e8b9c2e1e5",
        "block": 97145299,
        "ts": "2026-10-24T23:33:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc31cd857e284b1e0745ae64d8e8d586e8d47a86a",
        "name": "Raphael Slipstream Position",
        "symbol": "RAPH-CL-POS",
        "deployer": "0x4139fa266731449af9cdad40a12f06cae3837cf2",
        "block": 97145296,
        "ts": "2026-10-24T23:33:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x846740a8554fbe091ec4754d5520e1403a6a1e18",
        "name": "GolfCoin",
        "symbol": "GOLF",
        "deployer": "0xd20278dc748cfe4a381e8969751873f1ab80cce4",
        "block": 97144438,
        "ts": "2026-10-24T23:31:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x02c0b72779234e7a8666190917d3327f1554ded6",
        "name": "Juice",
        "symbol": "JUICE",
        "deployer": "0x4cb75146e98562c9d79b31649c6c739e4dcb7cd5",
        "block": 97144124,
        "ts": "2026-10-24T23:30:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x614c365abcddc41a8219d1dae0c07b9ad17cfda4",
        "name": "CryptoRobinhoodPunks",
        "symbol": "CryptoRobinhoodPunks",
        "deployer": "0x0ec4e45f9ce3020024c0418a74cd31fbc487038f",
        "block": 97143801,
        "ts": "2026-10-24T23:30:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5fc5360d0400a0fd4f2af552add042d716f1d168",
        "name": "Global Dollar",
        "symbol": "USDG",
        "deployer": "0x0e183f1d7286cc260761d15fc07514a39b5a36c2",
        "block": 97143604,
        "ts": "2026-10-24T23:30:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbd647d39bd8eb5cda00cbdc9b6a79c4f87647b9e",
        "name": "Brian Wheel",
        "symbol": "BRIANWHEEL",
        "deployer": "0xd5c605b2f6e9be0fdcee092c0edf8f56db5d2bc2",
        "block": 97143504,
        "ts": "2026-10-24T23:29:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xeacbff74ec2c9e590159aeef20e516e9be54d6ea",
        "name": "5",
        "symbol": "5",
        "deployer": "0xc5d22a7d5b203164bfa6479d72de9297cff19bf5",
        "block": 97143497,
        "ts": "2026-10-24T23:29:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6554ceda5b18cf10fcab0f953318ed3a66d12b95",
        "name": "Rockstar Games",
        "symbol": "Rockstar",
        "deployer": "0xc2c4f8a2730e13f160e20b69e1994b200dd62a3f",
        "block": 97143240,
        "ts": "2026-10-24T23:29:27.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xfecf4374b8b1216bd03083554b0c7077c5861e18",
        "name": "Tesla Super Intelligence",
        "symbol": "TESLASI",
        "deployer": "0x276dc48f05ac93ae92f7f7f92c47ab5644f35ad0",
        "block": 97143117,
        "ts": "2026-10-24T23:29:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x761b770ba961c4a9a5c44239df4b232791d2cc30",
        "name": "xxccee3",
        "symbol": "xxccee3",
        "deployer": "0x549df3ec88e45c0e7803953bcc404b8d46707cb8",
        "block": 97142884,
        "ts": "2026-10-24T23:28:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x79c349b8599058011f3ec0b47fb40ccaf533b6ea",
        "name": "Cat5",
        "symbol": "CAT5",
        "deployer": "0xc5d22a7d5b203164bfa6479d72de9297cff19bf5",
        "block": 97142783,
        "ts": "2026-10-24T23:28:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x00466c0053fa70c309e778b49293f5a1c3da1cde",
        "name": "Hens",
        "symbol": "HEN",
        "deployer": "0xfa21ec1aa0627138bd8b183e150e881d9e160b58",
        "block": 97142767,
        "ts": "2026-10-24T23:28:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x091f0c7e675a787a4018eb47c30bed3fa2013b65",
        "name": "MintStakeShare 2",
        "symbol": "MSS2",
        "deployer": "0x1990852348c7ab9f29ad13e7e41cef8bc2375cc5",
        "block": 97142670,
        "ts": "2026-10-24T23:28:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7ac6b2e533ac177ffac4fad3f5dad6c780847777",
        "name": "███",
        "symbol": "███",
        "deployer": "0x528ee384dbdb324f96e0516e428ccb26295e774c",
        "block": 97142584,
        "ts": "2026-10-24T23:28:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6b70a14b3a86a226d28fb02b8f8cfa2773afecfd",
        "name": "The anti-AI Movie",
        "symbol": "WILDWOOD",
        "deployer": "0x4efb8244713d773a9518f05dc1d823ec0f336143",
        "block": 97142515,
        "ts": "2026-10-24T23:28:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbaf6392421e955e2d841f3b3e7331f19d1157e1b",
        "name": "███",
        "symbol": "███",
        "deployer": "0xae0e7adb6286903bbfd85c4573d393fe1b5cb81f",
        "block": 97142491,
        "ts": "2026-10-24T23:28:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc54246e45915c6dd5f503a84ed6ebe7e12ca7777",
        "name": "Poop Aura Final Boss",
        "symbol": "KIMCHIPOOP",
        "deployer": "0xe26a8a93a803f6dcc9355da3beac69d733ddfd5d",
        "block": 97142298,
        "ts": "2026-10-24T23:27:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x363ed69acc0596a2ca28344077749ecb0596f63c",
        "name": "CAT day",
        "symbol": "CAT",
        "deployer": "0x0c7e546d4ba3ba6b8979485b78e329e8b9c2e1e5",
        "block": 97142172,
        "ts": "2026-10-24T23:27:33.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
