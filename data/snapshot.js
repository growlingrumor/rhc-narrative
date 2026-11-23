/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-23T02:19:13.000Z",
    "opened_at": "2026-11-23T01:19:13.000Z",
    "window_hours": 1,
    "head_block": 121070486,
    "start_block": 121036292,
    "blocks_scanned": 34194,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 250,
    "unnamed_contracts": 0,
    "via_factory": 232,
    "no_receipt": 0,
    "candidates": 250,
    "mint_events": 11716,
    "deployers": 147,
    "roots": 341,
    "cleared_multiple": 198,
    "failed_gates": 197,
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
      "hedge"
    ],
    "top": {
      "root": "hedge",
      "launches": 10,
      "deployers": 10,
      "baseline_share": 0.0004,
      "multiple": 100,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "hedge",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 100,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "robinhood",
        "launches": 28,
        "deployers": 8,
        "baseline_share": 0.0513,
        "multiple": 2.2,
        "state": "BELOW",
        "reason": "robinhood: 2.2x over baseline < 6.0x required"
      },
      {
        "root": "uniswap",
        "launches": 13,
        "deployers": 9,
        "baseline_share": 0.0509,
        "multiple": 1,
        "state": "BELOW",
        "reason": "uniswap: 1.0x over baseline < 6.0x required"
      },
      {
        "root": "usdg",
        "launches": 12,
        "deployers": 12,
        "baseline_share": 0.0203,
        "multiple": 2.4,
        "state": "BELOW",
        "reason": "usdg: 2.4x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 11,
        "deployers": 7,
        "baseline_share": 0.0424,
        "multiple": 1,
        "state": "BELOW",
        "reason": "uni: 1.0x over baseline < 6.0x required"
      },
      {
        "root": "ai",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0081,
        "multiple": 4,
        "state": "BELOW",
        "reason": "ai: 4.0x over baseline < 6.0x required"
      },
      {
        "root": "cow",
        "launches": 6,
        "deployers": 2,
        "baseline_share": 0.0072,
        "multiple": 3.3,
        "state": "BELOW",
        "reason": "cow: 3.3x over baseline < 6.0x required"
      },
      {
        "root": "liquid",
        "launches": 5,
        "deployers": 2,
        "baseline_share": 0.0044,
        "multiple": 4.5,
        "state": "BELOW",
        "reason": "liquid: 4.5x over baseline < 6.0x required"
      },
      {
        "root": "aero",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0056,
        "multiple": 3.6,
        "state": "BELOW",
        "reason": "aero: 3.6x over baseline < 6.0x required"
      },
      {
        "root": "staked",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0069,
        "multiple": 2.9,
        "state": "BELOW",
        "reason": "staked: 2.9x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0167,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "positions: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "als",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0014,
        "multiple": 11.4,
        "state": "THIN",
        "reason": "als: 4 launches < 5 required"
      },
      {
        "root": "shares",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0014,
        "multiple": 11.4,
        "state": "THIN",
        "reason": "shares: 4 launches < 5 required"
      },
      {
        "root": "brownfi",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0025,
        "multiple": 6.4,
        "state": "THIN",
        "reason": "brownfi: 4 launches < 5 required"
      },
      {
        "root": "bf",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0027,
        "multiple": 5.9,
        "state": "BELOW",
        "reason": "bf: 5.9x over baseline < 6.0x required"
      },
      {
        "root": "trust",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0036,
        "multiple": 4.4,
        "state": "BELOW",
        "reason": "trust: 4.4x over baseline < 6.0x required"
      },
      {
        "root": "layerbank",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0053,
        "multiple": 3,
        "state": "BELOW",
        "reason": "layerbank: 3.0x over baseline < 6.0x required"
      },
      {
        "root": "agent",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0068,
        "multiple": 2.4,
        "state": "BELOW",
        "reason": "agent: 2.4x over baseline < 6.0x required"
      },
      {
        "root": "weth",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0073,
        "multiple": 2.2,
        "state": "BELOW",
        "reason": "weth: 2.2x over baseline < 6.0x required"
      },
      {
        "root": "nft",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0201,
        "multiple": 0.8,
        "state": "BELOW",
        "reason": "nft: 0.8x over baseline < 6.0x required"
      },
      {
        "root": "bunkercoin",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 30,
        "state": "THIN",
        "reason": "bunkercoin: 3 launches < 5 required"
      },
      {
        "root": "confidential",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 30,
        "state": "THIN",
        "reason": "confidential: 3 launches < 5 required"
      },
      {
        "root": "longbow",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 30,
        "state": "THIN",
        "reason": "longbow: 3 launches < 5 required"
      },
      {
        "root": "rump",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 30,
        "state": "THIN",
        "reason": "rump: 3 launches < 5 required"
      },
      {
        "root": "trumpless",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 30,
        "state": "THIN",
        "reason": "trumpless: 3 launches < 5 required"
      },
      {
        "root": "spdr",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0018,
        "multiple": 6.7,
        "state": "THIN",
        "reason": "spdr: 3 launches < 5 required"
      },
      {
        "root": "technologies",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0019,
        "multiple": 6.3,
        "state": "THIN",
        "reason": "technologies: 3 launches < 5 required"
      },
      {
        "root": "bucket",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0036,
        "multiple": 3.3,
        "state": "BELOW",
        "reason": "bucket: 3.3x over baseline < 6.0x required"
      },
      {
        "root": "reward",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0037,
        "multiple": 3.2,
        "state": "BELOW",
        "reason": "reward: 3.2x over baseline < 6.0x required"
      },
      {
        "root": "inc",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0057,
        "multiple": 2.1,
        "state": "BELOW",
        "reason": "inc: 2.1x over baseline < 6.0x required"
      },
      {
        "root": "cat",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.013,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "cat: 0.9x over baseline < 6.0x required"
      },
      {
        "root": "brainwave",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20,
        "state": "THIN",
        "reason": "brainwave: 2 launches < 5 required"
      },
      {
        "root": "ccat",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20,
        "state": "THIN",
        "reason": "ccat: 2 launches < 5 required"
      },
      {
        "root": "copycat",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20,
        "state": "THIN",
        "reason": "copycat: 2 launches < 5 required"
      },
      {
        "root": "dacityinu",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20,
        "state": "THIN",
        "reason": "dacityinu: 2 launches < 5 required"
      },
      {
        "root": "dci",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20,
        "state": "THIN",
        "reason": "dci: 2 launches < 5 required"
      },
      {
        "root": "eggs",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20,
        "state": "THIN",
        "reason": "eggs: 2 launches < 5 required"
      },
      {
        "root": "fissip",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20,
        "state": "THIN",
        "reason": "fissip: 2 launches < 5 required"
      },
      {
        "root": "fla",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20,
        "state": "THIN",
        "reason": "fla: 2 launches < 5 required"
      },
      {
        "root": "flea",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20,
        "state": "THIN",
        "reason": "flea: 2 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x8572757cb71b0683c072e313d2a72daf74d57777",
        "name": "Official Trumpless",
        "symbol": "Trumpless",
        "deployer": "0x42df28a5c7a53a2244079c67c590f976b702687c",
        "block": 121069928,
        "ts": "2026-11-23T02:18:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x673ed92fc66534f639aad6fed5013aa7173b6a2e",
        "name": "Confidential Cat",
        "symbol": "cCAT",
        "deployer": "0xd80b6018c99709a8ef12ca2ebf118e36e75b9fc7",
        "block": 121069881,
        "ts": "2026-11-23T02:18:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc7603be9da6d8e3282ff49197875f560ba9fbf2c",
        "name": "Tender",
        "symbol": "TENDER",
        "deployer": "0xc3598dc6d6ffc1cb366484f1a6f6671086ef8969",
        "block": 121069878,
        "ts": "2026-11-23T02:18:09.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xc97de4937b16ed0f88dde7569884943b86330087",
        "name": "The Bull",
        "symbol": "Bull",
        "deployer": "0xd9b27095395ab95509657887eaaf1131f0ba6355",
        "block": 121069849,
        "ts": "2026-11-23T02:18:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x599ac767099bb6f01712867bfa1fc1aa27defd37",
        "name": "Cow Up33 Robinhood USDG-INTC",
        "symbol": "cowUp33RobinhoodUSDG-INTC",
        "deployer": "0x3f9d00f48eb17ccea7916b9a1e24c5946cdf659c",
        "block": 121069846,
        "ts": "2026-11-23T02:18:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0e7fb97a89b20a682521c5d29868e50a7b693979",
        "name": "Reward Cow Up33 Robinhood USDG-INTC",
        "symbol": "rcowUp33RobinhoodUSDG-INTC",
        "deployer": "0x3f9d00f48eb17ccea7916b9a1e24c5946cdf659c",
        "block": 121069846,
        "ts": "2026-11-23T02:18:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8353c496114cf66d10545fdc2b4e6dfbafd37e3b",
        "name": "Moo Beefy Up33 Robinhood USDG-INTC",
        "symbol": "mooBeefyUp33RobinhoodUSDG-INTC",
        "deployer": "0x3f9d00f48eb17ccea7916b9a1e24c5946cdf659c",
        "block": 121069846,
        "ts": "2026-11-23T02:18:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc9c3802af99a6e9b9c3e7f5f8c5093e048fac1ca",
        "name": "POPT-V2 USDG LP on SPY/USDG 5bps",
        "symbol": "poUSDG",
        "deployer": "0x843b17bbf48cd08f39cc441b998bb418515b6202",
        "block": 121069575,
        "ts": "2026-11-23T02:17:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc0d6457c16cc70d6790dd43521c899c87ce02f35",
        "name": "Meta Platforms • Robinhood Token",
        "symbol": "META",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 121069542,
        "ts": "2026-11-23T02:17:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbc31c6fcadf8588a8416e3496ba2f97136df514f",
        "name": "Cow Aero AI-USDG",
        "symbol": "cowAeroAI-USDG",
        "deployer": "0x3f9d00f48eb17ccea7916b9a1e24c5946cdf659c",
        "block": 121068654,
        "ts": "2026-11-23T02:15:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1d0ddf7eb33e50cc794a8071ccb93f426e8340f4",
        "name": "Reward Cow Aero AI-USDG",
        "symbol": "rcowAeroAI-USDG",
        "deployer": "0x3f9d00f48eb17ccea7916b9a1e24c5946cdf659c",
        "block": 121068654,
        "ts": "2026-11-23T02:15:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4b56ccf807126627f954fdd7df834ab88f886447",
        "name": "Moo Beefy Aero AI-USDG",
        "symbol": "mooBeefyAeroAI-USDG",
        "deployer": "0x3f9d00f48eb17ccea7916b9a1e24c5946cdf659c",
        "block": 121068654,
        "ts": "2026-11-23T02:15:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2ac0f457636ce3cf939a19f34713d446e841f0af",
        "name": "Cuck Capital",
        "symbol": "CUCK",
        "deployer": "0xa3af060b6b7140866211c4d7ab608cede8432c70",
        "block": 121068440,
        "ts": "2026-11-23T02:15:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x213624fdf3b93bde1be10298bef2a754693c7777",
        "name": "Official Rump Coin",
        "symbol": "RUMP",
        "deployer": "0x4f6d40378da3874cb49b6834b4c20ada43842691",
        "block": 121068109,
        "ts": "2026-11-23T02:14:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdc8ec8d2d79926ac13a8733ed6da8a28d56b9b3a",
        "name": "Official Rump Coin",
        "symbol": "RUMP",
        "deployer": "0xd866df8683cbc0535fd4ec9f05f58687034f685d",
        "block": 121068077,
        "ts": "2026-11-23T02:14:50.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x9c71cf5b8d39cce128e5bb0d84fe64d992038747",
        "name": "BurstingBagel",
        "symbol": "BAGEL",
        "deployer": "0xc50181eedbe3532dad3bf0699b92f2bf4ad4668d",
        "block": 121067399,
        "ts": "2026-11-23T02:13:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x48e39e56acdba37b09020c0b734a613c9a2f100a",
        "name": "Blackberry • Robinhood Token",
        "symbol": "BB",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 121067314,
        "ts": "2026-11-23T02:13:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x382ce7dfb0f2ef3a59737424d1b500e95f397777",
        "name": "Flèa",
        "symbol": "FLA",
        "deployer": "0xea5c98a6164850f6ace669bd753de6928881b65e",
        "block": 121067309,
        "ts": "2026-11-23T02:13:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc9a981fee1f9dec688bb123ccdecc63d0debfc4e",
        "name": "SPDR Gold Trust • Robinhood Token",
        "symbol": "GLD",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 121067290,
        "ts": "2026-11-23T02:13:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe403bff57b53d2e0e1de3f3177e0bed2590e37f7",
        "name": "Flèa",
        "symbol": "FLA",
        "deployer": "0xb7b91d6d14b7ead7eecd6f9ee1f2b4c3f0dd9f51",
        "block": 121067239,
        "ts": "2026-11-23T02:13:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1d11f0496982706c5e14a514d4e79f2e6bde4516",
        "name": "Trump Media & Technology Group • Robinhood Token",
        "symbol": "DJT",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 121066930,
        "ts": "2026-11-23T02:12:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x88df84442c32da0faf60986024c12ef11f747777",
        "name": "Copycat",
        "symbol": "COPYCAT",
        "deployer": "0x21853863aeec000ebfa52e46b366fdf2ac02ca6b",
        "block": 121066646,
        "ts": "2026-11-23T02:12:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x238b37f696450be2fb1142c77777134b3d8670fb",
        "name": "Copycat",
        "symbol": "COPYCAT",
        "deployer": "0x0bb03a71def0d7b6462e2ddcf81c698e85ce38e2",
        "block": 121066569,
        "ts": "2026-11-23T02:12:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbe01e9435460bdf341cfd740436b6b7e76caf1ae",
        "name": "Artificial Inu",
        "symbol": "AI",
        "deployer": "0x33d94e8d82ec902731859af4fb7d4af393e63771",
        "block": 121066528,
        "ts": "2026-11-23T02:12:02.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xb47a306bd89e8b6fa2b14f553e534adcd7cc337f",
        "name": "CollectorCrypt",
        "symbol": "COLLECTOR",
        "deployer": "0x7202932b3be70edf0657d5bada261d610e0d7db9",
        "block": 121066198,
        "ts": "2026-11-23T02:11:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4f0c77a5af2441c42c39dd651c3eb6d078e02aed",
        "name": "burn",
        "symbol": "BURN",
        "deployer": "0x9b50028c456f4873b363519605216865134dd110",
        "block": 121066067,
        "ts": "2026-11-23T02:11:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0e335022c60dc38fac18fae9b671f35e6dc28810",
        "name": "Safety Deposit Box Smart LP WETH/USDG Balanced Band",
        "symbol": "sdWETH-BB",
        "deployer": "0x1781afdf20577972e9453d2db861c5a540be04fe",
        "block": 121065897,
        "ts": "2026-11-23T02:10:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5d321de36f0bf98d92b291280514f3878582b7b6",
        "name": "veNFT",
        "symbol": "veNFT",
        "deployer": "0x5227e19097ec0344382d65b1a30ed3bae93a3e10",
        "block": 121065852,
        "ts": "2026-11-23T02:10:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xacaaef8f4c22ca26c937205ce80830b2ff9306b4",
        "name": "Wrapped Hims & Hers Health • Robinhood Token",
        "symbol": "wHIMS",
        "deployer": "0x9efc87801ffb0b27766d6c568e3c0d76bd59d605",
        "block": 121065772,
        "ts": "2026-11-23T02:10:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x10006caf359e21c391c7994aa7bcd1c0a3647777",
        "name": "FISSIP",
        "symbol": "FISSIP",
        "deployer": "0x980b9bb5b3163638e0a35f8f26ff40547b16e2a9",
        "block": 121065700,
        "ts": "2026-11-23T02:10:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa04f77efb2638def0a9255443c11719b1ac7d919",
        "name": "FISSIP",
        "symbol": "FISSIP",
        "deployer": "0xe97613127f0928f01a25e016c4a661c90e7202b0",
        "block": 121065636,
        "ts": "2026-11-23T02:10:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc8076cec1a9d429219a688c0a8fbd22df7da1e18",
        "name": "Official Rump Coin",
        "symbol": "RUMP",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 121065446,
        "ts": "2026-11-23T02:10:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc380c89708265128336d420ab13458b7f5e50087",
        "name": "MANDY",
        "symbol": "MANDY",
        "deployer": "0xb326902c4327d61e6c89e4944c3ef3d8a3194c0b",
        "block": 121065144,
        "ts": "2026-11-23T02:09:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x02d9876a21af7545f8632c3af76ec90b5ad4b66d",
        "name": "Ekubo Positions",
        "symbol": "ekuPo",
        "deployer": "0xbd0d1168f0a49d5ecd33d214d955b270a3e17da5",
        "block": 121064899,
        "ts": "2026-11-23T02:09:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc27f0e6bb820cd2d55989d1ea20a32289ec5e9c5",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xcc13ff7e1a0bc5dbadd196114ec9e48807f083cd",
        "block": 121064746,
        "ts": "2026-11-23T02:08:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xaf972e9e9288e8232d5c057a65872d83619b7777",
        "name": "DacityInu",
        "symbol": "DCI",
        "deployer": "0xe26a8a93a803f6dcc9355da3beac69d733ddfd5d",
        "block": 121064738,
        "ts": "2026-11-23T02:08:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3473d062fac4bb6382782628e77ee0a8d76139d5",
        "name": "DacityInu",
        "symbol": "DCI",
        "deployer": "0x28ae9d1ee1762488eafca3bd3c721d77e9a0359f",
        "block": 121064657,
        "ts": "2026-11-23T02:08:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3579938094acfd3e9214ce6427a35f4d0b139317",
        "name": "Artificial Inu",
        "symbol": "AI",
        "deployer": "0x6ece15660f874c1a6c6a39336076468a132b7922",
        "block": 121064535,
        "ts": "2026-11-23T02:08:33.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xb99077de6ecc70133c7e351c2d1ea4706c0a61f2",
        "name": "Bunkercoin",
        "symbol": "Bunkercoin",
        "deployer": "0x9a43b2c55a880c78ed89b2dd3568086ceb44f5bb",
        "block": 121064372,
        "ts": "2026-11-23T02:08:16.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x624deb3e3cd77f1c4fddf6850ca3adcaeeb57777",
        "name": "Official Coin",
        "symbol": "Official",
        "deployer": "0xab986cea63b241d6a4ee0bae32e0f7f605075ae4",
        "block": 121064343,
        "ts": "2026-11-23T02:08:13.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
