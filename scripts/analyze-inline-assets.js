const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");
const dataUrlPattern = /data:image\/(?:jpeg|png|svg\+xml)[^'")]+/g;

const styles = [...html.matchAll(/<style([^>]*)>([\s\S]*?)<\/style>/gi)];
styles.forEach((match, index) => {
  const attrs = match[1].trim() || "(no attrs)";
  const body = match[2].replace(dataUrlPattern, "DATA_URL");
  console.log(`\nSTYLE ${index}: ${attrs}`);
  console.log(body.slice(0, 1600));
});

const scripts = [...html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/gi)];
scripts.forEach((match, index) => {
  const attrs = match[1].trim() || "(no attrs)";
  console.log(`\nSCRIPT ${index}: ${attrs}`);
  console.log(match[2].slice(0, 1600));
});

console.log("\nDATA URL COUNT:", (html.match(/data:image/g) || []).length);
