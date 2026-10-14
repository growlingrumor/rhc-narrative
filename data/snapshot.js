/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-14T12:03:27.000Z",
    "opened_at": "2026-10-14T11:03:27.000Z",
    "window_hours": 1,
    "head_block": 88351949,
    "start_block": 88316092,
    "blocks_scanned": 35857,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 463,
    "unnamed_contracts": 0,
    "via_factory": 419,
    "no_receipt": 0,
    "candidates": 463,
    "mint_events": 28182,
    "deployers": 290,
    "roots": 608,
    "cleared_multiple": 160,
    "failed_gates": 151,
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
      "nft",
      "positions",
      "robinhood",
      "stln",
      "stockguy",
      "timmy",
      "uniswap-uni",
      "usdg"
    ],
    "top": {
      "root": "robinhood",
      "launches": 26,
      "deployers": 10,
      "baseline_share": 0.0004,
      "multiple": 140.4,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "robinhood",
        "launches": 26,
        "deployers": 10,
        "baseline_share": 0.0004,
        "multiple": 140.4,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "nft",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 59.4,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 10,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 54,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 48.6,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "stln",
        "launches": 9,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 48.6,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "stockguy",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 43.2,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "timmy",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 32.4,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 37,
        "deployers": 29,
        "baseline_share": 0.0004,
        "multiple": 199.8,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 86%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 32,
        "deployers": 25,
        "baseline_share": 0.0004,
        "multiple": 172.8,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 86%, merged to uniswap-uni"
      },
      {
        "root": "volatile",
        "launches": 8,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 43.2,
        "state": "THIN",
        "reason": "volatile: 4 deployers < 6 required"
      },
      {
        "root": "hood",
        "launches": 6,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 32.4,
        "state": "THIN",
        "reason": "hood: 5 deployers < 6 required"
      },
      {
        "root": "inc",
        "launches": 6,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 32.4,
        "state": "THIN",
        "reason": "inc: 4 deployers < 6 required"
      },
      {
        "root": "ramses",
        "launches": 6,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 32.4,
        "state": "THIN",
        "reason": "ramses: 2 deployers < 6 required"
      },
      {
        "root": "ai",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 27,
        "state": "THIN",
        "reason": "ai: 5 deployers < 6 required"
      },
      {
        "root": "bucket",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 27,
        "state": "THIN",
        "reason": "bucket: 1 deployers < 6 required"
      },
      {
        "root": "cat",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 27,
        "state": "THIN",
        "reason": "cat: 5 deployers < 6 required"
      },
      {
        "root": "pair",
        "launches": 5,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 27,
        "state": "THIN",
        "reason": "pair: 1 deployers < 6 required"
      },
      {
        "root": "trench",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 27,
        "state": "THIN",
        "reason": "trench: 5 deployers < 6 required"
      },
      {
        "root": "world",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 27,
        "state": "THIN",
        "reason": "world: 5 deployers < 6 required"
      },
      {
        "root": "ape",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "ape: 4 launches < 5 required"
      },
      {
        "root": "bee",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "bee: 4 launches < 5 required"
      },
      {
        "root": "beebots",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "beebots: 4 launches < 5 required"
      },
      {
        "root": "bots",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "bots: 4 launches < 5 required"
      },
      {
        "root": "long",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "long: 4 launches < 5 required"
      },
      {
        "root": "luna",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "luna: 4 launches < 5 required"
      },
      {
        "root": "md",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "md: 4 launches < 5 required"
      },
      {
        "root": "nvda",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "nvda: 4 launches < 5 required"
      },
      {
        "root": "phasepunk",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "phasepunk: 4 launches < 5 required"
      },
      {
        "root": "pianocat",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "pianocat: 4 launches < 5 required"
      },
      {
        "root": "quill",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "quill: 4 launches < 5 required"
      },
      {
        "root": "quillpad",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "quillpad: 4 launches < 5 required"
      },
      {
        "root": "staked",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "staked: 4 launches < 5 required"
      },
      {
        "root": "tether",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "tether: 4 launches < 5 required"
      },
      {
        "root": "weth",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 21.6,
        "state": "THIN",
        "reason": "weth: 4 launches < 5 required"
      },
      {
        "root": "amm",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "amm: 3 launches < 5 required"
      },
      {
        "root": "anthropic",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "anthropic: 3 launches < 5 required"
      },
      {
        "root": "arcus",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "arcus: 3 launches < 5 required"
      },
      {
        "root": "bridge",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "bridge: 3 launches < 5 required"
      },
      {
        "root": "brooklyn",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "brooklyn: 3 launches < 5 required"
      },
      {
        "root": "ccff",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 16.2,
        "state": "THIN",
        "reason": "ccff: 3 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0x093974e02cf06f46be117d046d91128f599b76ec",
        "name": "Tether",
        "symbol": "USDT",
        "deployer": "0xf91c52bd087fc54a505f38ffe9e1a17e0b4dc27a",
        "block": 88351845,
        "ts": "2026-10-14T12:03:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xafd7832da17c1f673de2450c94983366cffa7777",
        "name": "STLN Anan Creek Bears",
        "symbol": "ANANCREEKBEA",
        "deployer": "0x1b4ebe73585b94578dc055c6ac7e89333fdadcf7",
        "block": 88351762,
        "ts": "2026-10-14T12:03:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x035858ed9ad13dba317e113beeea1f61d5a3ab2a",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xbc195a48ddf334f8232abd88f66854991a3f917f",
        "block": 88351730,
        "ts": "2026-10-14T12:03:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd9b8fbd61033145c5496132153ce675756313b71",
        "name": "Slvr Vote Escrow",
        "symbol": "veSLVR",
        "deployer": "0xfb0b9b3cd7337c17e422a4c74c9395ff2163eefe",
        "block": 88351673,
        "ts": "2026-10-14T12:02:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5ea5f3e40326c87ea9f4fad6fd401c95afadf5be",
        "name": "Mutineer",
        "symbol": "MUTINEER",
        "deployer": "0xf0a315d23efdbfa87055373ad6828906278fcf2b",
        "block": 88351460,
        "ts": "2026-10-14T12:02:38.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xe0346b8eaea9e8877706ba8b1ae6a88c686e7777",
        "name": "Pond Coin",
        "symbol": "POND",
        "deployer": "0xfe2cb6b8c284d632390268d8007873ac5865db0b",
        "block": 88351436,
        "ts": "2026-10-14T12:02:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x05d2acaf0c7076c9aa9df0f2778ff65c771d7777",
        "name": "Saindra",
        "symbol": "SAINDRA",
        "deployer": "0x442e63ede41fc0cd9f9a9ac2cb92092beb1438d2",
        "block": 88351401,
        "ts": "2026-10-14T12:02:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfc0c9323505adedc861793e49fe46ad5284159ca",
        "name": "STLN - Anan Creek bears",
        "symbol": "ANANCREEKBEA",
        "deployer": "0x0bde34df706882480c5403e9850c024b17703191",
        "block": 88351375,
        "ts": "2026-10-14T12:02:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf4b7ad5dcb95c27cdf89974f6077205cd1837115",
        "name": "Surplus",
        "symbol": "SURPLUS",
        "deployer": "0xc790f7122ebe639308baaab3fe21fd701fd248a6",
        "block": 88351341,
        "ts": "2026-10-14T12:02:26.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa30fa36db767ad9ed3f7a60fc79526fb4d56d344",
        "name": "United States Oil Fund • Robinhood Token",
        "symbol": "USO",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 88351294,
        "ts": "2026-10-14T12:02:21.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0349d00580586f335c92bb32e7c92db2372e3214",
        "name": "Pond coin",
        "symbol": "POND",
        "deployer": "0x2d1611fbf5d24f6f1127c41cbe8feb7ddc212c47",
        "block": 88351249,
        "ts": "2026-10-14T12:02:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6096414a4a15e3f2453a46155d6db3b095b91cf1",
        "name": "Danny Trejo",
        "symbol": "TREJO",
        "deployer": "0x6566c70f74d78dd39275f473319a3037704203e8",
        "block": 88351227,
        "ts": "2026-10-14T12:02:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa253fe6a14ec64116606981f597bd75ae8044a38",
        "name": "Ice Cold Cruggy's",
        "symbol": "ICC",
        "deployer": "0xdb68283c9f780423394158fdd9efd7ad2165f78e",
        "block": 88351081,
        "ts": "2026-10-14T12:02:00.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xbf4872b0345fab2b94e3f98016d96a07304116b0",
        "name": "test",
        "symbol": "test",
        "deployer": "0x9cda5d20c2fc8d0e25fd53f9542162c48c61309e",
        "block": 88351050,
        "ts": "2026-10-14T12:01:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb81975455cc006780e3649906b91d834411a63c7",
        "name": "1EDGE",
        "symbol": "1EDGE",
        "deployer": "0xbc195a48ddf334f8232abd88f66854991a3f917f",
        "block": 88350999,
        "ts": "2026-10-14T12:01:51.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x09b2948af931f6a3a1e2fe638def35b0106e5b05",
        "name": "Keyboard Cat",
        "symbol": "KEYCAT",
        "deployer": "0x4337fa4d86d4b6a2634900effb713bf6fb685835",
        "block": 88350791,
        "ts": "2026-10-14T12:01:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x56ddd328473adcdff3c2b68dd92d98ff997e99ea",
        "name": "Shuffle Index",
        "symbol": "XSHUFFLE",
        "deployer": "0xdaa88442e39d53749e033ed1f4871c3d05bafa87",
        "block": 88350563,
        "ts": "2026-10-14T12:01:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x48839efb58c9bd229f248e70d9a2363f959a32aa",
        "name": "EVM Dreams",
        "symbol": "EVMDreams",
        "deployer": "0x87a82a0b4ef7cc8ad7a0479255abae397dd54518",
        "block": 88350544,
        "ts": "2026-10-14T12:01:06.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x11c7804040840b511b93c1b9bb30cf57c647b9ce",
        "name": "Bee Bots",
        "symbol": "BEEBOTS",
        "deployer": "0xe243d2de1988ff91937bd8e0d670420a2c821377",
        "block": 88350515,
        "ts": "2026-10-14T12:01:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5a9fa19a602bcc4caae6ad601a1bc9ef16597777",
        "name": "The Odyssean Cat",
        "symbol": "Turtle",
        "deployer": "0xa5836e65e193949ab21f2138a55ae725a729db8e",
        "block": 88350386,
        "ts": "2026-10-14T12:00:50.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x81ad42aec9cfe3b41d58d7fa2d4979777b1351f7",
        "name": "SWAG",
        "symbol": "SWAG",
        "deployer": "0x06cb3a6841c92525e7a1998328e7c9d37e98d937",
        "block": 88350293,
        "ts": "2026-10-14T12:00:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7a59adc36aeb4fcf4b1a60db4b2eef8d80aff1e5",
        "name": "Ape City Buildings",
        "symbol": "ACB",
        "deployer": "0xe76dd6a005a17f960902659856d026fbe74f7e29",
        "block": 88350230,
        "ts": "2026-10-14T12:00:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8f5542fa30fb442d6da4c52e657a1097a79bc782",
        "name": "Orvex V4 Positions NFT",
        "symbol": "ORVEX-V4",
        "deployer": "0xcb9047fc936190648a407cafbbf3475d6b7e4713",
        "block": 88350167,
        "ts": "2026-10-14T12:00:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x26f3b1d3531600d75e5b968e4f384d6af0a16299",
        "name": "Wrapped Blackberry • Robinhood Token",
        "symbol": "wBB",
        "deployer": "0x772890c605342bcd69fc712ac242674156195028",
        "block": 88350007,
        "ts": "2026-10-14T12:00:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x364349ccedc46aa0299e20ddc619c3fb858ad2e7",
        "name": "Onion Exchange",
        "symbol": "ONION",
        "deployer": "0x5efadb8c3504214901ef5e27f107a96bd5dc288d",
        "block": 88349965,
        "ts": "2026-10-14T12:00:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5eeb97a4ba79d133d915719db32ba459489fed7a",
        "name": "fomo chan",
        "symbol": "FOMOCHAN",
        "deployer": "0x03a42f747ba73764734c3608bc39a41fc063a727",
        "block": 88349941,
        "ts": "2026-10-14T12:00:06.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x6d7dba907843e239c6154ac83e3f31c51fd2ef05",
        "name": "0% Origination Pool - 22",
        "symbol": "0% OP-22",
        "deployer": "0xeedaf134ca33ce8268d4509200779e7d357b5718",
        "block": 88349937,
        "ts": "2026-10-14T12:00:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe8af57b28b2fee14bb31fc1bdb7a01ff1055c727",
        "name": "ROBINHOOD GET LAMBO",
        "symbol": "ROXXX",
        "deployer": "0x43370483638fd43f9a9ed2884c028bfa4e546ca5",
        "block": 88349896,
        "ts": "2026-10-14T12:00:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xeb65bf0cc0f4c1522c70c560e5481b5afd126027",
        "name": "Wrapped Salesforce • Robinhood Token",
        "symbol": "wCRM",
        "deployer": "0x772890c605342bcd69fc712ac242674156195028",
        "block": 88349877,
        "ts": "2026-10-14T11:59:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x14c49e6118f46525de9ab41a51cbaa3c6ebf181d",
        "name": "Rare Friends Generations",
        "symbol": "GENERATIONS",
        "deployer": "0x386157d1b6585dc658fb8c89c096462cd49b2e8e",
        "block": 88349754,
        "ts": "2026-10-14T11:59:47.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x02d9876a21af7545f8632c3af76ec90b5ad4b66d",
        "name": "Ekubo Positions",
        "symbol": "ekuPo",
        "deployer": "0x6c6a40d2d1fc442e281e1f80314fd86516e17127",
        "block": 88349652,
        "ts": "2026-10-14T11:59:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf6a5c9766b1e42a643bbda888060b8f8d1386819",
        "name": "Clawdbug",
        "symbol": "CLAWDBUG",
        "deployer": "0xe110937536c4be5eb197940f9c0e831d40587942",
        "block": 88349566,
        "ts": "2026-10-14T11:59:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x26d2f7acb07707034406a0dc458351bb63c02553",
        "name": "Fee Beneficiary",
        "symbol": "FEEB",
        "deployer": "0xe110937536c4be5eb197940f9c0e831d40587942",
        "block": 88349566,
        "ts": "2026-10-14T11:59:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x101f21bfbebf6c82016f89c7bce264cac22d64bf",
        "name": "Sage Wisdom",
        "symbol": "SAGE",
        "deployer": "0xc12146045209a57fed9a77ce46814dd6a283b8ab",
        "block": 88349275,
        "ts": "2026-10-14T11:58:59.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7d077f7e43c3383f90cbd48e2baadb2c2dbd6ad3",
        "name": "The Yield Field Deeds",
        "symbol": "YFD",
        "deployer": "0x983375d79d902ff923c2a6c4dc51246a1d272299",
        "block": 88349225,
        "ts": "2026-10-14T11:58:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb68f39034d78f25f10638e4ed68b2e2a07e01711",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xbc195a48ddf334f8232abd88f66854991a3f917f",
        "block": 88349070,
        "ts": "2026-10-14T11:58:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x12fd2de52f9a50ebdfc82eaa62217ea0245df108",
        "name": "STLN - Times Square",
        "symbol": "TIMESSQUARE",
        "deployer": "0x805a44cf406269d759696320c6fd69217d1cafcd",
        "block": 88349032,
        "ts": "2026-10-14T11:58:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2f1c5f4576bce687f8238dbc563f91b778dedb94",
        "name": "OpenAI PreStocks (EARN bridge)",
        "symbol": "eOPENAI",
        "deployer": "0x73a063c96b5d67863deaa7b163207e769a7c2cee",
        "block": 88348956,
        "ts": "2026-10-14T11:58:27.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x49c083e8e1da11f674e9be223e74e442437a7777",
        "name": "The Odyssean Cat",
        "symbol": "Turtle",
        "deployer": "0x0243b4b0d042a3da9219bb210d0fd5c5148fa54a",
        "block": 88348790,
        "ts": "2026-10-14T11:58:10.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x48c6c260fec4fecaa83a788f9d4d0df843bd130f",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0xbc195a48ddf334f8232abd88f66854991a3f917f",
        "block": 88348783,
        "ts": "2026-10-14T11:58:09.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
