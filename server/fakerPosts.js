"use strict";

const { MongoClient } = require("mongodb");
const { faker } = require("@faker-js/faker");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const POSTS = [];

const createRandomPost = () => {
  return {
    _id: faker.datatype.uuid(),
    authorEmail: "Juanita_Renner58@gmail.com",
    timestamp: faker.date.past(1),
    likedBy: [],
    repostedBy: [],
    status: faker.lorem.sentence(),
  };
};

Array.from({ length: 5 }).forEach(() => {
  POSTS.push(createRandomPost());
});

const pushFakePosts = async () => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();

    const db = client.db("PowerLift");

    await db.collection("posts").insertMany(POSTS);

    client.close();
  } catch (error) {
    console.log(error.stack);
    res.status(500).json({
      status: 500,
      data: req.body,
      message: error.message,
    });
  }
};

pushFakePosts();
