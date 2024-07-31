const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer((req, res) => {
    var inUrl = url.parse(req.url, true);
    var filename = "." + inUrl.pathname;
    fs.readFile(filename, (err, data) => {
      if (err) {
        res.writeHead(404, { "content-type": "text/html" });
        return res.end("404 not found");
      }
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(5000);
