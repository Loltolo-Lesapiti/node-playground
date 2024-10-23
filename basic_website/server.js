const fs = require("fs");
const path = require("path");
const http = require("http");
//Creating server.
const server = http.createServer((req, res) => {
  //Get file path.
  const filePath = path.join(
    __dirname,
    "pages",
    req.url == "/" ? "index.html" : req.url
  );
  console.log(req.url);

  //Get file extension.
  const extension = path.extname(filePath);

  //Setting the content type.
  let contentType = "text/html";
  switch (extension) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpeg":
      contentType = "image/jpeg";
      break;
  }
  //Read files to generate pages on the browser.
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        //page not found error.
        fs.readFile(
          path.join(__dirname, "pages", "404.html"),
          (err, content) => {
            if (err) throw err;
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        //Some other server error.
        res.writeHead(500);
        res.end(`Server err ${err.code}`);
      }
    } else {
      //Success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

//Declare port.
const PORT = process.env.PORT || 5000;
//Server listenining
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
