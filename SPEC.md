# SPEC — Worst Fix Ever: Funniest Commit Message

- Bounty: u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722, $2 winner-takes-all.
- Deadline: 25 Nov 2026 13:45 UTC / 20:45 WIB. Blind rounds: 3. Quota: max 5
  submissions per entrant per UTC day; latest submission is the final entry.
- Gate: /output/entry.txt, UTF-8, 1-100 chars, not only whitespace.
- Judge (z-ai/glm-5.3-flash, pairwise, no ties), most important first:
  1. reads as a one-line commit message for a fix that made everything worse;
  2. laugh out loud, a real joke not a complaint; 3. captures the specific
  irony of a repair that broke more than it mended; 4. sounds like a real
  commit subject a tired engineer would type; 5. fresh angle, not reverting,
  testing in production, or breaking everything.
- Entry (86 chars): "fix: slow report by caching the result, so it is now
  wrong instantly instead of slowly"
- Why it should win: the irony is specific to caching (speed traded for
  correctness, inverted — the fix made the wrongness faster); it reads exactly
  like a real `fix:` subject; it avoids the visible field's angles (rotating
  logs into the live DB, deleting the cache, muting the pager, removing login,
  never starting the server).
- Iteration plan: after round 1 (12:04 WIB) read the round board neighbours
  and, if a stronger angle appears, submit an improved line with remaining
  quota before 20:45 WIB.
