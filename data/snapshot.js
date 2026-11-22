/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-22T08:45:02.000Z",
    "opened_at": "2026-11-22T07:45:02.000Z",
    "window_hours": 1,
    "head_block": 120508080,
    "start_block": 120477223,
    "blocks_scanned": 30857,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 190,
    "unnamed_contracts": 0,
    "via_factory": 168,
    "no_receipt": 0,
    "candidates": 190,
    "mint_events": 9381,
    "deployers": 131,
    "roots": 268,
    "cleared_multiple": 176,
    "failed_gates": 174,
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
      "case-casebook"
    ],
    "top": null,
    "rows": [
      {
        "root": "case",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 131.6,
        "state": "MERGED",
        "reason": "case + casebook co-occur 100%, merged to case-casebook"
      },
      {
        "root": "casebook",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 131.6,
        "state": "MERGED",
        "reason": "case + casebook co-occur 100%, merged to case-casebook"
      },
      {
        "root": "usdg",
        "launches": 17,
        "deployers": 11,
        "baseline_share": 0.0203,
        "multiple": 4.4,
        "state": "BELOW",
        "reason": "usdg: 4.4x over baseline < 6.0x required"
      },
      {
        "root": "uniswap",
        "launches": 14,
        "deployers": 12,
        "baseline_share": 0.0509,
        "multiple": 1.4,
        "state": "BELOW",
        "reason": "uniswap: 1.4x over baseline < 6.0x required"
      },
      {
        "root": "tdsu",
        "launches": 10,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 131.6,
        "state": "THIN",
        "reason": "tdsu: 2 deployers < 6 required"
      },
      {
        "root": "uni",
        "launches": 10,
        "deployers": 8,
        "baseline_share": 0.0424,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "uni: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0167,
        "multiple": 2.2,
        "state": "BELOW",
        "reason": "positions: 2.2x over baseline < 6.0x required"
      },
      {
        "root": "nft",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0201,
        "multiple": 1.8,
        "state": "BELOW",
        "reason": "nft: 1.8x over baseline < 6.0x required"
      },
      {
        "root": "aero",
        "launches": 6,
        "deployers": 3,
        "baseline_share": 0.0056,
        "multiple": 5.6,
        "state": "BELOW",
        "reason": "aero: 5.6x over baseline < 6.0x required"
      },
      {
        "root": "cow",
        "launches": 6,
        "deployers": 1,
        "baseline_share": 0.0072,
        "multiple": 4.4,
        "state": "BELOW",
        "reason": "cow: 4.4x over baseline < 6.0x required"
      },
      {
        "root": "robinhood",
        "launches": 6,
        "deployers": 3,
        "baseline_share": 0.0513,
        "multiple": 0.6,
        "state": "BELOW",
        "reason": "robinhood: 0.6x over baseline < 6.0x required"
      },
      {
        "root": "layerbank",
        "launches": 5,
        "deployers": 2,
        "baseline_share": 0.0053,
        "multiple": 5,
        "state": "BELOW",
        "reason": "layerbank: 5.0x over baseline < 6.0x required"
      },
      {
        "root": "amm",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0062,
        "multiple": 3.4,
        "state": "BELOW",
        "reason": "amm: 3.4x over baseline < 6.0x required"
      },
      {
        "root": "weth",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0073,
        "multiple": 2.9,
        "state": "BELOW",
        "reason": "weth: 2.9x over baseline < 6.0x required"
      },
      {
        "root": "volatile",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0083,
        "multiple": 2.5,
        "state": "BELOW",
        "reason": "volatile: 2.5x over baseline < 6.0x required"
      },
      {
        "root": "brownfi",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0025,
        "multiple": 6.3,
        "state": "THIN",
        "reason": "brownfi: 3 launches < 5 required"
      },
      {
        "root": "bf",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0027,
        "multiple": 5.8,
        "state": "BELOW",
        "reason": "bf: 5.8x over baseline < 6.0x required"
      },
      {
        "root": "alandale",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0032,
        "multiple": 4.9,
        "state": "BELOW",
        "reason": "alandale: 4.9x over baseline < 6.0x required"
      },
      {
        "root": "reward",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0037,
        "multiple": 4.3,
        "state": "BELOW",
        "reason": "reward: 4.3x over baseline < 6.0x required"
      },
      {
        "root": "position",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0054,
        "multiple": 2.9,
        "state": "BELOW",
        "reason": "position: 2.9x over baseline < 6.0x required"
      },
      {
        "root": "hood",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0108,
        "multiple": 1.5,
        "state": "BELOW",
        "reason": "hood: 1.5x over baseline < 6.0x required"
      },
      {
        "root": "bobo",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 26.3,
        "state": "THIN",
        "reason": "bobo: 2 launches < 5 required"
      },
      {
        "root": "panda",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 26.3,
        "state": "THIN",
        "reason": "panda: 2 launches < 5 required"
      },
      {
        "root": "chimps",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0005,
        "multiple": 21.1,
        "state": "THIN",
        "reason": "chimps: 2 launches < 5 required"
      },
      {
        "root": "president",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0005,
        "multiple": 21.1,
        "state": "THIN",
        "reason": "president: 2 launches < 5 required"
      },
      {
        "root": "vice",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0005,
        "multiple": 21.1,
        "state": "THIN",
        "reason": "vice: 2 launches < 5 required"
      },
      {
        "root": "awards",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0013,
        "multiple": 8.1,
        "state": "THIN",
        "reason": "awards: 2 launches < 5 required"
      },
      {
        "root": "beta",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0022,
        "multiple": 4.8,
        "state": "BELOW",
        "reason": "beta: 4.8x over baseline < 6.0x required"
      },
      {
        "root": "variable",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0024,
        "multiple": 4.4,
        "state": "BELOW",
        "reason": "variable: 4.4x over baseline < 6.0x required"
      },
      {
        "root": "vault",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0024,
        "multiple": 4.4,
        "state": "BELOW",
        "reason": "vault: 4.4x over baseline < 6.0x required"
      },
      {
        "root": "bot",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0025,
        "multiple": 4.2,
        "state": "BELOW",
        "reason": "bot: 4.2x over baseline < 6.0x required"
      },
      {
        "root": "rh",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0036,
        "multiple": 2.9,
        "state": "BELOW",
        "reason": "rh: 2.9x over baseline < 6.0x required"
      },
      {
        "root": "slipstream",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0039,
        "multiple": 2.7,
        "state": "BELOW",
        "reason": "slipstream: 2.7x over baseline < 6.0x required"
      },
      {
        "root": "giga",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0041,
        "multiple": 2.6,
        "state": "BELOW",
        "reason": "giga: 2.6x over baseline < 6.0x required"
      },
      {
        "root": "slvr",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0041,
        "multiple": 2.6,
        "state": "BELOW",
        "reason": "slvr: 2.6x over baseline < 6.0x required"
      },
      {
        "root": "pos",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0044,
        "multiple": 2.4,
        "state": "BELOW",
        "reason": "pos: 2.4x over baseline < 6.0x required"
      },
      {
        "root": "pangea",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0046,
        "multiple": 2.3,
        "state": "BELOW",
        "reason": "pangea: 2.3x over baseline < 6.0x required"
      },
      {
        "root": "staked",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0069,
        "multiple": 1.5,
        "state": "BELOW",
        "reason": "staked: 1.5x over baseline < 6.0x required"
      },
      {
        "root": "ai",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0081,
        "multiple": 1.3,
        "state": "BELOW",
        "reason": "ai: 1.3x over baseline < 6.0x required"
      },
      {
        "root": "cat",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.013,
        "multiple": 0.8,
        "state": "BELOW",
        "reason": "cat: 0.8x over baseline < 6.0x required"
      }
    ],
    "recent": [
      {
        "address": "0x80b2319cc9c9434ca4fe1fa0e0ef84878c74201f",
        "name": "The Squad",
        "symbol": ".",
        "deployer": "0x5a51d26722c28f62328b49c3c35cec6ddb03c34e",
        "block": 120508035,
        "ts": "2026-11-22T08:44:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb3f0b0cd38eb4d25c6518aa6c13e5eb633d90087",
        "name": "This fish sucks",
        "symbol": "$Lamprey",
        "deployer": "0xd4875af0ae4491868c1ad20c752232a6b54a3568",
        "block": 120508002,
        "ts": "2026-11-22T08:44:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0ef148bc47b18e5c93314da76931860175d4bc2e",
        "name": "StonkBroker Accounts",
        "symbol": "SBACCT",
        "deployer": "0xc54132d088b3ee02fd77c5003bef7e9b36d17cc0",
        "block": 120507616,
        "ts": "2026-11-22T08:44:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2ea375c2ed811a9cfc3ba23eefa4599f120e430d",
        "name": "‎‮TDSU",
        "symbol": "‎‮TDSU",
        "deployer": "0x3bc80e4278e52f3eb8b1a63c61d01272c246e5fd",
        "block": 120507288,
        "ts": "2026-11-22T08:43:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8da184498f89f4d78330b1d04dc640ae131ed62c",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x3c6a1711d1ed84663f896e8a6a7ab2eb4861984b",
        "block": 120507223,
        "ts": "2026-11-22T08:43:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x06e10a833c2447ba5ec840fb80c64eb099976d1e",
        "name": "MEMO",
        "symbol": "MEMO",
        "deployer": "0x6866a6a28129839f67da069ceb68ad258830363e",
        "block": 120506942,
        "ts": "2026-11-22T08:42:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x64c89b811d5a4a4679cabce7d73198ab4d340c30",
        "name": "Casebook",
        "symbol": "CASE",
        "deployer": "0x7dbbe4367654cc3f1ca49b5d12a646608cbfd6a7",
        "block": 120506805,
        "ts": "2026-11-22T08:42:43.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xc27e13051340f51cf7ee281e3daf57e5e18fcef7",
        "name": "Giga Volatile AMM - evaUSDC/RVH",
        "symbol": "GIGA-vAMM-evaUSDC/RVH",
        "deployer": "0x734c6d8ad360dee39a72f63641da9574e1421396",
        "block": 120506635,
        "ts": "2026-11-22T08:42:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfde0473d3a9acc1a2d941dfe76d83110e78b1e18",
        "name": "Vice City Butcher",
        "symbol": "AUNTIRAF",
        "deployer": "0xd20278dc748cfe4a381e8969751873f1ab80cce4",
        "block": 120506622,
        "ts": "2026-11-22T08:42:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x193078f042d7c8898c3ddf481b9e26fae3e9b02e",
        "name": "Flock Lend Borrowable",
        "symbol": "bFLOCK",
        "deployer": "0x097ba31b7acffd75b909fc7bef2e55424d2dacdc",
        "block": 120506541,
        "ts": "2026-11-22T08:42:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb2babc4731c9bc67c40105ac6dae07757d3f4364",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x3c6a1711d1ed84663f896e8a6a7ab2eb4861984b",
        "block": 120506240,
        "ts": "2026-11-22T08:41:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x36d45ed3239f6e9ab0b4a94cbbbb00652e699e34",
        "name": "MUSIG",
        "symbol": "MUSIG",
        "deployer": "0x045be351da25ea1ef11e553a689a9c276fdce80b",
        "block": 120506134,
        "ts": "2026-11-22T08:41:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x48f08a5cef81ba1bf1172ce8614a69835706d8b3",
        "name": "Cow Aero USDG-WETH",
        "symbol": "cowAeroUSDG-WETH",
        "deployer": "0x03d9964f4d93a24b58c0fc3a8df3474b59ba8557",
        "block": 120505950,
        "ts": "2026-11-22T08:41:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3b1a5484c74975f9fea6fdb450f0de6585b3926d",
        "name": "Reward Cow Aero USDG-WETH",
        "symbol": "rcowAeroUSDG-WETH",
        "deployer": "0x03d9964f4d93a24b58c0fc3a8df3474b59ba8557",
        "block": 120505950,
        "ts": "2026-11-22T08:41:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd6adce5eac5f40d29e2101436c38cf1cee8f4856",
        "name": "Bridged HYPE",
        "symbol": "HYPE",
        "deployer": "0x2858e8628327ab695bb751a328cfb3d5dfd762f4",
        "block": 120505640,
        "ts": "2026-11-22T08:40:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0ad393897758ad1c0ee9e8fc029c6c33f4624173",
        "name": "Liqora Finance",
        "symbol": "LIQORA",
        "deployer": "0x4c4d2159d78478164241548fd9f280020805e7f8",
        "block": 120505586,
        "ts": "2026-11-22T08:40:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8697bb63743678640710b1270e98772a29642b3c",
        "name": "Volatile AMM - WETH/UP",
        "symbol": "vAMM-WETH/UP",
        "deployer": "0x1f07ed80ec4074cf68a544e7049457e531cc5580",
        "block": 120505573,
        "ts": "2026-11-22T08:40:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x778e4702e285d94ef0f32fbf5ed0ac455aec1b30",
        "name": "BUCK_USDG",
        "symbol": "BUCK_USDG",
        "deployer": "0xdf56df34749c43ffa6df08f7281d7d985135f4b1",
        "block": 120505514,
        "ts": "2026-11-22T08:40:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3d78de6fbc28489a4ca61e411e1baa82124ee7c0",
        "name": "HAAS_USDG",
        "symbol": "HAAS_USDG",
        "deployer": "0xdf56df34749c43ffa6df08f7281d7d985135f4b1",
        "block": 120505514,
        "ts": "2026-11-22T08:40:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5f582da15ae8cbea94327d45ce5a8f8f0e24c5a9",
        "name": "SROUJI_USDG",
        "symbol": "SROUJI_USDG",
        "deployer": "0xdf56df34749c43ffa6df08f7281d7d985135f4b1",
        "block": 120505514,
        "ts": "2026-11-22T08:40:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1f056f8882cd64fd7b9d53b112fd1dac36e4d9e6",
        "name": "KRESS_USDG",
        "symbol": "KRESS_USDG",
        "deployer": "0xdf56df34749c43ffa6df08f7281d7d985135f4b1",
        "block": 120505514,
        "ts": "2026-11-22T08:40:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7dccacec4496a0c6359b283a0a99c65d2057a1ae",
        "name": "JENSEN_USDG",
        "symbol": "JENSEN_USDG",
        "deployer": "0xdf56df34749c43ffa6df08f7281d7d985135f4b1",
        "block": 120505514,
        "ts": "2026-11-22T08:40:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa9ea01733ed9a2339ed8954ded99f3b18f6250e7",
        "name": "NONE_USDG",
        "symbol": "NONE_USDG",
        "deployer": "0xdf56df34749c43ffa6df08f7281d7d985135f4b1",
        "block": 120505514,
        "ts": "2026-11-22T08:40:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x015b88f4a443d37b41bc65aeeee5c1c8bad84746",
        "name": "OTHER_USDG",
        "symbol": "OTHER_USDG",
        "deployer": "0xdf56df34749c43ffa6df08f7281d7d985135f4b1",
        "block": 120505514,
        "ts": "2026-11-22T08:40:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf1d9b0373dc90e21e3c1479da4ca189f4645fb69",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xe819af81b978d1a6488cf7eec4d4507d4734ae56",
        "block": 120505406,
        "ts": "2026-11-22T08:40:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x17cb4a4c8bbf313e5716cffe7d96697aaa76a0ae",
        "name": "ZON",
        "symbol": "ZON",
        "deployer": "0xe819af81b978d1a6488cf7eec4d4507d4734ae56",
        "block": 120505354,
        "ts": "2026-11-22T08:40:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x73268b76959150542e15367c00ca0800d9a7c0bb",
        "name": "Antropic Agent Bot",
        "symbol": "ANTAG",
        "deployer": "0x643df4e99bab458d83c231b7a0f9cf348f538a1b",
        "block": 120504550,
        "ts": "2026-11-22T08:38:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa19091c45cf6394b099570c30fca4edbbd060f16",
        "name": "Nexus Core",
        "symbol": "GOLD",
        "deployer": "0xd53f33e05f733a43858a0634f6976a0518d66732",
        "block": 120504244,
        "ts": "2026-11-22T08:38:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x15a5dd33328f391ced235e7fa8a6c229ad8bbf69",
        "name": "Book Operator",
        "symbol": "BOOK-OP",
        "deployer": "0xd53f33e05f733a43858a0634f6976a0518d66732",
        "block": 120504115,
        "ts": "2026-11-22T08:38:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4a35a5ec2a50a4d2957b2f2366e017f526cab318",
        "name": "Foundry Compute Dollar",
        "symbol": "USDF",
        "deployer": "0xc1f3547241fe1bc7cb4fb943c67ef5d0263da352",
        "block": 120503847,
        "ts": "2026-11-22T08:37:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4dc247a7af788cb77c643d39324f5eefd7e2853c",
        "name": "Forager Rails",
        "symbol": "FORAG",
        "deployer": "0xd62672d2371aa54aefe16111caa2638bd8ce27b3",
        "block": 120503823,
        "ts": "2026-11-22T08:37:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbad35ce123ffafc45ebcc271a041c8f9dec50087",
        "name": "GRINCHNIGGA",
        "symbol": "GRINCHNIGG",
        "deployer": "0xd9b27095395ab95509657887eaaf1131f0ba6355",
        "block": 120503189,
        "ts": "2026-11-22T08:36:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc904557ea233078fc0cdb87a3d18a38ae518822e",
        "name": "AI CHIPS ARC",
        "symbol": "CHIPS",
        "deployer": "0x4337002c5702ce424cb62a56ca038e31e1d4a93d",
        "block": 120502888,
        "ts": "2026-11-22T08:35:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x74be72affafbc8de30f0c11247814036314d625f",
        "name": "Pudgy Penguins",
        "symbol": "PENGU",
        "deployer": "0x0e183f1d7286cc260761d15fc07514a39b5a36c2",
        "block": 120502507,
        "ts": "2026-11-22T08:35:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x98996fb32d261c8eac56ccc7b3195628b1a83d0b",
        "name": "Memory Chain",
        "symbol": "MEMORY",
        "deployer": "0xa79a5a730dfab849a4ad7c61bc0c04f81ae293e8",
        "block": 120502093,
        "ts": "2026-11-22T08:34:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5254034dd94ad458ee6675d1d8b5a35c1411a1d1",
        "name": "AI CHIP",
        "symbol": "CHIP",
        "deployer": "0x4337005db25dbad41da5692ba1188751ee5d98b6",
        "block": 120502048,
        "ts": "2026-11-22T08:34:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x87086329b677c94df4da5dfe9a8da90c73c535bf",
        "name": "Volatile AMM - UP/USDG",
        "symbol": "vAMM-UP/USDG",
        "deployer": "0x1f07ed80ec4074cf68a544e7049457e531cc5580",
        "block": 120499929,
        "ts": "2026-11-22T08:30:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x73356115c1a873518c81e21cec4e3d946c11fa5d",
        "name": "VICE PRESIDENT",
        "symbol": "VICE",
        "deployer": "0x4337001fff419768e088ce247456c1b892888084",
        "block": 120499748,
        "ts": "2026-11-22T08:30:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x325220017a955a9d5fc869a62f361049404536de",
        "name": "Uniswap V3 Positions NFT-V1",
        "symbol": "UNI-V3-POS",
        "deployer": "0x43d5da53802cd85e644b2bfc9cd6a54c6216b6c6",
        "block": 120499682,
        "ts": "2026-11-22T08:30:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd04d8f42f5a0d04b77f7806171400839f9701f9a",
        "name": "Chrome Squirrel",
        "symbol": "CHRM",
        "deployer": "0xa3af060b6b7140866211c4d7ab608cede8432c70",
        "block": 120499356,
        "ts": "2026-11-22T08:29:54.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
