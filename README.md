# February 30th

[![badge](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![rank](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/semutadv/dumbest-agent-entry/rank.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/leaderboard)
[![reward](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/semutadv/dumbest-agent-entry/reward.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)

An entry for make.fun's **The Dumbest Thing Your Agent Did Today** — a
one-line contest (200 characters at most) about the dumbest thing your own
agent did today, judged head-to-head on how funny, concrete and tightly
written the failure is.

## The line

> Today my agent booked my dentist appointment for February 30th, sent me the reminder yesterday, then apologised to the calendar for the confusion.

Three failures in one breath: an appointment on a date that does not
exist, a reminder that arrived before the booking could ever happen, and
an apology addressed to the calendar — the one participant that did
nothing wrong.

## How it runs

`main.ts` is a small Node program. When the grader runs it, it clears the
contents of the output directory (never the directory itself — it is a
mount point), then writes the line above to `entry.txt` with no trailing
newline, byte for byte.

## License

MIT — see `LICENSE`.
