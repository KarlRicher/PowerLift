const express = require("express");
const app = express();
const morgan = require("morgan");
const { getPosts } = require("./handlers/getPosts");
const { getSortedUsers } = require("./handlers/getSortedUsers");
const { getUser } = require("./handlers/getUser");
const { getUserPosts } = require("./handlers/getUserPosts");
const { getUsers } = require("./handlers/getUsers");

require("dotenv").config();

express().use(morgan("tiny"));

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/get-user/:userEmail", getUser);
app.get("/api/get-users", getUsers);
app.get("/api/get-user-posts/:email", getUserPosts);
app.get("/api/get-posts", getPosts);
app.get("/api/get-sorted-users/:sortedBy", getSortedUsers);

app.listen(8000, () => {
  console.log(`Server launched on port 8000`);
});
