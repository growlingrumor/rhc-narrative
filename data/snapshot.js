/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-26T11:30:02.000Z",
    "opened_at": "2026-11-26T10:30:02.000Z",
    "window_hours": 1,
    "head_block": 123595350,
    "start_block": 123582502,
    "blocks_scanned": 12848,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 268,
    "unnamed_contracts": 0,
    "via_factory": 248,
    "no_receipt": 0,
    "candidates": 268,
    "mint_events": 9931,
    "deployers": 160,
    "roots": 334,
    "cleared_multiple": 238,
    "failed_gates": 238,
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
    "themes": [],
    "top": null,
    "rows": [
      {
        "root": "aero",
        "launches": 24,
        "deployers": 2,
        "baseline_share": 0.0056,
        "multiple": 16,
        "state": "THIN",
        "reason": "aero: 2 deployers < 6 required"
      },
      {
        "root": "cow",
        "launches": 18,
        "deployers": 1,
        "baseline_share": 0.0072,
        "multiple": 9.3,
        "state": "THIN",
        "reason": "cow: 1 deployers < 6 required"
      },
      {
        "root": "uniswap",
        "launches": 18,
        "deployers": 11,
        "baseline_share": 0.0509,
        "multiple": 1.3,
        "state": "BELOW",
        "reason": "uniswap: 1.3x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 16,
        "deployers": 9,
        "baseline_share": 0.0424,
        "multiple": 1.4,
        "state": "BELOW",
        "reason": "uni: 1.4x over baseline < 6.0x required"
      },
      {
        "root": "robinhood",
        "launches": 12,
        "deployers": 3,
        "baseline_share": 0.0513,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "robinhood: 0.9x over baseline < 6.0x required"
      },
      {
        "root": "deposit",
        "launches": 10,
        "deployers": 2,
        "baseline_share": 0.0049,
        "multiple": 7.6,
        "state": "THIN",
        "reason": "deposit: 2 deployers < 6 required"
      },
      {
        "root": "safety",
        "launches": 9,
        "deployers": 1,
        "baseline_share": 0.0031,
        "multiple": 10.8,
        "state": "THIN",
        "reason": "safety: 1 deployers < 6 required"
      },
      {
        "root": "box",
        "launches": 9,
        "deployers": 1,
        "baseline_share": 0.0034,
        "multiple": 9.9,
        "state": "THIN",
        "reason": "box: 1 deployers < 6 required"
      },
      {
        "root": "reward",
        "launches": 9,
        "deployers": 1,
        "baseline_share": 0.0037,
        "multiple": 9.1,
        "state": "THIN",
        "reason": "reward: 1 deployers < 6 required"
      },
      {
        "root": "usdg",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0203,
        "multiple": 1.5,
        "state": "BELOW",
        "reason": "usdg: 1.5x over baseline < 6.0x required"
      },
      {
        "root": "chop",
        "launches": 6,
        "deployers": 5,
        "baseline_share": 0.0041,
        "multiple": 5.5,
        "state": "BELOW",
        "reason": "chop: 5.5x over baseline < 6.0x required"
      },
      {
        "root": "huygena",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 46.6,
        "state": "THIN",
        "reason": "huygena: 5 deployers < 6 required"
      },
      {
        "root": "hyena",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 46.6,
        "state": "THIN",
        "reason": "hyena: 5 deployers < 6 required"
      },
      {
        "root": "nyra",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 46.6,
        "state": "THIN",
        "reason": "nyra: 5 deployers < 6 required"
      },
      {
        "root": "nyraai",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 46.6,
        "state": "THIN",
        "reason": "nyraai: 5 deployers < 6 required"
      },
      {
        "root": "grem",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 37.3,
        "state": "THIN",
        "reason": "grem: 4 launches < 5 required"
      },
      {
        "root": "gremlin",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 37.3,
        "state": "THIN",
        "reason": "gremlin: 4 launches < 5 required"
      },
      {
        "root": "beefy",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0005,
        "multiple": 29.9,
        "state": "THIN",
        "reason": "beefy: 4 launches < 5 required"
      },
      {
        "root": "moo",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0005,
        "multiple": 29.9,
        "state": "THIN",
        "reason": "moo: 4 launches < 5 required"
      },
      {
        "root": "brownfi",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0025,
        "multiple": 6,
        "state": "THIN",
        "reason": "brownfi: 4 launches < 5 required"
      },
      {
        "root": "bf",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0027,
        "multiple": 5.5,
        "state": "BELOW",
        "reason": "bf: 5.5x over baseline < 6.0x required"
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
        "multiple": 0.7,
        "state": "BELOW",
        "reason": "nft: 0.7x over baseline < 6.0x required"
      },
      {
        "root": "konnichiwa",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 28,
        "state": "THIN",
        "reason": "konnichiwa: 3 launches < 5 required"
      },
      {
        "root": "street",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0009,
        "multiple": 12.4,
        "state": "THIN",
        "reason": "street: 3 launches < 5 required"
      },
      {
        "root": "genesis",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0013,
        "multiple": 8.6,
        "state": "THIN",
        "reason": "genesis: 3 launches < 5 required"
      },
      {
        "root": "giga",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0041,
        "multiple": 2.7,
        "state": "BELOW",
        "reason": "giga: 2.7x over baseline < 6.0x required"
      },
      {
        "root": "amm",
        "launches": 3,
        "deployers": 3,
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
        "root": "volatile",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0083,
        "multiple": 1.3,
        "state": "BELOW",
        "reason": "volatile: 1.3x over baseline < 6.0x required"
      },
      {
        "root": "hood",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0108,
        "multiple": 1,
        "state": "BELOW",
        "reason": "hood: 1.0x over baseline < 6.0x required"
      },
      {
        "root": "ascend",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.7,
        "state": "THIN",
        "reason": "ascend: 2 launches < 5 required"
      },
      {
        "root": "botbay",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.7,
        "state": "THIN",
        "reason": "botbay: 2 launches < 5 required"
      },
      {
        "root": "caracal",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.7,
        "state": "THIN",
        "reason": "caracal: 2 launches < 5 required"
      },
      {
        "root": "cothemp",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.7,
        "state": "THIN",
        "reason": "cothemp: 2 launches < 5 required"
      },
      {
        "root": "dcty",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.7,
        "state": "THIN",
        "reason": "dcty: 2 launches < 5 required"
      },
      {
        "root": "fi",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.7,
        "state": "THIN",
        "reason": "fi: 2 launches < 5 required"
      },
      {
        "root": "gyrostat",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.7,
        "state": "THIN",
        "reason": "gyrostat: 2 launches < 5 required"
      },
      {
        "root": "gyst",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.7,
        "state": "THIN",
        "reason": "gyst: 2 launches < 5 required"
      },
      {
        "root": "lowen",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.7,
        "state": "THIN",
        "reason": "lowen: 2 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x8bedaa91456e2b75ba5458acb07a2a76fe2c7ed1",
        "name": "Big Elon",
        "symbol": "BIGELON",
        "deployer": "0x643df4e99bab458d83c231b7a0f9cf348f538a1b",
        "block": 123595265,
        "ts": "2026-11-26T11:29:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x40fdc3cc3306612e5552c379d9d000f184cda63f",
        "name": "Signal Made In Mines",
        "symbol": "sMIM",
        "deployer": "0x93b3e950ed44647599f9ad83540a08d76e1568fb",
        "block": 123595247,
        "ts": "2026-11-26T11:29:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x59af09f7aa81e34012d1dfa8b70681d073767777",
        "name": "Nv1",
        "symbol": "NV1",
        "deployer": "0xea5c98a6164850f6ace669bd753de6928881b65e",
        "block": 123595220,
        "ts": "2026-11-26T11:29:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb236e833c5b7a5b99d8099699d7e2baf36c2dd86",
        "name": "BrownFi V3",
        "symbol": "BF-V3",
        "deployer": "0x698dd6c03b50c3d4af12932a0388338bcdd3aaed",
        "block": 123595212,
        "ts": "2026-11-26T11:29:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcf8f1b1390a5c8d8af509ea6baabedee6be87777",
        "name": "UGOS 🔥",
        "symbol": "UGSOS",
        "deployer": "0x21853863aeec000ebfa52e46b366fdf2ac02ca6b",
        "block": 123595139,
        "ts": "2026-11-26T11:29:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd29707d305ea9aeba7c7c33e620dd623593ed014",
        "name": "Tidewren",
        "symbol": "TWREN",
        "deployer": "0xbe70f557a25312d5ea11634942dc568ac449326c",
        "block": 123595117,
        "ts": "2026-11-26T11:28:58.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x81e917e92b99f149096b2ec7804dfeb9f24d7777",
        "name": "Cryptotard",
        "symbol": "CRYPTOTARD",
        "deployer": "0x980b9bb5b3163638e0a35f8f26ff40547b16e2a9",
        "block": 123595026,
        "ts": "2026-11-26T11:28:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0a296f4574cd588798587ecff9a7dc04fe957777",
        "name": "BABYSHARK",
        "symbol": "BABYSHARK",
        "deployer": "0xe26a8a93a803f6dcc9355da3beac69d733ddfd5d",
        "block": 123594865,
        "ts": "2026-11-26T11:27:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5181e51b89518e326921a78531585e9952c27777",
        "name": "CXME",
        "symbol": "Cxlaunch Yi",
        "deployer": "0x4f6d40378da3874cb49b6834b4c20ada43842691",
        "block": 123594734,
        "ts": "2026-11-26T11:27:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x73a370fe2b892e32b7f882148062b026e0850087",
        "name": "ひきこもり",
        "symbol": "Hikikomori",
        "deployer": "0x000ece0e598f89c0c567f652e2ab48d6edac7bf6",
        "block": 123594698,
        "ts": "2026-11-26T11:27:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0128b427ef4846ea7f41a6be8c246417867c789f",
        "name": "Cow Aero Robinhood USDG-ANT",
        "symbol": "cowAeroRobinhoodUSDG-ANT",
        "deployer": "0x5c1e6716f59f3c12c2b23163e9ab42ee0027cd93",
        "block": 123594687,
        "ts": "2026-11-26T11:27:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x655cd7873faf768fc21606fb4446b26d2d3eeb57",
        "name": "Reward Cow Aero Robinhood USDG-ANT",
        "symbol": "rcowAeroRobinhoodUSDG-ANT",
        "deployer": "0x5c1e6716f59f3c12c2b23163e9ab42ee0027cd93",
        "block": 123594687,
        "ts": "2026-11-26T11:27:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x03063fcb6dac22f0d8468f55e4c9ec41669661a0",
        "name": "Arrowfarm UniV3 ARROWFARM-USDG CLM",
        "symbol": "arrowUniV3ARROWFARM-USDG",
        "deployer": "0x938557694499b871c06cb7ca9247077098f68daf",
        "block": 123594630,
        "ts": "2026-11-26T11:26:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9d2758e24c197e334f48a6671677476dbba2cccc",
        "name": "NINE",
        "symbol": "NINE",
        "deployer": "0xd9acd656a5f1b519c9e76a2a6092265a74186e58",
        "block": 123594615,
        "ts": "2026-11-26T11:26:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0d51d712607ce63e591c16f79328de084f5e6aa4",
        "name": "Odd Souls Motion Test",
        "symbol": "OSMT",
        "deployer": "0x08be5c658b595eaca25e5e8f2414c7ac30c9f603",
        "block": 123594560,
        "ts": "2026-11-26T11:26:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x46171215802387b081714afe3b0f9939b0547777",
        "name": "Elon Santa",
        "symbol": "SANTAMUSK",
        "deployer": "0xea5c98a6164850f6ace669bd753de6928881b65e",
        "block": 123594470,
        "ts": "2026-11-26T11:25:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd881830feafb6ffc3a1d5ca26ed73ad02cdb9a42",
        "name": "Crack",
        "symbol": "CRACK",
        "deployer": "0x927b429b8ef1110b7fb3e9842fd135d0f2dc7cc5",
        "block": 123594405,
        "ts": "2026-11-26T11:25:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4ec8dac65b6a60fb904f3d900c39ce0343242663",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x279e7ca0d4078ea32016d9e1d22ffee6cfaa4dd5",
        "block": 123594373,
        "ts": "2026-11-26T11:25:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xeb1c47cd4540037e73bc7341a5a12fe08ebf7777",
        "name": "NATF",
        "symbol": "NATF🔥",
        "deployer": "0x21853863aeec000ebfa52e46b366fdf2ac02ca6b",
        "block": 123594216,
        "ts": "2026-11-26T11:24:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x70d6aeadf9a759c126bcbd857299cbb93639572f",
        "name": "Frost Seal",
        "symbol": "FROSTSEAL",
        "deployer": "0x92b9dbc7b79bb6ceeb72deed061f5ca5a5a8e842",
        "block": 123594098,
        "ts": "2026-11-26T11:24:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x620d3f673468ba09f1eb203db7ac816659887777",
        "name": "The Official 3 Coin",
        "symbol": "3",
        "deployer": "0x980b9bb5b3163638e0a35f8f26ff40547b16e2a9",
        "block": 123594077,
        "ts": "2026-11-26T11:24:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x26c8248bab98e1e5d505c8972e46fb1798747777",
        "name": "Kübra",
        "symbol": "KÜBRA",
        "deployer": "0xe26a8a93a803f6dcc9355da3beac69d733ddfd5d",
        "block": 123593918,
        "ts": "2026-11-26T11:23:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfcf98cca3fab51a268a8a91fafbae940683c7777",
        "name": "Official Sanae Coin",
        "symbol": "SANAE",
        "deployer": "0x4f6d40378da3874cb49b6834b4c20ada43842691",
        "block": 123593756,
        "ts": "2026-11-26T11:22:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa5ad1d6a815bd89d844a335f4f52fb5a30adcb72",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xb44ad3b0c63dae4910bef887baa80c5f08a92ad6",
        "block": 123593549,
        "ts": "2026-11-26T11:21:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa5a7327352d2b423189b49adc6e2c07c8688f837",
        "name": "zPass",
        "symbol": "ZPASS",
        "deployer": "0x8b3a60d7fe674365c7de12e0b83cabd74d9e503d",
        "block": 123593434,
        "ts": "2026-11-26T11:21:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xce534b219ed37171b3b2545b5f24f167954ad492",
        "name": "Pons Probe",
        "symbol": "PONSPRB",
        "deployer": "0x92b9dbc7b79bb6ceeb72deed061f5ca5a5a8e842",
        "block": 123593393,
        "ts": "2026-11-26T11:20:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf42b4e1a3fd374b1f849bf898edc64ab17df06ea",
        "name": "one coin",
        "symbol": "ONECOIN",
        "deployer": "0x2171a1b6c8753920330a3b58d9305b277057dd3f",
        "block": 123593320,
        "ts": "2026-11-26T11:20:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb95509315939ece1423e9b0b9882139affcc448a",
        "name": "Babbles",
        "symbol": "bb",
        "deployer": "0x8e5c2660799442515e84aa595a85e21299c0cf00",
        "block": 123593312,
        "ts": "2026-11-26T11:20:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7c36523f9c79a65dedb7f520c3fcc08072177777",
        "name": "Shadow Bunny",
        "symbol": "SHADOBUNN",
        "deployer": "0xea5c98a6164850f6ace669bd753de6928881b65e",
        "block": 123593272,
        "ts": "2026-11-26T11:20:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xaa8cda6fb442529570824634a1c382551ff27777",
        "name": "GTA Official Team",
        "symbol": "Gta 6 Coin",
        "deployer": "0x21853863aeec000ebfa52e46b366fdf2ac02ca6b",
        "block": 123593261,
        "ts": "2026-11-26T11:20:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfda7cd8f21f1b8d0572bf39131bcd6279ca12277",
        "name": "Cow Aero Robinhood GOOGL-USDG",
        "symbol": "cowAeroRobinhoodGOOGL-USDG",
        "deployer": "0x5c1e6716f59f3c12c2b23163e9ab42ee0027cd93",
        "block": 123593228,
        "ts": "2026-11-26T11:20:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0526f3df15aed7586646e52cb162fbf8886af413",
        "name": "Reward Cow Aero Robinhood GOOGL-USDG",
        "symbol": "rcowAeroRobinhoodGOOGL-USDG",
        "deployer": "0x5c1e6716f59f3c12c2b23163e9ab42ee0027cd93",
        "block": 123593228,
        "ts": "2026-11-26T11:20:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf8e0ab443098c0738489b5baffbd32a1341f2289",
        "name": "Borro USDG",
        "symbol": "bUSDG",
        "deployer": "0x3a17bfff7c6fb05f8c49d3d7181849e531026896",
        "block": 123593224,
        "ts": "2026-11-26T11:20:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe6a5887fff19ff0f0752b6f753bfddbb6addb004",
        "name": "Huygena",
        "symbol": "HYENA",
        "deployer": "0xfb04e6c2c3f1e755eb618dca3fa69958d0894722",
        "block": 123593223,
        "ts": "2026-11-26T11:20:05.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x88ad8ddf1e3898412146a534538d418c6f8a9062",
        "name": "STANDARD",
        "symbol": "STANDARD",
        "deployer": "0x27ed385662b631074034889332cd38483ce59852",
        "block": 123593165,
        "ts": "2026-11-26T11:19:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb94f7011dae3f7a909a2c5b62b4dbcaa16e81b28",
        "name": "Wearers",
        "symbol": "WEAR",
        "deployer": "0x3072314b73c6a1f817057d59a4cc7b809add4687",
        "block": 123593161,
        "ts": "2026-11-26T11:19:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6d1fa6d4454873e86f626da0513519efa5e6f072",
        "name": "Cow Aero Robinhood TSLA-USDG",
        "symbol": "cowAeroRobinhoodTSLA-USDG",
        "deployer": "0x5c1e6716f59f3c12c2b23163e9ab42ee0027cd93",
        "block": 123593134,
        "ts": "2026-11-26T11:19:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2f80930f460e71e1ba89a6283c02fc73282584a5",
        "name": "Reward Cow Aero Robinhood TSLA-USDG",
        "symbol": "rcowAeroRobinhoodTSLA-USDG",
        "deployer": "0x5c1e6716f59f3c12c2b23163e9ab42ee0027cd93",
        "block": 123593134,
        "ts": "2026-11-26T11:19:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcc64b6974fa3a46237ac47efe83e8e4371d64ca8",
        "name": "Gremlin",
        "symbol": "GREM",
        "deployer": "0x83f55fe841ecbfae12b8a66680d6adeb2834d5fd",
        "block": 123593131,
        "ts": "2026-11-26T11:19:40.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x8a9a48d633d73d74d53bce8f21516549e5cd0270",
        "name": "Grokbot",
        "symbol": "Grokbot",
        "deployer": "0xb44ad3b0c63dae4910bef887baa80c5f08a92ad6",
        "block": 123593071,
        "ts": "2026-11-26T11:19:24.000Z",
        "ts_exact": true,
        "direct": true
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
