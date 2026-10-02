/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-02T23:30:46.000Z",
    "opened_at": "2026-10-02T22:30:46.000Z",
    "window_hours": 1,
    "head_block": 78625904,
    "start_block": 78589904,
    "blocks_scanned": 36000,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 573,
    "unnamed_contracts": 0,
    "via_factory": 530,
    "no_receipt": 0,
    "candidates": 573,
    "mint_events": 35196,
    "deployers": 428,
    "roots": 705,
    "cleared_multiple": 135,
    "failed_gates": 122,
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
      "cat",
      "colony",
      "fable",
      "fun",
      "ludi",
      "nft",
      "positions",
      "uniswap-uni",
      "usdg",
      "useless",
      "zerotrace-zero"
    ],
    "top": {
      "root": "fable",
      "launches": 16,
      "deployers": 16,
      "baseline_share": 0.0004,
      "multiple": 69.8,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "fable",
        "launches": 16,
        "deployers": 16,
        "baseline_share": 0.0004,
        "multiple": 69.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "fun",
        "launches": 14,
        "deployers": 13,
        "baseline_share": 0.0004,
        "multiple": 61.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "ludi",
        "launches": 12,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 52.4,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 9,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 39.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "colony",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 30.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "cat",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 26.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nft",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 26.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 26.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "useless",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 26.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 24,
        "deployers": 24,
        "baseline_share": 0.0004,
        "multiple": 104.7,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 88%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 21,
        "deployers": 21,
        "baseline_share": 0.0004,
        "multiple": 91.6,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 88%, merged to uniswap-uni"
      },
      {
        "root": "zerotrace",
        "launches": 13,
        "deployers": 12,
        "baseline_share": 0.0004,
        "multiple": 56.7,
        "state": "MERGED",
        "reason": "zerotrace + zero co-occur 77%, merged to zerotrace-zero"
      },
      {
        "root": "zero",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 43.6,
        "state": "MERGED",
        "reason": "zerotrace + zero co-occur 77%, merged to zerotrace-zero"
      },
      {
        "root": "rh",
        "launches": 25,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 109.1,
        "state": "THIN",
        "reason": "rh: 3 deployers < 6 required"
      },
      {
        "root": "perp",
        "launches": 23,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 100.3,
        "state": "THIN",
        "reason": "perp: 1 deployers < 6 required"
      },
      {
        "root": "platform",
        "launches": 23,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 100.3,
        "state": "THIN",
        "reason": "platform: 1 deployers < 6 required"
      },
      {
        "root": "box",
        "launches": 7,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 30.5,
        "state": "THIN",
        "reason": "box: 3 deployers < 6 required"
      },
      {
        "root": "deposit",
        "launches": 7,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 30.5,
        "state": "THIN",
        "reason": "deposit: 3 deployers < 6 required"
      },
      {
        "root": "safety",
        "launches": 7,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 30.5,
        "state": "THIN",
        "reason": "safety: 3 deployers < 6 required"
      },
      {
        "root": "turf",
        "launches": 6,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 26.2,
        "state": "THIN",
        "reason": "turf: 5 deployers < 6 required"
      },
      {
        "root": "arena",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 21.8,
        "state": "THIN",
        "reason": "arena: 5 deployers < 6 required"
      },
      {
        "root": "hood",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 21.8,
        "state": "THIN",
        "reason": "hood: 5 deployers < 6 required"
      },
      {
        "root": "leaf",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 21.8,
        "state": "THIN",
        "reason": "leaf: 5 deployers < 6 required"
      },
      {
        "root": "orbiobook",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 21.8,
        "state": "THIN",
        "reason": "orbiobook: 5 deployers < 6 required"
      },
      {
        "root": "ottobot",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.8,
        "state": "THIN",
        "reason": "ottobot: 4 deployers < 6 required"
      },
      {
        "root": "robinhood",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.8,
        "state": "THIN",
        "reason": "robinhood: 4 deployers < 6 required"
      },
      {
        "root": "alandale",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 17.5,
        "state": "THIN",
        "reason": "alandale: 4 launches < 5 required"
      },
      {
        "root": "ape",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17.5,
        "state": "THIN",
        "reason": "ape: 4 launches < 5 required"
      },
      {
        "root": "bot",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17.5,
        "state": "THIN",
        "reason": "bot: 4 launches < 5 required"
      },
      {
        "root": "cow",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 17.5,
        "state": "THIN",
        "reason": "cow: 4 launches < 5 required"
      },
      {
        "root": "dog",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17.5,
        "state": "THIN",
        "reason": "dog: 4 launches < 5 required"
      },
      {
        "root": "getcolony",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17.5,
        "state": "THIN",
        "reason": "getcolony: 4 launches < 5 required"
      },
      {
        "root": "last",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17.5,
        "state": "THIN",
        "reason": "last: 4 launches < 5 required"
      },
      {
        "root": "long",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17.5,
        "state": "THIN",
        "reason": "long: 4 launches < 5 required"
      },
      {
        "root": "orbitz",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17.5,
        "state": "THIN",
        "reason": "orbitz: 4 launches < 5 required"
      },
      {
        "root": "otto",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 17.5,
        "state": "THIN",
        "reason": "otto: 4 launches < 5 required"
      },
      {
        "root": "pokenald",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 17.5,
        "state": "THIN",
        "reason": "pokenald: 4 launches < 5 required"
      },
      {
        "root": "bale",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 13.1,
        "state": "THIN",
        "reason": "bale: 3 launches < 5 required"
      },
      {
        "root": "block",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 13.1,
        "state": "THIN",
        "reason": "block: 3 launches < 5 required"
      },
      {
        "root": "calendar",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 13.1,
        "state": "THIN",
        "reason": "calendar: 3 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x035abfc4ac686bae69c9ad49c4bc97c70f530244",
        "name": "Predictor-1da79782",
        "symbol": "PRD-1da79782",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 78625894,
        "ts": "2026-10-02T23:30:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x12bedc5e8c53214c6803f13a3388083cafe5a54c",
        "name": "Counterparty-1da79782",
        "symbol": "CTR-1da79782",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 78625894,
        "ts": "2026-10-02T23:30:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe74b4cf23e71694e0dc37e4e258c9d0d084b4f8f",
        "name": "Elon Coin",
        "symbol": "ELON",
        "deployer": "0x13016d41a3c3cf74784dc51b95a27d0fbeea3995",
        "block": 78625703,
        "ts": "2026-10-02T23:30:26.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xc96f2b35edc0234b1a5e3e7baaf215d5795f0777",
        "name": "undra",
        "symbol": "undra",
        "deployer": "0x71f6ea20928a025d5a3c74bd421cfd1f14334b46",
        "block": 78625701,
        "ts": "2026-10-02T23:30:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0ce0e0abf2dc3c95081e2f94ef80d6a382256732",
        "name": "MochisCritters",
        "symbol": "MochisCritters",
        "deployer": "0xabb2acd3be814a80e502575d6c1dc5f789e9cd10",
        "block": 78625690,
        "ts": "2026-10-02T23:30:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe407f37682f0ee0b383f436165759875d4fc8ad3",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x58ec76a86b23def899c7e320865d27904e969fe7",
        "block": 78625354,
        "ts": "2026-10-02T23:29:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x929246166b515a51e921cb5409ef722bb7a540a9",
        "name": "ANTHROPIC",
        "symbol": "Anthropic",
        "deployer": "0xdf45145157574d485e78d98a90af03072ddb27f1",
        "block": 78625297,
        "ts": "2026-10-02T23:29:45.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x4101a499b4f21708dc78e7e8b292f2ada0f3858b",
        "name": "Olora",
        "symbol": "OLORA",
        "deployer": "0x09e7f55eabeccdc79b26da663bbbb8b778ec3d6b",
        "block": 78625285,
        "ts": "2026-10-02T23:29:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb02c172ea996c9526370038da4076998bcc4c9e4",
        "name": "farmenta",
        "symbol": "FARMENTA",
        "deployer": "0x5ceb2acf416b3dde252d778eb26d4be1deecb174",
        "block": 78625132,
        "ts": "2026-10-02T23:29:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x384bed880a5bd6834504079d3a5ef097d9a0d560",
        "name": "Aether",
        "symbol": "AETH",
        "deployer": "0xf14040cf3f0c7358103915e403951cb448422baf",
        "block": 78625076,
        "ts": "2026-10-02T23:29:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb31eaefa2a0bdc53df6d7a7f0f289b6ee1a8aaf3",
        "name": "Vesting NFT",
        "symbol": "VNFT",
        "deployer": "0xd983bf1925093dfee1ede6d221cb512ce27ae501",
        "block": 78625068,
        "ts": "2026-10-02T23:29:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc2b03dd177a9baa7def6a784bd3e18f745a9636b",
        "name": "zerotrace",
        "symbol": "ZERO",
        "deployer": "0xa125e89e6be6e841b244027423eeea32729b56c1",
        "block": 78625067,
        "ts": "2026-10-02T23:29:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xce3ff895f2428ef47246b6d34d35e0d1be00284b",
        "name": "orbiobook",
        "symbol": "ORBIOBOOK",
        "deployer": "0x228d49e166f62e9369c44cd6e61b2beb66d30bf1",
        "block": 78625015,
        "ts": "2026-10-02T23:29:17.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x9c2ee70c5b6f85a080f7f4a8252d99f01b090960",
        "name": "Dancing Baby",
        "symbol": "BABY",
        "deployer": "0x69ed0cc4fb5e1e291f8e80e1b7fe5a4339b248ca",
        "block": 78625014,
        "ts": "2026-10-02T23:29:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdcd9b3772c1796b7b889757eb3c1b296b1d41e18",
        "name": "ポッポ",
        "symbol": "POPPO",
        "deployer": "0x39fbaab07a2d9b4bbb9abae7bf3d914011351d00",
        "block": 78624888,
        "ts": "2026-10-02T23:29:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x379259a112dd4bba8a9b271e405f5ee27396d18d",
        "name": "Floxxi",
        "symbol": "floxxi",
        "deployer": "0x30b007ea1c7612c5172b8b392786cfa320ef593a",
        "block": 78624857,
        "ts": "2026-10-02T23:29:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x37683dd22445b8f59b4f84f5479e75f088804188",
        "name": "zashpad.fun",
        "symbol": "ZPAD",
        "deployer": "0xf69191ad05ab71c3e37cbb62b25c1b9af2fb5ae3",
        "block": 78624661,
        "ts": "2026-10-02T23:28:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x844a9951e3faffb059d19699be620ea6f227d09e",
        "name": "Dogecoin",
        "symbol": "DOGECOIN1",
        "deployer": "0xf22e13f4fecf19c17cd142b58a3ed3fbfc361ff5",
        "block": 78624563,
        "ts": "2026-10-02T23:28:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xca3fc5b97bb9a0a1af8a6286facd55449c1a6894",
        "name": "Predictor-9876c5ac",
        "symbol": "PRD-9876c5ac",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 78624473,
        "ts": "2026-10-02T23:28:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3844976a7aeb06bf7adab8aae23fe26accda3cdb",
        "name": "Counterparty-9876c5ac",
        "symbol": "CTR-9876c5ac",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 78624473,
        "ts": "2026-10-02T23:28:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3d1014d4778ee27728b2844e4151ba72b8250650",
        "name": "Gadget Space",
        "symbol": "GDGT",
        "deployer": "0x6492db7e29bb3f7930be8274386f778a2b6eb22b",
        "block": 78624468,
        "ts": "2026-10-02T23:28:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3b5ea3c0159d40f5f2b4062856f0b709878a0fc8",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x32c2090f03c4756dfe619a3f0f69d332fda98965",
        "block": 78624467,
        "ts": "2026-10-02T23:28:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd2da237a0a30d65d1c71c4c32fc047ef0ed89b03",
        "name": "Degen Bear",
        "symbol": "DBER",
        "deployer": "0x58ec76a86b23def899c7e320865d27904e969fe7",
        "block": 78624467,
        "ts": "2026-10-02T23:28:22.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xd0601ce157db5bdc3162bbac2a2c8af5320d9eec",
        "name": "NVIDIA • Robinhood Token",
        "symbol": "NVDA",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 78624442,
        "ts": "2026-10-02T23:28:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2a2f656fa89a66d87644848e15f7e368c3776d25",
        "name": "Foundry Pilot",
        "symbol": "pFNDY",
        "deployer": "0x45d4cb0247bf15b3f681032e4030246a2712fda9",
        "block": 78624378,
        "ts": "2026-10-02T23:28:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdbb05243dfb141bb1a5f784468d4d94d6dbc2894",
        "name": "zerotrace",
        "symbol": "ZERO",
        "deployer": "0xb4905ff59e615394ff6d75865edc3330a4830977",
        "block": 78624369,
        "ts": "2026-10-02T23:28:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1e83a8f07d630033eadb2f9358a3ff857e1c9368",
        "name": "Fable",
        "symbol": "FABLE",
        "deployer": "0x66432b895069be7e0e25d767de05ec243b8a225b",
        "block": 78624301,
        "ts": "2026-10-02T23:28:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3bd18085ed53d0272e168feb57494cc6711c1e18",
        "name": "Cyberbeer",
        "symbol": "CYBERBEER",
        "deployer": "0xd20278dc748cfe4a381e8969751873f1ab80cce4",
        "block": 78624276,
        "ts": "2026-10-02T23:28:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7a282a7b80934942f1c45c7004d0145859eafc7b",
        "name": "Claudio",
        "symbol": "CLAUDIO",
        "deployer": "0xc536a0fae10e441da39b85f93e67452881252723",
        "block": 78624206,
        "ts": "2026-10-02T23:27:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfc28807ef5a45b1f8efdab93b49b747b72f8e005",
        "name": "Anonymous Cat",
        "symbol": "ZCAT",
        "deployer": "0xdff2b4b4bd1a1ea3f54463080f0496332e4c565c",
        "block": 78624132,
        "ts": "2026-10-02T23:27:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6d33436b4f7200b9097285ac49e4092d877cb5a5",
        "name": "Roblade",
        "symbol": "LAND",
        "deployer": "0x474007b027650226c5a7289ccba5f419f12f826a",
        "block": 78624117,
        "ts": "2026-10-02T23:27:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc6d7b40eb721d2c24aa7f67afb9fded942841d12",
        "name": "Unbefallen",
        "symbol": "ELSE",
        "deployer": "0x32c2090f03c4756dfe619a3f0f69d332fda98965",
        "block": 78624081,
        "ts": "2026-10-02T23:27:43.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xfcde2e98655a136cc9806e5585780f76327c498d",
        "name": "Pokémon Legacy",
        "symbol": "PKMN",
        "deployer": "0xa3e1591c2265b41aa3344bf75979e19f6d91ed91",
        "block": 78624052,
        "ts": "2026-10-02T23:27:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcbfa48b8e3f90de6bdf3c12a1a32743cd91353f0",
        "name": "LUDI",
        "symbol": "LUDI",
        "deployer": "0x03ab9dd7b9aaa0c571d4d94af94b456ffcb71da7",
        "block": 78623996,
        "ts": "2026-10-02T23:27:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcb23d8f932b3a14904a149494d737c000b813cb6",
        "name": "Artisty3D",
        "symbol": "ARTY",
        "deployer": "0xb46f69729aa940f99077b2e930aff8537db0181c",
        "block": 78623755,
        "ts": "2026-10-02T23:27:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x832e19559adcd9c764b9b7c2bea614d8a5bc696b",
        "name": "ChainpixHoods",
        "symbol": "c",
        "deployer": "0xbfefcb034f367bb5948f9dceeaeb6179c6695bd5",
        "block": 78623726,
        "ts": "2026-10-02T23:27:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x459cb2142834116be0d3c8dd8b3e9ae674a89e0e",
        "name": "annu.cash",
        "symbol": "ANNU",
        "deployer": "0xff1e1e94980771affdfea0c41df7cd87f3b20c8e",
        "block": 78623633,
        "ts": "2026-10-02T23:26:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7423ff2ec4fee40f6eebe2c73d05d353b7b2d811",
        "name": "zip cat",
        "symbol": "zipcat",
        "deployer": "0x9dadabb2be1a5ec25e8e836d8e8d09e32fb34c75",
        "block": 78623603,
        "ts": "2026-10-02T23:26:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x880370c0b52f8511a5f3a6d9b436074312108618",
        "name": "ZOKO",
        "symbol": "KOO",
        "deployer": "0xc1b1efcb6f1e163883581cdd5ecc55d498c791df",
        "block": 78623582,
        "ts": "2026-10-02T23:26:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x49f98a382ccbc05f13b3e3ab323d04aba975642d",
        "name": "Solana",
        "symbol": "SOL",
        "deployer": "0x432ec3a106490e572b69b9f471e89c92b85ba3d7",
        "block": 78623295,
        "ts": "2026-10-02T23:26:24.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
