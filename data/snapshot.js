/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-14T15:43:49.000Z",
    "opened_at": "2026-11-14T14:43:49.000Z",
    "window_hours": 1,
    "head_block": 114266282,
    "start_block": 114231126,
    "blocks_scanned": 35156,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 368,
    "unnamed_contracts": 15,
    "via_factory": 344,
    "no_receipt": 0,
    "candidates": 383,
    "mint_events": 28258,
    "deployers": 237,
    "roots": 522,
    "cleared_multiple": 343,
    "failed_gates": 340,
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
      "snoopy",
      "vice-vi"
    ],
    "top": {
      "root": "snoopy",
      "launches": 10,
      "deployers": 10,
      "baseline_share": 0.0004,
      "multiple": 67.9,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "snoopy",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 67.9,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "vice",
        "launches": 18,
        "deployers": 18,
        "baseline_share": 0.0005,
        "multiple": 97.8,
        "state": "MERGED",
        "reason": "vice + vi co-occur 94%, merged to vice-vi"
      },
      {
        "root": "vi",
        "launches": 17,
        "deployers": 17,
        "baseline_share": 0.0004,
        "multiple": 115.5,
        "state": "MERGED",
        "reason": "vice + vi co-occur 94%, merged to vice-vi"
      },
      {
        "root": "uniswap",
        "launches": 16,
        "deployers": 15,
        "baseline_share": 0.0509,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "uniswap: 0.9x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 14,
        "deployers": 13,
        "baseline_share": 0.0424,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "uni: 0.9x over baseline < 6.0x required"
      },
      {
        "root": "usdg",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0203,
        "multiple": 1.3,
        "state": "BELOW",
        "reason": "usdg: 1.3x over baseline < 6.0x required"
      },
      {
        "root": "robinhood",
        "launches": 9,
        "deployers": 5,
        "baseline_share": 0.0513,
        "multiple": 0.5,
        "state": "BELOW",
        "reason": "robinhood: 0.5x over baseline < 6.0x required"
      },
      {
        "root": "nft",
        "launches": 8,
        "deployers": 7,
        "baseline_share": 0.0201,
        "multiple": 1.1,
        "state": "BELOW",
        "reason": "nft: 1.1x over baseline < 6.0x required"
      },
      {
        "root": "cat",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.013,
        "multiple": 1.5,
        "state": "BELOW",
        "reason": "cat: 1.5x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0167,
        "multiple": 1.1,
        "state": "BELOW",
        "reason": "positions: 1.1x over baseline < 6.0x required"
      },
      {
        "root": "amc",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.001,
        "multiple": 13.6,
        "state": "THIN",
        "reason": "amc: 3 deployers < 6 required"
      },
      {
        "root": "dog",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0058,
        "multiple": 2.3,
        "state": "BELOW",
        "reason": "dog: 2.3x over baseline < 6.0x required"
      },
      {
        "root": "weth",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0073,
        "multiple": 1.9,
        "state": "BELOW",
        "reason": "weth: 1.9x over baseline < 6.0x required"
      },
      {
        "root": "despair",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 27.2,
        "state": "THIN",
        "reason": "despair: 4 launches < 5 required"
      },
      {
        "root": "kibble",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 27.2,
        "state": "THIN",
        "reason": "kibble: 4 launches < 5 required"
      },
      {
        "root": "kitten",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 27.2,
        "state": "THIN",
        "reason": "kitten: 4 launches < 5 required"
      },
      {
        "root": "prd",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0048,
        "multiple": 2.3,
        "state": "BELOW",
        "reason": "prd: 2.3x over baseline < 6.0x required"
      },
      {
        "root": "ctr",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0049,
        "multiple": 2.2,
        "state": "BELOW",
        "reason": "ctr: 2.2x over baseline < 6.0x required"
      },
      {
        "root": "layerbank",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0053,
        "multiple": 2.1,
        "state": "BELOW",
        "reason": "layerbank: 2.1x over baseline < 6.0x required"
      },
      {
        "root": "counterparty",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0055,
        "multiple": 2,
        "state": "BELOW",
        "reason": "counterparty: 2.0x over baseline < 6.0x required"
      },
      {
        "root": "predictor",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0055,
        "multiple": 2,
        "state": "BELOW",
        "reason": "predictor: 2.0x over baseline < 6.0x required"
      },
      {
        "root": "amm",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0062,
        "multiple": 1.8,
        "state": "BELOW",
        "reason": "amm: 1.8x over baseline < 6.0x required"
      },
      {
        "root": "staked",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0069,
        "multiple": 1.6,
        "state": "BELOW",
        "reason": "staked: 1.6x over baseline < 6.0x required"
      },
      {
        "root": "ah",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "ah: 3 launches < 5 required"
      },
      {
        "root": "doomscroll",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "doomscroll: 3 launches < 5 required"
      },
      {
        "root": "doomscrolling",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "doomscrolling: 3 launches < 5 required"
      },
      {
        "root": "gato",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "gato: 3 launches < 5 required"
      },
      {
        "root": "here",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "here: 3 launches < 5 required"
      },
      {
        "root": "horse",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "horse: 3 launches < 5 required"
      },
      {
        "root": "mimic",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "mimic: 3 launches < 5 required"
      },
      {
        "root": "shit",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "shit: 3 launches < 5 required"
      },
      {
        "root": "tdsu",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "tdsu: 3 launches < 5 required"
      },
      {
        "root": "tether",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "tether: 3 launches < 5 required"
      },
      {
        "root": "monkey",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0006,
        "multiple": 13.6,
        "state": "THIN",
        "reason": "monkey: 3 launches < 5 required"
      },
      {
        "root": "hi",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.001,
        "multiple": 8.2,
        "state": "THIN",
        "reason": "hi: 3 launches < 5 required"
      },
      {
        "root": "gta",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0016,
        "multiple": 5.1,
        "state": "BELOW",
        "reason": "gta: 5.1x over baseline < 6.0x required"
      },
      {
        "root": "index",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0026,
        "multiple": 3.1,
        "state": "BELOW",
        "reason": "index: 3.1x over baseline < 6.0x required"
      },
      {
        "root": "fund",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0029,
        "multiple": 2.8,
        "state": "BELOW",
        "reason": "fund: 2.8x over baseline < 6.0x required"
      },
      {
        "root": "position",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0054,
        "multiple": 1.5,
        "state": "BELOW",
        "reason": "position: 1.5x over baseline < 6.0x required"
      },
      {
        "root": "agent",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0068,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "agent: 1.2x over baseline < 6.0x required"
      }
    ],
    "recent": [
      {
        "address": "0x7c0db2f155778096e83fd6cf54b631672190f7f2",
        "name": "ワルダー",
        "symbol": "Warudā",
        "deployer": "0xf7fb823f9df5587471700b07f722bb265d702b94",
        "block": 114266169,
        "ts": "2026-11-14T15:43:37.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x046e145502e44f4f87f6b814442e7f26f803cbed",
        "name": "Legendary",
        "symbol": "LGND",
        "deployer": "0x4337003fcd2f56de3977ccb806383e9161628d0e",
        "block": 114265703,
        "ts": "2026-11-14T15:42:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8fb1b492e9a3e23d7d5a675fc2e4bd03e0fc3a6a",
        "name": "Charlie Brown",
        "symbol": "Charlie",
        "deployer": "0xf50bd97f9bba058772f8fd832c678f351ba4415f",
        "block": 114265491,
        "ts": "2026-11-14T15:42:27.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x28726464877ee5967f144f5232eb1b11de3ab953",
        "name": "Welcome to my DMs✊",
        "symbol": "YoungBull",
        "deployer": "0xed59940b72819fed5e0c2c78fbc1c66981b73fff",
        "block": 114265330,
        "ts": "2026-11-14T15:42:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9028b96076a71946d67ff30f348e98885ff6a7c7",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x2698d2bf90676de31b8b822772cac8195fb73767",
        "block": 114265259,
        "ts": "2026-11-14T15:42:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4eff026878422b8336b4d83b23b7ffa3118e8c66",
        "name": "GUARD",
        "symbol": "GUARD",
        "deployer": "0x93bc6ece1824dd5cdf4aa798eaa9911247c75e44",
        "block": 114264968,
        "ts": "2026-11-14T15:41:34.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x92a1efb32c1d31bf1e455f677201cbc1fa33abc9",
        "name": "Bellgap",
        "symbol": "BGAP",
        "deployer": "0x38c53fbed57199d40f37252f07b24d96ff7ed253",
        "block": 114264830,
        "ts": "2026-11-14T15:41:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x66d8118138f8fe570859cac993e9a2788f10ef14",
        "name": "Cursed P",
        "symbol": ".",
        "deployer": "0x08a8aa8e9e6f6ee85c2645d6756d479047d3b09b",
        "block": 114264650,
        "ts": "2026-11-14T15:41:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb1b84466862677a79c669647fabd6c8108f8da3f",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xdfd5a1b5106e8c47fff02dee69c7804d55c6cb85",
        "block": 114264617,
        "ts": "2026-11-14T15:40:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdfb0405e374daf8da821e45978f6651489337f5a",
        "name": "@ Meme Coin",
        "symbol": "@MC",
        "deployer": "0x4337003fcd2f56de3977ccb806383e9161628d0e",
        "block": 114264369,
        "ts": "2026-11-14T15:40:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1403aeb9476de20f1f147b97e5b08b23a724524b",
        "name": "Tether USD",
        "symbol": "‎‮TDSU",
        "deployer": "0xab6e37b9d81ae6fec2f54629f68976cceab6ab2c",
        "block": 114264302,
        "ts": "2026-11-14T15:40:26.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xbbb2585c418da1049e9ae2acaa2d7d3844fcf3ae",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x94d2180d20621892e4fe1bfe5f734966f2955cc0",
        "block": 114264190,
        "ts": "2026-11-14T15:40:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x778962afd81e9023805c191e6685e7d76caa7777",
        "name": "Baby Snoopy",
        "symbol": "bSnoopy",
        "deployer": "0x432787f6e1ce177a2d17c347c5a8ae2d2c9d36af",
        "block": 114264041,
        "ts": "2026-11-14T15:39:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd015ed4c509c9c46efe7169a6b6af2604deabddb",
        "name": "Assets Club",
        "symbol": "AssetsClub",
        "deployer": "0xa8b76659d20ced2eeda27efad194ac757b238ec7",
        "block": 114264032,
        "ts": "2026-11-14T15:39:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4d3f37a965b21ab4122e92dd41d2693e742c883b",
        "name": "Ripe DAO Governance Token",
        "symbol": "RIPE",
        "deployer": "0x637735d866bab227f198dbaa7fcdde7bfc0c9a01",
        "block": 114263936,
        "ts": "2026-11-14T15:39:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x64efa6fc3f7417401a99d7962fde27b46d84246e",
        "name": "Snoopy",
        "symbol": "Snoopy",
        "deployer": "0xe4345ded586123ea0ffd24e2264e6bbf3e80836e",
        "block": 114263928,
        "ts": "2026-11-14T15:39:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8c28eff871cccbb3599274a5da3df886283614ce",
        "name": "Field Atlas",
        "symbol": "ATLAS",
        "deployer": "0x2698d2bf90676de31b8b822772cac8195fb73767",
        "block": 114263806,
        "ts": "2026-11-14T15:39:35.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x51e412d5b5da4f7917f2decf846d3660f9cf8e1e",
        "name": "popo",
        "symbol": "popo",
        "deployer": "0x73b163ebfb561a1ab6b4271c98a837779cadc66e",
        "block": 114263678,
        "ts": "2026-11-14T15:39:22.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x9fc4735e24da02c0ec2350835114cd31880e6205",
        "name": "A Massage Cat",
        "symbol": "AMC",
        "deployer": "0x4337004ec9c1417f1c7a26ebd4b4fbed6acf9e5d",
        "block": 114263661,
        "ts": "2026-11-14T15:39:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1fd897ef961180c44bf017050d81ac46fdc7ed0a",
        "name": "Observ Agent",
        "symbol": "OBSERV",
        "deployer": "0xc0b9c0e197e2a2d8687a34b269fe787635d6c770",
        "block": 114263596,
        "ts": "2026-11-14T15:39:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc9a0059645f3ac193cdb95daefd0ebf2dae2f665",
        "name": "Snoopy",
        "symbol": "Snoopy",
        "deployer": "0x68e9fd507d2ed08a644c6a932d69950d924c8a9b",
        "block": 114263468,
        "ts": "2026-11-14T15:39:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x24afb86d7cb4b485a7347d652921677786d26ee7",
        "name": "Index Basket RWA人生",
        "symbol": "IB-RWA人生",
        "deployer": "0x7c523327eeeead9275777301758e8912a215ac91",
        "block": 114263338,
        "ts": "2026-11-14T15:38:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2574d6e64bc2c4326cb35d8a2b2126fd300a7f79",
        "name": "PARE Principal PFE-DEC27",
        "symbol": "pPFE-DEC27",
        "deployer": "0x7eb51965e9300ebf054d5e68f00800d162a01eca",
        "block": 114263117,
        "ts": "2026-11-14T15:38:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcb0a7254d6e106f4a8ba3a25b3a35460be76b5b7",
        "name": "PARE Yield PFE-DEC27",
        "symbol": "yPFE-DEC27",
        "deployer": "0x7eb51965e9300ebf054d5e68f00800d162a01eca",
        "block": 114263117,
        "ts": "2026-11-14T15:38:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x432614cfbb0da25a0270ca9aa7f1c8340d7463db",
        "name": "Parrot404",
        "symbol": "parr",
        "deployer": "0x01b27db5a9a57c7bd411676413980f0c5ac2fd4f",
        "block": 114263091,
        "ts": "2026-11-14T15:38:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa6ac09775ba7c5441dff541104e8163abbb0e4af",
        "name": "GTA6CAT",
        "symbol": "GATO",
        "deployer": "0xdfd5a1b5106e8c47fff02dee69c7804d55c6cb85",
        "block": 114263066,
        "ts": "2026-11-14T15:38:20.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x09a12948f9461812ae4020583b0c8d44b9287777",
        "name": "Daisy",
        "symbol": "Daisy",
        "deployer": "0x65cf5419cdbc36edd0b9a418eb5705221abab2a4",
        "block": 114262989,
        "ts": "2026-11-14T15:38:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4a35a5ec2a50a4d2957b2f2366e017f526cab318",
        "name": "Foundry Compute Dollar",
        "symbol": "USDF",
        "deployer": "0xc1f3547241fe1bc7cb4fb943c67ef5d0263da352",
        "block": 114262735,
        "ts": "2026-11-14T15:37:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xeff8aa7527491bc29655b5399ef8770e9ff4c7cb",
        "name": "BagPack",
        "symbol": "BAGPACK",
        "deployer": "0x4337001fff419768e088ce247456c1b892888084",
        "block": 114262690,
        "ts": "2026-11-14T15:37:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1244d35d8ca18219c802fd887bcace6c7f4562ee",
        "name": "The Trillion Dollar Booth",
        "symbol": "BOOTH",
        "deployer": "0x9ecb6286990789796edf78b0b15807ee566233aa",
        "block": 114262423,
        "ts": "2026-11-14T15:37:14.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xd0aa68e99bf3dc609a3a28c3773087c99e0d0a52",
        "name": "CZ",
        "symbol": "CZGLAZ",
        "deployer": "0x0478ce6c290f722cdc00e64147035ec4c1cd2b24",
        "block": 114262358,
        "ts": "2026-11-14T15:37:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb2babc4731c9bc67c40105ac6dae07757d3f4364",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x94d2180d20621892e4fe1bfe5f734966f2955cc0",
        "block": 114262221,
        "ts": "2026-11-14T15:36:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb9002a5b1faf6f38a277aad6ad47e4fe7e3eded9",
        "name": "Baby Pit Coin",
        "symbol": "BPC",
        "deployer": "0x4337004ec9c1417f1c7a26ebd4b4fbed6acf9e5d",
        "block": 114262150,
        "ts": "2026-11-14T15:36:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc9c3802af99a6e9b9c3e7f5f8c5093e048fac1ca",
        "name": "POPT-V2 USDG LP on SPY/USDG 5bps",
        "symbol": "poUSDG",
        "deployer": "0x60101210d3ab6fbe20a8a56578141688d13738d9",
        "block": 114261875,
        "ts": "2026-11-14T15:36:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x90d831ce83b081eb84932ce5eda79966c9df8f87",
        "name": "Christmas Punk",
        "symbol": "Christmas Punk",
        "deployer": "0x5fe8c3b318f81ca485134c528756c23480cc6072",
        "block": 114261786,
        "ts": "2026-11-14T15:36:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb47a306bd89e8b6fa2b14f553e534adcd7cc337f",
        "name": "CollectorCrypt",
        "symbol": "COLLECTOR",
        "deployer": "0xfb32a11ae512ed3ca15282a8e408f5c804bb8847",
        "block": 114261711,
        "ts": "2026-11-14T15:36:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbe91f1eaae12f070e147511e8fcc8a9ac0caf0d4",
        "name": "ROOT",
        "symbol": "ROOT",
        "deployer": "0xbedd266febb8fb4b8084fde56bd551079e47e45b",
        "block": 114261468,
        "ts": "2026-11-14T15:35:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb814693a4d559ae0bfc1abc5fc50619918443dde",
        "name": "All Meme Collector",
        "symbol": "AMC",
        "deployer": "0x4337005db25dbad41da5692ba1188751ee5d98b6",
        "block": 114261429,
        "ts": "2026-11-14T15:35:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x57d038c097403898836e3c59daeb59ed1e4ad6f9",
        "name": "Jensen Huang",
        "symbol": "JENSEN",
        "deployer": "0xae1857e5f5cccd7bb881a47f0e46c16b0cc31746",
        "block": 114261091,
        "ts": "2026-11-14T15:34:58.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x63c12667638f2ae6fc6ae09b43d98ec84a8586ea",
        "name": "Wrapped Staked NET",
        "symbol": "wsNET",
        "deployer": "0x3c6608fcd08c26f8c90afc6debc486a4453be45f",
        "block": 114261087,
        "ts": "2026-11-14T15:34:57.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
