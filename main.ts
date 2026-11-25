import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, in the voice of an alien tourist filing a one-star review
// of planet Earth — with the food as the saving grace. The grievance is
// small and bodily (customs took a spare tentacle; the weather ruined the
// parade), and the turn is the punchline: the empanadas were so good the
// visitor is now applying for citizenship.
const REVIEW =
  "One star: customs confiscated my spare tentacle and it rained on my parade, but the empanadas were so good I have applied for Earth citizenship.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The gate allows 1–200 characters of UTF-8 text, and the judge brief
// wants exactly one sentence. Check both here so a bad line fails loudly
// in this session instead of silently failing the sealed scorer.
if (REVIEW.length === 0 || REVIEW.length > 200) {
  throw new Error(`Review must be 1-200 characters, got ${REVIEW.length}`);
}
if ((REVIEW.match(/\./g) ?? []).length !== 1) {
  throw new Error("Review must be exactly one sentence");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, REVIEW, "utf8");
console.log(`Wrote ${REVIEW.length} characters to ${OUT_FILE}`);
