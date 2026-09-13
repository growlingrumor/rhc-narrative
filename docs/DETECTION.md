# DETECTION

The whole method, in four steps. All of it is counting.

The desk does not know what the word means. It counts how much more often the word appears than it usually does.

The code is `src/detect.js`. Pure functions, no DOM, no network, no model.

## Thresholds

One object, `detect.CONFIG`, printed on the page:

| setting | value |
| --- | --- |
| window | 60 minutes |
| must beat its normal rate by | 6.0x |
| minimum separate launches | 5 |
| minimum separate wallets | 6 |
| merge words co-occurring above | 60% |
| normal rate measured over | 14 days |
| floor share for an unseen word | 0.0004 |
| words kept per launch | 1 to 3 |

They are chosen, not derived. Change them and re-run the tests.

## Step 1 — split the names

Every token name and symbol is lowercased and split on anything that is not a
letter or digit. Homoglyphs are folded: a Cyrillic `а` becomes `a`, a Greek
`ο` becomes `o`. Zero-width characters are stripped.

That folding is not cosmetic. Without it one narrative spelled two ways
becomes two half-sized narratives and neither clears the bar.

Stop-list words are dropped: `coin`, `token`, `the`, `eth`, `launch`, `meme`
and 44 others. The full list is in `src/detect.js`, reviewable line by line.
It is a judgement call and it is in the repository so it can be argued with.

## Step 2 — count launches and wallets

For each remaining word: how many **distinct launches** carried it this hour,
and how many **distinct wallets** deployed those launches.

Launches and wallets, never occurrences. One wallet deploying the same name
nine times is one wallet, not nine signals. That is a test.

## Step 3 — compare against normal

`data/baseline.json` holds each word's ordinary share over the last 14 days
of the chain's own history. A word is a candidate only when its share this
hour beats its ordinary share by 6.0x.

A word absent from the baseline uses the floor share, 0.0004 — roughly one
launch in 2,500. A brand-new word can still qualify.

## Step 4 — gate and merge

A candidate becomes a narrative only if it clears **both** gates: at least 5
distinct launches and at least 6 distinct wallets.

Words that fail print the number they missed by:

```
perp: 3 deployers < 6 required
dog: 1.0x over baseline < 6.0x required
zora: 3 launches < 5 required
```

Those rows stay on the page. Rejections are the most informative content on
the screen: the number a word missed by is the only way to judge whether the
threshold was reasonable.

Finally, words that appear together in more than 60% of their launches are
merged into one narrative. `lst` and `basket` at 100% become `basket-lst` and
count once, not twice.

## Why no model

The question is not "what does this word mean". It is "is this word appearing
far more than usual, across enough separate launches, from enough separate
wallets, right now". That is answered by division, and division can be checked
by hand.

The contrast that makes the point, from the shipped example hour:

- **dog** appears in 16 of 179 launches — the most frequent word of the hour —
  and opens nothing, because dog always appears. Its multiple is 1.0x.
- **restake** appears in 12 of the same 179 and is the narrative, because its
  ordinary share is 0.09%. That is 74.5x its normal rate, from 12 wallets.

Frequency is not the signal. Frequency against the word's own history is.
