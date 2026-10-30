/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-30T00:18:05.000Z",
    "opened_at": "2026-10-29T23:18:05.000Z",
    "window_hours": 1,
    "head_block": 101309568,
    "start_block": 101274918,
    "blocks_scanned": 34650,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 464,
    "unnamed_contracts": 0,
    "via_factory": 425,
    "no_receipt": 0,
    "candidates": 464,
    "mint_events": 16938,
    "deployers": 284,
    "roots": 562,
    "cleared_multiple": 142,
    "failed_gates": 132,
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
      "beans",
      "cat",
      "nft",
      "positions",
      "robinhood",
      "safu-funds",
      "uniswap-uni",
      "usdg"
    ],
    "top": {
      "root": "robinhood",
      "launches": 22,
      "deployers": 9,
      "baseline_share": 0.0004,
      "multiple": 118.5,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "robinhood",
        "launches": 22,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 118.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 10,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 53.9,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 48.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nft",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 43.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "cat",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 37.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "beans",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 32.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "safu",
        "launches": 22,
        "deployers": 21,
        "baseline_share": 0.0004,
        "multiple": 118.5,
        "state": "MERGED",
        "reason": "safu + funds co-occur 91%, merged to safu-funds"
      },
      {
        "root": "funds",
        "launches": 20,
        "deployers": 19,
        "baseline_share": 0.0004,
        "multiple": 107.8,
        "state": "MERGED",
        "reason": "safu + funds co-occur 91%, merged to safu-funds"
      },
      {
        "root": "uniswap",
        "launches": 18,
        "deployers": 18,
        "baseline_share": 0.0004,
        "multiple": 97,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 78%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 14,
        "deployers": 14,
        "baseline_share": 0.0004,
        "multiple": 75.4,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 78%, merged to uniswap-uni"
      },
      {
        "root": "counterparty",
        "launches": 20,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 107.8,
        "state": "THIN",
        "reason": "counterparty: 1 deployers < 6 required"
      },
      {
        "root": "predictor",
        "launches": 20,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 107.8,
        "state": "THIN",
        "reason": "predictor: 1 deployers < 6 required"
      },
      {
        "root": "ctr",
        "launches": 17,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 91.6,
        "state": "THIN",
        "reason": "ctr: 1 deployers < 6 required"
      },
      {
        "root": "prd",
        "launches": 17,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 91.6,
        "state": "THIN",
        "reason": "prd: 1 deployers < 6 required"
      },
      {
        "root": "long",
        "launches": 8,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 43.1,
        "state": "THIN",
        "reason": "long: 5 deployers < 6 required"
      },
      {
        "root": "arcus",
        "launches": 5,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 26.9,
        "state": "THIN",
        "reason": "arcus: 2 deployers < 6 required"
      },
      {
        "root": "hood",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 26.9,
        "state": "THIN",
        "reason": "hood: 4 deployers < 6 required"
      },
      {
        "root": "imr",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 26.9,
        "state": "THIN",
        "reason": "imr: 5 deployers < 6 required"
      },
      {
        "root": "inverse",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 26.9,
        "state": "THIN",
        "reason": "inverse: 5 deployers < 6 required"
      },
      {
        "root": "mcrib",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 26.9,
        "state": "THIN",
        "reason": "mcrib: 5 deployers < 6 required"
      },
      {
        "root": "agent",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "agent: 4 launches < 5 required"
      },
      {
        "root": "ai",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "ai: 4 launches < 5 required"
      },
      {
        "root": "bear",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "bear: 4 launches < 5 required"
      },
      {
        "root": "chop",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "chop: 4 launches < 5 required"
      },
      {
        "root": "credit",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "credit: 4 launches < 5 required"
      },
      {
        "root": "cyberfine",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "cyberfine: 4 launches < 5 required"
      },
      {
        "root": "dc",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "dc: 4 launches < 5 required"
      },
      {
        "root": "me",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "me: 4 launches < 5 required"
      },
      {
        "root": "one",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "one: 4 launches < 5 required"
      },
      {
        "root": "trust",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "trust: 4 launches < 5 required"
      },
      {
        "root": "zero",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "zero: 4 launches < 5 required"
      },
      {
        "root": "amm",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "amm: 3 launches < 5 required"
      },
      {
        "root": "bad",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "bad: 3 launches < 5 required"
      },
      {
        "root": "bb",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "bb: 3 launches < 5 required"
      },
      {
        "root": "cannon",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "cannon: 3 launches < 5 required"
      },
      {
        "root": "cannonpad",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "cannonpad: 3 launches < 5 required"
      },
      {
        "root": "cashcat",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "cashcat: 3 launches < 5 required"
      },
      {
        "root": "deposit",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "deposit: 3 launches < 5 required"
      },
      {
        "root": "emperor",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "emperor: 3 launches < 5 required"
      },
      {
        "root": "exploiter",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "exploiter: 3 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x3ce0bb6c7733ffa6ff853928e7e9076a1fc1c224",
        "name": "Walt Disney",
        "symbol": "WALT",
        "deployer": "0xff0755563b64a76b6e6b2d10e3059a2a1369cdbf",
        "block": 101309535,
        "ts": "2026-10-30T00:18:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe7bd5a1f00ebb8c745770763b4eb426faeb10087",
        "name": "Zerobro",
        "symbol": "ZERO",
        "deployer": "0x378447d1bc980ff876557e4debebc99a050b73d9",
        "block": 101309099,
        "ts": "2026-10-30T00:17:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x29cdd55963019d58f6023c001c52f7e991052621",
        "name": "Ramses StableSwap - USDG/FANG",
        "symbol": "Stable - USDG/FANG",
        "deployer": "0x544d2120fa52e71e1048081e6df256b06e192f48",
        "block": 101309034,
        "ts": "2026-10-30T00:17:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x06420168ed7e368dd8dcb30c79cdd0d8f4ccb3e6",
        "name": "Paper",
        "symbol": "PAPER",
        "deployer": "0xc5a2795f791b644e43765d0e86a0061e0d6f6555",
        "block": 101309009,
        "ts": "2026-10-30T00:17:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcfd313dbe26ffa040c802bea2929fc0e5a59295e",
        "name": "The Black Bear",
        "symbol": "Bear",
        "deployer": "0xcacb5a7480299e5b5e232900c4073196dcc2a36f",
        "block": 101308883,
        "ts": "2026-10-30T00:16:50.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xad221259d4a1f2d7376dc1012c561bc86640f009",
        "name": "Meridian USD",
        "symbol": "merUSD",
        "deployer": "0x56c262027e0de4aea31d2489529cb25d23e58a8b",
        "block": 101308876,
        "ts": "2026-10-30T00:16:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x56c3e5822f62a0c41cd19093d7355ffc1a0312fb",
        "name": "Trust In Tether",
        "symbol": "TIT",
        "deployer": "0x43370350f0a1c28aba50545fb34722b06ae25627",
        "block": 101308736,
        "ts": "2026-10-30T00:16:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x184cbcdb3affecc6c1bca6b4354be3c7b9347777",
        "name": "FEDERAL TRUST OIL FUND FTOF",
        "symbol": "FOFT",
        "deployer": "0xea5c98a6164850f6ace669bd753de6928881b65e",
        "block": 101308467,
        "ts": "2026-10-30T00:15:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0b0deb0a10091739fec646cc1589bbb26fffdc1c",
        "name": "ROBINHOOD",
        "symbol": "ROBINHOOD",
        "deployer": "0x4337013ef5cd421cef649fc58c1b0defd37bbeb1",
        "block": 101308335,
        "ts": "2026-10-30T00:15:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8c62fbb3501dbb2728d52218d06d8cb3f9a839c3",
        "name": "Kings",
        "symbol": "KINGS",
        "deployer": "0x4337005db25dbad41da5692ba1188751ee5d98b6",
        "block": 101308267,
        "ts": "2026-10-30T00:15:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x62308869d6b1239f1cf3d8427c46b95fb2799757",
        "name": "WholeTest",
        "symbol": "WTs",
        "deployer": "0x8b2097efe422a646fc020a99ecaa039de082e1b2",
        "block": 101308259,
        "ts": "2026-10-30T00:15:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x48e39e56acdba37b09020c0b734a613c9a2f100a",
        "name": "Blackberry • Robinhood Token",
        "symbol": "BB",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 101307871,
        "ts": "2026-10-30T00:14:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x523dd0f6f3dfd68c9d86f2fadd87dea358d9ce02",
        "name": "HYPERCAT",
        "symbol": "HYPERCAT",
        "deployer": "0x4337013ef5cd421cef649fc58c1b0defd37bbeb1",
        "block": 101307838,
        "ts": "2026-10-30T00:14:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe60c1f5d9ba7f62a392a78472a3ab83dd62467a3",
        "name": "FUEL",
        "symbol": "FUEL",
        "deployer": "0x9ff00139d921e4b5dfac7a19d877225d2a5f99f7",
        "block": 101307621,
        "ts": "2026-10-30T00:14:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa26037ea3e49c3a7a8f63c2b27c1a85352031e18",
        "name": "SIN3-HDAC",
        "symbol": "SIN",
        "deployer": "0x7de5b9c86d2b47607a2962043bb165f7befeb06b",
        "block": 101307518,
        "ts": "2026-10-30T00:14:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5ab3d4c385b400f3abb49e80de2faf6a88a7b691",
        "name": "FLock.io",
        "symbol": "FLOCK",
        "deployer": "0xb68a3516ef5ed8bc6c176fb489c9375eba67757f",
        "block": 101307340,
        "ts": "2026-10-30T00:13:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x09de00e04e9b9e4e5ca5d668b44718e5a07165b3",
        "name": "Aqua Ai",
        "symbol": "AQUA",
        "deployer": "0x87df98a053b5808dd16f06b7af0b9416ecf66601",
        "block": 101307213,
        "ts": "2026-10-30T00:13:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x020b8cbd7eb1c4d9de2e548881fa85e8fadd9028",
        "name": "Binance Got Hacked",
        "symbol": "BINANCE",
        "deployer": "0x4671988c63f0b89a2304d44c8a36dae26b061eaa",
        "block": 101307198,
        "ts": "2026-10-30T00:13:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7b19388056cec8c9a97ef8ed136def708116211b",
        "name": "Hexncoin",
        "symbol": "HEXN",
        "deployer": "0x4337002c5702ce424cb62a56ca038e31e1d4a93d",
        "block": 101307194,
        "ts": "2026-10-30T00:13:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2dd29bdbc5032d2768853f12304459d557d913c0",
        "name": "Hood Bombers",
        "symbol": "BOMBERS",
        "deployer": "0xea209a4a5de9a8449a666c5f9fa43be7181600a9",
        "block": 101307096,
        "ts": "2026-10-30T00:13:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x825d86018f60348a84ae021ff3074998b8cc7777",
        "name": "God Emperor Of The United States",
        "symbol": "GOETUS",
        "deployer": "0x21853863aeec000ebfa52e46b366fdf2ac02ca6b",
        "block": 101306999,
        "ts": "2026-10-30T00:13:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe03f61d8a2ab56f7e15c749d2646f9d9703b7777",
        "name": "You Need Me",
        "symbol": "YNM",
        "deployer": "0x980b9bb5b3163638e0a35f8f26ff40547b16e2a9",
        "block": 101306967,
        "ts": "2026-10-30T00:13:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x925f92f055edb79c42b5d45e64a1b74143b90ea0",
        "name": "Arcus BTC (1x Long)",
        "symbol": "pBTC",
        "deployer": "0xb7410dc44e2715161e9914272e2d55d7c5061faa",
        "block": 101306903,
        "ts": "2026-10-30T00:13:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5aee1ba9b56236aa2673567dc76b4257ccc6bc0e",
        "name": "You Need Me",
        "symbol": "YNM",
        "deployer": "0xff9be0d2f3a1c0e763e2b13490eb021311b76684",
        "block": 101306889,
        "ts": "2026-10-30T00:13:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xca7a39ce9a45ff0a0f4d22d44f0de69e51124489",
        "name": "INDEX@ROBINHOOD",
        "symbol": "INDEX@ROBINHOOD",
        "deployer": "0xc5f9d6e5515821778e612538671b292a9eb3503e",
        "block": 101306561,
        "ts": "2026-10-30T00:12:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd1b0d44e4f6ed940fcc7a9f59bf30daf62ccfe3d",
        "name": "gitlawb",
        "symbol": "GITLAWB",
        "deployer": "0x0e183f1d7286cc260761d15fc07514a39b5a36c2",
        "block": 101306322,
        "ts": "2026-10-30T00:12:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfbe4dfa8e2cecb12dcec862dbb01743bd9015e2a",
        "name": "GIG",
        "symbol": "GIG",
        "deployer": "0x4337056764a16b490176ffb8df5027964a656ef9",
        "block": 101306295,
        "ts": "2026-10-30T00:12:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb39606e518421b7c936dc3634377930c65c24a2b",
        "name": "Mintegra Relic",
        "symbol": "MRELIC",
        "deployer": "0x429341e73ac88899f2dfae75c76b378611bde3eb",
        "block": 101306254,
        "ts": "2026-10-30T00:12:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9bc94e4350f7cf3414b0d7df82a339398ab51e18",
        "name": "God Emperor of The United States",
        "symbol": "GOETUS",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 101305890,
        "ts": "2026-10-30T00:11:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfeb0acc56870808bae5263d69a42ac2de4442916",
        "name": "Bye Nance Bye",
        "symbol": "BNB",
        "deployer": "0xec27b2e4be5e865241b4e88f2274c4b6b781ebea",
        "block": 101305878,
        "ts": "2026-10-30T00:11:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe38a007e42d7aab09b7ad5fe083293c2cc3de45b",
        "name": "Uniswap v4 Positions NFT",
        "symbol": "UNI-V4-POSM",
        "deployer": "0xec27b2e4be5e865241b4e88f2274c4b6b781ebea",
        "block": 101305878,
        "ts": "2026-10-30T00:11:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xface104b75be451f9aaa8040e4d47b23cbe23d3c",
        "name": "Hearsay",
        "symbol": "HRSY",
        "deployer": "0x1065a3e96104f9f415a0ead1b922f16b623a5f63",
        "block": 101305684,
        "ts": "2026-10-30T00:11:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7f518029d90a796af6fd66d4986f52a82f354148",
        "name": "SOON",
        "symbol": "SOON",
        "deployer": "0x433705768549b21d1e681fe454a7d2ff26a22e1c",
        "block": 101305655,
        "ts": "2026-10-30T00:11:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x144400e9c0b7b033153394258d2b6e9c637ce971",
        "name": "Index Basket 401k",
        "symbol": "IB-401k",
        "deployer": "0x19e5bc1b78b720971438b965ac70939fcdde4d84",
        "block": 101305612,
        "ts": "2026-10-30T00:11:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb2a5ccfd2df672e97ff1107e465bfbc392ba2d8e",
        "name": "Aetheryn V3",
        "symbol": "AETH3",
        "deployer": "0xe631b3e56d833cfc3da99d2da0c34bd206ba41ab",
        "block": 101305586,
        "ts": "2026-10-30T00:10:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xed2bf83eb80f7f81b5b430d1e427993bfaf41e18",
        "name": "God Emperor of The United States",
        "symbol": "GEOTUS",
        "deployer": "0xd20278dc748cfe4a381e8969751873f1ab80cce4",
        "block": 101305255,
        "ts": "2026-10-30T00:10:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcf57386d9340b3c36fe59e18205a8b65dd2eaf22",
        "name": "Sides.Swap",
        "symbol": "SIDES",
        "deployer": "0x433704940ad127f33b441418a3c17e4c47e45393",
        "block": 101305181,
        "ts": "2026-10-30T00:10:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x91d5d2c999c35ce061fd4967e6764cdd9cf1b3e1",
        "name": "Ixs Token",
        "symbol": "IXS",
        "deployer": "0x96111cc4867c5e1c22da4b79bb8852b9e2a07eb1",
        "block": 101305113,
        "ts": "2026-10-30T00:10:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1755c2910c126ee1b0cf1e08a307dc9e787285a0",
        "name": "1INCH Token",
        "symbol": "1INCH",
        "deployer": "0x96111cc4867c5e1c22da4b79bb8852b9e2a07eb1",
        "block": 101305108,
        "ts": "2026-10-30T00:10:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x520259be81b84af336f8c2ab7c2b7ac2529a1c66",
        "name": "Elo Pros Cards",
        "symbol": "CARD",
        "deployer": "0xb1ab332993d95795191d2a4bd3e3ecaa2331b0a7",
        "block": 101305009,
        "ts": "2026-10-30T00:10:01.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
