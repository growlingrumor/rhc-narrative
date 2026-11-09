/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-09T10:19:04.000Z",
    "opened_at": "2026-11-09T09:19:04.000Z",
    "window_hours": 1,
    "head_block": 109982191,
    "start_block": 109947442,
    "blocks_scanned": 34749,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 352,
    "unnamed_contracts": 9,
    "via_factory": 322,
    "no_receipt": 0,
    "candidates": 361,
    "mint_events": 12196,
    "deployers": 253,
    "roots": 464,
    "cleared_multiple": 294,
    "failed_gates": 289,
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
      "agi-artificial-girlfriend",
      "orbio",
      "space"
    ],
    "top": {
      "root": "orbio",
      "launches": 8,
      "deployers": 8,
      "baseline_share": 0.0029,
      "multiple": 7.8,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "orbio",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0029,
        "multiple": 7.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "space",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0022,
        "multiple": 7.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "agi",
        "launches": 12,
        "deployers": 12,
        "baseline_share": 0.0004,
        "multiple": 85.2,
        "state": "MERGED",
        "reason": "agi + artificial co-occur 100%, merged to agi-artificial-girlfriend"
      },
      {
        "root": "girlfriend",
        "launches": 12,
        "deployers": 12,
        "baseline_share": 0.0004,
        "multiple": 85.2,
        "state": "MERGED",
        "reason": "agi + artificial co-occur 100%, merged to agi-artificial-girlfriend"
      },
      {
        "root": "artificial",
        "launches": 12,
        "deployers": 12,
        "baseline_share": 0.001,
        "multiple": 34.1,
        "state": "MERGED",
        "reason": "agi + artificial co-occur 100%, merged to agi-artificial-girlfriend"
      },
      {
        "root": "uniswap",
        "launches": 31,
        "deployers": 29,
        "baseline_share": 0.0509,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "uniswap: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 28,
        "deployers": 26,
        "baseline_share": 0.0424,
        "multiple": 1.9,
        "state": "BELOW",
        "reason": "uni: 1.9x over baseline < 6.0x required"
      },
      {
        "root": "robinhood",
        "launches": 22,
        "deployers": 9,
        "baseline_share": 0.0513,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "robinhood: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "usdg",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0203,
        "multiple": 1.3,
        "state": "BELOW",
        "reason": "usdg: 1.3x over baseline < 6.0x required"
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
        "root": "inc",
        "launches": 6,
        "deployers": 5,
        "baseline_share": 0.0057,
        "multiple": 3,
        "state": "BELOW",
        "reason": "inc: 3.0x over baseline < 6.0x required"
      },
      {
        "root": "steve",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 35.5,
        "state": "THIN",
        "reason": "steve: 5 deployers < 6 required"
      },
      {
        "root": "ai",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0081,
        "multiple": 1.8,
        "state": "BELOW",
        "reason": "ai: 1.8x over baseline < 6.0x required"
      },
      {
        "root": "hood",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0108,
        "multiple": 1.3,
        "state": "BELOW",
        "reason": "hood: 1.3x over baseline < 6.0x required"
      },
      {
        "root": "nft",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0201,
        "multiple": 0.7,
        "state": "BELOW",
        "reason": "nft: 0.7x over baseline < 6.0x required"
      },
      {
        "root": "texel",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 28.4,
        "state": "THIN",
        "reason": "texel: 4 launches < 5 required"
      },
      {
        "root": "bucket",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0036,
        "multiple": 3.2,
        "state": "BELOW",
        "reason": "bucket: 3.2x over baseline < 6.0x required"
      },
      {
        "root": "layerbank",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0053,
        "multiple": 2.1,
        "state": "BELOW",
        "reason": "layerbank: 2.1x over baseline < 6.0x required"
      },
      {
        "root": "aero",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0056,
        "multiple": 2,
        "state": "BELOW",
        "reason": "aero: 2.0x over baseline < 6.0x required"
      },
      {
        "root": "cow",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0072,
        "multiple": 1.6,
        "state": "BELOW",
        "reason": "cow: 1.6x over baseline < 6.0x required"
      },
      {
        "root": "actuary",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.3,
        "state": "THIN",
        "reason": "actuary: 3 launches < 5 required"
      },
      {
        "root": "anchor",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.3,
        "state": "THIN",
        "reason": "anchor: 3 launches < 5 required"
      },
      {
        "root": "fishin",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.3,
        "state": "THIN",
        "reason": "fishin: 3 launches < 5 required"
      },
      {
        "root": "star",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0006,
        "multiple": 14.2,
        "state": "THIN",
        "reason": "star: 3 launches < 5 required"
      },
      {
        "root": "nvidia",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0019,
        "multiple": 4.5,
        "state": "BELOW",
        "reason": "nvidia: 4.5x over baseline < 6.0x required"
      },
      {
        "root": "crypto",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0022,
        "multiple": 3.9,
        "state": "BELOW",
        "reason": "crypto: 3.9x over baseline < 6.0x required"
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
        "root": "agents",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0025,
        "multiple": 3.4,
        "state": "BELOW",
        "reason": "agents: 3.4x over baseline < 6.0x required"
      },
      {
        "root": "brownfi",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0025,
        "multiple": 3.4,
        "state": "BELOW",
        "reason": "brownfi: 3.4x over baseline < 6.0x required"
      },
      {
        "root": "bf",
        "launches": 3,
        "deployers": 2,
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
        "multiple": 2.9,
        "state": "BELOW",
        "reason": "fund: 2.9x over baseline < 6.0x required"
      },
      {
        "root": "alandale",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0032,
        "multiple": 2.7,
        "state": "BELOW",
        "reason": "alandale: 2.7x over baseline < 6.0x required"
      },
      {
        "root": "credit",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0046,
        "multiple": 1.9,
        "state": "BELOW",
        "reason": "credit: 1.9x over baseline < 6.0x required"
      },
      {
        "root": "position",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0054,
        "multiple": 1.6,
        "state": "BELOW",
        "reason": "position: 1.6x over baseline < 6.0x required"
      },
      {
        "root": "amm",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0062,
        "multiple": 1.4,
        "state": "BELOW",
        "reason": "amm: 1.4x over baseline < 6.0x required"
      },
      {
        "root": "staked",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0069,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "staked: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "weth",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0073,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "weth: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "volatile",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0083,
        "multiple": 1,
        "state": "BELOW",
        "reason": "volatile: 1.0x over baseline < 6.0x required"
      },
      {
        "root": "cat",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.013,
        "multiple": 0.7,
        "state": "BELOW",
        "reason": "cat: 0.7x over baseline < 6.0x required"
      },
      {
        "root": "agentic",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 14.2,
        "state": "THIN",
        "reason": "agentic: 2 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0xde770c84fe66e063336b31737cfe9790f18c4087",
        "name": "Spark Savings USDG",
        "symbol": "spUSDG",
        "deployer": "0x2f67ef45744b3a024756073f1b95b26ca1a66a1d",
        "block": 109981939,
        "ts": "2026-11-09T10:18:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb06a7a96d7fbfdcc64aee0f0b185204b66e41b3b",
        "name": "Liquid Staked SLVR",
        "symbol": "liSLVR",
        "deployer": "0x64a3a58779ec866fc8909a246df5c33357d89e70",
        "block": 109981820,
        "ts": "2026-11-09T10:18:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0fccf3c634324a216e3a5d5b0e19c0a209498e00",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x7c26b4995ed035c6e65f87b43124bd055ba37a1f",
        "block": 109981734,
        "ts": "2026-11-09T10:18:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa9f6ff2571aca7580ac5c99cebf551299d05315c",
        "name": "Orbio Space",
        "symbol": "ORBIO",
        "deployer": "0x88f26ad345244ee351e65319d60162e8b311b5db",
        "block": 109981661,
        "ts": "2026-11-09T10:18:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x07933395ab7804ff7f2dd24049a35d85a4bb9e75",
        "name": "Artificial Girlfriend Inu",
        "symbol": "AGI",
        "deployer": "0x89c93a0874d68094372e52219d058d5b4191abf9",
        "block": 109981645,
        "ts": "2026-11-09T10:18:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3ae1f343a7fd3ba1597efc727c2f644ad6326224",
        "name": "Bagmon 🥚",
        "symbol": "BAGMON",
        "deployer": "0x4da09894b2ab3696451a2c30cf2be47675d42771",
        "block": 109981637,
        "ts": "2026-11-09T10:18:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc8227e243793ff07ec110d6298118b13f96996c9",
        "name": "Artificial Girlfriend Inu",
        "symbol": "AGI",
        "deployer": "0xcedba4ce00551b3efc0bf8630f6aa0b19d386eed",
        "block": 109981551,
        "ts": "2026-11-09T10:17:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2d5539cbf51d910817478900ba8d97e9818bc9b9",
        "name": "Commons",
        "symbol": "COMMONS",
        "deployer": "0x696b62ade4781edd9ad1816e41cc790f2b9035e8",
        "block": 109981533,
        "ts": "2026-11-09T10:17:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3b5c72aeab16aafe36e76a845eb5a9d2f2285ce1",
        "name": "HOOD NETWORK",
        "symbol": "Rh",
        "deployer": "0x1facd96a6afbee68dd30caea2259d21b363919f7",
        "block": 109981258,
        "ts": "2026-11-09T10:17:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x676b0842bd5830cb454bd55b34dac847b3d137ec",
        "name": "Peak Trending",
        "symbol": "PT",
        "deployer": "0x4b0b3f4160fe5d73e513b49a9460da3109728b2d",
        "block": 109981093,
        "ts": "2026-11-09T10:17:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9142174f141d0191348cf6f76fe7d67df7520dad",
        "name": "Star Cat",
        "symbol": "STARC",
        "deployer": "0x7c26b4995ed035c6e65f87b43124bd055ba37a1f",
        "block": 109980868,
        "ts": "2026-11-09T10:16:48.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xc1fedda82623f1fc62d020815f9fa1fd127bf32d",
        "name": "Hyper Flow",
        "symbol": "HFLOW",
        "deployer": "0x2df97339e1e42b331855abcf0a19c139da1c628f",
        "block": 109980573,
        "ts": "2026-11-09T10:16:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6aa3c7079deffe0e6af6ffaa1d0be94f99c291e2",
        "name": "Kant",
        "symbol": "KANT",
        "deployer": "0xa0ee7752294ecf19e5329fc9432658b55ea86659",
        "block": 109980546,
        "ts": "2026-11-09T10:16:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x416d0c4b431cfa33b4a4974e3dfc9f5089137148",
        "name": "ARROWFARM",
        "symbol": "ARROWFARM",
        "deployer": "0xd6b9eb8ea3c45dedcf55c9910225acf45cf9c6ba",
        "block": 109980399,
        "ts": "2026-11-09T10:15:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x500855ca9f281a1383482399addd1651269bb866",
        "name": "Called It",
        "symbol": "CALLED",
        "deployer": "0x0527425cdd726136bf0773c4178238833ea56b44",
        "block": 109980274,
        "ts": "2026-11-09T10:15:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4a4743a8bcfec36c5ab0b43fe4e636ace0b35a8f",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x1fe0ca909e5699d0bf31360924f28b1f23889d48",
        "block": 109980204,
        "ts": "2026-11-09T10:15:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdaeeeb48ebdebaddf56bd1ad618d335c93155dd4",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xf2784747b0de8f02dc1b004468911a94939f149a",
        "block": 109980141,
        "ts": "2026-11-09T10:15:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x59b0dd9c12b66e09d893cbc8d4ff75047bd02047",
        "name": "scamsem",
        "symbol": "scamsem",
        "deployer": "0xf2784747b0de8f02dc1b004468911a94939f149a",
        "block": 109979986,
        "ts": "2026-11-09T10:15:16.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x11608b10ca817d4199475224b2c6c9365d7c002f",
        "name": "Skel Coin",
        "symbol": "SKEL",
        "deployer": "0xf9bd647059ad3f838132f42bfa03b6608f1b2e19",
        "block": 109979898,
        "ts": "2026-11-09T10:15:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x040585d052d6cb75783fabdfcd09005d7f5436d5",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x06b140f7a0adc7df0940d55016be8f203ef11229",
        "block": 109979780,
        "ts": "2026-11-09T10:14:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9864615f64b0f5f910d5ec2f566197a7ea29a386",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x06b140f7a0adc7df0940d55016be8f203ef11229",
        "block": 109979780,
        "ts": "2026-11-09T10:14:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x181289793a97ae5a6aae3e68e40632d36b8db2f2",
        "name": "Artificial Girlfriend Inu",
        "symbol": "AGI",
        "deployer": "0xef8ea37a825d9c1817487b48dc5c4a795e73997e",
        "block": 109979776,
        "ts": "2026-11-09T10:14:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5ba977212012f9e6ac55d3e51018914a3bf04897",
        "name": "Kant",
        "symbol": "KANT",
        "deployer": "0xfb328286be3cb89909e713d646ddab8e0cc63f52",
        "block": 109979762,
        "ts": "2026-11-09T10:14:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfcc0fbf70e97b1d554f459c12a902599222e1491",
        "name": "Rocket Coin",
        "symbol": "ROCKET",
        "deployer": "0x17bb3f846ef1dd12d42a25475f75f2225f24039b",
        "block": 109979597,
        "ts": "2026-11-09T10:14:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0c7facc121ae5089ddf99dea8f868fc2f59b3e44",
        "name": "Elysium",
        "symbol": "ELYSIUM",
        "deployer": "0x4323bd1234df9bcd3d3c65a690915ebd64a65a1b",
        "block": 109979539,
        "ts": "2026-11-09T10:14:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xec90ea27972975ac4c402c61263d67484dc7ee38",
        "name": "Zombie Cat",
        "symbol": "ZCAT",
        "deployer": "0x1fe0ca909e5699d0bf31360924f28b1f23889d48",
        "block": 109979339,
        "ts": "2026-11-09T10:14:09.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xecc19cdf61dfd6fe75154649b456f7185de9ccef",
        "name": "Genius",
        "symbol": "GENIUS",
        "deployer": "0x501c4611f248aea0bdd421e2cf4f38d3419349ed",
        "block": 109979304,
        "ts": "2026-11-09T10:14:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb0f17be3bb672d6bd7b2dcd06d9115b5a7b26b38",
        "name": "Mr Bone",
        "symbol": "bone",
        "deployer": "0x0fab11d6f009aa6a837bf781eccc25bee0e6df42",
        "block": 109979172,
        "ts": "2026-11-09T10:13:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc8631749287a507b0a9cc10477d0e3408c0af90a",
        "name": "Opsin",
        "symbol": "OPSINN",
        "deployer": "0x9ed27fd78e3f24e1f5774a2e4b0c3e34b19d7cb8",
        "block": 109979083,
        "ts": "2026-11-09T10:13:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x55e193514a7aa81e7823b8de581a09f9cfdb28dd",
        "name": "Banana (MemeFI)",
        "symbol": "BananaMemeFi",
        "deployer": "0x08a8aa8e9e6f6ee85c2645d6756d479047d3b09b",
        "block": 109978899,
        "ts": "2026-11-09T10:13:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5b76cd0dd0760ebe48453951bbd0d7ac3192dd78",
        "name": "Markets.xyz",
        "symbol": "MARKETSXYZ",
        "deployer": "0x8c50c565fe371edc7fdb5fb7c135b16d719228c5",
        "block": 109978875,
        "ts": "2026-11-09T10:13:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xab46ca818738fc4a60903f2f1736eb1772c71af3",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x9ad5813a7f406eb6963813914e362a86bea20284",
        "block": 109978852,
        "ts": "2026-11-09T10:13:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8f43d94366e7a0ef340c32b33cddb6fd6b1ca45d",
        "name": "Effective Accelerationism",
        "symbol": "E/ACC",
        "deployer": "0x9ad5813a7f406eb6963813914e362a86bea20284",
        "block": 109978731,
        "ts": "2026-11-09T10:13:06.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x22fc6b32584f0cfa26eccef050b3196bde4490c7",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x5b6d3aa201d2d2017b015c6522c6e09f95e5eaef",
        "block": 109978636,
        "ts": "2026-11-09T10:12:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdd186f5c08b96e3a2ee510a4ba289243d5bdd75b",
        "name": "Opsin",
        "symbol": "OPSIN",
        "deployer": "0xd9c37eeea0a02f66eecd3bb3b38c8888a863a55a",
        "block": 109978405,
        "ts": "2026-11-09T10:12:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x45998617b2e537cad74de96ff06bff343e69315c",
        "name": "Orbio Space",
        "symbol": "ORBIO",
        "deployer": "0x40041a00bb5aa220e9ab1b1bb3eec668b5c68a75",
        "block": 109978371,
        "ts": "2026-11-09T10:12:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4cdd271eaace3c221609cdcf9c5a5a4a6aecf3eb",
        "name": "大火箭",
        "symbol": "大火箭",
        "deployer": "0x17bb3f846ef1dd12d42a25475f75f2225f24039b",
        "block": 109978311,
        "ts": "2026-11-09T10:12:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x13c6ddc8af7f86d2acc6c52f2dc193b16b0ff354",
        "name": "Fubis",
        "symbol": "FUBIS",
        "deployer": "0x36a1d20406c522bd8f142b3c791ac5e6e1136977",
        "block": 109978291,
        "ts": "2026-11-09T10:12:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcd91353d30d2ade1cc01c6d8c73b7a56bae11b76",
        "name": "Gta6",
        "symbol": "GTA6",
        "deployer": "0x9f6ed4a9e2ae1623dfcea2569d5780ee68f27ead",
        "block": 109977938,
        "ts": "2026-11-09T10:11:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe38a007e42d7aab09b7ad5fe083293c2cc3de45b",
        "name": "Uniswap v4 Positions NFT",
        "symbol": "UNI-V4-POSM",
        "deployer": "0x9f6ed4a9e2ae1623dfcea2569d5780ee68f27ead",
        "block": 109977938,
        "ts": "2026-11-09T10:11:44.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
