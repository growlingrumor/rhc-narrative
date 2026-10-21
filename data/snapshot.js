/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-21T00:51:46.000Z",
    "opened_at": "2026-10-20T23:51:46.000Z",
    "window_hours": 1,
    "head_block": 93878509,
    "start_block": 93844158,
    "blocks_scanned": 34351,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 466,
    "unnamed_contracts": 0,
    "via_factory": 430,
    "no_receipt": 0,
    "candidates": 466,
    "mint_events": 22508,
    "deployers": 326,
    "roots": 529,
    "cleared_multiple": 145,
    "failed_gates": 131,
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
      "boss-final-aura",
      "cat",
      "hood",
      "kimchi",
      "positions-nft",
      "robinhood",
      "umi-yumi",
      "uniswap-uni",
      "usdg"
    ],
    "top": {
      "root": "kimchi",
      "launches": 20,
      "deployers": 18,
      "baseline_share": 0.0004,
      "multiple": 107.3,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "kimchi",
        "launches": 20,
        "deployers": 18,
        "baseline_share": 0.0004,
        "multiple": 107.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "robinhood",
        "launches": 16,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 85.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "cat",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 53.6,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 48.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "hood",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 32.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "boss",
        "launches": 44,
        "deployers": 42,
        "baseline_share": 0.0004,
        "multiple": 236.1,
        "state": "MERGED",
        "reason": "boss + final co-occur 96%, merged to boss-final-aura"
      },
      {
        "root": "final",
        "launches": 44,
        "deployers": 43,
        "baseline_share": 0.0004,
        "multiple": 236.1,
        "state": "MERGED",
        "reason": "boss + final co-occur 96%, merged to boss-final-aura"
      },
      {
        "root": "aura",
        "launches": 41,
        "deployers": 40,
        "baseline_share": 0.0004,
        "multiple": 220,
        "state": "MERGED",
        "reason": "boss + final co-occur 96%, merged to boss-final-aura"
      },
      {
        "root": "uniswap",
        "launches": 27,
        "deployers": 23,
        "baseline_share": 0.0004,
        "multiple": 144.8,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 70%, merged to uniswap-uni"
      },
      {
        "root": "umi",
        "launches": 20,
        "deployers": 19,
        "baseline_share": 0.0004,
        "multiple": 107.3,
        "state": "MERGED",
        "reason": "umi + yumi co-occur 100%, merged to umi-yumi"
      },
      {
        "root": "yumi",
        "launches": 20,
        "deployers": 19,
        "baseline_share": 0.0004,
        "multiple": 107.3,
        "state": "MERGED",
        "reason": "umi + yumi co-occur 100%, merged to umi-yumi"
      },
      {
        "root": "uni",
        "launches": 19,
        "deployers": 18,
        "baseline_share": 0.0004,
        "multiple": 101.9,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 70%, merged to uniswap-uni"
      },
      {
        "root": "positions",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 37.6,
        "state": "MERGED",
        "reason": "positions + nft co-occur 63%, merged to positions-nft"
      },
      {
        "root": "nft",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 32.2,
        "state": "MERGED",
        "reason": "positions + nft co-occur 63%, merged to positions-nft"
      },
      {
        "root": "orbio",
        "launches": 8,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 42.9,
        "state": "THIN",
        "reason": "orbio: 2 deployers < 6 required"
      },
      {
        "root": "cow",
        "launches": 7,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 37.6,
        "state": "THIN",
        "reason": "cow: 3 deployers < 6 required"
      },
      {
        "root": "staked",
        "launches": 6,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 32.2,
        "state": "THIN",
        "reason": "staked: 5 deployers < 6 required"
      },
      {
        "root": "airdrop",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 26.8,
        "state": "THIN",
        "reason": "airdrop: 5 deployers < 6 required"
      },
      {
        "root": "net",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 26.8,
        "state": "THIN",
        "reason": "net: 5 deployers < 6 required"
      },
      {
        "root": "world",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 26.8,
        "state": "THIN",
        "reason": "world: 5 deployers < 6 required"
      },
      {
        "root": "alandale",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 21.5,
        "state": "THIN",
        "reason": "alandale: 4 launches < 5 required"
      },
      {
        "root": "borrowable",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 21.5,
        "state": "THIN",
        "reason": "borrowable: 4 launches < 5 required"
      },
      {
        "root": "dog",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.5,
        "state": "THIN",
        "reason": "dog: 4 launches < 5 required"
      },
      {
        "root": "flock",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 21.5,
        "state": "THIN",
        "reason": "flock: 4 launches < 5 required"
      },
      {
        "root": "lend",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 21.5,
        "state": "THIN",
        "reason": "lend: 4 launches < 5 required"
      },
      {
        "root": "robin",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.5,
        "state": "THIN",
        "reason": "robin: 4 launches < 5 required"
      },
      {
        "root": "super",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.5,
        "state": "THIN",
        "reason": "super: 4 launches < 5 required"
      },
      {
        "root": "torch",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.5,
        "state": "THIN",
        "reason": "torch: 4 launches < 5 required"
      },
      {
        "root": "where",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.5,
        "state": "THIN",
        "reason": "where: 4 launches < 5 required"
      },
      {
        "root": "agent",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.1,
        "state": "THIN",
        "reason": "agent: 3 launches < 5 required"
      },
      {
        "root": "arrowfarm",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.1,
        "state": "THIN",
        "reason": "arrowfarm: 3 launches < 5 required"
      },
      {
        "root": "bf",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.1,
        "state": "THIN",
        "reason": "bf: 3 launches < 5 required"
      },
      {
        "root": "brownfi",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.1,
        "state": "THIN",
        "reason": "brownfi: 3 launches < 5 required"
      },
      {
        "root": "bucket",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 16.1,
        "state": "THIN",
        "reason": "bucket: 3 launches < 5 required"
      },
      {
        "root": "cet",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.1,
        "state": "THIN",
        "reason": "cet: 3 launches < 5 required"
      },
      {
        "root": "chop",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.1,
        "state": "THIN",
        "reason": "chop: 3 launches < 5 required"
      },
      {
        "root": "cosmic",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.1,
        "state": "THIN",
        "reason": "cosmic: 3 launches < 5 required"
      },
      {
        "root": "credit",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.1,
        "state": "THIN",
        "reason": "credit: 3 launches < 5 required"
      },
      {
        "root": "derp",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.1,
        "state": "THIN",
        "reason": "derp: 3 launches < 5 required"
      },
      {
        "root": "derpy",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.1,
        "state": "THIN",
        "reason": "derpy: 3 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x18d0916f83c5aea9e2bd4de40ae83c4bcb8d73dd",
        "name": "Celebrity Coin",
        "symbol": "Celebrity",
        "deployer": "0xadfd0db26e2cb656a2d7b08fd7819bb10c24e1bf",
        "block": 93878509,
        "ts": "2026-10-21T00:51:46.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x9e06628251bc0f6f0138d6d14fc27800478acc10",
        "name": "NEON WRAITHS",
        "symbol": "ETH",
        "deployer": "0x87c89732c3a3d28937bf47fb835ae188b25341a1",
        "block": 93878483,
        "ts": "2026-10-21T00:51:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9a2f2112b3ced2852a7b934232d47dfb40ae88a9",
        "name": "Worm",
        "symbol": "WORM",
        "deployer": "0x98858c245b45d1901d29d32aa5017be5e7d5b059",
        "block": 93878448,
        "ts": "2026-10-21T00:51:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x98ae8686cc649aff75b8ad5a509796b9c99af1b7",
        "name": "Vintage Pixell",
        "symbol": "ETH",
        "deployer": "0x87c89732c3a3d28937bf47fb835ae188b25341a1",
        "block": 93878250,
        "ts": "2026-10-21T00:51:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x894e1ec2d74ffe5aef8dc8a9e84686accb964f2a",
        "name": "Palantir Technologies • Robinhood Token",
        "symbol": "PLTR",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 93878196,
        "ts": "2026-10-21T00:51:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9ffd1e65f9a3b623b4e2810347afd3f6d9ec6dda",
        "name": "Ozak Ai",
        "symbol": "OZAKAI",
        "deployer": "0x4337b71c61e117e3ee144a4c714db81772d02d4d",
        "block": 93878169,
        "ts": "2026-10-21T00:51:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x74cbdaab5c0c8e689d2b86cb2ec7d0b8a12e7777",
        "name": "The Neal Rigga",
        "symbol": "CENTED",
        "deployer": "0xa7ba884561771e707f7f29bd5388b77f1e470daf",
        "block": 93878130,
        "ts": "2026-10-21T00:51:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0e14a81aadf9f9601dcb546347c380b218c62991",
        "name": "Trendsetter",
        "symbol": "TREND",
        "deployer": "0x06a499af24b8ef75e3234c2471bef9c1a9367c91",
        "block": 93877853,
        "ts": "2026-10-21T00:50:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe38a007e42d7aab09b7ad5fe083293c2cc3de45b",
        "name": "Uniswap v4 Positions NFT",
        "symbol": "UNI-V4-POSM",
        "deployer": "0x06a499af24b8ef75e3234c2471bef9c1a9367c91",
        "block": 93877853,
        "ts": "2026-10-21T00:50:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb86733d0c3f583fa6c7f70dc7af4fa0784ef7c62",
        "name": "yumi umi",
        "symbol": "umi",
        "deployer": "0x01f2a2a3c6f28595408576b0413d3fa370b7336c",
        "block": 93877795,
        "ts": "2026-10-21T00:50:29.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xd81c003788fc9d667a58cae060f039d8fdc4e995",
        "name": "Aura Final Boss",
        "symbol": "Kimchi",
        "deployer": "0x18a32a7fa0eb2a3fddbfbac9893ec699b4a42f41",
        "block": 93877708,
        "ts": "2026-10-21T00:50:20.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xf09a1986d31b15791e228b4cfd795187e51c971b",
        "name": "Pons Worm",
        "symbol": "WORM",
        "deployer": "0xe3cfc79f0b54988b452c172d9b511a1b204a0bd8",
        "block": 93877650,
        "ts": "2026-10-21T00:50:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5f66586ccfc0da622655d3d99e4ad00dcdb43f7c",
        "name": "StonkPress Receipt",
        "symbol": "RECEIPT",
        "deployer": "0xb7463b428fbc9b497cfe4a713aaced8a5d65a5cc",
        "block": 93877488,
        "ts": "2026-10-21T00:49:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5490102a83205304dd170f380cb6e4d00d0f1111",
        "name": "Oly Dao",
        "symbol": "OLY",
        "deployer": "0xc07ed0f4792f7bf7b1bd162d98e693909e9cdb3c",
        "block": 93877429,
        "ts": "2026-10-21T00:49:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x70ae210e7dbca4e134d46070af520d19fe82df8d",
        "name": "Wrapped Space Exploration Technologies Corp. Class A Common Stock • Robinhood Token",
        "symbol": "wSPCX",
        "deployer": "0x1e9891b933c123eb860a4ae8ba75f7c5b506eed5",
        "block": 93877386,
        "ts": "2026-10-21T00:49:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x63921260c3e4bbefc4d00106f307c42e5f357232",
        "name": "Aura Final Boss",
        "symbol": "Kimchi",
        "deployer": "0xd02fbe8a0bd89267942bf9ce7bd4b797a6db7294",
        "block": 93877315,
        "ts": "2026-10-21T00:49:37.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x0ef5126d667cebac4e790ef774b66cda81ad9492",
        "name": "ROBULL",
        "symbol": "ROBULL",
        "deployer": "0x5e0bfdb13b34ce02b112dd2a035092cef56ce63b",
        "block": 93877268,
        "ts": "2026-10-21T00:49:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x647b1f452353f37cc049356b19b979aa4a068888",
        "name": "Lotsa Pasta",
        "symbol": "PASTA",
        "deployer": "0xdf612a408dc6489defd6fd9949c669df065fea8a",
        "block": 93877157,
        "ts": "2026-10-21T00:49:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5b5b983ff4902f250b261c9b430c3b5a1f597777",
        "name": "Aura Final Boss",
        "symbol": "DUVE",
        "deployer": "0x1b4ebe73585b94578dc055c6ac7e89333fdadcf7",
        "block": 93876905,
        "ts": "2026-10-21T00:48:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3613d026f3e1f5d56a7b4e8deef612250aeae2f0",
        "name": "Alive Internet Theory",
        "symbol": "AIT",
        "deployer": "0xf2cd1abff97735cd30c653dac1439748fc8cc60f",
        "block": 93876582,
        "ts": "2026-10-21T00:48:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa25e9380cd8b3d115a6edfbad24f8d11a5bb7777",
        "name": "kimchi",
        "symbol": "kimchi",
        "deployer": "0x0828e371366852436576d83f468955befa60ea6d",
        "block": 93876545,
        "ts": "2026-10-21T00:48:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf4c71b4ef6aee5a1682f12e959c01af1418a4a63",
        "name": "yumi umi",
        "symbol": "umi",
        "deployer": "0x04f3ae3a5264a417938debfd1f34766ea21d71fe",
        "block": 93876479,
        "ts": "2026-10-21T00:48:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd752447b692c5797d329d1de256c0f036d9094c7",
        "name": "buyoutSH",
        "symbol": "BUYOUT",
        "deployer": "0x0238ca068ca97a3702bbf390d0790537b466bfd9",
        "block": 93876470,
        "ts": "2026-10-21T00:48:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x46cc5962163987f27f4da479eff1fca411f5416f",
        "name": "Aura Final Boss",
        "symbol": "Kimchi",
        "deployer": "0x09ec2a2019af4b88e63c214e10d3358770f2d6e3",
        "block": 93876462,
        "ts": "2026-10-21T00:48:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfce2c1d8b00729a194b188f8f2f0e0bcc9592104",
        "name": "LOT-Super Inu",
        "symbol": "LOT-Super Inu",
        "deployer": "0xdf612a408dc6489defd6fd9949c669df065fea8a",
        "block": 93876280,
        "ts": "2026-10-21T00:47:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1049210b554aa87e44d88d638bc33c5711107777",
        "name": "Fan Account",
        "symbol": "FAN",
        "deployer": "0xfe2cb6b8c284d632390268d8007873ac5865db0b",
        "block": 93876073,
        "ts": "2026-10-21T00:47:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4300a8409a11fec295783a5f69316dc4f675ba87",
        "name": "Fan Account",
        "symbol": "FAN",
        "deployer": "0xea2bd0d27a9e8f843b5cacd04cb226fd3231dc84",
        "block": 93876002,
        "ts": "2026-10-21T00:47:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdc7c79c3d65f71c5a1bb08ddcd480c3878093f80",
        "name": "Waste",
        "symbol": "WASTE",
        "deployer": "0x8af6d71f89d78a1fc1b4c8295fc499f83fb88189",
        "block": 93875981,
        "ts": "2026-10-21T00:47:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x922f3da6cc00f43498b216eeb59c7bed702b1111",
        "name": "Torchbearer",
        "symbol": "LL",
        "deployer": "0x0a7ba1ef155873c68f0d316a28f1a37f8cad3f93",
        "block": 93875899,
        "ts": "2026-10-21T00:47:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0be3e0d1b321b10c8f32ff5dcc36e86fe4c37777",
        "name": "Build A Boden",
        "symbol": "BODEN",
        "deployer": "0x498b1bee7a146a4d10514f2d8eb1201b447ad384",
        "block": 93875892,
        "ts": "2026-10-21T00:47:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb3ecf4e995bf179b55407a3edb49645e9f1e337c",
        "name": "LFG",
        "symbol": "LFG",
        "deployer": "0x2ccc152ad68419f777531e6a40a52325e2a80ee2",
        "block": 93875873,
        "ts": "2026-10-21T00:47:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x465bb16d3d56fb87f65638cbc93c76c70bd8a09f",
        "name": "Bucket: Chips and AI",
        "symbol": "bCHIPS",
        "deployer": "0x2ccc152ad68419f777531e6a40a52325e2a80ee2",
        "block": 93875782,
        "ts": "2026-10-21T00:46:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x55100fa9f37b528a6d6b3a4c7d4c51d3a69e11d2",
        "name": "Notchstock",
        "symbol": "NOTCH",
        "deployer": "0xb9b4099ddcdd3d1a981bba8a76ca19225725b978",
        "block": 93875715,
        "ts": "2026-10-21T00:46:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7f99c3efc084dee11a5da6fd5a0ca56903d1d8eb",
        "name": "CHIP WHEEL",
        "symbol": "WHEEL",
        "deployer": "0x4fe02d7034bef501460f425e0873f859e7ac079e",
        "block": 93875654,
        "ts": "2026-10-21T00:46:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5ca35d205f06cf99c661c9d36d0260a5aa821aac",
        "name": "mousetrap",
        "symbol": "MOUSE",
        "deployer": "0x81eed8009bbd2b60f1495b77e3542c3b744968fe",
        "block": 93875628,
        "ts": "2026-10-21T00:46:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7192c3cdb8676a261c9b9c0a1dc6099e8a6d37e1",
        "name": "Omni Strike Force",
        "symbol": "OIE",
        "deployer": "0xed30ab71d93da03b21a87cf1b00a2b7e4fc553ca",
        "block": 93875589,
        "ts": "2026-10-21T00:46:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x48b39a6638c002c1d4bc21ebfe502b1dbe73a51c",
        "name": "Bucket: Big Tech",
        "symbol": "bTECH",
        "deployer": "0x2ccc152ad68419f777531e6a40a52325e2a80ee2",
        "block": 93875582,
        "ts": "2026-10-21T00:46:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdcdb76ef9e6b3ccf03dc770ae52c21ccb088d412",
        "name": "Retard",
        "symbol": "RETARD",
        "deployer": "0xa7296ee4ce9b0c201e1d90c3630fb52e6e5bdd31",
        "block": 93875472,
        "ts": "2026-10-21T00:46:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x399198eac333898fa60bd486bd60f7f1c2d87777",
        "name": "Notchstock",
        "symbol": "NOTCH",
        "deployer": "0x7485fbfd99993dab4c9964f53791e40d14253c97",
        "block": 93875438,
        "ts": "2026-10-21T00:46:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdb86cd4f750239dec19e87cf416911e028c212a4",
        "name": "Black Swan Shield",
        "symbol": "BSS",
        "deployer": "0x2ccc152ad68419f777531e6a40a52325e2a80ee2",
        "block": 93875371,
        "ts": "2026-10-21T00:46:13.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
