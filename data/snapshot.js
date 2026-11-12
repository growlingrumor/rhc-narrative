/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-12T04:18:33.000Z",
    "opened_at": "2026-11-12T03:18:33.000Z",
    "window_hours": 1,
    "head_block": 112249846,
    "start_block": 112216412,
    "blocks_scanned": 33434,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 239,
    "unnamed_contracts": 22,
    "via_factory": 240,
    "no_receipt": 0,
    "candidates": 261,
    "mint_events": 10509,
    "deployers": 168,
    "roots": 354,
    "cleared_multiple": 213,
    "failed_gates": 212,
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
      "plog"
    ],
    "top": {
      "root": "plog",
      "launches": 10,
      "deployers": 10,
      "baseline_share": 0.0004,
      "multiple": 104.6,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "plog",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 104.6,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "robinhood",
        "launches": 17,
        "deployers": 10,
        "baseline_share": 0.0513,
        "multiple": 1.4,
        "state": "BELOW",
        "reason": "robinhood: 1.4x over baseline < 6.0x required"
      },
      {
        "root": "usdg",
        "launches": 12,
        "deployers": 11,
        "baseline_share": 0.0203,
        "multiple": 2.5,
        "state": "BELOW",
        "reason": "usdg: 2.5x over baseline < 6.0x required"
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
        "root": "hood",
        "launches": 7,
        "deployers": 6,
        "baseline_share": 0.0108,
        "multiple": 2.7,
        "state": "BELOW",
        "reason": "hood: 2.7x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0167,
        "multiple": 1.8,
        "state": "BELOW",
        "reason": "positions: 1.8x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0424,
        "multiple": 0.7,
        "state": "BELOW",
        "reason": "uni: 0.7x over baseline < 6.0x required"
      },
      {
        "root": "nft",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0201,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "nft: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "agent",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0068,
        "multiple": 3.1,
        "state": "BELOW",
        "reason": "agent: 3.1x over baseline < 6.0x required"
      },
      {
        "root": "junkies",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 41.8,
        "state": "THIN",
        "reason": "junkies: 4 launches < 5 required"
      },
      {
        "root": "layerbank",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0053,
        "multiple": 3.2,
        "state": "BELOW",
        "reason": "layerbank: 3.2x over baseline < 6.0x required"
      },
      {
        "root": "cancer",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 31.4,
        "state": "THIN",
        "reason": "cancer: 3 launches < 5 required"
      },
      {
        "root": "cure",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 31.4,
        "state": "THIN",
        "reason": "cure: 3 launches < 5 required"
      },
      {
        "root": "popvax",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 31.4,
        "state": "THIN",
        "reason": "popvax: 3 launches < 5 required"
      },
      {
        "root": "teak",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 31.4,
        "state": "THIN",
        "reason": "teak: 3 launches < 5 required"
      },
      {
        "root": "teaktree",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 31.4,
        "state": "THIN",
        "reason": "teaktree: 3 launches < 5 required"
      },
      {
        "root": "yes",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0007,
        "multiple": 17.9,
        "state": "THIN",
        "reason": "yes: 3 launches < 5 required"
      },
      {
        "root": "no",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.002,
        "multiple": 6.3,
        "state": "THIN",
        "reason": "no: 3 launches < 5 required"
      },
      {
        "root": "variable",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0024,
        "multiple": 5.2,
        "state": "BELOW",
        "reason": "variable: 5.2x over baseline < 6.0x required"
      },
      {
        "root": "brownfi",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0025,
        "multiple": 5,
        "state": "BELOW",
        "reason": "brownfi: 5.0x over baseline < 6.0x required"
      },
      {
        "root": "bf",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0027,
        "multiple": 4.6,
        "state": "BELOW",
        "reason": "bf: 4.6x over baseline < 6.0x required"
      },
      {
        "root": "fund",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0029,
        "multiple": 4.3,
        "state": "BELOW",
        "reason": "fund: 4.3x over baseline < 6.0x required"
      },
      {
        "root": "alandale",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0032,
        "multiple": 3.9,
        "state": "BELOW",
        "reason": "alandale: 3.9x over baseline < 6.0x required"
      },
      {
        "root": "rh",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0036,
        "multiple": 3.5,
        "state": "BELOW",
        "reason": "rh: 3.5x over baseline < 6.0x required"
      },
      {
        "root": "position",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0054,
        "multiple": 2.3,
        "state": "BELOW",
        "reason": "position: 2.3x over baseline < 6.0x required"
      },
      {
        "root": "amm",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0062,
        "multiple": 2,
        "state": "BELOW",
        "reason": "amm: 2.0x over baseline < 6.0x required"
      },
      {
        "root": "weth",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0073,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "weth: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "volatile",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0083,
        "multiple": 1.5,
        "state": "BELOW",
        "reason": "volatile: 1.5x over baseline < 6.0x required"
      },
      {
        "root": "above",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "above: 2 launches < 5 required"
      },
      {
        "root": "aib",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "aib: 2 launches < 5 required"
      },
      {
        "root": "amd",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "amd: 2 launches < 5 required"
      },
      {
        "root": "ampflowsai",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "ampflowsai: 2 launches < 5 required"
      },
      {
        "root": "back",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "back: 2 launches < 5 required"
      },
      {
        "root": "donuts",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "donuts: 2 launches < 5 required"
      },
      {
        "root": "eggs",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "eggs: 2 launches < 5 required"
      },
      {
        "root": "fherum",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "fherum: 2 launches < 5 required"
      },
      {
        "root": "heesh",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "heesh: 2 launches < 5 required"
      },
      {
        "root": "longbow",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "longbow: 2 launches < 5 required"
      },
      {
        "root": "sleev",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "sleev: 2 launches < 5 required"
      },
      {
        "root": "sleeved",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 20.9,
        "state": "THIN",
        "reason": "sleeved: 2 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x3b7a8deb3f7c4848e6d54965f9b7bd4e67b868db",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xb3bed59a3c7c6f08a71898711fad695a88995678",
        "block": 112249834,
        "ts": "2026-11-12T04:18:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xeea87eb140f6912de674772e5674d7b973e5c37c",
        "name": "Over The Ring",
        "symbol": "OTR",
        "deployer": "0x4337002c5702ce424cb62a56ca038e31e1d4a93d",
        "block": 112249775,
        "ts": "2026-11-12T04:18:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfe55bd91aeb902bce84a2d57ce058159bc7c1d56",
        "name": "X Coin",
        "symbol": "X",
        "deployer": "0x9de95e51ed24f990762d754ef7833e9a13f5177d",
        "block": 112249360,
        "ts": "2026-11-12T04:17:43.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xfaa77bd3a579e532049bc23f2befbc50cea590a6",
        "name": "Synthra V3 Positions NFT-V1",
        "symbol": "SYNTH-V3-POS",
        "deployer": "0x6fc7a6487226fe84bcdd6c9c3b0293dd45ac36f2",
        "block": 112249243,
        "ts": "2026-11-12T04:17:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa30fa36db767ad9ed3f7a60fc79526fb4d56d344",
        "name": "United States Oil Fund • Robinhood Token",
        "symbol": "USO",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 112249156,
        "ts": "2026-11-12T04:17:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x76179ee14b902a16965a8b102a028589b2786c02",
        "name": "HumpDayCamel",
        "symbol": "HDC",
        "deployer": "0x4337004ec9c1417f1c7a26ebd4b4fbed6acf9e5d",
        "block": 112248935,
        "ts": "2026-11-12T04:16:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0e0c7f84fd1ceac81a7a5e5a21f81e7bcf9320d8",
        "name": "30-Day Onchain Challenge",
        "symbol": "30DAY",
        "deployer": "0x17b5b91bf6c36ddbcf88fef5ba6312c322b6af03",
        "block": 112248917,
        "ts": "2026-11-12T04:16:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x12daa8826f4751d4794292167c7c10236edada63",
        "name": "FullRange-HEESH-USDG-100000-0",
        "symbol": "FullRange-HEESH-USDG-100000-0",
        "deployer": "0xfa322cfea4ede2a06e527f54f8273d36831a40de",
        "block": 112248831,
        "ts": "2026-11-12T04:16:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0cf333f0c8aeb8de92cc305f29d126ac95862d69",
        "name": "DARN",
        "symbol": "DARN",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 112248535,
        "ts": "2026-11-12T04:16:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe0ad9abea2473e0b766d316d332772ebd70fffa7",
        "name": "AI-Mafia-FUND",
        "symbol": "AIFUND",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 112248509,
        "ts": "2026-11-12T04:16:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x19e2b52fc1607786d0645e4ef21a2bd45ad71943",
        "name": "WEN_VLAD?",
        "symbol": "WEN",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 112248470,
        "ts": "2026-11-12T04:16:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x02bec3ebb93ed971309f3382079840191f68743a",
        "name": "Quantum",
        "symbol": "QUANTUM",
        "deployer": "0x734c6d8ad360dee39a72f63641da9574e1421396",
        "block": 112248427,
        "ts": "2026-11-12T04:16:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc6c566a47c1700cfb47ce3fbb708aea71f0ed891",
        "name": "just getting started",
        "symbol": "JGS",
        "deployer": "0x4337003fcd2f56de3977ccb806383e9161628d0e",
        "block": 112248190,
        "ts": "2026-11-12T04:15:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5c689324312fc8ef13b491e32774b4424aaf4e79",
        "name": "test",
        "symbol": "TEST",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 112248138,
        "ts": "2026-11-12T04:15:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x06420168ed7e368dd8dcb30c79cdd0d8f4ccb3e6",
        "name": "Paper",
        "symbol": "PAPER",
        "deployer": "0x1afb13de99de869fe3efa7115f598eccba3cb555",
        "block": 112247633,
        "ts": "2026-11-12T04:14:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x40cc9b4a5d2e16e4f06913281c2e42d21426367b",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x50b6a106e6d3577251432559b89674ebac820ad7",
        "block": 112247558,
        "ts": "2026-11-12T04:14:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb9299a552fbc2ffd0167269bf16166e40d978ac0",
        "name": "Hims Zhaopeng",
        "symbol": "HIZ",
        "deployer": "0x4337005db25dbad41da5692ba1188751ee5d98b6",
        "block": 112247552,
        "ts": "2026-11-12T04:14:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9deab6d5450205b48ee2caba352ce26132b14ba1",
        "name": "Wrapped United States Oil Fund • Robinhood Token",
        "symbol": "wUSO",
        "deployer": "0xcd6d31bd8fb8e4100b9cb916cd9a92d884f58355",
        "block": 112247510,
        "ts": "2026-11-12T04:14:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc57df0bfd6226dc5b6b1b8ff03e925d37baade5b",
        "name": "Wrapped Palantir Technologies • Robinhood Token",
        "symbol": "wPLTR",
        "deployer": "0x4a438c7c4052209b71cc403f28b9976300bffbbe",
        "block": 112247506,
        "ts": "2026-11-12T04:14:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xccb7883f33ed8bd828a5439c2ae8b6ea0df807ea",
        "name": "Cyfrin Audit",
        "symbol": "CYFRIN",
        "deployer": "0xc091cc903828866e4d0087621d92f619107afce2",
        "block": 112247481,
        "ts": "2026-11-12T04:14:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1f4b47a85bad825540f216f985f63e6b141b4c55",
        "name": "Max coin",
        "symbol": "Max",
        "deployer": "0x09f4d3208a189f536cd350ca372f1ab5ea9dfae6",
        "block": 112247348,
        "ts": "2026-11-12T04:14:01.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xcf24802249a88319a8275db33e7093fe51a0a95b",
        "name": "Hoodie",
        "symbol": "HOODIE",
        "deployer": "0x4337004ec9c1417f1c7a26ebd4b4fbed6acf9e5d",
        "block": 112247105,
        "ts": "2026-11-12T04:13:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x611a025be921dad9f69962c36c2a0d3761ede7e0",
        "name": "BASEBULL",
        "symbol": "BBULL",
        "deployer": "0x4337002c5702ce424cb62a56ca038e31e1d4a93d",
        "block": 112246994,
        "ts": "2026-11-12T04:13:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd2175fe5e09e52bf620ef184522255579b4eaa4b",
        "name": "Kaching",
        "symbol": "KACHING",
        "deployer": "0xac786b560ee8f38ac972506dff56cdeff73f854e",
        "block": 112246709,
        "ts": "2026-11-12T04:12:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x771932c3cf9e5acfa037a8baf56e93efdc7d5fd4",
        "name": "Andy NVIDIA",
        "symbol": "ANDY",
        "deployer": "0x6a554bf690cc46eea3d5c24c10f69f04eda2c72f",
        "block": 112246611,
        "ts": "2026-11-12T04:12:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9d2ecdeabe37db6b7f3abdaf5ad2a87525f70965",
        "name": "The Final Coin",
        "symbol": "TFC",
        "deployer": "0x4337004ec9c1417f1c7a26ebd4b4fbed6acf9e5d",
        "block": 112246437,
        "ts": "2026-11-12T04:12:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2115ab67144103e887e854d3b26ec981f5c501d5",
        "name": "A Meme Dog",
        "symbol": "AMD",
        "deployer": "0x50b6a106e6d3577251432559b89674ebac820ad7",
        "block": 112246249,
        "ts": "2026-11-12T04:12:01.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x0a824b8869d5a033788c3815da9a6f25886811cf",
        "name": "ampflowsai",
        "symbol": "AMPFLOWSAI",
        "deployer": "0xea209a4a5de9a8449a666c5f9fa43be7181600a9",
        "block": 112245704,
        "ts": "2026-11-12T04:11:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb359641d39600a47d4359ca1cfff5e8aaf39e9d2",
        "name": "X Coin",
        "symbol": "X",
        "deployer": "0xc68e5d91f4cc766fd48925f1d791d373ec94c232",
        "block": 112245622,
        "ts": "2026-11-12T04:10:54.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x3de32871e291dbb11ff99202680310011322ceee",
        "name": "PLOG",
        "symbol": "PLOG",
        "deployer": "0xd68ba6de19913bdd1bb529e5dd72f0d53c5c5a27",
        "block": 112245595,
        "ts": "2026-11-12T04:10:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x87086329b677c94df4da5dfe9a8da90c73c535bf",
        "name": "Volatile AMM - UP/USDG",
        "symbol": "vAMM-UP/USDG",
        "deployer": "0xc4611bc4fc5ef5d4f3a856e540d64179d306ada7",
        "block": 112245299,
        "ts": "2026-11-12T04:10:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5fc5360d0400a0fd4f2af552add042d716f1d168",
        "name": "Global Dollar",
        "symbol": "USDG",
        "deployer": "0x7ddb0773e979cd36ef0dc8b6e594a6ebc876e654",
        "block": 112245029,
        "ts": "2026-11-12T04:09:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x715dead3a80f8461d29aa6f9f7b39554c1294075",
        "name": "Chop OAK",
        "symbol": "chOAK",
        "deployer": "0x2d2a8a51ccb15c280a457f3e77e4b760fbf3d5e0",
        "block": 112244647,
        "ts": "2026-11-12T04:09:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0e8f66650a23465340b0d97f2ae671eed46a1846",
        "name": "Agentic Pad 8",
        "symbol": "PAD",
        "deployer": "0xac34e8f9ccb8b63b8d04c189f87b33ad1b2d8a91",
        "block": 112244627,
        "ts": "2026-11-12T04:09:06.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x66e6dc9ca1e1cb8a7cf472fa09b00be216f9e188",
        "name": "FHERUM",
        "symbol": "FHERUM",
        "deployer": "0x11f8c27118b7f653ec9e3a88225d6ded718e21f5",
        "block": 112244045,
        "ts": "2026-11-12T04:08:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7ea7aeb598caf98fd741fd6731a3ddda3b4e9a29",
        "name": "X Coin",
        "symbol": "X",
        "deployer": "0x4c8c7694fe68d51fcd2009169ebab9776fa2d053",
        "block": 112243564,
        "ts": "2026-11-12T04:07:15.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x0646be4a26dda7ac171301a045a85eb37649062b",
        "name": "PLOG",
        "symbol": "PLOG",
        "deployer": "0xcc65f0a0af34ff83091ba3ab649ae2160f3a1856",
        "block": 112243501,
        "ts": "2026-11-12T04:07:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4b34cdcbc9c153ad78817a4b19580f9a9274836b",
        "name": "Cryptex",
        "symbol": "CTX",
        "deployer": "0x96111cc4867c5e1c22da4b79bb8852b9e2a07eb1",
        "block": 112243413,
        "ts": "2026-11-12T04:06:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x91d5d2c999c35ce061fd4967e6764cdd9cf1b3e1",
        "name": "Ixs Token",
        "symbol": "IXS",
        "deployer": "0x96111cc4867c5e1c22da4b79bb8852b9e2a07eb1",
        "block": 112243411,
        "ts": "2026-11-12T04:06:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6d255bcdb09073b2ab6b7e4f964dcfb943b3d18f",
        "name": "cat wif hat",
        "symbol": "WIF",
        "deployer": "0x90e21f6f6552779e22839b386710018a6e59cbcb",
        "block": 112242710,
        "ts": "2026-11-12T04:05:43.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
