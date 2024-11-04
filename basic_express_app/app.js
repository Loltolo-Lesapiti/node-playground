const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
app.get("/home", (req, res, next) => {
  res.send("My first Express App!");
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
