/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-24T21:33:45.000Z",
    "opened_at": "2026-10-24T20:33:45.000Z",
    "window_hours": 1,
    "head_block": 97076790,
    "start_block": 97042479,
    "blocks_scanned": 34311,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 348,
    "unnamed_contracts": 0,
    "via_factory": 299,
    "no_receipt": 0,
    "candidates": 348,
    "mint_events": 10616,
    "deployers": 263,
    "roots": 433,
    "cleared_multiple": 433,
    "failed_gates": 418,
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
      "ai",
      "bibicoin-bibi",
      "faucet-solfauc",
      "hercules-lockheed",
      "nft",
      "positions",
      "uniswap-uni",
      "usdg",
      "wif-sword-vlad"
    ],
    "top": {
      "root": "usdg",
      "launches": 9,
      "deployers": 9,
      "baseline_share": 0.0004,
      "multiple": 64.7,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "usdg",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 64.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 57.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "ai",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 43.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nft",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 43.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "bibicoin",
        "launches": 20,
        "deployers": 20,
        "baseline_share": 0.0004,
        "multiple": 143.7,
        "state": "MERGED",
        "reason": "bibicoin + bibi co-occur 80%, merged to bibicoin-bibi"
      },
      {
        "root": "uniswap",
        "launches": 19,
        "deployers": 17,
        "baseline_share": 0.0004,
        "multiple": 136.5,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 74%, merged to uniswap-uni"
      },
      {
        "root": "bibi",
        "launches": 16,
        "deployers": 16,
        "baseline_share": 0.0004,
        "multiple": 114.9,
        "state": "MERGED",
        "reason": "bibicoin + bibi co-occur 80%, merged to bibicoin-bibi"
      },
      {
        "root": "uni",
        "launches": 14,
        "deployers": 13,
        "baseline_share": 0.0004,
        "multiple": 100.6,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 74%, merged to uniswap-uni"
      },
      {
        "root": "hercules",
        "launches": 12,
        "deployers": 12,
        "baseline_share": 0.0004,
        "multiple": 86.2,
        "state": "MERGED",
        "reason": "hercules + lockheed co-occur 100%, merged to hercules-lockheed"
      },
      {
        "root": "lockheed",
        "launches": 12,
        "deployers": 12,
        "baseline_share": 0.0004,
        "multiple": 86.2,
        "state": "MERGED",
        "reason": "hercules + lockheed co-occur 100%, merged to hercules-lockheed"
      },
      {
        "root": "wif",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 71.8,
        "state": "MERGED",
        "reason": "wif + sword co-occur 100%, merged to wif-sword-vlad"
      },
      {
        "root": "faucet",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 64.7,
        "state": "MERGED",
        "reason": "faucet + solfauc co-occur 100%, merged to faucet-solfauc"
      },
      {
        "root": "solfauc",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 64.7,
        "state": "MERGED",
        "reason": "faucet + solfauc co-occur 100%, merged to faucet-solfauc"
      },
      {
        "root": "sword",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 64.7,
        "state": "MERGED",
        "reason": "wif + sword co-occur 100%, merged to wif-sword-vlad"
      },
      {
        "root": "vlad",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 64.7,
        "state": "MERGED",
        "reason": "wif + sword co-occur 100%, merged to wif-sword-vlad"
      },
      {
        "root": "bbcoin",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 35.9,
        "state": "THIN",
        "reason": "bbcoin: 5 deployers < 6 required"
      },
      {
        "root": "hood",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 35.9,
        "state": "THIN",
        "reason": "hood: 5 deployers < 6 required"
      },
      {
        "root": "cow",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 28.7,
        "state": "THIN",
        "reason": "cow: 4 launches < 5 required"
      },
      {
        "root": "enginex",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 28.7,
        "state": "THIN",
        "reason": "enginex: 4 launches < 5 required"
      },
      {
        "root": "amm",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "amm: 3 launches < 5 required"
      },
      {
        "root": "borro",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "borro: 3 launches < 5 required"
      },
      {
        "root": "cash",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "cash: 3 launches < 5 required"
      },
      {
        "root": "counterparty",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "counterparty: 3 launches < 5 required"
      },
      {
        "root": "ctr",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "ctr: 3 launches < 5 required"
      },
      {
        "root": "dispatch",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "dispatch: 3 launches < 5 required"
      },
      {
        "root": "dog",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "dog: 3 launches < 5 required"
      },
      {
        "root": "friend",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "friend: 3 launches < 5 required"
      },
      {
        "root": "giga",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "giga: 3 launches < 5 required"
      },
      {
        "root": "oxion",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "oxion: 3 launches < 5 required"
      },
      {
        "root": "pepe",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "pepe: 3 launches < 5 required"
      },
      {
        "root": "position",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "position: 3 launches < 5 required"
      },
      {
        "root": "prd",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "prd: 3 launches < 5 required"
      },
      {
        "root": "predictor",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "predictor: 3 launches < 5 required"
      },
      {
        "root": "project",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "project: 3 launches < 5 required"
      },
      {
        "root": "regula",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "regula: 3 launches < 5 required"
      },
      {
        "root": "robinhood",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "robinhood: 3 launches < 5 required"
      },
      {
        "root": "staked",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "staked: 3 launches < 5 required"
      },
      {
        "root": "vesper",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "vesper: 3 launches < 5 required"
      },
      {
        "root": "volatile",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "volatile: 3 launches < 5 required"
      },
      {
        "root": "weth",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "weth: 3 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x37788ff0c1d4e45a7fe06bc7e71e0cc00121d0a8",
        "name": "Purinta USDG",
        "symbol": "PurintaUSDG",
        "deployer": "0x935c5559e2f8c8db93b546e72fef4ec820c81287",
        "block": 97076737,
        "ts": "2026-10-24T21:33:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8646bdd4d64280504dc3454d231bd6bb0b487777",
        "name": "Northflank",
        "symbol": "NORTHFLK",
        "deployer": "0x4f6d40378da3874cb49b6834b4c20ada43842691",
        "block": 97076521,
        "ts": "2026-10-24T21:33:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf8de5598e75ec82899f51bd4434a8bdd6c61f22d",
        "name": "Northflank",
        "symbol": "NORTHFLK",
        "deployer": "0xab26b9b536b3ec0ff290a9dfbb3a1910411b20be",
        "block": 97076457,
        "ts": "2026-10-24T21:33:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdd63c81982799a41ba744bf558171bbe2ff67777",
        "name": "The anti-AI Movie",
        "symbol": "WILDWOOD",
        "deployer": "0xba99a63b9ab6033451b21666851b8070af73cbe8",
        "block": 97076252,
        "ts": "2026-10-24T21:32:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xddac87050fc7ae3253183fe0141fafd4cbe9b3ca",
        "name": "the Friendly Ghost and Friends",
        "symbol": "GHOST",
        "deployer": "0x564b473a612753ff6170e2a2f0fc0c1cdc5e6dc1",
        "block": 97076235,
        "ts": "2026-10-24T21:32:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x87767023d319e66e48190df53146eb9065d9f08d",
        "name": "BIBICOIN",
        "symbol": "BIBI",
        "deployer": "0x2bd32ef66ad80418d15d2362e7cce091082a7670",
        "block": 97075984,
        "ts": "2026-10-24T21:32:21.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xff380214104f9e1b35166cf7df83a87682dd4f53",
        "name": "MONA",
        "symbol": "Octocat",
        "deployer": "0x63f91a82cfd6dddac8aa1d3397685747f9c005e5",
        "block": 97075984,
        "ts": "2026-10-24T21:32:21.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xb26a62e8f249184a9342636b5f3cdc88a6217777",
        "name": "The Anti AI Movie",
        "symbol": "WILDWOOD",
        "deployer": "0xea5c98a6164850f6ace669bd753de6928881b65e",
        "block": 97075851,
        "ts": "2026-10-24T21:32:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcc211c42d773e183e7a810acc0203ca81d447777",
        "name": "Dispatch",
        "symbol": "DISPATCH",
        "deployer": "0x21853863aeec000ebfa52e46b366fdf2ac02ca6b",
        "block": 97075696,
        "ts": "2026-10-24T21:31:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa5bfc254b1ebd0c5382b64a2402287d40f872bb6",
        "name": "EARN MAXXING",
        "symbol": "EARNMAXX",
        "deployer": "0xf5fbb5faee620670db3d6d395d3dedae73976f76",
        "block": 97075627,
        "ts": "2026-10-24T21:31:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xeae420a3aebfe2530269a131d4d0d985c54294e7",
        "name": "Vesper",
        "symbol": "VESPER",
        "deployer": "0x0edae998dd2ff1e25aa7fe5dec6d742a7284be6d",
        "block": 97075510,
        "ts": "2026-10-24T21:31:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7e5253fef5c124bd29db0be8e8000d6c25b6c043",
        "name": "server lelo",
        "symbol": "lelo",
        "deployer": "0x48cdde21cfbb523b3ea74ea1b3a6c12c8bd2b32f",
        "block": 97075272,
        "ts": "2026-10-24T21:31:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x070f0bcf458c2a836cf68c986df3ba86586e64fd",
        "name": "EARNOMNI",
        "symbol": "OMNI",
        "deployer": "0xf5fbb5faee620670db3d6d395d3dedae73976f76",
        "block": 97075180,
        "ts": "2026-10-24T21:30:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xea5a042dd3cdcf427ae2efb542baca1f244890a4",
        "name": "BIBICOIN",
        "symbol": "BIBI",
        "deployer": "0x7d4975ad5fea96a2e64bf1429d4086258741f568",
        "block": 97075002,
        "ts": "2026-10-24T21:30:37.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x7388eabda452cbec332b3840d320b1acc6a577dd",
        "name": "AssayAI",
        "symbol": "ASSAY",
        "deployer": "0x543cf2e2dd7954d5f7e8f735ab417168fc937e41",
        "block": 97074848,
        "ts": "2026-10-24T21:30:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf8569753ded1da2af51add7b75025d10eed01e18",
        "name": "Optimus Academy",
        "symbol": "OPTIMUS",
        "deployer": "0xd20278dc748cfe4a381e8969751873f1ab80cce4",
        "block": 97074810,
        "ts": "2026-10-24T21:30:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xff21fb9b91aab276e060076fb1533a02cd621035",
        "name": "OKIRO Upwell",
        "symbol": "OKIRO",
        "deployer": "0x06b73e524cc970eed7602e281d955ee9b9b3a26d",
        "block": 97074746,
        "ts": "2026-10-24T21:30:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbc11b8c45634367857a95994bc444cc01f697777",
        "name": "Yellow💥",
        "symbol": "YELLOW",
        "deployer": "0x980b9bb5b3163638e0a35f8f26ff40547b16e2a9",
        "block": 97074677,
        "ts": "2026-10-24T21:30:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf2fca751cc4b1585c0d661eae08dcdac0a30f1bc",
        "name": "95% Cashcat",
        "symbol": "95CAT",
        "deployer": "0xf5fbb5faee620670db3d6d395d3dedae73976f76",
        "block": 97074392,
        "ts": "2026-10-24T21:29:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd8b6772644cb7139b5dd266638685684b0bc55cc",
        "name": "Solana Faucet",
        "symbol": "SolFauc",
        "deployer": "0x8e10083527022ef08eac85b977d38246043e9cd6",
        "block": 97073872,
        "ts": "2026-10-24T21:28:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x96d4fb86e484ea46d02116d4ee4dff92be67af39",
        "name": "BALD",
        "symbol": "BALD",
        "deployer": "0xf5fbb5faee620670db3d6d395d3dedae73976f76",
        "block": 97073855,
        "ts": "2026-10-24T21:28:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x635ca4e5c7221e7c8325e7785e090149990a1135",
        "name": "BIBICOIN",
        "symbol": "BIBI",
        "deployer": "0x3b2ff179ae0b0e813fff9a436ab4b8d853f6e6c6",
        "block": 97073855,
        "ts": "2026-10-24T21:28:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8f6e473e5cb7acab789c1adaf99b00ce12ef9d44",
        "name": "vlad wif sword",
        "symbol": "SWORDVLAD",
        "deployer": "0x184eebfc4731cd8f1fe8cb17645558fa9cfcea3b",
        "block": 97073848,
        "ts": "2026-10-24T21:28:37.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x680b44d9f09e8690cb679864beb5120b0725b03c",
        "name": "Larpchi",
        "symbol": "Larpchi",
        "deployer": "0x5bcbd4fe1938157865aa06dd43546770553a00f1",
        "block": 97073818,
        "ts": "2026-10-24T21:28:33.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xef839ad8f1d490d25dcea06bc2098d3ea39cb15d",
        "name": "Staked MNTD",
        "symbol": "sMNTD",
        "deployer": "0xeca13a86173cddb53205031ec30125f0d1b8c0a4",
        "block": 97073667,
        "ts": "2026-10-24T21:28:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb8e328c93972aa433c8370519f1288ed14b5f667",
        "name": "Solana Faucet",
        "symbol": "SolFauc",
        "deployer": "0xc829dbaab213c604ffad092c8edaf9982629ad17",
        "block": 97073667,
        "ts": "2026-10-24T21:28:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x956fbb2a75f274586954b39a1865599fd2fb7777",
        "name": "Lockheed C-130 Hercules",
        "symbol": "Hercules",
        "deployer": "0xcae5e1faacfcbc2fad216f75204701468938dd28",
        "block": 97073666,
        "ts": "2026-10-24T21:28:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc8745298fe928b0424a3564eca3f178b8b552a19",
        "name": "Solana Faucet",
        "symbol": "SolFauc",
        "deployer": "0x204e98a7c1956df8669402dd9a5fb0e514035531",
        "block": 97073635,
        "ts": "2026-10-24T21:28:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x86b4282dc432d238c822d4963534f057b0cb61a9",
        "name": "Regula Argent",
        "symbol": "rARGENT",
        "deployer": "0x8f42b0dbd0a113a8a111e862545464634c766743",
        "block": 97073594,
        "ts": "2026-10-24T21:28:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x14c62af25bbaf9007fcbb0d2b9670ed51105ef77",
        "name": "Solana Faucet",
        "symbol": "SolFauc",
        "deployer": "0x6ed79cd87a8eeca500456523a88d284868038061",
        "block": 97073456,
        "ts": "2026-10-24T21:27:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdd784288478a359fa1edd2c8e65d6444c1344c80",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xfdaf7507d891dda6e2f089a55c26021e9d0cbb5e",
        "block": 97073385,
        "ts": "2026-10-24T21:27:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xece26c6e8a7b2abd7f9b169fb1636973d5cd15b4",
        "name": "GOLEMITE Upwell",
        "symbol": "GOLEMITE",
        "deployer": "0x06b73e524cc970eed7602e281d955ee9b9b3a26d",
        "block": 97073380,
        "ts": "2026-10-24T21:27:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x910cc0300beec09e61637f8c52a62e05d1b6ec64",
        "name": "IShowSpeed",
        "symbol": "Speed",
        "deployer": "0xe77c0e285107e53ccc587f3890f1c1e91ba77085",
        "block": 97073345,
        "ts": "2026-10-24T21:27:39.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x7111bfa1fb34c4e9f0a1c94f0a2de5605e5a10d6",
        "name": "Safe Inutelligence",
        "symbol": "SI",
        "deployer": "0x34800796b9af08ff48370c1023601d0597f3b431",
        "block": 97073245,
        "ts": "2026-10-24T21:27:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2267d85cda3d804c8e5e9b770fce2c4d67a553c6",
        "name": "Solana Faucet",
        "symbol": "SolFauc",
        "deployer": "0x1edeb41c4ee0fdfdacfb6b093150228d9e9fe3a6",
        "block": 97073245,
        "ts": "2026-10-24T21:27:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe981186c70a6861eecda200856d010ece4a7cb65",
        "name": "name Alpene",
        "symbol": "NAMEALP",
        "deployer": "0xf2091cae34f026ce3f4e97120366cac3aa939ac3",
        "block": 97073178,
        "ts": "2026-10-24T21:27:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x68941ac8cc1f3197593f5d13c814d5f8cbbe6d6b",
        "name": "Forever Laura",
        "symbol": "Laura",
        "deployer": "0xfdaf7507d891dda6e2f089a55c26021e9d0cbb5e",
        "block": 97073032,
        "ts": "2026-10-24T21:27:06.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xcec185eb182c47d1ba1efc84e6959e18cd620be4",
        "name": "Coinbase Wrapped BTC",
        "symbol": "cbBTC",
        "deployer": "0x4db8fb2f49c9e44faf1e2245284cb05de6235eee",
        "block": 97072891,
        "ts": "2026-10-24T21:26:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9c6ba0f2e38e9eda334940b2e432423480b2ab1d",
        "name": "Based Bid",
        "symbol": "Based",
        "deployer": "0xe4e52d44c05189ae5d96147a53ffb218ce9c04cd",
        "block": 97072766,
        "ts": "2026-10-24T21:26:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf14e13167bd3cc24d0b83b203ff676e328867777",
        "name": "United States Oil Exchange",
        "symbol": "USOE",
        "deployer": "0xe26a8a93a803f6dcc9355da3beac69d733ddfd5d",
        "block": 97072219,
        "ts": "2026-10-24T21:25:33.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
