/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-03T17:33:58.000Z",
    "opened_at": "2026-11-03T16:33:58.000Z",
    "window_hours": 1,
    "head_block": 105238036,
    "start_block": 105203017,
    "blocks_scanned": 35019,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 626,
    "unnamed_contracts": 9,
    "via_factory": 599,
    "no_receipt": 0,
    "candidates": 635,
    "mint_events": 27630,
    "deployers": 356,
    "roots": 681,
    "cleared_multiple": 122,
    "failed_gates": 113,
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
      "america-americacoin",
      "fun-high-higher",
      "monkeybox",
      "stompy",
      "voted-votter"
    ],
    "top": {
      "root": "stompy",
      "launches": 11,
      "deployers": 11,
      "baseline_share": 0.0004,
      "multiple": 43.9,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "stompy",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 43.9,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "monkeybox",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 28,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "fun",
        "launches": 17,
        "deployers": 17,
        "baseline_share": 0.0044,
        "multiple": 6.2,
        "state": "MERGED",
        "reason": "fun + high co-occur 100%, merged to fun-high-higher"
      },
      {
        "root": "higher",
        "launches": 15,
        "deployers": 15,
        "baseline_share": 0.0004,
        "multiple": 59.9,
        "state": "MERGED",
        "reason": "fun + high co-occur 100%, merged to fun-high-higher"
      },
      {
        "root": "high",
        "launches": 15,
        "deployers": 15,
        "baseline_share": 0.0009,
        "multiple": 26.6,
        "state": "MERGED",
        "reason": "fun + high co-occur 100%, merged to fun-high-higher"
      },
      {
        "root": "voted",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 35.9,
        "state": "MERGED",
        "reason": "voted + votter co-occur 89%, merged to voted-votter"
      },
      {
        "root": "votter",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 31.9,
        "state": "MERGED",
        "reason": "voted + votter co-occur 89%, merged to voted-votter"
      },
      {
        "root": "americacoin",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 24,
        "state": "MERGED",
        "reason": "america + americacoin co-occur 100%, merged to america-americacoin"
      },
      {
        "root": "america",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0013,
        "multiple": 7.4,
        "state": "MERGED",
        "reason": "america + americacoin co-occur 100%, merged to america-americacoin"
      },
      {
        "root": "uniswap",
        "launches": 31,
        "deployers": 24,
        "baseline_share": 0.0509,
        "multiple": 1,
        "state": "BELOW",
        "reason": "uniswap: 1.0x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 29,
        "deployers": 22,
        "baseline_share": 0.0424,
        "multiple": 1.1,
        "state": "BELOW",
        "reason": "uni: 1.1x over baseline < 6.0x required"
      },
      {
        "root": "robinhood",
        "launches": 20,
        "deployers": 11,
        "baseline_share": 0.0513,
        "multiple": 0.6,
        "state": "BELOW",
        "reason": "robinhood: 0.6x over baseline < 6.0x required"
      },
      {
        "root": "game",
        "launches": 18,
        "deployers": 1,
        "baseline_share": 0.0005,
        "multiple": 57.5,
        "state": "THIN",
        "reason": "game: 1 deployers < 6 required"
      },
      {
        "root": "bond",
        "launches": 18,
        "deployers": 1,
        "baseline_share": 0.0008,
        "multiple": 35.9,
        "state": "THIN",
        "reason": "bond: 1 deployers < 6 required"
      },
      {
        "root": "usdg",
        "launches": 11,
        "deployers": 9,
        "baseline_share": 0.0203,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "usdg: 0.9x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0167,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "positions: 0.9x over baseline < 6.0x required"
      },
      {
        "root": "nft",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0201,
        "multiple": 0.6,
        "state": "BELOW",
        "reason": "nft: 0.6x over baseline < 6.0x required"
      },
      {
        "root": "fund",
        "launches": 7,
        "deployers": 6,
        "baseline_share": 0.0029,
        "multiple": 3.9,
        "state": "BELOW",
        "reason": "fund: 3.9x over baseline < 6.0x required"
      },
      {
        "root": "cat",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.013,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "cat: 0.9x over baseline < 6.0x required"
      },
      {
        "root": "project",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0024,
        "multiple": 4,
        "state": "BELOW",
        "reason": "project: 4.0x over baseline < 6.0x required"
      },
      {
        "root": "oil",
        "launches": 6,
        "deployers": 5,
        "baseline_share": 0.003,
        "multiple": 3.2,
        "state": "BELOW",
        "reason": "oil: 3.2x over baseline < 6.0x required"
      },
      {
        "root": "bunny",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 20,
        "state": "THIN",
        "reason": "bunny: 5 deployers < 6 required"
      },
      {
        "root": "cybrlk",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 20,
        "state": "THIN",
        "reason": "cybrlk: 5 deployers < 6 required"
      },
      {
        "root": "insula",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 20,
        "state": "THIN",
        "reason": "insula: 5 deployers < 6 required"
      },
      {
        "root": "dao",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0014,
        "multiple": 5.7,
        "state": "BELOW",
        "reason": "dao: 5.7x over baseline < 6.0x required"
      },
      {
        "root": "trump",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0032,
        "multiple": 2.5,
        "state": "BELOW",
        "reason": "trump: 2.5x over baseline < 6.0x required"
      },
      {
        "root": "cd",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16,
        "state": "THIN",
        "reason": "cd: 4 launches < 5 required"
      },
      {
        "root": "choo",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16,
        "state": "THIN",
        "reason": "choo: 4 launches < 5 required"
      },
      {
        "root": "counter",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16,
        "state": "THIN",
        "reason": "counter: 4 launches < 5 required"
      },
      {
        "root": "desk",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16,
        "state": "THIN",
        "reason": "desk: 4 launches < 5 required"
      },
      {
        "root": "drippy",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16,
        "state": "THIN",
        "reason": "drippy: 4 launches < 5 required"
      },
      {
        "root": "fullrange",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16,
        "state": "THIN",
        "reason": "fullrange: 4 launches < 5 required"
      },
      {
        "root": "jackass",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16,
        "state": "THIN",
        "reason": "jackass: 4 launches < 5 required"
      },
      {
        "root": "koge",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16,
        "state": "THIN",
        "reason": "koge: 4 launches < 5 required"
      },
      {
        "root": "kogecoin",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16,
        "state": "THIN",
        "reason": "kogecoin: 4 launches < 5 required"
      },
      {
        "root": "liqt",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16,
        "state": "THIN",
        "reason": "liqt: 4 launches < 5 required"
      },
      {
        "root": "liquidit",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16,
        "state": "THIN",
        "reason": "liquidit: 4 launches < 5 required"
      },
      {
        "root": "maha",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16,
        "state": "THIN",
        "reason": "maha: 4 launches < 5 required"
      },
      {
        "root": "stockless",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16,
        "state": "THIN",
        "reason": "stockless: 4 launches < 5 required"
      },
      {
        "root": "taxcoin",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16,
        "state": "THIN",
        "reason": "taxcoin: 4 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x914c81d494a787a60825874ab629e484bfaf1e18",
        "name": "The Republican Mascot",
        "symbol": "PAIGE",
        "deployer": "0xf7093908040391c187f7644c4e42f7fe6f76cc88",
        "block": 105238032,
        "ts": "2026-11-03T17:33:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd7aae3e67242fc8f6c300ff57a503af830a0684f",
        "name": "Baby",
        "symbol": "BBA",
        "deployer": "0x523643802dd19a143b60cd08bae35f47d62356ea",
        "block": 105237951,
        "ts": "2026-11-03T17:33:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7a5f2e2db467f606e58a6c6d8fb73949ec9c1e18",
        "name": "mogcat",
        "symbol": "MOGCAT",
        "deployer": "0x792dd4c93cfa919e141e6a0be37360373633cdad",
        "block": 105237904,
        "ts": "2026-11-03T17:33:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4fa482954091e94b9c23d27564e0d0f70cbcd09e",
        "name": "DogMan",
        "symbol": "DOGMAN",
        "deployer": "0xf22e13f4fecf19c17cd142b58a3ed3fbfc361ff5",
        "block": 105237727,
        "ts": "2026-11-03T17:33:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe9f95edf2393b087c5d9aafdd9daeb015563daa7",
        "name": "CHECKMARK",
        "symbol": "CHECKMARK",
        "deployer": "0x4337001fff419768e088ce247456c1b892888084",
        "block": 105237709,
        "ts": "2026-11-03T17:33:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x973ba0140eb01c9465e39e8b606bd488bf841e18",
        "name": "Be like Bob and Sally",
        "symbol": "BS",
        "deployer": "0xd20278dc748cfe4a381e8969751873f1ab80cce4",
        "block": 105237579,
        "ts": "2026-11-03T17:33:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x79390fb47973cbaee2e1ae3aa5ce63abe22e402c",
        "name": "higher.fun",
        "symbol": "HIGH",
        "deployer": "0xd2ea442d06c4c94f9e19865d26c4cd0a1c5fd9d3",
        "block": 105237571,
        "ts": "2026-11-03T17:33:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa1912ad8c4ef1c8d5e58256e70e8c7e3e546502c",
        "name": "Shadow Frog",
        "symbol": "SHDF",
        "deployer": "0x8c3d27d4f9384f9f98b925d55a0f2d21059749ea",
        "block": 105237533,
        "ts": "2026-11-03T17:33:07.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x36c1ce1d13ca05e18bfdcf5bde51df900ac3ad5c",
        "name": "HYPE FAUCET",
        "symbol": "HYPEFAUCET",
        "deployer": "0xc214b269c2d0a1382584395a1e4028cc7851245e",
        "block": 105237510,
        "ts": "2026-11-03T17:33:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x02c0b72779234e7a8666190917d3327f1554ded6",
        "name": "Juice",
        "symbol": "JUICE",
        "deployer": "0xc90630dcd4d273395035626e0c8f91fab1797116",
        "block": 105237489,
        "ts": "2026-11-03T17:33:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1dad768bcd400c1da790da3731960bb94f9b7777",
        "name": "HYPE FAUCET",
        "symbol": "HYPEFAUCET",
        "deployer": "0x959fb23c8cd604bc1b353097248245befb334b47",
        "block": 105237459,
        "ts": "2026-11-03T17:32:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4b0cb47fd439fa181424c760b0a17909c8887777",
        "name": "Ambervibe",
        "symbol": "AMBERVIBE",
        "deployer": "0xe26a8a93a803f6dcc9355da3beac69d733ddfd5d",
        "block": 105237458,
        "ts": "2026-11-03T17:32:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x31456401dcbd7f9891772ac2bcb589b3756ddbb0",
        "name": "LiquidIt",
        "symbol": "LIQT",
        "deployer": "0xa43f8ee959c5372942b0c6a6a9c68d5fb36b4847",
        "block": 105237380,
        "ts": "2026-11-03T17:32:49.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x09310c01eb80065b0c7a02afc42b9656b3ea6b1b",
        "name": "higher.fun",
        "symbol": "HIGH",
        "deployer": "0x54ed8fe717b12e12af922cfd52c5b25e540220fe",
        "block": 105237360,
        "ts": "2026-11-03T17:32:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9395f1a8fb136afbe222837485feab5f76e6c04d",
        "name": "Jackass",
        "symbol": "Jackass",
        "deployer": "0x509a5e261e8d759277d6d7d2aa31fda7249e6c0a",
        "block": 105237294,
        "ts": "2026-11-03T17:32:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc7eb64ead6dcfb2e7e33435b1f492490d5244ed7",
        "name": "Choo Choo",
        "symbol": "CHOO",
        "deployer": "0x63beb79d5459d706abbe181dd4e507467cd9bfc7",
        "block": 105237284,
        "ts": "2026-11-03T17:32:39.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xe2537c5edf1e19a9b77512533c1e12f146d8f00d",
        "name": "RipClub",
        "symbol": "RIPCLUB",
        "deployer": "0x4337002c5702ce424cb62a56ca038e31e1d4a93d",
        "block": 105237275,
        "ts": "2026-11-03T17:32:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd3c9d6dc208babb401d6e8e0e8310933c4327777",
        "name": "UDTF🪙",
        "symbol": "UDTF🪙",
        "deployer": "0x4f6d40378da3874cb49b6834b4c20ada43842691",
        "block": 105237221,
        "ts": "2026-11-03T17:32:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xea5397bd87e06dbb3167086d0a6d0f100fa27777",
        "name": "Jackass",
        "symbol": "Jackass",
        "deployer": "0x3fd64347c55e88513b92eebc9eaaabf8c3637539",
        "block": 105237163,
        "ts": "2026-11-03T17:32:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xeb2f7e898b0dc0652010d4873e49e4269c118775",
        "name": "arkhampad",
        "symbol": "ARKHAMPAD",
        "deployer": "0x5a9198279ca6a1c7865b3951e920cdcd55544daa",
        "block": 105237094,
        "ts": "2026-11-03T17:32:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6e2ac7bc1583fc505d86f4f45be01ece3ddf3400",
        "name": "Jackass",
        "symbol": "Jackass",
        "deployer": "0x071ae0e7073179f732cdec46d282cae50d3685ef",
        "block": 105237066,
        "ts": "2026-11-03T17:32:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7856f8be21e28dd08e7e5dc1c67b84f0ff360187",
        "name": "higher.fun",
        "symbol": "HIGH",
        "deployer": "0x700cf070bcdccadddf0b074aed437520d808dbd6",
        "block": 105236983,
        "ts": "2026-11-03T17:32:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5bc3dbb18af7d53082ed3960116e3eb10d697777",
        "name": "Stompy",
        "symbol": "STOMPY",
        "deployer": "0x457bf92fcde110edd04287296d1c9873de2373ce",
        "block": 105236884,
        "ts": "2026-11-03T17:31:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1ea7269d818e7d6be4dab98a092ce7463ab3f7f9",
        "name": "Jackass",
        "symbol": "Jackass",
        "deployer": "0x055aa3998c1d63d26ceea30b24194c748e8beaee",
        "block": 105236876,
        "ts": "2026-11-03T17:31:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x64a650384173da10a8a315d9da0f58532b8cf4df",
        "name": "Stompy",
        "symbol": "STOMPY",
        "deployer": "0x4337002c5702ce424cb62a56ca038e31e1d4a93d",
        "block": 105236802,
        "ts": "2026-11-03T17:31:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc58f47cb22995a416bef848cb4c0afd333a9dfe9",
        "name": "higher.fun",
        "symbol": "HIGH",
        "deployer": "0xd80b6018c99709a8ef12ca2ebf118e36e75b9fc7",
        "block": 105236777,
        "ts": "2026-11-03T17:31:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3feee4e0075e01d555c63638ee8148661c1dd13b",
        "name": "Programmable Runtime Check",
        "symbol": "PMAI5",
        "deployer": "0x0dbe4f551b318fbba7e7a1975c3a62b9392b8595",
        "block": 105236761,
        "ts": "2026-11-03T17:31:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x85c2775af4e7a369349b641bc4c63d8e226bdd7c",
        "name": "Stompy",
        "symbol": "STOMPY",
        "deployer": "0x2aab82f5ab02f7dc3385c8f2f8b84f1de41ba189",
        "block": 105236676,
        "ts": "2026-11-03T17:31:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xffa33535c5c081c5665f275cecf3bc5c0f0f2e86",
        "name": "Ambervibe",
        "symbol": "AMBERVIBE",
        "deployer": "0xb8b8ca0d56bb6f0a99ee2ae1e4a0d2d6f07ce4c7",
        "block": 105236622,
        "ts": "2026-11-03T17:31:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9b96586b1cde9411306d4debf70a3741ef5c7777",
        "name": "Stompy",
        "symbol": "STOMPY",
        "deployer": "0xc936150657d498454fb7560286831df123752ef8",
        "block": 105236570,
        "ts": "2026-11-03T17:31:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcca54eb58a847a3c20ea7118c00f0ac2a0013957",
        "name": "higher.fun",
        "symbol": "HIGH",
        "deployer": "0xdf9a3571833e9233a631e7b9b5e397d367824bcf",
        "block": 105236569,
        "ts": "2026-11-03T17:31:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe7ae62db99fe08daf67e740e7b337f7c2e357777",
        "name": "Pursuit Tools",
        "symbol": "PURSUIT",
        "deployer": "0xea5c98a6164850f6ace669bd753de6928881b65e",
        "block": 105236517,
        "ts": "2026-11-03T17:31:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0aec3290fa034e39bf7fda1cc903679e22fa7777",
        "name": "PROJECT CORTEX",
        "symbol": "XTX",
        "deployer": "0x21853863aeec000ebfa52e46b366fdf2ac02ca6b",
        "block": 105236507,
        "ts": "2026-11-03T17:31:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7862810ea72d2ae928d5d7a6410ce3198a5f669a",
        "name": "Stompy",
        "symbol": "STOMPY",
        "deployer": "0xc05ad42097c10771036cbf04fdf0e01ca64653c3",
        "block": 105236493,
        "ts": "2026-11-03T17:31:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5de206d1b29364e7a543f7a5d388ca3e2dc25b81",
        "name": "Pursuit Tools",
        "symbol": "PURSUIT",
        "deployer": "0x96da40cc87b545c5f3cdfe21a2bd24022ced75f4",
        "block": 105236450,
        "ts": "2026-11-03T17:31:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x511f9422de8f7649777e338cd75f6faa7bfd527d",
        "name": "Buakaw1 x Amazing Thailand",
        "symbol": "BUAKA",
        "deployer": "0x8949196dbef071848e7d9671ef5c25c1b39121b1",
        "block": 105236411,
        "ts": "2026-11-03T17:31:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc3381fbcb21d812094446d78e985c0e0e9c70a83",
        "name": "higher.fun",
        "symbol": "HIGH",
        "deployer": "0x92f1d502663c4ba794da49ab7c276b6c8af33a3c",
        "block": 105236359,
        "ts": "2026-11-03T17:31:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5d0a23cca3bc066b6541a30421a2af91e6377777",
        "name": "Stompy",
        "symbol": "STOMPY",
        "deployer": "0xb67141836b4bcd85c619c635e73da087f5f097bd",
        "block": 105236357,
        "ts": "2026-11-03T17:31:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0e1c1b5409d443527bf5dbf689e821c7d078d7ed",
        "name": "WEIR",
        "symbol": "WEIR",
        "deployer": "0x4337002c5702ce424cb62a56ca038e31e1d4a93d",
        "block": 105236355,
        "ts": "2026-11-03T17:31:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4707edb3dd3fb7b85a52304cfa6da679608bc000",
        "name": "Brain",
        "symbol": "BRAIN",
        "deployer": "0xd8eeb718c8cf8e238ee74a3837ccd24c0b979f5c",
        "block": 105236354,
        "ts": "2026-11-03T17:31:02.000Z",
        "ts_exact": true,
        "direct": true
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
