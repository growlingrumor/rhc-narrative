/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-23T00:53:07.000Z",
    "opened_at": "2026-10-22T23:53:07.000Z",
    "window_hours": 1,
    "head_block": 95540849,
    "start_block": 95506287,
    "blocks_scanned": 34562,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 391,
    "unnamed_contracts": 0,
    "via_factory": 373,
    "no_receipt": 0,
    "candidates": 391,
    "mint_events": 13643,
    "deployers": 280,
    "roots": 529,
    "cleared_multiple": 529,
    "failed_gates": 516,
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
      "agent",
      "mcrib-indicator",
      "nft",
      "positions",
      "rex",
      "robinhood",
      "sleeved",
      "uniswap-uni",
      "usdg",
      "warhound-wrhnd"
    ],
    "top": {
      "root": "robinhood",
      "launches": 12,
      "deployers": 9,
      "baseline_share": 0.0004,
      "multiple": 76.7,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "robinhood",
        "launches": 12,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 76.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 11,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 70.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "agent",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 57.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "sleeved",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 57.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "rex",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 44.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nft",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 38.4,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 38.4,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "mcrib",
        "launches": 16,
        "deployers": 16,
        "baseline_share": 0.0004,
        "multiple": 102.3,
        "state": "MERGED",
        "reason": "mcrib + indicator co-occur 94%, merged to mcrib-indicator"
      },
      {
        "root": "uniswap",
        "launches": 16,
        "deployers": 14,
        "baseline_share": 0.0004,
        "multiple": 102.3,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 88%, merged to uniswap-uni"
      },
      {
        "root": "indicator",
        "launches": 15,
        "deployers": 15,
        "baseline_share": 0.0004,
        "multiple": 95.9,
        "state": "MERGED",
        "reason": "mcrib + indicator co-occur 94%, merged to mcrib-indicator"
      },
      {
        "root": "uni",
        "launches": 14,
        "deployers": 12,
        "baseline_share": 0.0004,
        "multiple": 89.5,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 88%, merged to uniswap-uni"
      },
      {
        "root": "warhound",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 63.9,
        "state": "MERGED",
        "reason": "warhound + wrhnd co-occur 100%, merged to warhound-wrhnd"
      },
      {
        "root": "wrhnd",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 63.9,
        "state": "MERGED",
        "reason": "warhound + wrhnd co-occur 100%, merged to warhound-wrhnd"
      },
      {
        "root": "ci",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 32,
        "state": "THIN",
        "reason": "ci: 5 deployers < 6 required"
      },
      {
        "root": "cyber",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 32,
        "state": "THIN",
        "reason": "cyber: 5 deployers < 6 required"
      },
      {
        "root": "night",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 32,
        "state": "THIN",
        "reason": "night: 5 deployers < 6 required"
      },
      {
        "root": "shift",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 32,
        "state": "THIN",
        "reason": "shift: 5 deployers < 6 required"
      },
      {
        "root": "world",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 32,
        "state": "THIN",
        "reason": "world: 5 deployers < 6 required"
      },
      {
        "root": "ai",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 25.6,
        "state": "THIN",
        "reason": "ai: 4 launches < 5 required"
      },
      {
        "root": "borrowable",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 25.6,
        "state": "THIN",
        "reason": "borrowable: 4 launches < 5 required"
      },
      {
        "root": "flock",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 25.6,
        "state": "THIN",
        "reason": "flock: 4 launches < 5 required"
      },
      {
        "root": "ishares",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 25.6,
        "state": "THIN",
        "reason": "ishares: 4 launches < 5 required"
      },
      {
        "root": "lend",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 25.6,
        "state": "THIN",
        "reason": "lend: 4 launches < 5 required"
      },
      {
        "root": "ramses",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 25.6,
        "state": "THIN",
        "reason": "ramses: 4 launches < 5 required"
      },
      {
        "root": "staked",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 25.6,
        "state": "THIN",
        "reason": "staked: 4 launches < 5 required"
      },
      {
        "root": "volatile",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 25.6,
        "state": "THIN",
        "reason": "volatile: 4 launches < 5 required"
      },
      {
        "root": "app",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.2,
        "state": "THIN",
        "reason": "app: 3 launches < 5 required"
      },
      {
        "root": "bf",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.2,
        "state": "THIN",
        "reason": "bf: 3 launches < 5 required"
      },
      {
        "root": "bucket",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 19.2,
        "state": "THIN",
        "reason": "bucket: 3 launches < 5 required"
      },
      {
        "root": "cat",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.2,
        "state": "THIN",
        "reason": "cat: 3 launches < 5 required"
      },
      {
        "root": "checkpoint",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 19.2,
        "state": "THIN",
        "reason": "checkpoint: 3 launches < 5 required"
      },
      {
        "root": "credit",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.2,
        "state": "THIN",
        "reason": "credit: 3 launches < 5 required"
      },
      {
        "root": "deposit",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.2,
        "state": "THIN",
        "reason": "deposit: 3 launches < 5 required"
      },
      {
        "root": "digital",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.2,
        "state": "THIN",
        "reason": "digital: 3 launches < 5 required"
      },
      {
        "root": "edition",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 19.2,
        "state": "THIN",
        "reason": "edition: 3 launches < 5 required"
      },
      {
        "root": "etf",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 19.2,
        "state": "THIN",
        "reason": "etf: 3 launches < 5 required"
      },
      {
        "root": "inc",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 19.2,
        "state": "THIN",
        "reason": "inc: 3 launches < 5 required"
      },
      {
        "root": "long",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.2,
        "state": "THIN",
        "reason": "long: 3 launches < 5 required"
      },
      {
        "root": "lowkey",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.2,
        "state": "THIN",
        "reason": "lowkey: 3 launches < 5 required"
      },
      {
        "root": "lowkeyswap",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.2,
        "state": "THIN",
        "reason": "lowkeyswap: 3 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x207f171422bcd86fa276d637790057eeaf6a6a2d",
        "name": "vault",
        "symbol": "VAULT",
        "deployer": "0xcecc29b037f5064fcdf45a5c318f132ef76aa551",
        "block": 95540840,
        "ts": "2026-10-23T00:53:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0e0360e16e81c3626e28988a55ca9276f1ae3afa",
        "name": "Rex Robinhood Agent",
        "symbol": "REX",
        "deployer": "0x8c4debaa501b4b29fc25ce1b81d0dfe65ffe8db3",
        "block": 95540820,
        "ts": "2026-10-23T00:53:04.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xec6327bb5409bd304c0cf8feed55b259e949731f",
        "name": "Clawd Mascot Hood",
        "symbol": "9",
        "deployer": "0x39b725a5e58b62e66f3a5473e50fc091a2323c55",
        "block": 95540704,
        "ts": "2026-10-23T00:52:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xad221259d4a1f2d7376dc1012c561bc86640f009",
        "name": "Meridian USD",
        "symbol": "merUSD",
        "deployer": "0xc47456378bdba2b64517af199f07bbca45138760",
        "block": 95540582,
        "ts": "2026-10-23T00:52:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2f1ef42f7c95c561420718fbf76f6965f6a29384",
        "name": "The McRib Indicator",
        "symbol": "McRib",
        "deployer": "0xe6845c59a4a09488e3581b18b20f41fcac0acb8f",
        "block": 95540403,
        "ts": "2026-10-23T00:52:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x536320550e3db46f17df33c00bd02226e4a1ec19",
        "name": "grft.world",
        "symbol": "GRFT",
        "deployer": "0x0cb6adf21da391418b5c81259d79718e35fee545",
        "block": 95540227,
        "ts": "2026-10-23T00:52:04.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xc742da6c38732a6ac496ebe8daf938a895096927",
        "name": "dooge",
        "symbol": "DOOGE",
        "deployer": "0xdc2d8319aad80a53b87c24810f0344a70a726aef",
        "block": 95540212,
        "ts": "2026-10-23T00:52:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5cc09b291fae827d290495f9e81b3ebe106a7a11",
        "name": "Rex on Robinhood",
        "symbol": "REX",
        "deployer": "0x8c901a7a8c6f192625af7e55494f31c9dacb595c",
        "block": 95540136,
        "ts": "2026-10-23T00:51:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb6a84c16848acc8e7137ffa9514aaf602c3a95ad",
        "name": "Kimchi Larp Final Boss",
        "symbol": "KIMCHI",
        "deployer": "0x4ba4f4f26f44155a2e8e930bf9accf0531d72c52",
        "block": 95540101,
        "ts": "2026-10-23T00:51:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x676935afb46a79cf12e34177b5479a3b6de19459",
        "name": "Giant Stone",
        "symbol": "TONE",
        "deployer": "0x54c3a58d65c2562b15f42b349ce611252e680b4c",
        "block": 95539713,
        "ts": "2026-10-23T00:51:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1b1416c05cc869939b656f8c7635a3f6e1ce1e18",
        "name": "0day",
        "symbol": "DAY",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 95539670,
        "ts": "2026-10-23T00:51:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa38ed88453007085e365808158727f167a56872d",
        "name": "The McRib Indicator",
        "symbol": "McRib",
        "deployer": "0x670ac27cd89537819d91fbea0c54a6507010d968",
        "block": 95539565,
        "ts": "2026-10-23T00:50:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8162cba6299eec799241f837f0f68f59f00c2fa0",
        "name": "2",
        "symbol": "20",
        "deployer": "0xf2546ed7dddab11c0e33e978815112ee49d05b92",
        "block": 95539222,
        "ts": "2026-10-23T00:50:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc389d2cc6c5f34948dae6ccf34bc9db4c703f19b",
        "name": "Decent Kangaroos",
        "symbol": "DEC",
        "deployer": "0x2da40ce78682262d8024c76f614490c73b174340",
        "block": 95539072,
        "ts": "2026-10-23T00:50:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5302e76d96274433f6df5ec44302120c9f862452",
        "name": "1KiSS",
        "symbol": "1KiSSRH",
        "deployer": "0xb0cdaa733230694eb2030c5c2b534b453a9b751d",
        "block": 95538946,
        "ts": "2026-10-23T00:49:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7d0361ecfd4c4b67a8b60488aa8351c2f12a068c",
        "name": "Perplex",
        "symbol": "PERPLEX",
        "deployer": "0x82f1bf83248920852e387562aac38f9f49a03b67",
        "block": 95538771,
        "ts": "2026-10-23T00:49:37.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x07ada7b20dcc32591146f1a1cc7de4318a3eba4e",
        "name": "Zero Point Eth",
        "symbol": "ZERO",
        "deployer": "0x65f470fbd92492f26cba81f5cfefb6f723505998",
        "block": 95538530,
        "ts": "2026-10-23T00:49:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5247d5579c2e2eb4c4053e893cb65ae45a89a85d",
        "name": "McRib",
        "symbol": "MCRIB",
        "deployer": "0xa1060425f644b4742f030f27b045faeb444db71a",
        "block": 95538260,
        "ts": "2026-10-23T00:48:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x87086329b677c94df4da5dfe9a8da90c73c535bf",
        "name": "Volatile AMM - UP/USDG",
        "symbol": "vAMM-UP/USDG",
        "deployer": "0x1f07ed80ec4074cf68a544e7049457e531cc5580",
        "block": 95538243,
        "ts": "2026-10-23T00:48:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd0a2b492da3f0fc0d28e1ea4d0ecb9f873a89ce9",
        "name": "Dario Altman",
        "symbol": "EDITION",
        "deployer": "0xa0504f86d1493f975177b0bd5106600b472f8374",
        "block": 95538037,
        "ts": "2026-10-23T00:48:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xaa95d3291a7ee2ec30fcc8fa7c3058aa66f07777",
        "name": "The McRib Indicator",
        "symbol": "McRib",
        "deployer": "0x2a52207f03446c99d9f9b86bbde3ae7473c7867f",
        "block": 95537958,
        "ts": "2026-10-23T00:48:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9cf3ef0cf8391768a756c34230d728417066c3ad",
        "name": "You Can See Everything",
        "symbol": "BLOOD",
        "deployer": "0x484fd42070b71f0171a709bd639e4dffa95df047",
        "block": 95537893,
        "ts": "2026-10-23T00:48:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1226e5df90e7948f219fa7e62ecbcb060d764920",
        "name": "The McRib Indicator",
        "symbol": "McRib",
        "deployer": "0x2f506fcc11f0057fb44c37728f1a8442565fba94",
        "block": 95537844,
        "ts": "2026-10-23T00:48:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x937d9c538b7d168767b3b605e3407e57c85be194",
        "name": "The McRib Indicator",
        "symbol": "McRib",
        "deployer": "0xecf6b29be465da89f0d1b2be8cadcd1debb6df98",
        "block": 95537824,
        "ts": "2026-10-23T00:47:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe78e403e51acf08b8f07b061cc03cf79c74b7777",
        "name": "Alibi",
        "symbol": "ALIBI",
        "deployer": "0x980b9bb5b3163638e0a35f8f26ff40547b16e2a9",
        "block": 95537654,
        "ts": "2026-10-23T00:47:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc739c93738d7fa14f377c968f810beea75d2f31a",
        "name": "DEAT",
        "symbol": "DEAT",
        "deployer": "0x9c35fa8bd4161c4aa8689c82a8ec743637c3820f",
        "block": 95537590,
        "ts": "2026-10-23T00:47:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf441bd075615f3f741452cb563878c7983894867",
        "name": "XArena",
        "symbol": "ARENA",
        "deployer": "0x5d568467af1a71034fa5d28204f877ca92e01cab",
        "block": 95537151,
        "ts": "2026-10-23T00:46:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0235732fda08ba7b0f272184bf724f9882f14786",
        "name": "Sports R7 Final",
        "symbol": "SPORTS",
        "deployer": "0x78436333218a3bb13d86fa5aab8827341cbd1ed4",
        "block": 95536757,
        "ts": "2026-10-23T00:46:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0ba29ff4994f3d13bdef12c1ee0e0a64b2ddc2ee",
        "name": "Rex Robinhood Agent",
        "symbol": "REX",
        "deployer": "0x28a8b4e97a7cad3a7c17e0ff915b2c5d133aa57b",
        "block": 95536675,
        "ts": "2026-10-23T00:45:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xac3387dd1ffa05afa31a602617b77b225eb9721d",
        "name": "a",
        "symbol": "A",
        "deployer": "0xc97c11d95053808aec844fa7c3c882ca9390a4b3",
        "block": 95536589,
        "ts": "2026-10-23T00:45:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc0c2e370c3683214ca78b9a42a319ff69ef790fe",
        "name": "ROADSTER",
        "symbol": "ROADSTER",
        "deployer": "0x65e63e49c7dfccfb80f6dab04d3963f0ce43e453",
        "block": 95536509,
        "ts": "2026-10-23T00:45:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4a6d36a339c2b94a3dfbe4d2538ef469a6ac6189",
        "name": "WODLR: Alien Origins",
        "symbol": "ALIEN",
        "deployer": "0x72c171d522214b94a72027b16492112d00306d1a",
        "block": 95536464,
        "ts": "2026-10-23T00:45:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb125bcd71bc570c4dbb95c89cf8696728de37777",
        "name": "Inutruder",
        "symbol": "INUTRUDER",
        "deployer": "0xba99a63b9ab6033451b21666851b8070af73cbe8",
        "block": 95536443,
        "ts": "2026-10-23T00:45:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xaa2d92bfa19a1c0c0b318167318cc8f9d14c6781",
        "name": "1",
        "symbol": "10",
        "deployer": "0xb9094be40379127966206c701e98f1e2df679563",
        "block": 95536353,
        "ts": "2026-10-23T00:45:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x81efbc33c51908d08b1d8166db9502c292825baa",
        "name": "XArena",
        "symbol": "ARENA",
        "deployer": "0xb08beb66aca16988fc1ae9e5f8acc2828de79576",
        "block": 95536340,
        "ts": "2026-10-23T00:45:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x32215ef405fe199cb8631672917ccc1720057777",
        "name": "Stablecoin",
        "symbol": "STABLECOIN",
        "deployer": "0xe26a8a93a803f6dcc9355da3beac69d733ddfd5d",
        "block": 95536241,
        "ts": "2026-10-23T00:45:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0c63179b99d64cbed9ba320e2c6ecd11085669ee",
        "name": "COSMIC",
        "symbol": "CSM",
        "deployer": "0x39b725a5e58b62e66f3a5473e50fc091a2323c55",
        "block": 95536121,
        "ts": "2026-10-23T00:45:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x214dd5744f164e95d4f794be7bffdf3fa19b1f2a",
        "name": "YOU CAN SEE EVERYTHING",
        "symbol": "BLOOD",
        "deployer": "0x484fd42070b71f0171a709bd639e4dffa95df047",
        "block": 95536020,
        "ts": "2026-10-23T00:44:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x52eaf98535ac78898d7641f170d7181487b51e18",
        "name": "Techno Mechanicus Musk",
        "symbol": "MECHANICUS",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 95535825,
        "ts": "2026-10-23T00:44:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa99fd4e4515b57059dc8fe994d2086659e4988ac",
        "name": "PRE",
        "symbol": "AGENT",
        "deployer": "0x693e86cbb0bff85c11ad3a95e080e022fc25dd2e",
        "block": 95535593,
        "ts": "2026-10-23T00:44:08.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
