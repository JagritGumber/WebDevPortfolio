// Builds public/og.png from a Geist-typed SVG with embedded profile picture.
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
  const cssUrl = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&display=swap`;
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

const [geist400, geist500, picBytes] = await Promise.all([
  loadGoogleFontWoff2("Geist", "400"),
  loadGoogleFontWoff2("Geist", "500"),
  fs.readFile(path.join(PUBLIC, "profile-pic.jpg")),
]);
const picB64 = picBytes.toString("base64");

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <style>
      @font-face { font-family: 'Geist'; font-weight: 400; src: url(data:font/woff2;base64,${geist400}) format('woff2'); }
      @font-face { font-family: 'Geist'; font-weight: 500; src: url(data:font/woff2;base64,${geist500}) format('woff2'); }
    </style>
    <clipPath id="circ"><circle cx="200" cy="170" r="80"/></clipPath>
  </defs>
  <rect width="1200" height="630" fill="#1c1815"/>
  <image xlink:href="data:image/jpeg;base64,${picB64}" x="120" y="90" width="160" height="160" clip-path="url(#circ)" preserveAspectRatio="xMidYMid slice"/>
  <text x="310" y="158" font-family="Geist" font-size="32" font-weight="500" fill="#ece2d3">@ItsRoboki</text>
  <text x="310" y="200" font-family="Geist" font-size="22" font-weight="400" fill="#a08c7a">jagritgumber.com</text>
  <text x="120" y="380" font-family="Geist" font-size="116" font-weight="500" fill="#ece2d3">Jagrit Gumber</text>
  <text x="120" y="450" font-family="Geist" font-size="44" font-weight="500" fill="#d4a374">Full-stack + native Rust</text>
  <text x="120" y="510" font-family="Geist" font-size="30" font-weight="400" fill="#a08c7a">Ships production SaaS by day, OSS and apps by night.</text>
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
