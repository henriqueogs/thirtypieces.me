const fs = require("fs");
const path = require("path");

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("css/styles.css", "utf8");
const refs = [];

for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
  if (!/^(https?:|mailto:|#)/.test(match[1])) refs.push(match[1]);
}
for (const match of html.matchAll(/url\('([^']+)'\)/g)) refs.push(match[1]);
for (const match of css.matchAll(/url\(['"]?([^'")]+)['"]?\)/g)) {
  refs.push(path.join("css", match[1]).replace(/\\/g, "/"));
}

const missing = [];
for (const ref of refs) {
  const clean = ref.split(/[?#]/)[0];
  const resolved = path.normalize(clean);
  if (!fs.existsSync(resolved)) missing.push(ref);
}

console.log(`refs=${refs.length}`);
console.log(`missing=${missing.length}`);
if (missing.length) {
  console.log(missing.join("\n"));
  process.exitCode = 1;
}