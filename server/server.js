const express = require("express");
const app = express();
const morgan = require("morgan");
const { createPost } = require("./handlers/createPost");
const { deletePost } = require("./handlers/deletePost");
const { getPosts } = require("./handlers/getPosts");
const { getSortedUsers } = require("./handlers/getSortedUsers");
const { getUser } = require("./handlers/getUser");
const { getUserPosts } = require("./handlers/getUserPosts");
const { getUsers } = require("./handlers/getUsers");

require("dotenv").config();

app.use(morgan("tiny"));

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/get-user/:userEmail", getUser);

app.get("/api/get-users", getUsers);

app.get("/api/get-user-posts/:email", getUserPosts);

app.get("/api/get-posts", getPosts);

app.get("/api/get-sorted-users/:sortedBy", getSortedUsers);

app.post("/api/create-post", createPost);

app.delete("/api/delete-post", deletePost);

app.listen(8000, () => {
  console.log(`Server launched on port 8000`);
});
