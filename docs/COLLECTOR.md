# COLLECTOR

Two scripts read the chain. Both go through `scripts/chain.mjs`, which is the
only file that talks to the network.

## No explorer, no API key

The first version of this used the Blockscout API. That endpoint now answers
403 to public requests, and the paid replacement needs an account and a key.

So the collector reads the chain directly instead. The public RPC endpoint
answers everything needed, with no account, no key and no third party in the
path:

```
https://rpc.mainnet.chain.robinhood.com     chain ID 4663
```

Override it with `RHC_RPC` if you have a dedicated provider.

## How new tokens are found

Robinhood Chain produces a block every 0.1 seconds, so an hour is roughly
35,000 blocks. Reading them one at a time is not an option.

An ERC-20 mints its initial supply when it is created, and a mint is a
`Transfer` event from the zero address. Those can be requested in ranges:

```
eth_getLogs  topics: [Transfer, from = 0x000…000]  in 2000-block chunks
```

That is about 18 requests per hour of chain instead of 35,000. If the node
rejects a range as too wide — a normal answer from a shared endpoint — the
chunk halves and retries.

## A mint is not proof of creation

An existing token can mint more supply, and counting every mint would report
one old token as many new launches.

The proof is the transaction receipt. When a transaction creates a contract,
the receipt carries the new contract's address. If it matches the address that
emitted the mint, the token was deployed in that transaction.

Tokens deployed through a factory do not match, because the transaction called
the factory rather than creating the token directly. Those are counted and
reported as `via_factory` rather than silently dropped or silently treated as
direct deployments. The name and symbol come from two `eth_call` reads,
`name()` and `symbol()`.

## The five methods

```
eth_blockNumber   eth_getBlockByNumber   eth_getLogs
eth_getTransactionReceipt   eth_call
```

Nothing else is called, ever. `tests/chain.test.mjs` fails the build if a
sixth method appears, or if any signing identifier — a private key, a wallet
constructor, a send or sign call — enters these files.

## First run

```sh
node scripts/collect.mjs --dry-run    # measure first, write nothing
node scripts/bootstrap-baseline.mjs   # build "normal" from history
node scripts/collect.mjs              # write the window
python3 -m http.server 8080           # open http://localhost:8080
```

Start with `--dry-run`. It prints how many tokens the chain actually produced
in the last hour, which decides everything else: if the count is thin, the
hour window is too narrow and `--hours 6` or `--hours 24` is the honest fix,
not lower thresholds.

## Why the baseline samples

Fourteen days is about 11.8 million blocks. Reading all of them would cost
thousands of requests against a shared endpoint for a number that does not
need that precision — a word's ordinary share is a proportion, and a
proportion estimates well from a sample.

So `bootstrap-baseline.mjs` reads four full hours per day, spread across the
day so the estimate is not taken entirely from one time of day, and records
exactly what it sampled:

```json
"method": "4 sampled hours per day",
"hours_sampled": 56,
"hours_in_period": 336
```

`--full` reads every block instead, if you want the census and have the
patience. `--per-day 8` doubles the sample.

If the node refuses logs from that far back, the affected windows are counted
in `windows_skipped` and a warning is printed, because a baseline covering
less history than it claims is worse than no baseline.

## Volume: reading every token

At 1,500 tokens an hour the per-token work — one receipt, one `name()`, one
`symbol()` — is 4,500 calls. One at a time with a 120 ms gap that is nine
minutes per window, which is useless for a ten-minute schedule.

So those calls are batched. JSON-RPC accepts an array of requests in one POST,
and 50 at a time turns 4,500 calls into 90 requests: about fifteen seconds.

```
[rpc] calls 4523 in 92 batches · retries 0
```

Not every node allows batches. If one comes back malformed the batch size
halves once, and if it still fails the module switches to sequential calls
permanently and says so in that line. A node that refuses batching costs one
failed attempt, not a failed run.

The cap is `--max-tokens 5000`, high enough that nothing is silently dropped
at this volume. If a window does exceed it, the window is marked
`complete: false` and the page prints a warning band rather than presenting a
truncated count as a total.

Timestamps are the one thing not read for every token: one call per distinct
block would be thousands of calls for a column that shows HH:MM. They are read
exactly for the rows the page displays and estimated from block height for the
rest, with `ts_exact` recording which is which.

## Rate discipline

Every request goes through one paced function with no path around it: a
minimum gap between calls, exponential backoff on 429 and 5xx, and a printed
call count at the end. `--gap 250` slows it down if the endpoint pushes back.

## Output

| file | purpose |
| --- | --- |
| `data/latest.json` | current window, fetched by the page over HTTP |
| `data/snapshot.js` | same window as a script global, for `file://` |
| `data/history.json` | one line per past window, last 24 kept |
| `data/baseline.json` | what normal looks like |

Two copies of the same window exist on purpose. A page opened by double-click
runs on `file://`, where the browser blocks `fetch`. The snapshot is a plain
`<script>` so it always loads; `src/app.js` then tries to fetch a fresher
window and upgrades the page if it succeeds. The badge in the header says
which one you are looking at.

## History and repository growth

`data/history.json` keeps the last 24 closed windows, which is four hours at
one window every ten minutes. Change it with `--keep`.

The file is not the cost. At roughly 150 bytes an entry it is about 4 KB, and
it could hold a year without anyone noticing. The cost is git: the scheduled
workflow commits `data/` every ten minutes, and every version of
`latest.json` — around 25 KB — is kept forever. That is ~3.5 MB a day, ~1.3 GB
a year, for data that is worthless an hour after it is written.

If you run the collector on a schedule for a long time, either squash the
data branch periodically, or commit the data to a separate orphan branch that
can be discarded and recreated without touching the code history.

## On a schedule

`.github/workflows/collect.yml` runs the collector every 10 minutes and
commits the result, with the baseline rebuilt once a day. No server, no
hosting cost, and the published page stays current. The workflow holds no
secrets and can only write to `data/`.
