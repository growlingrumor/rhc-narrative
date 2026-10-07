/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-07T08:57:47.000Z",
    "opened_at": "2026-10-07T07:57:47.000Z",
    "window_hours": 1,
    "head_block": 82349050,
    "start_block": 82314166,
    "blocks_scanned": 34884,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 414,
    "unnamed_contracts": 0,
    "via_factory": 373,
    "no_receipt": 0,
    "candidates": 414,
    "mint_events": 25931,
    "deployers": 250,
    "roots": 596,
    "cleared_multiple": 596,
    "failed_gates": 585,
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
      "ai",
      "auton",
      "float",
      "hi",
      "hood",
      "nft",
      "open",
      "positions",
      "robinhood",
      "uniswap-uni"
    ],
    "top": {
      "root": "robinhood",
      "launches": 17,
      "deployers": 7,
      "baseline_share": 0.0004,
      "multiple": 102.7,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "robinhood",
        "launches": 17,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 102.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "hood",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 60.4,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nft",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 54.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "ai",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 48.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "auton",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 42.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 42.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "float",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 36.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "hi",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 36.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "open",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 36.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 13,
        "deployers": 12,
        "baseline_share": 0.0004,
        "multiple": 78.5,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 85%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 11,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 66.4,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 85%, merged to uniswap-uni"
      },
      {
        "root": "counterparty",
        "launches": 8,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 48.3,
        "state": "THIN",
        "reason": "counterparty: 1 deployers < 6 required"
      },
      {
        "root": "predictor",
        "launches": 8,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 48.3,
        "state": "THIN",
        "reason": "predictor: 1 deployers < 6 required"
      },
      {
        "root": "ctr",
        "launches": 7,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 42.3,
        "state": "THIN",
        "reason": "ctr: 1 deployers < 6 required"
      },
      {
        "root": "prd",
        "launches": 7,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 42.3,
        "state": "THIN",
        "reason": "prd: 1 deployers < 6 required"
      },
      {
        "root": "bucket",
        "launches": 6,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 36.2,
        "state": "THIN",
        "reason": "bucket: 1 deployers < 6 required"
      },
      {
        "root": "cat",
        "launches": 6,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 36.2,
        "state": "THIN",
        "reason": "cat: 5 deployers < 6 required"
      },
      {
        "root": "robin",
        "launches": 6,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 36.2,
        "state": "THIN",
        "reason": "robin: 4 deployers < 6 required"
      },
      {
        "root": "bf",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 30.2,
        "state": "THIN",
        "reason": "bf: 4 deployers < 6 required"
      },
      {
        "root": "dog",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 30.2,
        "state": "THIN",
        "reason": "dog: 5 deployers < 6 required"
      },
      {
        "root": "hallow",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 30.2,
        "state": "THIN",
        "reason": "hallow: 5 deployers < 6 required"
      },
      {
        "root": "hoodie",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 30.2,
        "state": "THIN",
        "reason": "hoodie: 3 deployers < 6 required"
      },
      {
        "root": "inc",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 30.2,
        "state": "THIN",
        "reason": "inc: 4 deployers < 6 required"
      },
      {
        "root": "anti",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 24.2,
        "state": "THIN",
        "reason": "anti: 4 launches < 5 required"
      },
      {
        "root": "bci",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.2,
        "state": "THIN",
        "reason": "bci: 4 launches < 5 required"
      },
      {
        "root": "brain",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.2,
        "state": "THIN",
        "reason": "brain: 4 launches < 5 required"
      },
      {
        "root": "credit",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 24.2,
        "state": "THIN",
        "reason": "credit: 4 launches < 5 required"
      },
      {
        "root": "interface",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.2,
        "state": "THIN",
        "reason": "interface: 4 launches < 5 required"
      },
      {
        "root": "plague",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 24.2,
        "state": "THIN",
        "reason": "plague: 4 launches < 5 required"
      },
      {
        "root": "position",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 24.2,
        "state": "THIN",
        "reason": "position: 4 launches < 5 required"
      },
      {
        "root": "super",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 24.2,
        "state": "THIN",
        "reason": "super: 4 launches < 5 required"
      },
      {
        "root": "technology",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 24.2,
        "state": "THIN",
        "reason": "technology: 4 launches < 5 required"
      },
      {
        "root": "agent",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 18.1,
        "state": "THIN",
        "reason": "agent: 3 launches < 5 required"
      },
      {
        "root": "arcus",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.1,
        "state": "THIN",
        "reason": "arcus: 3 launches < 5 required"
      },
      {
        "root": "bloxpad",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.1,
        "state": "THIN",
        "reason": "bloxpad: 3 launches < 5 required"
      },
      {
        "root": "brownfi",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 18.1,
        "state": "THIN",
        "reason": "brownfi: 3 launches < 5 required"
      },
      {
        "root": "cash",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 18.1,
        "state": "THIN",
        "reason": "cash: 3 launches < 5 required"
      },
      {
        "root": "cashdog",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 18.1,
        "state": "THIN",
        "reason": "cashdog: 3 launches < 5 required"
      },
      {
        "root": "cayetana",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 18.1,
        "state": "THIN",
        "reason": "cayetana: 3 launches < 5 required"
      },
      {
        "root": "cgnft",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 18.1,
        "state": "THIN",
        "reason": "cgnft: 3 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x8df02981f566fd67a17ab4c9650dfaed693949c4",
        "name": "Tauronomics",
        "symbol": "Ta",
        "deployer": "0xc8f4f9eabb58a888a885bc849dca9e99f1673d78",
        "block": 82349018,
        "ts": "2026-10-07T08:57:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x721b9704dc4c6b5dd44762c0a8d549b5e8107777",
        "name": "Xtremly Retarded People",
        "symbol": "XRP",
        "deployer": "0xea5c98a6164850f6ace669bd753de6928881b65e",
        "block": 82348996,
        "ts": "2026-10-07T08:57:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdcb1a20ffe6d47142b52fe1cd6873ebebc8365d8",
        "name": "Robin Hoodie",
        "symbol": "HOODIE",
        "deployer": "0xbfb5248480b9ce6f9fd3d28a5b9ca7d504180e28",
        "block": 82348872,
        "ts": "2026-10-07T08:57:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf9a2b61e1ac120f13229bcf78831b420e9da2a4d",
        "name": "Cayetana The Sloth",
        "symbol": "Cayetana",
        "deployer": "0x9c2d29e6c190f411d08906a24128b2b3aeddd7fd",
        "block": 82348859,
        "ts": "2026-10-07T08:57:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9106daebda22efa521fec6bfe6e84d44397b1777",
        "name": "Cayetana The Sloth",
        "symbol": "Cayetana",
        "deployer": "0x1c09da5e773c99a09138b240c87c1f2d220678d8",
        "block": 82348849,
        "ts": "2026-10-07T08:57:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x73fb684a7efb3283b73c539d7c0ff7fb0a387777",
        "name": "Claudia Musk",
        "symbol": "CLAUMUSK",
        "deployer": "0x21853863aeec000ebfa52e46b366fdf2ac02ca6b",
        "block": 82348607,
        "ts": "2026-10-07T08:57:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcd68e0a82ddba17b5d3c131b595b9f7f76168fd5",
        "name": "dogwif",
        "symbol": "wif",
        "deployer": "0xc927f2ef7a9c7bb505734b594408080caee42004",
        "block": 82348541,
        "ts": "2026-10-07T08:56:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4a3f44f9d57ef9f7a118f3b1221be68d55690341",
        "name": "OnRamp",
        "symbol": "ONRAMP",
        "deployer": "0x1dbc98ff4395fad0a2e6bb61e0c25252c0e30d1e",
        "block": 82348499,
        "ts": "2026-10-07T08:56:49.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xd1c1aa52577221cd1e11d60349946eed570a94ea",
        "name": "Robin Hoodie",
        "symbol": "HOODIE",
        "deployer": "0x532c5a3dfab41b05f82637ea0d4fa657be45146b",
        "block": 82348339,
        "ts": "2026-10-07T08:56:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xde1b65b809a4c3f2f422616f16bcd39ed2d89ece",
        "name": "Who Sent This?",
        "symbol": "WHO",
        "deployer": "0x025513f680036ba886828c6aed1e4500e1ecec06",
        "block": 82348098,
        "ts": "2026-10-07T08:56:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe004a790307898a78f22151b860c6b71ef320c7f",
        "name": "Test MAXX",
        "symbol": "tMAXX",
        "deployer": "0x3d40ec5c3cae07817acd7fd1026d9ded3086530e",
        "block": 82348073,
        "ts": "2026-10-07T08:56:05.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xe45f25c229a2cd274d2a99812858ec342db92ef5",
        "name": "NUMOS",
        "symbol": "NUMOS",
        "deployer": "0xb7e688b1f6f55be262a8b3d3ea0ea5a12eaf3d2a",
        "block": 82348012,
        "ts": "2026-10-07T08:55:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xceb0599e8242975b0462ad01cb393914fa087777",
        "name": "Cayetana The Sloth",
        "symbol": "CAYETANA",
        "deployer": "0x980b9bb5b3163638e0a35f8f26ff40547b16e2a9",
        "block": 82347835,
        "ts": "2026-10-07T08:55:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd70d3e8cb2f3f05c254bb0ec36d93d991ec2243f",
        "name": "Goat Maybe",
        "symbol": "HORN",
        "deployer": "0x92d35973c85c07e10db5d6aaa01a5bf3169bf6b1",
        "block": 82347826,
        "ts": "2026-10-07T08:55:39.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xaa07c8da0cfc3c233b6ce2f933819783f1707777",
        "name": "Toxic",
        "symbol": "TOXIC",
        "deployer": "0xe26a8a93a803f6dcc9355da3beac69d733ddfd5d",
        "block": 82347719,
        "ts": "2026-10-07T08:55:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x33d8e88ef2ea7d26cf33aee23b1f974164a2af29",
        "name": "Treasury Cat",
        "symbol": "TREZCAT",
        "deployer": "0x0c983fcde5e7584a50d60fb48271c984da62eb7b",
        "block": 82347646,
        "ts": "2026-10-07T08:55:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdee3a5764989553bb78bfff64268c12e5f9a455f",
        "name": "CloverUp",
        "symbol": "CLVUP",
        "deployer": "0x92d35973c85c07e10db5d6aaa01a5bf3169bf6b1",
        "block": 82347531,
        "ts": "2026-10-07T08:55:08.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xc4527c458471578a5dcad4496fd59d08565e7777",
        "name": "MUSE FOMO",
        "symbol": "MUSEFOMO",
        "deployer": "0x4f6d40378da3874cb49b6834b4c20ada43842691",
        "block": 82347493,
        "ts": "2026-10-07T08:55:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe7ee610e9f14aaaa9c3125d180cdba874b217777",
        "name": "Alma",
        "symbol": "ALMAC",
        "deployer": "0xea5c98a6164850f6ace669bd753de6928881b65e",
        "block": 82347372,
        "ts": "2026-10-07T08:54:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x33f4de8d68e3942ab7047daa31a8f9335271a508",
        "name": "ChainGreets NFT",
        "symbol": "CGNFT",
        "deployer": "0xe04d47ab6734cd07edaf373df32875a5bd31a350",
        "block": 82347306,
        "ts": "2026-10-07T08:54:46.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x0633b7ac75f267f2243d58b4a0dd0a27cd957777",
        "name": "Dipsaur",
        "symbol": "DIPSAUR",
        "deployer": "0x21853863aeec000ebfa52e46b366fdf2ac02ca6b",
        "block": 82347258,
        "ts": "2026-10-07T08:54:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x28d8a98957b031d132da938569783340c985ca69",
        "name": "Willy",
        "symbol": "Willy",
        "deployer": "0x92d35973c85c07e10db5d6aaa01a5bf3169bf6b1",
        "block": 82347194,
        "ts": "2026-10-07T08:54:35.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x30937bec4e3f899d39f3bc0e3a971830ccab7777",
        "name": "Orcat",
        "symbol": "ORCAT",
        "deployer": "0x980b9bb5b3163638e0a35f8f26ff40547b16e2a9",
        "block": 82347161,
        "ts": "2026-10-07T08:54:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd6c0339c99cf092c8d523de50d61e95b1e9b163e",
        "name": "Robin Hoodie",
        "symbol": "HOODIE",
        "deployer": "0x532c5a3dfab41b05f82637ea0d4fa657be45146b",
        "block": 82347115,
        "ts": "2026-10-07T08:54:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdf23c3cab7fd8894ca6972c08f6f41396e1dbcd7",
        "name": "Hide the pain Harold",
        "symbol": "PAIN",
        "deployer": "0xb9736973bc216ddf86920a364e39b81b22875173",
        "block": 82347074,
        "ts": "2026-10-07T08:54:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x978455cba5bba04bdc1267762c7a4707b57dec7e",
        "name": "ACCRETION by MDV",
        "symbol": "Acc",
        "deployer": "0xf43bc9019c620c7eb82b43ada900cb7f535c58c2",
        "block": 82346922,
        "ts": "2026-10-07T08:54:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfcfb29c5c3a88e2b7ec5371e6d9096812c83e2fe",
        "name": "Bloxpad",
        "symbol": "bloxpad",
        "deployer": "0x92d35973c85c07e10db5d6aaa01a5bf3169bf6b1",
        "block": 82346846,
        "ts": "2026-10-07T08:53:59.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x9806d5dac1bba21d59d93932c61ac99fb21bde7b",
        "name": "YeetrHoodie",
        "symbol": "YHOOD",
        "deployer": "0x27e25a2f8c3438fc7a082862028b5b2f1159b7d0",
        "block": 82346825,
        "ts": "2026-10-07T08:53:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd665781e229d3a91e18d54fe6e7498ce2d082cc2",
        "name": "Robin Hoodie",
        "symbol": "HOODIE",
        "deployer": "0x532c5a3dfab41b05f82637ea0d4fa657be45146b",
        "block": 82346735,
        "ts": "2026-10-07T08:53:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7c55d4b0ce93455239ae4fea5dbd5d39a4bba5ce",
        "name": "Super Ishikawa",
        "symbol": "Super Ishikawa",
        "deployer": "0x240e5ccfc1b8b7e76844897d7b9c9cbb99d10052",
        "block": 82346675,
        "ts": "2026-10-07T08:53:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x50bd37241a8d5d03c43197d74597261cad9b9187",
        "name": "chipmunk",
        "symbol": "chip",
        "deployer": "0x92d35973c85c07e10db5d6aaa01a5bf3169bf6b1",
        "block": 82346543,
        "ts": "2026-10-07T08:53:27.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xa4870f9d496b75a263712118d25fdb7014014b8b",
        "name": "Ducat Passes",
        "symbol": "PASS",
        "deployer": "0x42f6d5a50091b1effe737e8211a336dbdbe89617",
        "block": 82346506,
        "ts": "2026-10-07T08:53:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4d5d138645b1538639534d95413e078aa9c87777",
        "name": "SUI BABA",
        "symbol": "SB",
        "deployer": "0xe26a8a93a803f6dcc9355da3beac69d733ddfd5d",
        "block": 82346455,
        "ts": "2026-10-07T08:53:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa41f18c9a34f5b82e21a28d0e85dad8a708741b9",
        "name": "Tendies",
        "symbol": "Tendies",
        "deployer": "0x92d35973c85c07e10db5d6aaa01a5bf3169bf6b1",
        "block": 82346209,
        "ts": "2026-10-07T08:52:53.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x3e4fe0385c5990237acd3079bafa4cc2b6ef49cc",
        "name": "Hood Survivors",
        "symbol": "SURVIVOR",
        "deployer": "0xc8eec27c99f9870ad3edcd5e67da800aebfa2183",
        "block": 82346042,
        "ts": "2026-10-07T08:52:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbdf949e468a712d94b53909507f5a53c57c6c355",
        "name": "Wrapped Micron Technology • Robinhood Token",
        "symbol": "wMU",
        "deployer": "0x9efc87801ffb0b27766d6c568e3c0d76bd59d605",
        "block": 82345934,
        "ts": "2026-10-07T08:52:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcaf96083086822564059407d28c81d0f2ce50153",
        "name": "Lane Check 00F3",
        "symbol": "LNCK",
        "deployer": "0x7b8d92221c30459c534ed1ba1a7a8581bc87ef81",
        "block": 82345933,
        "ts": "2026-10-07T08:52:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x54c2fa4c108e9d270df64701d964d0eef1d693d6",
        "name": "Autism Inu",
        "symbol": "AI",
        "deployer": "0x92d35973c85c07e10db5d6aaa01a5bf3169bf6b1",
        "block": 82345931,
        "ts": "2026-10-07T08:52:24.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xaef5f48873549971fb22e495c60fd92f4e24de47",
        "name": "CHCECK TWITTER SEARCH WTF!",
        "symbol": "Messi",
        "deployer": "0x92d35973c85c07e10db5d6aaa01a5bf3169bf6b1",
        "block": 82345686,
        "ts": "2026-10-07T08:51:59.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xdfed3508dcb50d760e3f2f2dd49dcfd67e12b0b3",
        "name": "Bellswap Synthetic #0",
        "symbol": "bsX0",
        "deployer": "0x6d40979b6c4b98ed03d656971a27adda46d2c76a",
        "block": 82345604,
        "ts": "2026-10-07T08:51:51.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
