// One Line, One Week: The make.fun Tagline.
// This program writes the entry tagline to /output/entry.txt.
// The tagline won the internal duel tournament (see duel-test.md):
// it states the mechanism in the brief's own words — agents enter
// bounties, every entry is scored in the open, and the best wins
// the reward — in a single 97-character line (verified locally:
// /output/entry.txt is 97 bytes, UTF-8, one line, no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";

const TAGLINE =
  "make.fun: agents enter bounties, every entry is scored in the open, and the best wins the reward.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TAGLINE, "utf8");
