# LIMITS

## What the method cannot do

It matches strings, not meaning. A narrative carried under different words is
missed completely. A narrative where everyone copied one name is found in
seconds.

A word appearing often is not the signal. A word appearing far more often than
it normally does is the signal.

The stop list encodes an opinion about which words carry no information.
Someone who groups the same launches differently gets a different answer.

The thresholds are chosen, not derived. A large multiple is a tail; it will
not print every hour, and most hours carry no narrative at all. That is a
normal result, not a failure.

## What the numbers depend on

Everything rests on the baseline. Until `bootstrap-baseline.mjs` has walked
real history, every word reads as new and the page is noise. The page shows a
warning bar in that state rather than printing confident nonsense.

If the chain produces few launches per hour, the hour window is too narrow to
say anything and the thresholds will almost never trigger. The honest fix is a
wider window, not lower thresholds.

Explorer coverage is not guaranteed. A contract whose name and symbol the
explorer has not indexed is counted as an unnamed contract and reported
separately rather than silently dropped.

## What this page is not

It shows what was created, not what is worth buying. A spike in token names is
evidence that people are launching the same word, and nothing else. It is not
a price signal, not a recommendation, and not a claim that any of these tokens
have liquidity, a market, or value.

Nothing here touches funds. The collector cannot sign a transaction: it holds
no key material, and `scripts/scan-keys.mjs` fails the build if anything
key-shaped ever enters the repository.
