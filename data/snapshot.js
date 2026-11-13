/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-13T08:19:34.000Z",
    "opened_at": "2026-11-13T07:19:34.000Z",
    "window_hours": 1,
    "head_block": 113211619,
    "start_block": 113178018,
    "blocks_scanned": 33601,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 290,
    "unnamed_contracts": 14,
    "via_factory": 285,
    "no_receipt": 0,
    "candidates": 304,
    "mint_events": 12228,
    "deployers": 188,
    "roots": 400,
    "cleared_multiple": 253,
    "failed_gates": 250,
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
      "autism",
      "food-foodcoin"
    ],
    "top": {
      "root": "autism",
      "launches": 9,
      "deployers": 9,
      "baseline_share": 0.0004,
      "multiple": 77.6,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "autism",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 77.6,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "food",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 51.7,
        "state": "MERGED",
        "reason": "food + foodcoin co-occur 100%, merged to food-foodcoin"
      },
      {
        "root": "foodcoin",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 51.7,
        "state": "MERGED",
        "reason": "food + foodcoin co-occur 100%, merged to food-foodcoin"
      },
      {
        "root": "uniswap",
        "launches": 21,
        "deployers": 17,
        "baseline_share": 0.0509,
        "multiple": 1.4,
        "state": "BELOW",
        "reason": "uniswap: 1.4x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 15,
        "deployers": 13,
        "baseline_share": 0.0424,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "uni: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "robinhood",
        "launches": 15,
        "deployers": 7,
        "baseline_share": 0.0513,
        "multiple": 1,
        "state": "BELOW",
        "reason": "robinhood: 1.0x over baseline < 6.0x required"
      },
      {
        "root": "usdg",
        "launches": 12,
        "deployers": 11,
        "baseline_share": 0.0203,
        "multiple": 2,
        "state": "BELOW",
        "reason": "usdg: 2.0x over baseline < 6.0x required"
      },
      {
        "root": "amc",
        "launches": 7,
        "deployers": 5,
        "baseline_share": 0.001,
        "multiple": 24.1,
        "state": "THIN",
        "reason": "amc: 5 deployers < 6 required"
      },
      {
        "root": "nft",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0201,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "nft: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "fund",
        "launches": 6,
        "deployers": 5,
        "baseline_share": 0.0029,
        "multiple": 7.1,
        "state": "THIN",
        "reason": "fund: 5 deployers < 6 required"
      },
      {
        "root": "cow",
        "launches": 6,
        "deployers": 3,
        "baseline_share": 0.0072,
        "multiple": 2.9,
        "state": "BELOW",
        "reason": "cow: 2.9x over baseline < 6.0x required"
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
        "root": "cole",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 43.1,
        "state": "THIN",
        "reason": "cole: 5 deployers < 6 required"
      },
      {
        "root": "rh",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0036,
        "multiple": 4.8,
        "state": "BELOW",
        "reason": "rh: 4.8x over baseline < 6.0x required"
      },
      {
        "root": "vajra",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 34.5,
        "state": "THIN",
        "reason": "vajra: 4 launches < 5 required"
      },
      {
        "root": "vjra",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 34.5,
        "state": "THIN",
        "reason": "vjra: 4 launches < 5 required"
      },
      {
        "root": "united",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0033,
        "multiple": 4.2,
        "state": "BELOW",
        "reason": "united: 4.2x over baseline < 6.0x required"
      },
      {
        "root": "layerbank",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0053,
        "multiple": 2.6,
        "state": "BELOW",
        "reason": "layerbank: 2.6x over baseline < 6.0x required"
      },
      {
        "root": "aero",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0056,
        "multiple": 2.5,
        "state": "BELOW",
        "reason": "aero: 2.5x over baseline < 6.0x required"
      },
      {
        "root": "dog",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0058,
        "multiple": 2.4,
        "state": "BELOW",
        "reason": "dog: 2.4x over baseline < 6.0x required"
      },
      {
        "root": "apes",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 25.9,
        "state": "THIN",
        "reason": "apes: 3 launches < 5 required"
      },
      {
        "root": "auda",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 25.9,
        "state": "THIN",
        "reason": "auda: 3 launches < 5 required"
      },
      {
        "root": "doggg",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 25.9,
        "state": "THIN",
        "reason": "doggg: 3 launches < 5 required"
      },
      {
        "root": "hao",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 25.9,
        "state": "THIN",
        "reason": "hao: 3 launches < 5 required"
      },
      {
        "root": "hubrix",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 25.9,
        "state": "THIN",
        "reason": "hubrix: 3 launches < 5 required"
      },
      {
        "root": "hugh",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 25.9,
        "state": "THIN",
        "reason": "hugh: 3 launches < 5 required"
      },
      {
        "root": "inuhao",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 25.9,
        "state": "THIN",
        "reason": "inuhao: 3 launches < 5 required"
      },
      {
        "root": "janus",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 25.9,
        "state": "THIN",
        "reason": "janus: 3 launches < 5 required"
      },
      {
        "root": "ni",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 25.9,
        "state": "THIN",
        "reason": "ni: 3 launches < 5 required"
      },
      {
        "root": "panda",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 25.9,
        "state": "THIN",
        "reason": "panda: 3 launches < 5 required"
      },
      {
        "root": "trashed",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 25.9,
        "state": "THIN",
        "reason": "trashed: 3 launches < 5 required"
      },
      {
        "root": "xelis",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 25.9,
        "state": "THIN",
        "reason": "xelis: 3 launches < 5 required"
      },
      {
        "root": "chaingreets",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0009,
        "multiple": 11.5,
        "state": "THIN",
        "reason": "chaingreets: 3 launches < 5 required"
      },
      {
        "root": "awards",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0013,
        "multiple": 8,
        "state": "THIN",
        "reason": "awards: 3 launches < 5 required"
      },
      {
        "root": "brownfi",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0025,
        "multiple": 4.1,
        "state": "BELOW",
        "reason": "brownfi: 4.1x over baseline < 6.0x required"
      },
      {
        "root": "bf",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0027,
        "multiple": 3.8,
        "state": "BELOW",
        "reason": "bf: 3.8x over baseline < 6.0x required"
      },
      {
        "root": "reward",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0037,
        "multiple": 2.8,
        "state": "BELOW",
        "reason": "reward: 2.8x over baseline < 6.0x required"
      },
      {
        "root": "chop",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0041,
        "multiple": 2.5,
        "state": "BELOW",
        "reason": "chop: 2.5x over baseline < 6.0x required"
      },
      {
        "root": "slvr",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0041,
        "multiple": 2.5,
        "state": "BELOW",
        "reason": "slvr: 2.5x over baseline < 6.0x required"
      },
      {
        "root": "credit",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0046,
        "multiple": 2.2,
        "state": "BELOW",
        "reason": "credit: 2.2x over baseline < 6.0x required"
      }
    ],
    "recent": [
      {
        "address": "0x8216b56be9e9dd3f9dcb5aa7401d51514dc8424c",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x70e877869fb93d46ea0837287feda0baa4265a22",
        "block": 113211564,
        "ts": "2026-11-13T08:19:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb2babc4731c9bc67c40105ac6dae07757d3f4364",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x70e877869fb93d46ea0837287feda0baa4265a22",
        "block": 113211186,
        "ts": "2026-11-13T08:18:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe82b68eb2951024b629c471a315c86bb46617777",
        "name": "サクラ",
        "symbol": "Sakura",
        "deployer": "0xeec6803c1f779cccb01f788d652a07dac3a62711",
        "block": 113210843,
        "ts": "2026-11-13T08:18:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9474ab228095bda042d03267925494cf03f9be39",
        "name": "Foodcoin",
        "symbol": "FOOD",
        "deployer": "0x7afffdaff8b1fe29fccc4a5e8b8836ae1c819633",
        "block": 113210793,
        "ts": "2026-11-13T08:18:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xaeb2232f7c5819211c165a4ae2d9560741e78602",
        "name": "Lard Lad Donuts",
        "symbol": "LLD",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 113210233,
        "ts": "2026-11-13T08:17:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x51b3e0ea648e47bf32d17b34bcbde4d489087777",
        "name": "Unsaid",
        "symbol": "UNSAID",
        "deployer": "0x4412cfb4de7c089086fc43306218f8f2f1811a22",
        "block": 113210096,
        "ts": "2026-11-13T08:16:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5fc5360d0400a0fd4f2af552add042d716f1d168",
        "name": "Global Dollar",
        "symbol": "USDG",
        "deployer": "0xd0dcacd0135d463b553bf7ac8c68f32fa178c279",
        "block": 113210054,
        "ts": "2026-11-13T08:16:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5c634f0b2777de370cb14155dacd9a40d22e5813",
        "name": "Trashed Panda",
        "symbol": "Cole",
        "deployer": "0x4dd951549b2d0bf2b8269c9b46d999fffd781d79",
        "block": 113209695,
        "ts": "2026-11-13T08:16:11.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x87086329b677c94df4da5dfe9a8da90c73c535bf",
        "name": "Volatile AMM - UP/USDG",
        "symbol": "vAMM-UP/USDG",
        "deployer": "0x21ad783890b8bc8c18733cf51cb2fdf5678171fb",
        "block": 113209562,
        "ts": "2026-11-13T08:15:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8bf5fa59a05a4e313350463fec76a1f74fe063fd",
        "name": "HashBlokz",
        "symbol": "HASH",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 113209542,
        "ts": "2026-11-13T08:15:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8b12b8af8fc09797983f2389f8f61f5dbc2c10fa",
        "name": "DOGE",
        "symbol": "DOGE",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 113209509,
        "ts": "2026-11-13T08:15:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd8017168fdc5fd30548735bd14739b7681ff92d0",
        "name": "RH Crypto Punks",
        "symbol": "RCP",
        "deployer": "0x08a8aa8e9e6f6ee85c2645d6756d479047d3b09b",
        "block": 113209430,
        "ts": "2026-11-13T08:15:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x99347d5f70d3838763f6bddcf80304c8aa953b57",
        "name": "NetNet Credit",
        "symbol": "nnUSDG",
        "deployer": "0xc452880536b572df0750c893289ef6d72684311f",
        "block": 113209254,
        "ts": "2026-11-13T08:15:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbb2e83dd65bd529b2ded58417c75f750233f7777",
        "name": "裤裆里的黑天鹅",
        "symbol": "裤裆里的黑天鹅",
        "deployer": "0xba99a63b9ab6033451b21666851b8070af73cbe8",
        "block": 113209222,
        "ts": "2026-11-13T08:15:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x48fd1cb7677177e318d61aa364b77d999125f7bc",
        "name": "DPepes RH",
        "symbol": "dpp",
        "deployer": "0x7ea9494fe5bb34f7948a15aee200865f10d33663",
        "block": 113209111,
        "ts": "2026-11-13T08:15:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd366682c5d190138d6bdee7870623667efff3f7d",
        "name": "Sherwood Park Fair Cards",
        "symbol": "SPFC",
        "deployer": "0xa0bb665e3ebfea2ba706332bd0d177e327326ede",
        "block": 113209099,
        "ts": "2026-11-13T08:15:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7d9ec8330e2f766d66336302091303deb8c02e43",
        "name": "PEARL",
        "symbol": "PRL",
        "deployer": "0x6866a6a28129839f67da069ceb68ad258830363e",
        "block": 113208762,
        "ts": "2026-11-13T08:14:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x117d5bf1634ef20bbdc85df71d403d4df9fe7777",
        "name": "Ni Hao Inu",
        "symbol": "INUHAO",
        "deployer": "0xb66a0d760090a9389b77a9b2726f797ab718e21b",
        "block": 113208670,
        "ts": "2026-11-13T08:14:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3fcc0b72783a204abb3e14c5c19b4ed6b95004aa",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x57c0eabc33c9a792c77a0c97a559a9d7bfd83b0c",
        "block": 113208580,
        "ts": "2026-11-13T08:14:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x426529545e92950bcea003bcf43821c634e1f857",
        "name": "ni hao inu",
        "symbol": "inuhao",
        "deployer": "0x399913ff4dcee10d2357b1ab8a47db2d18f8b840",
        "block": 113208572,
        "ts": "2026-11-13T08:14:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7ff93a1b39a79f9ebad02fce738ddad397ab12ef",
        "name": "Autism Coin",
        "symbol": "AUTISM",
        "deployer": "0x57c0eabc33c9a792c77a0c97a559a9d7bfd83b0c",
        "block": 113208436,
        "ts": "2026-11-13T08:13:57.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xb8808261aedced4da90f68138eb6417d3f0c2212",
        "name": "DONUT",
        "symbol": "DONUT",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 113208272,
        "ts": "2026-11-13T08:13:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5bb4128aa616e5d1f19140cb9f0acc1ad5d8f145",
        "name": "Glazzy Dog",
        "symbol": "GDOG",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 113208223,
        "ts": "2026-11-13T08:13:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xccd425ee5822dfa674b493b4609ca6112e86a138",
        "name": "Test1",
        "symbol": "VVVVVV",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 113208194,
        "ts": "2026-11-13T08:13:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb010298cd8ef9c59070cdede4633ab4a6066515d",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x8d94c6a0d439b7d63a66ba213e66644d559e7887",
        "block": 113207818,
        "ts": "2026-11-13T08:12:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa09865aeee0b8ac2dbd8e4ee3139591ec8a3e75c",
        "name": "GNBV",
        "symbol": "GNBV",
        "deployer": "0x8d94c6a0d439b7d63a66ba213e66644d559e7887",
        "block": 113207763,
        "ts": "2026-11-13T08:12:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x54c336d5d918e740b39f981f5b0c72bbd1b1aac7",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x811bed9b46ce602358211f635d09381e45460bce",
        "block": 113207701,
        "ts": "2026-11-13T08:12:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf5fa3597a782e50e7dda821e8b3759188b8830cd",
        "name": "GLAZMEDADDY",
        "symbol": "GLAZDY",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 113207600,
        "ts": "2026-11-13T08:12:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5c689324312fc8ef13b491e32774b4424aaf4e79",
        "name": "test",
        "symbol": "TEST",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 113207318,
        "ts": "2026-11-13T08:12:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5f7bb59365ce557c26dbcaa4ee9d39a4b95b7127",
        "name": "Identity.md",
        "symbol": "IMD",
        "deployer": "0x2171a1b6c8753920330a3b58d9305b277057dd3f",
        "block": 113207296,
        "ts": "2026-11-13T08:11:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe0ad9abea2473e0b766d316d332772ebd70fffa7",
        "name": "AI-Mafia-FUND",
        "symbol": "AIFUND",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 113207285,
        "ts": "2026-11-13T08:11:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x19e2b52fc1607786d0645e4ef21a2bd45ad71943",
        "name": "WEN_VLAD?",
        "symbol": "WEN",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 113207249,
        "ts": "2026-11-13T08:11:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x578de2a7f4436748761de877aa40ed5e7fc4dd60",
        "name": "Vajra Coin",
        "symbol": "VJRA",
        "deployer": "0x08b40729f333f6233719590dc980ee7f5888fcae",
        "block": 113207222,
        "ts": "2026-11-13T08:11:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8018ee3ad3c0321be0e69536733cd28e29564dd4",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xb5a3e73a3dc7c3e2b24ee370673ea7c50416b5b1",
        "block": 113206825,
        "ts": "2026-11-13T08:11:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x027aca2794e44f24950d81227dcd516ffbb49d6e",
        "name": "QUOTRONS",
        "symbol": "QUOTRON",
        "deployer": "0x919968a4238a54b381f022a360260ef5d7e015ac",
        "block": 113206804,
        "ts": "2026-11-13T08:11:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1c8b07b7f5ee449e559924ab81a4fe42b5f07777",
        "name": "United Fund Dividend States",
        "symbol": "UFDS",
        "deployer": "0xa72d384419e08b0eeb43d96c73ba62b627de39a7",
        "block": 113206534,
        "ts": "2026-11-13T08:10:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd9b8fbd61033145c5496132153ce675756313b71",
        "name": "Slvr Vote Escrow",
        "symbol": "veSLVR",
        "deployer": "0xfb0b9b3cd7337c17e422a4c74c9395ff2163eefe",
        "block": 113206455,
        "ts": "2026-11-13T08:10:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x91d5d2c999c35ce061fd4967e6764cdd9cf1b3e1",
        "name": "Ixs Token",
        "symbol": "IXS",
        "deployer": "0x96111cc4867c5e1c22da4b79bb8852b9e2a07eb1",
        "block": 113206306,
        "ts": "2026-11-13T08:10:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x48e39e56acdba37b09020c0b734a613c9a2f100a",
        "name": "Blackberry • Robinhood Token",
        "symbol": "BB",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 113205438,
        "ts": "2026-11-13T08:08:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x59e6f370467d60e4080a068ee28bea7a1cfc7777",
        "name": "Tree Coin",
        "symbol": "TREECOIN",
        "deployer": "0x1a1460314e6658b7332984d31abd87811551fb9f",
        "block": 113205195,
        "ts": "2026-11-13T08:08:18.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
