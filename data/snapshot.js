/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-22T10:34:11.000Z",
    "opened_at": "2026-10-22T09:34:11.000Z",
    "window_hours": 1,
    "head_block": 95046366,
    "start_block": 95011883,
    "blocks_scanned": 34483,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 427,
    "unnamed_contracts": 0,
    "via_factory": 392,
    "no_receipt": 0,
    "candidates": 427,
    "mint_events": 13139,
    "deployers": 259,
    "roots": 462,
    "cleared_multiple": 141,
    "failed_gates": 129,
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
      "carbon",
      "hood",
      "kimchi",
      "nft",
      "positions",
      "robinhood",
      "uniswap-uni",
      "usdg",
      "virus-shamonda-shav"
    ],
    "top": {
      "root": "robinhood",
      "launches": 27,
      "deployers": 8,
      "baseline_share": 0.0004,
      "multiple": 158.1,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "robinhood",
        "launches": 27,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 158.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "carbon",
        "launches": 17,
        "deployers": 13,
        "baseline_share": 0.0004,
        "multiple": 99.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 58.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nft",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 52.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 46.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "hood",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 41,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "kimchi",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 35.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 24,
        "deployers": 21,
        "baseline_share": 0.0004,
        "multiple": 140.5,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 83%, merged to uniswap-uni"
      },
      {
        "root": "virus",
        "launches": 23,
        "deployers": 23,
        "baseline_share": 0.0004,
        "multiple": 134.7,
        "state": "MERGED",
        "reason": "virus + shamonda co-occur 91%, merged to virus-shamonda-shav"
      },
      {
        "root": "shamonda",
        "launches": 21,
        "deployers": 21,
        "baseline_share": 0.0004,
        "multiple": 123,
        "state": "MERGED",
        "reason": "virus + shamonda co-occur 91%, merged to virus-shamonda-shav"
      },
      {
        "root": "uni",
        "launches": 20,
        "deployers": 17,
        "baseline_share": 0.0004,
        "multiple": 117.1,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 83%, merged to uniswap-uni"
      },
      {
        "root": "shav",
        "launches": 19,
        "deployers": 19,
        "baseline_share": 0.0004,
        "multiple": 111.2,
        "state": "MERGED",
        "reason": "virus + shamonda co-occur 91%, merged to virus-shamonda-shav"
      },
      {
        "root": "cow",
        "launches": 10,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 58.5,
        "state": "THIN",
        "reason": "cow: 2 deployers < 6 required"
      },
      {
        "root": "money",
        "launches": 9,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 52.7,
        "state": "THIN",
        "reason": "money: 4 deployers < 6 required"
      },
      {
        "root": "robin",
        "launches": 7,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 41,
        "state": "THIN",
        "reason": "robin: 5 deployers < 6 required"
      },
      {
        "root": "box",
        "launches": 6,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 35.1,
        "state": "THIN",
        "reason": "box: 4 deployers < 6 required"
      },
      {
        "root": "cat",
        "launches": 6,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 35.1,
        "state": "THIN",
        "reason": "cat: 4 deployers < 6 required"
      },
      {
        "root": "deposit",
        "launches": 6,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 35.1,
        "state": "THIN",
        "reason": "deposit: 4 deployers < 6 required"
      },
      {
        "root": "glitch",
        "launches": 6,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 35.1,
        "state": "THIN",
        "reason": "glitch: 1 deployers < 6 required"
      },
      {
        "root": "infinite",
        "launches": 6,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 35.1,
        "state": "THIN",
        "reason": "infinite: 1 deployers < 6 required"
      },
      {
        "root": "one",
        "launches": 6,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 35.1,
        "state": "THIN",
        "reason": "one: 3 deployers < 6 required"
      },
      {
        "root": "volatile",
        "launches": 6,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 35.1,
        "state": "THIN",
        "reason": "volatile: 5 deployers < 6 required"
      },
      {
        "root": "weth",
        "launches": 6,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 35.1,
        "state": "THIN",
        "reason": "weth: 4 deployers < 6 required"
      },
      {
        "root": "ai",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 29.3,
        "state": "THIN",
        "reason": "ai: 5 deployers < 6 required"
      },
      {
        "root": "alandale",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 29.3,
        "state": "THIN",
        "reason": "alandale: 3 deployers < 6 required"
      },
      {
        "root": "amm",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 29.3,
        "state": "THIN",
        "reason": "amm: 4 deployers < 6 required"
      },
      {
        "root": "carbonx",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 29.3,
        "state": "THIN",
        "reason": "carbonx: 5 deployers < 6 required"
      },
      {
        "root": "mock",
        "launches": 5,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 29.3,
        "state": "THIN",
        "reason": "mock: 2 deployers < 6 required"
      },
      {
        "root": "pepe",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 29.3,
        "state": "THIN",
        "reason": "pepe: 3 deployers < 6 required"
      },
      {
        "root": "pooh",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 29.3,
        "state": "THIN",
        "reason": "pooh: 5 deployers < 6 required"
      },
      {
        "root": "reward",
        "launches": 5,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 29.3,
        "state": "THIN",
        "reason": "reward: 2 deployers < 6 required"
      },
      {
        "root": "safety",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 29.3,
        "state": "THIN",
        "reason": "safety: 3 deployers < 6 required"
      },
      {
        "root": "trump",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 29.3,
        "state": "THIN",
        "reason": "trump: 5 deployers < 6 required"
      },
      {
        "root": "cantle",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 23.4,
        "state": "THIN",
        "reason": "cantle: 4 launches < 5 required"
      },
      {
        "root": "dividend",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 23.4,
        "state": "THIN",
        "reason": "dividend: 4 launches < 5 required"
      },
      {
        "root": "internet",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 23.4,
        "state": "THIN",
        "reason": "internet: 4 launches < 5 required"
      },
      {
        "root": "kefa",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 23.4,
        "state": "THIN",
        "reason": "kefa: 4 launches < 5 required"
      },
      {
        "root": "plague",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 23.4,
        "state": "THIN",
        "reason": "plague: 4 launches < 5 required"
      },
      {
        "root": "street",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 23.4,
        "state": "THIN",
        "reason": "street: 4 launches < 5 required"
      },
      {
        "root": "victorian",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 23.4,
        "state": "THIN",
        "reason": "victorian: 4 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0xeb288e3ca1607e7b921bcb47d5831e88331d65ef",
        "name": "Bond",
        "symbol": "BOND",
        "deployer": "0xd864d69e883c7011455ff17df50233e46b8a780d",
        "block": 95046364,
        "ts": "2026-10-22T10:34:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdf5fb15e72dd5b5b0e4001349d6c4daef397f6ea",
        "name": "All In One",
        "symbol": "ONE",
        "deployer": "0x4e2bd87ec828601cedaee948d61f64c0a2673b84",
        "block": 95046260,
        "ts": "2026-10-22T10:34:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xab60d6ea0ac9473d0ea89d2d3ac56475edf07777",
        "name": "Robinhood Gold Card",
        "symbol": "CARD",
        "deployer": "0xea5c98a6164850f6ace669bd753de6928881b65e",
        "block": 95045877,
        "ts": "2026-10-22T10:33:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa9aa19b155c2879e62fadc60275e2922d2f87777",
        "name": "Agent Monopoly",
        "symbol": "Monopoly",
        "deployer": "0x648975b08b558e5b5ecffbc68c248c79459bb279",
        "block": 95045647,
        "ts": "2026-10-22T10:32:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x236ab2bc90dc52bdb1ae83064d64f842934c2373",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x168b921aa662cac2a0b76a7d1fc95ccaa85210eb",
        "block": 95045485,
        "ts": "2026-10-22T10:32:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0792b85e0b4068aa7f6fcfb46ee0ac46b21650da",
        "name": "Byte Humor",
        "symbol": "BYTE",
        "deployer": "0x11a75011e235074e566dddfd4f0e207402bc78a8",
        "block": 95045398,
        "ts": "2026-10-22T10:32:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x56805236e6fbf275004521c354c2a692de2a1e18",
        "name": "chyna",
        "symbol": "CHYNA",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 95045342,
        "ts": "2026-10-22T10:32:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9f6af74b32bbf45c897523387471afc7043d6d31",
        "name": "Robinhood Gold Card",
        "symbol": "CARD",
        "deployer": "0xec966d2656d8bb4ed1c548c36f3310b22856ab78",
        "block": 95045334,
        "ts": "2026-10-22T10:32:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6cc942b37e0e83ea436bb01cbcf09b0fc1578e82",
        "name": "BubbleBandit",
        "symbol": "BBNDT",
        "deployer": "0x9a715be92fde819676fa4e959024b4afb4bc695d",
        "block": 95045249,
        "ts": "2026-10-22T10:32:17.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xfc789749fd271c415ef2210701673582fb0e56ea",
        "name": "One Strategy",
        "symbol": "ONESTR",
        "deployer": "0xc5d22a7d5b203164bfa6479d72de9297cff19bf5",
        "block": 95045156,
        "ts": "2026-10-22T10:32:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb0992820e760d836549ba69bc7598b4af75dee03",
        "name": "Oracle • Robinhood Token",
        "symbol": "ORCL",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 95045054,
        "ts": "2026-10-22T10:31:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x106e83a4509693f0165f1c0ff46f5e05534199dd",
        "name": "HOODY",
        "symbol": "HOODY",
        "deployer": "0xc8765e692832536ec94138c9eda5bf24b264a6da",
        "block": 95045044,
        "ts": "2026-10-22T10:31:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4cd74a43a77fd12a2c3c6f293a5fd5b444677777",
        "name": "Carbon X 1f4c6",
        "symbol": "CARBONX",
        "deployer": "0xd90271a8963bb45d2906eb4516943661b77f981a",
        "block": 95044930,
        "ts": "2026-10-22T10:31:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x330a21b8e40aefc32a8d44957469124f70e0a412",
        "name": "NEW INDEXER 5",
        "symbol": "NIND5",
        "deployer": "0x3a90428b74c2c55caf2a4c83266489ff6c37f950",
        "block": 95044894,
        "ts": "2026-10-22T10:31:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x85a6304c1d65d940eb29150752ab85e2142eb823",
        "name": "Papyrus Mock USD",
        "symbol": "pUSD",
        "deployer": "0x3c2c39aef32e3fb7b73f4d195dbaa2156da8a8e0",
        "block": 95044810,
        "ts": "2026-10-22T10:31:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x63effc6b1f2189eb5b3a79012302878b5e05e880",
        "name": "Infinite Money Glitch",
        "symbol": "GLITCH",
        "deployer": "0xa1537ad860cde8ae2a5f9b9db773209fdc736a9e",
        "block": 95044637,
        "ts": "2026-10-22T10:31:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf1e6d6e2f879b013cc15dcebee3aa1fbdc36dcdc",
        "name": "Donald Jailed Trump",
        "symbol": "DJT",
        "deployer": "0xc48c8200ae3a32d9dc4ad0883e189346e9237fde",
        "block": 95044578,
        "ts": "2026-10-22T10:31:10.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x4160bb2504c4a7c2442c2e405fc44c6a0eaf35e0",
        "name": "Gornik Network",
        "symbol": "GORNIK",
        "deployer": "0xd87340d84dd10bff317170653c2b38e87ecf0519",
        "block": 95044565,
        "ts": "2026-10-22T10:31:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd349618192d81f3ce7c2411350a94061075c83cd",
        "name": "Google Gemini",
        "symbol": "Gemini",
        "deployer": "0xb87ad3773b6d91bc4e5d6e7480d174ed330dc10f",
        "block": 95044436,
        "ts": "2026-10-22T10:30:56.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xd8d8a65ce1e134287223479a1e1648ea3d597777",
        "name": "Prince",
        "symbol": "PRINCE",
        "deployer": "0x21853863aeec000ebfa52e46b366fdf2ac02ca6b",
        "block": 95044419,
        "ts": "2026-10-22T10:30:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xba5e25cfab96583a18369216d1dab9dbc8ab0087",
        "name": "RWA CAT",
        "symbol": "RWA",
        "deployer": "0xb25f3b79ae1a46b74e623b1660fda3666ab58be9",
        "block": 95044400,
        "ts": "2026-10-22T10:30:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc0b5e511d6d1bd62e9d54eb2cef1fb8cc9397777",
        "name": "Donald Jailed Trump",
        "symbol": "DJT",
        "deployer": "0x980b9bb5b3163638e0a35f8f26ff40547b16e2a9",
        "block": 95044325,
        "ts": "2026-10-22T10:30:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4e7d59b37ed70923bd988ab3d8f871260a966f2b",
        "name": "Gas Bike",
        "symbol": "BIKE",
        "deployer": "0xc3d22b9e65380c4eaf27b245e1d4ba42596493b0",
        "block": 95044269,
        "ts": "2026-10-22T10:30:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x758c38948fe9dc904713b5d8a3104ad3d4cdad42",
        "name": "Donald Jailed Trump",
        "symbol": "DJT",
        "deployer": "0x17bb3f846ef1dd12d42a25475f75f2225f24039b",
        "block": 95044233,
        "ts": "2026-10-22T10:30:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdd1cf89e9af75e6ba580e6740ba70290b23a26ea",
        "name": "DOGECOIN",
        "symbol": "DOGE",
        "deployer": "0x73a063c96b5d67863deaa7b163207e769a7c2cee",
        "block": 95044230,
        "ts": "2026-10-22T10:30:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa2fe97a8a0be96024dfe17a4fed322f4f60726ea",
        "name": "One Inu",
        "symbol": "1NU",
        "deployer": "0xc5d22a7d5b203164bfa6479d72de9297cff19bf5",
        "block": 95044096,
        "ts": "2026-10-22T10:30:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfe1567e3888e82bd507dbb87e26bb464f3b6a317",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x168b921aa662cac2a0b76a7d1fc95ccaa85210eb",
        "block": 95044061,
        "ts": "2026-10-22T10:30:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x79a4a5ed595cbf425b7f19de6f92cb14941426ea",
        "name": "PEPE",
        "symbol": "PEPE",
        "deployer": "0x4e2bd87ec828601cedaee948d61f64c0a2673b84",
        "block": 95043892,
        "ts": "2026-10-22T10:30:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4313bab65c78923a57c471cb2c6fffc7d25256ea",
        "name": "Mercury Strategy",
        "symbol": "MERCURYSTR",
        "deployer": "0x4e2bd87ec828601cedaee948d61f64c0a2673b84",
        "block": 95043892,
        "ts": "2026-10-22T10:30:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfc2fa9314c4aa7376bcb3cf1fbfabfaebc6e7777",
        "name": "United Dividend Fund States",
        "symbol": "UDFS",
        "deployer": "0xe26a8a93a803f6dcc9355da3beac69d733ddfd5d",
        "block": 95043853,
        "ts": "2026-10-22T10:29:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1b282927b9c5d39d7161f51af3203b44b1a56213",
        "name": "GlitchPanda",
        "symbol": "GPDA",
        "deployer": "0xb187ea7defc99a5d2b089047b866697390b6fd19",
        "block": 95043734,
        "ts": "2026-10-22T10:29:40.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xc53c2f83230bce696799b6af1b216a90166c7777",
        "name": "YUREI",
        "symbol": "YUREII",
        "deployer": "0x4f6d40378da3874cb49b6834b4c20ada43842691",
        "block": 95043429,
        "ts": "2026-10-22T10:29:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x57959ffbe97f7e5116434af21ed05706a8cd08e1",
        "name": "AIVM",
        "symbol": "AIVM",
        "deployer": "0x89058ff1139cebbf0da5c6163e956c192519e54f",
        "block": 95043427,
        "ts": "2026-10-22T10:29:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc6105cd30426994d2e97753e808dd0e0e4fa46ea",
        "name": "Mercury",
        "symbol": "HG",
        "deployer": "0xc5d22a7d5b203164bfa6479d72de9297cff19bf5",
        "block": 95043377,
        "ts": "2026-10-22T10:28:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0f2002612feb3e895bdf1355e2dd17ee51b384d3",
        "name": "YUREI",
        "symbol": "YUREII",
        "deployer": "0x3fe0749374891f6d287104006acec8fd4b9e8854",
        "block": 95043339,
        "ts": "2026-10-22T10:28:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x90595c96e32d2de7412f18762d8b012463367777",
        "name": "Brim Pad",
        "symbol": "BRIMPAD",
        "deployer": "0xea5c98a6164850f6ace669bd753de6928881b65e",
        "block": 95043184,
        "ts": "2026-10-22T10:28:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc7daeaa0c2522a03782615d9ff6e714291937777",
        "name": "Aflare",
        "symbol": "AFLARE",
        "deployer": "0x21853863aeec000ebfa52e46b366fdf2ac02ca6b",
        "block": 95043160,
        "ts": "2026-10-22T10:28:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x54da163942726883b6ef8ee509e60c18bbcbbe29",
        "name": "Giga Volatile AMM - GIGA/USDG",
        "symbol": "GIGA-vAMM-GIGA/USDG",
        "deployer": "0xf0ed0dbe36d332d470e8280debb9761863567dd4",
        "block": 95043122,
        "ts": "2026-10-22T10:28:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8e913847d72dad79c494fcb79fbe66934cf38688",
        "name": "Aflare",
        "symbol": "AFLARE",
        "deployer": "0xa3c94be6d4a257e8ca2c4200c71e400cea384196",
        "block": 95043066,
        "ts": "2026-10-22T10:28:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x14d5b3aed9d098008b2fc155e4ac029544d81872",
        "name": "Brim Pad",
        "symbol": "BRIMPAD",
        "deployer": "0xfc54f6c7bd71edebf28529f5b7908c0c714da2f8",
        "block": 95043058,
        "ts": "2026-10-22T10:28:26.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
