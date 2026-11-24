/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-24T06:07:03.000Z",
    "opened_at": "2026-11-24T05:07:03.000Z",
    "window_hours": 1,
    "head_block": 122010963,
    "start_block": 121979473,
    "blocks_scanned": 31490,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 207,
    "unnamed_contracts": 0,
    "via_factory": 193,
    "no_receipt": 0,
    "candidates": 207,
    "mint_events": 7631,
    "deployers": 146,
    "roots": 319,
    "cleared_multiple": 205,
    "failed_gates": 203,
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
      "fiona-hippo"
    ],
    "top": null,
    "rows": [
      {
        "root": "fiona",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 72.5,
        "state": "MERGED",
        "reason": "fiona + hippo co-occur 100%, merged to fiona-hippo"
      },
      {
        "root": "hippo",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 72.5,
        "state": "MERGED",
        "reason": "fiona + hippo co-occur 100%, merged to fiona-hippo"
      },
      {
        "root": "usdg",
        "launches": 12,
        "deployers": 11,
        "baseline_share": 0.0203,
        "multiple": 2.9,
        "state": "BELOW",
        "reason": "usdg: 2.9x over baseline < 6.0x required"
      },
      {
        "root": "robinhood",
        "launches": 12,
        "deployers": 6,
        "baseline_share": 0.0513,
        "multiple": 1.1,
        "state": "BELOW",
        "reason": "robinhood: 1.1x over baseline < 6.0x required"
      },
      {
        "root": "uniswap",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0509,
        "multiple": 0.9,
        "state": "BELOW",
        "reason": "uniswap: 0.9x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0424,
        "multiple": 0.8,
        "state": "BELOW",
        "reason": "uni: 0.8x over baseline < 6.0x required"
      },
      {
        "root": "cat",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.013,
        "multiple": 2.2,
        "state": "BELOW",
        "reason": "cat: 2.2x over baseline < 6.0x required"
      },
      {
        "root": "ai",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0081,
        "multiple": 3,
        "state": "BELOW",
        "reason": "ai: 3.0x over baseline < 6.0x required"
      },
      {
        "root": "cilembu",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 48.3,
        "state": "THIN",
        "reason": "cilembu: 4 launches < 5 required"
      },
      {
        "root": "layerbank",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0053,
        "multiple": 3.6,
        "state": "BELOW",
        "reason": "layerbank: 3.6x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0167,
        "multiple": 1.2,
        "state": "BELOW",
        "reason": "positions: 1.2x over baseline < 6.0x required"
      },
      {
        "root": "corgi",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 36.2,
        "state": "THIN",
        "reason": "corgi: 3 launches < 5 required"
      },
      {
        "root": "heph",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 36.2,
        "state": "THIN",
        "reason": "heph: 3 launches < 5 required"
      },
      {
        "root": "nvidia",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0019,
        "multiple": 7.6,
        "state": "THIN",
        "reason": "nvidia: 3 launches < 5 required"
      },
      {
        "root": "anthropic",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0024,
        "multiple": 6,
        "state": "THIN",
        "reason": "anthropic: 3 launches < 5 required"
      },
      {
        "root": "brownfi",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0025,
        "multiple": 5.8,
        "state": "BELOW",
        "reason": "brownfi: 5.8x over baseline < 6.0x required"
      },
      {
        "root": "bf",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0027,
        "multiple": 5.4,
        "state": "BELOW",
        "reason": "bf: 5.4x over baseline < 6.0x required"
      },
      {
        "root": "pos",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0044,
        "multiple": 3.3,
        "state": "BELOW",
        "reason": "pos: 3.3x over baseline < 6.0x required"
      },
      {
        "root": "position",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0054,
        "multiple": 2.7,
        "state": "BELOW",
        "reason": "position: 2.7x over baseline < 6.0x required"
      },
      {
        "root": "inc",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0057,
        "multiple": 2.5,
        "state": "BELOW",
        "reason": "inc: 2.5x over baseline < 6.0x required"
      },
      {
        "root": "amm",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0062,
        "multiple": 2.3,
        "state": "BELOW",
        "reason": "amm: 2.3x over baseline < 6.0x required"
      },
      {
        "root": "weth",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0073,
        "multiple": 2,
        "state": "BELOW",
        "reason": "weth: 2.0x over baseline < 6.0x required"
      },
      {
        "root": "volatile",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0083,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "volatile: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "nft",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0201,
        "multiple": 0.7,
        "state": "BELOW",
        "reason": "nft: 0.7x over baseline < 6.0x required"
      },
      {
        "root": "accb",
        "launches": 2,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 24.2,
        "state": "THIN",
        "reason": "accb: 2 launches < 5 required"
      },
      {
        "root": "bye",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 24.2,
        "state": "THIN",
        "reason": "bye: 2 launches < 5 required"
      },
      {
        "root": "byehuman",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 24.2,
        "state": "THIN",
        "reason": "byehuman: 2 launches < 5 required"
      },
      {
        "root": "corgicoin",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 24.2,
        "state": "THIN",
        "reason": "corgicoin: 2 launches < 5 required"
      },
      {
        "root": "gati",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 24.2,
        "state": "THIN",
        "reason": "gati: 2 launches < 5 required"
      },
      {
        "root": "gatio",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 24.2,
        "state": "THIN",
        "reason": "gatio: 2 launches < 5 required"
      },
      {
        "root": "humans",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 24.2,
        "state": "THIN",
        "reason": "humans: 2 launches < 5 required"
      },
      {
        "root": "jacket",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 24.2,
        "state": "THIN",
        "reason": "jacket: 2 launches < 5 required"
      },
      {
        "root": "lista",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 24.2,
        "state": "THIN",
        "reason": "lista: 2 launches < 5 required"
      },
      {
        "root": "navy",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 24.2,
        "state": "THIN",
        "reason": "navy: 2 launches < 5 required"
      },
      {
        "root": "payload",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 24.2,
        "state": "THIN",
        "reason": "payload: 2 launches < 5 required"
      },
      {
        "root": "pbc",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 24.2,
        "state": "THIN",
        "reason": "pbc: 2 launches < 5 required"
      },
      {
        "root": "plumeseai",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 24.2,
        "state": "THIN",
        "reason": "plumeseai: 2 launches < 5 required"
      },
      {
        "root": "quill",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 24.2,
        "state": "THIN",
        "reason": "quill: 2 launches < 5 required"
      },
      {
        "root": "quillpro",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 24.2,
        "state": "THIN",
        "reason": "quillpro: 2 launches < 5 required"
      },
      {
        "root": "ravelin",
        "launches": 2,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 24.2,
        "state": "THIN",
        "reason": "ravelin: 2 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x8ecc762f31f82854d858f0636dc16a9eac80a916",
        "name": "Makeshift Entertainment Media Ed",
        "symbol": "MEME",
        "deployer": "0xb326902c4327d61e6c89e4944c3ef3d8a3194c0b",
        "block": 122010954,
        "ts": "2026-11-24T06:07:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x61b4fc95ec5a502a538abc94878d69b69ae07777",
        "name": "SANAE TOKEN",
        "symbol": "SANAE",
        "deployer": "0x980b9bb5b3163638e0a35f8f26ff40547b16e2a9",
        "block": 122010929,
        "ts": "2026-11-24T06:07:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xecb20c0e41c982b548f84dcd10e8252ca80f9ced",
        "name": "Arcs",
        "symbol": "ARCS",
        "deployer": "0x049f8c196c2f48c66080d03152df244c04c516da",
        "block": 122010886,
        "ts": "2026-11-24T06:06:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc91a72521af458d0155d70c20d14501d1dac7777",
        "name": "7",
        "symbol": "7",
        "deployer": "0xe26a8a93a803f6dcc9355da3beac69d733ddfd5d",
        "block": 122010623,
        "ts": "2026-11-24T06:06:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1b2176d4d2c7bd36227d92ed84f1a3ae30b635bf",
        "name": "Abyss Positions",
        "symbol": "ABYSS-POS",
        "deployer": "0x7cb44b8693b3c350a2bcd4b681af85365aa27783",
        "block": 122010581,
        "ts": "2026-11-24T06:06:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xeff35904c992356e5cf42cefd3e7fc2ee4891e18",
        "name": "Roaring Kitty",
        "symbol": "RK",
        "deployer": "0xf7093908040391c187f7644c4e42f7fe6f76cc88",
        "block": 122010548,
        "ts": "2026-11-24T06:06:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc029deb46df5aece5eee8a594871e3aae1af7777",
        "name": "Saika Kawakita",
        "symbol": "SAIKA",
        "deployer": "0xea5c98a6164850f6ace669bd753de6928881b65e",
        "block": 122010093,
        "ts": "2026-11-24T06:05:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x13c26dfa7bf9591b656e08cc180c7d46344d7777",
        "name": "Levers And Chests",
        "symbol": "LEVERSANDCHESTS",
        "deployer": "0x4f6d40378da3874cb49b6834b4c20ada43842691",
        "block": 122010085,
        "ts": "2026-11-24T06:05:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7ae668ea99ed1d4e534200815a45825ea9849b39",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x81c32c0346854d5e96d52ddfeb4ed8c775f10a19",
        "block": 122009592,
        "ts": "2026-11-24T06:04:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xaf60a4f4739aa00bc8cc181a324d4b135c9cfb9d",
        "name": "RUMOR",
        "symbol": "RUMOR",
        "deployer": "0x81c32c0346854d5e96d52ddfeb4ed8c775f10a19",
        "block": 122009419,
        "ts": "2026-11-24T06:04:16.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x3338e8cdb682e7e9723b0a6d2b7134f066fe2912",
        "name": "clawen agent",
        "symbol": "CLAWEN",
        "deployer": "0x1226edf07e72a485c2bdc17eabc36d2cacdd2e34",
        "block": 122009331,
        "ts": "2026-11-24T06:04:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf12b8fbe887c0a36d4778a14a685ff978d3a7777",
        "name": "GTOF",
        "symbol": "GTOF",
        "deployer": "0x21853863aeec000ebfa52e46b366fdf2ac02ca6b",
        "block": 122009256,
        "ts": "2026-11-24T06:03:58.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1548a413133d8124a4b1e1608a675a3ee72e1954",
        "name": "Lost In Pirate",
        "symbol": "LIP",
        "deployer": "0x5da512190d4b0a34cf28c7add514aafaa17cf699",
        "block": 122009062,
        "ts": "2026-11-24T06:03:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x411efb0e7f985935daec3d4c3ebaea0d0ad7d89f",
        "name": "iShares Silver Trust • Robinhood Token",
        "symbol": "SLV",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 122008853,
        "ts": "2026-11-24T06:03:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xed1df6ea46608d785eb1902045f19db94dd2cc66",
        "name": "DIME",
        "symbol": "DIME",
        "deployer": "0x4fc595b1a377467f1244ff7d2ce26aa6bf5a2697",
        "block": 122008718,
        "ts": "2026-11-24T06:03:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x16ac0cbd7b4fb8853f8bc5d3c1af11e9d3ec5d40",
        "name": "SecondParty v0.2",
        "symbol": "SECOND",
        "deployer": "0x5f5283eb6945b2911017a1a252d1d09111b802f9",
        "block": 122008509,
        "ts": "2026-11-24T06:02:40.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x271cefe65aaad375e76bbd229fcd355503eca5b6",
        "name": "Strokerz Vault Prizes",
        "symbol": "STRKZP",
        "deployer": "0xb8bb7594a5cf4134d376e046682861116f06f88d",
        "block": 122008324,
        "ts": "2026-11-24T06:02:20.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x672828daa4652c87117a3f91f3cb7c80afd218c3",
        "name": "DGDreams RH Badge",
        "symbol": "DGB-RH",
        "deployer": "0x8a394953f15d80f0e299c717a310e933a269313b",
        "block": 122008010,
        "ts": "2026-11-24T06:01:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8004a169fb4a3325136eb29fa0ceb6d2e539a432",
        "name": "AgentIdentity",
        "symbol": "AGENT",
        "deployer": "0xc8eec27c99f9870ad3edcd5e67da800aebfa2183",
        "block": 122007754,
        "ts": "2026-11-24T06:01:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8803c117ccae7b5146297876c2a25df135141c4d",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xfd3240257a6f45ebb7b1eef880b777b9dc0db671",
        "block": 122007720,
        "ts": "2026-11-24T06:01:18.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xabccb795454ca9a2500f503128b682bff7ddd696",
        "name": "Take Inc Repair Market",
        "symbol": "TAKE",
        "deployer": "0x4337004ec9c1417f1c7a26ebd4b4fbed6acf9e5d",
        "block": 122007498,
        "ts": "2026-11-24T06:00:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x32003cc8357938bcf615c1222a349c58f2b30698",
        "name": "Wrapped 0G",
        "symbol": "W0G",
        "deployer": "0x1bd2b8e646ab7f44a47ef0325c871aa96a85a049",
        "block": 122007434,
        "ts": "2026-11-24T06:00:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x580f1028c9ddf53e7ef102e44f8a7258d8837777",
        "name": "114514",
        "symbol": "114514",
        "deployer": "0x980b9bb5b3163638e0a35f8f26ff40547b16e2a9",
        "block": 122007414,
        "ts": "2026-11-24T06:00:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x02bec3ebb93ed971309f3382079840191f68743a",
        "name": "Quantum",
        "symbol": "QUANTUM",
        "deployer": "0x734c6d8ad360dee39a72f63641da9574e1421396",
        "block": 122007163,
        "ts": "2026-11-24T06:00:19.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcc6cdbeacfd738abcffd36acd479515d881618db",
        "name": "A MEME DOG",
        "symbol": "AMD",
        "deployer": "0x394fd31165c4f4a0da5fa3cadbc2e2a21bdd9d61",
        "block": 122007125,
        "ts": "2026-11-24T06:00:15.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1f1c44a04f58788d0fcccba48bbd13afdc8816a2",
        "name": "Ape Pirates",
        "symbol": "Ape Pirates",
        "deployer": "0xb6ce7a09ca345a609703cd454210679a8bf644a2",
        "block": 122006967,
        "ts": "2026-11-24T05:59:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcdfdf45f1ff346998a49e8113735081b923498df",
        "name": "Chop CHOP",
        "symbol": "chCHOP",
        "deployer": "0xa2a578f27cb867ad5aac1fd0f0a2eda9e6dd21c3",
        "block": 122006742,
        "ts": "2026-11-24T05:59:36.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x29922dbdd0af337c3eb6faad116bd7f94e220e0c",
        "name": "X Coin",
        "symbol": "X",
        "deployer": "0x4337005db25dbad41da5692ba1188751ee5d98b6",
        "block": 122006443,
        "ts": "2026-11-24T05:59:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5b20c9d06d759ad395e2d614ab3fbc86f317e13d",
        "name": "Chop RAETO",
        "symbol": "chRAETO",
        "deployer": "0x9dda4b7034666185739bd2a48e54f628e698f5a6",
        "block": 122006268,
        "ts": "2026-11-24T05:58:44.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3367055a2254d2eae253cc80b6e07731ee94b29c",
        "name": "CorgiDoge",
        "symbol": "Corgi",
        "deployer": "0x394fd31165c4f4a0da5fa3cadbc2e2a21bdd9d61",
        "block": 122006162,
        "ts": "2026-11-24T05:58:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc1ec1d8b81bf399245507065df101bf537470087",
        "name": "ペイロードモンスター",
        "symbol": "PAYLOAD",
        "deployer": "0x34800796b9af08ff48370c1023601d0597f3b431",
        "block": 122006127,
        "ts": "2026-11-24T05:58:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x02988912137b40feb4ad2c1b40bc775a1bc87777",
        "name": "Payload Monster",
        "symbol": "PAYLOAD",
        "deployer": "0x5866c4b2f65ad1e7650a73a974963c16d78405cb",
        "block": 122006050,
        "ts": "2026-11-24T05:58:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3ac551cb813e349dac3eaed6a6d3f7ed0e1ec70f",
        "name": "Fiona the Hippo",
        "symbol": "FIONA",
        "deployer": "0x9dbe922de1923f77145942b852d2cd90ccc0530b",
        "block": 122005933,
        "ts": "2026-11-24T05:58:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1f5c1a978d605830b45e1050173b923332d3cec9",
        "name": "UNITREE • SSE Stock Token",
        "symbol": "UNITREE",
        "deployer": "0xa8fbf0120e1d25dc5b9bca877cd20eac18693341",
        "block": 122005917,
        "ts": "2026-11-24T05:58:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2923016dffc292957e740ce0db39ffc4da2f36d8",
        "name": "Return to Nvidia",
        "symbol": "CEO",
        "deployer": "0x4337005db25dbad41da5692ba1188751ee5d98b6",
        "block": 122005582,
        "ts": "2026-11-24T05:57:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8543482cc96c6d9c82494164b545cb28095daaa1",
        "name": "HEPH AI",
        "symbol": "HEPH",
        "deployer": "0x0614c367e35c40b6d9ccdffc5ad11b16567126a4",
        "block": 122005415,
        "ts": "2026-11-24T05:57:16.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xa35e8770a954588a7a068482ebaea70c21947777",
        "name": "Corgicoin",
        "symbol": "CORGI",
        "deployer": "0xe26a8a93a803f6dcc9355da3beac69d733ddfd5d",
        "block": 122005362,
        "ts": "2026-11-24T05:57:11.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe7054819bdf6ec2a938a449f0ce7892b70407253",
        "name": "Corgicoin",
        "symbol": "CORGI",
        "deployer": "0x38627817a3d081f6816a8734e313671d203892b7",
        "block": 122005286,
        "ts": "2026-11-24T05:57:02.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x98f011d264566f79a2fb6ce244198f5ab7ff7777",
        "name": "Human Frontier Mission",
        "symbol": "HFM",
        "deployer": "0x4f6d40378da3874cb49b6834b4c20ada43842691",
        "block": 122005190,
        "ts": "2026-11-24T05:56:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xac1d4ebaaf060d1309b74d6bef58aff07ad4a376",
        "name": "corp",
        "symbol": "437",
        "deployer": "0xa3af060b6b7140866211c4d7ab608cede8432c70",
        "block": 122005097,
        "ts": "2026-11-24T05:56:41.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
