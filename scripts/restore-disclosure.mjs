#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "..", "src", "data");
const parts = [];
for (let i = 0; i < 20; i++) {
  const p = path.join(dir, `disclosure.part${i}.b64`);
  if (!fs.existsSync(p)) break;
  parts.push(fs.readFileSync(p, "utf8").replace(/\s+/g, ""));
}
if (parts.length) {
  const out = path.join(dir, "disclosure.ts");
  fs.writeFileSync(out, Buffer.from(parts.join(""), "base64").toString("utf8"));
  console.log("restored disclosure.ts from", parts.length, "parts");
}
