// Builds public/og.png from an Ovo+Poppins-typed SVG with embedded profile picture
// and proper social icons (GitHub, LinkedIn, X). Renders at 2x for HiDPI sharpness.
//
// Run: bun scripts/build-og.mjs

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

const ICONS = {
  github:
    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  linkedin:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  x:
    "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
};

function socialRow(y, icon, label) {
  const iconColor = "#a08c7a";
  const labelColor = "#ece2d3";
  return `
  <svg x="60" y="${y}" width="32" height="32" viewBox="0 0 24 24"><path d="${ICONS[icon]}" fill="${iconColor}"/></svg>
  <text x="110" y="${y + 25}" font-family="Poppins" font-size="26" font-weight="500" fill="${labelColor}">${label}</text>`;
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
    <clipPath id="photoClip"><circle cx="990" cy="315" r="160"/></clipPath>
  </defs>
  <rect width="1200" height="630" fill="#1c1815"/>

  <text x="60" y="160" font-family="Ovo" font-size="130" fill="#ece2d3">Jagrit Gumber</text>
  <text x="60" y="225" font-family="Poppins" font-size="46" font-weight="500" fill="#d4a374">Full-stack + native Rust</text>
  <text x="60" y="320" font-family="Poppins" font-size="28" font-weight="400" fill="#a08c7a">Ships production SaaS by day,</text>
  <text x="60" y="358" font-family="Poppins" font-size="28" font-weight="400" fill="#a08c7a">OSS and apps by night.</text>

  ${socialRow(450, "github", "JagritGumber")}
  ${socialRow(500, "linkedin", "Jagrit Gumber")}
  ${socialRow(550, "x", "@ItsRoboki")}

  <image xlink:href="data:image/jpeg;base64,${picB64}" x="830" y="155" width="320" height="320" clip-path="url(#photoClip)" preserveAspectRatio="xMidYMid slice"/>

  <text x="1140" y="600" font-family="Poppins" font-size="22" font-weight="400" fill="#695b50" text-anchor="end">jagritgumber.com</text>
</svg>`;

await fs.writeFile(SVG_TMP, svg);
console.log(`Built SVG: ${(svg.length / 1024).toFixed(0)}KB`);

await new Promise((resolve, reject) => {
  const child = spawn(
    "bunx",
    [
      "-y",
      "@resvg/resvg-js-cli",
      "--fit-zoom",
      "2",
      "--text-rendering",
      "2",
      "--shape-rendering",
      "2",
      SVG_TMP,
      PNG_OUT,
    ],
    { stdio: "inherit", shell: true }
  );
  child.on("exit", (code) => (code === 0 ? resolve() : reject(new Error(`resvg exit ${code}`))));
});

await fs.unlink(SVG_TMP);
const pngStat = await fs.stat(PNG_OUT);
console.log(`Wrote ${PNG_OUT} (${(pngStat.size / 1024).toFixed(0)}KB) at 2x = 2400x1260`);
