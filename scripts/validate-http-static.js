const http = require("http");
const fs = require("fs");
const path = require("path");

const mime = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "application/javascript; charset=utf-8"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".svg", "image/svg+xml"],
]);

const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, "http://127.0.0.1").pathname);
  const file = path.join(process.cwd(), pathname === "/" ? "index.html" : pathname.slice(1));
  if (!file.startsWith(process.cwd()) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404);
    res.end("not found");
    return;
  }
  res.writeHead(200, { "content-type": mime.get(path.extname(file)) || "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
});

server.listen(0, "127.0.0.1", async () => {
  const { port } = server.address();
  const urls = [
    "/",
    "/css/styles.css",
    "/js/app.js",
    "/js/i18n.js",
    "/assets/images/grain.svg",
    "/assets/images/silver-hand-3-4.png",
    "/assets/images/hero-judas-16-9.jpg",
  ];
  try {
    for (const url of urls) {
      const response = await fetch(`http://127.0.0.1:${port}${url}`);
      console.log(`${response.status} ${url}`);
      if (!response.ok) process.exitCode = 1;
      await response.arrayBuffer();
    }
  } finally {
    server.close();
  }
});