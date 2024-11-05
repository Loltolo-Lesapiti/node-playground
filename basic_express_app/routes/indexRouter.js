const { Router } = require("express");

const indexRouter = Router();

//The home page route
indexRouter.get("/", (req, res) => res.send("Home page"));

module.exports = indexRouter;
