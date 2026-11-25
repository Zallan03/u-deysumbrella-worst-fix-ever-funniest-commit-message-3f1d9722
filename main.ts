// Worst Fix Ever: Funniest Commit Message — entry for make.fun bounty
// u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722 ($2).
// One commit message (<=100 chars) for the fix that made everything worse.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "fix: slow report by caching the result, so it is now wrong instantly instead of slowly";

// Gate: 1-100 chars, single line, no trailing newline (86 chars).
if (ENTRY.length < 1 || ENTRY.length > 100 || ENTRY.includes("\n")) {
  throw new Error(`entry must be 1-100 chars on one line, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
