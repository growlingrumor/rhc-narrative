/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-21T21:44:18.000Z",
    "opened_at": "2026-11-21T20:44:18.000Z",
    "window_hours": 1,
    "head_block": 120175334,
    "start_block": 120143370,
    "blocks_scanned": 31964,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 226,
    "unnamed_contracts": 0,
    "via_factory": 199,
    "no_receipt": 0,
    "candidates": 226,
    "mint_events": 8787,
    "deployers": 153,
    "roots": 346,
    "cleared_multiple": 238,
    "failed_gates": 237,
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
      "froggy"
    ],
    "top": {
      "root": "froggy",
      "launches": 6,
      "deployers": 6,
      "baseline_share": 0.0004,
      "multiple": 66.4,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "froggy",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 66.4,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 11,
        "deployers": 7,
        "baseline_share": 0.0509,
        "multiple": 1,
        "state": "BELOW",
        "reason": "uniswap: 1.0x over baseline < 6.0x required"
      },
      {
        "root": "cow",
        "launches": 6,
        "deployers": 1,
        "baseline_share": 0.0072,
        "multiple": 3.7,
        "state": "BELOW",
        "reason": "cow: 3.7x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 6,
        "deployers": 5,
        "baseline_share": 0.0424,
        "multiple": 0.6,
        "state": "BELOW",
        "reason": "uni: 0.6x over baseline < 6.0x required"
      },
      {
        "root": "lux",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 55.3,
        "state": "THIN",
        "reason": "lux: 5 deployers < 6 required"
      },
      {
        "root": "uranus",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 55.3,
        "state": "THIN",
        "reason": "uranus: 5 deployers < 6 required"
      },
      {
        "root": "zerolux",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 55.3,
        "state": "THIN",
        "reason": "zerolux: 5 deployers < 6 required"
      },
      {
        "root": "fun",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0044,
        "multiple": 5,
        "state": "BELOW",
        "reason": "fun: 5.0x over baseline < 6.0x required"
      },
      {
        "root": "aero",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0056,
        "multiple": 4,
        "state": "BELOW",
        "reason": "aero: 4.0x over baseline < 6.0x required"
      },
      {
        "root": "usdg",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0203,
        "multiple": 1.1,
        "state": "BELOW",
        "reason": "usdg: 1.1x over baseline < 6.0x required"
      },
      {
        "root": "robinhood",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0513,
        "multiple": 0.4,
        "state": "BELOW",
        "reason": "robinhood: 0.4x over baseline < 6.0x required"
      },
      {
        "root": "hy",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 44.2,
        "state": "THIN",
        "reason": "hy: 4 launches < 5 required"
      },
      {
        "root": "goat",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0005,
        "multiple": 35.4,
        "state": "THIN",
        "reason": "goat: 4 launches < 5 required"
      },
      {
        "root": "bucket",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0036,
        "multiple": 4.9,
        "state": "BELOW",
        "reason": "bucket: 4.9x over baseline < 6.0x required"
      },
      {
        "root": "weth",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0073,
        "multiple": 2.4,
        "state": "BELOW",
        "reason": "weth: 2.4x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0167,
        "multiple": 1.1,
        "state": "BELOW",
        "reason": "positions: 1.1x over baseline < 6.0x required"
      },
      {
        "root": "dragon",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 33.2,
        "state": "THIN",
        "reason": "dragon: 3 launches < 5 required"
      },
      {
        "root": "ordo",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 33.2,
        "state": "THIN",
        "reason": "ordo: 3 launches < 5 required"
      },
      {
        "root": "reward",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0037,
        "multiple": 3.6,
        "state": "BELOW",
        "reason": "reward: 3.6x over baseline < 6.0x required"
      },
      {
        "root": "chop",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0041,
        "multiple": 3.2,
        "state": "BELOW",
        "reason": "chop: 3.2x over baseline < 6.0x required"
      },
      {
        "root": "hood",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0108,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "hood: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "nft",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0201,
        "multiple": 0.7,
        "state": "BELOW",
        "reason": "nft: 0.7x over baseline < 6.0x required"
      },
      {
        "root": "aetheryn",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 22.1,
        "state": "THIN",
        "reason": "aetheryn: 2 launches < 5 required"
      },
      {
        "root": "antchain",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 22.1,
        "state": "THIN",
        "reason": "antchain: 2 launches < 5 required"
      },
      {
        "root": "diddler",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 22.1,
        "state": "THIN",
        "reason": "diddler: 2 launches < 5 required"
      },
      {
        "root": "dogecoin",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 22.1,
        "state": "THIN",
        "reason": "dogecoin: 2 launches < 5 required"
      },
      {
        "root": "droid",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 22.1,
        "state": "THIN",
        "reason": "droid: 2 launches < 5 required"
      },
      {
        "root": "fd",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 22.1,
        "state": "THIN",
        "reason": "fd: 2 launches < 5 required"
      },
      {
        "root": "lip",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 22.1,
        "state": "THIN",
        "reason": "lip: 2 launches < 5 required"
      },
      {
        "root": "medieval",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 22.1,
        "state": "THIN",
        "reason": "medieval: 2 launches < 5 required"
      },
      {
        "root": "monke",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 22.1,
        "state": "THIN",
        "reason": "monke: 2 launches < 5 required"
      },
      {
        "root": "moss",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 22.1,
        "state": "THIN",
        "reason": "moss: 2 launches < 5 required"
      },
      {
        "root": "putin",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 22.1,
        "state": "THIN",
        "reason": "putin: 2 launches < 5 required"
      },
      {
        "root": "qilin",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 22.1,
        "state": "THIN",
        "reason": "qilin: 2 launches < 5 required"
      },
      {
        "root": "squirrel",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 22.1,
        "state": "THIN",
        "reason": "squirrel: 2 launches < 5 required"
      },
      {
        "root": "three",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 22.1,
        "state": "THIN",
        "reason": "three: 2 launches < 5 required"
      },
      {
        "root": "trophy",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 22.1,
        "state": "THIN",
        "reason": "trophy: 2 launches < 5 required"
      },
      {
        "root": "watching",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 22.1,
        "state": "THIN",
        "reason": "watching: 2 launches < 5 required"
      },
      {
        "root": "winedroid",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 22.1,
        "state": "THIN",
        "reason": "winedroid: 2 launches < 5 required"
      },
      {
        "root": "ylp",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 22.1,
        "state": "THIN",
        "reason": "ylp: 2 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0xa76a00632e75e20602d301eb8f41c4e9c5640087",
        "name": "Singularity",
        "symbol": "Singularit",
        "deployer": "0xb326902c4327d61e6c89e4944c3ef3d8a3194c0b",
        "block": 120174845,
        "ts": "2026-11-21T21:43:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x465bb16d3d56fb87f65638cbc93c76c70bd8a09f",
        "name": "Bucket: Chips and AI",
        "symbol": "bCHIPS",
        "deployer": "0x2ccc152ad68419f777531e6a40a52325e2a80ee2",
        "block": 120174732,
        "ts": "2026-11-21T21:43:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf1b5b8bb783e8962e2aad0896b141e9572d47777",
        "name": "Middle Oil Eastern Reserve",
        "symbol": "MOER",
        "deployer": "0x7485fbfd99993dab4c9964f53791e40d14253c97",
        "block": 120174626,
        "ts": "2026-11-21T21:42:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb1f584ae170722dadac3d56a012f40ae5584baf2",
        "name": "Bucket: Crypto",
        "symbol": "bCRYPTO",
        "deployer": "0x2ccc152ad68419f777531e6a40a52325e2a80ee2",
        "block": 120174522,
        "ts": "2026-11-21T21:42:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2319a3f0050ffae1ba5f6f5bcdb96e14e0dbd0ed",
        "name": "Soul Cycle",
        "symbol": "SOULC",
        "deployer": "0x8ec735d82ab7c502d5c4b152e2a4a95d727f6ca6",
        "block": 120174392,
        "ts": "2026-11-21T21:42:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3b7a8deb3f7c4848e6d54965f9b7bd4e67b868db",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x9bee6167102ac060989aa80b3a22d624014731f8",
        "block": 120174346,
        "ts": "2026-11-21T21:42:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf0ac8f401f5a70efdf069a50969638b9b31883dd",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x9bee6167102ac060989aa80b3a22d624014731f8",
        "block": 120174021,
        "ts": "2026-11-21T21:41:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x61a9714862200409828286df635d06c1bccf3c4c",
        "name": "ZXOXO Mined",
        "symbol": "mZXO",
        "deployer": "0x0b9f56ca6063f8e0368ce59ee0ea070788888888",
        "block": 120174013,
        "ts": "2026-11-21T21:41:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb07dc6ce22f0c72353261560ca01be3e9f6d1e18",
        "name": "buttdetoicoin",
        "symbol": "BUTTDETOI",
        "deployer": "0xd20278dc748cfe4a381e8969751873f1ab80cce4",
        "block": 120173868,
        "ts": "2026-11-21T21:41:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x79cf4e3ad96267e459d9545642f7ef01a3bf56a6",
        "name": "MONINJA",
        "symbol": "MNJIK",
        "deployer": "0x8491021ed619c53705852474de4a72367d789210",
        "block": 120173502,
        "ts": "2026-11-21T21:40:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x27312c80d6acfb89e2d7321911d91f6283352ee9",
        "name": "Lumina Beetle Rangers",
        "symbol": "LBR",
        "deployer": "0xc12e3657ce2ede7fae1d6f5a83b386f6a630fd18",
        "block": 120173311,
        "ts": "2026-11-21T21:40:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcdf8975ace2fccac5c8ddda76522e997d4c0f798",
        "name": "Bucket Series E",
        "symbol": "BKTE",
        "deployer": "0x82daae191b398667a4a0a7242d9f9ff5577627c4",
        "block": 120172698,
        "ts": "2026-11-21T21:39:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfddbea888911bd795f59e745e3f59f4149809ba3",
        "name": "Uranus",
        "symbol": "URANUS",
        "deployer": "0x0545c6ed9eaa56eacb268798b68cd869c3aa538c",
        "block": 120172359,
        "ts": "2026-11-21T21:38:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4a35a5ec2a50a4d2957b2f2366e017f526cab318",
        "name": "Foundry Compute Dollar",
        "symbol": "USDF",
        "deployer": "0xc1f3547241fe1bc7cb4fb943c67ef5d0263da352",
        "block": 120171841,
        "ts": "2026-11-21T21:37:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa8a3df7751f57564fdf768904e7c5343e66deddd",
        "name": "antify",
        "symbol": "ANTIFY",
        "deployer": "0xf4a6f0263fd6fc2f6d5fa63b803e8d9849dec97a",
        "block": 120171761,
        "ts": "2026-11-21T21:37:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x46b8855e1dc3f70ddc5d9d8fa4e88807e5db0126",
        "name": "ину",
        "symbol": "ину",
        "deployer": "0xc13ff2a29f6ba439c7934bc691eecace8862a65a",
        "block": 120171737,
        "ts": "2026-11-21T21:37:23.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x859f2c1a4de01343613381bce6630e5ab9577777",
        "name": "HelmSwap",
        "symbol": "HELM",
        "deployer": "0xa7ba884561771e707f7f29bd5388b77f1e470daf",
        "block": 120171517,
        "ts": "2026-11-21T21:36:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa3d42ebb4336440c5268542a9f8491b8d69c7777",
        "name": "CatTok",
        "symbol": "CATTOK",
        "deployer": "0x1b4ebe73585b94578dc055c6ac7e89333fdadcf7",
        "block": 120171504,
        "ts": "2026-11-21T21:36:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfdfb2eed963ef6e4a5de5b6a6303e52ea2ab72b4",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x4031f7c8b447d1b502f0fb6691f42d07de3c56ba",
        "block": 120171299,
        "ts": "2026-11-21T21:36:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xff1e23db4d3d8281e7873cece57105f5af47ca2b",
        "name": "FUEL",
        "symbol": "FUEL",
        "deployer": "0x137155fbeeddcdd01ed53792b33181c4099e98e7",
        "block": 120171044,
        "ts": "2026-11-21T21:36:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4c13356742c87a25a729ebd6dd69071c1f5629f7",
        "name": "ину",
        "symbol": "ину",
        "deployer": "0x2069fba72d9059b152f82b72884ad06251a146df",
        "block": 120170984,
        "ts": "2026-11-21T21:35:56.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x90c4041af842fede61ed68d87c0e45c0bfb80e30",
        "name": "WETH-QQQ Ramses v2.3 LP Vault",
        "symbol": "uvWETHQQQ",
        "deployer": "0xe8f0891818bde048457dc8f5c29d6d711e71ef77",
        "block": 120170646,
        "ts": "2026-11-21T21:35:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa4b1cdc492c7dbd3d021429d8a586894afc8543d",
        "name": "OpenCrown",
        "symbol": "CROWN",
        "deployer": "0x7a74c5c97486cd6df233bb5347e2902c1bfe5a71",
        "block": 120170505,
        "ts": "2026-11-21T21:35:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4c8bfa955e22824f502d2c06e4bc5b61dba5de35",
        "name": "VEXLO",
        "symbol": "VEXLO",
        "deployer": "0x7a74c5c97486cd6df233bb5347e2902c1bfe5a71",
        "block": 120170450,
        "ts": "2026-11-21T21:34:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6b9fb7b22f0337c721c3acb7dc94d06f54b30087",
        "name": "WW PUTIN",
        "symbol": "WWPUTIN",
        "deployer": "0x34800796b9af08ff48370c1023601d0597f3b431",
        "block": 120170373,
        "ts": "2026-11-21T21:34:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4b5c01cea19f1be1eba073b930ec1f8d6ce88ab9",
        "name": "STOCK",
        "symbol": "STOCK",
        "deployer": "0x01dc6c88cfb82d8d51ece86a23f79df0562e7d2e",
        "block": 120170349,
        "ts": "2026-11-21T21:34:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd364f6470cdda9110024513aca0f1ece72a61e59",
        "name": "MemeOween",
        "symbol": "MEMEOWEEN",
        "deployer": "0x4031f7c8b447d1b502f0fb6691f42d07de3c56ba",
        "block": 120170052,
        "ts": "2026-11-21T21:34:06.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x6e6bd9a0bfa5e78080edf9f8fc353db5238b1e18",
        "name": "Tits With Stock Earnings",
        "symbol": "TWSE",
        "deployer": "0xd20278dc748cfe4a381e8969751873f1ab80cce4",
        "block": 120170051,
        "ts": "2026-11-21T21:34:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x45d46a24ca9f08dd6ef128e05ae61834179cde5d",
        "name": "ину",
        "symbol": "ину",
        "deployer": "0xe367587737e9e5416f968096ff707d35da8faadb",
        "block": 120169512,
        "ts": "2026-11-21T21:33:04.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xa05f13327e5ddb8fc4e9583fffd9c8af1a714610",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x59cfdbb3ee10f02b69123520db0da72b9b3a199d",
        "block": 120169338,
        "ts": "2026-11-21T21:32:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc21df1bb620ebe7f5ae0144df50de28ce0d47ae7",
        "name": "GMCards",
        "symbol": "GM",
        "deployer": "0x05c2974d048d90ec5bfa124b6369396727b900fd",
        "block": 120168996,
        "ts": "2026-11-21T21:32:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x06e10a833c2447ba5ec840fb80c64eb099976d1e",
        "name": "MEMO",
        "symbol": "MEMO",
        "deployer": "0xc50181eedbe3532dad3bf0699b92f2bf4ad4668d",
        "block": 120168830,
        "ts": "2026-11-21T21:31:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x608729116fcf652fd12ac366314184adbca01e18",
        "name": "GARYWIFHAT",
        "symbol": "WIF",
        "deployer": "0xf7093908040391c187f7644c4e42f7fe6f76cc88",
        "block": 120168552,
        "ts": "2026-11-21T21:31:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x63c90a811a8c483b0bc564a0f957de329589f38b",
        "name": "GTA GIWA",
        "symbol": "GTA",
        "deployer": "0x9b03cc56924a690d849309c8530d6daccbcdc3f4",
        "block": 120168438,
        "ts": "2026-11-21T21:31:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6e8325ef171d8575a85b50d1ad1fa985648a1e18",
        "name": "Gary The Gator",
        "symbol": "GARY",
        "deployer": "0xd20278dc748cfe4a381e8969751873f1ab80cce4",
        "block": 120168357,
        "ts": "2026-11-21T21:30:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd68c24a728c6a416b6867bf835e2aa5507669ee2",
        "name": "ZOMO Small Cap",
        "symbol": "ZOMOSC",
        "deployer": "0x2340d4f0179eee65468f954318f252db89aee018",
        "block": 120168026,
        "ts": "2026-11-21T21:30:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x31e923bbf710b94fc7f9d632d30e636e1ac30d6e",
        "name": "ину",
        "symbol": "ину",
        "deployer": "0x9d529139fa236e7d2ce4cd58a0f36e66fa5a77e6",
        "block": 120167914,
        "ts": "2026-11-21T21:30:02.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x43d0eb1c3a4d6b089358d22267cc5b9239086845",
        "name": "Ashlars",
        "symbol": "STONE",
        "deployer": "0x72ba0cf2bc0d999a37d6da8184ec601f53987ee2",
        "block": 120167723,
        "ts": "2026-11-21T21:29:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5b20c9d06d759ad395e2d614ab3fbc86f317e13d",
        "name": "Chop RAETO",
        "symbol": "chRAETO",
        "deployer": "0x9dda4b7034666185739bd2a48e54f628e698f5a6",
        "block": 120167324,
        "ts": "2026-11-21T21:28:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x65aba99e5d545f1d0b3dccdeccaeaf9b3a55a10f",
        "name": "TOXIC SHARK #??? - Mystery Shark",
        "symbol": "A",
        "deployer": "0x2ecd271c9718ee9e93f5fd2d8920840958b44285",
        "block": 120167178,
        "ts": "2026-11-21T21:28:35.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
