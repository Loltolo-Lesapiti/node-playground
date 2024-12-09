const express = require("express");

const app = express();
//Middlewares
const { logger } = require("./logger");
const authorize = require("./authorize");
app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("Home page");
});
app.get("/about", (req, res) => {
  res.send("About page");
});

app.listen(5000, () => {
  console.log("Listening to port 5000");
});
