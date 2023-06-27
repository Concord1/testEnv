// Simple HTTP server

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  const PORTO = process.env.PORT;
  res.end(PORTO);
});

const PORT = process.env.PORT;

server.listen(PORT, () => console.log("Server is running on port" + PORT));
