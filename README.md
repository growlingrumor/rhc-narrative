# Narrative of the last hour · Robinhood Chain

Counts which word appears in new token names far more often than it normally
does, and reports it as the narrative of the hour. If no word beats its own
history by enough, it says so instead of inventing one.

One page, no build step, no framework, no runtime dependencies.

## What it actually does

1. Reads every token created on Robinhood Chain in the last hour — name,
   symbol, and the wallet that deployed it.
2. Splits names into words, drops meaningless ones (`coin`, `token`, `eth`,
   and 47 others).
3. Compares each word against how often it appears normally, measured over the
   last 14 days of the chain's own history.
4. Reports a word only if it beats its normal rate by 6x, across at least 5
   separate launches, from at least 6 separate wallets.

That is the whole method. No model, no inference, no semantics — the code has
no idea what any of these words mean. It divides one count by another.

**Why that works:** in the shipped example hour, `dog` appears in 16 of 179
launches and opens nothing, because `dog` always appears — its multiple is
1.0x. `restake` appears in 12 of the same 179 and is the narrative, because
its ordinary share is 0.09%. That is 74.5x normal, from 12 separate wallets.
Frequency is not the signal. Frequency against the word's own history is.

## Run it

```sh
node scripts/collect.mjs --dry-run    # measure first: how many tokens per hour?
node scripts/bootstrap-baseline.mjs   # build "normal" from sampled history
node scripts/collect.mjs              # read the last hour and write it
python3 -m http.server 8080           # open http://localhost:8080
```

It reads the chain directly over public JSON-RPC — no explorer, no API key, no
account. Five read methods, no key material, no signing path.

At 1,500 tokens an hour that is ~4,500 calls per window, batched 50 to a
request: about 90 HTTP requests and fifteen seconds. Every token in the window
is read; nothing is sampled and nothing is dropped.

Node 20+. No install step; there is nothing to install.

The baseline comes first. Without it every word looks new and the page prints
noise — it will show a warning bar until you build one.

You can also just open `index.html` by double-clicking it. It ships with
example data so the layout renders, clearly badged `DEMO DATA` with a warning
bar. Nothing in that state was read from the chain.

## Live on GitHub Pages

`.github/workflows/collect.yml` runs the collector every 10 minutes and commits
the window to `data/`. Turn on Pages for the repository and the published page
stays current with no server and no hosting cost. The workflow holds no
secrets and can only write to `data/`.

## Tests

```sh
npm test        # node --test tests/
npm run scan    # fails the build on anything key-shaped
```

26 tests, no framework. They cover the real cases: one wallet spamming a name
does not count, a common word stays uncounted no matter how often it leads,
lookalike characters fold together, co-occurring words merge into one
narrative, a token that mints twice is counted once, example data must be
labelled as example data, and the chain layer must stay read-only — the build
fails if a sixth RPC method or any signing identifier appears.

On Node 22 use `node --test tests/*.test.mjs`; the bare directory argument
stopped expanding. CI pins Node 20.

## Files

```
index.html              the page
assets/app.css          every colour, declared once
src/detect.js           the method: split, count, compare, gate, merge
src/render.js           window object -> DOM
src/live.js             the moving parts: lane, tally, gauges, focus
src/mascot.js           the pixel face, drawn from a character map
src/app.js              loading: snapshot first, fetch upgrade
scripts/
  chain.mjs             the only file that talks to the network
  collect.mjs           read one window from the chain
  bootstrap-baseline.mjs  build "normal" from sampled history
  scan-keys.mjs         CI gate
  make-demo.mjs         regenerate the example window
data/
  latest.json           current window, fetched over HTTP
  snapshot.js           same window as a global, for file://
  baseline.json         what normal looks like
docs/
  DETECTION.md          the method, every threshold, the stop list
  COLLECTOR.md          endpoints, rate limits, scheduling
  LIMITS.md             what this cannot do
```

## What moves on the page

Three things, and all of them show real work rather than decoration.

**The lane** replays token names the collector actually read and splits them
with the same tokenizer the counter uses. Words that survive are gold; words
thrown out by the stop list are struck through in grey. What you see discarded
is what was really discarded.

**The tally** holds this hour's real totals. A row lights up when the token
currently in the lane feeds that counter.

**The gauges** are the decision itself: rate against normal, tokens, wallets —
each with a notch at its threshold. Clicking a word filters the token list to
the launches that carried it.

**The face** is six characters — blob, cat, dog, human, ghost, robot — drawn on
one 16x13 grid. The grid is built once; morphing re-dresses the same 208
squares, each with a delay taken from its distance to the centre, so the shape
rebuilds outward as a wave. Every square picks its own hue on every morph. It
blinks on an irregular interval, flashes when the lane finds a countable word,
and brightens while a narrative stands.

**The archive** keeps the last 24 closed windows — four hours at one window
every ten minutes — eight to a page. The file is about 4 KB; the reason for the
bound is that every commit of it is kept by git forever.

All motion stops under `prefers-reduced-motion`, and the page renders its full
final state without it.

## Limits

It matches strings, not meaning — a narrative under different words is missed.
Most hours carry no narrative, and that is a normal result. The thresholds are
a judgement call. The page shows what was created, not what is worth buying: a
spike in token names is evidence that people are launching the same word, and
nothing else.

Nothing here touches funds. The collector holds no keys and cannot sign a
transaction.

MIT.
