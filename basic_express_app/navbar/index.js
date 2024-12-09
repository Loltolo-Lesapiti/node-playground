const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar/index.html"));
//   //Add index.html to public folder since its just a static asset
//   //SSR
// });

app.get("/", () => {
  res.status(404).send("<h1>Resource not found</h1>");
});

app.listen(5000, () => {
  console.log("Listening to port 5000 ....");
});
