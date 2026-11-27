/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-27T20:20:17.000Z",
    "opened_at": "2026-11-27T19:20:17.000Z",
    "window_hours": 1,
    "head_block": 124516050,
    "start_block": 124483500,
    "blocks_scanned": 32550,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 296,
    "unnamed_contracts": 0,
    "via_factory": 271,
    "no_receipt": 0,
    "candidates": 296,
    "mint_events": 11732,
    "deployers": 181,
    "roots": 381,
    "cleared_multiple": 244,
    "failed_gates": 244,
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
        "root": "counterparty",
        "launches": 15,
        "deployers": 1,
        "baseline_share": 0.0055,
        "multiple": 9.2,
        "state": "THIN",
        "reason": "counterparty: 1 deployers < 6 required"
      },
      {
        "root": "predictor",
        "launches": 15,
        "deployers": 1,
        "baseline_share": 0.0055,
        "multiple": 9.2,
        "state": "THIN",
        "reason": "predictor: 1 deployers < 6 required"
      },
      {
        "root": "prd",
        "launches": 13,
        "deployers": 1,
        "baseline_share": 0.0048,
        "multiple": 9.1,
        "state": "THIN",
        "reason": "prd: 1 deployers < 6 required"
      },
      {
        "root": "ctr",
        "launches": 13,
        "deployers": 1,
        "baseline_share": 0.0049,
        "multiple": 9,
        "state": "THIN",
        "reason": "ctr: 1 deployers < 6 required"
      },
      {
        "root": "robinhood",
        "launches": 12,
        "deployers": 7,
        "baseline_share": 0.0513,
        "multiple": 0.8,
        "state": "BELOW",
        "reason": "robinhood: 0.8x over baseline < 6.0x required"
      },
      {
        "root": "uniswap",
        "launches": 12,
        "deployers": 11,
        "baseline_share": 0.0509,
        "multiple": 0.8,
        "state": "BELOW",
        "reason": "uniswap: 0.8x over baseline < 6.0x required"
      },
      {
        "root": "usdg",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0203,
        "multiple": 1.3,
        "state": "BELOW",
        "reason": "usdg: 1.3x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0424,
        "multiple": 0.6,
        "state": "BELOW",
        "reason": "uni: 0.6x over baseline < 6.0x required"
      },
      {
        "root": "broccoli",
        "launches": 7,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 59.1,
        "state": "THIN",
        "reason": "broccoli: 5 deployers < 6 required"
      },
      {
        "root": "ai",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0081,
        "multiple": 2.5,
        "state": "BELOW",
        "reason": "ai: 2.5x over baseline < 6.0x required"
      },
      {
        "root": "apu",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 42.2,
        "state": "THIN",
        "reason": "apu: 5 deployers < 6 required"
      },
      {
        "root": "chop",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0041,
        "multiple": 4.1,
        "state": "BELOW",
        "reason": "chop: 4.1x over baseline < 6.0x required"
      },
      {
        "root": "giga",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0041,
        "multiple": 4.1,
        "state": "BELOW",
        "reason": "giga: 4.1x over baseline < 6.0x required"
      },
      {
        "root": "amm",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0062,
        "multiple": 2.7,
        "state": "BELOW",
        "reason": "amm: 2.7x over baseline < 6.0x required"
      },
      {
        "root": "volatile",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0083,
        "multiple": 2,
        "state": "BELOW",
        "reason": "volatile: 2.0x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0167,
        "multiple": 1,
        "state": "BELOW",
        "reason": "positions: 1.0x over baseline < 6.0x required"
      },
      {
        "root": "coge",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 33.8,
        "state": "THIN",
        "reason": "coge: 4 launches < 5 required"
      },
      {
        "root": "pyra",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 33.8,
        "state": "THIN",
        "reason": "pyra: 4 launches < 5 required"
      },
      {
        "root": "zerocoin",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 33.8,
        "state": "THIN",
        "reason": "zerocoin: 4 launches < 5 required"
      },
      {
        "root": "trust",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0036,
        "multiple": 3.8,
        "state": "BELOW",
        "reason": "trust: 3.8x over baseline < 6.0x required"
      },
      {
        "root": "layerbank",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0053,
        "multiple": 2.5,
        "state": "BELOW",
        "reason": "layerbank: 2.5x over baseline < 6.0x required"
      },
      {
        "root": "nft",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0201,
        "multiple": 0.7,
        "state": "BELOW",
        "reason": "nft: 0.7x over baseline < 6.0x required"
      },
      {
        "root": "fullball",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 25.3,
        "state": "THIN",
        "reason": "fullball: 3 launches < 5 required"
      },
      {
        "root": "dream",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0008,
        "multiple": 12.7,
        "state": "THIN",
        "reason": "dream: 3 launches < 5 required"
      },
      {
        "root": "yield",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0011,
        "multiple": 9.2,
        "state": "THIN",
        "reason": "yield: 3 launches < 5 required"
      },
      {
        "root": "quantum",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0014,
        "multiple": 7.2,
        "state": "THIN",
        "reason": "quantum: 3 launches < 5 required"
      },
      {
        "root": "shares",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0014,
        "multiple": 7.2,
        "state": "THIN",
        "reason": "shares: 3 launches < 5 required"
      },
      {
        "root": "zero",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.002,
        "multiple": 5.1,
        "state": "BELOW",
        "reason": "zero: 5.1x over baseline < 6.0x required"
      },
      {
        "root": "brownfi",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0025,
        "multiple": 4.1,
        "state": "BELOW",
        "reason": "brownfi: 4.1x over baseline < 6.0x required"
      },
      {
        "root": "bf",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0027,
        "multiple": 3.8,
        "state": "BELOW",
        "reason": "bf: 3.8x over baseline < 6.0x required"
      },
      {
        "root": "trump",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0032,
        "multiple": 3.2,
        "state": "BELOW",
        "reason": "trump: 3.2x over baseline < 6.0x required"
      },
      {
        "root": "united",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0033,
        "multiple": 3.1,
        "state": "BELOW",
        "reason": "united: 3.1x over baseline < 6.0x required"
      },
      {
        "root": "bucket",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0036,
        "multiple": 2.8,
        "state": "BELOW",
        "reason": "bucket: 2.8x over baseline < 6.0x required"
      },
      {
        "root": "deposit",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0049,
        "multiple": 2.1,
        "state": "BELOW",
        "reason": "deposit: 2.1x over baseline < 6.0x required"
      },
      {
        "root": "staked",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0069,
        "multiple": 1.5,
        "state": "BELOW",
        "reason": "staked: 1.5x over baseline < 6.0x required"
      },
      {
        "root": "weth",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0073,
        "multiple": 1.4,
        "state": "BELOW",
        "reason": "weth: 1.4x over baseline < 6.0x required"
      },
      {
        "root": "hood",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0108,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "hood: 0.9x over baseline < 6.0x required"
      },
      {
        "root": "ab",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 16.9,
        "state": "THIN",
        "reason": "ab: 2 launches < 5 required"
      },
      {
        "root": "ad",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 16.9,
        "state": "THIN",
        "reason": "ad: 2 launches < 5 required"
      },
      {
        "root": "aetheryn",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.9,
        "state": "THIN",
        "reason": "aetheryn: 2 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0xf8e0ab443098c0738489b5baffbd32a1341f2289",
        "name": "Borro USDG",
        "symbol": "bUSDG",
        "deployer": "0x3a17bfff7c6fb05f8c49d3d7181849e531026896",
        "block": 124515934,
        "ts": "2026-11-27T20:20:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd32a5f43ac2d3dc8132ec756f452bd4367eb202a",
        "name": "SpaceXCoin",
        "symbol": "SpaceXCoin",
        "deployer": "0x6fd7b03b0ca5337fdf025f87366a8fccb332bb4e",
        "block": 124515574,
        "ts": "2026-11-27T20:19:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x677ff23593b2f1bfb1cef1add59f4ebf722a08ee",
        "name": "TEST",
        "symbol": "TEST",
        "deployer": "0x94c6353e7acca8e398464f69d47c8e7b48306f90",
        "block": 124515555,
        "ts": "2026-11-27T20:19:26.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x9893237c314760486517a6a46d96ebbe3a137777",
        "name": "SENTRA",
        "symbol": "SENTRA",
        "deployer": "0x5ac9b0e10acdc0437a7f5fb72d75c73fa8fea805",
        "block": 124515429,
        "ts": "2026-11-27T20:19:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7ec28218f8434b7d88bf7f2b80415c7bc3795378",
        "name": "2 shares and a dream",
        "symbol": "2",
        "deployer": "0xa60e892ab5fbf4754e3052b7643e48a1bd6b3065",
        "block": 124515409,
        "ts": "2026-11-27T20:19:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x77ce08a36abf67f6ff9acb857b583ade43b0fdd4",
        "name": "2 Shares And A Dream",
        "symbol": "2",
        "deployer": "0xb69f2c8c4e3b9141fa4efd614091a616ed9d8526",
        "block": 124515376,
        "ts": "2026-11-27T20:19:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xeaea9253a0b75b936a965dbd35b2a3f01831de74",
        "name": "Pancakeswap Infinity Positions NFT",
        "symbol": "PCS-INFINITY-POSM",
        "deployer": "0xc43a493e063365f31e54ce14d3ff2f1b7540d516",
        "block": 124515365,
        "ts": "2026-11-27T20:19:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdb0690f3465ea8a2fbb6f11044c3c31f5c4658de",
        "name": "SENTRA",
        "symbol": "SENTRA",
        "deployer": "0xdee0f1563df5f2ce3d58205400916abf356b512d",
        "block": 124515363,
        "ts": "2026-11-27T20:19:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2c8237f1f2a5dcd9e398cc87f1577c12afe1bc30",
        "name": "2 shares and a dream",
        "symbol": "2",
        "deployer": "0xdf1ead76d2d0f8fe7494ce72def15ad0e953cb97",
        "block": 124515318,
        "ts": "2026-11-27T20:19:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x49c770d9ffc82ac6d34ea88a680369ce61cb89d9",
        "name": "Demo Token",
        "symbol": "DEMO",
        "deployer": "0xe04d47ab6734cd07edaf373df32875a5bd31a350",
        "block": 124515315,
        "ts": "2026-11-27T20:19:02.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x06e10a833c2447ba5ec840fb80c64eb099976d1e",
        "name": "MEMO",
        "symbol": "MEMO",
        "deployer": "0x0478ce6c290f722cdc00e64147035ec4c1cd2b24",
        "block": 124515314,
        "ts": "2026-11-27T20:19:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc5a500f4a880f32a87869f7be5f92d570a68b226",
        "name": "SpaceX",
        "symbol": "SpaceX",
        "deployer": "0xeed9ea57e39a7915d5e39ad43b361bee31e8696e",
        "block": 124515259,
        "ts": "2026-11-27T20:18:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7becb5aba4826e8f4fda8eee92a117383c160087",
        "name": "The AI Dictators",
        "symbol": "Dictators",
        "deployer": "0x2bcb6d7b5b12f94b91441aa2cdce68e3d96877af",
        "block": 124515125,
        "ts": "2026-11-27T20:18:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdd826fa4af7ed8e7acf08bd1088814cf973a30be",
        "name": "FMARIO",
        "symbol": "FMARIO",
        "deployer": "0xfa13e453b8fae3f673aeb27f2b559fd2a5538283",
        "block": 124515124,
        "ts": "2026-11-27T20:18:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd39a2f6ea6c2fb2fa37c3e89272db8ca87c77777",
        "name": "WINTER ARC",
        "symbol": "WINTER",
        "deployer": "0x86ecca4cc69f665a74dbba48663cb334a7848652",
        "block": 124514859,
        "ts": "2026-11-27T20:18:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9a2e12c0aef758391607fc35a0e40b6de9191e18",
        "name": "Super Natural Double Knockers",
        "symbol": "SNDK",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 124514724,
        "ts": "2026-11-27T20:17:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0403f943b1e1f3122b59f5546eec03c175caf1d6",
        "name": "Rekt Mask",
        "symbol": "Rekt Mask",
        "deployer": "0x90d1ea3512f5389f1d7737f26100d436c4d33b41",
        "block": 124514692,
        "ts": "2026-11-27T20:17:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x06d44cc0d5111368dc61e568ec1ab17019f4b39a",
        "name": "TEST",
        "symbol": "TEST",
        "deployer": "0x94c6353e7acca8e398464f69d47c8e7b48306f90",
        "block": 124514615,
        "ts": "2026-11-27T20:17:41.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xae0550ae08be82c60ed69c0ddf0fe073a3a1d09e",
        "name": "cutedoge",
        "symbol": "CUTEDOGE",
        "deployer": "0x7621407c82792a888d97c54d49e33195274160f2",
        "block": 124514590,
        "ts": "2026-11-27T20:17:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfbb100ad59664bdf60672ea79d888bee4da07777",
        "name": "WINTER ARC",
        "symbol": "WINTER",
        "deployer": "0xb66a0d760090a9389b77a9b2726f797ab718e21b",
        "block": 124514474,
        "ts": "2026-11-27T20:17:24.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc9edb4841c0270dc5cf5353bc358f8082c397777",
        "name": "Buffalo",
        "symbol": "BUFFALO",
        "deployer": "0xa72d384419e08b0eeb43d96c73ba62b627de39a7",
        "block": 124514460,
        "ts": "2026-11-27T20:17:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdfc8f51992fd22db3c1730e2147287ef3a3482b7",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x8bc57f56cd117eeb70ccb2e85abded2ccbb74075",
        "block": 124514458,
        "ts": "2026-11-27T20:17:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc04602c48fa03b63d8dc2ac489d015348b68e81f",
        "name": "Buffalo",
        "symbol": "BUFFALO",
        "deployer": "0x9660a4d5cf035093516f7d5238fc87846bd9c766",
        "block": 124514390,
        "ts": "2026-11-27T20:17:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x26d2f7acb07707034406a0dc458351bb63c02553",
        "name": "Fee Beneficiary",
        "symbol": "FEEB",
        "deployer": "0x9660a4d5cf035093516f7d5238fc87846bd9c766",
        "block": 124514390,
        "ts": "2026-11-27T20:17:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa30fa36db767ad9ed3f7a60fc79526fb4d56d344",
        "name": "United States Oil Fund • Robinhood Token",
        "symbol": "USO",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 124513129,
        "ts": "2026-11-27T20:14:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x48b39a6638c002c1d4bc21ebfe502b1dbe73a51c",
        "name": "Bucket: Big Tech",
        "symbol": "bTECH",
        "deployer": "0x2ccc152ad68419f777531e6a40a52325e2a80ee2",
        "block": 124513000,
        "ts": "2026-11-27T20:14:40.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb1f584ae170722dadac3d56a012f40ae5584baf2",
        "name": "Bucket: Crypto",
        "symbol": "bCRYPTO",
        "deployer": "0x2ccc152ad68419f777531e6a40a52325e2a80ee2",
        "block": 124512767,
        "ts": "2026-11-27T20:14:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb3ecf4e995bf179b55407a3edb49645e9f1e337c",
        "name": "LFG",
        "symbol": "LFG",
        "deployer": "0x2ccc152ad68419f777531e6a40a52325e2a80ee2",
        "block": 124512573,
        "ts": "2026-11-27T20:13:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3302736cb9750220424c68fbc67542582117e95e",
        "name": "RocketBucket",
        "symbol": "RBKT",
        "deployer": "0x2ccc152ad68419f777531e6a40a52325e2a80ee2",
        "block": 124512488,
        "ts": "2026-11-27T20:13:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x595d02477ba88ca8e0892124dc36656b6c977061",
        "name": "House Agent",
        "symbol": "aHOUSE",
        "deployer": "0x2ccc152ad68419f777531e6a40a52325e2a80ee2",
        "block": 124512429,
        "ts": "2026-11-27T20:13:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa47e5ec3843cb066c4c1c14c5636a4325cb9ca4c",
        "name": "Yield Rehearsal",
        "symbol": "YIELD",
        "deployer": "0xa63b49c114dc75f56e0135cf7e6a7a0fdff0813e",
        "block": 124512395,
        "ts": "2026-11-27T20:13:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xdb86cd4f750239dec19e87cf416911e028c212a4",
        "name": "Black Swan Shield",
        "symbol": "BSS",
        "deployer": "0x2ccc152ad68419f777531e6a40a52325e2a80ee2",
        "block": 124512377,
        "ts": "2026-11-27T20:13:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x31f914ae52f235c006b4f2e2d9b284560a8439ae",
        "name": "Bucket: Core",
        "symbol": "bCORE",
        "deployer": "0x2ccc152ad68419f777531e6a40a52325e2a80ee2",
        "block": 124512308,
        "ts": "2026-11-27T20:13:23.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6a661407bbf593cb81c609123d5bc8138f39fb73",
        "name": "Chop WORM",
        "symbol": "chWORM",
        "deployer": "0xfa7b99f71c28305af860a3fc6b3f0e050483fd2f",
        "block": 124512199,
        "ts": "2026-11-27T20:13:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4f6e59a27f27762bfcedf7702ba71159b483d85c",
        "name": "BrownFi V3",
        "symbol": "BF-V3",
        "deployer": "0xbb8e8432171a804ddf2fcfc5c5c420b1cacef136",
        "block": 124511651,
        "ts": "2026-11-27T20:12:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xedab16d64229d610f05e49aa78181cbc8c157777",
        "name": "Hijak",
        "symbol": "HIJAK",
        "deployer": "0xbe969c5bc42f1e30814fbde46538451791e40187",
        "block": 124511529,
        "ts": "2026-11-27T20:11:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x897a0d629ecc5239b7a8503b949f4d59cdae57ad",
        "name": "SHADOW RONIN",
        "symbol": "SHADO",
        "deployer": "0x0f6dbacc509cf3b31846eb64d868fd54572a0f2b",
        "block": 124511395,
        "ts": "2026-11-27T20:11:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6ecbc630ffdf40e2af3e7ea8001df53467e97777",
        "name": "HYPE",
        "symbol": "HYPE",
        "deployer": "0x22be0787ea7621328214b466d07bf3d2f5cda2b2",
        "block": 124511258,
        "ts": "2026-11-27T20:11:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x407fe5166ad116a53e0fa65d0c648ec7ab4d7957",
        "name": "VCAT",
        "symbol": "VCAT",
        "deployer": "0xcbb7274ec82a7cca079ca22488026cc998453d65",
        "block": 124511007,
        "ts": "2026-11-27T20:10:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x32f39719b72ae280dda40be17de908b507c80087",
        "name": "Bitcorn",
        "symbol": "Bitcorn",
        "deployer": "0x34800796b9af08ff48370c1023601d0597f3b431",
        "block": 124510556,
        "ts": "2026-11-27T20:10:13.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
