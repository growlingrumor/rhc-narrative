/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-23T10:53:45.000Z",
    "opened_at": "2026-11-23T09:53:45.000Z",
    "window_hours": 1,
    "head_block": 121353939,
    "start_block": 121320471,
    "blocks_scanned": 33468,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 264,
    "unnamed_contracts": 0,
    "via_factory": 248,
    "no_receipt": 0,
    "candidates": 264,
    "mint_events": 15613,
    "deployers": 172,
    "roots": 358,
    "cleared_multiple": 230,
    "failed_gates": 228,
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
      "bobcat",
      "hold"
    ],
    "top": {
      "root": "hold",
      "launches": 11,
      "deployers": 11,
      "baseline_share": 0.0004,
      "multiple": 104.2,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "hold",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 104.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "bobcat",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 56.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "robinhood",
        "launches": 29,
        "deployers": 6,
        "baseline_share": 0.0513,
        "multiple": 2.1,
        "state": "BELOW",
        "reason": "robinhood: 2.1x over baseline < 6.0x required"
      },
      {
        "root": "usdg",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0203,
        "multiple": 2.1,
        "state": "BELOW",
        "reason": "usdg: 2.1x over baseline < 6.0x required"
      },
      {
        "root": "uniswap",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0509,
        "multiple": 0.7,
        "state": "BELOW",
        "reason": "uniswap: 0.7x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0424,
        "multiple": 0.6,
        "state": "BELOW",
        "reason": "uni: 0.6x over baseline < 6.0x required"
      },
      {
        "root": "layerbank",
        "launches": 5,
        "deployers": 2,
        "baseline_share": 0.0053,
        "multiple": 3.6,
        "state": "BELOW",
        "reason": "layerbank: 3.6x over baseline < 6.0x required"
      },
      {
        "root": "railpay",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 37.9,
        "state": "THIN",
        "reason": "railpay: 4 launches < 5 required"
      },
      {
        "root": "rpay",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 37.9,
        "state": "THIN",
        "reason": "rpay: 4 launches < 5 required"
      },
      {
        "root": "aero",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0056,
        "multiple": 2.7,
        "state": "BELOW",
        "reason": "aero: 2.7x over baseline < 6.0x required"
      },
      {
        "root": "cow",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0072,
        "multiple": 2.1,
        "state": "BELOW",
        "reason": "cow: 2.1x over baseline < 6.0x required"
      },
      {
        "root": "hood",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0108,
        "multiple": 1.4,
        "state": "BELOW",
        "reason": "hood: 1.4x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0167,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "positions: 0.9x over baseline < 6.0x required"
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
        "root": "holdout",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 28.4,
        "state": "THIN",
        "reason": "holdout: 3 launches < 5 required"
      },
      {
        "root": "lintel",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 28.4,
        "state": "THIN",
        "reason": "lintel: 3 launches < 5 required"
      },
      {
        "root": "toot",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 28.4,
        "state": "THIN",
        "reason": "toot: 3 launches < 5 required"
      },
      {
        "root": "tootcoin",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 28.4,
        "state": "THIN",
        "reason": "tootcoin: 3 launches < 5 required"
      },
      {
        "root": "technology",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.001,
        "multiple": 11.4,
        "state": "THIN",
        "reason": "technology: 3 launches < 5 required"
      },
      {
        "root": "blue",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0013,
        "multiple": 8.7,
        "state": "THIN",
        "reason": "blue: 3 launches < 5 required"
      },
      {
        "root": "alandale",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0032,
        "multiple": 3.6,
        "state": "BELOW",
        "reason": "alandale: 3.6x over baseline < 6.0x required"
      },
      {
        "root": "liquid",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0044,
        "multiple": 2.6,
        "state": "BELOW",
        "reason": "liquid: 2.6x over baseline < 6.0x required"
      },
      {
        "root": "inc",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0057,
        "multiple": 2,
        "state": "BELOW",
        "reason": "inc: 2.0x over baseline < 6.0x required"
      },
      {
        "root": "amm",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0062,
        "multiple": 1.8,
        "state": "BELOW",
        "reason": "amm: 1.8x over baseline < 6.0x required"
      },
      {
        "root": "staked",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0069,
        "multiple": 1.6,
        "state": "BELOW",
        "reason": "staked: 1.6x over baseline < 6.0x required"
      },
      {
        "root": "weth",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0073,
        "multiple": 1.6,
        "state": "BELOW",
        "reason": "weth: 1.6x over baseline < 6.0x required"
      },
      {
        "root": "volatile",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0083,
        "multiple": 1.4,
        "state": "BELOW",
        "reason": "volatile: 1.4x over baseline < 6.0x required"
      },
      {
        "root": "asset",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.9,
        "state": "THIN",
        "reason": "asset: 2 launches < 5 required"
      },
      {
        "root": "cerpish",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.9,
        "state": "THIN",
        "reason": "cerpish: 2 launches < 5 required"
      },
      {
        "root": "dacitycoin",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.9,
        "state": "THIN",
        "reason": "dacitycoin: 2 launches < 5 required"
      },
      {
        "root": "dcty",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.9,
        "state": "THIN",
        "reason": "dcty: 2 launches < 5 required"
      },
      {
        "root": "erdos",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.9,
        "state": "THIN",
        "reason": "erdos: 2 launches < 5 required"
      },
      {
        "root": "feathers",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.9,
        "state": "THIN",
        "reason": "feathers: 2 launches < 5 required"
      },
      {
        "root": "freedom",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.9,
        "state": "THIN",
        "reason": "freedom: 2 launches < 5 required"
      },
      {
        "root": "games",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.9,
        "state": "THIN",
        "reason": "games: 2 launches < 5 required"
      },
      {
        "root": "garasu",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.9,
        "state": "THIN",
        "reason": "garasu: 2 launches < 5 required"
      },
      {
        "root": "hilend",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.9,
        "state": "THIN",
        "reason": "hilend: 2 launches < 5 required"
      },
      {
        "root": "ho",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.9,
        "state": "THIN",
        "reason": "ho: 2 launches < 5 required"
      },
      {
        "root": "keel",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.9,
        "state": "THIN",
        "reason": "keel: 2 launches < 5 required"
      },
      {
        "root": "kestrel",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.9,
        "state": "THIN",
        "reason": "kestrel: 2 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x9789ba4643ff3b185ebd8178a6e438dcf4de7777",
        "name": "Keel",
        "symbol": "KEEL",
        "deployer": "0x21853863aeec000ebfa52e46b366fdf2ac02ca6b",
        "block": 121353638,
        "ts": "2026-11-23T10:53:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x30a096a79b36b643846863e76884ee7e7945a103",
        "name": "Keel",
        "symbol": "KEEL",
        "deployer": "0x33cd0c8be27ba05cb0b71cab39827dccca6d8b05",
        "block": 121353552,
        "ts": "2026-11-23T10:53:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2384b6d380ccd41272f2a48e1f6ea67b9fe38285",
        "name": "Genesis Skil Force",
        "symbol": "GSF",
        "deployer": "0x057c192ad7005e4d6d187ab3a43493a8d2fc8fbd",
        "block": 121353348,
        "ts": "2026-11-23T10:52:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb884ab1732a07a27d9cebdb2348c31a5fd03abca",
        "name": "First Human Genesis",
        "symbol": "FHG",
        "deployer": "0x55653fa68699131cc11b7ef49042015c6f177b5f",
        "block": 121353304,
        "ts": "2026-11-23T10:52:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x88c4c42ed68584ff02f5a00d5d3d985108a3961c",
        "name": "Edel",
        "symbol": "EDEL",
        "deployer": "0xbe9306ddf2c0ddd69227adb2c7e7ef4d0b5697d5",
        "block": 121353209,
        "ts": "2026-11-23T10:52:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd9d674b04a72affe00e06385535eaac10b988fca",
        "name": "Project Mars",
        "symbol": "DRILL",
        "deployer": "0xc35cdcef431f8f58a689974bb0d09210eaddd722",
        "block": 121353194,
        "ts": "2026-11-23T10:52:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1d49849569b5c6a69e31798471e9859d37be0087",
        "name": "The Hero",
        "symbol": "Ali",
        "deployer": "0xd9b27095395ab95509657887eaaf1131f0ba6355",
        "block": 121352979,
        "ts": "2026-11-23T10:51:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbbb6c29bcc3a1028a2b54310df73f4f7a3bcb373",
        "name": "Anthropic, PBC Class A Common Stock • Robinhood Token",
        "symbol": "ANT",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 121352958,
        "ts": "2026-11-23T10:51:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3144b305cffd73f388d47dca869a7361728e323c",
        "name": "Lantern",
        "symbol": "LANTERN",
        "deployer": "0x4337001fff419768e088ce247456c1b892888084",
        "block": 121352919,
        "ts": "2026-11-23T10:51:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x06e10a833c2447ba5ec840fb80c64eb099976d1e",
        "name": "MEMO",
        "symbol": "MEMO",
        "deployer": "0x0478ce6c290f722cdc00e64147035ec4c1cd2b24",
        "block": 121352443,
        "ts": "2026-11-23T10:50:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x15049354cb23557f247e3eccccfa0a834c29f3eb",
        "name": "Harbor",
        "symbol": "HARBOR",
        "deployer": "0x4337001fff419768e088ce247456c1b892888084",
        "block": 121352316,
        "ts": "2026-11-23T10:50:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x35e21e50f547396efc8b6fd040af1c32b4d1e74a",
        "name": "Kitty",
        "symbol": "KITTY",
        "deployer": "0xa3af060b6b7140866211c4d7ab608cede8432c70",
        "block": 121352308,
        "ts": "2026-11-23T10:50:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x914e067c03be5cc0e0473298773a6c43364546c5",
        "name": "Bobcat",
        "symbol": "BOBCAT",
        "deployer": "0x609b5d9210144be288a545d860352eabd0e093e4",
        "block": 121352184,
        "ts": "2026-11-23T10:50:30.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x0850b2c84db5a33ea3214eb7f264b52a318d92f4",
        "name": "Lagoon",
        "symbol": "LAGOON",
        "deployer": "0x4337005db25dbad41da5692ba1188751ee5d98b6",
        "block": 121351755,
        "ts": "2026-11-23T10:49:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xee25f7b2d0fdcfcb4f0b4569b4258f8cd7fed784",
        "name": "yumi",
        "symbol": "yumi",
        "deployer": "0x828dc1bc91fec5fd5bd17eb0c0b42f5c5c484103",
        "block": 121351431,
        "ts": "2026-11-23T10:49:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x06420168ed7e368dd8dcb30c79cdd0d8f4ccb3e6",
        "name": "Paper",
        "symbol": "PAPER",
        "deployer": "0x5ed93a19e87a2b53a5bb3c225c09177dbe98ff40",
        "block": 121351250,
        "ts": "2026-11-23T10:48:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x49e3a4582c005b80bd2ce40203246d9032b5e29a",
        "name": "Bobcat",
        "symbol": "BOBCAT",
        "deployer": "0x5fa150c3f053eabd913b1190ca2bfa5ff17dd885",
        "block": 121351222,
        "ts": "2026-11-23T10:48:46.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x39495522b5900ace64254bd11dcbf29e7d053ec2",
        "name": "Glacier",
        "symbol": "GLACIER",
        "deployer": "0x4337002c5702ce424cb62a56ca038e31e1d4a93d",
        "block": 121351118,
        "ts": "2026-11-23T10:48:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe17310a7bda872353fd9eff58b1d413a725f7777",
        "name": "Bobcat",
        "symbol": "BOBCAT",
        "deployer": "0xe6ffe34e3d03b534e599589bd90958f1fcd854d8",
        "block": 121351005,
        "ts": "2026-11-23T10:48:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x320c90bbc1ad4f447fccf27587720b9b50495e7e",
        "name": "HOLD",
        "symbol": "HOLD",
        "deployer": "0x5a0c36be54d8fca9a2a6a74de2aff503437121ce",
        "block": 121350865,
        "ts": "2026-11-23T10:48:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc0d6457c16cc70d6790dd43521c899c87ce02f35",
        "name": "Meta Platforms • Robinhood Token",
        "symbol": "META",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 121350750,
        "ts": "2026-11-23T10:47:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb66b5f7e1da791140a08f57fac0b816daf44176b",
        "name": "Vetoed",
        "symbol": "VETOED",
        "deployer": "0x4f86ad8c106154b8f0e7213887e291d65c0e32d7",
        "block": 121350716,
        "ts": "2026-11-23T10:47:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x803b4ff6234224b14b89d97b859863d0c528b5a7",
        "name": "DIVIDEND_TRACKER",
        "symbol": "DIVIDEND_TRACKER",
        "deployer": "0x7a7ea73433989033a2156bc247a85c8e8f2e7011",
        "block": 121350551,
        "ts": "2026-11-23T10:47:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1075b78f6ab802fcf332a408578e704e5c1e1187",
        "name": "Volcano",
        "symbol": "VOLCANO",
        "deployer": "0x4337004ec9c1417f1c7a26ebd4b4fbed6acf9e5d",
        "block": 121350547,
        "ts": "2026-11-23T10:47:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x14c49e6118f46525de9ab41a51cbaa3c6ebf181d",
        "name": "Rare Friends Generations",
        "symbol": "GENERATIONS",
        "deployer": "0x18dd3c14e34c1bc379f7538068c59160d9f68e25",
        "block": 121350387,
        "ts": "2026-11-23T10:47:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7d9ec8330e2f766d66336302091303deb8c02e43",
        "name": "PEARL",
        "symbol": "PRL",
        "deployer": "0xa3af060b6b7140866211c4d7ab608cede8432c70",
        "block": 121350197,
        "ts": "2026-11-23T10:46:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3968c6a102005b47d0abb5d4bc19620c0f80037b",
        "name": "Durian",
        "symbol": "DURIAN",
        "deployer": "0x4337002c5702ce424cb62a56ca038e31e1d4a93d",
        "block": 121349981,
        "ts": "2026-11-23T10:46:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x941ae714ec6d8130c7b75d67160ca08f1e7d11dd",
        "name": "Dell • Robinhood Token",
        "symbol": "DELL",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 121349530,
        "ts": "2026-11-23T10:45:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa30fa36db767ad9ed3f7a60fc79526fb4d56d344",
        "name": "United States Oil Fund • Robinhood Token",
        "symbol": "USO",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 121349408,
        "ts": "2026-11-23T10:45:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0e6edc9fcb62753040d585d841cdc8879a607777",
        "name": "Bobcat",
        "symbol": "BOBCAT",
        "deployer": "0x980b9bb5b3163638e0a35f8f26ff40547b16e2a9",
        "block": 121349391,
        "ts": "2026-11-23T10:45:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xaf3d76f1834a1d425780943c99ea8a608f8a93f9",
        "name": "Apple • Robinhood Token",
        "symbol": "AAPL",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 121349383,
        "ts": "2026-11-23T10:45:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x741ce601fb09862e0858bfbab8e1b88c4e5e0c32",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x6765cc3e81008f27292b4e91cd5ae36cee2151ed",
        "block": 121349372,
        "ts": "2026-11-23T10:45:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x59481a52ccbf02d094abac945152ef35d51d6f2d",
        "name": "SpaceXSuperIntelligence",
        "symbol": "SXSI",
        "deployer": "0x6765cc3e81008f27292b4e91cd5ae36cee2151ed",
        "block": 121349034,
        "ts": "2026-11-23T10:44:50.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xb0711574537f61298d43be9cebc05d8c5e6101e9",
        "name": "Stray Dog",
        "symbol": "DOG",
        "deployer": "0xca7ded7e4f4ba8ab3b10009236ae6d1b95094589",
        "block": 121348867,
        "ts": "2026-11-23T10:44:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x07f8d24a1d85a311afb2814dd083e90473135ebc",
        "name": "Mango",
        "symbol": "MANGO",
        "deployer": "0x4337005db25dbad41da5692ba1188751ee5d98b6",
        "block": 121348738,
        "ts": "2026-11-23T10:44:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb7d2c98d1c737b280fca8fdc55647ced236a77bf",
        "name": "Holdsgiving",
        "symbol": "Holdsgiving",
        "deployer": "0x91f5ff4bdb9df3785dc62c1e41bd68ce721d1eb9",
        "block": 121348707,
        "ts": "2026-11-23T10:44:17.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xd7f18b399d4110faa7ca0908fd09ba8845787777",
        "name": "Xmas",
        "symbol": "XMAS",
        "deployer": "0xe26a8a93a803f6dcc9355da3beac69d733ddfd5d",
        "block": 121348704,
        "ts": "2026-11-23T10:44:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd5d6db4f8b999d6b120b2a4cf59532da7652696b",
        "name": "Xmas",
        "symbol": "XMAS",
        "deployer": "0xe43888320d5361ce4357d0dccdb2aee4ad99b9a0",
        "block": 121348509,
        "ts": "2026-11-23T10:43:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2473fc2531050187446519cb53da77c21f730d5f",
        "name": "Wrapped NVIDIA • Robinhood Token",
        "symbol": "wNVDA",
        "deployer": "0x1e9891b933c123eb860a4ae8ba75f7c5b506eed5",
        "block": 121348276,
        "ts": "2026-11-23T10:43:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2db782f8c41700636ed7dae653b0c9ed0ab90087",
        "name": "Gatinho Carlos",
        "symbol": "wifout",
        "deployer": "0xb326902c4327d61e6c89e4944c3ef3d8a3194c0b",
        "block": 121348242,
        "ts": "2026-11-23T10:43:31.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
