/* Written by scripts/collect.mjs. Do not edit by hand. */
;(function (scope) {
  scope.RHC_SNAPSHOT = {
    "schema": 1,
    "chain": "robinhood",
    "chain_id": 4663,
    "closed_at": "2026-10-25T18:55:48.000Z",
    "opened_at": "2026-10-25T17:55:48.000Z",
    "window_hours": 1,
    "head_block": 97809702,
    "start_block": 97774771,
    "blocks_scanned": 34931,
    "source": "https://rpc.mainnet.chain.robinhood.com",
    "complete": true,
    "launches": 491,
    "unnamed_contracts": 0,
    "via_factory": 424,
    "no_receipt": 0,
    "candidates": 491,
    "mint_events": 15345,
    "deployers": 319,
    "roots": 557,
    "cleared_multiple": 144,
    "failed_gates": 133,
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
      "control-ctrl",
      "genny-hippo",
      "nft",
      "positions",
      "robinhood",
      "stock",
      "uniswap-uni",
      "usdg"
    ],
    "top": {
      "root": "nft",
      "launches": 8,
      "deployers": 8,
      "baseline_share": 0.0004,
      "multiple": 40.7,
      "state": "WAVE",
      "reason": ""
    },
    "rows": [
      {
        "root": "nft",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 40.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "positions",
        "launches": 8,
        "deployers": 8,
        "baseline_share": 0.0004,
        "multiple": 40.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "stock",
        "launches": 8,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 40.7,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "usdg",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 35.6,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "robinhood",
        "launches": 6,
        "deployers": 6,
        "baseline_share": 0.0004,
        "multiple": 30.5,
        "state": "WAVE",
        "reason": ""
      },
      {
        "root": "uniswap",
        "launches": 32,
        "deployers": 27,
        "baseline_share": 0.0004,
        "multiple": 162.9,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 84%, merged to uniswap-uni"
      },
      {
        "root": "uni",
        "launches": 27,
        "deployers": 23,
        "baseline_share": 0.0004,
        "multiple": 137.5,
        "state": "MERGED",
        "reason": "uniswap + uni co-occur 84%, merged to uniswap-uni"
      },
      {
        "root": "control",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 56,
        "state": "MERGED",
        "reason": "control + ctrl co-occur 100%, merged to control-ctrl"
      },
      {
        "root": "ctrl",
        "launches": 11,
        "deployers": 11,
        "baseline_share": 0.0004,
        "multiple": 56,
        "state": "MERGED",
        "reason": "control + ctrl co-occur 100%, merged to control-ctrl"
      },
      {
        "root": "genny",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 35.6,
        "state": "MERGED",
        "reason": "genny + hippo co-occur 100%, merged to genny-hippo"
      },
      {
        "root": "hippo",
        "launches": 7,
        "deployers": 7,
        "baseline_share": 0.0004,
        "multiple": 35.6,
        "state": "MERGED",
        "reason": "genny + hippo co-occur 100%, merged to genny-hippo"
      },
      {
        "root": "nms",
        "launches": 6,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 30.5,
        "state": "THIN",
        "reason": "nms: 5 deployers < 6 required"
      },
      {
        "root": "staked",
        "launches": 6,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 30.5,
        "state": "THIN",
        "reason": "staked: 3 deployers < 6 required"
      },
      {
        "root": "big",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 25.5,
        "state": "THIN",
        "reason": "big: 5 deployers < 6 required"
      },
      {
        "root": "cat",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 25.5,
        "state": "THIN",
        "reason": "cat: 5 deployers < 6 required"
      },
      {
        "root": "hood",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 25.5,
        "state": "THIN",
        "reason": "hood: 5 deployers < 6 required"
      },
      {
        "root": "milker",
        "launches": 5,
        "deployers": 5,
        "baseline_share": 0.0004,
        "multiple": 25.5,
        "state": "THIN",
        "reason": "milker: 5 deployers < 6 required"
      },
      {
        "root": "net",
        "launches": 5,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 25.5,
        "state": "THIN",
        "reason": "net: 3 deployers < 6 required"
      },
      {
        "root": "ramses",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 25.5,
        "state": "THIN",
        "reason": "ramses: 4 deployers < 6 required"
      },
      {
        "root": "titty",
        "launches": 5,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 25.5,
        "state": "THIN",
        "reason": "titty: 4 deployers < 6 required"
      },
      {
        "root": "borrowable",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "borrowable: 4 launches < 5 required"
      },
      {
        "root": "cow",
        "launches": 4,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "cow: 4 launches < 5 required"
      },
      {
        "root": "enjoyers",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "enjoyers: 4 launches < 5 required"
      },
      {
        "root": "flock",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "flock: 4 launches < 5 required"
      },
      {
        "root": "gigantic",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "gigantic: 4 launches < 5 required"
      },
      {
        "root": "lend",
        "launches": 4,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "lend: 4 launches < 5 required"
      },
      {
        "root": "memestock",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "memestock: 4 launches < 5 required"
      },
      {
        "root": "munaj",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "munaj: 4 launches < 5 required"
      },
      {
        "root": "nucki",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "nucki: 4 launches < 5 required"
      },
      {
        "root": "quadlux",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "quadlux: 4 launches < 5 required"
      },
      {
        "root": "virtuals",
        "launches": 4,
        "deployers": 4,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "virtuals: 4 launches < 5 required"
      },
      {
        "root": "volatile",
        "launches": 4,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 20.4,
        "state": "THIN",
        "reason": "volatile: 4 launches < 5 required"
      },
      {
        "root": "amm",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 15.3,
        "state": "THIN",
        "reason": "amm: 3 launches < 5 required"
      },
      {
        "root": "anonymous",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 15.3,
        "state": "THIN",
        "reason": "anonymous: 3 launches < 5 required"
      },
      {
        "root": "awards",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 15.3,
        "state": "THIN",
        "reason": "awards: 3 launches < 5 required"
      },
      {
        "root": "binzo",
        "launches": 3,
        "deployers": 2,
        "baseline_share": 0.0004,
        "multiple": 15.3,
        "state": "THIN",
        "reason": "binzo: 3 launches < 5 required"
      },
      {
        "root": "counterparty",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 15.3,
        "state": "THIN",
        "reason": "counterparty: 3 launches < 5 required"
      },
      {
        "root": "credit",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 15.3,
        "state": "THIN",
        "reason": "credit: 3 launches < 5 required"
      },
      {
        "root": "ctr",
        "launches": 3,
        "deployers": 1,
        "baseline_share": 0.0004,
        "multiple": 15.3,
        "state": "THIN",
        "reason": "ctr: 3 launches < 5 required"
      },
      {
        "root": "just",
        "launches": 3,
        "deployers": 3,
        "baseline_share": 0.0004,
        "multiple": 15.3,
        "state": "THIN",
        "reason": "just: 3 launches < 5 required"
      }
    ],
    "recent": [
      {
        "address": "0xa09131f154b885bc286e73ea9ff2d7a0039c19bf",
        "name": "National Market System",
        "symbol": "NMS",
        "deployer": "0x61e697835cb1bc6f0d3e7fccb83e6b819c066f1e",
        "block": 97809675,
        "ts": "2026-10-25T18:55:45.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x2db8822b702b10e54d16183b55ea8f437610be7f",
        "name": "Grok Bot",
        "symbol": "GROK",
        "deployer": "0xf1719ac633624e479f0088d95eb5cd4c8deb7489",
        "block": 97809632,
        "ts": "2026-10-25T18:55:41.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc85e7903692a613a03aaa530d91f196863039972",
        "name": "ROB TOWN",
        "symbol": "ROB",
        "deployer": "0xf81166b29d83104d40a381b3b715a06038b8364d",
        "block": 97809354,
        "ts": "2026-10-25T18:55:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x66fe904802a6058b1eeceeab40a2b5537f0c2480",
        "name": "Bugs Mode",
        "symbol": "BUGS",
        "deployer": "0x53cdf47a13026159654d7ff074e1cfc291d7d944",
        "block": 97809351,
        "ts": "2026-10-25T18:55:12.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xb083cb2615991a6359755d4c7ab7d786aed07777",
        "name": "FraxFi",
        "symbol": "FRAX",
        "deployer": "0xfe2cb6b8c284d632390268d8007873ac5865db0b",
        "block": 97809240,
        "ts": "2026-10-25T18:55:01.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xc1460146fd85af571409afce9bebb1dc25bc7777",
        "name": "Stock Token",
        "symbol": "STOCK",
        "deployer": "0x498b1bee7a146a4d10514f2d8eb1201b447ad384",
        "block": 97809169,
        "ts": "2026-10-25T18:54:54.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x18934f285cce202340df715caffbd556abcbeeaf",
        "name": "Sausage Soda",
        "symbol": "SSU",
        "deployer": "0x7e186f431907435b86954490a30381dcd70adf7f",
        "block": 97809096,
        "ts": "2026-10-25T18:54:47.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xf39ef8b96259202ce375011f9600260cbcc6029f",
        "name": "Stock Token",
        "symbol": "STOCK",
        "deployer": "0xdf2237114d595e0bf4d35cbcdebcdf43c55c4669",
        "block": 97809055,
        "ts": "2026-10-25T18:54:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x795b3f0c6b7e0d4383ea4a680479f63553ab7fe0",
        "name": "National Market System",
        "symbol": "NMS",
        "deployer": "0x61e697835cb1bc6f0d3e7fccb83e6b819c066f1e",
        "block": 97808965,
        "ts": "2026-10-25T18:54:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xb5e10a3ae1755ff9aed06e53f7ba80e2589c9f6a",
        "name": "Super Xero",
        "symbol": "XERO",
        "deployer": "0xd658b54e2888c1d1de2d2f5fc8b05bed98605a52",
        "block": 97808801,
        "ts": "2026-10-25T18:54:17.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x59d5210982fc940a335b9460d3f525e0e2c2debf",
        "name": "WICK COIN",
        "symbol": "WICK",
        "deployer": "0x378447d1bc980ff876557e4debebc99a050b73d9",
        "block": 97808726,
        "ts": "2026-10-25T18:54:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0da3f606130d5ba86bb5854b851cafca6443d09e",
        "name": "Floki OS",
        "symbol": "FLOKIOS",
        "deployer": "0xf22e13f4fecf19c17cd142b58a3ed3fbfc361ff5",
        "block": 97808714,
        "ts": "2026-10-25T18:54:08.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x71b34d7c4bfd452f00eac6e8377b89403d936354",
        "name": "National Market System",
        "symbol": "NMS",
        "deployer": "0xdf2237114d595e0bf4d35cbcdebcdf43c55c4669",
        "block": 97808563,
        "ts": "2026-10-25T18:53:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7a5da7126563227304f3fae0d9c991f734ca85ad",
        "name": "Not My Stock",
        "symbol": "NMS",
        "deployer": "0x61e697835cb1bc6f0d3e7fccb83e6b819c066f1e",
        "block": 97808426,
        "ts": "2026-10-25T18:53:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x730af443a0f717a4e85fa1d651b30b3229341e18",
        "name": "urmom",
        "symbol": "URMOM",
        "deployer": "0xf7093908040391c187f7644c4e42f7fe6f76cc88",
        "block": 97808367,
        "ts": "2026-10-25T18:53:33.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x619ddcc572979f6c1a8cc36d7c741686b0291e18",
        "name": "YourStockTheirTokenYourProblem",
        "symbol": "MEMETKOEN",
        "deployer": "0x387ae0b63dcd92f0220149d31958c72c270993fc",
        "block": 97808263,
        "ts": "2026-10-25T18:53:22.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x0020702aa4edb9e141900887ab1b0ac709a77777",
        "name": "Launch Frog",
        "symbol": "LAUNCHFROG",
        "deployer": "0x7485fbfd99993dab4c9964f53791e40d14253c97",
        "block": 97807968,
        "ts": "2026-10-25T18:52:53.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7d7f581f707e8c42285fa533bdc907a706040f02",
        "name": "Not My Stock",
        "symbol": "NMS",
        "deployer": "0xdf2237114d595e0bf4d35cbcdebcdf43c55c4669",
        "block": 97807871,
        "ts": "2026-10-25T18:52:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xcd87db3c125078d9a83e7de69e4e468905787777",
        "name": "Not My Stock",
        "symbol": "NMS",
        "deployer": "0xa7ba884561771e707f7f29bd5388b77f1e470daf",
        "block": 97807785,
        "ts": "2026-10-25T18:52:34.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xfcca112411268fc28c2c5acbf633c745803040a4",
        "name": "Not My Stock",
        "symbol": "NMS",
        "deployer": "0x17bb3f846ef1dd12d42a25475f75f2225f24039b",
        "block": 97807733,
        "ts": "2026-10-25T18:52:29.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x7819aacabef5b8438536329ecfb6f3b7f6d86ccc",
        "name": "HØØDBITZ",
        "symbol": "$BITZ",
        "deployer": "0x919968a4238a54b381f022a360260ef5d7e015ac",
        "block": 97807588,
        "ts": "2026-10-25T18:52:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x63c12667638f2ae6fc6ae09b43d98ec84a8586ea",
        "name": "Wrapped Staked NET",
        "symbol": "wsNET",
        "deployer": "0x532ac6fa94797eb90745f4b140d05be1a9efee15",
        "block": 97807571,
        "ts": "2026-10-25T18:52:13.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x91419a7b1de15464b050d12cbd2d858e1c689ccc",
        "name": "Not My Stock",
        "symbol": "NMS",
        "deployer": "0xdf2237114d595e0bf4d35cbcdebcdf43c55c4669",
        "block": 97807566,
        "ts": "2026-10-25T18:52:12.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe2b1c9dcdf2cbe25f33b1d245ffd8ad943abaf98",
        "name": "Cow Ramses Robinhood microduck-USDG",
        "symbol": "cowRamsesRobinhoodmicroduck-USDG",
        "deployer": "0xd96ba0b804b16403b88b90225fb3009b4632ae27",
        "block": 97807399,
        "ts": "2026-10-25T18:51:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x45c08056a1b5dd4af73303b29c0bfdb9b939c8fa",
        "name": "Reward Cow Ramses Robinhood microduck-USDG",
        "symbol": "rcowRamsesRobinhoodmicroduck-USDG",
        "deployer": "0xd96ba0b804b16403b88b90225fb3009b4632ae27",
        "block": 97807399,
        "ts": "2026-10-25T18:51:55.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x97a92f2e8844cc6119874b952032882c2fef7777",
        "name": "Trendr AI",
        "symbol": "TREND",
        "deployer": "0x1b4ebe73585b94578dc055c6ac7e89333fdadcf7",
        "block": 97807199,
        "ts": "2026-10-25T18:51:35.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x51fc3015c65bf47b840156a373405f456415d34e",
        "name": "Trendr AI",
        "symbol": "TREND",
        "deployer": "0x4d1bfdef875be5d47e845a344baba7ec9784843f",
        "block": 97807134,
        "ts": "2026-10-25T18:51:28.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x75fae5451eb136f6e5db615150339f830ccda72c",
        "name": "FLYING CAR",
        "symbol": "FCAR",
        "deployer": "0xe43532231687fe4b2ef44c31e0387e86299288a1",
        "block": 97806994,
        "ts": "2026-10-25T18:51:14.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xbf6bd9aa3e6a5ddac553527dec7e671ac0f41e18",
        "name": "Not My Stock",
        "symbol": "NMS",
        "deployer": "0x792dd4c93cfa919e141e6a0be37360373633cdad",
        "block": 97806949,
        "ts": "2026-10-25T18:51:09.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9dc0444f3a137f888791c1b31e02407bfbfa5138",
        "name": "Pearl Research Labs by Virtuals",
        "symbol": "PEARL",
        "deployer": "0x50b1c862e1fd3e05ccdd51817781e752260ace62",
        "block": 97806647,
        "ts": "2026-10-25T18:50:39.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xd01e4b6b8360f21214526d55d14832f6224fe6ba",
        "name": "3AM",
        "symbol": "3AM",
        "deployer": "0x035169e1faefe5bf7fac171c4fc30bff3b3dd6f2",
        "block": 97806632,
        "ts": "2026-10-25T18:50:37.000Z",
        "ts_exact": true,
        "direct": true
      },
      {
        "address": "0xa00a8cc2ff33e4ab3b5167d646675959aba8ab2a",
        "name": "REMUS",
        "symbol": "REMUS",
        "deployer": "0x2397de7a7dc5c5683615886820a1c9033c89d908",
        "block": 97806422,
        "ts": "2026-10-25T18:50:16.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe7f12a35037374ba67e7f410256c8e529b8e2ee3",
        "name": "LEGENDS",
        "symbol": "LEGENDS",
        "deployer": "0x0312f70169d6919a6e54c0c9b67ea554986e4980",
        "block": 97806404,
        "ts": "2026-10-25T18:50:14.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xe546f7fa13727bf2d1c753d860490a11da677198",
        "name": "YourStockTheirTokensYourProblem",
        "symbol": "MEMESTOCK",
        "deployer": "0xdf2237114d595e0bf4d35cbcdebcdf43c55c4669",
        "block": 97806132,
        "ts": "2026-10-25T18:49:48.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x64bd01a822eb242f064a502233c181ecf621012a",
        "name": "rare strangers",
        "symbol": "rsns",
        "deployer": "0x733ab4fecce45bb925c499a9fc91982740697701",
        "block": 97806085,
        "ts": "2026-10-25T18:49:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x4440540f1ea65f81ad2e444cdd85c2872eef0d70",
        "name": "REXX10",
        "symbol": "R",
        "deployer": "0x733ab4fecce45bb925c499a9fc91982740697701",
        "block": 97806084,
        "ts": "2026-10-25T18:49:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9130f705c5f6f58366350194adc966dd2cec4507",
        "name": "Kageuri RH",
        "symbol": "Kageuri",
        "deployer": "0x733ab4fecce45bb925c499a9fc91982740697701",
        "block": 97806083,
        "ts": "2026-10-25T18:49:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x9535c9bc69ae5c6bc5061fe6901d23c729d06fc1",
        "name": "CLOCK IN",
        "symbol": "CLOCK IN",
        "deployer": "0x733ab4fecce45bb925c499a9fc91982740697701",
        "block": 97806082,
        "ts": "2026-10-25T18:49:43.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0x6a4343a763d0ac10b19ba7d5c0a5d611f19f44f6",
        "name": "Project Mars",
        "symbol": "Project Mars",
        "deployer": "0x733ab4fecce45bb925c499a9fc91982740697701",
        "block": 97806081,
        "ts": "2026-10-25T18:49:42.000Z",
        "ts_exact": true,
        "direct": false
      },
      {
        "address": "0xeff35c29b15c6ea5029ff601815f9b71769af594",
        "name": "Hooja",
        "symbol": "Hooja",
        "deployer": "0x733ab4fecce45bb925c499a9fc91982740697701",
        "block": 97806080,
        "ts": "2026-10-25T18:49:42.000Z",
        "ts_exact": true,
        "direct": false
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
