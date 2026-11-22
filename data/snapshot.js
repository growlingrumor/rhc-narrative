/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-22T01:36:50.000Z",
    "opened_at": "2026-11-22T00:36:50.000Z",
    "window_hours": 1,
    "head_block": 120292548,
    "start_block": 120261726,
    "blocks_scanned": 30822,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 203,
    "unnamed_contracts": 0,
    "via_factory": 172,
    "no_receipt": 0,
    "candidates": 203,
    "mint_events": 9104,
    "deployers": 144,
    "roots": 315,
    "cleared_multiple": 216,
    "failed_gates": 214,
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
      "vice-vicecoin"
    ],
    "top": null,
    "rows": [
      {
        "root": "vicecoin",
        "launches": 17,
        "deployers": 17,
        "baseline_share": 0.0004,
        "multiple": 209.4,
        "state": "MERGED",
        "reason": "vice + vicecoin co-occur 100%, merged to vice-vicecoin"
      },
      {
        "root": "vice",
        "launches": 17,
        "deployers": 17,
        "baseline_share": 0.0005,
        "multiple": 167.5,
        "state": "MERGED",
        "reason": "vice + vicecoin co-occur 100%, merged to vice-vicecoin"
      },
      {
        "root": "uniswap",
        "launches": 15,
        "deployers": 10,
        "baseline_share": 0.0509,
        "multiple": 1.5,
        "state": "BELOW",
        "reason": "uniswap: 1.5x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 11,
        "deployers": 7,
        "baseline_share": 0.0424,
        "multiple": 1.3,
        "state": "BELOW",
        "reason": "uni: 1.3x over baseline < 6.0x required"
      },
      {
        "root": "robinhood",
        "launches": 8,
        "deployers": 4,
        "baseline_share": 0.0513,
        "multiple": 0.8,
        "state": "BELOW",
        "reason": "robinhood: 0.8x over baseline < 6.0x required"
      },
      {
        "root": "frigate",
        "launches": 7,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 86.2,
        "state": "THIN",
        "reason": "frigate: 1 deployers < 6 required"
      },
      {
        "root": "usdg",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0203,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "usdg: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "cow",
        "launches": 6,
        "deployers": 2,
        "baseline_share": 0.0072,
        "multiple": 4.1,
        "state": "BELOW",
        "reason": "cow: 4.1x over baseline < 6.0x required"
      },
      {
        "root": "tdsu",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 61.6,
        "state": "THIN",
        "reason": "tdsu: 1 deployers < 6 required"
      },
      {
        "root": "pons",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0013,
        "multiple": 15.2,
        "state": "THIN",
        "reason": "pons: 4 launches < 5 required"
      },
      {
        "root": "aero",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0056,
        "multiple": 3.5,
        "state": "BELOW",
        "reason": "aero: 3.5x over baseline < 6.0x required"
      },
      {
        "root": "amm",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0062,
        "multiple": 3.2,
        "state": "BELOW",
        "reason": "amm: 3.2x over baseline < 6.0x required"
      },
      {
        "root": "volatile",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0083,
        "multiple": 2.4,
        "state": "BELOW",
        "reason": "volatile: 2.4x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0167,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "positions: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "flap",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 36.9,
        "state": "THIN",
        "reason": "flap: 3 launches < 5 required"
      },
      {
        "root": "frgf",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 36.9,
        "state": "THIN",
        "reason": "frgf: 3 launches < 5 required"
      },
      {
        "root": "frgp",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 36.9,
        "state": "THIN",
        "reason": "frgp: 3 launches < 5 required"
      },
      {
        "root": "rizzmas",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 36.9,
        "state": "THIN",
        "reason": "rizzmas: 3 launches < 5 required"
      },
      {
        "root": "game",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0005,
        "multiple": 29.6,
        "state": "THIN",
        "reason": "game: 3 launches < 5 required"
      },
      {
        "root": "bond",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0008,
        "multiple": 18.5,
        "state": "THIN",
        "reason": "bond: 3 launches < 5 required"
      },
      {
        "root": "awards",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0013,
        "multiple": 11.4,
        "state": "THIN",
        "reason": "awards: 3 launches < 5 required"
      },
      {
        "root": "reward",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0037,
        "multiple": 4,
        "state": "BELOW",
        "reason": "reward: 4.0x over baseline < 6.0x required"
      },
      {
        "root": "giga",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0041,
        "multiple": 3.6,
        "state": "BELOW",
        "reason": "giga: 3.6x over baseline < 6.0x required"
      },
      {
        "root": "dog",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0058,
        "multiple": 2.5,
        "state": "BELOW",
        "reason": "dog: 2.5x over baseline < 6.0x required"
      },
      {
        "root": "weth",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0073,
        "multiple": 2,
        "state": "BELOW",
        "reason": "weth: 2.0x over baseline < 6.0x required"
      },
      {
        "root": "hood",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0108,
        "multiple": 1.4,
        "state": "BELOW",
        "reason": "hood: 1.4x over baseline < 6.0x required"
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
        "root": "dcty",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 24.6,
        "state": "THIN",
        "reason": "dcty: 2 launches < 5 required"
      },
      {
        "root": "ghood",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 24.6,
        "state": "THIN",
        "reason": "ghood: 2 launches < 5 required"
      },
      {
        "root": "lp",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0009,
        "multiple": 10.9,
        "state": "THIN",
        "reason": "lp: 2 launches < 5 required"
      },
      {
        "root": "rush",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.001,
        "multiple": 9.9,
        "state": "THIN",
        "reason": "rush: 2 launches < 5 required"
      },
      {
        "root": "short",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.001,
        "multiple": 9.9,
        "state": "THIN",
        "reason": "short: 2 launches < 5 required"
      },
      {
        "root": "stray",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0011,
        "multiple": 9,
        "state": "THIN",
        "reason": "stray: 2 launches < 5 required"
      },
      {
        "root": "gta",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0016,
        "multiple": 6.2,
        "state": "THIN",
        "reason": "gta: 2 launches < 5 required"
      },
      {
        "root": "raeto",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0016,
        "multiple": 6.2,
        "state": "THIN",
        "reason": "raeto: 2 launches < 5 required"
      },
      {
        "root": "brownfi",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0025,
        "multiple": 3.9,
        "state": "BELOW",
        "reason": "brownfi: 3.9x over baseline < 6.0x required"
      },
      {
        "root": "bf",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0027,
        "multiple": 3.6,
        "state": "BELOW",
        "reason": "bf: 3.6x over baseline < 6.0x required"
      },
      {
        "root": "fables",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0034,
        "multiple": 2.9,
        "state": "BELOW",
        "reason": "fables: 2.9x over baseline < 6.0x required"
      },
      {
        "root": "slipstream",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0039,
        "multiple": 2.5,
        "state": "BELOW",
        "reason": "slipstream: 2.5x over baseline < 6.0x required"
      },
      {
        "root": "slvr",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0041,
        "multiple": 2.4,
        "state": "BELOW",
        "reason": "slvr: 2.4x over baseline < 6.0x required"
      }
    ],
    "recent": [
      {
        "address": "0x0dbcafd6bed9d55d970e53929a2781884fe171b1",
        "name": "Private Inu",
        "symbol": "PI",
        "deployer": "0x90057dc400cc3c26b6a178f5c5676bfbb99a01c5",
        "block": 120292509,
        "ts": "2026-11-22T01:36:45.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xcd8524576670894f5ee93248ce0ff63bd25e74ac",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x7f3f6d18c07cf2f5257f3c4e677a4dbcd7d00054",
        "block": 120292468,
        "ts": "2026-11-22T01:36:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc9016009df7d03bd2eca43ad09283e0d4f46dbd4",
        "name": "FRIGATE V2 POOL",
        "symbol": "FRGV2P",
        "deployer": "0x7f3f6d18c07cf2f5257f3c4e677a4dbcd7d00054",
        "block": 120292457,
        "ts": "2026-11-22T01:36:37.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x778c05bebbaabbb1de43a8631f845a2c693a7777",
        "name": "FRIGATE FLAP3",
        "symbol": "FRGF3",
        "deployer": "0x7f3f6d18c07cf2f5257f3c4e677a4dbcd7d00054",
        "block": 120291856,
        "ts": "2026-11-22T01:35:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb236e833c5b7a5b99d8099699d7e2baf36c2dd86",
        "name": "BrownFi V3",
        "symbol": "BF-V3",
        "deployer": "0xf42b73d2e4d3912eade2a5f7ab39b54064c2acec",
        "block": 120291712,
        "ts": "2026-11-22T01:35:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb16f99b553f823b65529025800216482194fe387",
        "name": "Pumpmas",
        "symbol": "PUMPMAS",
        "deployer": "0xc390d0b4ce50566eb0aa2a19c8085385c44812ef",
        "block": 120291667,
        "ts": "2026-11-22T01:35:01.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x7aaa6bf14de9ac4bca296d97277112edab0a7777",
        "name": "FRIGATE FLAP2",
        "symbol": "FRGF2",
        "deployer": "0x7f3f6d18c07cf2f5257f3c4e677a4dbcd7d00054",
        "block": 120291607,
        "ts": "2026-11-22T01:34:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0e3c8c68bc0074617a43bf12a54eedeb5839a71d",
        "name": "One gift can change a life",
        "symbol": "Gift",
        "deployer": "0xb6dfdcb7d058d0e1f06062d8947c0cdda251628b",
        "block": 120291515,
        "ts": "2026-11-22T01:34:43.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xc31cd857e284b1e0745ae64d8e8d586e8d47a86a",
        "name": "Raphael Slipstream Position",
        "symbol": "RAPH-CL-POS",
        "deployer": "0x4139fa266731449af9cdad40a12f06cae3837cf2",
        "block": 120291303,
        "ts": "2026-11-22T01:34:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3a142beb767e0a439bb58aa751a1cbf7abb15040",
        "name": "‮TDSU",
        "symbol": "‮TDSU",
        "deployer": "0x1eee60bad6f1e17818e53e668b850aac5ba0582b",
        "block": 120291233,
        "ts": "2026-11-22T01:34:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa34acd69b1d51d1990e3b3059c60ccab854d0087",
        "name": "market is dead send this",
        "symbol": "gingerbrea",
        "deployer": "0xd4875af0ae4491868c1ad20c752232a6b54a3568",
        "block": 120291146,
        "ts": "2026-11-22T01:33:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdc62cadd3eaf0eed085bdc3e6151cbfe7d3049af",
        "name": "Robinhood Migos",
        "symbol": "CASH",
        "deployer": "0xa8ec8ff9c55620e5d70e469ac6f6384cbc1c2baa",
        "block": 120290525,
        "ts": "2026-11-22T01:32:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8be290eb362d2593aeea3d348dff6b508e8df916",
        "name": "RIZZMAS 3",
        "symbol": "RIZZMAS",
        "deployer": "0x5b750df69a130a5208db998250b34c6bd5d975e2",
        "block": 120290397,
        "ts": "2026-11-22T01:32:29.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xc19cca7b0db8fcb5be2a28a3b5060229bac23f5f",
        "name": "Crocs Hood",
        "symbol": "CROCS",
        "deployer": "0x9a00614a52b2db936cf2b95502fcbc0086a8cc13",
        "block": 120290340,
        "ts": "2026-11-22T01:32:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9e1f0a539c3a55c716b76c9a0bdc7111094e34d0",
        "name": "‮TDSU",
        "symbol": "‮TDSU",
        "deployer": "0x1eee60bad6f1e17818e53e668b850aac5ba0582b",
        "block": 120289943,
        "ts": "2026-11-22T01:31:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9b2d9988ef047b76d048a839305e5f9c1d10cb73",
        "name": "HOOD CODES",
        "symbol": "HOODC",
        "deployer": "0xf42b73d2e4d3912eade2a5f7ab39b54064c2acec",
        "block": 120289848,
        "ts": "2026-11-22T01:31:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x830932f97e92d3cc4b220cac391d35eee7d24da7",
        "name": "Giga Stable AMM - frxUSD/USDG",
        "symbol": "GIGA-sAMM-frxUSD/USDG",
        "deployer": "0xb747b16321a9caef88f5bb03c9c5e796488b2517",
        "block": 120289663,
        "ts": "2026-11-22T01:31:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2a000bef39a76c1888cae7aad9dafda76d4aea86",
        "name": "What if we ?",
        "symbol": "WHATIFWE",
        "deployer": "0xb01705d22dacd96b99a001391750c2f9bdc2c6bd",
        "block": 120289392,
        "ts": "2026-11-22T01:30:32.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x58aef047ddc6fbc256c1529e15fdc3f9a92a36b2",
        "name": "$Bond Game Token",
        "symbol": "WOOD",
        "deployer": "0x65ce981b83b748197e0ff0747382035e78a2ab8d",
        "block": 120289172,
        "ts": "2026-11-22T01:30:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6078d15ba22a58840fb35b4626740a3fb290de9d",
        "name": "$Bond Game Token",
        "symbol": "SPICE",
        "deployer": "0x65ce981b83b748197e0ff0747382035e78a2ab8d",
        "block": 120289146,
        "ts": "2026-11-22T01:30:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x69e447d04108926769a6e9e16f6762eb558e9424",
        "name": "$Bond Game Token",
        "symbol": "GRAPE",
        "deployer": "0x65ce981b83b748197e0ff0747382035e78a2ab8d",
        "block": 120289129,
        "ts": "2026-11-22T01:30:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa5e1e1f92a244f192943899eb5810e2bab372ea4",
        "name": "Senior ArcadiaV2 Global Dollar",
        "symbol": "srarcV2USDG",
        "deployer": "0x5f5e97360ea5b16adf7ac0121392a26b46458141",
        "block": 120289002,
        "ts": "2026-11-22T01:29:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa992a3c7516cc64eb14ea8ca3152efceded60831",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xf279dfcdd57e1571c95e2c5b7e2ee453cbcdf77f",
        "block": 120288696,
        "ts": "2026-11-22T01:29:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb0711574537f61298d43be9cebc05d8c5e6101e9",
        "name": "Stray Dog",
        "symbol": "DOG",
        "deployer": "0xf42b73d2e4d3912eade2a5f7ab39b54064c2acec",
        "block": 120288419,
        "ts": "2026-11-22T01:28:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9fae770e44e64f22b4fd5c2974a78f067640c90b",
        "name": "BrownFi V3",
        "symbol": "BF-V3",
        "deployer": "0xf42b73d2e4d3912eade2a5f7ab39b54064c2acec",
        "block": 120288419,
        "ts": "2026-11-22T01:28:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x30061a336b3b0410631f3296255adeab22a2902c",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x0916a3327c376195c24390963600d8050b92913c",
        "block": 120288336,
        "ts": "2026-11-22T01:28:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x039205b1642f86d051cbb34935e5d6b386748e69",
        "name": "its high time",
        "symbol": "ELHIGH",
        "deployer": "0xbea93a9e4905b1d43861bf395ef95875bb3ae46f",
        "block": 120288325,
        "ts": "2026-11-22T01:28:27.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x8004a169fb4a3325136eb29fa0ceb6d2e539a432",
        "name": "AgentIdentity",
        "symbol": "AGENT",
        "deployer": "0x9a21c75ac263cc43125e70200636f6397f8776d0",
        "block": 120288120,
        "ts": "2026-11-22T01:28:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd04d8f42f5a0d04b77f7806171400839f9701f9a",
        "name": "Chrome Squirrel",
        "symbol": "CHRM",
        "deployer": "0xa3af060b6b7140866211c4d7ab608cede8432c70",
        "block": 120288120,
        "ts": "2026-11-22T01:28:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x533c5571ae586985e1fddfaa24304284d970c62a",
        "name": "SPDR S&P 500 ETF (Ondo Tokenized)",
        "symbol": "SPYon",
        "deployer": "0x0e183f1d7286cc260761d15fc07514a39b5a36c2",
        "block": 120287630,
        "ts": "2026-11-22T01:27:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb73af78bf76dfaa6ef48892a4c561f62bd4c9cbe",
        "name": "Mutan Cats RH",
        "symbol": "9",
        "deployer": "0xd782268f600403843484b70710daee6846fc0db8",
        "block": 120287191,
        "ts": "2026-11-22T01:26:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x95d6a7f196f800ee704d973e478d81a7f2355d72",
        "name": "Five Blades",
        "symbol": "BLADES",
        "deployer": "0xfdc37f8dcc7de108b8b038291caa9d0d0a316361",
        "block": 120287186,
        "ts": "2026-11-22T01:26:24.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x8216b56be9e9dd3f9dcb5aa7401d51514dc8424c",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x8b6185efffaac1aa48d25c380bfcfcb245db63e8",
        "block": 120287151,
        "ts": "2026-11-22T01:26:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1831d3fd3b7f48d2f704a1212127862d0ccc26f8",
        "name": "STONKS",
        "symbol": "STONKS",
        "deployer": "0x0916a3327c376195c24390963600d8050b92913c",
        "block": 120287019,
        "ts": "2026-11-22T01:26:05.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x4cf0a6410a545529e2a02da02575a5ddc79e7c1c",
        "name": "Gunny Bear",
        "symbol": "Gunny",
        "deployer": "0xd9b27095395ab95509657887eaaf1131f0ba6355",
        "block": 120286722,
        "ts": "2026-11-22T01:25:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb6a91b342fa00270b070e93a00d6e559e0197777",
        "name": "FRIGATE FLAP",
        "symbol": "FRGF",
        "deployer": "0x7f3f6d18c07cf2f5257f3c4e677a4dbcd7d00054",
        "block": 120286631,
        "ts": "2026-11-22T01:25:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf3f4b0fb71fceb7efceb723d0aa505b92c1b1cf0",
        "name": "Community Coin",
        "symbol": "Community",
        "deployer": "0x88d2fe92a018878995adea4107ef6440a437be41",
        "block": 120286051,
        "ts": "2026-11-22T01:24:14.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xda2fd32412a7fe121c1f1ff13ef9f16267b24412",
        "name": "GEARVAULT",
        "symbol": "G",
        "deployer": "0x2096fbddaeddc15cca63991f85b3212d7670e2a7",
        "block": 120285822,
        "ts": "2026-11-22T01:23:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x96c468dc3ef8d809383b9abfd417e53d5b7993f4",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x8c150540f19bf5286bd35f50baaf2b8bef9497a7",
        "block": 120285811,
        "ts": "2026-11-22T01:23:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1a0153058ef0575d48a8af8507713750973ae7ec",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x8b6185efffaac1aa48d25c380bfcfcb245db63e8",
        "block": 120285694,
        "ts": "2026-11-22T01:23:32.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
