const express = require("express");
const app = express();
const morgan = require("morgan");
const { getPosts } = require("./handlers/getPosts");
const { getUser } = require("./handlers/getUser");
const { getUsers } = require("./handlers/getUsers");

require("dotenv").config();

express().use(morgan("tiny"));

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/get-user/:userEmail", getUser);
app.get("/api/get-users", getUsers);
app.get("/api/get-posts", getPosts);

app.listen(8000, () => {
  console.log(`Server launched on port 8000`);
});
