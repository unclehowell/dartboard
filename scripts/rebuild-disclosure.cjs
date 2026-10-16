#!/usr/bin/env node
/**
 * Validates the checked-in disclosure source before dev/build.
 * The data file is now canonical; do not replace it with the old pinned snapshot.
 */
const fs = require("fs");
const path = require("path");

const OUT = path.join(__dirname, "..", "src", "data", "disclosure.ts");
const text = fs.readFileSync(OUT, "utf8");
const required = [
  ["typed status model", /export type Status =/],
  ["disclosure status", /label: "Previously concealed → disclosed"/],
  ["documented destruction status", /label: "Destroyed"/],
  ["missing record status", /label: "Missing \/ not located"/],
  ["National Library footage release", /id: "nlw-archive-release"/],
  ["item-specific date", /date: "25 Jul 2025"/],
  ["social media party", /id: "social"/],
];
const failed = required.filter(([, pattern]) => !pattern.test(text)).map(([label]) => label);
if (failed.length) {
  console.error("Disclosure source validation failed:", failed.join(", "));
  process.exit(1);
}
console.log("Validated disclosure source:", Buffer.byteLength(text, "utf8"), "bytes");
