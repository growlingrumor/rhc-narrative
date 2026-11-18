/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-18T18:15:01.000Z",
    "opened_at": "2026-11-18T17:15:01.000Z",
    "window_hours": 1,
    "head_block": 117600354,
    "start_block": 117565129,
    "blocks_scanned": 35225,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 450,
    "unnamed_contracts": 1,
    "via_factory": 418,
    "no_receipt": 0,
    "candidates": 451,
    "mint_events": 21842,
    "deployers": 264,
    "roots": 560,
    "cleared_multiple": 52,
    "failed_gates": 43,
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
      "apcy",
      "apocrycoin",
      "dacitycoin-dcty",
      "grand-auto",
      "gta",
      "meow",
      "theft"
    ],
    "top": {
      "root": "meow",
      "launches": 20,
      "deployers": 20,
      "baseline_share": 0.0004,
      "multiple": 111.1,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "meow",
        "launches": 20,
        "deployers": 20,
        "baseline_share": 0.0004,
        "multiple": 111.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "apocrycoin",
        "launches": 19,
        "deployers": 19,
        "baseline_share": 0.0004,
        "multiple": 105.6,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "apcy",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 61.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "gta",
        "launches": 10,
        "deployers": 8,
        "baseline_share": 0.0016,
        "multiple": 13.9,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "theft",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0013,
        "multiple": 12,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "dacitycoin",
        "launches": 26,
        "deployers": 24,
        "baseline_share": 0.0004,
        "multiple": 144.4,
        "state": "MERGED",
        "reason": "dacitycoin + dcty co-occur 82%, merged to dacitycoin-dcty"
      },
      {
        "root": "dcty",
        "launches": 25,
        "deployers": 23,
        "baseline_share": 0.0004,
        "multiple": 138.9,
        "state": "MERGED",
        "reason": "dacitycoin + dcty co-occur 82%, merged to dacitycoin-dcty"
      },
      {
        "root": "grand",
        "launches": 12,
        "deployers": 11,
        "baseline_share": 0.0012,
        "multiple": 22.2,
        "state": "MERGED",
        "reason": "grand + auto co-occur 77%, merged to grand-auto"
      },
      {
        "root": "auto",
        "launches": 11,
        "deployers": 10,
        "baseline_share": 0.0015,
        "multiple": 16.3,
        "state": "MERGED",
        "reason": "grand + auto co-occur 77%, merged to grand-auto"
      },
      {
        "root": "robinhood",
        "launches": 33,
        "deployers": 14,
        "baseline_share": 0.0513,
        "multiple": 1.4,
        "state": "BELOW",
        "reason": "robinhood: 1.4x over baseline < 6.0x required"
      },
      {
        "root": "uniswap",
        "launches": 26,
        "deployers": 17,
        "baseline_share": 0.0509,
        "multiple": 1.1,
        "state": "BELOW",
        "reason": "uniswap: 1.1x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 22,
        "deployers": 14,
        "baseline_share": 0.0424,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "uni: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "cow",
        "launches": 14,
        "deployers": 3,
        "baseline_share": 0.0072,
        "multiple": 4.3,
        "state": "BELOW",
        "reason": "cow: 4.3x over baseline < 6.0x required"
      },
      {
        "root": "game",
        "launches": 11,
        "deployers": 2,
        "baseline_share": 0.0005,
        "multiple": 48.9,
        "state": "THIN",
        "reason": "game: 2 deployers < 6 required"
      },
      {
        "root": "usdg",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0203,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "usdg: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "bond",
        "launches": 10,
        "deployers": 1,
        "baseline_share": 0.0008,
        "multiple": 27.8,
        "state": "THIN",
        "reason": "bond: 1 deployers < 6 required"
      },
      {
        "root": "aero",
        "launches": 9,
        "deployers": 4,
        "baseline_share": 0.0056,
        "multiple": 3.6,
        "state": "BELOW",
        "reason": "aero: 3.6x over baseline < 6.0x required"
      },
      {
        "root": "reward",
        "launches": 7,
        "deployers": 3,
        "baseline_share": 0.0037,
        "multiple": 4.2,
        "state": "BELOW",
        "reason": "reward: 4.2x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0167,
        "multiple": 0.8,
        "state": "BELOW",
        "reason": "positions: 0.8x over baseline < 6.0x required"
      },
      {
        "root": "layerbank",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0053,
        "multiple": 2.1,
        "state": "BELOW",
        "reason": "layerbank: 2.1x over baseline < 6.0x required"
      },
      {
        "root": "staked",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0069,
        "multiple": 1.6,
        "state": "BELOW",
        "reason": "staked: 1.6x over baseline < 6.0x required"
      },
      {
        "root": "nft",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0201,
        "multiple": 0.6,
        "state": "BELOW",
        "reason": "nft: 0.6x over baseline < 6.0x required"
      },
      {
        "root": "audacity",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 22.2,
        "state": "THIN",
        "reason": "audacity: 4 launches < 5 required"
      },
      {
        "root": "lucia",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 22.2,
        "state": "THIN",
        "reason": "lucia: 4 launches < 5 required"
      },
      {
        "root": "shibo",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 22.2,
        "state": "THIN",
        "reason": "shibo: 4 launches < 5 required"
      },
      {
        "root": "shibocoin",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 22.2,
        "state": "THIN",
        "reason": "shibocoin: 4 launches < 5 required"
      },
      {
        "root": "tenev",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 22.2,
        "state": "THIN",
        "reason": "tenev: 4 launches < 5 required"
      },
      {
        "root": "earth",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0005,
        "multiple": 17.8,
        "state": "THIN",
        "reason": "earth: 4 launches < 5 required"
      },
      {
        "root": "nvda",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0024,
        "multiple": 3.7,
        "state": "BELOW",
        "reason": "nvda: 3.7x over baseline < 6.0x required"
      },
      {
        "root": "brownfi",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0025,
        "multiple": 3.6,
        "state": "BELOW",
        "reason": "brownfi: 3.6x over baseline < 6.0x required"
      },
      {
        "root": "bf",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0027,
        "multiple": 3.3,
        "state": "BELOW",
        "reason": "bf: 3.3x over baseline < 6.0x required"
      },
      {
        "root": "digital",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0034,
        "multiple": 2.6,
        "state": "BELOW",
        "reason": "digital: 2.6x over baseline < 6.0x required"
      },
      {
        "root": "inc",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0057,
        "multiple": 1.6,
        "state": "BELOW",
        "reason": "inc: 1.6x over baseline < 6.0x required"
      },
      {
        "root": "amm",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0062,
        "multiple": 1.4,
        "state": "BELOW",
        "reason": "amm: 1.4x over baseline < 6.0x required"
      },
      {
        "root": "weth",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0073,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "weth: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "booty",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.7,
        "state": "THIN",
        "reason": "booty: 3 launches < 5 required"
      },
      {
        "root": "born",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.7,
        "state": "THIN",
        "reason": "born: 3 launches < 5 required"
      },
      {
        "root": "goon",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.7,
        "state": "THIN",
        "reason": "goon: 3 launches < 5 required"
      },
      {
        "root": "chaingreets",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0009,
        "multiple": 7.4,
        "state": "THIN",
        "reason": "chaingreets: 3 launches < 5 required"
      },
      {
        "root": "alandale",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0032,
        "multiple": 2.1,
        "state": "BELOW",
        "reason": "alandale: 2.1x over baseline < 6.0x required"
      }
    ],
    "recent": [
      {
        "address": "0x99c4f70bb81c04e4224a9d23300883db9a33f94c",
        "name": "TOMMY",
        "symbol": "TOMMY",
        "deployer": "0x4337005db25dbad41da5692ba1188751ee5d98b6",
        "block": 117600354,
        "ts": "2026-11-18T18:15:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb633448c2cd24600c4dbcd6cd4fe3fdc373a1e18",
        "name": "UNCLE JACKS LOYALTY CHIP",
        "symbol": "LOYALTY",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 117600290,
        "ts": "2026-11-18T18:14:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x25bbc9cdac1cc4771225eeced6e6b6783e9e522b",
        "name": "Meow",
        "symbol": "ROBINCAT",
        "deployer": "0x91879327ee68a6da0f5ef689c91b26f750cf41d8",
        "block": 117600259,
        "ts": "2026-11-18T18:14:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x505f509971feeec47d62781e3a9498aa17279363",
        "name": "Legendary Crowd",
        "symbol": "CROWD",
        "deployer": "0xdeaa8cdd281f2574c68ce8f4eeb29ab95ec38faf",
        "block": 117600191,
        "ts": "2026-11-18T18:14:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa6193651b28155023b31151d8603aa3b6809bf3a",
        "name": "Cow Aero NVDA-USDG",
        "symbol": "cowAeroNVDA-USDG",
        "deployer": "0x03d9964f4d93a24b58c0fc3a8df3474b59ba8557",
        "block": 117599753,
        "ts": "2026-11-18T18:13:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe4b6264ed8f2265b384dbaae11e8cad6c4eab26b",
        "name": "Reward Cow Aero NVDA-USDG",
        "symbol": "rcowAeroNVDA-USDG",
        "deployer": "0x03d9964f4d93a24b58c0fc3a8df3474b59ba8557",
        "block": 117599753,
        "ts": "2026-11-18T18:13:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x188ce4d1259aae719478e0361ffe856695f8c937",
        "name": "Crimecat",
        "symbol": "CRIMECAT",
        "deployer": "0x4337001fff419768e088ce247456c1b892888084",
        "block": 117599594,
        "ts": "2026-11-18T18:13:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0fc76c202ca9cc9fee8170765383e39f76ae2489",
        "name": "HODL",
        "symbol": "HODLE",
        "deployer": "0x58529a4a3917d0e95b86d6feacd1da783933510e",
        "block": 117599543,
        "ts": "2026-11-18T18:13:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x27312c80d6acfb89e2d7321911d91f6283352ee9",
        "name": "Lumina Beetle Rangers",
        "symbol": "LBR",
        "deployer": "0x0ec4e45f9ce3020024c0418a74cd31fbc487038f",
        "block": 117599532,
        "ts": "2026-11-18T18:13:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbc712b9726e6346e9c700df14b2a6a558efd222a",
        "name": "Cow Alandale Robinhood USDG-NET",
        "symbol": "cowAlandaleRobinhoodUSDG-NET",
        "deployer": "0x03d9964f4d93a24b58c0fc3a8df3474b59ba8557",
        "block": 117599453,
        "ts": "2026-11-18T18:13:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa9d7dad97aabee16252d71c699892be8a9cb8853",
        "name": "Reward Cow Alandale Robinhood USDG-NET",
        "symbol": "rcowAlandaleRobinhoodUSDG-NET",
        "deployer": "0x03d9964f4d93a24b58c0fc3a8df3474b59ba8557",
        "block": 117599453,
        "ts": "2026-11-18T18:13:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0a4be7073bc336e451082502d768e8d644ca780c",
        "name": "Goldstein Global AI Leaders",
        "symbol": "gAIX",
        "deployer": "0x4f5afc62098c36e6d8d018f26f8f6785bba4dbd3",
        "block": 117599414,
        "ts": "2026-11-18T18:13:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9286d5939f92254925d5849e1ce97cb5f97783e7",
        "name": "LayerBank Robinhood NVDA",
        "symbol": "lRobNVDA",
        "deployer": "0xd17831fbb0005788161b65f63ce97a509b9fb1b5",
        "block": 117599350,
        "ts": "2026-11-18T18:13:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x63185da98b76e7fa49d5d0611a6e211ee2988201",
        "name": "Cow Up33 Robinhood USDG-NVDA",
        "symbol": "cowUp33RobinhoodUSDG-NVDA",
        "deployer": "0x03d9964f4d93a24b58c0fc3a8df3474b59ba8557",
        "block": 117599155,
        "ts": "2026-11-18T18:12:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6485817467fd2129622e57b20577cf2697f3dde2",
        "name": "Reward Cow Up33 Robinhood USDG-NVDA",
        "symbol": "rcowUp33RobinhoodUSDG-NVDA",
        "deployer": "0x03d9964f4d93a24b58c0fc3a8df3474b59ba8557",
        "block": 117599155,
        "ts": "2026-11-18T18:12:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2711fa6ca5ab874bfc0484e9597d74123bc2cd1a",
        "name": "GROWBLOCKS GP Helmets",
        "symbol": "GBGPHELMET",
        "deployer": "0x62c749fcff5ab757ea3010a919d1ae0b30759650",
        "block": 117599064,
        "ts": "2026-11-18T18:12:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa154ba358b78099d865d2ce438d92ee7427d6fa2",
        "name": "Strip Club",
        "symbol": "CLUB",
        "deployer": "0x4337004ec9c1417f1c7a26ebd4b4fbed6acf9e5d",
        "block": 117599029,
        "ts": "2026-11-18T18:12:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1dc94451241960e9f5197995aa89ca72fc3e68cc",
        "name": "SwapHood Token",
        "symbol": "SWT",
        "deployer": "0xf0897d5a5d4b959d189a791a574aae5a09e1af0d",
        "block": 117598944,
        "ts": "2026-11-18T18:12:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x80eb42347d7e1d581ce720e1731ae55881667777",
        "name": "ShiboCoin",
        "symbol": "SHIBO",
        "deployer": "0x7f71e0dc8d14678886eb592beb2c6d527c5da285",
        "block": 117598871,
        "ts": "2026-11-18T18:12:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x36759534741e28eb052238738963d684bfe719e4",
        "name": "Cow Up33 Robinhood WETH-UP",
        "symbol": "cowUp33RobinhoodWETH-UP",
        "deployer": "0x03d9964f4d93a24b58c0fc3a8df3474b59ba8557",
        "block": 117598855,
        "ts": "2026-11-18T18:12:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcc3db04bb136a34e8569c1eff2ab19e3fa915d48",
        "name": "Reward Cow Up33 Robinhood WETH-UP",
        "symbol": "rcowUp33RobinhoodWETH-UP",
        "deployer": "0x03d9964f4d93a24b58c0fc3a8df3474b59ba8557",
        "block": 117598855,
        "ts": "2026-11-18T18:12:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6d2bb09b5d33f3236d68ef91532295c96c48aa6c",
        "name": "GRAND TRUMP AUTO",
        "symbol": "GTA",
        "deployer": "0x77f975956c3e015b6dbd2d61cd1cd63aeda06d9a",
        "block": 117598845,
        "ts": "2026-11-18T18:12:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9e04a1991c0a828ca5aee91b9c9a276868e53d5d",
        "name": "Cow Aero AMD-USDG",
        "symbol": "cowAeroAMD-USDG",
        "deployer": "0x03d9964f4d93a24b58c0fc3a8df3474b59ba8557",
        "block": 117598545,
        "ts": "2026-11-18T18:11:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1cca680dc620737ef43b0ddcfc529d0f1e3bec01",
        "name": "Reward Cow Aero AMD-USDG",
        "symbol": "rcowAeroAMD-USDG",
        "deployer": "0x03d9964f4d93a24b58c0fc3a8df3474b59ba8557",
        "block": 117598545,
        "ts": "2026-11-18T18:11:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6330d8c3178a418788df01a47479c0ce7ccf450b",
        "name": "Coinbase • Robinhood Token",
        "symbol": "COIN",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 117598475,
        "ts": "2026-11-18T18:11:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x78990c0668f7f3a57277cab81496b97b4f2d47c1",
        "name": "PLANKTON RH",
        "symbol": "PLANK",
        "deployer": "0x4afcc752134a2795f77112975a40a0c0ec4fbbf4",
        "block": 117598330,
        "ts": "2026-11-18T18:11:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x41958ce08e0ac8481a39031605ca18ebda24a8d6",
        "name": "DacityCoin",
        "symbol": "DCTY",
        "deployer": "0x10de8ec232e43c027d36107f13de6201356df70c",
        "block": 117598270,
        "ts": "2026-11-18T18:11:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x95023479628468760758d15d49464c2e759b4ba0",
        "name": "Crimecoin",
        "symbol": "CRIME",
        "deployer": "0x4337001fff419768e088ce247456c1b892888084",
        "block": 117598216,
        "ts": "2026-11-18T18:11:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2b29048c77fea3960857d1cbbd86c7977272ca6e",
        "name": "Apocrycoin",
        "symbol": "APCY",
        "deployer": "0x36bdada73252248c4fc5f017df985412d3001074",
        "block": 117597981,
        "ts": "2026-11-18T18:11:00.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xb334c79de80de8b892c632d2a4f4873db18a8e44",
        "name": "Meow",
        "symbol": "MEOW",
        "deployer": "0xea209a4a5de9a8449a666c5f9fa43be7181600a9",
        "block": 117597858,
        "ts": "2026-11-18T18:10:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xafdd622ae729dca8dfc52d415b85af18e9fa8339",
        "name": "CALLZ",
        "symbol": "CALLZ",
        "deployer": "0x018eda4ef0532b105957422626d8c82fde2b01bb",
        "block": 117597828,
        "ts": "2026-11-18T18:10:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe6b17353ff24abc55c28c41ef267dea2b749393e",
        "name": "DacityCoin",
        "symbol": "DCTY",
        "deployer": "0xff6cbbe75d4c5f98747e4e22c99064435e919e94",
        "block": 117597790,
        "ts": "2026-11-18T18:10:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa30af6d14d8da55b1c0fe38fee1e6f91263f9eb4",
        "name": "Wrapped Workday • Robinhood Token",
        "symbol": "wWDAY",
        "deployer": "0xcd6d31bd8fb8e4100b9cb916cd9a92d884f58355",
        "block": 117597679,
        "ts": "2026-11-18T18:10:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x79cfa605470b2303a83780f73ce6bf9be68a7777",
        "name": "ShiboCoin",
        "symbol": "SHIBO",
        "deployer": "0x4595ebf701c2d9870b2e6fa4108e14027c61145b",
        "block": 117597629,
        "ts": "2026-11-18T18:10:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8584c253e9678fc8d23dfef5fbd0113fd6ae0087",
        "name": "TuNN",
        "symbol": "TUNN",
        "deployer": "0xd4875af0ae4491868c1ad20c752232a6b54a3568",
        "block": 117597512,
        "ts": "2026-11-18T18:10:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfba0b04695f4c4f497c7f2badc505b32623f1e18",
        "name": "Strip Club",
        "symbol": "CLUB",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 117597510,
        "ts": "2026-11-18T18:10:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x42e08f62ed4464ecade5c62642f6c6c7d711975c",
        "name": "gpay",
        "symbol": "GPAY",
        "deployer": "0x4337001fff419768e088ce247456c1b892888084",
        "block": 117597446,
        "ts": "2026-11-18T18:10:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8e26ebc4daf183d1ecfd4e91c00032aa0640ccfa",
        "name": "xEQUITY-NVDA",
        "symbol": "xEQUITY-NVDA",
        "deployer": "0x5438ed5f8b13a2c0d5449ad4d9ba73d7b4de0b20",
        "block": 117597407,
        "ts": "2026-11-18T18:10:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x19530b0e3de95005beb3f5443b1af1181864d78f",
        "name": "Grand Theft Auto",
        "symbol": "VI",
        "deployer": "0x633cf1586bba70bd3590c3c3b5715e2b49848f47",
        "block": 117597361,
        "ts": "2026-11-18T18:09:56.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x2d427692e928fa156ec22acfabafa0447c5805b7",
        "name": "Galaxy Digital Inc. • Robinhood Token",
        "symbol": "GLXY",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 117597204,
        "ts": "2026-11-18T18:09:40.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
