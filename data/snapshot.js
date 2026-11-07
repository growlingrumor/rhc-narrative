/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-07T15:07:13.000Z",
    "opened_at": "2026-11-07T14:07:13.000Z",
    "window_hours": 1,
    "head_block": 108498149,
    "start_block": 108463422,
    "blocks_scanned": 34727,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 419,
    "unnamed_contracts": 12,
    "via_factory": 393,
    "no_receipt": 0,
    "candidates": 431,
    "mint_events": 17720,
    "deployers": 277,
    "roots": 524,
    "cleared_multiple": 359,
    "failed_gates": 354,
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
      "bob-like",
      "gator-macca",
      "neo"
    ],
    "top": {
      "root": "neo",
      "launches": 9,
      "deployers": 8,
      "baseline_share": 0.0004,
      "multiple": 53.7,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "neo",
        "launches": 9,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 53.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "gator",
        "launches": 14,
        "deployers": 14,
        "baseline_share": 0.0004,
        "multiple": 83.5,
        "state": "MERGED",
        "reason": "gator + macca co-occur 100%, merged to gator-macca"
      },
      {
        "root": "macca",
        "launches": 14,
        "deployers": 14,
        "baseline_share": 0.0004,
        "multiple": 83.5,
        "state": "MERGED",
        "reason": "gator + macca co-occur 100%, merged to gator-macca"
      },
      {
        "root": "bob",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 41.8,
        "state": "MERGED",
        "reason": "bob + like co-occur 100%, merged to bob-like"
      },
      {
        "root": "like",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0005,
        "multiple": 33.4,
        "state": "MERGED",
        "reason": "bob + like co-occur 100%, merged to bob-like"
      },
      {
        "root": "uniswap",
        "launches": 30,
        "deployers": 17,
        "baseline_share": 0.0509,
        "multiple": 1.4,
        "state": "BELOW",
        "reason": "uniswap: 1.4x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 17,
        "deployers": 11,
        "baseline_share": 0.0424,
        "multiple": 1,
        "state": "BELOW",
        "reason": "uni: 1.0x over baseline < 6.0x required"
      },
      {
        "root": "cow",
        "launches": 16,
        "deployers": 4,
        "baseline_share": 0.0072,
        "multiple": 5.3,
        "state": "BELOW",
        "reason": "cow: 5.3x over baseline < 6.0x required"
      },
      {
        "root": "robinhood",
        "launches": 13,
        "deployers": 9,
        "baseline_share": 0.0513,
        "multiple": 0.6,
        "state": "BELOW",
        "reason": "robinhood: 0.6x over baseline < 6.0x required"
      },
      {
        "root": "usdg",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0203,
        "multiple": 1.3,
        "state": "BELOW",
        "reason": "usdg: 1.3x over baseline < 6.0x required"
      },
      {
        "root": "reward",
        "launches": 8,
        "deployers": 4,
        "baseline_share": 0.0037,
        "multiple": 5.2,
        "state": "BELOW",
        "reason": "reward: 5.2x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0167,
        "multiple": 1.1,
        "state": "BELOW",
        "reason": "positions: 1.1x over baseline < 6.0x required"
      },
      {
        "root": "ai",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0081,
        "multiple": 2.1,
        "state": "BELOW",
        "reason": "ai: 2.1x over baseline < 6.0x required"
      },
      {
        "root": "dog",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0058,
        "multiple": 2.5,
        "state": "BELOW",
        "reason": "dog: 2.5x over baseline < 6.0x required"
      },
      {
        "root": "nft",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0201,
        "multiple": 0.7,
        "state": "BELOW",
        "reason": "nft: 0.7x over baseline < 6.0x required"
      },
      {
        "root": "act",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 29.8,
        "state": "THIN",
        "reason": "act: 5 deployers < 6 required"
      },
      {
        "root": "blackout",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 29.8,
        "state": "THIN",
        "reason": "blackout: 5 deployers < 6 required"
      },
      {
        "root": "kaja",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 29.8,
        "state": "THIN",
        "reason": "kaja: 5 deployers < 6 required"
      },
      {
        "root": "tailer",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 29.8,
        "state": "THIN",
        "reason": "tailer: 5 deployers < 6 required"
      },
      {
        "root": "hood",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0108,
        "multiple": 1.1,
        "state": "BELOW",
        "reason": "hood: 1.1x over baseline < 6.0x required"
      },
      {
        "root": "cat",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.013,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "cat: 0.9x over baseline < 6.0x required"
      },
      {
        "root": "actb",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 23.9,
        "state": "THIN",
        "reason": "actb: 4 launches < 5 required"
      },
      {
        "root": "duge",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 23.9,
        "state": "THIN",
        "reason": "duge: 4 launches < 5 required"
      },
      {
        "root": "amc",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.001,
        "multiple": 9.5,
        "state": "THIN",
        "reason": "amc: 4 launches < 5 required"
      },
      {
        "root": "rh",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0036,
        "multiple": 2.7,
        "state": "BELOW",
        "reason": "rh: 2.7x over baseline < 6.0x required"
      },
      {
        "root": "prd",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0048,
        "multiple": 2,
        "state": "BELOW",
        "reason": "prd: 2.0x over baseline < 6.0x required"
      },
      {
        "root": "ctr",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0049,
        "multiple": 1.9,
        "state": "BELOW",
        "reason": "ctr: 1.9x over baseline < 6.0x required"
      },
      {
        "root": "aero",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0056,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "aero: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "counterparty",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0055,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "counterparty: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "predictor",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0055,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "predictor: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "weth",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0073,
        "multiple": 1.3,
        "state": "BELOW",
        "reason": "weth: 1.3x over baseline < 6.0x required"
      },
      {
        "root": "adyros",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 17.9,
        "state": "THIN",
        "reason": "adyros: 3 launches < 5 required"
      },
      {
        "root": "elysium",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 17.9,
        "state": "THIN",
        "reason": "elysium: 3 launches < 5 required"
      },
      {
        "root": "sunpeak",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 17.9,
        "state": "THIN",
        "reason": "sunpeak: 3 launches < 5 required"
      },
      {
        "root": "veiled",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 17.9,
        "state": "THIN",
        "reason": "veiled: 3 launches < 5 required"
      },
      {
        "root": "zeno",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 17.9,
        "state": "THIN",
        "reason": "zeno: 3 launches < 5 required"
      },
      {
        "root": "pass",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0011,
        "multiple": 6.5,
        "state": "THIN",
        "reason": "pass: 3 launches < 5 required"
      },
      {
        "root": "cash",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0021,
        "multiple": 3.4,
        "state": "BELOW",
        "reason": "cash: 3.4x over baseline < 6.0x required"
      },
      {
        "root": "fund",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0029,
        "multiple": 2.5,
        "state": "BELOW",
        "reason": "fund: 2.5x over baseline < 6.0x required"
      },
      {
        "root": "alandale",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0032,
        "multiple": 2.2,
        "state": "BELOW",
        "reason": "alandale: 2.2x over baseline < 6.0x required"
      }
    ],
    "recent": [
      {
        "address": "0x2b233291a1d6049c80e0c32faa2c2162cf76cc53",
        "name": "United States Silver Digital Gold",
        "symbol": "USDG",
        "deployer": "0xe2eb482345c2e9f9693cf1b221ed6fed5c5fc8b3",
        "block": 108498119,
        "ts": "2026-11-07T15:07:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8b9875e4b0a72111eb28553dcbfc07e5ec0b6b84",
        "name": "Terafab",
        "symbol": "TERAF",
        "deployer": "0xb78d890563a0d80821f1b9e50728c72c209f5d93",
        "block": 108498067,
        "ts": "2026-11-07T15:07:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x906fef9e46fd2d02f94a7e440bc83aa07e2a8c24",
        "name": "Trump coin",
        "symbol": "TRUMPCOIN",
        "deployer": "0xf60dbbc1b94c1b8d8b8e4c359eb08342f9cd1cfb",
        "block": 108497922,
        "ts": "2026-11-07T15:06:49.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xa4cd1d19fda29120759bdf10ba639c974d59a883",
        "name": "Mefaly",
        "symbol": "MFY",
        "deployer": "0x0d92ab8dbb461bc317475497cf66a533ac7bc16c",
        "block": 108497902,
        "ts": "2026-11-07T15:06:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdd72964acb06c2189aaef5052aa6d74da8600087",
        "name": "WD-40mg",
        "symbol": "WD40mg",
        "deployer": "0x2bcb6d7b5b12f94b91441aa2cdce68e3d96877af",
        "block": 108497823,
        "ts": "2026-11-07T15:06:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xad9b5c0ea95cf998c1a31aaa8ac7a24de94bee69",
        "name": "LayerBank Robinhood USDG",
        "symbol": "lRobUSDG",
        "deployer": "0xe647df965dc7ebee27fdd8840a7fc907540eb3d3",
        "block": 108497750,
        "ts": "2026-11-07T15:06:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe653850f5b93d376cf2f1518a0e408d1355e385b",
        "name": "CraftBot",
        "symbol": "CRAFTBOT",
        "deployer": "0x4c77050756ebb99130c2f677aa9005bf88769c2e",
        "block": 108497519,
        "ts": "2026-11-07T15:06:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x34b725a4268e409d15cd70cc09489d99372306ea",
        "name": "Dinu",
        "symbol": "DINU",
        "deployer": "0x99e06797c9feb52391e2c14718f001be71ec1519",
        "block": 108497488,
        "ts": "2026-11-07T15:06:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa74dc043c612691e8ef937728a48514a5fa916ea",
        "name": "REMUS",
        "symbol": "REMUS",
        "deployer": "0x4e2bd87ec828601cedaee948d61f64c0a2673b84",
        "block": 108497442,
        "ts": "2026-11-07T15:06:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf42b4e1a3fd374b1f849bf898edc64ab17df06ea",
        "name": "one coin",
        "symbol": "ONECOIN",
        "deployer": "0x4e2bd87ec828601cedaee948d61f64c0a2673b84",
        "block": 108497442,
        "ts": "2026-11-07T15:06:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x09ab768f99e8b3f4a56ffa8f66d7665f56890f4b",
        "name": "Melyon",
        "symbol": "MELYON",
        "deployer": "0x09d9f35f462fa53769629c2f787a1e6f0e3227ae",
        "block": 108497278,
        "ts": "2026-11-07T15:05:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xac719f5f8c0c2441b603ed0de0c3f0623387b6ea",
        "name": "Trump Coin",
        "symbol": "TRUMP",
        "deployer": "0xc9c07482b2e683bfd4f7c30ef95647b698b4ef68",
        "block": 108497259,
        "ts": "2026-11-07T15:05:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8c6f3f74b570dffe2649c632e80116cf08b82fd5",
        "name": "Adyros",
        "symbol": "ADYROS",
        "deployer": "0xea209a4a5de9a8449a666c5f9fa43be7181600a9",
        "block": 108496835,
        "ts": "2026-11-07T15:04:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x92eea65200393f9060ec10dcbdfa90f838dfe0c5",
        "name": "Macca The Gator",
        "symbol": "MACCA",
        "deployer": "0x7140fcf7607cd44a1caef745ad54f8375f254606",
        "block": 108496748,
        "ts": "2026-11-07T15:04:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x816dce9de00c49dd13e2243778ce9d91ec80aaac",
        "name": "Sohnback",
        "symbol": "SOHNB",
        "deployer": "0xcabe808389763abe350b4aa489f5c224d85d7577",
        "block": 108496048,
        "ts": "2026-11-07T15:03:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5755ad50f3c54beec04cb4af691347a4a57fe0c5",
        "name": "Macca The Gator",
        "symbol": "MACCA",
        "deployer": "0x114794ef27f3c030a57666a7e3ee22b1830d4af2",
        "block": 108495863,
        "ts": "2026-11-07T15:03:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x876a7ee433a742ea243f8cbfee231eed8f41e0c5",
        "name": "Macca The Gator",
        "symbol": "MACCA",
        "deployer": "0x9c89bb4647efd46331fde3fa9b72b3d6a000bfce",
        "block": 108495590,
        "ts": "2026-11-07T15:02:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe4772b4b4544b6582aaaaa870aa2d6fd856852e8",
        "name": "Hood Syndicate RH",
        "symbol": "9",
        "deployer": "0x9cda5d20c2fc8d0e25fd53f9542162c48c61309e",
        "block": 108495479,
        "ts": "2026-11-07T15:02:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x33a8d8ee30ec05bf7414366736293f74786d818a",
        "name": "ELYSION",
        "symbol": "ElysionPad",
        "deployer": "0x4dd4a433f72acbc5ac49482b5904346faf46b0df",
        "block": 108495276,
        "ts": "2026-11-07T15:02:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x13c75645ead6101d0ba3520fe458b9cc11a50609",
        "name": "Adyros",
        "symbol": "ADYROS",
        "deployer": "0x4dce54a5610f4a5571a71839b7ba6a87966f97d4",
        "block": 108494965,
        "ts": "2026-11-07T15:01:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x37042d82a255faaeda1600f2369c158ce1d55412",
        "name": "GetOn Proto 1",
        "symbol": "GETON",
        "deployer": "0xcc60cb46f7990ee816492bac58ffed620fc9afc6",
        "block": 108494919,
        "ts": "2026-11-07T15:01:41.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x3e5ba27ff9090ce16c9a819f6e1deffa1634d90f",
        "name": "Mnemio AI",
        "symbol": "MNEMIO",
        "deployer": "0x36b0f57a52ef6917a0f2c8986f34f07179f1e6b1",
        "block": 108494824,
        "ts": "2026-11-07T15:01:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3b970363040e1d0ed439d4e0a203fd6b50062469",
        "name": "Cryptorch",
        "symbol": "TORCH",
        "deployer": "0x415175be29044fe89b086de0728cccb74a27ff43",
        "block": 108494777,
        "ts": "2026-11-07T15:01:26.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xf8ddf59090cd2780ed70ff97fe911c70276d4a44",
        "name": "Frontier Outlaws",
        "symbol": "OUTLAW",
        "deployer": "0xda4f44f69a42eca5839903bd3fa6faa15ff1e026",
        "block": 108494770,
        "ts": "2026-11-07T15:01:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x869ae2d8cb5b10e70d39230b9fef6ac2ce66054e",
        "name": "Veiled",
        "symbol": "VEILED",
        "deployer": "0x0b07d3126811f0aed1f09d5a0da94e94dc6f8396",
        "block": 108494755,
        "ts": "2026-11-07T15:01:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x02bec3ebb93ed971309f3382079840191f68743a",
        "name": "Quantum",
        "symbol": "QUANTUM",
        "deployer": "0x263ad67c321f99337fd662e5e23317eb90ee46d4",
        "block": 108494735,
        "ts": "2026-11-07T15:01:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6a560d7c41de4c268349467daae5a91e8d8dc463",
        "name": "LOTA ON HOOD",
        "symbol": "LOTA",
        "deployer": "0x85b534b5052b51049cb7bc5bee581bb1a09b588c",
        "block": 108494654,
        "ts": "2026-11-07T15:01:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcaea5f29faa51db70aa84dbfd2bb6f883503e0c5",
        "name": "Macca The Gator",
        "symbol": "MACCA",
        "deployer": "0x6978362b2c41ab4ddb5c9946a2b03f898cf3578d",
        "block": 108494577,
        "ts": "2026-11-07T15:01:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdd2f5fd5406b235027b253ba10235a1393eb4cfb",
        "name": "Predictor-d82a4a97",
        "symbol": "PRD-d82a4a97",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 108494549,
        "ts": "2026-11-07T15:01:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x679d1d8fddd79d37a073752b2fffe234ae33cc20",
        "name": "Counterparty-d82a4a97",
        "symbol": "CTR-d82a4a97",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 108494549,
        "ts": "2026-11-07T15:01:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1c6abc24ba833e94ec1d3154687c05a7b9b78791",
        "name": "Veiled",
        "symbol": "VEILED",
        "deployer": "0xa1423b119e0314ac6d5cdca50b3d06946ec01121",
        "block": 108494296,
        "ts": "2026-11-07T15:00:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x500855ca9f281a1383482399addd1651269bb866",
        "name": "Called It",
        "symbol": "CALLED",
        "deployer": "0x0527425cdd726136bf0773c4178238833ea56b44",
        "block": 108494199,
        "ts": "2026-11-07T15:00:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3779179506fa588f79c3a70ea5eb20b212031e18",
        "name": "froge the froge",
        "symbol": "FROGE",
        "deployer": "0x1cff0b6899fcd4a38bc2baf59f4b2177acd05af3",
        "block": 108494147,
        "ts": "2026-11-07T15:00:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x78a3b6ec1ccb151e415e718ee16a69f2a7fcaf83",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x3407ae1b3c618d69541b0993bf3142abfa19f0a9",
        "block": 108493713,
        "ts": "2026-11-07T14:59:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x38f0cb986ced232dbfe16c089a405086c0f9903a",
        "name": "Safety Deposit Box Smart LP YARD/WETH Balanced Band",
        "symbol": "sdYARD-BB",
        "deployer": "0x29f44dba6427e1769b787a63ed156fd04dfa38ff",
        "block": 108493647,
        "ts": "2026-11-07T14:59:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf8af6bdd38678c0bfff221df243cbcc019538990",
        "name": "AkonLabs",
        "symbol": "AKON",
        "deployer": "0x41a1836a173adc4d21272db358a4a9cfcaad2609",
        "block": 108493606,
        "ts": "2026-11-07T14:59:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9d6d115f1450fcc404f8a85a4387e1eeabdb1f00",
        "name": "Safety Deposit Box Smart LP MANCER/WETH Balanced Band",
        "symbol": "sdMANCER-BB",
        "deployer": "0x29f44dba6427e1769b787a63ed156fd04dfa38ff",
        "block": 108493286,
        "ts": "2026-11-07T14:58:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9b96d19d519694a991b9ffb34e5a200bd8fb8fbb",
        "name": "WSM",
        "symbol": "WSM",
        "deployer": "0x6866a6a28129839f67da069ceb68ad258830363e",
        "block": 108493179,
        "ts": "2026-11-07T14:58:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfa77eb690c014ca914001c208b45944b2d38fa7c",
        "name": "tokyo",
        "symbol": "tokyo",
        "deployer": "0x0d1c790258a53b90041f1d3b7719a17ac9122ae4",
        "block": 108493123,
        "ts": "2026-11-07T14:58:37.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xce3a83ab43c3235e2d500aaa7654a092f013004f",
        "name": "stnkCAT",
        "symbol": "STNCAT",
        "deployer": "0x6866a6a28129839f67da069ceb68ad258830363e",
        "block": 108493048,
        "ts": "2026-11-07T14:58:29.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
