/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-11-12T20:31:42.000Z",
    "opened_at": "2026-11-12T19:31:42.000Z",
    "window_hours": 1,
    "head_block": 112809508,
    "start_block": 112774959,
    "blocks_scanned": 34549,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 386,
    "unnamed_contracts": 20,
    "via_factory": 380,
    "no_receipt": 0,
    "candidates": 406,
    "mint_events": 23506,
    "deployers": 221,
    "roots": 597,
    "cleared_multiple": 388,
    "failed_gates": 384,
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
      "amd",
      "jensen",
      "sins-jenny"
    ],
    "top": {
      "root": "jensen",
      "launches": 14,
      "deployers": 12,
      "baseline_share": 0.0004,
      "multiple": 90.7,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "jensen",
        "launches": 14,
        "deployers": 12,
        "baseline_share": 0.0004,
        "multiple": 90.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "amd",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 38.9,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "sins",
        "launches": 9,
        "deployers": 9,
        "baseline_share": 0.0004,
        "multiple": 58.3,
        "state": "MERGED",
        "reason": "sins + jenny co-occur 78%, merged to sins-jenny"
      },
      {
        "root": "jenny",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 45.3,
        "state": "MERGED",
        "reason": "sins + jenny co-occur 78%, merged to sins-jenny"
      },
      {
        "root": "robinhood",
        "launches": 41,
        "deployers": 13,
        "baseline_share": 0.0513,
        "multiple": 2.1,
        "state": "BELOW",
        "reason": "robinhood: 2.1x over baseline < 6.0x required"
      },
      {
        "root": "usdg",
        "launches": 13,
        "deployers": 12,
        "baseline_share": 0.0203,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "usdg: 1.7x over baseline < 6.0x required"
      },
      {
        "root": "uniswap",
        "launches": 12,
        "deployers": 11,
        "baseline_share": 0.0509,
        "multiple": 0.6,
        "state": "BELOW",
        "reason": "uniswap: 0.6x over baseline < 6.0x required"
      },
      {
        "root": "uni",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0424,
        "multiple": 0.5,
        "state": "BELOW",
        "reason": "uni: 0.5x over baseline < 6.0x required"
      },
      {
        "root": "amc",
        "launches": 6,
        "deployers": 4,
        "baseline_share": 0.001,
        "multiple": 15.5,
        "state": "THIN",
        "reason": "amc: 4 deployers < 6 required"
      },
      {
        "root": "dick",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 32.4,
        "state": "THIN",
        "reason": "dick: 5 deployers < 6 required"
      },
      {
        "root": "huang",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 32.4,
        "state": "THIN",
        "reason": "huang: 4 deployers < 6 required"
      },
      {
        "root": "micro",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 32.4,
        "state": "THIN",
        "reason": "micro: 5 deployers < 6 required"
      },
      {
        "root": "chop",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0041,
        "multiple": 3.2,
        "state": "BELOW",
        "reason": "chop: 3.2x over baseline < 6.0x required"
      },
      {
        "root": "dog",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0058,
        "multiple": 2.2,
        "state": "BELOW",
        "reason": "dog: 2.2x over baseline < 6.0x required"
      },
      {
        "root": "cat",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.013,
        "multiple": 1,
        "state": "BELOW",
        "reason": "cat: 1.0x over baseline < 6.0x required"
      },
      {
        "root": "positions",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0167,
        "multiple": 0.8,
        "state": "BELOW",
        "reason": "positions: 0.8x over baseline < 6.0x required"
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
        "root": "max",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 25.9,
        "state": "THIN",
        "reason": "max: 4 launches < 5 required"
      },
      {
        "root": "recurve",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 25.9,
        "state": "THIN",
        "reason": "recurve: 4 launches < 5 required"
      },
      {
        "root": "brownfi",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0025,
        "multiple": 4.1,
        "state": "BELOW",
        "reason": "brownfi: 4.1x over baseline < 6.0x required"
      },
      {
        "root": "bf",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0027,
        "multiple": 3.8,
        "state": "BELOW",
        "reason": "bf: 3.8x over baseline < 6.0x required"
      },
      {
        "root": "layerbank",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0053,
        "multiple": 2,
        "state": "BELOW",
        "reason": "layerbank: 2.0x over baseline < 6.0x required"
      },
      {
        "root": "inc",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0057,
        "multiple": 1.8,
        "state": "BELOW",
        "reason": "inc: 1.8x over baseline < 6.0x required"
      },
      {
        "root": "staked",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0069,
        "multiple": 1.5,
        "state": "BELOW",
        "reason": "staked: 1.5x over baseline < 6.0x required"
      },
      {
        "root": "cow",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0072,
        "multiple": 1.4,
        "state": "BELOW",
        "reason": "cow: 1.4x over baseline < 6.0x required"
      },
      {
        "root": "hood",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0108,
        "multiple": 1,
        "state": "BELOW",
        "reason": "hood: 1.0x over baseline < 6.0x required"
      },
      {
        "root": "acc",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.4,
        "state": "THIN",
        "reason": "acc: 3 launches < 5 required"
      },
      {
        "root": "acceleration",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.4,
        "state": "THIN",
        "reason": "acceleration: 3 launches < 5 required"
      },
      {
        "root": "affair",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.4,
        "state": "THIN",
        "reason": "affair: 3 launches < 5 required"
      },
      {
        "root": "eggs",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 19.4,
        "state": "THIN",
        "reason": "eggs: 3 launches < 5 required"
      },
      {
        "root": "fullrange",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 19.4,
        "state": "THIN",
        "reason": "fullrange: 3 launches < 5 required"
      },
      {
        "root": "inevitable",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 19.4,
        "state": "THIN",
        "reason": "inevitable: 3 launches < 5 required"
      },
      {
        "root": "snap",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.001,
        "multiple": 7.8,
        "state": "THIN",
        "reason": "snap: 3 launches < 5 required"
      },
      {
        "root": "group",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0011,
        "multiple": 7.1,
        "state": "THIN",
        "reason": "group: 3 launches < 5 required"
      },
      {
        "root": "nvidia",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0019,
        "multiple": 4.1,
        "state": "BELOW",
        "reason": "nvidia: 4.1x over baseline < 6.0x required"
      },
      {
        "root": "technologies",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0019,
        "multiple": 4.1,
        "state": "BELOW",
        "reason": "technologies: 4.1x over baseline < 6.0x required"
      },
      {
        "root": "nvda",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0024,
        "multiple": 3.2,
        "state": "BELOW",
        "reason": "nvda: 3.2x over baseline < 6.0x required"
      },
      {
        "root": "fund",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0029,
        "multiple": 2.7,
        "state": "BELOW",
        "reason": "fund: 2.7x over baseline < 6.0x required"
      },
      {
        "root": "alandale",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0032,
        "multiple": 2.4,
        "state": "BELOW",
        "reason": "alandale: 2.4x over baseline < 6.0x required"
      },
      {
        "root": "credit",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0046,
        "multiple": 1.7,
        "state": "BELOW",
        "reason": "credit: 1.7x over baseline < 6.0x required"
      }
    ],
    "recent": [
      {
        "address": "0x17a9534a3ddea45d68144b2a089586a52563a6ea",
        "name": "Cybercoin",
        "symbol": "CYBERCOIN",
        "deployer": "0xc9c07482b2e683bfd4f7c30ef95647b698b4ef68",
        "block": 112809405,
        "ts": "2026-11-12T20:31:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfcf7b7d194acb1889c707cfda75740f73b203807",
        "name": "CorpusAI",
        "symbol": "CORPUS",
        "deployer": "0x92b34d351c29fd38a71ea6652f35ce324b64ca45",
        "block": 112808991,
        "ts": "2026-11-12T20:30:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5fef1d7a4360da9c210d6f06fc6d084fcf437b47",
        "name": "FullRange-USDG-DD-26900-0",
        "symbol": "FullRange-USDG-DD-26900-0",
        "deployer": "0xae5f7352f9d76951d96e1fefb8c1bac45ea58e18",
        "block": 112808871,
        "ts": "2026-11-12T20:30:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x40a4ecda83e0113da436788f228aa4ab9dfa6e9e",
        "name": "Rampart",
        "symbol": "RAMPART",
        "deployer": "0x17c5eaa865862ede9c1f296036ff5a4c68717cab",
        "block": 112808806,
        "ts": "2026-11-12T20:30:30.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb5e10a3ae1755ff9aed06e53f7ba80e2589c9f6a",
        "name": "Super Xero",
        "symbol": "XERO",
        "deployer": "0x9ec607818c2cadec4ee1979dc8a237deb2216308",
        "block": 112808752,
        "ts": "2026-11-12T20:30:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x62d8cab8e189f5e86c7dcaba5ae14c49e5ccbf88",
        "name": "Ansem is back",
        "symbol": "ANSEM",
        "deployer": "0x1afab1f6b0d565544effb26fca7d6b5e9cb46c81",
        "block": 112808682,
        "ts": "2026-11-12T20:30:18.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xa62ed9b647d033181d6a9d521744226ac8f765d5",
        "name": "ScrapORCS",
        "symbol": "scraporcs",
        "deployer": "0x6e9387c9d15567320b980fe9f52e7e28fe344f6d",
        "block": 112808586,
        "ts": "2026-11-12T20:30:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x156e175dd063a8ce274c50654ef40e0032b3fbcf",
        "name": "Broadcom • Robinhood Token",
        "symbol": "AVGO",
        "deployer": "0x2b94105fff37630f98e1f24811dad588fc5c3a87",
        "block": 112808559,
        "ts": "2026-11-12T20:30:05.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x88a149564ecf2ee92b1a8eaf10e47a73d7a46f8f",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x4c606d69afcee93255ff76cc8af748fccd1bdd82",
        "block": 112808542,
        "ts": "2026-11-12T20:30:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xef839ad8f1d490d25dcea06bc2098d3ea39cb15d",
        "name": "Staked MNTD",
        "symbol": "sMNTD",
        "deployer": "0x1d53960165188ee0c74a5705ee6307fea517c613",
        "block": 112808401,
        "ts": "2026-11-12T20:29:49.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcc4c5e1ec8fbb4ee29650311c9a37312a10eae39",
        "name": "A Meme Dog",
        "symbol": "AMD",
        "deployer": "0x4c606d69afcee93255ff76cc8af748fccd1bdd82",
        "block": 112808213,
        "ts": "2026-11-12T20:29:29.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xf0158eff432a2f2351a25da5361c25c6c9c649af",
        "name": "A legendary warlord.",
        "symbol": "A",
        "deployer": "0x1afab1f6b0d565544effb26fca7d6b5e9cb46c81",
        "block": 112808206,
        "ts": "2026-11-12T20:29:28.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x90547b94ed2ef693efd190e1a0f361e173ac1e18",
        "name": "NVIDIUSSY",
        "symbol": "IACC",
        "deployer": "0xf7093908040391c187f7644c4e42f7fe6f76cc88",
        "block": 112808013,
        "ts": "2026-11-12T20:29:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0587d202d23c4c4aab1ab983071e36eb4987bea1",
        "name": "Affair Inu",
        "symbol": "AI",
        "deployer": "0x92ede61eb0507e923dc1b8f048167482f64ab637",
        "block": 112808013,
        "ts": "2026-11-12T20:29:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5e868ef258f69464daf43d045fc1421f0ae24613",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x11f42fbeb77fb868ac46675d4294cf50647ef7a3",
        "block": 112807845,
        "ts": "2026-11-12T20:28:51.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc6e2dc251eaa317d908509cbd3ee23baac73d26f",
        "name": "Medieval Tetris Trophy",
        "symbol": "MTET",
        "deployer": "0xfb9ae8ddee587e535f9075dde3badec86e2a8e04",
        "block": 112807802,
        "ts": "2026-11-12T20:28:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb5f26b8f71c23a6c94ad8f13b0039290ed091e18",
        "name": "NVIDIUSSY",
        "symbol": "NVIDIUSSY",
        "deployer": "0xd20278dc748cfe4a381e8969751873f1ab80cce4",
        "block": 112807722,
        "ts": "2026-11-12T20:28:38.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe3faf2a3d76956585e6b312655fb1a473aa621a3",
        "name": "Uniswap V2",
        "symbol": "UNI-V2",
        "deployer": "0x6463365014824539d9e3ee7fd1871038ec73b5a1",
        "block": 112807637,
        "ts": "2026-11-12T20:28:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xa8f291e35be3a387689396936660c1095173c425",
        "name": "Inevitable Acceleration",
        "symbol": "i/acc",
        "deployer": "0xf436f40507286ad5a6b65df5a10b5a41c2c4251f",
        "block": 112807432,
        "ts": "2026-11-12T20:28:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x33ae6d46071ee41bb627b44971869c0f13af5508",
        "name": "Based COIN Wave",
        "symbol": "BACOWA",
        "deployer": "0x1afab1f6b0d565544effb26fca7d6b5e9cb46c81",
        "block": 112807211,
        "ts": "2026-11-12T20:27:44.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xe95faf6fff48f4b257eb83fc97779f5491f67777",
        "name": "NVIDIA NEWS TOKEN",
        "symbol": "NVIDIANEWS",
        "deployer": "0x42ae01552f4fc48edb2c7e9529494ee4dee25f1b",
        "block": 112807088,
        "ts": "2026-11-12T20:27:31.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x1a01e1e8899ed69bedb28930cd2fe0e0c94b5dc3",
        "name": "Volume",
        "symbol": "VOLUME",
        "deployer": "0x8dd3c67553387ac245cdabe31278d0bc4b1848db",
        "block": 112807031,
        "ts": "2026-11-12T20:27:25.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf62911ef017c1464f5701efe62d5928bc5811214",
        "name": "Inevitable Acceleration",
        "symbol": "i/acc",
        "deployer": "0xfb5145ac10cbffb49be74c66ae8cda9e65d8fd4f",
        "block": 112806909,
        "ts": "2026-11-12T20:27:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x97639a16061f455404c6d1b245ba63d364667e8e",
        "name": "Devil Hood",
        "symbol": "DEVIL",
        "deployer": "0xe937cf2b4b8cf6f24ce6eb74a2ca501e8ad60ecf",
        "block": 112806861,
        "ts": "2026-11-12T20:27:07.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x77709dbe36fbb9d7c9a12f4f4922b196c206a9ad",
        "name": "Wrapped Nano Nuclear Energy • Robinhood Token",
        "symbol": "wNNE",
        "deployer": "0x9efc87801ffb0b27766d6c568e3c0d76bd59d605",
        "block": 112806618,
        "ts": "2026-11-12T20:26:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x98dc3d07bbc6060147339cc2eb6b1736372b530d",
        "name": "Inevitable Acceleration",
        "symbol": "i/acc",
        "deployer": "0x5e8f0cec7963f2218118badd91e89cf25cdfe06c",
        "block": 112806239,
        "ts": "2026-11-12T20:26:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xf0bdaa7a20b9b7b419c5fabf7b6a587b490af62c",
        "name": "Pearl",
        "symbol": "PEARL",
        "deployer": "0x1afab1f6b0d565544effb26fca7d6b5e9cb46c81",
        "block": 112806077,
        "ts": "2026-11-12T20:25:46.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x9e8ebf8903dbfd3e18aa4a1570a579d635d588cb",
        "name": "marsopetator",
        "symbol": "MARSOPERAT",
        "deployer": "0xa5db17162136a3cd744355a8b36ed171c8df182e",
        "block": 112805495,
        "ts": "2026-11-12T20:24:46.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xce2ba9160ea833512a66a4ea788f7829642bdefc",
        "name": "Chickens By EGGS",
        "symbol": "EGGS",
        "deployer": "0x6866a6a28129839f67da069ceb68ad258830363e",
        "block": 112805480,
        "ts": "2026-11-12T20:24:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x834e2c91b49b871228c182d3e3799debd4bffa7d",
        "name": "Wrapped Sunrun • Robinhood Token",
        "symbol": "wRUN",
        "deployer": "0x4a438c7c4052209b71cc403f28b9976300bffbbe",
        "block": 112805407,
        "ts": "2026-11-12T20:24:37.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd662322dc9bdff9a57d6af444f9011fa2c70e221",
        "name": "CATCH",
        "symbol": "CATCH",
        "deployer": "0x947527a0d05e25e28a24ff8e52d742f9a6060ca0",
        "block": 112805360,
        "ts": "2026-11-12T20:24:32.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x5b69f1e127cb8cbe0b3880e8c1411185ae719e37",
        "name": "Heeshilio",
        "symbol": "HEESH",
        "deployer": "0x6866a6a28129839f67da069ceb68ad258830363e",
        "block": 112805179,
        "ts": "2026-11-12T20:24:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9c71cf5b8d39cce128e5bb0d84fe64d992038747",
        "name": "BurstingBagel",
        "symbol": "BAGEL",
        "deployer": "0x6866a6a28129839f67da069ceb68ad258830363e",
        "block": 112805022,
        "ts": "2026-11-12T20:23:56.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd837aa8a602b9e67c0667c2ae702372b6c696932",
        "name": "Revvy",
        "symbol": "REVVY",
        "deployer": "0x1afab1f6b0d565544effb26fca7d6b5e9cb46c81",
        "block": 112804633,
        "ts": "2026-11-12T20:23:14.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xff1743bcdc607dd7ef2d621ccd0c5159d4da3b08",
        "name": "Ninja Cat Live",
        "symbol": "NINJACAT",
        "deployer": "0x1b7d26073dcc3e9c9a4dab39ecc57f19d916431e",
        "block": 112804580,
        "ts": "2026-11-12T20:23:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x53f9ed4253f67947fddf445363f3970fe99ad56e",
        "name": "Sprinkles",
        "symbol": "SPRINK",
        "deployer": "0x6866a6a28129839f67da069ceb68ad258830363e",
        "block": 112804530,
        "ts": "2026-11-12T20:23:03.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x3b5d3aad372d2bd30aaa1aca19ed8d52361d01ff",
        "name": "Jensen Sins",
        "symbol": "JENNY",
        "deployer": "0x0b4bb03613f2482de1adfc9db653b0dc74446ace",
        "block": 112804442,
        "ts": "2026-11-12T20:22:54.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0x8d52a9721a0a74abc07fa009f4bd6860ff4a9ade",
        "name": "ArcStocks",
        "symbol": "ASTOCK",
        "deployer": "0x1afab1f6b0d565544effb26fca7d6b5e9cb46c81",
        "block": 112804158,
        "ts": "2026-11-12T20:22:24.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xa5027627ffcd35a9603fa8e16fb6df0a0ffe1e18",
        "name": "marsoperator",
        "symbol": "MARSOPETATOR",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 112803867,
        "ts": "2026-11-12T20:21:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x8825edff851f6fc8f0d91d3942c946910d38771b",
        "name": "BrownFi V3",
        "symbol": "BF-V3",
        "deployer": "0xb0e4413e1eb8df9de7e61fc8654746d8e85852cf",
        "block": 112803837,
        "ts": "2026-11-12T20:21:51.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
