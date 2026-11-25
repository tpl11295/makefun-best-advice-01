import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The Best Advice I Ever Got entry: one original sentence about the best
// advice the writer ever received — a real voice recalling a real moment,
// not a slogan: a nurse, a last night, a hand held, a voice kept talking.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters
// (this line is 123).
const line =
  "The nurse on my mother's last night said to hold her hand and keep talking like she could still hear me, because she could.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
if (readFileSync("/output/entry.txt", "utf8") !== line) {
  throw new Error("entry.txt does not match the advice line");
}
console.log(`wrote ${line.length} characters to /output/entry.txt`);
