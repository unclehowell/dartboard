#!/usr/bin/env node
/**
 * Rebuilds src/data/disclosure.ts from the last known-good full source:
 * - wiki links instead of Gmail
 * - Social media artifacts party
 */
const fs = require("fs");
const path = require("path");
const https = require("https");

const OUT = path.join(__dirname, "..", "src", "data", "disclosure.ts");
const SOURCE =
  "https://raw.githubusercontent.com/unclehowell/dartboard/2a374c727121dde1769a2127b4d198ec11f4ec08/src/data/disclosure.ts";

function fetch(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return fetch(res.headers.location).then(resolve, reject);
        }
        if (res.statusCode !== 200) {
          reject(new Error("HTTP " + res.statusCode + " for " + url));
          return;
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
      })
      .on("error", reject);
  });
}

const social = [
  "  {",
  '    id: "social",',
  '    name: "Social media artifacts",',
  '    short: "Social",',
  '    kind: "private",',
  '    remit: "Posts, clips, comments and secondary reporting found on X, Facebook, YouTube, local groups and news shares.",',
  "    cells: {",
  "      open: {",
  '        status: "evidence",',
  '        title: "Artifacts harvested",',
  '        date: "ongoing",',
  "        detail:",
  '          "Public posts, shares and secondary reporting that name the farm, the 1988 eviction, or the title dispute. Kept as contemporaneous public record, not as formal disclosure.",',
  '        url: w("category/social-media"),',
  "      },",
  "      reply: {",
  '        status: "evidence",',
  '        title: "Clips and shares logged",',
  "        detail:",
  '          "ITV-era references, local commentary, and later social posts that corroborate or contradict the received account. Indexed against the scene list.",',
  '        url: w("category/social-media"),',
  "      },",
  "      chase: {",
  '        status: "dormant",',
  '        title: "Further scrape pending",',
  '        detail: "Automated harvest continues. New hits are added when they surface.",',
  "      },",
  "    },",
  "  },",
  "",
].join("\n");

const wHelper = [
  "/** Wiki correspondence page. Prefer a post slug + anchor when the email is published. */",
  "const w = (slug?: string, anchor?: string) => {",
  '  const base = "https://greathousefarmwiki.wordpress.com";',
  "  if (!slug) return base;",
  '  const path = slug.startsWith("/") ? slug : `/${slug}`;',
  "  return anchor ? `${base}${path}#${anchor}` : `${base}${path}`;",
  "};",
].join("\n");

(async () => {
  let text = await fetch(SOURCE);
  text = text.replace(
    /const g = \(thread: string\) => `https:\/\/mail\.google\.com\/mail\/u\/0\/#all\/\${thread}`;/,
    wHelper
  );
  text = text.replace(/url: g\("[^"]+"\)/g, "url: w()");
  const marker = "  },\n];\n\nexport const sampledThrough";
  if (!text.includes(marker)) {
    throw new Error("parties end marker not found in source disclosure");
  }
  text = text.replace(marker, "  },\n" + social + "];\n\nexport const sampledThrough");
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, text);
  console.log("wrote", OUT, "bytes", text.length);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
