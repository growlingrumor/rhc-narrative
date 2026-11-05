/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-05T22:59:01.000Z",
    "opened_at": "2026-11-05T21:59:01.000Z",
    "window_hours": 1,
    "head_block": 107107336,
    "start_block": 107072654,
    "blocks_scanned": 34682,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 492,
    "unnamed_contracts": 11,
    "via_factory": 459,
    "no_receipt": 0,
    "candidates": 503,
    "mint_events": 17990,
    "deployers": 302,
    "roots": 605,
    "cleared_multiple": 77,
    "failed_gates": 73,
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
      "habibinald",
      "imeme-intelligent",
      "veto"
    ],
    "top": {
      "root": "habibinald",
      "launches": 8,
      "deployers": 8,
      "baseline_share": 0.0004,
      "multiple": 40.7,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "habibinald",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 40.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "veto",
        "launches": 7,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 35.6,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "imeme",
        "launches": 40,
        "deployers": 39,
        "baseline_share": 0.0004,
        "multiple": 203.3,
        "state": "MERGED",
        "reason": "imeme + intelligent co-occur 93%, merged to imeme-intelligent"
      },
      {
        "root": "intelligent",
        "launches": 37,
        "deployers": 37,
        "baseline_share": 0.0004,
        "multiple": 188,
        "state": "MERGED",
        "reason": "imeme + intelligent co-occur 93%, merged to imeme-intelligent"
      },
      {
        "root": "robinhood",
        "launches": 44,
        "deployers": 10,
        "baseline_share": 0.0513,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "robinhood: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "uniswap",
        "launches": 27,
        "deployers": 25,
        "baseline_share": 0.0509,
        "multiple": 1.1,
        "state": "BELOW",
        "reason": "uniswap: 1.1x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 21,
        "deployers": 21,
        "baseline_share": 0.0424,
        "multiple": 1,
        "state": "BELOW",
        "reason": "uni: 1.0x over baseline < 6.0x required"
      },
      {
        "root": "usdg",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0203,
        "multiple": 1,
        "state": "BELOW",
        "reason": "usdg: 1.0x over baseline < 6.0x required"
      },
      {
        "root": "kaskad",
        "launches": 8,
        "deployers": 2,
        "baseline_share": 0.001,
        "multiple": 16.3,
        "state": "THIN",
        "reason": "kaskad: 2 deployers < 6 required"
      },
      {
        "root": "positions",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0167,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "positions: 0.9x over baseline < 6.0x required"
      },
      {
        "root": "inc",
        "launches": 6,
        "deployers": 4,
        "baseline_share": 0.0057,
        "multiple": 2.1,
        "state": "BELOW",
        "reason": "inc: 2.1x over baseline < 6.0x required"
      },
      {
        "root": "staked",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0069,
        "multiple": 1.8,
        "state": "BELOW",
        "reason": "staked: 1.8x over baseline < 6.0x required"
      },
      {
        "root": "nft",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0201,
        "multiple": 0.6,
        "state": "BELOW",
        "reason": "nft: 0.6x over baseline < 6.0x required"
      },
      {
        "root": "float",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0008,
        "multiple": 12.7,
        "state": "THIN",
        "reason": "float: 5 deployers < 6 required"
      },
      {
        "root": "ghost",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0016,
        "multiple": 6.4,
        "state": "THIN",
        "reason": "ghost: 4 deployers < 6 required"
      },
      {
        "root": "global",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0033,
        "multiple": 3.1,
        "state": "BELOW",
        "reason": "global: 3.1x over baseline < 6.0x required"
      },
      {
        "root": "auramaxxing",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 20.3,
        "state": "THIN",
        "reason": "auramaxxing: 4 launches < 5 required"
      },
      {
        "root": "mr",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 20.3,
        "state": "THIN",
        "reason": "mr: 4 launches < 5 required"
      },
      {
        "root": "nutflix",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 20.3,
        "state": "THIN",
        "reason": "nutflix: 4 launches < 5 required"
      },
      {
        "root": "ape",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0022,
        "multiple": 3.7,
        "state": "BELOW",
        "reason": "ape: 3.7x over baseline < 6.0x required"
      },
      {
        "root": "brownfi",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0025,
        "multiple": 3.3,
        "state": "BELOW",
        "reason": "brownfi: 3.3x over baseline < 6.0x required"
      },
      {
        "root": "bf",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0027,
        "multiple": 3,
        "state": "BELOW",
        "reason": "bf: 3.0x over baseline < 6.0x required"
      },
      {
        "root": "borrowable",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0027,
        "multiple": 3,
        "state": "BELOW",
        "reason": "borrowable: 3.0x over baseline < 6.0x required"
      },
      {
        "root": "lend",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0027,
        "multiple": 3,
        "state": "BELOW",
        "reason": "lend: 3.0x over baseline < 6.0x required"
      },
      {
        "root": "flock",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0032,
        "multiple": 2.5,
        "state": "BELOW",
        "reason": "flock: 2.5x over baseline < 6.0x required"
      },
      {
        "root": "arcus",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0073,
        "multiple": 1.1,
        "state": "BELOW",
        "reason": "arcus: 1.1x over baseline < 6.0x required"
      },
      {
        "root": "cow",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0072,
        "multiple": 1.1,
        "state": "BELOW",
        "reason": "cow: 1.1x over baseline < 6.0x required"
      },
      {
        "root": "volatile",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0083,
        "multiple": 1,
        "state": "BELOW",
        "reason": "volatile: 1.0x over baseline < 6.0x required"
      },
      {
        "root": "hood",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0108,
        "multiple": 0.8,
        "state": "BELOW",
        "reason": "hood: 0.8x over baseline < 6.0x required"
      },
      {
        "root": "auramaxxin",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 15.2,
        "state": "THIN",
        "reason": "auramaxxin: 3 launches < 5 required"
      },
      {
        "root": "bad",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 15.2,
        "state": "THIN",
        "reason": "bad: 3 launches < 5 required"
      },
      {
        "root": "kids",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 15.2,
        "state": "THIN",
        "reason": "kids: 3 launches < 5 required"
      },
      {
        "root": "month",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 15.2,
        "state": "THIN",
        "reason": "month: 3 launches < 5 required"
      },
      {
        "root": "nakamoto",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 15.2,
        "state": "THIN",
        "reason": "nakamoto: 3 launches < 5 required"
      },
      {
        "root": "phantom",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 15.2,
        "state": "THIN",
        "reason": "phantom: 3 launches < 5 required"
      },
      {
        "root": "picasso",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 15.2,
        "state": "THIN",
        "reason": "picasso: 3 launches < 5 required"
      },
      {
        "root": "pilot",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 15.2,
        "state": "THIN",
        "reason": "pilot: 3 launches < 5 required"
      },
      {
        "root": "receipts",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 15.2,
        "state": "THIN",
        "reason": "receipts: 3 launches < 5 required"
      },
      {
        "root": "slingtoshi",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 15.2,
        "state": "THIN",
        "reason": "slingtoshi: 3 launches < 5 required"
      },
      {
        "root": "sssdfg",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 15.2,
        "state": "THIN",
        "reason": "sssdfg: 3 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0xb236e833c5b7a5b99d8099699d7e2baf36c2dd86",
        "name": "BrownFi V3",
        "symbol": "BF-V3",
        "deployer": "0xfddd8e89dfb65fe2da8e907939a281135ef3802d",
        "block": 107107292,
        "ts": "2026-11-05T22:58:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7daa71befb37346f049691a3422ab6a08cf1766f",
        "name": "District Ape",
        "symbol": "Districtape",
        "deployer": "0x49b112d5a9aa18d43d2b9e8181f6e7eda78a0a79",
        "block": 107107275,
        "ts": "2026-11-05T22:58:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x449d04b13b5c545e9662c76aebde3f4c3267de4e",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x4912212e10592c783f0a9be24b7cdbb85c256d7a",
        "block": 107107262,
        "ts": "2026-11-05T22:58:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf103e64e24cf37bc1b1935514dbb10d667f946c7",
        "name": "Habibinald",
        "symbol": "HABIBINALD",
        "deployer": "0xaa3e388f40fd32aee9b716776dcfa07299e98775",
        "block": 107107226,
        "ts": "2026-11-05T22:58:49.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x837cff2fc7bcbe0f5bb69018f56d37a2b8c6d09e",
        "name": "VETO",
        "symbol": "VETO",
        "deployer": "0xfb32a11ae512ed3ca15282a8e408f5c804bb8847",
        "block": 107107195,
        "ts": "2026-11-05T22:58:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9c0a95866c2047d1d40c1d98abd4a8d1da8d06ea",
        "name": "PangeaGift",
        "symbol": "GIFT",
        "deployer": "0xc5d22a7d5b203164bfa6479d72de9297cff19bf5",
        "block": 107107105,
        "ts": "2026-11-05T22:58:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x76cf788606f3d968b93b8a243d0e185c974ee407",
        "name": "Origami hOHM",
        "symbol": "hOHM",
        "deployer": "0xe93685f3bba03016f02bd1828badd6195988d950",
        "block": 107107008,
        "ts": "2026-11-05T22:58:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x93270e4face366dca282bcaa33ba094557fa1e18",
        "name": "walrus",
        "symbol": "WALRUS",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 107106996,
        "ts": "2026-11-05T22:58:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf5b9a00987e0f61e7ade7c4def0a6213ff89a7c9",
        "name": "ELON ZEBRA",
        "symbol": "ELONZEBRA",
        "deployer": "0xc1595e25fffdfb987cf45c8ce37ec3913cc1d7bf",
        "block": 107106960,
        "ts": "2026-11-05T22:58:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xde960b5f0c2bf11358451a3805a10f5f17167777",
        "name": "Receipts",
        "symbol": "RECEIPTS",
        "deployer": "0x38a60de2dd8937c3a016878e56ba3a74a885f99f",
        "block": 107106939,
        "ts": "2026-11-05T22:58:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb9033bf97ce0ae21b083338f59709fb69231acfe",
        "name": "Intelligent Meme",
        "symbol": "iMeme",
        "deployer": "0x19a10c65f426e25ab85056f834ae6b8b9df4ecd4",
        "block": 107106852,
        "ts": "2026-11-05T22:58:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb28613c924ebf0bd812fbc7d8818e755a409b385",
        "name": "Receipts",
        "symbol": "RECEIPTS",
        "deployer": "0xa99cdfb1545cfd8778cbe785a259046b8c6e9ed3",
        "block": 107106837,
        "ts": "2026-11-05T22:58:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x78c827dd2f8f3d02f4fdbeedf170c2b910b90087",
        "name": "The Cage",
        "symbol": "CAGE",
        "deployer": "0xd9b27095395ab95509657887eaaf1131f0ba6355",
        "block": 107106571,
        "ts": "2026-11-05T22:57:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2a9888c9908ac440735b029afdd3b532897164e9",
        "name": "Mr. VETO",
        "symbol": "VETO",
        "deployer": "0x8d11bec166f5ef675bb02a3619df46cc2f91b4e1",
        "block": 107106568,
        "ts": "2026-11-05T22:57:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xaa5ed38c90da85f4ed437fdb6790d4ea72d7a016",
        "name": "Chop HEY",
        "symbol": "chHEY",
        "deployer": "0x00000000b114be5d75c53d85302ad08318abefaf",
        "block": 107106554,
        "ts": "2026-11-05T22:57:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x837f5138e770be6492d5aa0c9ec72fc91c6a7a41",
        "name": "Predictor-c9f83eee",
        "symbol": "PRD-c9f83eee",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 107106532,
        "ts": "2026-11-05T22:57:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd13d785914711e343b3631d5722f77200f69fb15",
        "name": "Counterparty-c9f83eee",
        "symbol": "CTR-c9f83eee",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 107106532,
        "ts": "2026-11-05T22:57:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa88c0870597a3058e741b6977f4e1fde9f227777",
        "name": "Koldex",
        "symbol": "KOLDEX",
        "deployer": "0xb66a0d760090a9389b77a9b2726f797ab718e21b",
        "block": 107106521,
        "ts": "2026-11-05T22:57:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x827af82d31f61557e76939715517d7d254f07777",
        "name": "Ghost Chat",
        "symbol": "GHOSTCHAT",
        "deployer": "0xa72d384419e08b0eeb43d96c73ba62b627de39a7",
        "block": 107106469,
        "ts": "2026-11-05T22:57:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x070e609830c485060f46d07d958e9e4a637138e3",
        "name": "Diamond Hands",
        "symbol": "DIAM",
        "deployer": "0x4912212e10592c783f0a9be24b7cdbb85c256d7a",
        "block": 107106404,
        "ts": "2026-11-05T22:57:23.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x2c778558c2be7ec6fb8740b9329c2b28db6ce0aa",
        "name": "Ghost Chat",
        "symbol": "GHOSTCHAT",
        "deployer": "0xe97bc54afb02b22247bd5b9cd66662a39018730c",
        "block": 107106380,
        "ts": "2026-11-05T22:57:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0242a3721ed764ad2cca02b8a08a0283de791fda",
        "name": "Mr. VETO",
        "symbol": "VETO",
        "deployer": "0x827985ed71d570175efda45292b78cd7b4eaa63b",
        "block": 107106362,
        "ts": "2026-11-05T22:57:19.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x45b95815d6ac704f8e2fd72c42d87a443efcc6ea",
        "name": "XAP Coin",
        "symbol": "XAP",
        "deployer": "0xc9c07482b2e683bfd4f7c30ef95647b698b4ef68",
        "block": 107106312,
        "ts": "2026-11-05T22:57:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5599df0657c19264def3fce8d08657d37d287777",
        "name": "Receipts",
        "symbol": "RECEIPTS",
        "deployer": "0xbe969c5bc42f1e30814fbde46538451791e40187",
        "block": 107106299,
        "ts": "2026-11-05T22:57:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfc955d954dad41d32655cd00d27883f94f014a75",
        "name": "420coin",
        "symbol": "420",
        "deployer": "0xcc9cf3d74498af7002c6590ea1fa901bac88b2ad",
        "block": 107105740,
        "ts": "2026-11-05T22:56:14.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x8784a35a37caa760b4081a660f7178f598505922",
        "name": "Sinjoh WETH",
        "symbol": "sjWETH",
        "deployer": "0xdfaca6808b8db32b44cd8a4e9256c94ba179b242",
        "block": 107105662,
        "ts": "2026-11-05T22:56:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfb6d45b56132b56bfe49f0b1115a8e9e5c9dc034",
        "name": "Phantom Ghost",
        "symbol": "GHOST",
        "deployer": "0xacbee0db5f1d23ba158a332bd2e2f8e01e0a8513",
        "block": 107105391,
        "ts": "2026-11-05T22:55:37.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x0bbbf9ed48b01179a19e94e23bad72cffeaee810",
        "name": "Normal Person Coin",
        "symbol": "NPC",
        "deployer": "0xea209a4a5de9a8449a666c5f9fa43be7181600a9",
        "block": 107105288,
        "ts": "2026-11-05T22:55:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x61bd43c1bda81573e3bcbada96aaa81690000a50",
        "name": "Edge Fund",
        "symbol": "EDGE",
        "deployer": "0x93b3e950ed44647599f9ad83540a08d76e1568fb",
        "block": 107105242,
        "ts": "2026-11-05T22:55:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x97a4013782f8fd2d737d5cbdcfce05ee337e3970",
        "name": "Giga Volatile AMM - WSM/USDG",
        "symbol": "GIGA-vAMM-WSM/USDG",
        "deployer": "0x6801f053617149f620bd54a0df39948878c374d7",
        "block": 107105206,
        "ts": "2026-11-05T22:55:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2cfd3986dc062c25288aed308b841437666676a6",
        "name": "Payphone NFT",
        "symbol": "pay",
        "deployer": "0xe775daf4f16a4cd3e62aa7866ed867d829987080",
        "block": 107105046,
        "ts": "2026-11-05T22:55:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x794109f1a1c51da55b5c9aaef51186addf100aad",
        "name": "RubinHuud",
        "symbol": "RUBINHUUD",
        "deployer": "0x533588dd0d6ef16cb8ead4483951d07456a77000",
        "block": 107104774,
        "ts": "2026-11-05T22:54:33.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xef839ad8f1d490d25dcea06bc2098d3ea39cb15d",
        "name": "Staked MNTD",
        "symbol": "sMNTD",
        "deployer": "0xfb32a11ae512ed3ca15282a8e408f5c804bb8847",
        "block": 107104583,
        "ts": "2026-11-05T22:54:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xda04b340dd4d751d6bd66e7d2edd20f566492e85",
        "name": "FullRange-BTC-USDG-10000-0",
        "symbol": "FullRange-BTC-USDG-10000-0",
        "deployer": "0x93b3e950ed44647599f9ad83540a08d76e1568fb",
        "block": 107104377,
        "ts": "2026-11-05T22:53:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc4d2b23de055269a7b5bc7d3f436092089ce116d",
        "name": "Toys4Kids",
        "symbol": "TOYS4KIDS",
        "deployer": "0x4892017b3930c5fd246fadc28d8ab3308d3002f0",
        "block": 107104339,
        "ts": "2026-11-05T22:53:49.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x1181f34c5d1ba6acf887f62991780bea307e64a5",
        "name": "RARA",
        "symbol": "RA",
        "deployer": "0xf7ebc0ff2ac81811c97483bebbeb6b8e7648746f",
        "block": 107104248,
        "ts": "2026-11-05T22:53:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x546f0500bd317db99bcba43398949e50d1b17c44",
        "name": "BTC",
        "symbol": "BTC",
        "deployer": "0xc50181eedbe3532dad3bf0699b92f2bf4ad4668d",
        "block": 107103657,
        "ts": "2026-11-05T22:52:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x286d0c4db055ca235e2b08088d223fe9fd127777",
        "name": "BuddyList",
        "symbol": "BDYLST",
        "deployer": "0x22be0787ea7621328214b466d07bf3d2f5cda2b2",
        "block": 107103632,
        "ts": "2026-11-05T22:52:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0fd891a294cdd697c2b58adb7729e4b976e9ebdd",
        "name": "BuddyList",
        "symbol": "BDYLST",
        "deployer": "0x09f151626cc9e8c745b8322d328e3d65c49fab4d",
        "block": 107103540,
        "ts": "2026-11-05T22:52:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6e445c1765272b9025a1832e1c5311ef5ad34542",
        "name": "420coin",
        "symbol": "420",
        "deployer": "0x87f15c16703aedbc13ac9182ef8f7811ac458415",
        "block": 107103368,
        "ts": "2026-11-05T22:52:08.000Z",
        "ts_exact": true,
        "direct": true
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
