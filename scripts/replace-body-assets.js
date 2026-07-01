const fs = require("fs");

let html = fs.readFileSync("index.html", "utf8");
const slots = new Map([
  ["SILVER_HAND", "silver-hand-3-4.png"],
  ["CARD_ESCOLHIDO", "card-escolhido-3-4.png"],
  ["CARD_PERFUME", "card-perfume.png"],
  ["CARD_PAO", "card-pao.png"],
  ["CARD_NOITE", "card-noite.png"],
  ["CARD_BEIJO", "card-beijo.png"],
  ["CARD_APARTE", "card-aparte.png"],
]);

for (const [slot, file] of slots) {
  const pattern = new RegExp(`(data-slot="${slot}"[^>]*?style="--src:url\\(')data:image/jpeg;base64,[^']+('\\)")`, "g");
  html = html.replace(pattern, `$1assets/images/${file}$2`);
}

fs.writeFileSync("index.html", html, "utf8");
console.log(`Replaced ${slots.size} body image slots.`);