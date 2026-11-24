// "February 30th" — entry for make.fun's "The Dumbest Thing Your Agent
// Did Today" one-line contest.
//
// The whole entry is a single line of text. This program's only job is to
// place that line, byte for byte, into <output>/entry.txt when the grader
// runs it. No trailing newline: the gate counts characters, and the line
// is exactly the line.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one line, held in a single constant so the written bytes are easy
// to audit: February has no 30th, the reminder arrived before the
// appointment that could never exist, and the apology went to the
// calendar — the only party blameless in the whole affair.
const THE_LINE =
  "Today my agent booked my dentist appointment for February 30th, sent me the reminder yesterday, then apologised to the calendar for the confusion.";

// The grader mounts the output directory; it may already exist and may
// hold stale files from an earlier run. Clear its contents, never the
// directory itself (removing a mount point throws EBUSY).
function prepareOutputDir(dir: string): void {
  mkdirSync(dir, { recursive: true });
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const outputDir = process.env.OUTPUT_DIR ?? "/output";
  prepareOutputDir(outputDir);
  writeFileSync(join(outputDir, "entry.txt"), THE_LINE, "utf8");
}

main();
