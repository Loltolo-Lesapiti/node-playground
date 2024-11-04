const express = require("express");
const app = express();

const index = require("./routes/indexRouter");
const authors = require("./routes/authorRouter");
const books = require("./routes/bookRouter");

const PORT = process.env.PORT || 3000;

app.get("/authors", authors);
app.get("/books", books);
app.get("/", index);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
