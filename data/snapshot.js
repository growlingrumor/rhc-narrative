/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-09T13:19:03.000Z",
    "opened_at": "2026-10-09T12:19:03.000Z",
    "window_hours": 1,
    "head_block": 84186316,
    "start_block": 84151022,
    "blocks_scanned": 35294,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 541,
    "unnamed_contracts": 40,
    "via_factory": 525,
    "no_receipt": 47,
    "candidates": 628,
    "mint_events": 38641,
    "deployers": 360,
    "roots": 556,
    "cleared_multiple": 154,
    "failed_gates": 138,
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
      "ai-artificial",
      "arena",
      "cat",
      "cl-nker",
      "dog",
      "glad-gladiators",
      "mammoth-yana",
      "nft",
      "notrandom",
      "robinhood",
      "uni",
      "uniswap"
    ],
    "top": {
      "root": "uniswap",
      "launches": 26,
      "deployers": 18,
      "baseline_share": 0.0004,
      "multiple": 120.1,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "uniswap",
        "launches": 26,
        "deployers": 18,
        "baseline_share": 0.0004,
        "multiple": 120.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uni",
        "launches": 20,
        "deployers": 17,
        "baseline_share": 0.0004,
        "multiple": 92.4,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "robinhood",
        "launches": 13,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 60.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "notrandom",
        "launches": 7,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 32.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "arena",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 27.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "cat",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 27.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "dog",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 27.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nft",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 27.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "cl",
        "launches": 19,
        "deployers": 19,
        "baseline_share": 0.0004,
        "multiple": 87.8,
        "state": "MERGED",
        "reason": "cl + nker co-occur 100%, merged to cl-nker"
      },
      {
        "root": "nker",
        "launches": 19,
        "deployers": 19,
        "baseline_share": 0.0004,
        "multiple": 87.8,
        "state": "MERGED",
        "reason": "cl + nker co-occur 100%, merged to cl-nker"
      },
      {
        "root": "ai",
        "launches": 14,
        "deployers": 14,
        "baseline_share": 0.0004,
        "multiple": 64.7,
        "state": "MERGED",
        "reason": "ai + artificial co-occur 64%, merged to ai-artificial"
      },
      {
        "root": "artificial",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 41.6,
        "state": "MERGED",
        "reason": "ai + artificial co-occur 64%, merged to ai-artificial"
      },
      {
        "root": "mammoth",
        "launches": 8,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 37,
        "state": "MERGED",
        "reason": "mammoth + yana co-occur 88%, merged to mammoth-yana"
      },
      {
        "root": "glad",
        "launches": 7,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 32.3,
        "state": "MERGED",
        "reason": "glad + gladiators co-occur 100%, merged to glad-gladiators"
      },
      {
        "root": "gladiators",
        "launches": 7,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 32.3,
        "state": "MERGED",
        "reason": "glad + gladiators co-occur 100%, merged to glad-gladiators"
      },
      {
        "root": "yana",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 32.3,
        "state": "MERGED",
        "reason": "mammoth + yana co-occur 88%, merged to mammoth-yana"
      },
      {
        "root": "cow",
        "launches": 10,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 46.2,
        "state": "THIN",
        "reason": "cow: 2 deployers < 6 required"
      },
      {
        "root": "ramses",
        "launches": 7,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 32.3,
        "state": "THIN",
        "reason": "ramses: 2 deployers < 6 required"
      },
      {
        "root": "volatile",
        "launches": 7,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 32.3,
        "state": "THIN",
        "reason": "volatile: 1 deployers < 6 required"
      },
      {
        "root": "weth",
        "launches": 6,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 27.7,
        "state": "THIN",
        "reason": "weth: 3 deployers < 6 required"
      },
      {
        "root": "agents",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "agents: 5 deployers < 6 required"
      },
      {
        "root": "bear",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "bear: 5 deployers < 6 required"
      },
      {
        "root": "blowjob",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "blowjob: 5 deployers < 6 required"
      },
      {
        "root": "chocolate",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "chocolate: 5 deployers < 6 required"
      },
      {
        "root": "hopscotch",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "hopscotch: 5 deployers < 6 required"
      },
      {
        "root": "ntrndm",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "ntrndm: 4 deployers < 6 required"
      },
      {
        "root": "positions",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "positions: 5 deployers < 6 required"
      },
      {
        "root": "qizai",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "qizai: 5 deployers < 6 required"
      },
      {
        "root": "reward",
        "launches": 5,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "reward: 2 deployers < 6 required"
      },
      {
        "root": "trust",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "trust: 3 deployers < 6 required"
      },
      {
        "root": "ubc",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "ubc: 5 deployers < 6 required"
      },
      {
        "root": "usa",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "usa: 5 deployers < 6 required"
      },
      {
        "root": "alandale",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.5,
        "state": "THIN",
        "reason": "alandale: 4 launches < 5 required"
      },
      {
        "root": "bot",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 18.5,
        "state": "THIN",
        "reason": "bot: 4 launches < 5 required"
      },
      {
        "root": "box",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.5,
        "state": "THIN",
        "reason": "box: 4 launches < 5 required"
      },
      {
        "root": "bread",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 18.5,
        "state": "THIN",
        "reason": "bread: 4 launches < 5 required"
      },
      {
        "root": "club",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 18.5,
        "state": "THIN",
        "reason": "club: 4 launches < 5 required"
      },
      {
        "root": "counterparty",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 18.5,
        "state": "THIN",
        "reason": "counterparty: 4 launches < 5 required"
      },
      {
        "root": "ctr",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 18.5,
        "state": "THIN",
        "reason": "ctr: 4 launches < 5 required"
      },
      {
        "root": "deposit",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 18.5,
        "state": "THIN",
        "reason": "deposit: 4 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x75c919477b9d27f074ac3aa3b15f80ec963ead06",
        "name": "Hero Spiders",
        "symbol": "HORE",
        "deployer": "0xdc6fceee837ae3fabb8348042f120634658c8ae9",
        "block": 84186198,
        "ts": "2026-10-09T13:18:50.964Z",
        "ts_exact": false,
        "direct": false
      },
      {
        "address": "0x7842d5a30dc13130df42bfe7679decc967dd0a4e",
        "name": "Jackprint",
        "symbol": "JACK",
        "deployer": "0xc08f0e73bc38dc8f857800a3baff5341515cf462",
        "block": 84186191,
        "ts": "2026-10-09T13:18:50.250Z",
        "ts_exact": false,
        "direct": true
      },
      {
        "address": "0x77d97ab6ffc0147ac7bf2284ca3a082dd263133e",
        "name": "Ludi Arena",
        "symbol": "LUDI",
        "deployer": "0xa93b094835570e46f3856c329e5e79bdaa58e59d",
        "block": 84185924,
        "ts": "2026-10-09T13:18:23.016Z",
        "ts_exact": false,
        "direct": false
      },
      {
        "address": "0xf7758d642b30070013fe1025bc52c90b629d9922",
        "name": "Order In Chaos",
        "symbol": "OIH",
        "deployer": "0x0c92bb87b4b59dac49414396f38c99475222e364",
        "block": 84185917,
        "ts": "2026-10-09T13:18:22.302Z",
        "ts_exact": false,
        "direct": false
      },
      {
        "address": "0x599a6be66e85339d83f5bcc705237b29cf092d81",
        "name": "Orion",
        "symbol": "ORION",
        "deployer": "0xfcb6091def9d0f9eac927b54cea1e8cbfa21e2aa",
        "block": 84185885,
        "ts": "2026-10-09T13:18:19.038Z",
        "ts_exact": false,
        "direct": false
      },
      {
        "address": "0x46a15b0b27311cedf172ab29e4f4766fbe7f4364",
        "name": "Pancake V3 Positions NFT-V1",
        "symbol": "PCS-V3-POS",
        "deployer": "0xb261bdce20efd6391211b0539e9806faa7789601",
        "block": 84185854,
        "ts": "2026-10-09T13:18:15.876Z",
        "ts_exact": false,
        "direct": false
      },
      {
        "address": "0x14fce619dc27b4e3fe9689224fc13223716ac98a",
        "name": "Catnip",
        "symbol": "NIP",
        "deployer": "0xbbe7e32c00e335334fb5f8998c52cca728115eb8",
        "block": 84185826,
        "ts": "2026-10-09T13:18:13.020Z",
        "ts_exact": false,
        "direct": false
      },
      {
        "address": "0xb871bad2ac50fd739af0710373617f0bb1fd7777",
        "name": "bob",
        "symbol": "bob",
        "deployer": "0x2369ad4cc768e978a28ced8ec9ee2a3cd083fd44",
        "block": 84185820,
        "ts": "2026-10-09T13:18:12.408Z",
        "ts_exact": false,
        "direct": false
      },
      {
        "address": "0xafc2a4cd0dd13b2e65715e42af968bf7111afa71",
        "name": "Popcat",
        "symbol": "",
        "deployer": "0x977520c34b83920a383e4e2b66ef572fb774a8ba",
        "block": 84185767,
        "ts": "2026-10-09T13:18:07.002Z",
        "ts_exact": false,
        "direct": false
      },
      {
        "address": "0x65ead2bf886e533cdfbe9c83bdca263146503daf",
        "name": "notrandom",
        "symbol": "",
        "deployer": "0xa5c6594cd81f7d7906a3c9a6fa17373a3682972a",
        "block": 84185757,
        "ts": "2026-10-09T13:18:05.982Z",
        "ts_exact": false,
        "direct": false
      },
      {
        "address": "0x61dafe5c638a4912e1253a966ec3aa1f287f7f4f",
        "name": "REALM",
        "symbol": "",
        "deployer": "0x77d14f939f51336c9a769bae76a5503fa2910c1d",
        "block": 84185701,
        "ts": "2026-10-09T13:18:00.270Z",
        "ts_exact": false,
        "direct": false
      },
      {
        "address": "0xc8ddaf68e1e099f736e8f537e44a8a1fd7382218",
        "name": "Mr Wick",
        "symbol": "",
        "deployer": "0x0ffc56a5cc6bfbe9f1f1c70a71c4098893bde5a3",
        "block": 84185619,
        "ts": "2026-10-09T13:17:51.906Z",
        "ts_exact": false,
        "direct": false
      },
      {
        "address": "0x3d3bbb7ea22333380b8f2cc8735bf96d809364da",
        "name": "Dude",
        "symbol": "",
        "deployer": "0x27e25a2f8c3438fc7a082862028b5b2f1159b7d0",
        "block": 84185496,
        "ts": "2026-10-09T13:17:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe0070d91bd01e2c994f5bb67c6bc715c6aa9215b",
        "name": "Exit Liquidity Goblin",
        "symbol": "",
        "deployer": "0x0e74e453a8f196faf53edfad5da5772db21f377f",
        "block": 84185484,
        "ts": "2026-10-09T13:17:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x25f6bdcfc960fa1da662e39fcfa98cb98a757777",
        "name": "AgentHook",
        "symbol": "",
        "deployer": "0x980b9bb5b3163638e0a35f8f26ff40547b16e2a9",
        "block": 84185367,
        "ts": "2026-10-09T13:17:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1b8a2948dfb3e82fb1e7bc6a30cdc5705a0483c2",
        "name": "KYLN NFT",
        "symbol": "",
        "deployer": "0x20d55073e31f7afa6000fbe9d04b00bf9af0d3a7",
        "block": 84185343,
        "ts": "2026-10-09T13:17:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x04c154478d5ad851e6083661462b3001c30d6d3e",
        "name": "Flyonardo da Vinci",
        "symbol": "",
        "deployer": "0xe47ddc176a561008c201604ea9c0bf4b2d1fe8a6",
        "block": 84185342,
        "ts": "2026-10-09T13:17:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x29c010620f6720582c310afa8d8115026ec73a7e",
        "name": "veARCIA",
        "symbol": "",
        "deployer": "0x237710aab109c1d0c506dd9ec3276722a8ef196e",
        "block": 84185306,
        "ts": "2026-10-09T13:17:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7ecc0f84096f2f6464d5f1f5189d53008906d9a3",
        "name": "Floor Cap",
        "symbol": "",
        "deployer": "0x2bbea50d3854c943a40515f0f9ffa85785d40ed3",
        "block": 84185296,
        "ts": "2026-10-09T13:17:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xaad58bcdba374481c62fced945117abf00367777",
        "name": "Bob",
        "symbol": "",
        "deployer": "0xe26a8a93a803f6dcc9355da3beac69d733ddfd5d",
        "block": 84185293,
        "ts": "2026-10-09T13:17:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5d61a17d21bf83f4a7a4cf993a4c9b46b2481777",
        "name": "notrandom",
        "symbol": "",
        "deployer": "0xfeaa7f9805e14a99c1bf933ce8fb3023926de970",
        "block": 84185289,
        "ts": "2026-10-09T13:17:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2cdc73ac5d6c881b985d962da86b7a510de7e2ff",
        "name": "SlimePad",
        "symbol": "",
        "deployer": "0x21debf9f7c5e8bf09381a38eecf3347dd492e606",
        "block": 84185220,
        "ts": "2026-10-09T13:17:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x26d2f7acb07707034406a0dc458351bb63c02553",
        "name": "Fee Beneficiary",
        "symbol": "",
        "deployer": "0x21debf9f7c5e8bf09381a38eecf3347dd492e606",
        "block": 84185220,
        "ts": "2026-10-09T13:17:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd5a143469a9bdfc61ca2f6c8d1c76bc9a675194b",
        "name": "notrandom",
        "symbol": "",
        "deployer": "0x6642f26df95a8f6b9f0ab689b067eb6f6d52fc2d",
        "block": 84185144,
        "ts": "2026-10-09T13:17:05.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xf0a927daee0dad6fbde7966a23967aca1a3ad092",
        "name": "Swarm Bee",
        "symbol": "",
        "deployer": "0xcecc29b037f5064fcdf45a5c318f132ef76aa551",
        "block": 84185084,
        "ts": "2026-10-09T13:16:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xeac8b42d3f6288ba5664435188bdb24690ecb865",
        "name": "Triplex",
        "symbol": "",
        "deployer": "0xcd20d89b42f2d6daaaa3f8f0860456678577ebc4",
        "block": 84185078,
        "ts": "2026-10-09T13:16:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x84292178ab6f6d658e02d734433bf0a2d9a01e18",
        "name": "the day after",
        "symbol": "",
        "deployer": "0x6c2059a4045ef4550ae746506b005fa511354cb9",
        "block": 84184987,
        "ts": "2026-10-09T13:16:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb35feb861a276e6e3d2e06bb30728d5714e86d72",
        "name": "COGNITOR",
        "symbol": "",
        "deployer": "0xfcc663bf550f7aa6d83440d5bb465d4d9b01bab6",
        "block": 84184865,
        "ts": "2026-10-09T13:16:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3db9e5d60fad7f0df275e78613e40ce9d63b2d48",
        "name": "Gemerald",
        "symbol": "",
        "deployer": "0x776c2a2a45e791381af582b4ec5dd226a8594b4d",
        "block": 84184822,
        "ts": "2026-10-09T13:16:32.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x7063dfd884ff9350f7263bf7626be8708cb6ffbe",
        "name": "Hoodit",
        "symbol": "",
        "deployer": "0xa0006db00050580a3efbc1c0abdf129097660931",
        "block": 84184808,
        "ts": "2026-10-09T13:16:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6f416d65730078094cef629fc65597e1b99544f2",
        "name": "Grokipedia",
        "symbol": "",
        "deployer": "0x0587d47d149b2a0fbcd570b2cf8f551d26a7a703",
        "block": 84184765,
        "ts": "2026-10-09T13:16:26.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x03ff2ccb1e2227a168e8d066f7d9bf288755fb71",
        "name": "ICE TEA",
        "symbol": "",
        "deployer": "0x06cb3a6841c92525e7a1998328e7c9d37e98d937",
        "block": 84184724,
        "ts": "2026-10-09T13:16:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8457c8ffe25f46890ef3b309e1273e2043bc3775",
        "name": "Bunker Dog",
        "symbol": "",
        "deployer": "0x9641edd6cfb21c4b29a005735f28293e4877715e",
        "block": 84184688,
        "ts": "2026-10-09T13:16:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7640cf8996dcc562165c5b857c2d2522586d7777",
        "name": "Overnight Desk",
        "symbol": "",
        "deployer": "0x4f6d40378da3874cb49b6834b4c20ada43842691",
        "block": 84184680,
        "ts": "2026-10-09T13:16:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9ecf9896db2feaaf5b5e6f9b3781cd9d7f4000b7",
        "name": "pulse AI",
        "symbol": "PULSE",
        "deployer": "0xa93b094835570e46f3856c329e5e79bdaa58e59d",
        "block": 84184659,
        "ts": "2026-10-09T13:16:13.986Z",
        "ts_exact": false,
        "direct": false
      },
      {
        "address": "0x00eccbf137ee425b211c36cfdec3b2e5535d2289",
        "name": "Ramses Volatile - WETH/FRONG",
        "symbol": "Volatile - WETH/FRONG",
        "deployer": "0x19d1021b7fb8871f9b58f2fe7585963c22132b14",
        "block": 84184632,
        "ts": "2026-10-09T13:16:11.232Z",
        "ts_exact": false,
        "direct": false
      },
      {
        "address": "0x46fcfe5d75ce3bc3e5c0a485adeca7f74d890471",
        "name": "Ramses Volatile - r33/RVH",
        "symbol": "Volatile - r33/RVH",
        "deployer": "0x19d1021b7fb8871f9b58f2fe7585963c22132b14",
        "block": 84184632,
        "ts": "2026-10-09T13:16:11.232Z",
        "ts_exact": false,
        "direct": false
      },
      {
        "address": "0x5493e695d9023211eadd38d4d640407e4104d6ba",
        "name": "Ramses Volatile - CHEF/SPRING",
        "symbol": "Volatile - CHEF/SPRING",
        "deployer": "0x19d1021b7fb8871f9b58f2fe7585963c22132b14",
        "block": 84184632,
        "ts": "2026-10-09T13:16:11.232Z",
        "ts_exact": false,
        "direct": false
      },
      {
        "address": "0x5c919acb310764e27b1dd09541f3f63d4de4c701",
        "name": "Ramses Volatile - WETH/USDG",
        "symbol": "Volatile - WETH/USDG",
        "deployer": "0x19d1021b7fb8871f9b58f2fe7585963c22132b14",
        "block": 84184632,
        "ts": "2026-10-09T13:16:11.232Z",
        "ts_exact": false,
        "direct": false
      },
      {
        "address": "0xa61e9c7b9e6df4cc050fe8b0259727cc25224fb8",
        "name": "Ramses Volatile - WETH/RAM",
        "symbol": "Volatile - WETH/RAM",
        "deployer": "0x19d1021b7fb8871f9b58f2fe7585963c22132b14",
        "block": 84184632,
        "ts": "2026-10-09T13:16:11.232Z",
        "ts_exact": false,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
