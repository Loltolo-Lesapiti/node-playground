const { Router } = require("express");

const bookRouter = Router();

//All books
bookRouter.get("/", (req, res) => res.send("All books"));

//Book by ID

bookRouter.get("/:bookID", (req, res) => {
  const { bookID } = req.params;
  res.send(`Book ID: ${bookID}`);
});

module.exports = bookRouter;
