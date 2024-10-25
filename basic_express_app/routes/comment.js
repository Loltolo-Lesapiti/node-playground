const express = require("express");
const router = express.Router();

//Comments routes
router.get("/", (req, res) => res.send({ data: "All comments displayed" }));
router.post("/", (req, res) => res.send({ data: "comment created" }));
router.put("/", (req, res) => res.send({ data: "comment updated" }));
router.delete("/", (req, res) => res.send({ data: "comment deleted" }));

module.exports = router;
