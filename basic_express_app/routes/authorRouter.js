// routes/authorRouter.js
const { Router } = require("express");

const authorRouter = Router();

//Display all authors
authorRouter.get("/", (req, res) => res.send("All authors"));

//Display author by ID
authorRouter.get("/:authorId", (req, res) => {
  const { authorId } = req.params;
  res.send(`Author ID: ${authorId}`);
});

module.exports = authorRouter;
