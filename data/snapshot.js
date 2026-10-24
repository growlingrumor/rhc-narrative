/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-24T09:32:58.000Z",
    "opened_at": "2026-10-24T08:32:58.000Z",
    "window_hours": 1,
    "head_block": 96664471,
    "start_block": 96630432,
    "blocks_scanned": 34039,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 319,
    "unnamed_contracts": 0,
    "via_factory": 282,
    "no_receipt": 0,
    "candidates": 319,
    "mint_events": 10548,
    "deployers": 246,
    "roots": 412,
    "cleared_multiple": 412,
    "failed_gates": 401,
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
      "baby-moustache",
      "bitches-missed-ymb",
      "cumrocket",
      "nft",
      "positions",
      "uniswap-uni",
      "usdg"
    ],
    "top": {
      "root": "nft",
      "launches": 7,
      "deployers": 7,
      "baseline_share": 0.0004,
      "multiple": 54.9,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "nft",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 54.9,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 54.9,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "cumrocket",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 47,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 47,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 27,
        "deployers": 25,
        "baseline_share": 0.0004,
        "multiple": 211.6,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 81%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 22,
        "deployers": 21,
        "baseline_share": 0.0004,
        "multiple": 172.4,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 81%, merged to uniswap-uni"
      },
      {
        "root": "baby",
        "launches": 16,
        "deployers": 16,
        "baseline_share": 0.0004,
        "multiple": 125.4,
        "state": "MERGED",
        "reason": "baby + moustache co-occur 69%, merged to baby-moustache"
      },
      {
        "root": "moustache",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 86.2,
        "state": "MERGED",
        "reason": "baby + moustache co-occur 69%, merged to baby-moustache"
      },
      {
        "root": "bitches",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 70.5,
        "state": "MERGED",
        "reason": "bitches + missed co-occur 100%, merged to bitches-missed-ymb"
      },
      {
        "root": "missed",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 70.5,
        "state": "MERGED",
        "reason": "bitches + missed co-occur 100%, merged to bitches-missed-ymb"
      },
      {
        "root": "ymb",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 70.5,
        "state": "MERGED",
        "reason": "bitches + missed co-occur 100%, merged to bitches-missed-ymb"
      },
      {
        "root": "deposit",
        "launches": 7,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 54.9,
        "state": "THIN",
        "reason": "deposit: 3 deployers < 6 required"
      },
      {
        "root": "box",
        "launches": 6,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 47,
        "state": "THIN",
        "reason": "box: 2 deployers < 6 required"
      },
      {
        "root": "safety",
        "launches": 6,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 47,
        "state": "THIN",
        "reason": "safety: 2 deployers < 6 required"
      },
      {
        "root": "cca",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 39.2,
        "state": "THIN",
        "reason": "cca: 1 deployers < 6 required"
      },
      {
        "root": "hug",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 39.2,
        "state": "THIN",
        "reason": "hug: 5 deployers < 6 required"
      },
      {
        "root": "monkey",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 39.2,
        "state": "THIN",
        "reason": "monkey: 5 deployers < 6 required"
      },
      {
        "root": "ramses",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 39.2,
        "state": "THIN",
        "reason": "ramses: 3 deployers < 6 required"
      },
      {
        "root": "volatile",
        "launches": 5,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 39.2,
        "state": "THIN",
        "reason": "volatile: 2 deployers < 6 required"
      },
      {
        "root": "oct",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 31.3,
        "state": "THIN",
        "reason": "oct: 4 launches < 5 required"
      },
      {
        "root": "cash",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 23.5,
        "state": "THIN",
        "reason": "cash: 3 launches < 5 required"
      },
      {
        "root": "catpital",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 23.5,
        "state": "THIN",
        "reason": "catpital: 3 launches < 5 required"
      },
      {
        "root": "covara",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 23.5,
        "state": "THIN",
        "reason": "covara: 3 launches < 5 required"
      },
      {
        "root": "ember",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 23.5,
        "state": "THIN",
        "reason": "ember: 3 launches < 5 required"
      },
      {
        "root": "frog",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 23.5,
        "state": "THIN",
        "reason": "frog: 3 launches < 5 required"
      },
      {
        "root": "hoodlox",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 23.5,
        "state": "THIN",
        "reason": "hoodlox: 3 launches < 5 required"
      },
      {
        "root": "position",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 23.5,
        "state": "THIN",
        "reason": "position: 3 launches < 5 required"
      },
      {
        "root": "robinhood",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 23.5,
        "state": "THIN",
        "reason": "robinhood: 3 launches < 5 required"
      },
      {
        "root": "weth",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 23.5,
        "state": "THIN",
        "reason": "weth: 3 launches < 5 required"
      },
      {
        "root": "aero",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 15.7,
        "state": "THIN",
        "reason": "aero: 2 launches < 5 required"
      },
      {
        "root": "agents",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 15.7,
        "state": "THIN",
        "reason": "agents: 2 launches < 5 required"
      },
      {
        "root": "amm",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 15.7,
        "state": "THIN",
        "reason": "amm: 2 launches < 5 required"
      },
      {
        "root": "arcus",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 15.7,
        "state": "THIN",
        "reason": "arcus: 2 launches < 5 required"
      },
      {
        "root": "ascend",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 15.7,
        "state": "THIN",
        "reason": "ascend: 2 launches < 5 required"
      },
      {
        "root": "awards",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 15.7,
        "state": "THIN",
        "reason": "awards: 2 launches < 5 required"
      },
      {
        "root": "bd",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 15.7,
        "state": "THIN",
        "reason": "bd: 2 launches < 5 required"
      },
      {
        "root": "binzo",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 15.7,
        "state": "THIN",
        "reason": "binzo: 2 launches < 5 required"
      },
      {
        "root": "blackboard",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 15.7,
        "state": "THIN",
        "reason": "blackboard: 2 launches < 5 required"
      },
      {
        "root": "caretaker",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 15.7,
        "state": "THIN",
        "reason": "caretaker: 2 launches < 5 required"
      },
      {
        "root": "cat",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 15.7,
        "state": "THIN",
        "reason": "cat: 2 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0xf25b47b74084c521df8242af4963b9447398d617",
        "name": "Cumrocket",
        "symbol": "CUMROCKET",
        "deployer": "0xcfd737b84def5240270a8fee9b03c2d5d5c1e6bf",
        "block": 96664425,
        "ts": "2026-10-24T09:32:53.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x17ca67ae8a0f0efe55b58721114f908903a40c06",
        "name": "Wrapped Taiwan Semiconductor Manufacturing • Robinhood Token",
        "symbol": "wTSM",
        "deployer": "0x9efc87801ffb0b27766d6c568e3c0d76bd59d605",
        "block": 96664378,
        "ts": "2026-10-24T09:32:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8c4c128144485042dc76e83d9c3ab40ae4757777",
        "name": "Quill",
        "symbol": "QUILL",
        "deployer": "0xea5c98a6164850f6ace669bd753de6928881b65e",
        "block": 96664311,
        "ts": "2026-10-24T09:32:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x963b3c8c8f670895cdc466f34ec68eff2eee4038",
        "name": "scuttle",
        "symbol": "SCTTL",
        "deployer": "0x43370483638fd43f9a9ed2884c028bfa4e546ca5",
        "block": 96664210,
        "ts": "2026-10-24T09:32:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x227617909afda83eb0c9f0681c81ef33d8a5c46a",
        "name": "NeuroCoin",
        "symbol": "NC",
        "deployer": "0x4337016838785634c63fce393bfc6222564436c4",
        "block": 96663819,
        "ts": "2026-10-24T09:31:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xaef8c68c44f31ffea188d4e5468c4cb0046c76b4",
        "name": "THE MERGE",
        "symbol": "MERGE",
        "deployer": "0x0d1936e37d4f166ecf2d51d885720c7184d72a80",
        "block": 96663807,
        "ts": "2026-10-24T09:31:49.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x916cb9d1d377245a29d4b4a2c8110fac9458bad4",
        "name": "Florin Campaign Pass",
        "symbol": "FLO",
        "deployer": "0xc9a50f66a3da70009888c19ea1f3d76b8bcb3dd5",
        "block": 96663481,
        "ts": "2026-10-24T09:31:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x84b5382bd25f2c1c8d36feef42ceb1b36fbd2447",
        "name": "KURO",
        "symbol": "KURO",
        "deployer": "0x491e808a3b78f2dd79dcb8cd8e552a98ca2eca11",
        "block": 96663422,
        "ts": "2026-10-24T09:31:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd378c6ef16b1c417a009b56e9c08a8bb829d0281",
        "name": "VYRO The alien",
        "symbol": "VYRO",
        "deployer": "0x4337032d9c9291f05bebded166d947f22b25fa00",
        "block": 96663314,
        "ts": "2026-10-24T09:30:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8cbde53274831d32f714f8bea25ce58b0db85860",
        "name": "Darong",
        "symbol": "DARONG",
        "deployer": "0x43370188473a398394e4ba4a7c7cbb2c6265e22a",
        "block": 96662944,
        "ts": "2026-10-24T09:30:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5780338205f95738fa7e111cb270fda5d12fb53b",
        "name": "SPX6900",
        "symbol": "SPX",
        "deployer": "0xc6fe66b9076c9ef5ec2a0171011d63cabdf6845a",
        "block": 96662806,
        "ts": "2026-10-24T09:30:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x25c23ce2a8c14b140b43b047f16c86c5fced085b",
        "name": "Dripster",
        "symbol": "DRIPSTER",
        "deployer": "0xf680f69b7aa7f53cdc8b7da5592644eff833e299",
        "block": 96662695,
        "ts": "2026-10-24T09:29:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x85b15fe74dc385f90b22586a332e019a15e7775f",
        "name": "Jadebound",
        "symbol": "JADEBOUND",
        "deployer": "0x26e75c7ebef8893dd38acfbad86c1246717be6f3",
        "block": 96662668,
        "ts": "2026-10-24T09:29:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9d6cc665dccf031f2efd4e5ab1424e7473507777",
        "name": "Ascend",
        "symbol": "ASCEND",
        "deployer": "0x21853863aeec000ebfa52e46b366fdf2ac02ca6b",
        "block": 96662636,
        "ts": "2026-10-24T09:29:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa9244fe268d9ec4c0a26ca3ee026b8ea4d82c386",
        "name": "Ascend",
        "symbol": "Ascend",
        "deployer": "0x08903fd874be79ce5a8eaddec0c3ebe4a5f12b18",
        "block": 96662565,
        "ts": "2026-10-24T09:29:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7a9bba6f39e594dd531410048148adb37a561111",
        "name": "Coolcat",
        "symbol": "COOLCAT",
        "deployer": "0x948d5d6050f109c211e100577470bfb2afac2d2b",
        "block": 96662537,
        "ts": "2026-10-24T09:29:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xccc565c2d13f71f22d59aadd8e58e04dee7cd1d5",
        "name": "Predictor-882bd1b0",
        "symbol": "PRD-882bd1b0",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 96662509,
        "ts": "2026-10-24T09:29:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfc8dad39f4906cf2d32c5cb607508f4612f95acd",
        "name": "Counterparty-882bd1b0",
        "symbol": "CTR-882bd1b0",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 96662509,
        "ts": "2026-10-24T09:29:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf59449d2351151a0cd96296fac4cb01d284a2045",
        "name": "Dracula inu",
        "symbol": "DI",
        "deployer": "0x43370513f9a748ee8ee1cd856ea115756b8a7b5f",
        "block": 96662366,
        "ts": "2026-10-24T09:29:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb82c4d8358b7bf9ed0e5eb4e6dd23fa1e6b4ced4",
        "name": "Navy",
        "symbol": "NAVY",
        "deployer": "0x5fc5c2c34e685b4ec31b6439c463d279b27ac9d1",
        "block": 96662094,
        "ts": "2026-10-24T09:28:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x35501c0db74d15db509d1d483d07379b95b7ba51",
        "name": "Lawve",
        "symbol": "LAWVE",
        "deployer": "0x60119a76fd5fe6abc80906d832a4454e1608038b",
        "block": 96661932,
        "ts": "2026-10-24T09:28:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x95f56f261f158f08ce7b9aa57167cd093cc9091b",
        "name": "DRIP",
        "symbol": "DRIP",
        "deployer": "0x63921bdf9690a70b70b57c1e38fdf2b43299a749",
        "block": 96661808,
        "ts": "2026-10-24T09:28:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd54a8aeaa094fec569f75d77e8fdd5096e77b7c1",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x1ea9c077c861deb0a10c21807e4b8d00659e9de6",
        "block": 96661757,
        "ts": "2026-10-24T09:28:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0296cd2a66b6dc0546e9ac2af558aa0820ef4153",
        "name": "elephant",
        "symbol": "PHANT",
        "deployer": "0x43370240c309f6cc0815929a176609267971224f",
        "block": 96661757,
        "ts": "2026-10-24T09:28:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xba6f611b4264f3f2ba93a406445f75b11d09476e",
        "name": "Moustache Baby",
        "symbol": "Moustache",
        "deployer": "0xcd3d26bf4d506476967769571cfde7fb8fbebbec",
        "block": 96661733,
        "ts": "2026-10-24T09:28:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x24ed94b6931fe6b7713cbfa76b31d3d87d460e25",
        "name": "Moustache Baby",
        "symbol": "Moustache",
        "deployer": "0x2066b3f45195113c43ac7464032234eeb68ed80a",
        "block": 96661698,
        "ts": "2026-10-24T09:28:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc4a58f7d86844b6cd006f9ee41ecfb84f4ee7777",
        "name": "COREBASE",
        "symbol": "COREBASE",
        "deployer": "0xe26a8a93a803f6dcc9355da3beac69d733ddfd5d",
        "block": 96661354,
        "ts": "2026-10-24T09:27:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9e658a0fdd9324113eb1316fa6a09bd7971f2dce",
        "name": "Catpital",
        "symbol": "CATPITAL",
        "deployer": "0x4337fa4d86d4b6a2634900effb713bf6fb685835",
        "block": 96661344,
        "ts": "2026-10-24T09:27:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc8932eca9bb9861e9ebcce082a82240e734c2aac",
        "name": "dilithium",
        "symbol": "DLTHM",
        "deployer": "0xe004f1d61b656e5d2872fd0c77d4e7aa63d60754",
        "block": 96661215,
        "ts": "2026-10-24T09:27:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0538220bd41c9fd176392e0bd149808dc7c2881a",
        "name": "covara",
        "symbol": "CVR",
        "deployer": "0x948d5d6050f109c211e100577470bfb2afac2d2b",
        "block": 96661167,
        "ts": "2026-10-24T09:27:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2142b2e94b7ce0593557d673f911aaba65346bad",
        "name": "Monkey Hug",
        "symbol": "HUG",
        "deployer": "0x2792e33a37da16b2c99a92d94127a58ed4851761",
        "block": 96661048,
        "ts": "2026-10-24T09:26:55.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x07ac097e715c2c83a0c8b5ffd0b5efe7152b3dc0",
        "name": "Enzo",
        "symbol": "ENZO",
        "deployer": "0x87dbea9412eaeb434a67ed522ba0c9b0a15844ea",
        "block": 96661008,
        "ts": "2026-10-24T09:26:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x41fb5aef3cd6852dd05cbb3d2a2b24583a3cc822",
        "name": "Stufless",
        "symbol": "STUFLESS",
        "deployer": "0x4337b26ca98c42cd74672e06a033ac8cd1cd5da8",
        "block": 96661007,
        "ts": "2026-10-24T09:26:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x12400634931dff2d56b9d5414af4d48124e735e8",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xa474d6b3045a9ccec60c114903e06742a7c080d4",
        "block": 96660909,
        "ts": "2026-10-24T09:26:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2929d95c6c3460c9acc3bd635ed062dad92ab3d6",
        "name": "Cyber Panda",
        "symbol": "CPDX",
        "deployer": "0x1ea9c077c861deb0a10c21807e4b8d00659e9de6",
        "block": 96660890,
        "ts": "2026-10-24T09:26:39.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x7c1263767a82f76dc15d9c45ce0dc70c199411fb",
        "name": "TAPE",
        "symbol": "TAPE",
        "deployer": "0xf680f69b7aa7f53cdc8b7da5592644eff833e299",
        "block": 96660769,
        "ts": "2026-10-24T09:26:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6c363cf7c3f57c291521229ce806d7973b0812a2",
        "name": "Hunting meme",
        "symbol": "HMM",
        "deployer": "0x4337063e01d266b3aea4a4e91053025cbc8e3a73",
        "block": 96660582,
        "ts": "2026-10-24T09:26:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1bb3b9cf765cc3803d052652b15e4434304ebf51",
        "name": "Safety Deposit Box Smart LP PLTR/USDG Full Range",
        "symbol": "sdPLTR-FR",
        "deployer": "0xc199ffaedd24c4f86f4e1c45657dd33b533ba144",
        "block": 96660419,
        "ts": "2026-10-24T09:25:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x32df89855227f3c452bad64d7c3e0b8b12f25587",
        "name": "Cumrocket",
        "symbol": "CUMROCKET",
        "deployer": "0xa474d6b3045a9ccec60c114903e06742a7c080d4",
        "block": 96660245,
        "ts": "2026-10-24T09:25:32.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x65aea9e1ff91eb55ad5ac1d84d610d54dae16f52",
        "name": "Papero.fun",
        "symbol": "PAPERO",
        "deployer": "0x43370597af41d9345b1b91391849dcdb748c2838",
        "block": 96660153,
        "ts": "2026-10-24T09:25:23.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
