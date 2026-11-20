/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-20T12:32:46.000Z",
    "opened_at": "2026-11-20T11:32:46.000Z",
    "window_hours": 1,
    "head_block": 119051909,
    "start_block": 119017753,
    "blocks_scanned": 34156,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 308,
    "unnamed_contracts": 4,
    "via_factory": 292,
    "no_receipt": 0,
    "candidates": 312,
    "mint_events": 13174,
    "deployers": 207,
    "roots": 413,
    "cleared_multiple": 257,
    "failed_gates": 254,
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
      "amc",
      "catnomics",
      "fiona"
    ],
    "top": {
      "root": "catnomics",
      "launches": 9,
      "deployers": 9,
      "baseline_share": 0.0004,
      "multiple": 73.1,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "catnomics",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 73.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "fiona",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 48.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "amc",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.001,
        "multiple": 19.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 26,
        "deployers": 13,
        "baseline_share": 0.0509,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "uniswap: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 20,
        "deployers": 10,
        "baseline_share": 0.0424,
        "multiple": 1.5,
        "state": "BELOW",
        "reason": "uni: 1.5x over baseline < 6.0x required"
      },
      {
        "root": "robinhood",
        "launches": 19,
        "deployers": 7,
        "baseline_share": 0.0513,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "robinhood: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "usdg",
        "launches": 11,
        "deployers": 10,
        "baseline_share": 0.0203,
        "multiple": 1.8,
        "state": "BELOW",
        "reason": "usdg: 1.8x over baseline < 6.0x required"
      },
      {
        "root": "amm",
        "launches": 7,
        "deployers": 2,
        "baseline_share": 0.0062,
        "multiple": 3.7,
        "state": "BELOW",
        "reason": "amm: 3.7x over baseline < 6.0x required"
      },
      {
        "root": "volatile",
        "launches": 7,
        "deployers": 2,
        "baseline_share": 0.0083,
        "multiple": 2.7,
        "state": "BELOW",
        "reason": "volatile: 2.7x over baseline < 6.0x required"
      },
      {
        "root": "cat",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.013,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "cat: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "borrowable",
        "launches": 6,
        "deployers": 2,
        "baseline_share": 0.0027,
        "multiple": 7.2,
        "state": "THIN",
        "reason": "borrowable: 2 deployers < 6 required"
      },
      {
        "root": "lend",
        "launches": 6,
        "deployers": 2,
        "baseline_share": 0.0027,
        "multiple": 7.2,
        "state": "THIN",
        "reason": "lend: 2 deployers < 6 required"
      },
      {
        "root": "flock",
        "launches": 6,
        "deployers": 2,
        "baseline_share": 0.0032,
        "multiple": 6.1,
        "state": "THIN",
        "reason": "flock: 2 deployers < 6 required"
      },
      {
        "root": "cow",
        "launches": 6,
        "deployers": 2,
        "baseline_share": 0.0072,
        "multiple": 2.7,
        "state": "BELOW",
        "reason": "cow: 2.7x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0167,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "positions: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "mario",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 40.6,
        "state": "THIN",
        "reason": "mario: 5 deployers < 6 required"
      },
      {
        "root": "brownfi",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0025,
        "multiple": 6.5,
        "state": "THIN",
        "reason": "brownfi: 4 deployers < 6 required"
      },
      {
        "root": "bf",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0027,
        "multiple": 6,
        "state": "THIN",
        "reason": "bf: 4 deployers < 6 required"
      },
      {
        "root": "rh",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0036,
        "multiple": 4.5,
        "state": "BELOW",
        "reason": "rh: 4.5x over baseline < 6.0x required"
      },
      {
        "root": "giga",
        "launches": 5,
        "deployers": 2,
        "baseline_share": 0.0041,
        "multiple": 4,
        "state": "BELOW",
        "reason": "giga: 4.0x over baseline < 6.0x required"
      },
      {
        "root": "layerbank",
        "launches": 5,
        "deployers": 2,
        "baseline_share": 0.0053,
        "multiple": 3.1,
        "state": "BELOW",
        "reason": "layerbank: 3.1x over baseline < 6.0x required"
      },
      {
        "root": "ai",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0081,
        "multiple": 2,
        "state": "BELOW",
        "reason": "ai: 2.0x over baseline < 6.0x required"
      },
      {
        "root": "nft",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0201,
        "multiple": 0.8,
        "state": "BELOW",
        "reason": "nft: 0.8x over baseline < 6.0x required"
      },
      {
        "root": "hippo",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 32.5,
        "state": "THIN",
        "reason": "hippo: 4 launches < 5 required"
      },
      {
        "root": "aero",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0056,
        "multiple": 2.3,
        "state": "BELOW",
        "reason": "aero: 2.3x over baseline < 6.0x required"
      },
      {
        "root": "weth",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0073,
        "multiple": 1.8,
        "state": "BELOW",
        "reason": "weth: 1.8x over baseline < 6.0x required"
      },
      {
        "root": "dacitycoin",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.4,
        "state": "THIN",
        "reason": "dacitycoin: 3 launches < 5 required"
      },
      {
        "root": "dcty",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.4,
        "state": "THIN",
        "reason": "dcty: 3 launches < 5 required"
      },
      {
        "root": "meow",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.4,
        "state": "THIN",
        "reason": "meow: 3 launches < 5 required"
      },
      {
        "root": "rudolph",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.4,
        "state": "THIN",
        "reason": "rudolph: 3 launches < 5 required"
      },
      {
        "root": "rudy",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.4,
        "state": "THIN",
        "reason": "rudy: 3 launches < 5 required"
      },
      {
        "root": "anthropic",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0024,
        "multiple": 4.1,
        "state": "BELOW",
        "reason": "anthropic: 4.1x over baseline < 6.0x required"
      },
      {
        "root": "fund",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0029,
        "multiple": 3.4,
        "state": "BELOW",
        "reason": "fund: 3.4x over baseline < 6.0x required"
      },
      {
        "root": "box",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0034,
        "multiple": 2.9,
        "state": "BELOW",
        "reason": "box: 2.9x over baseline < 6.0x required"
      },
      {
        "root": "bucket",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0036,
        "multiple": 2.7,
        "state": "BELOW",
        "reason": "bucket: 2.7x over baseline < 6.0x required"
      },
      {
        "root": "reward",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0037,
        "multiple": 2.6,
        "state": "BELOW",
        "reason": "reward: 2.6x over baseline < 6.0x required"
      },
      {
        "root": "chop",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0041,
        "multiple": 2.4,
        "state": "BELOW",
        "reason": "chop: 2.4x over baseline < 6.0x required"
      },
      {
        "root": "slvr",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0041,
        "multiple": 2.4,
        "state": "BELOW",
        "reason": "slvr: 2.4x over baseline < 6.0x required"
      },
      {
        "root": "deposit",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0049,
        "multiple": 2,
        "state": "BELOW",
        "reason": "deposit: 2.0x over baseline < 6.0x required"
      },
      {
        "root": "long",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0059,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "long: 1.7x over baseline < 6.0x required"
      }
    ],
    "recent": [
      {
        "address": "0xf177d86a28b520e3e396e4f3b96cd8e72d7dabd8",
        "name": "Uniswap",
        "symbol": "UNI",
        "deployer": "0x96111cc4867c5e1c22da4b79bb8852b9e2a07eb1",
        "block": 119051878,
        "ts": "2026-11-20T12:32:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc0d6457c16cc70d6790dd43521c899c87ce02f35",
        "name": "Meta Platforms • Robinhood Token",
        "symbol": "META",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 119051724,
        "ts": "2026-11-20T12:32:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd41838ec6ed53a230becca419f18f5cea9e93ddf",
        "name": "YOULIP Media",
        "symbol": "YOULIP",
        "deployer": "0x9266372bfc7643fd4ded0806135a24f95495b7a1",
        "block": 119051676,
        "ts": "2026-11-20T12:32:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfdf5e90c5360de4e2a8540f7d3c80de0ff29072c",
        "name": "Fendro",
        "symbol": "FENDRO",
        "deployer": "0xf6ff8b6f7afd890b05cae931081249e03a20e02d",
        "block": 119051347,
        "ts": "2026-11-20T12:31:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3140cfa8f668f21ae12c64cc4ea9076beb62fb04",
        "name": "AuctraAgent",
        "symbol": "AUCTRA",
        "deployer": "0x1895e9775db87153b349c5c1a031658fc70db1e6",
        "block": 119051104,
        "ts": "2026-11-20T12:31:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x87086329b677c94df4da5dfe9a8da90c73c535bf",
        "name": "Volatile AMM - UP/USDG",
        "symbol": "vAMM-UP/USDG",
        "deployer": "0x609c873861fe5db54ec982d476d6535c1561f94c",
        "block": 119051070,
        "ts": "2026-11-20T12:31:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4249d3714db23cdcbe423391394db4ea3bd70b2c",
        "name": "A Mario Cat",
        "symbol": "AMC",
        "deployer": "0x3e16e576ad0563a96ae69446fc61c46004fa74d8",
        "block": 119050939,
        "ts": "2026-11-20T12:31:04.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xbd5830ece1e0e07ad114790bff433e62c611874e",
        "name": "Space Exploration Technologies Corps",
        "symbol": "SPCX",
        "deployer": "0x1a4c653beb3abe1a7333fc337f523d2b6c53ecac",
        "block": 119050834,
        "ts": "2026-11-20T12:30:53.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x815b21b369db10ad07b184266f7c39ccb1a6b1db",
        "name": "First Find",
        "symbol": "FIRST",
        "deployer": "0xfbeb39a0c0ff60f6bd2c08b8cebea91e0daac7f3",
        "block": 119050582,
        "ts": "2026-11-20T12:30:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8216b56be9e9dd3f9dcb5aa7401d51514dc8424c",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xb3bed59a3c7c6f08a71898711fad695a88995678",
        "block": 119050380,
        "ts": "2026-11-20T12:30:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x69e447d04108926769a6e9e16f6762eb558e9424",
        "name": "$Bond Game Token",
        "symbol": "GRAPE",
        "deployer": "0x65ce981b83b748197e0ff0747382035e78a2ab8d",
        "block": 119050362,
        "ts": "2026-11-20T12:30:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6735c3a8013989898e233e97d2d63f34bcf9fa30",
        "name": "$Bond Game Token",
        "symbol": "CEDAR",
        "deployer": "0x65ce981b83b748197e0ff0747382035e78a2ab8d",
        "block": 119050349,
        "ts": "2026-11-20T12:30:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1fb9e9aea5585cf10af9658676934bf1bd1c776f",
        "name": "FomoCoin",
        "symbol": "FomoCoin",
        "deployer": "0x02ad6bf20ce4ed4418f9346dd678286506aa2877",
        "block": 119049844,
        "ts": "2026-11-20T12:29:08.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x33183a9222d6992cadee7487ccc2f51f98287fc5",
        "name": "DacityCoin",
        "symbol": "DCTY",
        "deployer": "0x286efd3eef17c3d17c7460c01e6be6f9a17eb91b",
        "block": 119049799,
        "ts": "2026-11-20T12:29:03.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xc79011f8689d7c2fdc5ae582d5e2e9b40d6bbf7b",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x22b12e9867f0ece50cf321111a70863dc8ad3f75",
        "block": 119049555,
        "ts": "2026-11-20T12:28:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x84b46a50ce5f445e1a02fc34f182ea51de927777",
        "name": "Catnomics",
        "symbol": "Catnomics",
        "deployer": "0x0e26fba9d95f8e50d1a9dbb86449b424ab5c58ec",
        "block": 119049513,
        "ts": "2026-11-20T12:28:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x761166e11ec050f42f1d40ce8e7c3b5b90749e48",
        "name": "SHIESTY Ghosts",
        "symbol": "GHOST",
        "deployer": "0x4b6f81b96ff4013f1ff05a96ceee73de092e4cf4",
        "block": 119049435,
        "ts": "2026-11-20T12:28:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5f7dce234918317f177f90d2aadab0ea57757097",
        "name": "Maxxing",
        "symbol": "Maxxing",
        "deployer": "0x22b12e9867f0ece50cf321111a70863dc8ad3f75",
        "block": 119049417,
        "ts": "2026-11-20T12:28:21.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x452295ce3322803f22be55970e9f6662310453b8",
        "name": "Meow",
        "symbol": "MEOW",
        "deployer": "0x614b4a40d8bf450a71f779826583a4ff2213ed52",
        "block": 119048806,
        "ts": "2026-11-20T12:27:18.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xd881830feafb6ffc3a1d5ca26ed73ad02cdb9a42",
        "name": "Crack",
        "symbol": "CRACK",
        "deployer": "0x2a252f02b008a1f3ea2b11a71515829bdcb1d71b",
        "block": 119048775,
        "ts": "2026-11-20T12:27:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3adfcf10a46f775b9f37868892c8ba28a4184439",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x019211f714755fe64dd947c1938aedc019038788",
        "block": 119048562,
        "ts": "2026-11-20T12:26:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf0ac8f401f5a70efdf069a50969638b9b31883dd",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xb3bed59a3c7c6f08a71898711fad695a88995678",
        "block": 119048465,
        "ts": "2026-11-20T12:26:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbdbf55a97137137ff99fbc4482040259d4690da5",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x019211f714755fe64dd947c1938aedc019038788",
        "block": 119048455,
        "ts": "2026-11-20T12:26:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xabc83c3f04c3dec51ce32f8aa83be281e1b27dad",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x019211f714755fe64dd947c1938aedc019038788",
        "block": 119048382,
        "ts": "2026-11-20T12:26:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0e49718b25e1cdf49bc62068198465b1681827e5",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x019211f714755fe64dd947c1938aedc019038788",
        "block": 119048259,
        "ts": "2026-11-20T12:26:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3b7a8deb3f7c4848e6d54965f9b7bd4e67b868db",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xb3bed59a3c7c6f08a71898711fad695a88995678",
        "block": 119048161,
        "ts": "2026-11-20T12:26:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8da525b1aafa09db805b765a30aed24f45ad6a74",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x019211f714755fe64dd947c1938aedc019038788",
        "block": 119048144,
        "ts": "2026-11-20T12:26:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x025777761e688602b1dca5fd38b60b19a08c0eb7",
        "name": "ONI RH",
        "symbol": "ONIRH",
        "deployer": "0xc70daf7356bc5f2ef6008e0faa7e076c47c6e7f3",
        "block": 119048059,
        "ts": "2026-11-20T12:26:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x19e20ba42f51500863407464514491133bdd9d06",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x019211f714755fe64dd947c1938aedc019038788",
        "block": 119048023,
        "ts": "2026-11-20T12:25:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x275850ea46f92203d345364a2d138048d182fb35",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x019211f714755fe64dd947c1938aedc019038788",
        "block": 119047920,
        "ts": "2026-11-20T12:25:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1af24c2ccd35ac38f46b4e18535bcfe1887cbd24",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x509cb59ca43f9dbd6c9b0db13f4401655da1155e",
        "block": 119047785,
        "ts": "2026-11-20T12:25:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdf7641702ae2d5f288e887b381e2173e33c5283e",
        "name": "Robinhood Cyber Samurai",
        "symbol": "rhcybersamurai",
        "deployer": "0x67d698a325f29e17a9477f28ba4fe50f1cec60e4",
        "block": 119047744,
        "ts": "2026-11-20T12:25:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa0914f174d664811ac6143a80f11bd63ae477530",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x019211f714755fe64dd947c1938aedc019038788",
        "block": 119047659,
        "ts": "2026-11-20T12:25:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf42b4e1a3fd374b1f849bf898edc64ab17df06ea",
        "name": "one coin",
        "symbol": "ONECOIN",
        "deployer": "0xcc7150deedc2cea70d44033c5c31ea3466a9dd0d",
        "block": 119046909,
        "ts": "2026-11-20T12:23:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb2babc4731c9bc67c40105ac6dae07757d3f4364",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xb3bed59a3c7c6f08a71898711fad695a88995678",
        "block": 119046833,
        "ts": "2026-11-20T12:23:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x465bb16d3d56fb87f65638cbc93c76c70bd8a09f",
        "name": "Bucket: Chips and AI",
        "symbol": "bCHIPS",
        "deployer": "0x2ccc152ad68419f777531e6a40a52325e2a80ee2",
        "block": 119046477,
        "ts": "2026-11-20T12:23:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1c92485a9e25f382741084b463332b20d88287bc",
        "name": "Flock Lend Borrowable",
        "symbol": "bFLOCK",
        "deployer": "0xe808f3cf00ee276804d0685d20ae67d5cd320eca",
        "block": 119046460,
        "ts": "2026-11-20T12:23:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa21ceb4cf145a87760bc96619e03bc3e83f29d92",
        "name": "Flock Lend Borrowable",
        "symbol": "bFLOCK",
        "deployer": "0xe808f3cf00ee276804d0685d20ae67d5cd320eca",
        "block": 119046460,
        "ts": "2026-11-20T12:23:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2226d9c5da57ffc480a2ef0346afc3198fad50fe",
        "name": "Flock Lend Borrowable",
        "symbol": "bFLOCK",
        "deployer": "0xe808f3cf00ee276804d0685d20ae67d5cd320eca",
        "block": 119046460,
        "ts": "2026-11-20T12:23:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8281c5b4658a5ef2cb14d6d12c5ac4b0381604a2",
        "name": "Flock Lend Borrowable",
        "symbol": "bFLOCK",
        "deployer": "0xe808f3cf00ee276804d0685d20ae67d5cd320eca",
        "block": 119046460,
        "ts": "2026-11-20T12:23:13.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
