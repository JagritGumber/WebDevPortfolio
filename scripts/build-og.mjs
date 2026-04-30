// Builds public/og.png from an Ovo+Poppins-typed SVG with embedded profile picture.
// Run: bun scripts/build-og.mjs
// Requires bunx @resvg/resvg-js-cli to be available on PATH (auto-fetched by bunx).

import fs from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";

const ROOT = path.resolve(import.meta.dirname, "..");
const PUBLIC = path.join(ROOT, "public");
const SVG_TMP = path.join(ROOT, ".og-build.svg");
const PNG_OUT = path.join(PUBLIC, "og.png");

async function loadGoogleFontWoff2(family, weight) {
  const weightPart = weight ? `:wght@${weight}` : "";
  const cssUrl = `https://fonts.googleapis.com/css2?family=${family}${weightPart}&display=swap`;
  const css = await fetch(cssUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
    },
  }).then((r) => r.text());
  const match = css.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+\.woff2)\)/);
  if (!match) throw new Error(`No woff2 url found for ${family} ${weight}`);
  const buf = await fetch(match[1]).then((r) => r.arrayBuffer());
  return Buffer.from(buf).toString("base64");
}

const [ovo400, poppins400, poppins500, picBytes] = await Promise.all([
  loadGoogleFontWoff2("Ovo", null),
  loadGoogleFontWoff2("Poppins", "400"),
  loadGoogleFontWoff2("Poppins", "500"),
  fs.readFile(path.join(PUBLIC, "profile-pic.jpg")),
]);
const picB64 = picBytes.toString("base64");

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <style>
      @font-face { font-family: 'Ovo'; src: url(data:font/woff2;base64,${ovo400}) format('woff2'); }
      @font-face { font-family: 'Poppins'; font-weight: 400; src: url(data:font/woff2;base64,${poppins400}) format('woff2'); }
      @font-face { font-family: 'Poppins'; font-weight: 500; src: url(data:font/woff2;base64,${poppins500}) format('woff2'); }
    </style>
    <clipPath id="circ"><circle cx="92" cy="92" r="60"/></clipPath>
  </defs>
  <rect width="1200" height="630" fill="#1c1815"/>
  <image xlink:href="data:image/jpeg;base64,${picB64}" x="32" y="32" width="120" height="120" clip-path="url(#circ)" preserveAspectRatio="xMidYMid slice"/>
  <text x="170" y="86" font-family="Poppins" font-size="36" font-weight="500" fill="#ece2d3">@ItsRoboki</text>
  <text x="170" y="128" font-family="Poppins" font-size="26" font-weight="400" fill="#a08c7a">jagritgumber.com</text>
  <text x="32" y="370" font-family="Ovo" font-size="170" fill="#ece2d3">Jagrit Gumber</text>
  <text x="32" y="460" font-family="Poppins" font-size="60" font-weight="500" fill="#d4a374">Full-stack + native Rust</text>
  <text x="32" y="530" font-family="Poppins" font-size="36" font-weight="400" fill="#a08c7a">Ships production SaaS by day, OSS and apps by night.</text>
  <text x="32" y="600" font-family="Poppins" font-size="24" font-weight="400" fill="#695b50">github.com/JagritGumber</text>
</svg>`;

await fs.writeFile(SVG_TMP, svg);
console.log(`Built SVG: ${(svg.length / 1024).toFixed(0)}KB`);

await new Promise((resolve, reject) => {
  const child = spawn("bunx", ["-y", "@resvg/resvg-js-cli", SVG_TMP, PNG_OUT], {
    stdio: "inherit",
    shell: true,
  });
  child.on("exit", (code) => (code === 0 ? resolve() : reject(new Error(`resvg exit ${code}`))));
});

await fs.unlink(SVG_TMP);
const pngStat = await fs.stat(PNG_OUT);
console.log(`Wrote ${PNG_OUT} (${(pngStat.size / 1024).toFixed(0)}KB)`);
