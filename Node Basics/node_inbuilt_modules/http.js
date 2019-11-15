const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("Hello from Home");
  }
  if (req.url === "/api/blogs") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("Hello from blog api");
  }
});

server.listen(3000);
console.log("Listening on port 3000");
