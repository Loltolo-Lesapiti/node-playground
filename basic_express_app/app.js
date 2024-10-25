const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const userRouter = require("./routes/user");
const commentRouter = require("./routes/comment");

app.use("/users", userRouter);
app.use("/comments", commentRouter);

app.listen(PORT, () =>
  console.log(`My express app is listening on port ${PORT}`)
);
