/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-21T22:34:44.000Z",
    "opened_at": "2026-10-21T21:34:44.000Z",
    "window_hours": 1,
    "head_block": 94633547,
    "start_block": 94598872,
    "blocks_scanned": 34675,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 588,
    "unnamed_contracts": 0,
    "via_factory": 555,
    "no_receipt": 0,
    "candidates": 588,
    "mint_events": 23539,
    "deployers": 326,
    "roots": 686,
    "cleared_multiple": 211,
    "failed_gates": 192,
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
      "america-back-aib",
      "boss-final-aura",
      "cybercurrency",
      "dog",
      "gator-macca",
      "hood",
      "pangea",
      "positions-nft",
      "robinhood",
      "super",
      "uniswap-uni",
      "usdg"
    ],
    "top": {
      "root": "robinhood",
      "launches": 28,
      "deployers": 9,
      "baseline_share": 0.0004,
      "multiple": 119,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "robinhood",
        "launches": 28,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 119,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 13,
        "deployers": 13,
        "baseline_share": 0.0004,
        "multiple": 55.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "dog",
        "launches": 12,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 51,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "pangea",
        "launches": 11,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 46.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "cybercurrency",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 29.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "hood",
        "launches": 7,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 29.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "super",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 25.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 26,
        "deployers": 26,
        "baseline_share": 0.0004,
        "multiple": 110.5,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 81%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 21,
        "deployers": 21,
        "baseline_share": 0.0004,
        "multiple": 89.3,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 81%, merged to uniswap-uni"
      },
      {
        "root": "boss",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 46.8,
        "state": "MERGED",
        "reason": "boss + final co-occur 91%, merged to boss-final-aura"
      },
      {
        "root": "gator",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 46.8,
        "state": "MERGED",
        "reason": "gator + macca co-occur 75%, merged to gator-macca"
      },
      {
        "root": "final",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 42.5,
        "state": "MERGED",
        "reason": "boss + final co-occur 91%, merged to boss-final-aura"
      },
      {
        "root": "macca",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 42.5,
        "state": "MERGED",
        "reason": "gator + macca co-occur 75%, merged to gator-macca"
      },
      {
        "root": "aura",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 38.3,
        "state": "MERGED",
        "reason": "boss + final co-occur 91%, merged to boss-final-aura"
      },
      {
        "root": "positions",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 38.3,
        "state": "MERGED",
        "reason": "positions + nft co-occur 70%, merged to positions-nft"
      },
      {
        "root": "america",
        "launches": 8,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 34,
        "state": "MERGED",
        "reason": "america + back co-occur 88%, merged to america-back-aib"
      },
      {
        "root": "nft",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 34,
        "state": "MERGED",
        "reason": "positions + nft co-occur 70%, merged to positions-nft"
      },
      {
        "root": "back",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 29.8,
        "state": "MERGED",
        "reason": "america + back co-occur 88%, merged to america-back-aib"
      },
      {
        "root": "aib",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 25.5,
        "state": "MERGED",
        "reason": "america + back co-occur 88%, merged to america-back-aib"
      },
      {
        "root": "counterparty",
        "launches": 10,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 42.5,
        "state": "THIN",
        "reason": "counterparty: 1 deployers < 6 required"
      },
      {
        "root": "ctr",
        "launches": 10,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 42.5,
        "state": "THIN",
        "reason": "ctr: 1 deployers < 6 required"
      },
      {
        "root": "prd",
        "launches": 10,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 42.5,
        "state": "THIN",
        "reason": "prd: 1 deployers < 6 required"
      },
      {
        "root": "predictor",
        "launches": 10,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 42.5,
        "state": "THIN",
        "reason": "predictor: 1 deployers < 6 required"
      },
      {
        "root": "borro",
        "launches": 9,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 38.3,
        "state": "THIN",
        "reason": "borro: 1 deployers < 6 required"
      },
      {
        "root": "cat",
        "launches": 7,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 29.8,
        "state": "THIN",
        "reason": "cat: 5 deployers < 6 required"
      },
      {
        "root": "alandale",
        "launches": 6,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 25.5,
        "state": "THIN",
        "reason": "alandale: 3 deployers < 6 required"
      },
      {
        "root": "deposit",
        "launches": 6,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 25.5,
        "state": "THIN",
        "reason": "deposit: 4 deployers < 6 required"
      },
      {
        "root": "pannotia",
        "launches": 6,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 25.5,
        "state": "THIN",
        "reason": "pannotia: 4 deployers < 6 required"
      },
      {
        "root": "arcus",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 21.3,
        "state": "THIN",
        "reason": "arcus: 1 deployers < 6 required"
      },
      {
        "root": "box",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.3,
        "state": "THIN",
        "reason": "box: 3 deployers < 6 required"
      },
      {
        "root": "bucket",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 21.3,
        "state": "THIN",
        "reason": "bucket: 1 deployers < 6 required"
      },
      {
        "root": "kimchi",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 21.3,
        "state": "THIN",
        "reason": "kimchi: 5 deployers < 6 required"
      },
      {
        "root": "safety",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.3,
        "state": "THIN",
        "reason": "safety: 3 deployers < 6 required"
      },
      {
        "root": "commander",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17,
        "state": "THIN",
        "reason": "commander: 4 launches < 5 required"
      },
      {
        "root": "compute",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17,
        "state": "THIN",
        "reason": "compute: 4 launches < 5 required"
      },
      {
        "root": "cow",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 17,
        "state": "THIN",
        "reason": "cow: 4 launches < 5 required"
      },
      {
        "root": "dacity",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17,
        "state": "THIN",
        "reason": "dacity: 4 launches < 5 required"
      },
      {
        "root": "fake",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 17,
        "state": "THIN",
        "reason": "fake: 4 launches < 5 required"
      },
      {
        "root": "intelligence",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 17,
        "state": "THIN",
        "reason": "intelligence: 4 launches < 5 required"
      },
      {
        "root": "live",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 17,
        "state": "THIN",
        "reason": "live: 4 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x1be41a26bb1f02e7f4bca15af94199c2b2927777",
        "name": "Superkimchi",
        "symbol": "SUPAKIMCHI",
        "deployer": "0xa7ba884561771e707f7f29bd5388b77f1e470daf",
        "block": 94633341,
        "ts": "2026-10-21T22:34:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8a619801054e0e4ff853da1d6150a83d6366bbaa",
        "name": "Salute face",
        "symbol": "saluteface",
        "deployer": "0x7c27155b15bb2a5634f110ea1d46e50fab3a0a2a",
        "block": 94633341,
        "ts": "2026-10-21T22:34:23.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x7998171e789a0ba9498108274930dd310eac688a",
        "name": "ROGER",
        "symbol": "ROGER",
        "deployer": "0xb18f702a34a6e88d127ce1b8404f3037818b520e",
        "block": 94633197,
        "ts": "2026-10-21T22:34:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1f8f315b08d5d46aadf846da9965eda601f00249",
        "name": "Hood Minis",
        "symbol": "MINIS",
        "deployer": "0x168878d977155f808d877f58f4ca3625ac45f37f",
        "block": 94633065,
        "ts": "2026-10-21T22:33:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfc569113658b36b43ec505030977b9f497a9c3fe",
        "name": "Crypto Cars GARAGE",
        "symbol": "CCG",
        "deployer": "0x2389aa43ea211fd8113bc7c31fd2a66504d8d8a5",
        "block": 94632998,
        "ts": "2026-10-21T22:33:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xeb19001f18806ec6c27681416828eaee1ae0b6ea",
        "name": "BrianTolyCzVitalikVlad",
        "symbol": "BTCVV",
        "deployer": "0xc5d22a7d5b203164bfa6479d72de9297cff19bf5",
        "block": 94632942,
        "ts": "2026-10-21T22:33:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x55fbcb0cff47c37a29b1e3e174c812bdc2d5bbf4",
        "name": "Pannotia",
        "symbol": "PANNOTIA",
        "deployer": "0xe990ef6b0320011dd9d13754dc16b8a431a742b1",
        "block": 94632937,
        "ts": "2026-10-21T22:33:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe0ea0ed0cced1bfb8c48636900f8a5b615f57777",
        "name": "Home3",
        "symbol": "HOME3",
        "deployer": "0x1b4ebe73585b94578dc055c6ac7e89333fdadcf7",
        "block": 94632902,
        "ts": "2026-10-21T22:33:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe66fde69e6efc3c485fd4810bf6e14eb7b36be85",
        "name": "Home3",
        "symbol": "Home3",
        "deployer": "0xb1894596dfc81c90fc08f1d8652fd5121d464362",
        "block": 94632837,
        "ts": "2026-10-21T22:33:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5c2d19e830e40cc43e38be63b9e4bf18cc917777",
        "name": "Kimchi Final Boss",
        "symbol": "CABBAGE",
        "deployer": "0xfe2cb6b8c284d632390268d8007873ac5865db0b",
        "block": 94632823,
        "ts": "2026-10-21T22:33:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe60c1f5d9ba7f62a392a78472a3ab83dd62467a3",
        "name": "FUEL",
        "symbol": "FUEL",
        "deployer": "0xa32708629a0071605f01a77b55aa5842e8c76ced",
        "block": 94632694,
        "ts": "2026-10-21T22:33:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf06564184a3c8ccd5e931c0d20c73d51d1a87777",
        "name": "Maca The Gator",
        "symbol": "MACA",
        "deployer": "0x498b1bee7a146a4d10514f2d8eb1201b447ad384",
        "block": 94632596,
        "ts": "2026-10-21T22:33:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x22620f7c9cbb0c09d3088dfa1c439d2f2f1d65ae",
        "name": "Pannotia",
        "symbol": "PANNOTIA",
        "deployer": "0xb384288907d94649724a174b07df90f2ddd945b3",
        "block": 94632565,
        "ts": "2026-10-21T22:33:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6410cfe504602f7287bd768bea5632494a2d26ea",
        "name": "WE ALL GONNA MAKE IT",
        "symbol": "WAGMI",
        "deployer": "0xc5d22a7d5b203164bfa6479d72de9297cff19bf5",
        "block": 94632539,
        "ts": "2026-10-21T22:33:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x61d6421433eb267a909a05447c40fbc66ad77777",
        "name": "Super USOR",
        "symbol": "USOR",
        "deployer": "0x7485fbfd99993dab4c9964f53791e40d14253c97",
        "block": 94632327,
        "ts": "2026-10-21T22:32:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd359160448b011dc1aaaf9c166e2e13bb414e6b3",
        "name": "Uniswap V3 Positions NFT-V1",
        "symbol": "UNI-V3-POS",
        "deployer": "0xa1600bd74d9918cba658cb4f3901f41325cffeb6",
        "block": 94632267,
        "ts": "2026-10-21T22:32:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0c71c7fb30532eedf1586833b6b0003d9e7136ea",
        "name": "Gorgonopsia",
        "symbol": "PCAT",
        "deployer": "0xc5d22a7d5b203164bfa6479d72de9297cff19bf5",
        "block": 94632209,
        "ts": "2026-10-21T22:32:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x51c1cd01b4f7612b923edaa09237d02064a39708",
        "name": "Pannotia",
        "symbol": "PANNOTIA",
        "deployer": "0xb384288907d94649724a174b07df90f2ddd945b3",
        "block": 94632193,
        "ts": "2026-10-21T22:32:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf240fc5e8085769466aa8e7a84411e6f6e5aeba3",
        "name": "SETZ",
        "symbol": "SETZ",
        "deployer": "0xa8b9de464656a2c723c9df067561c9d84b395b73",
        "block": 94632189,
        "ts": "2026-10-21T22:32:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb968f36759b1e3681abea36cb8ac1674b50986c6",
        "name": "Reasonmachines",
        "symbol": "REASON",
        "deployer": "0x2b8624f6b3e46bd68c181163746e296ddebf590c",
        "block": 94631992,
        "ts": "2026-10-21T22:32:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6781c6435d4881dbe3165161d13ba5e0562bf69d",
        "name": "Egyptians",
        "symbol": "Egyptians",
        "deployer": "0xb37fe18b1b6c21845fbf13c367a3daa2135ff0a8",
        "block": 94631988,
        "ts": "2026-10-21T22:32:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc708a2432171fbbe07553468a3d6aa9309b0a6ea",
        "name": "Dacity Coin",
        "symbol": "DACITY",
        "deployer": "0x0711454269bb162bcd1c4d0206344d6f532f2e60",
        "block": 94631852,
        "ts": "2026-10-21T22:31:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6178406c433c70b006e2f81a79a5d98bf5b0af85",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x77f75363faeaae05aa54aae33e19a0c901147c11",
        "block": 94631838,
        "ts": "2026-10-21T22:31:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2c525f8c8ae8bca8b5f683a181fc5a7541e56da1",
        "name": "Risk it All",
        "symbol": "RISK",
        "deployer": "0xe990ef6b0320011dd9d13754dc16b8a431a742b1",
        "block": 94631755,
        "ts": "2026-10-21T22:31:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa9363073951a26fee74a056baaa983a1c332d6ea",
        "name": "Spike",
        "symbol": "SPIKE",
        "deployer": "0xc5d22a7d5b203164bfa6479d72de9297cff19bf5",
        "block": 94631678,
        "ts": "2026-10-21T22:31:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9c34d3908fafb45cfea66403a5f1791600afac88",
        "name": "Yoodle Teens",
        "symbol": "YOODLE",
        "deployer": "0xf8200f17ba1ee5656e60fc0869cac7538d748bac",
        "block": 94631583,
        "ts": "2026-10-21T22:31:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x37f26ddaaab4d71710f3d315970cf1ea40777777",
        "name": "Leekpad.Fun",
        "symbol": "LEEKPAD",
        "deployer": "0xa7ba884561771e707f7f29bd5388b77f1e470daf",
        "block": 94631575,
        "ts": "2026-10-21T22:31:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc49458b56d95a3117c762ba5a36b8217985736ea",
        "name": "Hired Corporation",
        "symbol": "HIRED",
        "deployer": "0xc5d22a7d5b203164bfa6479d72de9297cff19bf5",
        "block": 94631509,
        "ts": "2026-10-21T22:31:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xabc6c4f5d1f31326b419c2645c981743a845313a",
        "name": "Vault Robbers",
        "symbol": "ROBBERS",
        "deployer": "0x8f54d3992407eae1b6d390f34b176820792abad3",
        "block": 94631341,
        "ts": "2026-10-21T22:31:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfb7b1e03cbb6f061dd4d156bab359792869a6e9e",
        "name": "Predictor-47d92f4a",
        "symbol": "PRD-47d92f4a",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 94631293,
        "ts": "2026-10-21T22:30:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc77182d72a4e2b1e8d97beaba48b17dd95415004",
        "name": "Counterparty-47d92f4a",
        "symbol": "CTR-47d92f4a",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 94631293,
        "ts": "2026-10-21T22:30:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb37fb45f87b5ccf5ce35ca0f6b703aa4d3c0f921",
        "name": "trusted coin",
        "symbol": "TRUSTED",
        "deployer": "0x0238ca068ca97a3702bbf390d0790537b466bfd9",
        "block": 94631270,
        "ts": "2026-10-21T22:30:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcc650594860968792a77c08667469da0d1b301b6",
        "name": "Wrapped Alphabet Class A • Robinhood Token",
        "symbol": "wGOOGL",
        "deployer": "0x4a438c7c4052209b71cc403f28b9976300bffbbe",
        "block": 94631171,
        "ts": "2026-10-21T22:30:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3db744585f892dc77750b2f4376b4fc1dd66d510",
        "name": "Pyramid",
        "symbol": "PYR",
        "deployer": "0x9d915ceb820b5243d4a609f149799b540ecd5c67",
        "block": 94630975,
        "ts": "2026-10-21T22:30:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x82fd0f241d3c95b3ad383729b301eaaea6c1351f",
        "name": "TOP BLA STOP",
        "symbol": "TBP",
        "deployer": "0x2855008c7764fb35fc73407e2091f5de2c577ecf",
        "block": 94630878,
        "ts": "2026-10-21T22:30:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd08a228d2b10e48154d2db994858d50a56d25ead",
        "name": "Risk it All",
        "symbol": "RISK",
        "deployer": "0xb384288907d94649724a174b07df90f2ddd945b3",
        "block": 94630828,
        "ts": "2026-10-21T22:30:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x08400968abd6d414343b7fd45faa7242c4e1c8e7",
        "name": "Hop",
        "symbol": "HOP",
        "deployer": "0x02886cbac9c50726339ef108a0fdcf023b4f147d",
        "block": 94630557,
        "ts": "2026-10-21T22:29:42.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x7822c521583d9df8a75048b3a6df696fdca4e228",
        "name": "Pannotia",
        "symbol": "PANNOTIA",
        "deployer": "0xe990ef6b0320011dd9d13754dc16b8a431a742b1",
        "block": 94630300,
        "ts": "2026-10-21T22:29:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb13045f361537a7faa24dd8514e5b9a0ef0a9b3d",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x22a68774c64c193fb8db3869f1720c2c40780675",
        "block": 94630287,
        "ts": "2026-10-21T22:29:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x97d29b3274fe0ecafbae86ac05c2979051567777",
        "name": "Live Test 21753",
        "symbol": "LT21753",
        "deployer": "0x8aa9e9d1710fbef6bd4dfb7f425a09b2b350315e",
        "block": 94630284,
        "ts": "2026-10-21T22:29:14.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
