/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-20T20:40:54.000Z",
    "opened_at": "2026-11-20T19:40:54.000Z",
    "window_hours": 1,
    "head_block": 119341758,
    "start_block": 119305830,
    "blocks_scanned": 35928,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 322,
    "unnamed_contracts": 0,
    "via_factory": 310,
    "no_receipt": 0,
    "candidates": 322,
    "mint_events": 21683,
    "deployers": 203,
    "roots": 466,
    "cleared_multiple": 276,
    "failed_gates": 271,
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
      "bf-brownfi",
      "dcty",
      "retard-patrick"
    ],
    "top": {
      "root": "dcty",
      "launches": 6,
      "deployers": 6,
      "baseline_share": 0.0004,
      "multiple": 46.6,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "dcty",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 46.6,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "retard",
        "launches": 12,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 93.2,
        "state": "MERGED",
        "reason": "retard + patrick co-occur 92%, merged to retard-patrick"
      },
      {
        "root": "patrick",
        "launches": 11,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 85.4,
        "state": "MERGED",
        "reason": "retard + patrick co-occur 92%, merged to retard-patrick"
      },
      {
        "root": "brownfi",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0025,
        "multiple": 7.5,
        "state": "MERGED",
        "reason": "bf + brownfi co-occur 100%, merged to bf-brownfi"
      },
      {
        "root": "bf",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0027,
        "multiple": 6.9,
        "state": "MERGED",
        "reason": "bf + brownfi co-occur 100%, merged to bf-brownfi"
      },
      {
        "root": "robinhood",
        "launches": 38,
        "deployers": 11,
        "baseline_share": 0.0513,
        "multiple": 2.3,
        "state": "BELOW",
        "reason": "robinhood: 2.3x over baseline < 6.0x required"
      },
      {
        "root": "uniswap",
        "launches": 15,
        "deployers": 13,
        "baseline_share": 0.0509,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "uniswap: 0.9x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 13,
        "deployers": 11,
        "baseline_share": 0.0424,
        "multiple": 1,
        "state": "BELOW",
        "reason": "uni: 1.0x over baseline < 6.0x required"
      },
      {
        "root": "usdg",
        "launches": 12,
        "deployers": 12,
        "baseline_share": 0.0203,
        "multiple": 1.8,
        "state": "BELOW",
        "reason": "usdg: 1.8x over baseline < 6.0x required"
      },
      {
        "root": "inc",
        "launches": 7,
        "deployers": 4,
        "baseline_share": 0.0057,
        "multiple": 3.8,
        "state": "BELOW",
        "reason": "inc: 3.8x over baseline < 6.0x required"
      },
      {
        "root": "staked",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0069,
        "multiple": 3.2,
        "state": "BELOW",
        "reason": "staked: 3.2x over baseline < 6.0x required"
      },
      {
        "root": "ai",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0081,
        "multiple": 2.7,
        "state": "BELOW",
        "reason": "ai: 2.7x over baseline < 6.0x required"
      },
      {
        "root": "chop",
        "launches": 6,
        "deployers": 5,
        "baseline_share": 0.0041,
        "multiple": 4.5,
        "state": "BELOW",
        "reason": "chop: 4.5x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0167,
        "multiple": 1.1,
        "state": "BELOW",
        "reason": "positions: 1.1x over baseline < 6.0x required"
      },
      {
        "root": "auctra",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 38.8,
        "state": "THIN",
        "reason": "auctra: 5 deployers < 6 required"
      },
      {
        "root": "dacitycoin",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 38.8,
        "state": "THIN",
        "reason": "dacitycoin: 5 deployers < 6 required"
      },
      {
        "root": "bucket",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0036,
        "multiple": 4.3,
        "state": "BELOW",
        "reason": "bucket: 4.3x over baseline < 6.0x required"
      },
      {
        "root": "layerbank",
        "launches": 5,
        "deployers": 2,
        "baseline_share": 0.0053,
        "multiple": 2.9,
        "state": "BELOW",
        "reason": "layerbank: 2.9x over baseline < 6.0x required"
      },
      {
        "root": "cow",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0072,
        "multiple": 2.2,
        "state": "BELOW",
        "reason": "cow: 2.2x over baseline < 6.0x required"
      },
      {
        "root": "spdr",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0018,
        "multiple": 6.9,
        "state": "THIN",
        "reason": "spdr: 4 launches < 5 required"
      },
      {
        "root": "technologies",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0019,
        "multiple": 6.5,
        "state": "THIN",
        "reason": "technologies: 4 launches < 5 required"
      },
      {
        "root": "nvda",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0024,
        "multiple": 5.2,
        "state": "BELOW",
        "reason": "nvda: 5.2x over baseline < 6.0x required"
      },
      {
        "root": "vault",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0024,
        "multiple": 5.2,
        "state": "BELOW",
        "reason": "vault: 5.2x over baseline < 6.0x required"
      },
      {
        "root": "aero",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0056,
        "multiple": 2.2,
        "state": "BELOW",
        "reason": "aero: 2.2x over baseline < 6.0x required"
      },
      {
        "root": "weth",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0073,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "weth: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "nft",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0201,
        "multiple": 0.6,
        "state": "BELOW",
        "reason": "nft: 0.6x over baseline < 6.0x required"
      },
      {
        "root": "bitmine",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 23.3,
        "state": "THIN",
        "reason": "bitmine: 3 launches < 5 required"
      },
      {
        "root": "else",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 23.3,
        "state": "THIN",
        "reason": "else: 3 launches < 5 required"
      },
      {
        "root": "immersion",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 23.3,
        "state": "THIN",
        "reason": "immersion: 3 launches < 5 required"
      },
      {
        "root": "notf",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 23.3,
        "state": "THIN",
        "reason": "notf: 3 launches < 5 required"
      },
      {
        "root": "onchain",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0008,
        "multiple": 11.6,
        "state": "THIN",
        "reason": "onchain: 3 launches < 5 required"
      },
      {
        "root": "lp",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0009,
        "multiple": 10.4,
        "state": "THIN",
        "reason": "lp: 3 launches < 5 required"
      },
      {
        "root": "street",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0009,
        "multiple": 10.4,
        "state": "THIN",
        "reason": "street: 3 launches < 5 required"
      },
      {
        "root": "meridian",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.001,
        "multiple": 9.3,
        "state": "THIN",
        "reason": "meridian: 3 launches < 5 required"
      },
      {
        "root": "mooncoin",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.001,
        "multiple": 9.3,
        "state": "THIN",
        "reason": "mooncoin: 3 launches < 5 required"
      },
      {
        "root": "class",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0012,
        "multiple": 7.8,
        "state": "THIN",
        "reason": "class: 3 launches < 5 required"
      },
      {
        "root": "galaxy",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0016,
        "multiple": 5.8,
        "state": "BELOW",
        "reason": "galaxy: 5.8x over baseline < 6.0x required"
      },
      {
        "root": "united",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0033,
        "multiple": 2.8,
        "state": "BELOW",
        "reason": "united: 2.8x over baseline < 6.0x required"
      },
      {
        "root": "trust",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0036,
        "multiple": 2.6,
        "state": "BELOW",
        "reason": "trust: 2.6x over baseline < 6.0x required"
      },
      {
        "root": "position",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0054,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "position: 1.7x over baseline < 6.0x required"
      }
    ],
    "recent": [
      {
        "address": "0xd2683d8175073202678638a90e263cd9a68de7a1",
        "name": "Capstan",
        "symbol": "CPST",
        "deployer": "0x14c29af848e6262d8d110bbab5cc39fa11d5acde",
        "block": 119341534,
        "ts": "2026-11-20T20:40:31.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xce5219cb417cddf4388ced8699a7cb8923ec914b",
        "name": "FullRange-WSM-USDG-20000-0",
        "symbol": "FullRange-WSM-USDG-20000-0",
        "deployer": "0xfbce537fa9841034ad1fd5708a4c8b7fe1436b60",
        "block": 119341509,
        "ts": "2026-11-20T20:40:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5063844b21d90c6ba9f48079377bb957e4341e18",
        "name": "Expert Inu",
        "symbol": "EI",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 119341405,
        "ts": "2026-11-20T20:40:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3e2a2edb44b11856e21aaf09b9a15db999a0ccff",
        "name": "Peter Bucket",
        "symbol": "bPeter",
        "deployer": "0x2ccc152ad68419f777531e6a40a52325e2a80ee2",
        "block": 119340738,
        "ts": "2026-11-20T20:39:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x803b4ff6234224b14b89d97b859863d0c528b5a7",
        "name": "DIVIDEND_TRACKER",
        "symbol": "DIVIDEND_TRACKER",
        "deployer": "0xa40e2c6fdf50c88eed85792197895249cab4078e",
        "block": 119340445,
        "ts": "2026-11-20T20:38:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb1fbdd47df3cb88a19022dbbf9e2739fd2077777",
        "name": "RAMENCOIN",
        "symbol": "RAMEN",
        "deployer": "0xbb4e376be340b142b689563286ec9760537be7fb",
        "block": 119340419,
        "ts": "2026-11-20T20:38:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0a1912be34849e750a5b30c7978f313a9bb91e18",
        "name": "OpenLaunch",
        "symbol": "OL",
        "deployer": "0xcec01e57b16c6c873c6dbe83d925683ff3b5ecce",
        "block": 119340288,
        "ts": "2026-11-20T20:38:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1bca59db847d026183e3da0cd7d52ffc8fd15017",
        "name": "Wrapped Clover Health Investments • Robinhood Token",
        "symbol": "wCLOV",
        "deployer": "0x9efc87801ffb0b27766d6c568e3c0d76bd59d605",
        "block": 119340175,
        "ts": "2026-11-20T20:38:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcae58ff285fb996ed8701b3328b33389099fa4f7",
        "name": "Retard Patrick",
        "symbol": "PATRICK",
        "deployer": "0xe5d7a0cd3e20e66092cc9154e61fb45957df9cde",
        "block": 119340093,
        "ts": "2026-11-20T20:38:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd9bdadc4483150df48da0501ec04e5bbbc9e610a",
        "name": "Wrapped Aurora Innovation • Robinhood Token",
        "symbol": "wAUR",
        "deployer": "0xcd6d31bd8fb8e4100b9cb916cd9a92d884f58355",
        "block": 119339703,
        "ts": "2026-11-20T20:37:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4a35a5ec2a50a4d2957b2f2366e017f526cab318",
        "name": "Foundry Compute Dollar",
        "symbol": "USDF",
        "deployer": "0xc1f3547241fe1bc7cb4fb943c67ef5d0263da352",
        "block": 119339678,
        "ts": "2026-11-20T20:37:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe3aa83057989d053c0e37e0e3e609f5ae3edfc60",
        "name": "Royal Bone Dynasty",
        "symbol": "SGSK",
        "deployer": "0xc180e495e329c10850ab9a31a5a4711d4bb59ad4",
        "block": 119339650,
        "ts": "2026-11-20T20:37:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9c7ffa5be841b5d64d91041732239002c61e5663",
        "name": "RobinGold",
        "symbol": "GOLD",
        "deployer": "0x4e7a0a1d8e5e0551764bcbca7b706242670420ec",
        "block": 119339624,
        "ts": "2026-11-20T20:37:20.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x95756396a91058f03516d333e4ce468ea126e92d",
        "name": "Alper KÖKÖz",
        "symbol": "KOKOZ",
        "deployer": "0xc7b88e0d49970607275aa138ce85f5d60b6fa52a",
        "block": 119339499,
        "ts": "2026-11-20T20:37:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe5fe3450b74e1acd09965d13b192714e5a194955",
        "name": "Onchain HoodPunks",
        "symbol": "HOODPUNK",
        "deployer": "0xe22530ed3e38fa08864e0ac463bbc943258131e7",
        "block": 119338965,
        "ts": "2026-11-20T20:36:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9763091a7c0efa4cfd5c3f295f0dc5eca146e215",
        "name": "supercycle (real)",
        "symbol": "SUPER",
        "deployer": "0xd0dcacd0135d463b553bf7ac8c68f32fa178c279",
        "block": 119338135,
        "ts": "2026-11-20T20:34:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6c49f8cc4ccf0f7a1d4fb98a3fdbafaf92a8ac4e",
        "name": "RobinHot",
        "symbol": "HOT",
        "deployer": "0x58beb2da9d3786741051317a974c4aa19abe0d7e",
        "block": 119337767,
        "ts": "2026-11-20T20:34:14.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x193078f042d7c8898c3ddf481b9e26fae3e9b02e",
        "name": "Flock Lend Borrowable",
        "symbol": "bFLOCK",
        "deployer": "0x097ba31b7acffd75b909fc7bef2e55424d2dacdc",
        "block": 119337700,
        "ts": "2026-11-20T20:34:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x25c288e6d899b9bc30160965ad9644c67e73be0c",
        "name": "Ford Motor • Robinhood Token",
        "symbol": "F",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 119337513,
        "ts": "2026-11-20T20:33:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc5ab1f033dbce37d5849ce940ed6bd2034fd750d",
        "name": "The Riemainn Hypothesis",
        "symbol": "RIEMANN",
        "deployer": "0x3433e16efacb71e0e2cd605489514b648b30abd0",
        "block": 119337463,
        "ts": "2026-11-20T20:33:43.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x152f7613f362abf1c05db2ef2d6ef220302bf840",
        "name": "Magnificent 7",
        "symbol": "MAG7",
        "deployer": "0x2b903fdaea648bb3382d58b033420475de99026e",
        "block": 119337101,
        "ts": "2026-11-20T20:33:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x79ab6e9b2cba85a677aceb41bbe42893f3161b1e",
        "name": "gHOOD Short Engine",
        "symbol": "gsHOOD-E",
        "deployer": "0x8f48fff41a76c02210e3a695d31f2b1a9b8139a4",
        "block": 119337077,
        "ts": "2026-11-20T20:33:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7df3ad1ecc10dbf0296d05f91a697e4a059771c2",
        "name": "Wrapped State Street SPDR Portfolio S&P 500 ETF ST0x",
        "symbol": "wtSPYM",
        "deployer": "0xa9c16673f65ae808688cb18952afe3d9658c808f",
        "block": 119336959,
        "ts": "2026-11-20T20:32:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x41febc2deda084229cf20276e98fd5dc29bfc913",
        "name": "Wrapped Carvana • Robinhood Token",
        "symbol": "wCVNA",
        "deployer": "0x4a438c7c4052209b71cc403f28b9976300bffbbe",
        "block": 119336915,
        "ts": "2026-11-20T20:32:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf0c4bf4c582cb3836e98394b1d4e7b7281101be8",
        "name": "Roblox • Robinhood Token",
        "symbol": "RBLX",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 119336849,
        "ts": "2026-11-20T20:32:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x484aaa9e6542774026b24aed4ec3058400ed2439",
        "name": "State Street SPDR Portfolio S&P 500 ETF ST0x",
        "symbol": "tSPYM",
        "deployer": "0x3d0cd66efa66c05d86c3d4316b03eae87ab9e8ae",
        "block": 119336845,
        "ts": "2026-11-20T20:32:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6097c97446606f4d916286f73d381d032cde7757",
        "name": "gHOOD Short",
        "symbol": "gsHOOD",
        "deployer": "0x4f5afc62098c36e6d8d018f26f8f6785bba4dbd3",
        "block": 119336747,
        "ts": "2026-11-20T20:32:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5a01cba196bdb432e9fe43f74106e3ad9ff54d44",
        "name": "Rumble",
        "symbol": "RMBL",
        "deployer": "0xe41a3a3792a73ff2667e2c6cb402718792174547",
        "block": 119336635,
        "ts": "2026-11-20T20:32:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xad25ac6c84d497db898fa1e8387bf6af3532a1c4",
        "name": "Alibaba • Robinhood Token",
        "symbol": "BABA",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 119336039,
        "ts": "2026-11-20T20:31:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x12f190a9f9d7d37a250758b26824b97ce941bf54",
        "name": "Amazon • Robinhood Token",
        "symbol": "AMZN",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 119335980,
        "ts": "2026-11-20T20:31:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf61dd79556c1c81c01e9d6ec5160c4541321a05b",
        "name": "BTD:",
        "symbol": "GAMMA-LP",
        "deployer": "0xe911f518449ba0011d84b047b4cde50daa081ec1",
        "block": 119335943,
        "ts": "2026-11-20T20:31:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x642625846b99d8ca0345e433afc3b3ef5192b3b4",
        "name": "Wrapped CrowdStrike Holdings • Robinhood Token",
        "symbol": "wCRWD",
        "deployer": "0x4a438c7c4052209b71cc403f28b9976300bffbbe",
        "block": 119335690,
        "ts": "2026-11-20T20:30:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x561d8be5b8bd39e9f74de93716b98a311c51fc83",
        "name": "Wrapped Kohls Corporation • Robinhood Token",
        "symbol": "wKSS",
        "deployer": "0x4a438c7c4052209b71cc403f28b9976300bffbbe",
        "block": 119335599,
        "ts": "2026-11-20T20:30:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x67806153cb66606b8c9302037cc94f5865378524",
        "name": "MOCCA",
        "symbol": "MOCCA",
        "deployer": "0x982a3e211da45443188185d7f4b3b28047e632fe",
        "block": 119335501,
        "ts": "2026-11-20T20:30:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb923e9a2a855ef5de357a6b30c33323b6f1d1e18",
        "name": "BUBBLE INU",
        "symbol": "BUINU",
        "deployer": "0x6244d78520cbecf2c8cd709d8a83857062b701b1",
        "block": 119335483,
        "ts": "2026-11-20T20:30:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd68c24a728c6a416b6867bf835e2aa5507669ee2",
        "name": "ZOMO Small Cap",
        "symbol": "ZOMOSC",
        "deployer": "0x2340d4f0179eee65468f954318f252db89aee018",
        "block": 119335393,
        "ts": "2026-11-20T20:30:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4e62068525ab11fe768e29dfd00ef909b9803016",
        "name": "Lululemon • Robinhood Token",
        "symbol": "LULU",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 119335281,
        "ts": "2026-11-20T20:30:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x83c2934ff42756e4ffaf0433c9e246e6888f3ef6",
        "name": "Cow Uniswap Robinhood WETH-COIN",
        "symbol": "cowUniswapRobinhoodWETH-COIN",
        "deployer": "0xa5c80308746ced604284e60ed4cdd4a871b47a23",
        "block": 119334779,
        "ts": "2026-11-20T20:29:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc887326a6015f279fc68b5f6f93a1be5899a5f2e",
        "name": "Reward Cow Uniswap Robinhood WETH-COIN",
        "symbol": "rcowUniswapRobinhoodWETH-COIN",
        "deployer": "0xa5c80308746ced604284e60ed4cdd4a871b47a23",
        "block": 119334779,
        "ts": "2026-11-20T20:29:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4e66babc901a55d23ace035d14aac3dd049e00f0",
        "name": "BADDIE ONCHAIN",
        "symbol": "BADDIE",
        "deployer": "0x160c2deba0e58cfbf42d1d56cfa61f263c6de28a",
        "block": 119334570,
        "ts": "2026-11-20T20:28:53.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
