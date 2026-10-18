
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const PORT = process.env.PORT || 3000;
const html = path.join(__dirname, "public", "index.html");

http.createServer((req, res) => {
  if (req.url !== "/" && req.url !== "/index.html") {
    res.writeHead(404);
    return res.end("Not Found");
  }

  fs.readFile(html, (err, content) => {
    if (err) {
      res.writeHead(500);
      return res.end("Internal Server Error");
    }

    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8"
    });
    res.end(content);
  });
}).listen(PORT, "0.0.0.0");
