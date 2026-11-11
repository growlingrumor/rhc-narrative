/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-11T02:53:17.000Z",
    "opened_at": "2026-11-11T01:53:17.000Z",
    "window_hours": 1,
    "head_block": 111380248,
    "start_block": 111346287,
    "blocks_scanned": 33961,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 339,
    "unnamed_contracts": 13,
    "via_factory": 320,
    "no_receipt": 0,
    "candidates": 352,
    "mint_events": 10525,
    "deployers": 237,
    "roots": 395,
    "cleared_multiple": 236,
    "failed_gates": 228,
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
      "agesic",
      "bagworking-great-make",
      "payola-promo",
      "robot",
      "sherwood"
    ],
    "top": {
      "root": "sherwood",
      "launches": 11,
      "deployers": 11,
      "baseline_share": 0.0005,
      "multiple": 64.9,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "sherwood",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0005,
        "multiple": 64.9,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "agesic",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 59,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "robot",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 44.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "payola",
        "launches": 17,
        "deployers": 17,
        "baseline_share": 0.0004,
        "multiple": 125.4,
        "state": "MERGED",
        "reason": "payola + promo co-occur 100%, merged to payola-promo"
      },
      {
        "root": "promo",
        "launches": 17,
        "deployers": 17,
        "baseline_share": 0.0004,
        "multiple": 125.4,
        "state": "MERGED",
        "reason": "payola + promo co-occur 100%, merged to payola-promo"
      },
      {
        "root": "bagworking",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 73.7,
        "state": "MERGED",
        "reason": "bagworking + great co-occur 100%, merged to bagworking-great-make"
      },
      {
        "root": "great",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0006,
        "multiple": 49.2,
        "state": "MERGED",
        "reason": "bagworking + great co-occur 100%, merged to bagworking-great-make"
      },
      {
        "root": "make",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0007,
        "multiple": 42.1,
        "state": "MERGED",
        "reason": "bagworking + great co-occur 100%, merged to bagworking-great-make"
      },
      {
        "root": "uniswap",
        "launches": 21,
        "deployers": 17,
        "baseline_share": 0.0509,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "uniswap: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 18,
        "deployers": 14,
        "baseline_share": 0.0424,
        "multiple": 1.3,
        "state": "BELOW",
        "reason": "uni: 1.3x over baseline < 6.0x required"
      },
      {
        "root": "cat",
        "launches": 15,
        "deployers": 15,
        "baseline_share": 0.013,
        "multiple": 3.4,
        "state": "BELOW",
        "reason": "cat: 3.4x over baseline < 6.0x required"
      },
      {
        "root": "counterparty",
        "launches": 11,
        "deployers": 1,
        "baseline_share": 0.0055,
        "multiple": 5.9,
        "state": "BELOW",
        "reason": "counterparty: 5.9x over baseline < 6.0x required"
      },
      {
        "root": "predictor",
        "launches": 11,
        "deployers": 1,
        "baseline_share": 0.0055,
        "multiple": 5.9,
        "state": "BELOW",
        "reason": "predictor: 5.9x over baseline < 6.0x required"
      },
      {
        "root": "prd",
        "launches": 10,
        "deployers": 1,
        "baseline_share": 0.0048,
        "multiple": 6.1,
        "state": "THIN",
        "reason": "prd: 1 deployers < 6 required"
      },
      {
        "root": "ctr",
        "launches": 10,
        "deployers": 1,
        "baseline_share": 0.0049,
        "multiple": 6,
        "state": "THIN",
        "reason": "ctr: 1 deployers < 6 required"
      },
      {
        "root": "usdg",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0203,
        "multiple": 1.3,
        "state": "BELOW",
        "reason": "usdg: 1.3x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0167,
        "multiple": 1.4,
        "state": "BELOW",
        "reason": "positions: 1.4x over baseline < 6.0x required"
      },
      {
        "root": "nft",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0201,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "nft: 0.9x over baseline < 6.0x required"
      },
      {
        "root": "robinhood",
        "launches": 6,
        "deployers": 3,
        "baseline_share": 0.0513,
        "multiple": 0.3,
        "state": "BELOW",
        "reason": "robinhood: 0.3x over baseline < 6.0x required"
      },
      {
        "root": "pregabalinu",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 36.9,
        "state": "THIN",
        "reason": "pregabalinu: 5 deployers < 6 required"
      },
      {
        "root": "tide",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 36.9,
        "state": "THIN",
        "reason": "tide: 5 deployers < 6 required"
      },
      {
        "root": "tidewell",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 36.9,
        "state": "THIN",
        "reason": "tidewell: 5 deployers < 6 required"
      },
      {
        "root": "pi",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0008,
        "multiple": 18.4,
        "state": "THIN",
        "reason": "pi: 5 deployers < 6 required"
      },
      {
        "root": "bf",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0027,
        "multiple": 5.5,
        "state": "BELOW",
        "reason": "bf: 5.5x over baseline < 6.0x required"
      },
      {
        "root": "ed",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 29.5,
        "state": "THIN",
        "reason": "ed: 4 launches < 5 required"
      },
      {
        "root": "hao",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 29.5,
        "state": "THIN",
        "reason": "hao: 4 launches < 5 required"
      },
      {
        "root": "ni",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 29.5,
        "state": "THIN",
        "reason": "ni: 4 launches < 5 required"
      },
      {
        "root": "zolva",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 29.5,
        "state": "THIN",
        "reason": "zolva: 4 launches < 5 required"
      },
      {
        "root": "fund",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0029,
        "multiple": 4.1,
        "state": "BELOW",
        "reason": "fund: 4.1x over baseline < 6.0x required"
      },
      {
        "root": "chop",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0041,
        "multiple": 2.9,
        "state": "BELOW",
        "reason": "chop: 2.9x over baseline < 6.0x required"
      },
      {
        "root": "layerbank",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0053,
        "multiple": 2.2,
        "state": "BELOW",
        "reason": "layerbank: 2.2x over baseline < 6.0x required"
      },
      {
        "root": "dog",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0058,
        "multiple": 2,
        "state": "BELOW",
        "reason": "dog: 2.0x over baseline < 6.0x required"
      },
      {
        "root": "gato",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 22.1,
        "state": "THIN",
        "reason": "gato: 3 launches < 5 required"
      },
      {
        "root": "greg",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 22.1,
        "state": "THIN",
        "reason": "greg: 3 launches < 5 required"
      },
      {
        "root": "gta",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0016,
        "multiple": 5.5,
        "state": "BELOW",
        "reason": "gta: 5.5x over baseline < 6.0x required"
      },
      {
        "root": "brownfi",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0025,
        "multiple": 3.5,
        "state": "BELOW",
        "reason": "brownfi: 3.5x over baseline < 6.0x required"
      },
      {
        "root": "pos",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0044,
        "multiple": 2,
        "state": "BELOW",
        "reason": "pos: 2.0x over baseline < 6.0x required"
      },
      {
        "root": "amm",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0062,
        "multiple": 1.4,
        "state": "BELOW",
        "reason": "amm: 1.4x over baseline < 6.0x required"
      },
      {
        "root": "agent",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0068,
        "multiple": 1.3,
        "state": "BELOW",
        "reason": "agent: 1.3x over baseline < 6.0x required"
      },
      {
        "root": "staked",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0069,
        "multiple": 1.3,
        "state": "BELOW",
        "reason": "staked: 1.3x over baseline < 6.0x required"
      }
    ],
    "recent": [
      {
        "address": "0x4a6b99fab59b2c77c3f9e74a0de0d0a078f72604",
        "name": "BOOK OF MEME",
        "symbol": "BOME",
        "deployer": "0x87c24cedd8655f4ad49242a38e47e7d9b381a7d9",
        "block": 111379820,
        "ts": "2026-11-11T02:52:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf1d3edf2041b4ec4e1642b57952d1f83c2514ab2",
        "name": "Jensen Huang Coin",
        "symbol": "JENSEN",
        "deployer": "0x4337003fcd2f56de3977ccb806383e9161628d0e",
        "block": 111379642,
        "ts": "2026-11-11T02:52:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd3301b1034cdf06d33834803bb2eb142c495d970",
        "name": "ICHI Vault Liquidity",
        "symbol": "IV-KITTY-PUNCH20-WETH-10000",
        "deployer": "0xb93b4bc1fc82eb0b20a35abe2b05e63d96deca5a",
        "block": 111379532,
        "ts": "2026-11-11T02:51:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1bee27aa092ef2cd90e721051d036496acf2abc2",
        "name": "AUVEN Zeta 13",
        "symbol": "AUVN",
        "deployer": "0x4f512c5a767062896eb27555684712edd69c1047",
        "block": 111379136,
        "ts": "2026-11-11T02:51:15.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x87946d696c37a22a3002d71f8abe867fa8ee23b0",
        "name": "ANyONe Protocol",
        "symbol": "ANYONE",
        "deployer": "0x2858e8628327ab695bb751a328cfb3d5dfd762f4",
        "block": 111378698,
        "ts": "2026-11-11T02:50:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc25506a323d3b391ba8f216276015d70c579d94a",
        "name": "Heartlight",
        "symbol": "LIGHT",
        "deployer": "0xdbf303ac9cd59b6c0e5739590dacdbc4e582dbb7",
        "block": 111378615,
        "ts": "2026-11-11T02:50:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x63a08a8635339a5c05e589d774231e03931169fb",
        "name": "Neon",
        "symbol": "Neon",
        "deployer": "0xd9497b53abcd6972b6370cb195b6bfd6b280e607",
        "block": 111378442,
        "ts": "2026-11-11T02:50:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbe72509902182f6da6ed10239d6e415e411797a5",
        "name": "greg",
        "symbol": "greg",
        "deployer": "0xf39d9f648309a988e80ea4f20808f092969bd2c9",
        "block": 111378412,
        "ts": "2026-11-11T02:49:57.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x8d03617b24a82b22519405a12fb1635013a83de6",
        "name": "HYPE",
        "symbol": "HYPE",
        "deployer": "0x0f23fe653b8234305183099f228539404345598a",
        "block": 111378000,
        "ts": "2026-11-11T02:49:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa4f70ae0b7114408ce044c1054e68f36e8353b7d",
        "name": "Cancel Brit",
        "symbol": "CNCL",
        "deployer": "0x27547e74b10d48f67410f5a8ac70ceb3cf51ab7d",
        "block": 111377831,
        "ts": "2026-11-11T02:48:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x55ae113b1fdeb7eb3bf691cf66aecd8d318d688e",
        "name": "Bad Bot Jail",
        "symbol": "BOTJL",
        "deployer": "0x3e16a598abfe240a3ac6482be3e5d8291df3344a",
        "block": 111377747,
        "ts": "2026-11-11T02:48:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5e8cd6a413cd6a08834fa67a912d16fc7a4bb9b9",
        "name": "SayEchoo",
        "symbol": "ECHO",
        "deployer": "0x16b571e2c9430b44757c676744fbf8d9e1d71306",
        "block": 111377719,
        "ts": "2026-11-11T02:48:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x23a597af5085fd3337ab230665fb33da04dec066",
        "name": "PonsMeow",
        "symbol": "9",
        "deployer": "0x23fd25e959ebfe60aa7c983dd91933931a63e20a",
        "block": 111377605,
        "ts": "2026-11-11T02:48:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x931850be9df2a8379ad357dca28db10013b7110e",
        "name": "PREGABALINU",
        "symbol": "PI",
        "deployer": "0xebe4976307c21d9d7d237100421ccbcfc7d5e9aa",
        "block": 111377465,
        "ts": "2026-11-11T02:48:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb0fcc56897ae13553d1602b5b80565153e790087",
        "name": "intern cat",
        "symbol": "intern",
        "deployer": "0x000ece0e598f89c0c567f652e2ab48d6edac7bf6",
        "block": 111377434,
        "ts": "2026-11-11T02:48:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9bc3dbdc54fbcfd46adb547a71ca525b6e11f12c",
        "name": "Jensen Index",
        "symbol": "JENSEN",
        "deployer": "0x4337002c5702ce424cb62a56ca038e31e1d4a93d",
        "block": 111377367,
        "ts": "2026-11-11T02:48:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x68c50c10256f89ae9441e1ee8d84e0613c2222eb",
        "name": "HORN DOG WANG",
        "symbol": "HDW",
        "deployer": "0xfb37aba74bfdf9a9f5be186fac3b0f9ed909c36c",
        "block": 111377326,
        "ts": "2026-11-11T02:48:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb4882fce3c2c34d7dafd98e9c5ab47a5f7a0be1e",
        "name": "WOAINI",
        "symbol": "WOAINI",
        "deployer": "0x20fd9b0291934e271ce931599b5f8b07137954ac",
        "block": 111377319,
        "ts": "2026-11-11T02:48:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb6a7f6211e97f341bb270479ce0348dc1cf156ea",
        "name": "Wojak",
        "symbol": "WOJAK",
        "deployer": "0x4e2bd87ec828601cedaee948d61f64c0a2673b84",
        "block": 111377306,
        "ts": "2026-11-11T02:48:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xabb2f6983ec863bcd9e8ea592e3a8a95e324d834",
        "name": "greg",
        "symbol": "greg",
        "deployer": "0x8ba343f8fc40e64f502b0a2e4f5aeb5f453ab389",
        "block": 111377212,
        "ts": "2026-11-11T02:47:49.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x61bd43c1bda81573e3bcbada96aaa81690000a50",
        "name": "Edge Fund",
        "symbol": "EDGE",
        "deployer": "0x6866a6a28129839f67da069ceb68ad258830363e",
        "block": 111377092,
        "ts": "2026-11-11T02:47:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe8b652cb676b7dd85e59b0b5a85d407e321e1852",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x772b96cc4ef8815ffae0e9ec5752a8961adf951f",
        "block": 111376886,
        "ts": "2026-11-11T02:47:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x639a3bf583e19d646fa3ead3b99d650d4b049c97",
        "name": "boxing cat",
        "symbol": "BOXCAT",
        "deployer": "0x4337002c5702ce424cb62a56ca038e31e1d4a93d",
        "block": 111376598,
        "ts": "2026-11-11T02:46:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x94f6135aa08772c63822e638dfec4b7c13f9443e",
        "name": "Aetheryn Egg V3",
        "symbol": "AEGG3",
        "deployer": "0x37759509e1dab93141586aed88eb5c0b7378a347",
        "block": 111376528,
        "ts": "2026-11-11T02:46:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x45f5dad3522e456d5d8f573932f1e7cb4592975a",
        "name": "TURBO JAGUAR",
        "symbol": "TURBOJAGUA",
        "deployer": "0xe97646fdced1facd21bc049002de19a2a63d1637",
        "block": 111376308,
        "ts": "2026-11-11T02:46:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf58c45bbed45c2003d010bc192546b2f92f570b0",
        "name": "ni hao cat",
        "symbol": "mihao",
        "deployer": "0xe8f3338060c1abed647b5a12ffdb9c96325583e0",
        "block": 111376197,
        "ts": "2026-11-11T02:45:59.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xfd7cc7e3b75fdc21140830fb000c59cd2e66d6ea",
        "name": "Pangea Cat",
        "symbol": "PCAT",
        "deployer": "0x82ba3fcb49029e1e85cd1e2bb93882d5771d7798",
        "block": 111376151,
        "ts": "2026-11-11T02:45:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0c251f31d8629aef248e2591b50b812bbe58c16a",
        "name": "Smol Dog",
        "symbol": "SMOD",
        "deployer": "0x772b96cc4ef8815ffae0e9ec5752a8961adf951f",
        "block": 111376061,
        "ts": "2026-11-11T02:45:45.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x0116492e71ea180dd173143315f0c13948fa39a3",
        "name": "Shiba Nobunaga",
        "symbol": "NOBUSHIBA",
        "deployer": "0x540df6a7030461c92471a06cc9726c62a74769de",
        "block": 111375948,
        "ts": "2026-11-11T02:45:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf8ddf59090cd2780ed70ff97fe911c70276d4a44",
        "name": "Frontier Outlaws",
        "symbol": "OUTLAW",
        "deployer": "0xda4f44f69a42eca5839903bd3fa6faa15ff1e026",
        "block": 111375876,
        "ts": "2026-11-11T02:45:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfa7a6cdbe71e9a638abb1ceb934924c57464104b",
        "name": "PREGABALINU",
        "symbol": "PI",
        "deployer": "0x3fef664714a94c2e6a0b6b84c30ef390afa1eca7",
        "block": 111375670,
        "ts": "2026-11-11T02:45:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3d00c9c404d0b6255b6f858f576d59216e881a41",
        "name": "Predictor-cc7836a0",
        "symbol": "PRD-cc7836a0",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 111375548,
        "ts": "2026-11-11T02:44:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6285724872ad28679141e32d700e569c4ac8a6e4",
        "name": "Counterparty-cc7836a0",
        "symbol": "CTR-cc7836a0",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 111375548,
        "ts": "2026-11-11T02:44:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x967953661d773e1291746905f72a9492bef82907",
        "name": "Laptop Inu",
        "symbol": "LINU",
        "deployer": "0x4337005db25dbad41da5692ba1188751ee5d98b6",
        "block": 111375383,
        "ts": "2026-11-11T02:44:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4fc941ee27618ca4da486d04764dad460bb9eca8",
        "name": "Predictor-7c2debc0",
        "symbol": "PRD-7c2debc0",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 111375281,
        "ts": "2026-11-11T02:44:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf63d89144219ee883071eee5d6edbb9477b3a432",
        "name": "Counterparty-7c2debc0",
        "symbol": "CTR-7c2debc0",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 111375281,
        "ts": "2026-11-11T02:44:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0309c3748b59aae30d3f4f225c7d9f36a713aa08",
        "name": "Predictor-d9ed57cd",
        "symbol": "PRD-d9ed57cd",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 111375048,
        "ts": "2026-11-11T02:43:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcf1ff054aed201990027349529e7821eaf1ac579",
        "name": "Counterparty-d9ed57cd",
        "symbol": "CTR-d9ed57cd",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 111375048,
        "ts": "2026-11-11T02:43:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x80988fefc21b5d8f757597791c9a0a2ccb65b2ae",
        "name": "Predictor-267bf7d2",
        "symbol": "PRD-267bf7d2",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 111375015,
        "ts": "2026-11-11T02:43:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x550a928db5818d49f5e52e9dcab1c1ee4636a2d3",
        "name": "Counterparty-267bf7d2",
        "symbol": "CTR-267bf7d2",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 111375015,
        "ts": "2026-11-11T02:43:54.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
