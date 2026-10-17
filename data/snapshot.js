/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-17T09:42:08.000Z",
    "opened_at": "2026-10-17T08:42:08.000Z",
    "window_hours": 1,
    "head_block": 90829027,
    "start_block": 90793871,
    "blocks_scanned": 35156,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 349,
    "unnamed_contracts": 0,
    "via_factory": 310,
    "no_receipt": 0,
    "candidates": 349,
    "mint_events": 15741,
    "deployers": 244,
    "roots": 458,
    "cleared_multiple": 458,
    "failed_gates": 443,
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
      "dolphingemma-gemma",
      "elon-ae-artificial",
      "flying",
      "intelligence-dolphin-di",
      "nft",
      "positions",
      "uniswap-uni",
      "usdg",
      "wheel"
    ],
    "top": {
      "root": "nft",
      "launches": 9,
      "deployers": 9,
      "baseline_share": 0.0004,
      "multiple": 64.5,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "nft",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 64.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 64.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 50.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "wheel",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 50.1,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "flying",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 43,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "intelligence",
        "launches": 12,
        "deployers": 12,
        "baseline_share": 0.0004,
        "multiple": 86,
        "state": "MERGED",
        "reason": "intelligence + dolphin co-occur 75%, merged to intelligence-dolphin-di"
      },
      {
        "root": "uniswap",
        "launches": 12,
        "deployers": 12,
        "baseline_share": 0.0004,
        "multiple": 86,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 83%, merged to uniswap-uni"
      },
      {
        "root": "dolphin",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 78.8,
        "state": "MERGED",
        "reason": "intelligence + dolphin co-occur 75%, merged to intelligence-dolphin-di"
      },
      {
        "root": "dolphingemma",
        "launches": 11,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 78.8,
        "state": "MERGED",
        "reason": "dolphingemma + gemma co-occur 69%, merged to dolphingemma-gemma"
      },
      {
        "root": "gemma",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 78.8,
        "state": "MERGED",
        "reason": "dolphingemma + gemma co-occur 69%, merged to dolphingemma-gemma"
      },
      {
        "root": "di",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 71.6,
        "state": "MERGED",
        "reason": "intelligence + dolphin co-occur 75%, merged to intelligence-dolphin-di"
      },
      {
        "root": "elon",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 71.6,
        "state": "MERGED",
        "reason": "elon + ae co-occur 100%, merged to elon-ae-artificial"
      },
      {
        "root": "uni",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 71.6,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 83%, merged to uniswap-uni"
      },
      {
        "root": "ae",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 50.1,
        "state": "MERGED",
        "reason": "elon + ae co-occur 100%, merged to elon-ae-artificial"
      },
      {
        "root": "artificial",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 50.1,
        "state": "MERGED",
        "reason": "elon + ae co-occur 100%, merged to elon-ae-artificial"
      },
      {
        "root": "robinhood",
        "launches": 7,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 50.1,
        "state": "THIN",
        "reason": "robinhood: 5 deployers < 6 required"
      },
      {
        "root": "matrix",
        "launches": 6,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 43,
        "state": "THIN",
        "reason": "matrix: 1 deployers < 6 required"
      },
      {
        "root": "net",
        "launches": 6,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 43,
        "state": "THIN",
        "reason": "net: 4 deployers < 6 required"
      },
      {
        "root": "staked",
        "launches": 6,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 43,
        "state": "THIN",
        "reason": "staked: 4 deployers < 6 required"
      },
      {
        "root": "agent",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 35.8,
        "state": "THIN",
        "reason": "agent: 5 deployers < 6 required"
      },
      {
        "root": "cat",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 35.8,
        "state": "THIN",
        "reason": "cat: 4 deployers < 6 required"
      },
      {
        "root": "agents",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 28.7,
        "state": "THIN",
        "reason": "agents: 4 launches < 5 required"
      },
      {
        "root": "ai",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 28.7,
        "state": "THIN",
        "reason": "ai: 4 launches < 5 required"
      },
      {
        "root": "cue",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 28.7,
        "state": "THIN",
        "reason": "cue: 4 launches < 5 required"
      },
      {
        "root": "tesla",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 28.7,
        "state": "THIN",
        "reason": "tesla: 4 launches < 5 required"
      },
      {
        "root": "agentrouter",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.5,
        "state": "THIN",
        "reason": "agentrouter: 3 launches < 5 required"
      },
      {
        "root": "bank",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 21.5,
        "state": "THIN",
        "reason": "bank: 3 launches < 5 required"
      },
      {
        "root": "cgnft",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.5,
        "state": "THIN",
        "reason": "cgnft: 3 launches < 5 required"
      },
      {
        "root": "chaingreets",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.5,
        "state": "THIN",
        "reason": "chaingreets: 3 launches < 5 required"
      },
      {
        "root": "counterparty",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 21.5,
        "state": "THIN",
        "reason": "counterparty: 3 launches < 5 required"
      },
      {
        "root": "credit",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.5,
        "state": "THIN",
        "reason": "credit: 3 launches < 5 required"
      },
      {
        "root": "ctr",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 21.5,
        "state": "THIN",
        "reason": "ctr: 3 launches < 5 required"
      },
      {
        "root": "dao",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.5,
        "state": "THIN",
        "reason": "dao: 3 launches < 5 required"
      },
      {
        "root": "dog",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.5,
        "state": "THIN",
        "reason": "dog: 3 launches < 5 required"
      },
      {
        "root": "first",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.5,
        "state": "THIN",
        "reason": "first: 3 launches < 5 required"
      },
      {
        "root": "hood",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.5,
        "state": "THIN",
        "reason": "hood: 3 launches < 5 required"
      },
      {
        "root": "lend",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 21.5,
        "state": "THIN",
        "reason": "lend: 3 launches < 5 required"
      },
      {
        "root": "mechazilla",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.5,
        "state": "THIN",
        "reason": "mechazilla: 3 launches < 5 required"
      },
      {
        "root": "obrivo",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.5,
        "state": "THIN",
        "reason": "obrivo: 3 launches < 5 required"
      },
      {
        "root": "orbio",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.5,
        "state": "THIN",
        "reason": "orbio: 3 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0xfb1f6123d2f061a15bcb40af73bd8874c0b6e1a5",
        "name": "Slabs - PokeFi Lend & Borrow",
        "symbol": "SLABS",
        "deployer": "0x4337062690416e632d08d14e819892d6498f9ad4",
        "block": 90828663,
        "ts": "2026-10-17T09:41:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa17734fff2400a1e014e445d2c0a29f095907777",
        "name": "Forge Family",
        "symbol": "Forge Family",
        "deployer": "0x498b1bee7a146a4d10514f2d8eb1201b447ad384",
        "block": 90828556,
        "ts": "2026-10-17T09:41:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf7511757057ece7144799892dfd98ef679831f09",
        "name": "cuda",
        "symbol": "CUDA",
        "deployer": "0xf5ce41c560d9120ee50e92079522fb96b70918c2",
        "block": 90828384,
        "ts": "2026-10-17T09:41:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x83890309681e005506ef32887406e9c8cd9dc5f3",
        "name": "AgentRouter",
        "symbol": "ROUTER",
        "deployer": "0x174aa8d003a98a4ff9df89da2060f5473541ba93",
        "block": 90828378,
        "ts": "2026-10-17T09:41:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7009f05e575a86617933c799d470d8cb393b7777",
        "name": "KeyVaultAI 9",
        "symbol": "KVLT9",
        "deployer": "0x7485fbfd99993dab4c9964f53791e40d14253c97",
        "block": 90828228,
        "ts": "2026-10-17T09:40:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa0b2babd8bc14d421f4a71add671eba6e387adc5",
        "name": "KeyVaultAI 9",
        "symbol": "KVLT9",
        "deployer": "0xb47255b720522c5d099ff15dd38f44646595d96b",
        "block": 90828148,
        "ts": "2026-10-17T09:40:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x48fd6ac65b01ded84dbaaf3308637e8c5ddaddfb",
        "name": "Drowning inu",
        "symbol": "DI",
        "deployer": "0x4337004ec9c1417f1c7a26ebd4b4fbed6acf9e5d",
        "block": 90828117,
        "ts": "2026-10-17T09:40:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8a465d413324da00fdf4dfce905ac24b2439b64a",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x8f16b0ce8c50431a46021055b8ce76474e9f9142",
        "block": 90828100,
        "ts": "2026-10-17T09:40:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5794bb61e83397049c40d87bbf3d44af583a27ce",
        "name": "Cow Up33 Robinhood WETH-STONKBROKER",
        "symbol": "cowUp33RobinhoodWETH-STONKBROKER",
        "deployer": "0x03d9964f4d93a24b58c0fc3a8df3474b59ba8557",
        "block": 90828038,
        "ts": "2026-10-17T09:40:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x10f9e8b973b5ea104618bd334f3cc2c0ff7e15f2",
        "name": "Reward Cow Up33 Robinhood WETH-STONKBROKER",
        "symbol": "rcowUp33RobinhoodWETH-STONKBROKER",
        "deployer": "0x03d9964f4d93a24b58c0fc3a8df3474b59ba8557",
        "block": 90828038,
        "ts": "2026-10-17T09:40:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5c74c124d859de6aa709418ba4d6f4a35d307777",
        "name": "Flying Tesla Fone",
        "symbol": "FTF",
        "deployer": "0xa7ba884561771e707f7f29bd5388b77f1e470daf",
        "block": 90828013,
        "ts": "2026-10-17T09:40:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa72d8d054a7b6e1033fcb4b2b8718e7d8166ba86",
        "name": "TICKERTAPES Signal Worlds",
        "symbol": "TTSW",
        "deployer": "0xc1f75fea2e6567915747797ea55fe46934959d61",
        "block": 90827990,
        "ts": "2026-10-17T09:40:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3128a1744ca2f31e00dd338b07abbd91b11d7777",
        "name": "Dolphin Intelligence",
        "symbol": "DI",
        "deployer": "0xf47c54ad23d36f5e86742e2a3899d21146cee81c",
        "block": 90827892,
        "ts": "2026-10-17T09:40:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x52bb0af682d8e605bfa6a9f1faa8a7c3364a82ee",
        "name": "Dragon Balls",
        "symbol": "Dragon Balls",
        "deployer": "0xc33672a4d3a39a430b25df90d90d95e020c68b14",
        "block": 90827833,
        "ts": "2026-10-17T09:40:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x50105087d19a77c853cf8cae69de101fde214e69",
        "name": "Mechazilla",
        "symbol": "Mechazilla",
        "deployer": "0xe51bb3740057cb429b217aacefb1a40d2d285e88",
        "block": 90827829,
        "ts": "2026-10-17T09:40:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe537db46fbe877b88034d511e51d2e5336f13e10",
        "name": "DolphinGemma",
        "symbol": "Gemma",
        "deployer": "0xe884dda364744f2d53e250dc1521a8162ba50db3",
        "block": 90827825,
        "ts": "2026-10-17T09:40:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc3b552bfeba74c7f1afe58cca268a768d3b58ffa",
        "name": "NIVRA",
        "symbol": "NIVRA",
        "deployer": "0x04abbcecc598d126283f3e3e05828491cb57ced2",
        "block": 90827728,
        "ts": "2026-10-17T09:39:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x69a60521a04e1e70e1db26bd6f6808f27a833695",
        "name": "Dacity Coin",
        "symbol": "Dacity",
        "deployer": "0x8f16b0ce8c50431a46021055b8ce76474e9f9142",
        "block": 90827719,
        "ts": "2026-10-17T09:39:55.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x4245d5cadce608125686bd49796e10110d4d998e",
        "name": "United States Decentralized",
        "symbol": "USDC",
        "deployer": "0x4837193e11e20370ed52136f3b41c9e87b328091",
        "block": 90827708,
        "ts": "2026-10-17T09:39:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x232b6aa1b9fc6821e3a3183a51ea0f1b7c25970c",
        "name": "Strap Hood",
        "symbol": "Strap Hood",
        "deployer": "0xaf709f3484fbba6a4a1c5f9b1c050535af3b3741",
        "block": 90827637,
        "ts": "2026-10-17T09:39:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb75cdc38f30a027334b407331092b7b9f27eda0e",
        "name": "Dolphin Intelligence",
        "symbol": "DI",
        "deployer": "0x4337012eaf1f862b8dbdc6b62a01782ae01ef038",
        "block": 90827412,
        "ts": "2026-10-17T09:39:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7214f5987984978ae6b498d1b7d4603656182424",
        "name": "SushiLiquid",
        "symbol": "SL",
        "deployer": "0xb99010d1fb8958ac01e1b477dc9fce25f6728489",
        "block": 90827389,
        "ts": "2026-10-17T09:39:21.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x80f0c6aeadd9e847a09d877b2d31b32cefd843c0",
        "name": "WHEELIE",
        "symbol": "WHEEL",
        "deployer": "0xcc5534bbeff319cba539004de7d7229400ef224a",
        "block": 90827356,
        "ts": "2026-10-17T09:39:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf55270454b8574b23ed36aa04bef7077fe3cc3b2",
        "name": "Birdies",
        "symbol": "BIRDIES",
        "deployer": "0x0312f70169d6919a6e54c0c9b67ea554986e4980",
        "block": 90827226,
        "ts": "2026-10-17T09:39:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x236db0a9a36f5241c5a573ebdf12d46e1fc07777",
        "name": "NatureLM Audio",
        "symbol": "NATURELM",
        "deployer": "0x1b4ebe73585b94578dc055c6ac7e89333fdadcf7",
        "block": 90827218,
        "ts": "2026-10-17T09:39:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe62a5f67516dbdba2aa28b1512c8ff44e42cb5c3",
        "name": "Alandale Positions NFT-V2",
        "symbol": "LUTE-POS",
        "deployer": "0xea0cca90ca906422efec6002fa8e444b305db7a0",
        "block": 90826843,
        "ts": "2026-10-17T09:38:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x18a7716dedd0135a33567e7cdae2ed347ce07777",
        "name": "SpaceX - Backpack Securities",
        "symbol": "SPCX",
        "deployer": "0x6c0eed69cf861c5d01c24775456f83910b8ea4e3",
        "block": 90826775,
        "ts": "2026-10-17T09:38:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x00e318965c5f4802e3be5a6fc06737e9fc97fb70",
        "name": "Mechazilla",
        "symbol": "Mechazilla",
        "deployer": "0x8099bd9330a6355abcbf47b06aa5644fee0aa60a",
        "block": 90826681,
        "ts": "2026-10-17T09:38:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb5e26320042305a33000b68bbe99ee134c9a8a3f",
        "name": "DolphinGemma",
        "symbol": "Gemma",
        "deployer": "0x88708d73ae4e4538d722f9eba82256b1c29a6c75",
        "block": 90826641,
        "ts": "2026-10-17T09:38:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x09d5e3e17e7804d848c21a05400663fa9c0b7777",
        "name": "Justsisyphus",
        "symbol": "JUSTSI",
        "deployer": "0xfe2cb6b8c284d632390268d8007873ac5865db0b",
        "block": 90826514,
        "ts": "2026-10-17T09:37:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa49b58275475c1387c20acb104fac8c73fdc8413",
        "name": "$DAWHEELCI",
        "symbol": "$DAWHEELCI",
        "deployer": "0xa636a18e3375bdd4d7f53d6babd767fadc184551",
        "block": 90826413,
        "ts": "2026-10-17T09:37:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x468b84461346242937a1fa51d514a9fd506413aa",
        "name": "Justsisyphus",
        "symbol": "JUSTSI",
        "deployer": "0x520d3db637bc2e15ef69df4781040d6c0f57f5a1",
        "block": 90826408,
        "ts": "2026-10-17T09:37:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb46b51c511fe0f24b5973ad221a80ded5e56e235",
        "name": "Block_Lab",
        "symbol": "BLOCKLAB",
        "deployer": "0x71d271f0882b66a300c3e234c411243575a1b63c",
        "block": 90826344,
        "ts": "2026-10-17T09:37:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb4211c1760f2844a2edd125fa4942218d255fcc9",
        "name": "Relay USDG Test",
        "symbol": "RLYUSDG",
        "deployer": "0x62a1763652beadc6a8ca8d5117b136b5eb4700c4",
        "block": 90826294,
        "ts": "2026-10-17T09:37:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcaf95a75ee6497932dab6b03e59c89011e9d7777",
        "name": "Agent Inu",
        "symbol": "AINU",
        "deployer": "0x498b1bee7a146a4d10514f2d8eb1201b447ad384",
        "block": 90826035,
        "ts": "2026-10-17T09:37:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd825995a2aa8d92a71a67765d89d984a64171e18",
        "name": "Bacon Donut Bear",
        "symbol": "BDB",
        "deployer": "0xd20278dc748cfe4a381e8969751873f1ab80cce4",
        "block": 90825820,
        "ts": "2026-10-17T09:36:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x52efc78da654120f3f61e452b76bb2aad1e67777",
        "name": "4car",
        "symbol": "4CAR",
        "deployer": "0x7485fbfd99993dab4c9964f53791e40d14253c97",
        "block": 90825809,
        "ts": "2026-10-17T09:36:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbf071f47f017dcb8b757fa17195e15555ce08ec6",
        "name": "Wheel Dog",
        "symbol": "WDOG",
        "deployer": "0x09b7e97b034a9d066c31d9730f0a0f8903a7f16b",
        "block": 90825718,
        "ts": "2026-10-17T09:36:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5388b25d25936127d96e7210a89fb63492ce7777",
        "name": "Prysm",
        "symbol": "PRYSM",
        "deployer": "0xa7ba884561771e707f7f29bd5388b77f1e470daf",
        "block": 90825707,
        "ts": "2026-10-17T09:36:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa0eff4518c210fb203fbf67fd7ebab96d4ef223b",
        "name": "Agent Inu",
        "symbol": "AINU",
        "deployer": "0xeab6a484ff378560cbdc83fad6908d592ae9cfb4",
        "block": 90825681,
        "ts": "2026-10-17T09:36:26.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
