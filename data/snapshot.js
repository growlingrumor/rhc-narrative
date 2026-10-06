/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-06T23:11:11.000Z",
    "opened_at": "2026-10-06T22:11:11.000Z",
    "window_hours": 1,
    "head_block": 82007863,
    "start_block": 81972844,
    "blocks_scanned": 35019,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 544,
    "unnamed_contracts": 0,
    "via_factory": 523,
    "no_receipt": 0,
    "candidates": 544,
    "mint_events": 29200,
    "deployers": 360,
    "roots": 798,
    "cleared_multiple": 178,
    "failed_gates": 170,
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
      "auton",
      "nft",
      "positions",
      "robinhood",
      "uniswap-uni",
      "usdg"
    ],
    "top": {
      "root": "auton",
      "launches": 13,
      "deployers": 13,
      "baseline_share": 0.0004,
      "multiple": 59.7,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "auton",
        "launches": 13,
        "deployers": 13,
        "baseline_share": 0.0004,
        "multiple": 59.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "robinhood",
        "launches": 10,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 46,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "agent",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 32.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nft",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 32.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 27.6,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 27.6,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 46,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 80%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 36.8,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 80%, merged to uniswap-uni"
      },
      {
        "root": "higgs",
        "launches": 6,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 27.6,
        "state": "THIN",
        "reason": "higgs: 5 deployers < 6 required"
      },
      {
        "root": "ramses",
        "launches": 6,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 27.6,
        "state": "THIN",
        "reason": "ramses: 2 deployers < 6 required"
      },
      {
        "root": "volatile",
        "launches": 6,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 27.6,
        "state": "THIN",
        "reason": "volatile: 2 deployers < 6 required"
      },
      {
        "root": "blast",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 23,
        "state": "THIN",
        "reason": "blast: 5 deployers < 6 required"
      },
      {
        "root": "bucket",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 23,
        "state": "THIN",
        "reason": "bucket: 1 deployers < 6 required"
      },
      {
        "root": "cat",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 23,
        "state": "THIN",
        "reason": "cat: 5 deployers < 6 required"
      },
      {
        "root": "fake",
        "launches": 5,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 23,
        "state": "THIN",
        "reason": "fake: 2 deployers < 6 required"
      },
      {
        "root": "runner",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 23,
        "state": "THIN",
        "reason": "runner: 5 deployers < 6 required"
      },
      {
        "root": "ai",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 18.4,
        "state": "THIN",
        "reason": "ai: 4 launches < 5 required"
      },
      {
        "root": "cow",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 18.4,
        "state": "THIN",
        "reason": "cow: 4 launches < 5 required"
      },
      {
        "root": "digital",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 18.4,
        "state": "THIN",
        "reason": "digital: 4 launches < 5 required"
      },
      {
        "root": "don",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 18.4,
        "state": "THIN",
        "reason": "don: 4 launches < 5 required"
      },
      {
        "root": "give",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 18.4,
        "state": "THIN",
        "reason": "give: 4 launches < 5 required"
      },
      {
        "root": "gods",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 18.4,
        "state": "THIN",
        "reason": "gods: 4 launches < 5 required"
      },
      {
        "root": "hood",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 18.4,
        "state": "THIN",
        "reason": "hood: 4 launches < 5 required"
      },
      {
        "root": "last",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 18.4,
        "state": "THIN",
        "reason": "last: 4 launches < 5 required"
      },
      {
        "root": "launchpad",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 18.4,
        "state": "THIN",
        "reason": "launchpad: 4 launches < 5 required"
      },
      {
        "root": "loot",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 18.4,
        "state": "THIN",
        "reason": "loot: 4 launches < 5 required"
      },
      {
        "root": "maze",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 18.4,
        "state": "THIN",
        "reason": "maze: 4 launches < 5 required"
      },
      {
        "root": "tech",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 18.4,
        "state": "THIN",
        "reason": "tech: 4 launches < 5 required"
      },
      {
        "root": "trading",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 18.4,
        "state": "THIN",
        "reason": "trading: 4 launches < 5 required"
      },
      {
        "root": "arcus",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 13.8,
        "state": "THIN",
        "reason": "arcus: 3 launches < 5 required"
      },
      {
        "root": "asteroid",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 13.8,
        "state": "THIN",
        "reason": "asteroid: 3 launches < 5 required"
      },
      {
        "root": "boilerroom",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 13.8,
        "state": "THIN",
        "reason": "boilerroom: 3 launches < 5 required"
      },
      {
        "root": "boilr",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 13.8,
        "state": "THIN",
        "reason": "boilr: 3 launches < 5 required"
      },
      {
        "root": "cabal",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 13.8,
        "state": "THIN",
        "reason": "cabal: 3 launches < 5 required"
      },
      {
        "root": "cards",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 13.8,
        "state": "THIN",
        "reason": "cards: 3 launches < 5 required"
      },
      {
        "root": "condo",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 13.8,
        "state": "THIN",
        "reason": "condo: 3 launches < 5 required"
      },
      {
        "root": "dance",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 13.8,
        "state": "THIN",
        "reason": "dance: 3 launches < 5 required"
      },
      {
        "root": "dog",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 13.8,
        "state": "THIN",
        "reason": "dog: 3 launches < 5 required"
      },
      {
        "root": "dot",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 13.8,
        "state": "THIN",
        "reason": "dot: 3 launches < 5 required"
      },
      {
        "root": "forge",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 13.8,
        "state": "THIN",
        "reason": "forge: 3 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x73376186bc9aa4081fda022f6636052c13410e55",
        "name": "BREEZE",
        "symbol": "BRZ",
        "deployer": "0xf43bc9019c620c7eb82b43ada900cb7f535c58c2",
        "block": 82007833,
        "ts": "2026-10-06T23:11:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3e2935f628c550e8ecbd09812350cfdf7c3523ad",
        "name": "Lotbook",
        "symbol": "LOTB",
        "deployer": "0x47bf9f30d8a8e5e32168e42f6587ec966efd4e39",
        "block": 82007809,
        "ts": "2026-10-06T23:11:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x599ac767099bb6f01712867bfa1fc1aa27defd37",
        "name": "Cow Up33 Robinhood USDG-INTC",
        "symbol": "cowUp33RobinhoodUSDG-INTC",
        "deployer": "0x03d9964f4d93a24b58c0fc3a8df3474b59ba8557",
        "block": 82007746,
        "ts": "2026-10-06T23:10:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0e7fb97a89b20a682521c5d29868e50a7b693979",
        "name": "Reward Cow Up33 Robinhood USDG-INTC",
        "symbol": "rcowUp33RobinhoodUSDG-INTC",
        "deployer": "0x03d9964f4d93a24b58c0fc3a8df3474b59ba8557",
        "block": 82007746,
        "ts": "2026-10-06T23:10:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfa4a7fa073a8a316ec9e82d34684b98476a97777",
        "name": "Vision Quest Trading",
        "symbol": "VISION",
        "deployer": "0xea5c98a6164850f6ace669bd753de6928881b65e",
        "block": 82007671,
        "ts": "2026-10-06T23:10:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfdf9857c767a97013b428bf3e6a1d66c527ae8dd",
        "name": "ZOKO",
        "symbol": "LOOO",
        "deployer": "0xc1b1efcb6f1e163883581cdd5ecc55d498c791df",
        "block": 82007630,
        "ts": "2026-10-06T23:10:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4209f5129e4a21e5e18e9d03287b6a485cd71e18",
        "name": "3SUM",
        "symbol": "THUM",
        "deployer": "0x32a99d789956c77925febeb93515b1b9d837c939",
        "block": 82007618,
        "ts": "2026-10-06T23:10:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x338d321c876b84883a97ee0a22692830bd0b1308",
        "name": "ONLYSTRATEGY",
        "symbol": "ONLYSTRATE",
        "deployer": "0x24de7d4ce0109de992a95c692ce74b879d0cfbb4",
        "block": 82007599,
        "ts": "2026-10-06T23:10:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd4de9c3eba90319fd52ba9dc71ba8832d39c1e18",
        "name": "3SUM",
        "symbol": "THREESUM",
        "deployer": "0xa9d08bfc9dcb8160c4939a182a3ab53a6160f1d7",
        "block": 82007590,
        "ts": "2026-10-06T23:10:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x61ac99ac4fe48523cbe83049c3152bde59621e18",
        "name": "THREESOME",
        "symbol": "THREESOME",
        "deployer": "0xdadca49e762abb5c904223d73388eb9dcceba21c",
        "block": 82007521,
        "ts": "2026-10-06T23:10:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcf5b6103eaab374d02ae24dcd492ff8bca2872be",
        "name": "LUSCA",
        "symbol": "LUSCA",
        "deployer": "0x43370308b53e3611521ba48e2f7632a5644d7b1f",
        "block": 82007519,
        "ts": "2026-10-06T23:10:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x137731b8b2d7cd24ab4a4a9061f2d7b4fd1abfee",
        "name": "Cow Up33 Robinhood CASHCAT-WETH",
        "symbol": "cowUp33RobinhoodCASHCAT-WETH",
        "deployer": "0x03d9964f4d93a24b58c0fc3a8df3474b59ba8557",
        "block": 82007446,
        "ts": "2026-10-06T23:10:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3b2162ea5c3f6f20eb05818f40d54857d1aa3b45",
        "name": "Reward Cow Up33 Robinhood CASHCAT-WETH",
        "symbol": "rcowUp33RobinhoodCASHCAT-WETH",
        "deployer": "0x03d9964f4d93a24b58c0fc3a8df3474b59ba8557",
        "block": 82007446,
        "ts": "2026-10-06T23:10:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x78bed78f8ac5bec51378f0caea9e987135258868",
        "name": "Vision Quest Trading",
        "symbol": "VISION",
        "deployer": "0x131baab18d8393e83d1d4753b69fcd6a8821722b",
        "block": 82007301,
        "ts": "2026-10-06T23:10:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x27cc558c914cc4b3f24082579f9f35f8660e61ae",
        "name": "MINT",
        "symbol": "MNTD",
        "deployer": "0xce74303f6c81da54cffb04b3931ca15140e1e529",
        "block": 82007179,
        "ts": "2026-10-06T23:10:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1f61b7f61871de25e0cc1840cfc195eff9a94f09",
        "name": "Squirtward",
        "symbol": "SQUIRT",
        "deployer": "0x43370188473a398394e4ba4a7c7cbb2c6265e22a",
        "block": 82007042,
        "ts": "2026-10-06T23:09:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0b3caff2c1b9b6b55fe9572a7bf4d455bcd438d2",
        "name": "WizCat in The Hood",
        "symbol": "WIZHOOD",
        "deployer": "0x4199e3a1d5971283f1863e0af6ba8c50d64bf173",
        "block": 82007039,
        "ts": "2026-10-06T23:09:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5c6c43920fa7ba2d0de2598991304e453855b650",
        "name": "vWizCat in The Hood",
        "symbol": "vWIZHOOD",
        "deployer": "0x4199e3a1d5971283f1863e0af6ba8c50d64bf173",
        "block": 82007039,
        "ts": "2026-10-06T23:09:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc9b723cd1778a54bbe2e220217190f490f5a7088",
        "name": "Staccpad Locked LP",
        "symbol": "stLOCK",
        "deployer": "0x4199e3a1d5971283f1863e0af6ba8c50d64bf173",
        "block": 82007039,
        "ts": "2026-10-06T23:09:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa3af0f9fb9d5e378694760624b9ba63d7e637777",
        "name": "The Surrendering Kid",
        "symbol": "HUDEA",
        "deployer": "0x21853863aeec000ebfa52e46b366fdf2ac02ca6b",
        "block": 82007038,
        "ts": "2026-10-06T23:09:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x04f936ac3b7c966c9e4510dd06cc73a1607e1e18",
        "name": "Explosion Cat",
        "symbol": "ECAT",
        "deployer": "0x792dd4c93cfa919e141e6a0be37360373633cdad",
        "block": 82007008,
        "ts": "2026-10-06T23:09:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfce6b6a708a905206b6d4315d548f2159ea91e18",
        "name": "3SUM",
        "symbol": "TSUM",
        "deployer": "0xa9d08bfc9dcb8160c4939a182a3ab53a6160f1d7",
        "block": 82006638,
        "ts": "2026-10-06T23:09:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x33ce03924e89318e2ee3fa7fabad4e50188dd431",
        "name": "Maze Runner",
        "symbol": "MAZE",
        "deployer": "0x06cb3a6841c92525e7a1998328e7c9d37e98d937",
        "block": 82006362,
        "ts": "2026-10-06T23:08:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x62717f6edf22c84493f3ee80b685646573bd4b0f",
        "name": "agencybook",
        "symbol": "AGENCYBOOK",
        "deployer": "0x43375c62236bc5524b02d388baaadc5bb5f56168",
        "block": 82006229,
        "ts": "2026-10-06T23:08:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x953d2e0f44b77468d8dd19778434a740b831d49f",
        "name": "Orbiore",
        "symbol": "ORBIORE",
        "deployer": "0x759e881c23e343a3cf6fe6f513b113deb8eec32e",
        "block": 82006169,
        "ts": "2026-10-06T23:08:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2bd3f9908045751ddbeadc203dc1fa5c8ac8156c",
        "name": "Sports",
        "symbol": "SPORTS",
        "deployer": "0xf22e13f4fecf19c17cd142b58a3ed3fbfc361ff5",
        "block": 82006128,
        "ts": "2026-10-06T23:08:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfeff8e25320f05359f586c14e14e3d5bc5f07777",
        "name": "Dot Cat",
        "symbol": "DOTCAT",
        "deployer": "0xf9ac13f507c844ea17312bf9fa87685548d958e7",
        "block": 82006117,
        "ts": "2026-10-06T23:08:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xaa404c00af656bbca7435bc76f31e8fa789b1e1a",
        "name": "blast",
        "symbol": "blast",
        "deployer": "0x950c7d71d6e4ab153b29d5e491cd9c9ffeb3822e",
        "block": 82006086,
        "ts": "2026-10-06T23:08:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbb1e5a77d03fddd253332d12d6a6a8645ae09b9b",
        "name": "T-OpenAI",
        "symbol": "tOpenAI",
        "deployer": "0x5fe2c33c6661f40fe419691705b773ee81b8a979",
        "block": 82006068,
        "ts": "2026-10-06T23:08:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x860e670efa34db76b95e4d2c7b8c8bd3b428513c",
        "name": "auton",
        "symbol": "AUTON",
        "deployer": "0x28b20b2ec02303a03ade4fb0067b9e94e1b73e64",
        "block": 82006041,
        "ts": "2026-10-06T23:08:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xaf8233a8556d145df0c830d6e427bbf9186d2c87",
        "name": "Tuna Kitties",
        "symbol": "TUNAKITTY",
        "deployer": "0x2858e8628327ab695bb751a328cfb3d5dfd762f4",
        "block": 82006024,
        "ts": "2026-10-06T23:08:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd2c757bc870b0f95c3f9d047e815b32d070f7777",
        "name": "Dot Cat",
        "symbol": "DOTCAT",
        "deployer": "0x980b9bb5b3163638e0a35f8f26ff40547b16e2a9",
        "block": 82005869,
        "ts": "2026-10-06T23:07:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbf3f2fe0203dc171aba3c40c0c2310599f4a1e18",
        "name": "Quasi-Riemann Hypothesis",
        "symbol": "RIEMAN",
        "deployer": "0xa9d08bfc9dcb8160c4939a182a3ab53a6160f1d7",
        "block": 82005853,
        "ts": "2026-10-06T23:07:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3302736cb9750220424c68fbc67542582117e95e",
        "name": "RocketBucket",
        "symbol": "RBKT",
        "deployer": "0x2ccc152ad68419f777531e6a40a52325e2a80ee2",
        "block": 82005781,
        "ts": "2026-10-06T23:07:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x36ed0cc3df5e60463a55f6b2f8391d5e6709af67",
        "name": "Lexplio Agent",
        "symbol": "LEX",
        "deployer": "0x46766c89c787e705f170fb7b1917dbf0216d8290",
        "block": 82005644,
        "ts": "2026-10-06T23:07:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfc997098de08a09b8cf18acd54413e3dd0f1d292",
        "name": "Wen Lambo",
        "symbol": "LAMBO",
        "deployer": "0x4337005db25dbad41da5692ba1188751ee5d98b6",
        "block": 82005626,
        "ts": "2026-10-06T23:07:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4390bce55bbbacc9f557594ad3cc8e72d28c1e18",
        "name": "Jumpcat",
        "symbol": "JUMPCAT",
        "deployer": "0x7de5b9c86d2b47607a2962043bb165f7befeb06b",
        "block": 82005624,
        "ts": "2026-10-06T23:07:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x483beb142f7ad395298bc4bbc6c7353652ef8a47",
        "name": "AUDIT_ROBIN_20261007",
        "symbol": "ARCAT",
        "deployer": "0x2ee9c5f1ee8b359b57c76f8550ff60ccabf896f2",
        "block": 82005573,
        "ts": "2026-10-06T23:07:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb4aae11188ffe00318d2fa71ff36666639229e22",
        "name": "Lotbook Test",
        "symbol": "LTEST",
        "deployer": "0x081d1bd094ff73d62c0a7ca366a3e296962fa427",
        "block": 82005534,
        "ts": "2026-10-06T23:07:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0f34f874e17186fc2a4a7d9386d1b6aeb6745955",
        "name": "Biteful",
        "symbol": "BITEFL",
        "deployer": "0x6c14a5c37b50cdaf935b06fce40edaa53504a1ea",
        "block": 82005446,
        "ts": "2026-10-06T23:07:02.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
