const express = require("express");
const app = express();
const { people } = require("./public/data");
app.use(express.static("./methods_public"));
//Parsing form data.
app.use(express.urlencoded({ extended: false }));
//Parsing Json data.
app.use(express.json());

//Reading the data.
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});
//Traditional login with HTML form
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please provide name");
});

//Using JavaScript form.
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
});

//PUTS method, updating the value.

app.listen(5000, () => {
  console.log("Listening to port 5000");
});
