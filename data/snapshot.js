/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-31T20:41:11.000Z",
    "opened_at": "2026-10-31T19:41:11.000Z",
    "window_hours": 1,
    "head_block": 102838118,
    "start_block": 102803302,
    "blocks_scanned": 34816,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 305,
    "unnamed_contracts": 4,
    "via_factory": 285,
    "no_receipt": 0,
    "candidates": 309,
    "mint_events": 18978,
    "deployers": 227,
    "roots": 419,
    "cleared_multiple": 419,
    "failed_gates": 410,
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
      "black-dodo-swan",
      "cat",
      "nft",
      "positions",
      "uniswap-uni",
      "usdg"
    ],
    "top": {
      "root": "nft",
      "launches": 9,
      "deployers": 9,
      "baseline_share": 0.0004,
      "multiple": 73.8,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "nft",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 73.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 65.6,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "cat",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 49.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 49.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 26,
        "deployers": 22,
        "baseline_share": 0.0004,
        "multiple": 213.1,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 88%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 23,
        "deployers": 19,
        "baseline_share": 0.0004,
        "multiple": 188.5,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 88%, merged to uniswap-uni"
      },
      {
        "root": "black",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 65.6,
        "state": "MERGED",
        "reason": "black + dodo co-occur 100%, merged to black-dodo-swan"
      },
      {
        "root": "dodo",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 65.6,
        "state": "MERGED",
        "reason": "black + dodo co-occur 100%, merged to black-dodo-swan"
      },
      {
        "root": "swan",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 65.6,
        "state": "MERGED",
        "reason": "black + dodo co-occur 100%, merged to black-dodo-swan"
      },
      {
        "root": "lumi",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 41,
        "state": "THIN",
        "reason": "lumi: 5 deployers < 6 required"
      },
      {
        "root": "sharpe",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 41,
        "state": "THIN",
        "reason": "sharpe: 5 deployers < 6 required"
      },
      {
        "root": "shrp",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 41,
        "state": "THIN",
        "reason": "shrp: 5 deployers < 6 required"
      },
      {
        "root": "aka",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 32.8,
        "state": "THIN",
        "reason": "aka: 4 launches < 5 required"
      },
      {
        "root": "chop",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 32.8,
        "state": "THIN",
        "reason": "chop: 4 launches < 5 required"
      },
      {
        "root": "memko",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 32.8,
        "state": "THIN",
        "reason": "memko: 4 launches < 5 required"
      },
      {
        "root": "staked",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 32.8,
        "state": "THIN",
        "reason": "staked: 4 launches < 5 required"
      },
      {
        "root": "volatile",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 32.8,
        "state": "THIN",
        "reason": "volatile: 4 launches < 5 required"
      },
      {
        "root": "amm",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 24.6,
        "state": "THIN",
        "reason": "amm: 3 launches < 5 required"
      },
      {
        "root": "anakin",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.6,
        "state": "THIN",
        "reason": "anakin: 3 launches < 5 required"
      },
      {
        "root": "doge",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.6,
        "state": "THIN",
        "reason": "doge: 3 launches < 5 required"
      },
      {
        "root": "fund",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.6,
        "state": "THIN",
        "reason": "fund: 3 launches < 5 required"
      },
      {
        "root": "hell",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.6,
        "state": "THIN",
        "reason": "hell: 3 launches < 5 required"
      },
      {
        "root": "helloween",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.6,
        "state": "THIN",
        "reason": "helloween: 3 launches < 5 required"
      },
      {
        "root": "king",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.6,
        "state": "THIN",
        "reason": "king: 3 launches < 5 required"
      },
      {
        "root": "oil",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 24.6,
        "state": "THIN",
        "reason": "oil: 3 launches < 5 required"
      },
      {
        "root": "position",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.6,
        "state": "THIN",
        "reason": "position: 3 launches < 5 required"
      },
      {
        "root": "skywalker",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.6,
        "state": "THIN",
        "reason": "skywalker: 3 launches < 5 required"
      },
      {
        "root": "sloth",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.6,
        "state": "THIN",
        "reason": "sloth: 3 launches < 5 required"
      },
      {
        "root": "slothking",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.6,
        "state": "THIN",
        "reason": "slothking: 3 launches < 5 required"
      },
      {
        "root": "super",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.6,
        "state": "THIN",
        "reason": "super: 3 launches < 5 required"
      },
      {
        "root": "tf",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.6,
        "state": "THIN",
        "reason": "tf: 3 launches < 5 required"
      },
      {
        "root": "trust",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.6,
        "state": "THIN",
        "reason": "trust: 3 launches < 5 required"
      },
      {
        "root": "volition",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.6,
        "state": "THIN",
        "reason": "volition: 3 launches < 5 required"
      },
      {
        "root": "weth",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.6,
        "state": "THIN",
        "reason": "weth: 3 launches < 5 required"
      },
      {
        "root": "world",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 24.6,
        "state": "THIN",
        "reason": "world: 3 launches < 5 required"
      },
      {
        "root": "aero",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 16.4,
        "state": "THIN",
        "reason": "aero: 2 launches < 5 required"
      },
      {
        "root": "agent",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.4,
        "state": "THIN",
        "reason": "agent: 2 launches < 5 required"
      },
      {
        "root": "agents",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.4,
        "state": "THIN",
        "reason": "agents: 2 launches < 5 required"
      },
      {
        "root": "ak",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.4,
        "state": "THIN",
        "reason": "ak: 2 launches < 5 required"
      },
      {
        "root": "american",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 16.4,
        "state": "THIN",
        "reason": "american: 2 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x76a816efa69e3183972ff7a231f5c8d7b065d9de",
        "name": "InfinityName",
        "symbol": "INAME",
        "deployer": "0xbd756010b81d0e5c52190e9af7724d3a09e55b28",
        "block": 102837972,
        "ts": "2026-10-31T20:40:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6d6500a717aa01ee098be9d3eb036f6da9aa7777",
        "name": "Everyone Hates Elon",
        "symbol": "EHE",
        "deployer": "0xe26a8a93a803f6dcc9355da3beac69d733ddfd5d",
        "block": 102837963,
        "ts": "2026-10-31T20:40:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8cc0e7b60f4dce9d9810693169d7ce76d4247667",
        "name": "Flock Lend Borrowable",
        "symbol": "bFLOCK",
        "deployer": "0x097ba31b7acffd75b909fc7bef2e55424d2dacdc",
        "block": 102837495,
        "ts": "2026-10-31T20:40:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x193078f042d7c8898c3ddf481b9e26fae3e9b02e",
        "name": "Flock Lend Borrowable",
        "symbol": "bFLOCK",
        "deployer": "0x097ba31b7acffd75b909fc7bef2e55424d2dacdc",
        "block": 102837495,
        "ts": "2026-10-31T20:40:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfe65e81336ff935eff9ed099001a99e6fd8dd6ea",
        "name": "CZ Coin",
        "symbol": "CZ",
        "deployer": "0x4e2bd87ec828601cedaee948d61f64c0a2673b84",
        "block": 102837430,
        "ts": "2026-10-31T20:40:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x76e772fa9e5e1809a11940c414987fabd2b4c96e",
        "name": "Собака",
        "symbol": "Собак",
        "deployer": "0x8078f6ad4d54d686d1adc7ed993a50fb770c842c",
        "block": 102837362,
        "ts": "2026-10-31T20:39:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6c80338ca6b6c78125f5afa009410f4cf6125688",
        "name": "Sharpe",
        "symbol": "SHRP",
        "deployer": "0x466576a457e5b32b93c593447d119bb17a34b6bb",
        "block": 102837292,
        "ts": "2026-10-31T20:39:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6a825e34e71a9199c1370020dc5fcd9e60737777",
        "name": "FuturePulse Software Technologies",
        "symbol": "FUTURE",
        "deployer": "0x4f6d40378da3874cb49b6834b4c20ada43842691",
        "block": 102837290,
        "ts": "2026-10-31T20:39:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb704bb839143f51b671304fea0506f929aecfbeb",
        "name": "FuturePulse Software Technologies",
        "symbol": "FUTURE",
        "deployer": "0xfe7ff887ecbddfdafe72075dc3dec88b213c91a5",
        "block": 102837194,
        "ts": "2026-10-31T20:39:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0526747d4f79d7f907ca74c75ab7a26c9e90c31a",
        "name": "Tendies",
        "symbol": "TENDIES",
        "deployer": "0xea209a4a5de9a8449a666c5f9fa43be7181600a9",
        "block": 102837040,
        "ts": "2026-10-31T20:39:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb4841e2463794c9d28250ae75948789d511fdd70",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x5f6d67e6ae10569303e89effe1066c474089a8bf",
        "block": 102836843,
        "ts": "2026-10-31T20:39:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2a47fb4687648cfd44fe18d7c1159f73f7970087",
        "name": "QBIT",
        "symbol": "QBIT",
        "deployer": "0x378447d1bc980ff876557e4debebc99a050b73d9",
        "block": 102836481,
        "ts": "2026-10-31T20:38:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6f6b11619cb094ca9f4a9cdd5480be4e87e59c7e",
        "name": "Tokyo Futuro Operatives",
        "symbol": "TFOPS",
        "deployer": "0xb4fce8b1e4a1879457c302e08e180ace209f8267",
        "block": 102836411,
        "ts": "2026-10-31T20:38:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf4c3ca88c0c476987e02ef746e9b78c9df03f00d",
        "name": "The Black Swan",
        "symbol": "DODO",
        "deployer": "0x1c205430f3dd916d7d36a3355342f869f3c96fc6",
        "block": 102836379,
        "ts": "2026-10-31T20:38:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x594e7ba2fe5ff1a9152fb5d40c690645ef80185c",
        "name": "Собака",
        "symbol": "Собак",
        "deployer": "0xd64130dddb69770747bbd731dd0f456c50b570b7",
        "block": 102836370,
        "ts": "2026-10-31T20:38:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6950c268c63fa53b1a20688ae6c3a0d65f409c22",
        "name": "Sharpe",
        "symbol": "SHRP",
        "deployer": "0x8be7ba6761402e74c1d81452b160453e05ef7eed",
        "block": 102836341,
        "ts": "2026-10-31T20:38:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x87d2811e407064fb50a7ef66db32964a729cd56e",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xef0b6156a4dd435a762746df358eef8a052043cd",
        "block": 102835986,
        "ts": "2026-10-31T20:37:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9f9ea1e4717afc380525a5bcaa2528b1d3026f38",
        "name": "GTA6CAT",
        "symbol": "GATO",
        "deployer": "0xef0b6156a4dd435a762746df358eef8a052043cd",
        "block": 102835681,
        "ts": "2026-10-31T20:36:56.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x581ca803a43420b114780882fba521761b6ef287",
        "name": "Predictor-c4dc13bb",
        "symbol": "PRD-c4dc13bb",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 102835191,
        "ts": "2026-10-31T20:36:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfdb50f41bd7a1b1e3afb146adcf8dfa3313d195c",
        "name": "Counterparty-c4dc13bb",
        "symbol": "CTR-c4dc13bb",
        "deployer": "0xc2b5a393d40a43b727664dfb7cbd5cdc8ed58c48",
        "block": 102835191,
        "ts": "2026-10-31T20:36:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x74393bd69d8d227d009062717b2ff1d9fa544ae8",
        "name": "Actuate QA",
        "symbol": "ACT",
        "deployer": "0x45f9db8c319f51e296eb814a3dc1a3eb9035c96c",
        "block": 102835181,
        "ts": "2026-10-31T20:36:04.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x574bfe399a6164c3e5f67cb5ee97f2b0c92bff29",
        "name": "Insula World",
        "symbol": "INSULA",
        "deployer": "0xed8421ae37365a394b0556550d0568bcd46e2e2c",
        "block": 102835177,
        "ts": "2026-10-31T20:36:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x60f4b392bc052660a68fc6347be2a7d9ba82d817",
        "name": "😺 cat",
        "symbol": "C",
        "deployer": "0xb5743a1cf2380234f28487349a93b39e03914156",
        "block": 102835154,
        "ts": "2026-10-31T20:36:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcb1172b34306cae952fa806a4930b8f05ea436ea",
        "name": "PVE",
        "symbol": "PVE",
        "deployer": "0x4e2bd87ec828601cedaee948d61f64c0a2673b84",
        "block": 102835139,
        "ts": "2026-10-31T20:36:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc40c332c9f0ebbd999b9926738e3c32994067664",
        "name": "Hyper Inu",
        "symbol": "HI",
        "deployer": "0x0e5bbfd6094c41ee08910b560eb053b2cb888247",
        "block": 102834451,
        "ts": "2026-10-31T20:34:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x40e6ea97be8332088f299a0ae4b1a45998ae1e18",
        "name": "SLOTH KING",
        "symbol": "SLOTHKING",
        "deployer": "0x276dc48f05ac93ae92f7f7f92c47ab5644f35ad0",
        "block": 102834441,
        "ts": "2026-10-31T20:34:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8f14d474651304e75f3f33c7befb8e5f85a97777",
        "name": "SLOTH KING",
        "symbol": "SLOTHKING",
        "deployer": "0xea5c98a6164850f6ace669bd753de6928881b65e",
        "block": 102834438,
        "ts": "2026-10-31T20:34:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x213bbb0c90b7ff4e83923567b1975c2384571111",
        "name": "Field Atlas",
        "symbol": "ATLAS",
        "deployer": "0x7495ee7066d0fbfed839bc8fa34c6a8629f7d402",
        "block": 102834426,
        "ts": "2026-10-31T20:34:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1cbf353c46821f37467231fd94077d1ef581e912",
        "name": "SLOTH KING",
        "symbol": "SLOTHKING",
        "deployer": "0xcaabdcac06c0056a82d005d60c35eb388692070f",
        "block": 102834359,
        "ts": "2026-10-31T20:34:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x98a44c183aaaffbb83bf080243f87131673b058b",
        "name": "Wraith Burn",
        "symbol": "WRAITH",
        "deployer": "0x0067248489d2ba7601d1865d7d63b91bd93de5c5",
        "block": 102834306,
        "ts": "2026-10-31T20:34:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf3ad4ad194ee7f2189ae29d9c3fbd7de7ddf00b2",
        "name": "Flywheel Guy",
        "symbol": "FLG",
        "deployer": "0xa7c2f54ee797848f16b809ee0649e18c1dbf2adb",
        "block": 102834244,
        "ts": "2026-10-31T20:34:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4bbae1ee28b561b29b403afedb65b851eb6e4976",
        "name": "Landlord",
        "symbol": "LORD",
        "deployer": "0xea209a4a5de9a8449a666c5f9fa43be7181600a9",
        "block": 102834217,
        "ts": "2026-10-31T20:34:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x86682b76ef285b6f4c45b0f824443fd72fe37abd",
        "name": "Vigil",
        "symbol": "VIGIL",
        "deployer": "0x395ca81ff377ecd63ed594fb1c6b8bc719cbad69",
        "block": 102834077,
        "ts": "2026-10-31T20:34:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x77f0391938dd59622d045b102e40f188ae2a96ba",
        "name": "Make Memes Great Again",
        "symbol": "MMGA",
        "deployer": "0x44a1fcdc2ced4a6dd165d036b0a8ff2931c2cb49",
        "block": 102833824,
        "ts": "2026-10-31T20:33:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x17cab119e29a0357907c8cd2241387fa9411b2f9",
        "name": "1 Ruble Can Change Your Life",
        "symbol": "RUBLE",
        "deployer": "0xd515678ac0f8c082886592eee019afe16e4f90c6",
        "block": 102833308,
        "ts": "2026-10-31T20:32:52.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x6e8d475b30ca1da878829322b3d0995b85443a4f",
        "name": "Helloween",
        "symbol": "HELL",
        "deployer": "0xc88091a1abaa56261ab1e37b58115dafc14d7c16",
        "block": 102833285,
        "ts": "2026-10-31T20:32:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x587d2fdddf14f6f84022b51e8c3a473eb88c4544",
        "name": "Fee Beneficiary",
        "symbol": "FEEB",
        "deployer": "0xc88091a1abaa56261ab1e37b58115dafc14d7c16",
        "block": 102833285,
        "ts": "2026-10-31T20:32:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2e1e969af9ca1f5b90b9d515a140098f17ac7777",
        "name": "Get Blessed Dot Fun",
        "symbol": "BLESSED",
        "deployer": "0x21853863aeec000ebfa52e46b366fdf2ac02ca6b",
        "block": 102833233,
        "ts": "2026-10-31T20:32:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1448ed0a6ebd355a0220dd922e11c26b29a2f5ab",
        "name": "Get Blessed Dot Fun",
        "symbol": "BLESSED",
        "deployer": "0xe492187ce0f7fcd2f24d428219fa743c9ade0e03",
        "block": 102833136,
        "ts": "2026-10-31T20:32:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcefc9156fee95a46f6611000f233e0baa83a86ea",
        "name": "Wojak",
        "symbol": "WOJAK",
        "deployer": "0xfd2fcbcdb56f0208d5bf780b9b51e7e84a90ad60",
        "block": 102833092,
        "ts": "2026-10-31T20:32:31.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
