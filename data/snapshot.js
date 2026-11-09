/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-09T02:40:05.000Z",
    "opened_at": "2026-11-09T01:40:05.000Z",
    "window_hours": 1,
    "head_block": 109717395,
    "start_block": 109682511,
    "blocks_scanned": 34884,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 347,
    "unnamed_contracts": 17,
    "via_factory": 306,
    "no_receipt": 0,
    "candidates": 364,
    "mint_events": 13994,
    "deployers": 253,
    "roots": 459,
    "cleared_multiple": 274,
    "failed_gates": 267,
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
      "clarus-dogcow",
      "mars",
      "moo",
      "signs-there-were"
    ],
    "top": {
      "root": "moo",
      "launches": 6,
      "deployers": 6,
      "baseline_share": 0.0005,
      "multiple": 34.6,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "mars",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0018,
        "multiple": 11.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "moo",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0005,
        "multiple": 34.6,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "signs",
        "launches": 16,
        "deployers": 16,
        "baseline_share": 0.0004,
        "multiple": 115.3,
        "state": "MERGED",
        "reason": "signs + there co-occur 100%, merged to signs-there-were"
      },
      {
        "root": "there",
        "launches": 16,
        "deployers": 16,
        "baseline_share": 0.0004,
        "multiple": 115.3,
        "state": "MERGED",
        "reason": "signs + there co-occur 100%, merged to signs-there-were"
      },
      {
        "root": "were",
        "launches": 16,
        "deployers": 16,
        "baseline_share": 0.0004,
        "multiple": 115.3,
        "state": "MERGED",
        "reason": "signs + there co-occur 100%, merged to signs-there-were"
      },
      {
        "root": "clarus",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 64.8,
        "state": "MERGED",
        "reason": "clarus + dogcow co-occur 100%, merged to clarus-dogcow"
      },
      {
        "root": "dogcow",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 64.8,
        "state": "MERGED",
        "reason": "clarus + dogcow co-occur 100%, merged to clarus-dogcow"
      },
      {
        "root": "uniswap",
        "launches": 26,
        "deployers": 23,
        "baseline_share": 0.0509,
        "multiple": 1.5,
        "state": "BELOW",
        "reason": "uniswap: 1.5x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 21,
        "deployers": 19,
        "baseline_share": 0.0424,
        "multiple": 1.4,
        "state": "BELOW",
        "reason": "uni: 1.4x over baseline < 6.0x required"
      },
      {
        "root": "robinhood",
        "launches": 12,
        "deployers": 7,
        "baseline_share": 0.0513,
        "multiple": 0.7,
        "state": "BELOW",
        "reason": "robinhood: 0.7x over baseline < 6.0x required"
      },
      {
        "root": "usdg",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0203,
        "multiple": 1.4,
        "state": "BELOW",
        "reason": "usdg: 1.4x over baseline < 6.0x required"
      },
      {
        "root": "dog",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0058,
        "multiple": 4.5,
        "state": "BELOW",
        "reason": "dog: 4.5x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0167,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "positions: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "ai",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0081,
        "multiple": 2.1,
        "state": "BELOW",
        "reason": "ai: 2.1x over baseline < 6.0x required"
      },
      {
        "root": "volatile",
        "launches": 6,
        "deployers": 3,
        "baseline_share": 0.0083,
        "multiple": 2.1,
        "state": "BELOW",
        "reason": "volatile: 2.1x over baseline < 6.0x required"
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
        "root": "mooland",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 36,
        "state": "THIN",
        "reason": "mooland: 5 deployers < 6 required"
      },
      {
        "root": "texel",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 36,
        "state": "THIN",
        "reason": "texel: 5 deployers < 6 required"
      },
      {
        "root": "layerbank",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0053,
        "multiple": 2.7,
        "state": "BELOW",
        "reason": "layerbank: 2.7x over baseline < 6.0x required"
      },
      {
        "root": "aero",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0056,
        "multiple": 2.6,
        "state": "BELOW",
        "reason": "aero: 2.6x over baseline < 6.0x required"
      },
      {
        "root": "ramses",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0068,
        "multiple": 2.1,
        "state": "BELOW",
        "reason": "ramses: 2.1x over baseline < 6.0x required"
      },
      {
        "root": "actuary",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 28.8,
        "state": "THIN",
        "reason": "actuary: 4 launches < 5 required"
      },
      {
        "root": "marscoin",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 28.8,
        "state": "THIN",
        "reason": "marscoin: 4 launches < 5 required"
      },
      {
        "root": "quero",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 28.8,
        "state": "THIN",
        "reason": "quero: 4 launches < 5 required"
      },
      {
        "root": "vibe",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 28.8,
        "state": "THIN",
        "reason": "vibe: 4 launches < 5 required"
      },
      {
        "root": "agents",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0025,
        "multiple": 4.6,
        "state": "BELOW",
        "reason": "agents: 4.6x over baseline < 6.0x required"
      },
      {
        "root": "orbio",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0029,
        "multiple": 4,
        "state": "BELOW",
        "reason": "orbio: 4.0x over baseline < 6.0x required"
      },
      {
        "root": "staked",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0069,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "staked: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "cow",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0072,
        "multiple": 1.6,
        "state": "BELOW",
        "reason": "cow: 1.6x over baseline < 6.0x required"
      },
      {
        "root": "cat",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.013,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "cat: 0.9x over baseline < 6.0x required"
      },
      {
        "root": "orgent",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "orgent: 3 launches < 5 required"
      },
      {
        "root": "pussy",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "pussy: 3 launches < 5 required"
      },
      {
        "root": "pussycoin",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "pussycoin: 3 launches < 5 required"
      },
      {
        "root": "awards",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0013,
        "multiple": 6.7,
        "state": "THIN",
        "reason": "awards: 3 launches < 5 required"
      },
      {
        "root": "no",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.002,
        "multiple": 4.3,
        "state": "BELOW",
        "reason": "no: 4.3x over baseline < 6.0x required"
      },
      {
        "root": "nvda",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0024,
        "multiple": 3.6,
        "state": "BELOW",
        "reason": "nvda: 3.6x over baseline < 6.0x required"
      },
      {
        "root": "vault",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0024,
        "multiple": 3.6,
        "state": "BELOW",
        "reason": "vault: 3.6x over baseline < 6.0x required"
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
        "root": "bf",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0027,
        "multiple": 3.2,
        "state": "BELOW",
        "reason": "bf: 3.2x over baseline < 6.0x required"
      },
      {
        "root": "fund",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0029,
        "multiple": 3,
        "state": "BELOW",
        "reason": "fund: 3.0x over baseline < 6.0x required"
      }
    ],
    "recent": [
      {
        "address": "0xc1a79e3a7b04c3f21c6409a78ab58a8c822be7dc",
        "name": "veLute",
        "symbol": "veLUTE",
        "deployer": "0xd35d0d733e67d9e0f32fc5046691bf53ce13d749",
        "block": 109717303,
        "ts": "2026-11-09T02:39:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x451a44f7b18ed7dad210c4f5caa65d7ed0aefcbc",
        "name": "signs were there",
        "symbol": "SIGNS",
        "deployer": "0x0381c5bfeb74d190da5b935e7bd2b730d673cebd",
        "block": 109717234,
        "ts": "2026-11-09T02:39:48.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x68cabffb5bc74b88075240836e848dec47701e3e",
        "name": "BITCOIN BEAR",
        "symbol": "BTCBEAR",
        "deployer": "0x4337003fcd2f56de3977ccb806383e9161628d0e",
        "block": 109717206,
        "ts": "2026-11-09T02:39:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc3318e412f1bbc62127177282a62ae8d244a2e13",
        "name": "Sixpence Vault Share",
        "symbol": "6P-SHARE",
        "deployer": "0xdaa8c26442aaa10c51bcc55d271a648bd2c72b43",
        "block": 109717041,
        "ts": "2026-11-09T02:39:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xca4e5c25b2d460b97d69a42e31851312c0240ead",
        "name": "Phosphor",
        "symbol": "Phospor",
        "deployer": "0xdce6fb43fd27d6ae88041477e0dd23d244adefac",
        "block": 109716810,
        "ts": "2026-11-09T02:39:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3907c5f432bce78066f7b822588d5c7b31c0e482",
        "name": "signs were there",
        "symbol": "SIGNS",
        "deployer": "0x2ab6b7c2705dfb3023142f86dc930b4d6d2df4a4",
        "block": 109716617,
        "ts": "2026-11-09T02:38:45.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xfda0f417aac3c56ef5a1696d0c1e67bc25e923a8",
        "name": "Launchova",
        "symbol": "LOVA",
        "deployer": "0xd54c7a0a1a84b8c7b2b3c8143378ea1d6920020e",
        "block": 109716343,
        "ts": "2026-11-09T02:38:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdfb83a1dbe8d2700e36bf959a5fc35173f53ca9c",
        "name": "Quero",
        "symbol": "QUERO",
        "deployer": "0xc31f3bcfe22f58f7798b56e8b7ebaf23c3541172",
        "block": 109716257,
        "ts": "2026-11-09T02:38:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7d22ee54572683a4b46f224778930f2550e83f47",
        "name": "Texel",
        "symbol": "TEXEL",
        "deployer": "0x95b60ce8776a9e6682fdbbfa3c97c98bc89500ef",
        "block": 109716255,
        "ts": "2026-11-09T02:38:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x745a5fea81b534f701eb913d6be6c43fb55c13e8",
        "name": "Texel",
        "symbol": "TEXEL",
        "deployer": "0x49e73fb39d82753c6384e2226e1ee239153a2d57",
        "block": 109716179,
        "ts": "2026-11-09T02:37:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2bd3f9908045751ddbeadc203dc1fa5c8ac8156c",
        "name": "Sports",
        "symbol": "SPORTS",
        "deployer": "0x29a413c9e5fa4ef3a28aa3f41ac3cdffd604ec1e",
        "block": 109716121,
        "ts": "2026-11-09T02:37:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6443baf3224bbd5204a375b62374090bd739c7ef",
        "name": "Mars Inu",
        "symbol": "MARSINU",
        "deployer": "0x4337003fcd2f56de3977ccb806383e9161628d0e",
        "block": 109716043,
        "ts": "2026-11-09T02:37:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbb423c5b27ca8cd8baf35aef0a540c40f5b0eeb7",
        "name": "signs were there",
        "symbol": "SIGNS",
        "deployer": "0xede71b69493f619ea05437d984a8137e01dd0d8a",
        "block": 109715860,
        "ts": "2026-11-09T02:37:27.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xbb3a3750b272799913dd07505864d14ea7b80581",
        "name": "CCFF00 Circle- StreetHood Official Membership",
        "symbol": "Circle",
        "deployer": "0x03071907327bbf04f6fec59f329bbeee34806718",
        "block": 109715685,
        "ts": "2026-11-09T02:37:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc5d2cdbed3788a34a716eb4aae2083daedbc1e18",
        "name": "Thug Life",
        "symbol": "THUG",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 109715560,
        "ts": "2026-11-09T02:36:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x362957d662d9406b5d8bc5581fa7cdfaaaadec7d",
        "name": "signs were there",
        "symbol": "SIGNS",
        "deployer": "0xd87667663c6a0bad44a5799bdbe0318813751cad",
        "block": 109715187,
        "ts": "2026-11-09T02:36:18.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x4fd5bf0adec032e0caa1597155723df3d27757cb",
        "name": "Pussycoin",
        "symbol": "PUSSY",
        "deployer": "0x4337003fcd2f56de3977ccb806383e9161628d0e",
        "block": 109715002,
        "ts": "2026-11-09T02:35:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9cc0027c4d11b79391f98574591aabf3906cb0b8",
        "name": "MINE•MINE•MINE",
        "symbol": "MINE",
        "deployer": "0x11118839b16dcd2322ca9eda991cda275b1587e4",
        "block": 109714914,
        "ts": "2026-11-09T02:35:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8b87add32ac6b5a4cd2a7bd1102d928ff1cb3021",
        "name": "Degen Cobwebs",
        "symbol": "DCB",
        "deployer": "0x211d98242e4c58e9eb17e3cc135a165bd59dd172",
        "block": 109714909,
        "ts": "2026-11-09T02:35:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x145145fe77ee9215c374c3fb6103d2f84f695beb",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xd4505ece29813161ff6ff00104a625174db568b2",
        "block": 109714850,
        "ts": "2026-11-09T02:35:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x325cc143877016304a78576166454449f0b966d1",
        "name": "VDNU",
        "symbol": "VDNU",
        "deployer": "0xd4505ece29813161ff6ff00104a625174db568b2",
        "block": 109714792,
        "ts": "2026-11-09T02:35:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x878dddfbd8851268e19cb39c6ef57e60447d2499",
        "name": "DIAMOND GECKO",
        "symbol": "DIAMONDGEC",
        "deployer": "0x9a47a0532c2208f95d2285e63f977dc0dbb1064e",
        "block": 109714423,
        "ts": "2026-11-09T02:34:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xaecac031cc7d4f6715f496bf64b987a8842ef051",
        "name": "signs were there",
        "symbol": "SIGNS",
        "deployer": "0x857c579fca737345ff0b5e5397efca6e0366a643",
        "block": 109714346,
        "ts": "2026-11-09T02:34:51.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x3d314f777b76991d0330f5619378795df2e10087",
        "name": "エロコイン",
        "symbol": "EroCoin",
        "deployer": "0x530fca4efaee3b738127400056793f050cc134dc",
        "block": 109714343,
        "ts": "2026-11-09T02:34:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x377573924c2f5c726509ac86ff792c3d42c9fa94",
        "name": "Lalokin",
        "symbol": "LALOKIN",
        "deployer": "0xc42b6003c874c82a0e43f2c47b4aab09b634ab41",
        "block": 109714262,
        "ts": "2026-11-09T02:34:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x761166e11ec050f42f1d40ce8e7c3b5b90749e48",
        "name": "SHIESTY Ghosts",
        "symbol": "GHOST",
        "deployer": "0x5da08546bff22a41b596424d454eb4191add0035",
        "block": 109714196,
        "ts": "2026-11-09T02:34:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2f7a34c9817bf2167f9b90101db6b022faaa82b9",
        "name": "Yield Fields",
        "symbol": "YIELD",
        "deployer": "0x4054e03501245b72b54e45db31840bd800e83665",
        "block": 109714062,
        "ts": "2026-11-09T02:34:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7e4186f06b4de3c9734932d7422fe2eb92bb6c53",
        "name": "MuseGod Family",
        "symbol": "MUSEX",
        "deployer": "0x15719d37d81a0a490af6b143ffb3c84613d77a7b",
        "block": 109713933,
        "ts": "2026-11-09T02:34:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5ab3d4c385b400f3abb49e80de2faf6a88a7b691",
        "name": "FLock.io",
        "symbol": "FLOCK",
        "deployer": "0x2088ebe245942860ab5ab895c9613a9c1dcdbd3e",
        "block": 109713792,
        "ts": "2026-11-09T02:33:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xca75ec4fc6f1acaa28a7602cfac993ed99d00008",
        "name": "HASHKITTEN Items",
        "symbol": "HKITEM",
        "deployer": "0xaaa40e2dc9cd6985ca965d851e2e7bf1059da832",
        "block": 109713792,
        "ts": "2026-11-09T02:33:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x89a47effd1227bdad22939c31fd8a8332b46af21",
        "name": "Maggie",
        "symbol": "MAGGIE",
        "deployer": "0xe104c4a9de10414555e31559695c0e4c3852a687",
        "block": 109713725,
        "ts": "2026-11-09T02:33:47.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x3d15d4b30c0bb31ecb221bc3bfeb7b0df568006a",
        "name": "TokenHood",
        "symbol": "HOT",
        "deployer": "0x43523d04e5b878aba6338c0c4ec4c350ab0e2b72",
        "block": 109713548,
        "ts": "2026-11-09T02:33:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x384bed880a5bd6834504079d3a5ef097d9a0d560",
        "name": "Aether",
        "symbol": "AETH",
        "deployer": "0x4255aba668b73b304d3d2dfca81d0ffac65f1196",
        "block": 109713514,
        "ts": "2026-11-09T02:33:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x61bd43c1bda81573e3bcbada96aaa81690000a50",
        "name": "Edge Fund",
        "symbol": "EDGE",
        "deployer": "0xfa322cfea4ede2a06e527f54f8273d36831a40de",
        "block": 109713499,
        "ts": "2026-11-09T02:33:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xac236581b54a41655de53c439aff7e21bfa41e18",
        "name": "Green Chip",
        "symbol": "GREEN",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 109713399,
        "ts": "2026-11-09T02:33:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb2a5ccfd2df672e97ff1107e465bfbc392ba2d8e",
        "name": "Aetheryn V3",
        "symbol": "AETH3",
        "deployer": "0x37759509e1dab93141586aed88eb5c0b7378a347",
        "block": 109712981,
        "ts": "2026-11-09T02:32:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6f613bb50f8e1c91faea4df3e243bb8bdfcb04e1",
        "name": "Elon Coin",
        "symbol": "ELON",
        "deployer": "0x4b62604154e098157ad9546a266351575ef0ffad",
        "block": 109712940,
        "ts": "2026-11-09T02:32:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xab3497d014cb34a0389e22fa5dfe6dcbbf31fce2",
        "name": "Kestrix",
        "symbol": "KSTX",
        "deployer": "0x20c1e28d0a32a912ed92e463e4d9f01841f8fbdf",
        "block": 109712646,
        "ts": "2026-11-09T02:31:55.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x750f76396872a2dc39cdef53c30c6e1a21cbe665",
        "name": "vibe/vibe",
        "symbol": "VIBE",
        "deployer": "0x05ddf9fd235867401f169847800cdeb8b8600202",
        "block": 109712454,
        "ts": "2026-11-09T02:31:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x77ed45aba441bd651dba3356637a778362128425",
        "name": "Diversified Donuts",
        "symbol": "DD",
        "deployer": "0xf0f1e1c2bf6070a1c978ec7935b78d6baec2dabb",
        "block": 109712055,
        "ts": "2026-11-09T02:30:55.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
