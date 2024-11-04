const { Router } = require("express");

const indexRouter = Router();

//The home page route
indexRouter.get("/", (req, res) => res.send("Index page"));

module.exports = indexRouter;
