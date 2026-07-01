const fs = require("fs");
const path = require("path");

const root = process.cwd();
const htmlPath = path.join(root, "index.html");
const cssDir = path.join(root, "css");
const jsDir = path.join(root, "js");
const assetsDir = path.join(root, "assets", "images");

fs.mkdirSync(cssDir, { recursive: true });
fs.mkdirSync(jsDir, { recursive: true });
fs.mkdirSync(assetsDir, { recursive: true });

let html = fs.readFileSync(htmlPath, "utf8");

const imageNames = [
  "grain.svg",
  "hero-judas-16-9.jpg",
  "hero-judas-9-16.jpg",
  "echo-judas-16-9.jpg",
  "echo-judas-9-16.jpg",
  "hero-background-plate.jpg",
];

for (const name of imageNames) {
  const target = path.join(assetsDir, name);
  if (fs.existsSync(target)) fs.unlinkSync(target);
}

let imageIndex = 0;
function writeDataUrl(dataUrl) {
  const name = imageNames[imageIndex] || `inline-image-${imageIndex + 1}`;
  imageIndex += 1;

  const comma = dataUrl.indexOf(",");
  const meta = dataUrl.slice(0, comma);
  const payload = dataUrl.slice(comma + 1);
  const target = path.join(assetsDir, name);

  if (meta.includes(";base64")) {
    fs.writeFileSync(target, Buffer.from(payload, "base64"));
  } else {
    fs.writeFileSync(target, decodeURIComponent(payload), "utf8");
  }

  return `../assets/images/${name}`;
}

const styleBlocks = [];
html = html.replace(/<style(?:\s[^>]*)?>([\s\S]*?)<\/style>/gi, (_full, css) => {
  styleBlocks.push(css.trim());
  return styleBlocks.length === 1 ? '<link rel="stylesheet" href="css/styles.css" />' : "";
});

let css = styleBlocks.join("\n\n");
css = css.replace(/url\((["'])([\s\S]*?)\1\)/g, (full, quote, url) => {
  if (!url.startsWith("data:image/")) return full;
  return `url(${quote}${writeDataUrl(url)}${quote})`;
});
fs.writeFileSync(path.join(cssDir, "styles.css"), `${css}\n`, "utf8");

if (imageIndex !== imageNames.length) {
  throw new Error(`Expected ${imageNames.length} inline images, extracted ${imageIndex}.`);
}

const localScripts = [];
html = html.replace(/<script(?![^>]*\bsrc=)(?![^>]*application\/ld\+json)([^>]*)>([\s\S]*?)<\/script>/gi, (full, attrs, body) => {
  const trimmed = body.trim();
  if (!trimmed) return full;

  const name = localScripts.length === 0 ? "app.js" : "i18n.js";
  localScripts.push(name);
  fs.writeFileSync(path.join(jsDir, name), `${trimmed}\n`, "utf8");
  return `<script src="js/${name}"></script>`;
});

const imageMoves = new Map([
  ["Hero_Judas_16_9.png", "hero-judas-16-9.png"],
  ["Hero_Judas_9_16.png", "hero-judas-9-16.png"],
  ["SILVER_HAND_3_4.png", "silver-hand-3-4.png"],
  ["CARD_ESCOLHIDO3_4.png", "card-escolhido-3-4.png"],
  ["CARD_PERFUME.png", "card-perfume.png"],
  ["CARD_PAO.png", "card-pao.png"],
  ["CARD_NOITE.png", "card-noite.png"],
  ["CARD_APARTE.png", "card-aparte.png"],
  ["CARD_BEIJO.png", "card-beijo.png"],
  ["ECHO_JUDAS_16_9.png", "echo-judas-16-9.png"],
  ["ECHO_JUDAS_9_16.png", "echo-judas-9-16.png"],
  ["HERO_BACKGROUND_PLATE.png", "hero-background-plate.png"],
  ["VELA.png", "vela.png"],
]);

for (const [from, to] of imageMoves) {
  const source = path.join(root, from);
  const target = path.join(assetsDir, to);
  if (fs.existsSync(source) && !fs.existsSync(target)) {
    fs.renameSync(source, target);
  }
}

html = html.replaceAll("https://thirtypieces.me/og-cover.jpg", "https://thirtypieces.me/assets/images/hero-background-plate.jpg");
html = html.replace(/\n{3,}/g, "\n\n");
fs.writeFileSync(htmlPath, html, "utf8");

console.log(`Wrote css/styles.css, ${localScripts.map((name) => `js/${name}`).join(", ")}.`);
console.log(`Extracted ${imageIndex} inline images and organized ${imageMoves.size} PNG assets.`);