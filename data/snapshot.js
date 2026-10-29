/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-29T02:38:49.000Z",
    "opened_at": "2026-10-29T01:38:49.000Z",
    "window_hours": 1,
    "head_block": 100565170,
    "start_block": 100530621,
    "blocks_scanned": 34549,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 432,
    "unnamed_contracts": 4,
    "via_factory": 400,
    "no_receipt": 0,
    "candidates": 436,
    "mint_events": 22099,
    "deployers": 275,
    "roots": 456,
    "cleared_multiple": 123,
    "failed_gates": 106,
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
      "cat",
      "credit-cc",
      "cyberpsychosis-cyber",
      "float",
      "meta",
      "nft",
      "paws",
      "pizza",
      "positions",
      "robinhood",
      "shoggoth",
      "uber",
      "uniswap-uni",
      "usdg"
    ],
    "top": {
      "root": "robinhood",
      "launches": 36,
      "deployers": 10,
      "baseline_share": 0.0004,
      "multiple": 208.3,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "robinhood",
        "launches": 36,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 208.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "cat",
        "launches": 22,
        "deployers": 20,
        "baseline_share": 0.0004,
        "multiple": 127.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "pizza",
        "launches": 17,
        "deployers": 17,
        "baseline_share": 0.0004,
        "multiple": 98.4,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "shoggoth",
        "launches": 14,
        "deployers": 13,
        "baseline_share": 0.0004,
        "multiple": 81,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 57.9,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "float",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 52.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "meta",
        "launches": 9,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 52.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "paws",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 52.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 46.3,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nft",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 40.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uber",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 34.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 23,
        "deployers": 20,
        "baseline_share": 0.0004,
        "multiple": 133.1,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 78%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 18,
        "deployers": 16,
        "baseline_share": 0.0004,
        "multiple": 104.2,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 78%, merged to uniswap-uni"
      },
      {
        "root": "credit",
        "launches": 16,
        "deployers": 16,
        "baseline_share": 0.0004,
        "multiple": 92.6,
        "state": "MERGED",
        "reason": "credit + cc co-occur 75%, merged to credit-cc"
      },
      {
        "root": "cyberpsychosis",
        "launches": 15,
        "deployers": 14,
        "baseline_share": 0.0004,
        "multiple": 86.8,
        "state": "MERGED",
        "reason": "cyberpsychosis + cyber co-occur 67%, merged to cyberpsychosis-cyber"
      },
      {
        "root": "cc",
        "launches": 12,
        "deployers": 12,
        "baseline_share": 0.0004,
        "multiple": 69.4,
        "state": "MERGED",
        "reason": "credit + cc co-occur 75%, merged to credit-cc"
      },
      {
        "root": "cyber",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 57.9,
        "state": "MERGED",
        "reason": "cyberpsychosis + cyber co-occur 67%, merged to cyberpsychosis-cyber"
      },
      {
        "root": "liquid",
        "launches": 9,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 52.1,
        "state": "THIN",
        "reason": "liquid: 3 deployers < 6 required"
      },
      {
        "root": "als",
        "launches": 7,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 40.5,
        "state": "THIN",
        "reason": "als: 1 deployers < 6 required"
      },
      {
        "root": "arcus",
        "launches": 7,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 40.5,
        "state": "THIN",
        "reason": "arcus: 1 deployers < 6 required"
      },
      {
        "root": "shares",
        "launches": 7,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 40.5,
        "state": "THIN",
        "reason": "shares: 1 deployers < 6 required"
      },
      {
        "root": "long",
        "launches": 6,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 34.7,
        "state": "THIN",
        "reason": "long: 1 deployers < 6 required"
      },
      {
        "root": "driver",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 28.9,
        "state": "THIN",
        "reason": "driver: 5 deployers < 6 required"
      },
      {
        "root": "hood",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 28.9,
        "state": "THIN",
        "reason": "hood: 5 deployers < 6 required"
      },
      {
        "root": "veranta",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 28.9,
        "state": "THIN",
        "reason": "veranta: 5 deployers < 6 required"
      },
      {
        "root": "zero",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 28.9,
        "state": "THIN",
        "reason": "zero: 5 deployers < 6 required"
      },
      {
        "root": "byte",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "byte: 4 launches < 5 required"
      },
      {
        "root": "dimension",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "dimension: 4 launches < 5 required"
      },
      {
        "root": "flock",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "flock: 4 launches < 5 required"
      },
      {
        "root": "group",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "group: 4 launches < 5 required"
      },
      {
        "root": "inc",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "inc: 4 launches < 5 required"
      },
      {
        "root": "layerbank",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "layerbank: 4 launches < 5 required"
      },
      {
        "root": "semiconductor",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "semiconductor: 4 launches < 5 required"
      },
      {
        "root": "staked",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "staked: 4 launches < 5 required"
      },
      {
        "root": "states",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "states: 4 launches < 5 required"
      },
      {
        "root": "super",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "super: 4 launches < 5 required"
      },
      {
        "root": "united",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "united: 4 launches < 5 required"
      },
      {
        "root": "borrowable",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 17.4,
        "state": "THIN",
        "reason": "borrowable: 3 launches < 5 required"
      },
      {
        "root": "deposit",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 17.4,
        "state": "THIN",
        "reason": "deposit: 3 launches < 5 required"
      },
      {
        "root": "ethfund",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 17.4,
        "state": "THIN",
        "reason": "ethfund: 3 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x993728253dbcee364fa27b4873e623482409a27a",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xa8eed1576e635112f47253348c99b9172f134528",
        "block": 100565026,
        "ts": "2026-10-29T02:38:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8bf33266f06f958a556e4d96435c2d81bb7a7fd9",
        "name": "lowkeyswap.app",
        "symbol": "LOWKEY",
        "deployer": "0xc17b79ff6fd9a31efadc8c846fee292ec71a3edb",
        "block": 100564991,
        "ts": "2026-10-29T02:38:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa6160b47c7748fba073786382e43ec69138b3ce8",
        "name": "SHOGGOTH",
        "symbol": "SHOGGOTH",
        "deployer": "0xd684f315d070e404aab5b762ab9f1159fc7c5118",
        "block": 100564978,
        "ts": "2026-10-29T02:38:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5a4810920e20b69fb8ca4afeaac8731aed2da3ed",
        "name": "YBUC",
        "symbol": "YBUC",
        "deployer": "0xa8eed1576e635112f47253348c99b9172f134528",
        "block": 100564961,
        "ts": "2026-10-29T02:38:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x091f0c7e675a787a4018eb47c30bed3fa2013b65",
        "name": "MintStakeShare 2",
        "symbol": "MSS2",
        "deployer": "0x1990852348c7ab9f29ad13e7e41cef8bc2375cc5",
        "block": 100564936,
        "ts": "2026-10-29T02:38:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2937c20dd7dd464f2408442b3784579c325db266",
        "name": "Flash",
        "symbol": "FLASH",
        "deployer": "0x49eebda5ddb18da8a101ef14763e459a0f9c762e",
        "block": 100564926,
        "ts": "2026-10-29T02:38:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc57df0bfd6226dc5b6b1b8ff03e925d37baade5b",
        "name": "Wrapped Palantir Technologies • Robinhood Token",
        "symbol": "wPLTR",
        "deployer": "0x4a438c7c4052209b71cc403f28b9976300bffbbe",
        "block": 100564882,
        "ts": "2026-10-29T02:38:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa1b5943942495da47425d4b819188b93a789d9d7",
        "name": "Pizza",
        "symbol": "PIZZA",
        "deployer": "0xad6eac1b61f4d0e9b6f3752d1a02c00704cef26b",
        "block": 100564826,
        "ts": "2026-10-29T02:38:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xaa5307b217bd7fd6f383eec7b02def0784847217",
        "name": "WAGIE",
        "symbol": "WAGIE",
        "deployer": "0x868b870f0508b1c508561082f73c3d96b8f8a35e",
        "block": 100564823,
        "ts": "2026-10-29T02:38:14.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x3361dcba27b0d7da2866705ecddd56274b5d5da5",
        "name": "Cyberpsychosis",
        "symbol": "CYBER",
        "deployer": "0x8a28b94b1321bd6f078140466ddd5a63ba9c29a4",
        "block": 100564739,
        "ts": "2026-10-29T02:38:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x86a4e9c00615d1c7ed897db87b0f09b1e36403e3",
        "name": "Credit Cat",
        "symbol": "CC",
        "deployer": "0x2d672549f75260cb75483b65607ea22a5db450c4",
        "block": 100564721,
        "ts": "2026-10-29T02:38:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x70ae210e7dbca4e134d46070af520d19fe82df8d",
        "name": "Wrapped Space Exploration Technologies Corp. Class A Common Stock • Robinhood Token",
        "symbol": "wSPCX",
        "deployer": "0x9efc87801ffb0b27766d6c568e3c0d76bd59d605",
        "block": 100564603,
        "ts": "2026-10-29T02:37:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x03063fcb6dac22f0d8468f55e4c9ec41669661a0",
        "name": "Arrowfarm UniV3 ARROWFARM-USDG CLM",
        "symbol": "arrowUniV3ARROWFARM-USDG",
        "deployer": "0x19864cd8bf2b6b1beca9c5dc7f38e7c5dadf6ee2",
        "block": 100564579,
        "ts": "2026-10-29T02:37:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbf99d49f40e0abfed4748926e68d95dc17d71e18",
        "name": "as the prophecy foretold",
        "symbol": "PROPHECY",
        "deployer": "0xd20278dc748cfe4a381e8969751873f1ab80cce4",
        "block": 100564534,
        "ts": "2026-10-29T02:37:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x416d0c4b431cfa33b4a4974e3dfc9f5089137148",
        "name": "ARROWFARM",
        "symbol": "ARROWFARM",
        "deployer": "0x19864cd8bf2b6b1beca9c5dc7f38e7c5dadf6ee2",
        "block": 100564533,
        "ts": "2026-10-29T02:37:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x91d5d2c999c35ce061fd4967e6764cdd9cf1b3e1",
        "name": "Ixs Token",
        "symbol": "IXS",
        "deployer": "0x96111cc4867c5e1c22da4b79bb8852b9e2a07eb1",
        "block": 100564414,
        "ts": "2026-10-29T02:37:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf1fb859c0af76b476423ae676478c1872ba67777",
        "name": "Gliard",
        "symbol": "GLIARD",
        "deployer": "0x980b9bb5b3163638e0a35f8f26ff40547b16e2a9",
        "block": 100564222,
        "ts": "2026-10-29T02:37:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbc2dfafca16d463a85283efc3c05bc75ae5792d2",
        "name": "Blackboard CHALK",
        "symbol": "CHALK",
        "deployer": "0x5441fc5ef07439a328e3b78a957e45e41ee76402",
        "block": 100564177,
        "ts": "2026-10-29T02:37:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8652489606c60c37d5af9df8a5600eabea76cfa0",
        "name": "gliard",
        "symbol": "gliard",
        "deployer": "0x4a68ee2977cfc24e733269608275472c1f972f49",
        "block": 100564154,
        "ts": "2026-10-29T02:37:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd0601ce157db5bdc3162bbac2a2c8af5320d9eec",
        "name": "NVIDIA • Robinhood Token",
        "symbol": "NVDA",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 100564037,
        "ts": "2026-10-29T02:36:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x366e6751875e95e42a84963b4298a474e0949ae6",
        "name": "GTA VI",
        "symbol": "GTA6",
        "deployer": "0x77fa41d0dfe137d89b885fef5149f9d03671eb2a",
        "block": 100563862,
        "ts": "2026-10-29T02:36:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4a8e64aa68e9962dd6c52107abbbd44712bd222a",
        "name": "Dimension Zero",
        "symbol": "ZERO",
        "deployer": "0x6dc6b12bc45ae67a76982cb1f88dc322fab21c7a",
        "block": 100563841,
        "ts": "2026-10-29T02:36:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8c5b68efa25f15bd69259f4f71a9a8a6c9bf1e18",
        "name": "Frankie",
        "symbol": "FRANKIE",
        "deployer": "0x792dd4c93cfa919e141e6a0be37360373633cdad",
        "block": 100563696,
        "ts": "2026-10-29T02:36:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x45e36f8f7209e50734271651b03b570cab11d09e",
        "name": "Cyberpsychosis",
        "symbol": "CYBER",
        "deployer": "0x5f96ea68cdbcc1aea5e0e4a35e148cbd677519b6",
        "block": 100563562,
        "ts": "2026-10-29T02:36:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x501b1b3b79750313ad2c4cccd08586c4c17d7283",
        "name": "Disney • Robinhood Token",
        "symbol": "DIS",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 100563515,
        "ts": "2026-10-29T02:35:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc9e6ab8901d33a1db2886c7cf7240d943e12d5fb",
        "name": "Vantage",
        "symbol": "VANTAGE",
        "deployer": "0xf663d9948dd5f93a942244da669cf3dcea995660",
        "block": 100563288,
        "ts": "2026-10-29T02:35:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6fc36b1d7bbb1d0e4d5da1073e655f602b487777",
        "name": "The Fat Fish Cult",
        "symbol": "FATFISH",
        "deployer": "0xe26a8a93a803f6dcc9355da3beac69d733ddfd5d",
        "block": 100563216,
        "ts": "2026-10-29T02:35:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x29e9b433865cdd01e4b30a30e1f8cb7fe4318a63",
        "name": "Safety Deposit Box Smart LP STONKBROKER/WETH Balanced Band",
        "symbol": "sdSTONKBROKER-BB",
        "deployer": "0x010fdf27afe8ff560fafff04df26dbb0a23793b7",
        "block": 100563077,
        "ts": "2026-10-29T02:35:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd9da61c2fb522831ac426d1eb0d3e79612176451",
        "name": "pixel human",
        "symbol": "PHH",
        "deployer": "0x2569c01b48cdbcef35d118fe015ba267988b8027",
        "block": 100562941,
        "ts": "2026-10-29T02:34:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xeb02fd55d3abbc5141dab3112b5af84fe40353c2",
        "name": "Wrapped Take-Two Interactive Software • Robinhood Token",
        "symbol": "wTTWO",
        "deployer": "0x772890c605342bcd69fc712ac242674156195028",
        "block": 100562830,
        "ts": "2026-10-29T02:34:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdf4e30cbbbe43db34f0eb8f97f81a103c7eaf6a8",
        "name": "Stray Society",
        "symbol": "STRAY",
        "deployer": "0x331d9a049d496385998067abf6cbb6371c8d2466",
        "block": 100562655,
        "ts": "2026-10-29T02:34:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb87a64666c0d992bcd5ad1455860a2c368fc7777",
        "name": "Autonomopad",
        "symbol": "AUTONOMO",
        "deployer": "0x4f6d40378da3874cb49b6834b4c20ada43842691",
        "block": 100562571,
        "ts": "2026-10-29T02:34:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbe6248649a391103749a405497f9c4803288eddc",
        "name": "Autonomopad",
        "symbol": "AUTONOMO",
        "deployer": "0x8def83e305f8a655ff85aefd2709df21a3c5e6bc",
        "block": 100562505,
        "ts": "2026-10-29T02:34:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x500a02a20b0b0a3f3efccfc0559543f5743bd1c4",
        "name": "o1.exchange",
        "symbol": "O",
        "deployer": "0x73a063c96b5d67863deaa7b163207e769a7c2cee",
        "block": 100562245,
        "ts": "2026-10-29T02:33:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8f359ac5f0ee02ef543d6daf15d976fed0d38ba3",
        "name": "MAG7",
        "symbol": "MAG7",
        "deployer": "0xfaedb9bc5fa75da7755a553853ba7945407c0c0b",
        "block": 100561795,
        "ts": "2026-10-29T02:32:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc9d244ae176436f96279159b2d91d3e4f830c17f",
        "name": "Wrapped Meta Platforms • Robinhood Token",
        "symbol": "wMETA",
        "deployer": "0x1e9891b933c123eb860a4ae8ba75f7c5b506eed5",
        "block": 100561763,
        "ts": "2026-10-29T02:32:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xeb9a6acfbdf70c4d7e118b6fb0c536e61b78d7fc",
        "name": "Wrapped Circle Internet Group • Robinhood Token",
        "symbol": "wCRCL",
        "deployer": "0x772890c605342bcd69fc712ac242674156195028",
        "block": 100561739,
        "ts": "2026-10-29T02:32:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbed9f479d4c9c256c728e818d9937f15dc787777",
        "name": "LAST CAT 2089 ACT ONE THE FALL",
        "symbol": "LASTCAT2089THEFALL",
        "deployer": "0xea5c98a6164850f6ace669bd753de6928881b65e",
        "block": 100561416,
        "ts": "2026-10-29T02:32:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x37a2afaa98648f2e13658623885f821ac8365609",
        "name": "Arcus GLD (5x Long)",
        "symbol": "pGLD5x",
        "deployer": "0xb7410dc44e2715161e9914272e2d55d7c5061faa",
        "block": 100560921,
        "ts": "2026-10-29T02:31:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x393e2e43b774e4151b0fe496212739e45423dad0",
        "name": "bankrbot",
        "symbol": "BNKR",
        "deployer": "0x33bc6e09bd2279db1b97456553dbdea0db67d3ba",
        "block": 100560800,
        "ts": "2026-10-29T02:31:12.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
