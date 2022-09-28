const express = require("express");
const app = express();
const morgan = require("morgan");

express().use(morgan("tiny"));

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(8000, () => {
  console.log(`Server launched on port 8000`);
});
