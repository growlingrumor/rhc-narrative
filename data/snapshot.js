/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-09-20T11:45:24.000Z",
    "opened_at": "2026-09-20T10:45:24.000Z",
    "window_hours": 1,
    "head_block": 67912851,
    "start_block": 67877278,
    "blocks_scanned": 35573,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 744,
    "unnamed_contracts": 0,
    "via_factory": 681,
    "no_receipt": 0,
    "candidates": 744,
    "mint_events": 38982,
    "deployers": 459,
    "roots": 819,
    "cleared_multiple": 237,
    "failed_gates": 211,
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
      "agent",
      "ai",
      "arch-triumphal",
      "brier",
      "cat",
      "da-huang",
      "fox",
      "foxi-okc",
      "here-kilroy",
      "maker-mods",
      "nft-positions",
      "owed",
      "private-rooms-zecroom",
      "revern",
      "robinhood",
      "uniswap-uni",
      "vovo"
    ],
    "top": {
      "root": "robinhood",
      "launches": 22,
      "deployers": 18,
      "baseline_share": 0.0004,
      "multiple": 73.9,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "robinhood",
        "launches": 22,
        "deployers": 18,
        "baseline_share": 0.0004,
        "multiple": 73.9,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "agent",
        "launches": 14,
        "deployers": 14,
        "baseline_share": 0.0004,
        "multiple": 47,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "cat",
        "launches": 9,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 30.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "ai",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 23.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "brier",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 23.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "fox",
        "launches": 7,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 23.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "owed",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 20.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "revern",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 20.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "vovo",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 20.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 31,
        "deployers": 25,
        "baseline_share": 0.0004,
        "multiple": 104.2,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 65%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 20,
        "deployers": 20,
        "baseline_share": 0.0004,
        "multiple": 67.2,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 65%, merged to uniswap-uni"
      },
      {
        "root": "arch",
        "launches": 10,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 33.6,
        "state": "MERGED",
        "reason": "arch + triumphal co-occur 100%, merged to arch-triumphal"
      },
      {
        "root": "triumphal",
        "launches": 10,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 33.6,
        "state": "MERGED",
        "reason": "arch + triumphal co-occur 100%, merged to arch-triumphal"
      },
      {
        "root": "nft",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 30.2,
        "state": "MERGED",
        "reason": "nft + positions co-occur 64%, merged to nft-positions"
      },
      {
        "root": "positions",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 30.2,
        "state": "MERGED",
        "reason": "nft + positions co-occur 64%, merged to nft-positions"
      },
      {
        "root": "here",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 26.9,
        "state": "MERGED",
        "reason": "here + kilroy co-occur 100%, merged to here-kilroy"
      },
      {
        "root": "kilroy",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 26.9,
        "state": "MERGED",
        "reason": "here + kilroy co-occur 100%, merged to here-kilroy"
      },
      {
        "root": "foxi",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 23.5,
        "state": "MERGED",
        "reason": "foxi + okc co-occur 100%, merged to foxi-okc"
      },
      {
        "root": "maker",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 23.5,
        "state": "MERGED",
        "reason": "maker + mods co-occur 100%, merged to maker-mods"
      },
      {
        "root": "mods",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 23.5,
        "state": "MERGED",
        "reason": "maker + mods co-occur 100%, merged to maker-mods"
      },
      {
        "root": "okc",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 23.5,
        "state": "MERGED",
        "reason": "foxi + okc co-occur 100%, merged to foxi-okc"
      },
      {
        "root": "da",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 20.2,
        "state": "MERGED",
        "reason": "da + huang co-occur 100%, merged to da-huang"
      },
      {
        "root": "huang",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 20.2,
        "state": "MERGED",
        "reason": "da + huang co-occur 100%, merged to da-huang"
      },
      {
        "root": "private",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 20.2,
        "state": "MERGED",
        "reason": "private + rooms co-occur 100%, merged to private-rooms-zecroom"
      },
      {
        "root": "rooms",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 20.2,
        "state": "MERGED",
        "reason": "private + rooms co-occur 100%, merged to private-rooms-zecroom"
      },
      {
        "root": "zecroom",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 20.2,
        "state": "MERGED",
        "reason": "private + rooms co-occur 100%, merged to private-rooms-zecroom"
      },
      {
        "root": "bird",
        "launches": 18,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 60.5,
        "state": "THIN",
        "reason": "bird: 4 deployers < 6 required"
      },
      {
        "root": "flu",
        "launches": 17,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 57.1,
        "state": "THIN",
        "reason": "flu: 3 deployers < 6 required"
      },
      {
        "root": "cow",
        "launches": 14,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 47,
        "state": "THIN",
        "reason": "cow: 4 deployers < 6 required"
      },
      {
        "root": "reward",
        "launches": 10,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 33.6,
        "state": "THIN",
        "reason": "reward: 4 deployers < 6 required"
      },
      {
        "root": "alandale",
        "launches": 7,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 23.5,
        "state": "THIN",
        "reason": "alandale: 2 deployers < 6 required"
      },
      {
        "root": "trader",
        "launches": 6,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 20.2,
        "state": "THIN",
        "reason": "trader: 5 deployers < 6 required"
      },
      {
        "root": "usdg",
        "launches": 6,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 20.2,
        "state": "THIN",
        "reason": "usdg: 5 deployers < 6 required"
      },
      {
        "root": "bf",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 16.8,
        "state": "THIN",
        "reason": "bf: 5 deployers < 6 required"
      },
      {
        "root": "brownfi",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 16.8,
        "state": "THIN",
        "reason": "brownfi: 5 deployers < 6 required"
      },
      {
        "root": "dog",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 16.8,
        "state": "THIN",
        "reason": "dog: 5 deployers < 6 required"
      },
      {
        "root": "etfpad",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 16.8,
        "state": "THIN",
        "reason": "etfpad: 5 deployers < 6 required"
      },
      {
        "root": "fomo",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 16.8,
        "state": "THIN",
        "reason": "fomo: 5 deployers < 6 required"
      },
      {
        "root": "genius",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.8,
        "state": "THIN",
        "reason": "genius: 3 deployers < 6 required"
      },
      {
        "root": "getrekt",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.8,
        "state": "THIN",
        "reason": "getrekt: 3 deployers < 6 required"
      }
    ],
    "recent": [
      {
        "address": "0x87870e53cb9cc2ba8e0272eecaf8e8501481280b",
        "name": "Da Huang",
        "symbol": "RHUBARB",
        "deployer": "0x915a861133b5b67b63db0143cef617012a39e0ff",
        "block": 67912845,
        "ts": "2026-09-20T11:45:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6163a62e1a09d5957cbe54dc33cf85a098b87777",
        "name": "FOMO CAT",
        "symbol": "FCAT",
        "deployer": "0x6f89ae73532fe185a4923c896184b25aec00e3c8",
        "block": 67912810,
        "ts": "2026-09-20T11:45:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x08dc1b886faa1132d947f9d79fbd28d1d5237777",
        "name": "JEVBIBI",
        "symbol": "BIBI",
        "deployer": "0x120bf8c773ace604ee50ec861fb45bd767bf7616",
        "block": 67912755,
        "ts": "2026-09-20T11:45:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6d226a5660c1d6312a038ae532fb2556c469d516",
        "name": "USDBT",
        "symbol": "USDBT",
        "deployer": "0xd1dd481c81d838c955a345b17e736ce28eb4acf2",
        "block": 67912646,
        "ts": "2026-09-20T11:45:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7f9899dd1c9fe1212b8014cf033559d56c3357e0",
        "name": "FOMO CAT",
        "symbol": "FCAT",
        "deployer": "0xb92e4886f169e6a3f2873ad46a1d75d6e0c5147e",
        "block": 67912596,
        "ts": "2026-09-20T11:44:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x95dbe65624a161b1a6a09a4458ef37db241a7777",
        "name": "Kiln",
        "symbol": "KILN",
        "deployer": "0xa407435e7a71f288ad65be7c64a863eb512742a1",
        "block": 67912486,
        "ts": "2026-09-20T11:44:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3b007a9d9b921257dfdeb2ffd0c75e94feebf832",
        "name": "ポッポ",
        "symbol": "Poppo",
        "deployer": "0x915a861133b5b67b63db0143cef617012a39e0ff",
        "block": 67912347,
        "ts": "2026-09-20T11:44:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x586840c70c476b891f9375db9386b5492f0919fa",
        "name": "zKult",
        "symbol": "zKULT",
        "deployer": "0xd1546ff96647bacf8868a1c6118a60b001fdffd8",
        "block": 67912296,
        "ts": "2026-09-20T11:44:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x14b5cff69a1f38e92125f067d44bd1f64f36e69f",
        "name": "NARRA",
        "symbol": "NARRA",
        "deployer": "0xb4545721a6dd8ad1bdf1087df8279f82d2cd9f3c",
        "block": 67912211,
        "ts": "2026-09-20T11:44:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7053b70609d7698fd2266ed9c0042b6db8314185",
        "name": "Фокси",
        "symbol": "Foxi",
        "deployer": "0x12a8e42b6f6c8539e477cdecea58c2c75c536fb0",
        "block": 67912190,
        "ts": "2026-09-20T11:44:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x109cb2b5bc5ef5d835feead6ee4bd1efe51dfa21",
        "name": "kiln",
        "symbol": "KILN",
        "deployer": "0xadb04a337712a59a0e8af7357e74a38a9403bff3",
        "block": 67912174,
        "ts": "2026-09-20T11:44:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xffbfefab0bacd54b43d55c6ab5c857e15572bece",
        "name": "TJR",
        "symbol": "TJR",
        "deployer": "0xbf12211b56214f868a9f9f7f6c80e4e538344ba9",
        "block": 67912148,
        "ts": "2026-09-20T11:44:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcf9931d54b92ca02ecd17f620fd5cedacd567a29",
        "name": "Фокси",
        "symbol": "Foxi",
        "deployer": "0x6fdaaa8edce9f08457a6f3dda559528d4bd94577",
        "block": 67912116,
        "ts": "2026-09-20T11:44:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbc1b1b56ad76dd84edfff0fa5fac76730bfe6d4f",
        "name": "Wick",
        "symbol": "WICK",
        "deployer": "0x5eee7443e621b43df422c2ad7698cf0a433ba7c5",
        "block": 67911921,
        "ts": "2026-09-20T11:43:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x522bf4b5c9280bb6bb719f2ce7f514dd63c8c0c5",
        "name": "Topaz CL Position",
        "symbol": "TOPAZ-CL-POS",
        "deployer": "0xe0bacfb317aa8a18a4c4a251c89e2832c9ab908a",
        "block": 67911676,
        "ts": "2026-09-20T11:43:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2f259280660becd2b406e0605de579d876f27777",
        "name": "Slim Dog Millionaire",
        "symbol": "SLIMDOG",
        "deployer": "0xa95d81bd107298c0f7fb681962ba7df30ce5942f",
        "block": 67911663,
        "ts": "2026-09-20T11:43:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xde2ec19800c273aadc2e93636e5fc96a964cdddc",
        "name": "Slim Dog Millionaire",
        "symbol": "SLIMDOG",
        "deployer": "0x4cb42c17c25abda82c110d649c93b9a1102a4042",
        "block": 67911488,
        "ts": "2026-09-20T11:43:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc1f2dc72becaceee94a33887a414b52384d51e18",
        "name": "STONKED",
        "symbol": "STONKED",
        "deployer": "0x7fcb105482d805faf1a5d775d53df483bfca7f7c",
        "block": 67911418,
        "ts": "2026-09-20T11:42:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf9b228ce8c1425f993172a69521576a19b7b1e18",
        "name": "Primitives",
        "symbol": "PRIMITIVES",
        "deployer": "0x181af0ff02bb1fab8823ab4f17862d99d23c5447",
        "block": 67911405,
        "ts": "2026-09-20T11:42:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x649027e9c09f337dc4ef69d25cdaa5d05ae57777",
        "name": "Tokenized Value",
        "symbol": "VALUE",
        "deployer": "0xd37b3817a7ce91524d577175565a610a7387c46c",
        "block": 67911363,
        "ts": "2026-09-20T11:42:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe46b262d85161adfcb8743b077e78750418cab6c",
        "name": "Tokenized Value",
        "symbol": "VALUE",
        "deployer": "0x319555bc59edb925cc5bf202ee7d7d12b7504cd8",
        "block": 67911239,
        "ts": "2026-09-20T11:42:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2a720871d4a47b74449ea16f5a261ada11537777",
        "name": "Goat BSC DOGE",
        "symbol": "DOGEB",
        "deployer": "0x6f89ae73532fe185a4923c896184b25aec00e3c8",
        "block": 67911212,
        "ts": "2026-09-20T11:42:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4cd6370a6ec852ec561b28404e1d52d84a0750da",
        "name": "Kiln",
        "symbol": "KILN",
        "deployer": "0x1d8ea36ae279fd286d8c33576ddd40ee7149cf05",
        "block": 67911172,
        "ts": "2026-09-20T11:42:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x320e8209773964e83f75809cb592a1f1268d9f57",
        "name": "ポッポ",
        "symbol": "Poppo",
        "deployer": "0xf4ab1ab0ee6f4a5c498e0678052ec21cdd1c1330",
        "block": 67910924,
        "ts": "2026-09-20T11:42:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd926ddc23503bd75d869f53cff4c4e04af9641e5",
        "name": "Useless Bankers",
        "symbol": "UB",
        "deployer": "0x40d7dfba6065ad1b43d901053c532f8ae1245bb4",
        "block": 67910923,
        "ts": "2026-09-20T11:42:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf5cc7e0f363c62915b1b29ee9fbb55fa0dae573e",
        "name": "SIM-DOP-mRBpac05VtnQ",
        "symbol": "SDPmRBpac",
        "deployer": "0x3ff6c8dcdc16ba6db7285464d83b340b9a26d22f",
        "block": 67910874,
        "ts": "2026-09-20T11:42:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x38296898bc304da2111c5f01ee1384ff3cf75b0d",
        "name": "Da Huang",
        "symbol": "大黄",
        "deployer": "0x0730afe50ef27ac58656fc55d1068eac59972bc8",
        "block": 67910872,
        "ts": "2026-09-20T11:42:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x62dbe4318db06e59deaf497bf50ec66b445e7777",
        "name": "1st JEVBOB Vault",
        "symbol": "JEVBOB",
        "deployer": "0x120bf8c773ace604ee50ec861fb45bd767bf7616",
        "block": 67910857,
        "ts": "2026-09-20T11:42:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcae2620034b84c51b65dd566fbcccac4299e7777",
        "name": "ポッポ",
        "symbol": "POPPO",
        "deployer": "0xa407435e7a71f288ad65be7c64a863eb512742a1",
        "block": 67910840,
        "ts": "2026-09-20T11:42:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7028cf583f9175c119a34071df919122bfbe6d66",
        "name": "Hooded Ape Club",
        "symbol": "HAC",
        "deployer": "0x6a55629bc5e8c95d0d1b59f25e832ca3ffdbe39f",
        "block": 67910758,
        "ts": "2026-09-20T11:41:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x26f6fbd1bf4a2ac879eeb88d40f2908db9910d2e",
        "name": "MothCard",
        "symbol": "MOTHCARD",
        "deployer": "0x5eee7443e621b43df422c2ad7698cf0a433ba7c5",
        "block": 67910727,
        "ts": "2026-09-20T11:41:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x98d06efb9efefa8592ee20dd5dd7f229bc226d37",
        "name": "Oshades",
        "symbol": "OSHADES",
        "deployer": "0x05c3be999e0570cfa3f8c9f96d8f4e603138987a",
        "block": 67910664,
        "ts": "2026-09-20T11:41:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x20f0a26a2e3b336834beae1d8133a44a4d4a9c12",
        "name": "Meddicc",
        "symbol": "MEDDICC",
        "deployer": "0x2a8766ca66472e7fad8359191cfb186c9433d200",
        "block": 67910629,
        "ts": "2026-09-20T11:41:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7738d3f1b5b1344e2bd45cba26d1e54b3d8ddc9a",
        "name": "LaunchOS",
        "symbol": "LOS",
        "deployer": "0x3f7d3cf468213f45f5f21798df724a764e997b04",
        "block": 67910533,
        "ts": "2026-09-20T11:41:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6069ee97b461c0f57e17afdba6f39c1c20a21e18",
        "name": "Ema",
        "symbol": "EMA",
        "deployer": "0x7fcb105482d805faf1a5d775d53df483bfca7f7c",
        "block": 67910251,
        "ts": "2026-09-20T11:41:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0304d820c0e2a904b91028f5e206c3b7f5a97777",
        "name": "Cat Rap",
        "symbol": "Cat Rap",
        "deployer": "0xa95d81bd107298c0f7fb681962ba7df30ce5942f",
        "block": 67910213,
        "ts": "2026-09-20T11:40:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xff4b77be2f2cc6fce01285353dbb851456bb1e18",
        "name": "Da Huang",
        "symbol": "RHUBARBCOIN",
        "deployer": "0x948d1eea3dbc7e893a571e51879ea5e35fba334e",
        "block": 67910087,
        "ts": "2026-09-20T11:40:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd5d2a36080e076fe2c0d006f458d16505dae1e18",
        "name": "Da Huang",
        "symbol": "DAHUANG",
        "deployer": "0x766797a964c3cc519bc915dbc952850af46da194",
        "block": 67910087,
        "ts": "2026-09-20T11:40:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe56a6119244b0640afe16f5643c6556234057777",
        "name": "MOONHOOD",
        "symbol": "MOONHOOD",
        "deployer": "0xd37b3817a7ce91524d577175565a610a7387c46c",
        "block": 67910082,
        "ts": "2026-09-20T11:40:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x58c248d031b8d2080e26781be37d34df83567777",
        "name": "Hinkali",
        "symbol": "HINKALI",
        "deployer": "0x6f89ae73532fe185a4923c896184b25aec00e3c8",
        "block": 67910003,
        "ts": "2026-09-20T11:40:36.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
