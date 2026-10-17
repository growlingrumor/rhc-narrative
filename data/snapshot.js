/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-17T18:38:10.000Z",
    "opened_at": "2026-10-17T17:38:10.000Z",
    "window_hours": 1,
    "head_block": 91144359,
    "start_block": 91108856,
    "blocks_scanned": 35503,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 612,
    "unnamed_contracts": 0,
    "via_factory": 566,
    "no_receipt": 0,
    "candidates": 612,
    "mint_events": 29925,
    "deployers": 397,
    "roots": 668,
    "cleared_multiple": 208,
    "failed_gates": 194,
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
      "bentley",
      "daemon-dmn",
      "eloge-elogecoin",
      "flywheel",
      "heygrok",
      "hood",
      "nft",
      "positions",
      "uniswap-uni",
      "usdg",
      "virtuals"
    ],
    "top": {
      "root": "heygrok",
      "launches": 11,
      "deployers": 11,
      "baseline_share": 0.0004,
      "multiple": 44.9,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "heygrok",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 44.9,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "bentley",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 40.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 10,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 40.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 36.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "virtuals",
        "launches": 9,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 36.8,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nft",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 32.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "flywheel",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 24.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "hood",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 24.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 22,
        "deployers": 20,
        "baseline_share": 0.0004,
        "multiple": 89.9,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 82%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 18,
        "deployers": 16,
        "baseline_share": 0.0004,
        "multiple": 73.5,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 82%, merged to uniswap-uni"
      },
      {
        "root": "daemon",
        "launches": 12,
        "deployers": 12,
        "baseline_share": 0.0004,
        "multiple": 49,
        "state": "MERGED",
        "reason": "daemon + dmn co-occur 92%, merged to daemon-dmn"
      },
      {
        "root": "dmn",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 44.9,
        "state": "MERGED",
        "reason": "daemon + dmn co-occur 92%, merged to daemon-dmn"
      },
      {
        "root": "eloge",
        "launches": 8,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 32.7,
        "state": "MERGED",
        "reason": "eloge + elogecoin co-occur 100%, merged to eloge-elogecoin"
      },
      {
        "root": "elogecoin",
        "launches": 8,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 32.7,
        "state": "MERGED",
        "reason": "eloge + elogecoin co-occur 100%, merged to eloge-elogecoin"
      },
      {
        "root": "index",
        "launches": 7,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 28.6,
        "state": "THIN",
        "reason": "index: 5 deployers < 6 required"
      },
      {
        "root": "bucket",
        "launches": 6,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 24.5,
        "state": "THIN",
        "reason": "bucket: 1 deployers < 6 required"
      },
      {
        "root": "ai",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "ai: 5 deployers < 6 required"
      },
      {
        "root": "cuda",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "cuda: 5 deployers < 6 required"
      },
      {
        "root": "elon",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "elon: 5 deployers < 6 required"
      },
      {
        "root": "overload",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "overload: 5 deployers < 6 required"
      },
      {
        "root": "spooky",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "spooky: 5 deployers < 6 required"
      },
      {
        "root": "account",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16.3,
        "state": "THIN",
        "reason": "account: 4 launches < 5 required"
      },
      {
        "root": "agent",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16.3,
        "state": "THIN",
        "reason": "agent: 4 launches < 5 required"
      },
      {
        "root": "archive",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16.3,
        "state": "THIN",
        "reason": "archive: 4 launches < 5 required"
      },
      {
        "root": "borrowable",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.3,
        "state": "THIN",
        "reason": "borrowable: 4 launches < 5 required"
      },
      {
        "root": "cate",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16.3,
        "state": "THIN",
        "reason": "cate: 4 launches < 5 required"
      },
      {
        "root": "dog",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16.3,
        "state": "THIN",
        "reason": "dog: 4 launches < 5 required"
      },
      {
        "root": "ether",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16.3,
        "state": "THIN",
        "reason": "ether: 4 launches < 5 required"
      },
      {
        "root": "flock",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.3,
        "state": "THIN",
        "reason": "flock: 4 launches < 5 required"
      },
      {
        "root": "flying",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16.3,
        "state": "THIN",
        "reason": "flying: 4 launches < 5 required"
      },
      {
        "root": "good",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16.3,
        "state": "THIN",
        "reason": "good: 4 launches < 5 required"
      },
      {
        "root": "goodlaunch",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16.3,
        "state": "THIN",
        "reason": "goodlaunch: 4 launches < 5 required"
      },
      {
        "root": "hackupdt",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16.3,
        "state": "THIN",
        "reason": "hackupdt: 4 launches < 5 required"
      },
      {
        "root": "land",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.3,
        "state": "THIN",
        "reason": "land: 4 launches < 5 required"
      },
      {
        "root": "lend",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.3,
        "state": "THIN",
        "reason": "lend: 4 launches < 5 required"
      },
      {
        "root": "overloadxy",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16.3,
        "state": "THIN",
        "reason": "overloadxy: 4 launches < 5 required"
      },
      {
        "root": "pistonxyz",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16.3,
        "state": "THIN",
        "reason": "pistonxyz: 4 launches < 5 required"
      },
      {
        "root": "spooks",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16.3,
        "state": "THIN",
        "reason": "spooks: 4 launches < 5 required"
      },
      {
        "root": "super",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16.3,
        "state": "THIN",
        "reason": "super: 4 launches < 5 required"
      },
      {
        "root": "vault",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 16.3,
        "state": "THIN",
        "reason": "vault: 4 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0xef3d9afe273f8733dcc7822e5f1a1c69a81c3d59",
        "name": "Google Crubit Squid",
        "symbol": "CARDI",
        "deployer": "0xf6268fca85be640ff302dbada2d4fe3e5ef7d65c",
        "block": 91144346,
        "ts": "2026-10-17T18:38:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6a43b45f6126fe6dff80bad5d5b65d803ba1f9aa",
        "name": "The Peener",
        "symbol": "PEENER",
        "deployer": "0x9fe46408aca888148333472896a89b95a88cb493",
        "block": 91144305,
        "ts": "2026-10-17T18:38:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf9963bc3a0f5eca468dd28eec0c54caaa56cb9b5",
        "name": "2AML",
        "symbol": "AML",
        "deployer": "0x43370597af41d9345b1b91391849dcdb748c2838",
        "block": 91144208,
        "ts": "2026-10-17T18:37:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2bfcea10012d19f0910503161ba9f789638cab59",
        "name": "Elon Coin",
        "symbol": "ELON",
        "deployer": "0xbec5f0e3606e377ca2f539e470971ed15ff1e772",
        "block": 91144125,
        "ts": "2026-10-17T18:37:46.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x6b853019228f92efd822cc3c795c2cb0dc49cfea",
        "name": "AI Nexus",
        "symbol": "AINX",
        "deployer": "0x0cf8c1ae2935628d80e7ebc376f64aca0f3da5a3",
        "block": 91144117,
        "ts": "2026-10-17T18:37:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x45f490552a73204e52ffbb0b43af4f375e7b9e96",
        "name": "ribbita by Virtuals",
        "symbol": "RIBBITA",
        "deployer": "0x719a7ea267935799b3f5e39ce6d5f735781c8d51",
        "block": 91144023,
        "ts": "2026-10-17T18:37:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3875b5ed46388c7bccce467a0110a98f957a1bc1",
        "name": "Daemon Credit",
        "symbol": "cr",
        "deployer": "0x3f745575b764288403b2a079a9e79fac525f08cb",
        "block": 91143966,
        "ts": "2026-10-17T18:37:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x02d9876a21af7545f8632c3af76ec90b5ad4b66d",
        "name": "Ekubo Positions",
        "symbol": "ekuPo",
        "deployer": "0x9c7dd62f6e24ea5fee1d84a7981c6d4d3562ccf2",
        "block": 91143936,
        "ts": "2026-10-17T18:37:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x081a452be41ce8bef8929ccab135a40d9fdd7777",
        "name": "NautilusTrader",
        "symbol": "NAUTILUS",
        "deployer": "0x21853863aeec000ebfa52e46b366fdf2ac02ca6b",
        "block": 91143913,
        "ts": "2026-10-17T18:37:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb7f0a73665d255178cf227d9ce85bbdbd1587777",
        "name": "Google Crubit Squid",
        "symbol": "CARDI",
        "deployer": "0xa91f60eba5e34b141711d058e4b336f6af9aba66",
        "block": 91143896,
        "ts": "2026-10-17T18:37:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5c5fe415d4c9f68b379209b11174e7de985bb4ae",
        "name": "K9 Bentley",
        "symbol": "Bentley",
        "deployer": "0x5918a7a47a13e6fb2706b58d17c9a952b5dfa87d",
        "block": 91143891,
        "ts": "2026-10-17T18:37:23.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x3840c22b91b82ab8c7300849b3dea7c22dc5d890",
        "name": "NautilusTrader",
        "symbol": "NAUTILUS",
        "deployer": "0x5b10946389606d28cc9027f5d401ad71522654ca",
        "block": 91143847,
        "ts": "2026-10-17T18:37:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcd2b2f22361b5b0bfcdb4635dbc6e1958f42bf0a",
        "name": "GROKLET",
        "symbol": "GROKLET",
        "deployer": "0x41861243fa3032fa22f7158ca441f894ea0333f3",
        "block": 91143684,
        "ts": "2026-10-17T18:37:01.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x7f1047f38bfec46cba3881f3b9ac282c4d341e18",
        "name": "AMLAI",
        "symbol": "AMLAI",
        "deployer": "0x5da441739614ea06af94b48afb9a7af906d4132d",
        "block": 91143595,
        "ts": "2026-10-17T18:36:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9a9fa45c0bb3a8616f309cf3e8adf2e510c56692",
        "name": "Bentley",
        "symbol": "BENTLEY",
        "deployer": "0x43370250bfc02c7f085cb105558da41e9cdb2d79",
        "block": 91143544,
        "ts": "2026-10-17T18:36:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x13d47db17ac579a93601e1b1c1a69ca549427261",
        "name": "hi",
        "symbol": "hi",
        "deployer": "0xa9658de3c5e42886da2ae98cd1e834508481bac1",
        "block": 91143432,
        "ts": "2026-10-17T18:36:36.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xb7cfe42c4dda471fa58bb7a726629ccfffcc7777",
        "name": "Flop Labs",
        "symbol": "FLOP",
        "deployer": "0x980b9bb5b3163638e0a35f8f26ff40547b16e2a9",
        "block": 91143399,
        "ts": "2026-10-17T18:36:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x00466c0053fa70c309e778b49293f5a1c3da1cde",
        "name": "Hens",
        "symbol": "HEN",
        "deployer": "0x42d72234277cf484e41f7f6aeb5523243e0848d0",
        "block": 91143369,
        "ts": "2026-10-17T18:36:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x340d1d434bab50ef4daf8cf2e091e02468dc9a8c",
        "name": "Flywheel Pnut",
        "symbol": "FWPNUT",
        "deployer": "0xed227d0f6e6b738bef82c9bd6b370874f68d060a",
        "block": 91143348,
        "ts": "2026-10-17T18:36:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x98f07524a3ccd71cfeb11d4c7951263429061e18",
        "name": "Green",
        "symbol": "GREEN",
        "deployer": "0xf7093908040391c187f7644c4e42f7fe6f76cc88",
        "block": 91143250,
        "ts": "2026-10-17T18:36:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb64099c6ce55221d8763938d86134aa1c3e80c0f",
        "name": "Super troch",
        "symbol": "SUPERTORCH",
        "deployer": "0x4337050608d02173feea2e27ba65a1af0f948538",
        "block": 91143052,
        "ts": "2026-10-17T18:35:57.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x61dfba0ce95af9338960bef74ed8fc8e23017777",
        "name": "Cycle",
        "symbol": "CYCLE",
        "deployer": "0xe26a8a93a803f6dcc9355da3beac69d733ddfd5d",
        "block": 91142997,
        "ts": "2026-10-17T18:35:52.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdbe89a4917750f2222799a745ec333ba0d9f1e18",
        "name": "Google Crubit Squid",
        "symbol": "CARDI",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 91142923,
        "ts": "2026-10-17T18:35:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0037d1bfd13deb9b4597333c41c66d3e9c8e7777",
        "name": "Yooooooh",
        "symbol": "YOOOOOOH",
        "deployer": "0x4f6d40378da3874cb49b6834b4c20ada43842691",
        "block": 91142853,
        "ts": "2026-10-17T18:35:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1fd6950a438a7c949f8da111e825a3f3abba50ae",
        "name": "zkCodex Memorial",
        "symbol": "ZKMEMORIAL",
        "deployer": "0x6e0f0d25008488f9c8f883a84e2ad3603b59624c",
        "block": 91142837,
        "ts": "2026-10-17T18:35:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6cb84491f91a357b3a64679740fdae3465be2368",
        "name": "K9 Bentley",
        "symbol": "Bentley",
        "deployer": "0x2725ddacb9eb9c8358ea54d6e053f84bb3d32e36",
        "block": 91142814,
        "ts": "2026-10-17T18:35:33.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x448ea99cb079cd16ffe50db4627d9819ab301157",
        "name": "12 by Virtuals",
        "symbol": "12",
        "deployer": "0xe8cf5fe84e12ccef7ed69b5b70280603f702f427",
        "block": 91142701,
        "ts": "2026-10-17T18:35:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfa8ce549f4b49ca3607970b7fa9730c41525a7b9",
        "name": "NARUTO BORUTO",
        "symbol": "NARUTO",
        "deployer": "0x939dbcff7db18f3eb0510e9be63497e076673f8b",
        "block": 91142584,
        "ts": "2026-10-17T18:35:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x718f77b2394a70ec488bf3cce42e1ac5552b6aac",
        "name": "GOTHAMLEDGER",
        "symbol": "GOTHAM",
        "deployer": "0x8d5eff5d92e94280b05215c278543632d76c0131",
        "block": 91142579,
        "ts": "2026-10-17T18:35:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xec9200bf681d8b057ff91648d20d66fb74462935",
        "name": "12",
        "symbol": "12",
        "deployer": "0x4992b13a96a3e3fa7841d84ec155ba424886409b",
        "block": 91142525,
        "ts": "2026-10-17T18:35:04.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0ce50cbd9f12d337229abc809a28205342391ffb",
        "name": "Commo",
        "symbol": "COMMO",
        "deployer": "0x4eccf6ccc0f65609c9653bd855e6583f62e8641c",
        "block": 91142355,
        "ts": "2026-10-17T18:34:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7347d633bfddff832b12112559fe48a9495ef5ee",
        "name": "Goodlaunch",
        "symbol": "GOOD",
        "deployer": "0x064d764a4887cfae0f6ffd08e46045a9067d036f",
        "block": 91142238,
        "ts": "2026-10-17T18:34:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x230c7bfc2dc4b3b2355a77f142428889df3a59c2",
        "name": "World of Stocks",
        "symbol": "WSTOCKS",
        "deployer": "0xce45df913737a694672de6d9d49fd3370209d1c8",
        "block": 91142210,
        "ts": "2026-10-17T18:34:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfcd59bded964fe6b2f6337b56191018d3803b709",
        "name": "Gobbo",
        "symbol": "GOBBO",
        "deployer": "0x80bb0376aa1d9e1103c4e92b966d085b302d48a5",
        "block": 91142121,
        "ts": "2026-10-17T18:34:22.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x1e6387dbf9e0d461e605191b49124af7f5477777",
        "name": "The NIST Seeds",
        "symbol": "SEEDS",
        "deployer": "0x648975b08b558e5b5ecffbc68c248c79459bb279",
        "block": 91142081,
        "ts": "2026-10-17T18:34:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcc7ca3b5301a20e4019004d73174c890f23ee145",
        "name": "Energizer",
        "symbol": "ENERGIZER",
        "deployer": "0x43370371e0bb085d04d02a815230aaf67b35ef25",
        "block": 91142027,
        "ts": "2026-10-17T18:34:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe1016e0eb75b69a2420d8d3adfdfd4e4253b2645",
        "name": "Mogecoin",
        "symbol": "MOGE",
        "deployer": "0xf3b023ab8279a4639a0157db544c75ba259d8f50",
        "block": 91141998,
        "ts": "2026-10-17T18:34:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x55b306dcb0073d2b0d3b5e8d516351ab2ab77777",
        "name": "The Swiftie Era",
        "symbol": "TAYLOR",
        "deployer": "0xea5c98a6164850f6ace669bd753de6928881b65e",
        "block": 91141996,
        "ts": "2026-10-17T18:34:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7ac87d8fdb45200fdd51e4aca225244485c984c5",
        "name": "Strategic Super Reserve",
        "symbol": "SSR",
        "deployer": "0xd0dcacd0135d463b553bf7ac8c68f32fa178c279",
        "block": 91141892,
        "ts": "2026-10-17T18:33:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x94c4e9b31e446288dc1a59f580e739fa89f71111",
        "name": "SuperTorch",
        "symbol": "SUPERTORCH",
        "deployer": "0x58085289c3f448df5f95b95b3867c834b6db7661",
        "block": 91141798,
        "ts": "2026-10-17T18:33:49.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
