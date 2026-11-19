/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-19T23:16:09.000Z",
    "opened_at": "2026-11-19T22:16:09.000Z",
    "window_hours": 1,
    "head_block": 118597556,
    "start_block": 118563502,
    "blocks_scanned": 34054,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 216,
    "unnamed_contracts": 1,
    "via_factory": 208,
    "no_receipt": 0,
    "candidates": 217,
    "mint_events": 10724,
    "deployers": 155,
    "roots": 335,
    "cleared_multiple": 204,
    "failed_gates": 204,
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
        "root": "robinhood",
        "launches": 11,
        "deployers": 5,
        "baseline_share": 0.0513,
        "multiple": 1,
        "state": "BELOW",
        "reason": "robinhood: 1.0x over baseline < 6.0x required"
      },
      {
        "root": "uniswap",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0509,
        "multiple": 0.7,
        "state": "BELOW",
        "reason": "uniswap: 0.7x over baseline < 6.0x required"
      },
      {
        "root": "ai",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0081,
        "multiple": 4,
        "state": "BELOW",
        "reason": "ai: 4.0x over baseline < 6.0x required"
      },
      {
        "root": "usdg",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0203,
        "multiple": 1.6,
        "state": "BELOW",
        "reason": "usdg: 1.6x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0167,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "positions: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0424,
        "multiple": 0.7,
        "state": "BELOW",
        "reason": "uni: 0.7x over baseline < 6.0x required"
      },
      {
        "root": "hippo",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 57.9,
        "state": "THIN",
        "reason": "hippo: 5 deployers < 6 required"
      },
      {
        "root": "anthropic",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0024,
        "multiple": 9.6,
        "state": "THIN",
        "reason": "anthropic: 5 deployers < 6 required"
      },
      {
        "root": "staked",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0069,
        "multiple": 3.4,
        "state": "BELOW",
        "reason": "staked: 3.4x over baseline < 6.0x required"
      },
      {
        "root": "fiona",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 46.3,
        "state": "THIN",
        "reason": "fiona: 4 launches < 5 required"
      },
      {
        "root": "kitty",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0006,
        "multiple": 30.9,
        "state": "THIN",
        "reason": "kitty: 4 launches < 5 required"
      },
      {
        "root": "apple",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.001,
        "multiple": 18.5,
        "state": "THIN",
        "reason": "apple: 4 launches < 5 required"
      },
      {
        "root": "ant",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0012,
        "multiple": 15.4,
        "state": "THIN",
        "reason": "ant: 4 launches < 5 required"
      },
      {
        "root": "brownfi",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0025,
        "multiple": 7.4,
        "state": "THIN",
        "reason": "brownfi: 4 launches < 5 required"
      },
      {
        "root": "bf",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0027,
        "multiple": 6.9,
        "state": "THIN",
        "reason": "bf: 4 launches < 5 required"
      },
      {
        "root": "layerbank",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0053,
        "multiple": 3.5,
        "state": "BELOW",
        "reason": "layerbank: 3.5x over baseline < 6.0x required"
      },
      {
        "root": "amm",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0062,
        "multiple": 3,
        "state": "BELOW",
        "reason": "amm: 3.0x over baseline < 6.0x required"
      },
      {
        "root": "nft",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0201,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "nft: 0.9x over baseline < 6.0x required"
      },
      {
        "root": "age",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 34.7,
        "state": "THIN",
        "reason": "age: 3 launches < 5 required"
      },
      {
        "root": "dacitycoin",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 34.7,
        "state": "THIN",
        "reason": "dacitycoin: 3 launches < 5 required"
      },
      {
        "root": "dcty",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 34.7,
        "state": "THIN",
        "reason": "dcty: 3 launches < 5 required"
      },
      {
        "root": "golden",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 34.7,
        "state": "THIN",
        "reason": "golden: 3 launches < 5 required"
      },
      {
        "root": "pixelhood",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 34.7,
        "state": "THIN",
        "reason": "pixelhood: 3 launches < 5 required"
      },
      {
        "root": "syndicate",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 34.7,
        "state": "THIN",
        "reason": "syndicate: 3 launches < 5 required"
      },
      {
        "root": "tga",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 34.7,
        "state": "THIN",
        "reason": "tga: 3 launches < 5 required"
      },
      {
        "root": "pixel",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0022,
        "multiple": 6.3,
        "state": "THIN",
        "reason": "pixel: 3 launches < 5 required"
      },
      {
        "root": "rh",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0036,
        "multiple": 3.9,
        "state": "BELOW",
        "reason": "rh: 3.9x over baseline < 6.0x required"
      },
      {
        "root": "giga",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0041,
        "multiple": 3.4,
        "state": "BELOW",
        "reason": "giga: 3.4x over baseline < 6.0x required"
      },
      {
        "root": "dog",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0058,
        "multiple": 2.4,
        "state": "BELOW",
        "reason": "dog: 2.4x over baseline < 6.0x required"
      },
      {
        "root": "weth",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0073,
        "multiple": 1.9,
        "state": "BELOW",
        "reason": "weth: 1.9x over baseline < 6.0x required"
      },
      {
        "root": "volatile",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0083,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "volatile: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "aetheryn",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "aetheryn: 2 launches < 5 required"
      },
      {
        "root": "anthropia",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "anthropia: 2 launches < 5 required"
      },
      {
        "root": "antro",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "antro: 2 launches < 5 required"
      },
      {
        "root": "bca",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "bca: 2 launches < 5 required"
      },
      {
        "root": "chomel",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "chomel: 2 launches < 5 required"
      },
      {
        "root": "katua",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "katua: 2 launches < 5 required"
      },
      {
        "root": "mario",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "mario: 2 launches < 5 required"
      },
      {
        "root": "pudgys",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "pudgys: 2 launches < 5 required"
      },
      {
        "root": "roaring",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 23.1,
        "state": "THIN",
        "reason": "roaring: 2 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x35e21e50f547396efc8b6fd040af1c32b4d1e74a",
        "name": "Kitty",
        "symbol": "KITTY",
        "deployer": "0x39128e8c81f30fb7c8add0661c7cc9ab36b226cc",
        "block": 118597481,
        "ts": "2026-11-19T23:16:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa073d9954f669af51eb243dbbfca2080291b7727",
        "name": "c",
        "symbol": "C",
        "deployer": "0xea9172cf9120f0cfeca4e55c1414a59d56afb149",
        "block": 118597459,
        "ts": "2026-11-19T23:15:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1bf2eda0a56716c4610eceff59bcf0b8de8a0087",
        "name": "Fuck Fomo",
        "symbol": "$FOMO",
        "deployer": "0x378447d1bc980ff876557e4debebc99a050b73d9",
        "block": 118597053,
        "ts": "2026-11-19T23:15:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc25506a323d3b391ba8f216276015d70c579d94a",
        "name": "Heartlight",
        "symbol": "LIGHT",
        "deployer": "0xdbf303ac9cd59b6c0e5739590dacdbc4e582dbb7",
        "block": 118596753,
        "ts": "2026-11-19T23:14:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x78cd072f16954c22865f271d93a16a423a4ba92b",
        "name": "MEMELINK",
        "symbol": "MEMELINK",
        "deployer": "0x4337004ec9c1417f1c7a26ebd4b4fbed6acf9e5d",
        "block": 118596736,
        "ts": "2026-11-19T23:14:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x24f9ddab39782e76e5398bd18f4835793de6e4f7",
        "name": "NECROS  ON RH",
        "symbol": "NECROS",
        "deployer": "0x4d0b6831f902dd3f60e8385f7ab1e08bbc9778ef",
        "block": 118596471,
        "ts": "2026-11-19T23:14:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0edcde2d7454794c40d99f81b564119c38fe2baf",
        "name": "HYPERCHAN",
        "symbol": "HYPERCHAN",
        "deployer": "0x4337005db25dbad41da5692ba1188751ee5d98b6",
        "block": 118596456,
        "ts": "2026-11-19T23:14:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb47767784106db32eea5610ceb4e96a04d708325",
        "name": "Project Frogs",
        "symbol": "PRFOGS",
        "deployer": "0xab210b4623d96cee5276ce39ce72526e40ec71c2",
        "block": 118596252,
        "ts": "2026-11-19T23:13:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x64cdc9551bebbf4792087f89410a376ad3b09f78",
        "name": "WTF Syndicate",
        "symbol": "WTF Syndicate",
        "deployer": "0x19eeb4e58310d2d7d9d202ad38cd5f0c59c1dc96",
        "block": 118596022,
        "ts": "2026-11-19T23:13:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x450c3ab56172eb2be1f18e969e21980bfef272e9",
        "name": "Volatile AMM - SWT/s33",
        "symbol": "vAMM-SWT/s33",
        "deployer": "0xe9ae971970599711a1cf82456bc78987709d4afc",
        "block": 118595852,
        "ts": "2026-11-19T23:13:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1173133bd8493d6d2e4728c7c07893fc7a7bf5e6",
        "name": "Robot",
        "symbol": "ROBOT",
        "deployer": "0xea9172cf9120f0cfeca4e55c1414a59d56afb149",
        "block": 118595815,
        "ts": "2026-11-19T23:13:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x44814550db513b5d6aa0a079c9ff05f22df74baa",
        "name": "Anthropic",
        "symbol": "ANTHROPIC",
        "deployer": "0x4337004ec9c1417f1c7a26ebd4b4fbed6acf9e5d",
        "block": 118595780,
        "ts": "2026-11-19T23:13:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8a23a5dfd440091e8ec18d14c51f741349ca916c",
        "name": "Anthropia",
        "symbol": "Anthropia",
        "deployer": "0xaf393f1a69953aa392de40cc98e641bee90b23a8",
        "block": 118595737,
        "ts": "2026-11-19T23:12:56.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xbff66b3567bfd2d6e3b7cbf8e3cd138a80fbcccc",
        "name": "Robot",
        "symbol": "Robot",
        "deployer": "0xd9acd656a5f1b519c9e76a2a6092265a74186e58",
        "block": 118595346,
        "ts": "2026-11-19T23:12:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa1f2c6b0cacabcd2e785ea5fc11f310675c1cccc",
        "name": "Antro",
        "symbol": "Antro",
        "deployer": "0xd9acd656a5f1b519c9e76a2a6092265a74186e58",
        "block": 118595332,
        "ts": "2026-11-19T23:12:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa21ecc36dd9809d1f35b75a9ba1369c5a5bdeeac",
        "name": "Ondo Finance",
        "symbol": "ONDO",
        "deployer": "0x4337005db25dbad41da5692ba1188751ee5d98b6",
        "block": 118595329,
        "ts": "2026-11-19T23:12:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9587316e3092d6410a516e90ca7a4a4b46469def",
        "name": "Antro",
        "symbol": "ANTRO",
        "deployer": "0xea9172cf9120f0cfeca4e55c1414a59d56afb149",
        "block": 118595207,
        "ts": "2026-11-19T23:12:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe2f3af4d9385e062d9ab5ed9c308c34b20d62bf6",
        "name": "The Golden Age",
        "symbol": "TGA",
        "deployer": "0x2ac2b85d071ee1430ea1cb3a1c141267f606d021",
        "block": 118594886,
        "ts": "2026-11-19T23:11:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x373c037c90a681079c3343ddafceea8d9d8de96e",
        "name": "Flaunch Revenue Streams",
        "symbol": "FLAUNCH",
        "deployer": "0xea9172cf9120f0cfeca4e55c1414a59d56afb149",
        "block": 118594627,
        "ts": "2026-11-19T23:11:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x722b97fea3feb196febb7754bd6bc7623ae5e1c2",
        "name": "Ant",
        "symbol": "ANT",
        "deployer": "0xea9172cf9120f0cfeca4e55c1414a59d56afb149",
        "block": 118594627,
        "ts": "2026-11-19T23:11:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1574378ecb9d735156daa89b29ecb55efcdeb09c",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x3eacaa22a01e3d6ef641ad2ef284ca4bd5f52d21",
        "block": 118594429,
        "ts": "2026-11-19T23:10:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcf319fc55ce67f7155fb7cd6e6227e03a6c01e18",
        "name": "Gta Pepe",
        "symbol": "GEPE",
        "deployer": "0xd20278dc748cfe4a381e8969751873f1ab80cce4",
        "block": 118594252,
        "ts": "2026-11-19T23:10:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8c258f25fc6fbe3f01ccc828e2c3840a46a4a9a2",
        "name": "Yearn Stonk USDG",
        "symbol": "ymvST-USDG",
        "deployer": "0x97b6653606dbe7075f72ae5c0a13e6691e8b8dfe",
        "block": 118594120,
        "ts": "2026-11-19T23:10:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x793de69693cee8f927d9c96ea54f8bf0b5af7777",
        "name": "Apple Inu",
        "symbol": "AI",
        "deployer": "0x9e23f4a57450c23b0b49dff2f51405a7afd0ebc5",
        "block": 118593517,
        "ts": "2026-11-19T23:09:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9648e7ae4f3da64597aacc6744f23ad64bd87777",
        "name": "The Golden Age",
        "symbol": "TGA",
        "deployer": "0xb48c225345f18b79c098002be7b0c45879560799",
        "block": 118593150,
        "ts": "2026-11-19T23:08:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x596a56df1c89b17fc169e18de9eb1e04adf7cccc",
        "name": "ANT",
        "symbol": "ANT",
        "deployer": "0xd9acd656a5f1b519c9e76a2a6092265a74186e58",
        "block": 118593112,
        "ts": "2026-11-19T23:08:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbdc6341df96f34e50862d24eb7746db9a0dd1be3",
        "name": "Stock Token",
        "symbol": "STOKEN",
        "deployer": "0x3eacaa22a01e3d6ef641ad2ef284ca4bd5f52d21",
        "block": 118593049,
        "ts": "2026-11-19T23:08:17.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x0f137570150492dcb392b59f97dce8e3bb45f239",
        "name": "ANTVIDIA",
        "symbol": "ANTV",
        "deployer": "0x0b6849773da38220487ab4a2f3e3ddf787d87cbb",
        "block": 118592903,
        "ts": "2026-11-19T23:08:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8b9096fba76c35f0481fb7c5f744fbcb1ffa1e18",
        "name": "The Golden Age",
        "symbol": "TGA",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 118592692,
        "ts": "2026-11-19T23:07:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4b35a7cada36df66b901c9e6f6b3fc3e1250caac",
        "name": "Kitcount",
        "symbol": "KITCNT",
        "deployer": "0x03b7a7e4f62d1bc71b3895e453500f0fddc337fc",
        "block": 118592565,
        "ts": "2026-11-19T23:07:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc8de09511100db4f60c6f1ab90a4d5e52be52e64",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xe419ceb01526ac57cf2ec66b5322117c10ac136d",
        "block": 118592367,
        "ts": "2026-11-19T23:07:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8004a169fb4a3325136eb29fa0ceb6d2e539a432",
        "name": "AgentIdentity",
        "symbol": "AGENT",
        "deployer": "0xb6822af5166e6bde748f73324daf352d886f1039",
        "block": 118592231,
        "ts": "2026-11-19T23:06:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9ecbdbe58a5c7a1514f92a2cf51d5f985e47c910",
        "name": "Shadownomics",
        "symbol": "SHADOW",
        "deployer": "0x325ae14a22cd8129c5974f2223f3387fd292cfcd",
        "block": 118592200,
        "ts": "2026-11-19T23:06:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1df5cc5e5f0491fcc793519ccdbf393c73b70087",
        "name": "Anzellans",
        "symbol": "Anzellans",
        "deployer": "0xd4875af0ae4491868c1ad20c752232a6b54a3568",
        "block": 118592165,
        "ts": "2026-11-19T23:06:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6587033a11a1396f153740578d73f8bac49ff3da",
        "name": "Founding liquidity",
        "symbol": "fLP",
        "deployer": "0xf47a2a7e812c5cef5eae844f84ea01e1f6e4b8a2",
        "block": 118592107,
        "ts": "2026-11-19T23:06:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5173d45a1191ee33cbb7d8c7e65f21b04ed54802",
        "name": "Ramses",
        "symbol": "RAM",
        "deployer": "0x99e06797c9feb52391e2c14718f001be71ec1519",
        "block": 118592074,
        "ts": "2026-11-19T23:06:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x94f6135aa08772c63822e638dfec4b7c13f9443e",
        "name": "Aetheryn Egg V3",
        "symbol": "AEGG3",
        "deployer": "0xcb083f4c31fa09b8b18ad34892a2a38774826d0b",
        "block": 118591972,
        "ts": "2026-11-19T23:06:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xef839ad8f1d490d25dcea06bc2098d3ea39cb15d",
        "name": "Staked MNTD",
        "symbol": "sMNTD",
        "deployer": "0x19eeb4e58310d2d7d9d202ad38cd5f0c59c1dc96",
        "block": 118591691,
        "ts": "2026-11-19T23:06:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb236e833c5b7a5b99d8099699d7e2baf36c2dd86",
        "name": "BrownFi V3",
        "symbol": "BF-V3",
        "deployer": "0x942768cc858f876be1fcf30a9233786244889249",
        "block": 118590353,
        "ts": "2026-11-19T23:03:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa30fa36db767ad9ed3f7a60fc79526fb4d56d344",
        "name": "United States Oil Fund • Robinhood Token",
        "symbol": "USO",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 118590006,
        "ts": "2026-11-19T23:03:05.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
