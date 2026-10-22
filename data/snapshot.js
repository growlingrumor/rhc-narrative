/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-22T22:31:57.000Z",
    "opened_at": "2026-10-22T21:31:57.000Z",
    "window_hours": 1,
    "head_block": 95459792,
    "start_block": 95425227,
    "blocks_scanned": 34565,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 384,
    "unnamed_contracts": 0,
    "via_factory": 344,
    "no_receipt": 0,
    "candidates": 384,
    "mint_events": 13759,
    "deployers": 255,
    "roots": 476,
    "cleared_multiple": 476,
    "failed_gates": 464,
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
      "aerarium",
      "bitwater",
      "cat",
      "dacity-city",
      "nft",
      "positions",
      "project-kimchi",
      "uniswap-uni",
      "usdg"
    ],
    "top": {
      "root": "bitwater",
      "launches": 11,
      "deployers": 11,
      "baseline_share": 0.0004,
      "multiple": 71.6,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "bitwater",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 71.6,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "cat",
        "launches": 11,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 71.6,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 71.6,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "aerarium",
        "launches": 10,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 65.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nft",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 58.6,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 45.6,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 26,
        "deployers": 22,
        "baseline_share": 0.0004,
        "multiple": 169.3,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 73%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 19,
        "deployers": 18,
        "baseline_share": 0.0004,
        "multiple": 123.7,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 73%, merged to uniswap-uni"
      },
      {
        "root": "dacity",
        "launches": 12,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 78.1,
        "state": "MERGED",
        "reason": "dacity + city co-occur 92%, merged to dacity-city"
      },
      {
        "root": "city",
        "launches": 11,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 71.6,
        "state": "MERGED",
        "reason": "dacity + city co-occur 92%, merged to dacity-city"
      },
      {
        "root": "project",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 52.1,
        "state": "MERGED",
        "reason": "project + kimchi co-occur 75%, merged to project-kimchi"
      },
      {
        "root": "kimchi",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 39.1,
        "state": "MERGED",
        "reason": "project + kimchi co-occur 75%, merged to project-kimchi"
      },
      {
        "root": "robinhood",
        "launches": 10,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 65.1,
        "state": "THIN",
        "reason": "robinhood: 4 deployers < 6 required"
      },
      {
        "root": "ai",
        "launches": 6,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 39.1,
        "state": "THIN",
        "reason": "ai: 5 deployers < 6 required"
      },
      {
        "root": "arcus",
        "launches": 5,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 32.6,
        "state": "THIN",
        "reason": "arcus: 2 deployers < 6 required"
      },
      {
        "root": "long",
        "launches": 5,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 32.6,
        "state": "THIN",
        "reason": "long: 2 deployers < 6 required"
      },
      {
        "root": "man",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 32.6,
        "state": "THIN",
        "reason": "man: 5 deployers < 6 required"
      },
      {
        "root": "mememan",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 32.6,
        "state": "THIN",
        "reason": "mememan: 5 deployers < 6 required"
      },
      {
        "root": "standard",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 32.6,
        "state": "THIN",
        "reason": "standard: 5 deployers < 6 required"
      },
      {
        "root": "triple",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 32.6,
        "state": "THIN",
        "reason": "triple: 5 deployers < 6 required"
      },
      {
        "root": "ae",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 26,
        "state": "THIN",
        "reason": "ae: 4 launches < 5 required"
      },
      {
        "root": "app",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 26,
        "state": "THIN",
        "reason": "app: 4 launches < 5 required"
      },
      {
        "root": "boss",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 26,
        "state": "THIN",
        "reason": "boss: 4 launches < 5 required"
      },
      {
        "root": "cow",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 26,
        "state": "THIN",
        "reason": "cow: 4 launches < 5 required"
      },
      {
        "root": "farthing",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 26,
        "state": "THIN",
        "reason": "farthing: 4 launches < 5 required"
      },
      {
        "root": "orbix",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 26,
        "state": "THIN",
        "reason": "orbix: 4 launches < 5 required"
      },
      {
        "root": "ramses",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 26,
        "state": "THIN",
        "reason": "ramses: 4 launches < 5 required"
      },
      {
        "root": "useorbix",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 26,
        "state": "THIN",
        "reason": "useorbix: 4 launches < 5 required"
      },
      {
        "root": "volatile",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 26,
        "state": "THIN",
        "reason": "volatile: 4 launches < 5 required"
      },
      {
        "root": "aura",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.5,
        "state": "THIN",
        "reason": "aura: 3 launches < 5 required"
      },
      {
        "root": "cassie",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.5,
        "state": "THIN",
        "reason": "cassie: 3 launches < 5 required"
      },
      {
        "root": "crypto",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.5,
        "state": "THIN",
        "reason": "crypto: 3 launches < 5 required"
      },
      {
        "root": "dog",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.5,
        "state": "THIN",
        "reason": "dog: 3 launches < 5 required"
      },
      {
        "root": "final",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.5,
        "state": "THIN",
        "reason": "final: 3 launches < 5 required"
      },
      {
        "root": "marketplace",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.5,
        "state": "THIN",
        "reason": "marketplace: 3 launches < 5 required"
      },
      {
        "root": "net",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 19.5,
        "state": "THIN",
        "reason": "net: 3 launches < 5 required"
      },
      {
        "root": "omni",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 19.5,
        "state": "THIN",
        "reason": "omni: 3 launches < 5 required"
      },
      {
        "root": "omnigods",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 19.5,
        "state": "THIN",
        "reason": "omnigods: 3 launches < 5 required"
      },
      {
        "root": "one",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 19.5,
        "state": "THIN",
        "reason": "one: 3 launches < 5 required"
      },
      {
        "root": "pve",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 19.5,
        "state": "THIN",
        "reason": "pve: 3 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x3f0de0c91797a28d3173f91fa1fd50b1c8b67777",
        "name": "TRENCHERS",
        "symbol": "TRENCHERS",
        "deployer": "0xe26a8a93a803f6dcc9355da3beac69d733ddfd5d",
        "block": 95459727,
        "ts": "2026-10-22T22:31:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x93e199bc73b599a695de4fdff69723b8d99a7777",
        "name": "Gator Cat",
        "symbol": "GATOR",
        "deployer": "0x4f6d40378da3874cb49b6834b4c20ada43842691",
        "block": 95459644,
        "ts": "2026-10-22T22:31:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd43e2956b7e2675e73292ceb983bc50da61b5b61",
        "name": "TRENCHERS",
        "symbol": "TRENCHERS",
        "deployer": "0xa5d0ce3e051c2d22496bec4f0194a4fa29f6547f",
        "block": 95459619,
        "ts": "2026-10-22T22:31:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x317407cd0f8aac459fe896fa7c04b13905878058",
        "name": "Wrapped Rocket Lab Corporation • Robinhood Token",
        "symbol": "wRKLB",
        "deployer": "0xcd6d31bd8fb8e4100b9cb916cd9a92d884f58355",
        "block": 95459347,
        "ts": "2026-10-22T22:31:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x84b5a4f2e4bf05843eba0725399a82b37a1ff46f",
        "name": "Tiptoe",
        "symbol": "tiptoe",
        "deployer": "0x9d34b040153dae9de5778225b64e256482a8e62f",
        "block": 95459181,
        "ts": "2026-10-22T22:30:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd9b8fbd61033145c5496132153ce675756313b71",
        "name": "Slvr Vote Escrow",
        "symbol": "veSLVR",
        "deployer": "0xb4c55aa726d3af36556d91078621e6d97ec0c607",
        "block": 95458800,
        "ts": "2026-10-22T22:30:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb679d465db076b542bdfaac9c2d908e244d8d09e",
        "name": "Scarecrow Bot",
        "symbol": "SCARECBOT",
        "deployer": "0x058a6a1a8cf9912f01e90b83288f5cbeefbc0d3b",
        "block": 95458663,
        "ts": "2026-10-22T22:30:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8bbf096fd5873eba91c1c471adfd7d429b09e154",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x60e36f494ba131be40468c4eabee4f83179a0b83",
        "block": 95458558,
        "ts": "2026-10-22T22:29:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4d3f37a965b21ab4122e92dd41d2693e742c883b",
        "name": "Ripe DAO Governance Token",
        "symbol": "RIPE",
        "deployer": "0x88367132715a7279b7560b8752bdcbd48bafd7b7",
        "block": 95458537,
        "ts": "2026-10-22T22:29:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x37e5f01ed5b81ca573f11a82c9ca72e9cb188cfb",
        "name": "Imperial_Alpha",
        "symbol": "IA",
        "deployer": "0x9040f723a230b6edeaa0f2bf2495cd40b82c3f0a",
        "block": 95458474,
        "ts": "2026-10-22T22:29:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x761b34733798975c2a32bced49a07c56ef21eaac",
        "name": "MAGMAP",
        "symbol": "MAPIT",
        "deployer": "0x40c5c1894bc9faa80b9512df7316100af49c5139",
        "block": 95458433,
        "ts": "2026-10-22T22:29:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdcd9c4087963d4bffe7179a143d5bdeab6622bc6",
        "name": "OMNIGODS",
        "symbol": "OMNIGODS",
        "deployer": "0xcea8e35d839a2a31abff2c2245f5fbdef3ab5c85",
        "block": 95458345,
        "ts": "2026-10-22T22:29:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x626820a92d5fd176142dc8c346c3285d80e39998",
        "name": "Vault OMNIGODS",
        "symbol": "vOMNIGODS",
        "deployer": "0xcea8e35d839a2a31abff2c2245f5fbdef3ab5c85",
        "block": 95458345,
        "ts": "2026-10-22T22:29:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe339744b2d23664d33c56dd8b6d09d2083f29fb1",
        "name": "OMNIGODS Locked Liquidity",
        "symbol": "OG-LP",
        "deployer": "0xcea8e35d839a2a31abff2c2245f5fbdef3ab5c85",
        "block": 95458345,
        "ts": "2026-10-22T22:29:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xddba377171ac3233d0edd4b0d81113effb447777",
        "name": "Dacity Coin",
        "symbol": "CITY",
        "deployer": "0x66c8495c58143578f906b8c4f839342a9d9bbb49",
        "block": 95458286,
        "ts": "2026-10-22T22:29:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0bd8bfb75242b5fa46443ddf18af0f1672cca1cb",
        "name": "Sopranos Intelligence Tier List",
        "symbol": "EDITION",
        "deployer": "0xa0504f86d1493f975177b0bd5106600b472f8374",
        "block": 95458173,
        "ts": "2026-10-22T22:29:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6178406c433c70b006e2f81a79a5d98bf5b0af85",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x90f749d7808dc4af81713af6542bb83c28d605a3",
        "block": 95458110,
        "ts": "2026-10-22T22:29:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe22f9757a80a508837dff2806d5a926e226992ed",
        "name": "Profit Frog",
        "symbol": "PRFF",
        "deployer": "0x60e36f494ba131be40468c4eabee4f83179a0b83",
        "block": 95457670,
        "ts": "2026-10-22T22:28:18.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xdbfccb4c495efb7cbc8d45783b53c393da5d7777",
        "name": "project kimchi",
        "symbol": "kimchi",
        "deployer": "0xef6af266ed3dc6c3c25d8c7cb5d419adc7239e51",
        "block": 95457571,
        "ts": "2026-10-22T22:28:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0172a5667a1a911835ea8ec5cb47a7b10175161f",
        "name": "The Pump Files",
        "symbol": "Pump",
        "deployer": "0xf907bf27e60c62c93ca68a02cbee18fe31a87582",
        "block": 95457543,
        "ts": "2026-10-22T22:28:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb6831babf77bbf5a00368e7ad5565bf873bf1698",
        "name": "Dacity Coin",
        "symbol": "CITY",
        "deployer": "0x7359b5161dc9321d713829f07c99799e8efb2458",
        "block": 95457541,
        "ts": "2026-10-22T22:28:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa3470b7669fb005956f10b795a4b7cff6d0eb340",
        "name": "Programmable Review Check",
        "symbol": "PMREVIEW",
        "deployer": "0x0dbe4f551b318fbba7e7a1975c3a62b9392b8595",
        "block": 95457146,
        "ts": "2026-10-22T22:27:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8969400a94eb62e98af84fae0b88b0cd014f2733",
        "name": "useorbix.app",
        "symbol": "ORBIX",
        "deployer": "0xe85f80bb4e98018a298cbcaaae4e7cf0de378715",
        "block": 95457111,
        "ts": "2026-10-22T22:27:22.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xb3c1a30c77c103a9cd22d5b7178589ce97c49e97",
        "name": "Aura Final Boss",
        "symbol": "Kimchi",
        "deployer": "0xb0f156f9c5c39a331de535cd80786c9b2b2c1b53",
        "block": 95457110,
        "ts": "2026-10-22T22:27:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe6a82a7bd33d90ea18cac005d0778fc1cadc2736",
        "name": "FLYWHEEL",
        "symbol": "FLYWHEEL",
        "deployer": "0xceee2f5d3799e8856293d08157ffb5965f43b29e",
        "block": 95456904,
        "ts": "2026-10-22T22:26:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x115f1672fd182e5baabaca86438eb2d9096d7777",
        "name": "The Pump Files",
        "symbol": "PUMP",
        "deployer": "0xea5c98a6164850f6ace669bd753de6928881b65e",
        "block": 95456902,
        "ts": "2026-10-22T22:26:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3e2495ce5aa2b583d742ef1768e48a2fa3e16d07",
        "name": "GooseLoop",
        "symbol": "LOOP",
        "deployer": "0xffe91870ce630f1e688b5f69538ce5fc757ca28f",
        "block": 95456653,
        "ts": "2026-10-22T22:26:31.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x1010154b0cc5ac576871727f3760f567cb010101",
        "name": "Neuron",
        "symbol": "NEURON",
        "deployer": "0x2e3dc563ffcf58c97a670c844337e6fdf568d267",
        "block": 95456281,
        "ts": "2026-10-22T22:25:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1ee360d6c5e1ef620f499452574cfb4693c2fba3",
        "name": "net capital",
        "symbol": "NET",
        "deployer": "0x52aae1af4f13a93945150ab20b7028122adb11b6",
        "block": 95455878,
        "ts": "2026-10-22T22:25:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6f63d869011f95274498023b4abfc00b30c34378",
        "name": "Subnet 80",
        "symbol": "SN80",
        "deployer": "0x1bd2b8e646ab7f44a47ef0325c871aa96a85a049",
        "block": 95455809,
        "ts": "2026-10-22T22:25:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xef15dbaaacff0b69663f26ca9f8f498899b7f18f",
        "name": "Dacity Coin",
        "symbol": "CITY",
        "deployer": "0xdd55e369716e5a2cb293c440ae34c17af22566cb",
        "block": 95455652,
        "ts": "2026-10-22T22:24:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9724a134aedda4e637f50f8c79cbe533e98d7777",
        "name": "Nonce",
        "symbol": "NONCE",
        "deployer": "0x21853863aeec000ebfa52e46b366fdf2ac02ca6b",
        "block": 95455585,
        "ts": "2026-10-22T22:24:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x75218158ec36581d61fb38e88666da304a42a24c",
        "name": "Conso",
        "symbol": "CONSO",
        "deployer": "0x136f1ace8f46a14f3622b9524c57af172c1d1585",
        "block": 95455497,
        "ts": "2026-10-22T22:24:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xda8a9642633fe80a23a57a7fa9b20eae430fd41a",
        "name": "Nonce",
        "symbol": "NONCE",
        "deployer": "0x89179fc340076a0fc62ee3baa06af3620f0645ef",
        "block": 95455489,
        "ts": "2026-10-22T22:24:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf8650e0391c0f90cc11bd1cf6a9088fc38a51e18",
        "name": "Shark Cards",
        "symbol": "SHARK",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 95455333,
        "ts": "2026-10-22T22:24:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x20c0738b15b4ba27703758e85fea12f269b021f3",
        "name": "SHAVCOIN",
        "symbol": "SHAVCOIN",
        "deployer": "0x6a8bb509e28a565f4690dbd037d21c064956ca09",
        "block": 95455276,
        "ts": "2026-10-22T22:24:12.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x7a0045294c6b18eae0e7acce561d5fd43f37e6ea",
        "name": "The Pumpers",
        "symbol": "PUMPERS",
        "deployer": "0x4e2bd87ec828601cedaee948d61f64c0a2673b84",
        "block": 95455162,
        "ts": "2026-10-22T22:24:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd42efbbe031f5dddc00e014561faf09a29fb7777",
        "name": "Thankful For Today",
        "symbol": "THANKFUL",
        "deployer": "0x980b9bb5b3163638e0a35f8f26ff40547b16e2a9",
        "block": 95455060,
        "ts": "2026-10-22T22:23:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x43e324ecb08efa230e07c046d20d1116c451d98b",
        "name": "Dexsport",
        "symbol": "DEXSPORT",
        "deployer": "0x838b6b0bd02c9456852d18bd9aa38b71b7e24562",
        "block": 95454971,
        "ts": "2026-10-22T22:23:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6a5057a50178cc9c90577d8df401e7fbe79de9fd",
        "name": "Cow Uniswap Robinhood TSLA-USDG",
        "symbol": "cowUniswapRobinhoodTSLA-USDG",
        "deployer": "0x7ef7b367f38f4952fcfcb1c835fc35aaae3733bd",
        "block": 95454926,
        "ts": "2026-10-22T22:23:35.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
