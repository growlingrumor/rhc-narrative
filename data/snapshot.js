/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-06T22:24:42.000Z",
    "opened_at": "2026-11-06T21:24:42.000Z",
    "window_hours": 1,
    "head_block": 107929265,
    "start_block": 107894275,
    "blocks_scanned": 34990,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 486,
    "unnamed_contracts": 7,
    "via_factory": 437,
    "no_receipt": 0,
    "candidates": 493,
    "mint_events": 17921,
    "deployers": 293,
    "roots": 585,
    "cleared_multiple": 104,
    "failed_gates": 94,
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
      "finished-im-wallahi",
      "gamestop-packs",
      "gator-macca",
      "nate",
      "privacy",
      "seashell"
    ],
    "top": {
      "root": "nate",
      "launches": 7,
      "deployers": 7,
      "baseline_share": 0.0004,
      "multiple": 36,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "nate",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 36,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "privacy",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 36,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "seashell",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 36,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "gamestop",
        "launches": 11,
        "deployers": 8,
        "baseline_share": 0.0005,
        "multiple": 45.3,
        "state": "MERGED",
        "reason": "gamestop + packs co-occur 100%, merged to gamestop-packs"
      },
      {
        "root": "packs",
        "launches": 11,
        "deployers": 8,
        "baseline_share": 0.0006,
        "multiple": 37.7,
        "state": "MERGED",
        "reason": "gamestop + packs co-occur 100%, merged to gamestop-packs"
      },
      {
        "root": "finished",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 41.2,
        "state": "MERGED",
        "reason": "finished + im co-occur 100%, merged to finished-im-wallahi"
      },
      {
        "root": "im",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 41.2,
        "state": "MERGED",
        "reason": "finished + im co-occur 100%, merged to finished-im-wallahi"
      },
      {
        "root": "wallahi",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 41.2,
        "state": "MERGED",
        "reason": "finished + im co-occur 100%, merged to finished-im-wallahi"
      },
      {
        "root": "gator",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 30.9,
        "state": "MERGED",
        "reason": "gator + macca co-occur 100%, merged to gator-macca"
      },
      {
        "root": "macca",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 30.9,
        "state": "MERGED",
        "reason": "gator + macca co-occur 100%, merged to gator-macca"
      },
      {
        "root": "robinhood",
        "launches": 29,
        "deployers": 8,
        "baseline_share": 0.0513,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "robinhood: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "uniswap",
        "launches": 18,
        "deployers": 18,
        "baseline_share": 0.0509,
        "multiple": 0.7,
        "state": "BELOW",
        "reason": "uniswap: 0.7x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 16,
        "deployers": 16,
        "baseline_share": 0.0424,
        "multiple": 0.8,
        "state": "BELOW",
        "reason": "uni: 0.8x over baseline < 6.0x required"
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
        "root": "terrorfab",
        "launches": 9,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 46.3,
        "state": "THIN",
        "reason": "terrorfab: 5 deployers < 6 required"
      },
      {
        "root": "positions",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0167,
        "multiple": 1,
        "state": "BELOW",
        "reason": "positions: 1.0x over baseline < 6.0x required"
      },
      {
        "root": "nft",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0201,
        "multiple": 0.8,
        "state": "BELOW",
        "reason": "nft: 0.8x over baseline < 6.0x required"
      },
      {
        "root": "volatile",
        "launches": 6,
        "deployers": 5,
        "baseline_share": 0.0083,
        "multiple": 1.5,
        "state": "BELOW",
        "reason": "volatile: 1.5x over baseline < 6.0x required"
      },
      {
        "root": "cat",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.013,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "cat: 0.9x over baseline < 6.0x required"
      },
      {
        "root": "acc",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 25.7,
        "state": "THIN",
        "reason": "acc: 5 deployers < 6 required"
      },
      {
        "root": "extremely",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 25.7,
        "state": "THIN",
        "reason": "extremely: 5 deployers < 6 required"
      },
      {
        "root": "gmep",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 25.7,
        "state": "THIN",
        "reason": "gmep: 5 deployers < 6 required"
      },
      {
        "root": "jose",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 25.7,
        "state": "THIN",
        "reason": "jose: 5 deployers < 6 required"
      },
      {
        "root": "monster",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0006,
        "multiple": 17.1,
        "state": "THIN",
        "reason": "monster: 5 deployers < 6 required"
      },
      {
        "root": "white",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0008,
        "multiple": 12.9,
        "state": "THIN",
        "reason": "white: 5 deployers < 6 required"
      },
      {
        "root": "high",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0009,
        "multiple": 11.4,
        "state": "THIN",
        "reason": "high: 5 deployers < 6 required"
      },
      {
        "root": "universal",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0011,
        "multiple": 9.4,
        "state": "THIN",
        "reason": "universal: 5 deployers < 6 required"
      },
      {
        "root": "chop",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0041,
        "multiple": 2.5,
        "state": "BELOW",
        "reason": "chop: 2.5x over baseline < 6.0x required"
      },
      {
        "root": "dog",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0058,
        "multiple": 1.8,
        "state": "BELOW",
        "reason": "dog: 1.8x over baseline < 6.0x required"
      },
      {
        "root": "long",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0059,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "long: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "staked",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0069,
        "multiple": 1.5,
        "state": "BELOW",
        "reason": "staked: 1.5x over baseline < 6.0x required"
      },
      {
        "root": "floatfuse",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 20.6,
        "state": "THIN",
        "reason": "floatfuse: 4 launches < 5 required"
      },
      {
        "root": "fuse",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 20.6,
        "state": "THIN",
        "reason": "fuse: 4 launches < 5 required"
      },
      {
        "root": "gtavi",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 20.6,
        "state": "THIN",
        "reason": "gtavi: 4 launches < 5 required"
      },
      {
        "root": "kyte",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 20.6,
        "state": "THIN",
        "reason": "kyte: 4 launches < 5 required"
      },
      {
        "root": "pi",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0008,
        "multiple": 10.3,
        "state": "THIN",
        "reason": "pi: 4 launches < 5 required"
      },
      {
        "root": "wojak",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0021,
        "multiple": 3.9,
        "state": "BELOW",
        "reason": "wojak: 3.9x over baseline < 6.0x required"
      },
      {
        "root": "fund",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0029,
        "multiple": 2.8,
        "state": "BELOW",
        "reason": "fund: 2.8x over baseline < 6.0x required"
      },
      {
        "root": "flock",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0032,
        "multiple": 2.6,
        "state": "BELOW",
        "reason": "flock: 2.6x over baseline < 6.0x required"
      },
      {
        "root": "counterparty",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0055,
        "multiple": 1.5,
        "state": "BELOW",
        "reason": "counterparty: 1.5x over baseline < 6.0x required"
      }
    ],
    "recent": [
      {
        "address": "0xce95e835b149024530f0667e9f2cf34dc5e31c11",
        "name": "BLESSED",
        "symbol": "BLESSED",
        "deployer": "0x59a80a56989d3b975665e05a09047aa2a6fca047",
        "block": 107928896,
        "ts": "2026-11-06T22:24:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x212fda49ab2ea1ccb66c4517d2a557a4b633ce59",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x8c4a127d0dbb17f9b77c5ed748e27b3702798806",
        "block": 107928805,
        "ts": "2026-11-06T22:23:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x577d6ab75cbeaedece408f93ccb5088234983a4c",
        "name": "Seashell Coin",
        "symbol": "SEASHELL",
        "deployer": "0x66dce10d48b20e1b49ffce20f03ae178d724919a",
        "block": 107928803,
        "ts": "2026-11-06T22:23:53.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x646384f02df4d4f830083a23f82cf8bdbefbd4cc",
        "name": "Kyte",
        "symbol": "KYTE",
        "deployer": "0x56ee426b669998497b1ed662d9bd7546d95bffa5",
        "block": 107928789,
        "ts": "2026-11-06T22:23:52.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x90458eabd78116d08602e877d97fb0daccdd1e18",
        "name": "Elón",
        "symbol": "ELN",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 107928704,
        "ts": "2026-11-06T22:23:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbe9fd1516d730ee8a87483982fb52d95704b0c9c",
        "name": "TEST",
        "symbol": "TEST",
        "deployer": "0xca1bbb9c8115bebb10372a2db1c1afa76314b8e5",
        "block": 107928701,
        "ts": "2026-11-06T22:23:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc0d6457c16cc70d6790dd43521c899c87ce02f35",
        "name": "Meta Platforms • Robinhood Token",
        "symbol": "META",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 107928405,
        "ts": "2026-11-06T22:23:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdcf694ba6f1c822797fdbc76e7a576ba0bddff57",
        "name": "Migo Boss NFT",
        "symbol": "MBOSSNFT",
        "deployer": "0xdb790ca6cced38418c4a5ec0d3ef2e4858a742d9",
        "block": 107928337,
        "ts": "2026-11-06T22:23:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf3220fec4214c64753641e2f7ee70488bd0e7777",
        "name": "Highcap",
        "symbol": "HIGHCAP",
        "deployer": "0x498b1bee7a146a4d10514f2d8eb1201b447ad384",
        "block": 107928202,
        "ts": "2026-11-06T22:22:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7f6a1d3085404947dc7e43c55200b6db39181628",
        "name": "Wow Gold",
        "symbol": "WOW",
        "deployer": "0xdae9efb511d9f034ffb9f417cdc8fb4bfb49ed46",
        "block": 107928038,
        "ts": "2026-11-06T22:22:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x05d04461c2ffd938e2858253c4282522192db64a",
        "name": "Automated Milkers Machine",
        "symbol": "AMM",
        "deployer": "0x54682d2ffe4061f0b74bc453411d704932afb570",
        "block": 107928008,
        "ts": "2026-11-06T22:22:31.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x0b9f415854be6b34c1a9a128d5bfab90d24bc873",
        "name": "Diamond Ape",
        "symbol": "DAPE",
        "deployer": "0x8c4a127d0dbb17f9b77c5ed748e27b3702798806",
        "block": 107927946,
        "ts": "2026-11-06T22:22:24.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x2f3d09cdee69c53c631d4b71fd93a205364ca2f4",
        "name": "RETAIL THERAPY",
        "symbol": "THERAPY",
        "deployer": "0xcf35820e63710a187c37a8fbcb70df958bc82a9b",
        "block": 107927864,
        "ts": "2026-11-06T22:22:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9cf5e31e75dbeb8bc437a054b62e49d39e6fe171",
        "name": "Mars Fund",
        "symbol": "MARS",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 107927814,
        "ts": "2026-11-06T22:22:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x208e5812196ac2ba5e2cb9b7ea729f5341dcd8ae",
        "name": "XTO",
        "symbol": "XTO",
        "deployer": "0x450a91cd2b52b673979745915d708597c060cfee",
        "block": 107927802,
        "ts": "2026-11-06T22:22:09.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x546185c8a275d9f6ca81cd4ec52b247e87137777",
        "name": "Highcap",
        "symbol": "Highcap",
        "deployer": "0x4412cfb4de7c089086fc43306218f8f2f1811a22",
        "block": 107927796,
        "ts": "2026-11-06T22:22:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x866409f3bd47bbd710bccec625bd4f1a3398830c",
        "name": "XOXO",
        "symbol": "XOXO",
        "deployer": "0x4b7337bed5c0bbd61693633a9678f3b68aa5e489",
        "block": 107927722,
        "ts": "2026-11-06T22:22:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8bf5fa59a05a4e313350463fec76a1f74fe063fd",
        "name": "HashBlokz",
        "symbol": "HASH",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 107927716,
        "ts": "2026-11-06T22:22:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xccd425ee5822dfa674b493b4609ca6112e86a138",
        "name": "Test1",
        "symbol": "VVVVVV",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 107927715,
        "ts": "2026-11-06T22:22:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9a84daf6dfb82f9222466a039c91216412af7777",
        "name": "Splity Pad",
        "symbol": "SPLITY",
        "deployer": "0x7485fbfd99993dab4c9964f53791e40d14253c97",
        "block": 107927655,
        "ts": "2026-11-06T22:21:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x068070d87425d0de94a60643dcfaf82d897d3aae",
        "name": "Splity pad",
        "symbol": "SPLITY",
        "deployer": "0xdc4ea8a6acb25c962d201e6b866c9f230d009772",
        "block": 107927578,
        "ts": "2026-11-06T22:21:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8b12b8af8fc09797983f2389f8f61f5dbc2c10fa",
        "name": "DOGE",
        "symbol": "DOGE",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 107927567,
        "ts": "2026-11-06T22:21:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8d5028dc6e28989957c5213928d86f068d1dd249",
        "name": "HANDS",
        "symbol": "HANDS",
        "deployer": "0x2bcb6d7b5b12f94b91441aa2cdce68e3d96877af",
        "block": 107927561,
        "ts": "2026-11-06T22:21:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5bb4128aa616e5d1f19140cb9f0acc1ad5d8f145",
        "name": "Glazzy Dog",
        "symbol": "GDOG",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 107927516,
        "ts": "2026-11-06T22:21:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0a0d53b6684c7b32b4cbef5fe8483bfcc8406742",
        "name": "Delta Wrapped Ether",
        "symbol": "dETH",
        "deployer": "0x5a5401df4226e8bce4d1ee6a367f952be5d71dc5",
        "block": 107927503,
        "ts": "2026-11-06T22:21:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe0ad9abea2473e0b766d316d332772ebd70fffa7",
        "name": "AI-Mafia-FUND",
        "symbol": "AIFUND",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 107927306,
        "ts": "2026-11-06T22:21:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf5fa3597a782e50e7dda821e8b3759188b8830cd",
        "name": "GLAZMEDADDY",
        "symbol": "GLAZDY",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 107927255,
        "ts": "2026-11-06T22:21:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x503e881c66eed4c7c806dbbb15b22ec4c968cccc",
        "name": "TEST",
        "symbol": "TEST",
        "deployer": "0x2497aaaa2832b6e0ade9e09ec51911a4d955b33f",
        "block": 107927053,
        "ts": "2026-11-06T22:20:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9c71cf5b8d39cce128e5bb0d84fe64d992038747",
        "name": "BurstingBagel",
        "symbol": "BAGEL",
        "deployer": "0xfa322cfea4ede2a06e527f54f8273d36831a40de",
        "block": 107927022,
        "ts": "2026-11-06T22:20:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x535450d707ec2482d2633e943d696005b0815664",
        "name": "Kartein Eleceed",
        "symbol": "KE",
        "deployer": "0x31f34cbe2927045b8ff09b61c2ed4d976642892d",
        "block": 107926973,
        "ts": "2026-11-06T22:20:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xebaece6bb63184a1ffeaec4e8af7aad84c57150d",
        "name": "Seashell Coin",
        "symbol": "SEASHELL",
        "deployer": "0xcb4f2f9a667d732e0672546455329dc20604a701",
        "block": 107926806,
        "ts": "2026-11-06T22:20:27.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xf8e0ab443098c0738489b5baffbd32a1341f2289",
        "name": "Borro USDG",
        "symbol": "bUSDG",
        "deployer": "0x3a17bfff7c6fb05f8c49d3d7181849e531026896",
        "block": 107926580,
        "ts": "2026-11-06T22:20:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa359a73849e8386f230b900ebc5954b35fc1e989",
        "name": "Privacy Inu",
        "symbol": "PI",
        "deployer": "0x9b42d7ef8bc6ec18ced42a1470307d7f059a3571",
        "block": 107926556,
        "ts": "2026-11-06T22:20:02.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xe200f8096e2a0427ceeb709dac34b039a1036c86",
        "name": "Nexaria",
        "symbol": "XARIA",
        "deployer": "0xea209a4a5de9a8449a666c5f9fa43be7181600a9",
        "block": 107926405,
        "ts": "2026-11-06T22:19:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6ac8ee8d66713cccd36a761f7be1f031fad77777",
        "name": "Avery The Poke Kid",
        "symbol": "AVERY",
        "deployer": "0xa7ba884561771e707f7f29bd5388b77f1e470daf",
        "block": 107926377,
        "ts": "2026-11-06T22:19:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa17383e0dad8c6ac68f0ed65891eeb27a182f2af",
        "name": "Pearl",
        "symbol": "PEARL",
        "deployer": "0x785626a5afce93da4f5a8b15bd37fd9460917672",
        "block": 107926332,
        "ts": "2026-11-06T22:19:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb95e8b0dd047aced6dca29aa077847e1b0fd39e4",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xbdfa3759a2e95ab9acb980917f7553bd13cf9e0c",
        "block": 107925964,
        "ts": "2026-11-06T22:19:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xccb7883f33ed8bd828a5439c2ae8b6ea0df807ea",
        "name": "Cyfrin Audit",
        "symbol": "CYFRIN",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 107925920,
        "ts": "2026-11-06T22:18:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x61bd43c1bda81573e3bcbada96aaa81690000a50",
        "name": "Edge Fund",
        "symbol": "EDGE",
        "deployer": "0xf0f1e1c2bf6070a1c978ec7935b78d6baec2dabb",
        "block": 107925870,
        "ts": "2026-11-06T22:18:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfd738d44b5c5a913395d8e06c3c94532b6d7e2be",
        "name": "Mert The Pooh",
        "symbol": "MOOH",
        "deployer": "0xdb11f68f7a9579208b4c1b8b8dca0060751a02a5",
        "block": 107925804,
        "ts": "2026-11-06T22:18:45.000Z",
        "ts_exact": true,
        "direct": true
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
