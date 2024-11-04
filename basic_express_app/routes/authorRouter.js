// routes/authorRouter.js
const { Router } = require("express");

const authorRouter = Router();

//Display author by ID
authorRouter.get("/:authorId", (req, res) => {
  res.send("All authors");
});

module.exports = authorRouter;
