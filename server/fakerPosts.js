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

const getRandomEmail = async () => {
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db("PowerLift");
  const usersArray = await db.collection("users").find().toArray();

  client.close();

  const usersEmails = [];

  usersArray.forEach((user) => {
    usersEmails.push(user.email);
  });

  const randomEmail =
    usersEmails[Math.floor(Math.random() * usersEmails.length)];

  console.log("randomEmail :" + randomEmail);

  return randomEmail;
};

const createRandomPost = () => {
  return {
    _id: faker.datatype.uuid(),
    authorEmail: "karl.richer@outlook.com",
    timestamp: faker.date.recent(2),
    likedBy: [],
    repostedBy: [],
    status: faker.lorem.sentence(),
  };
};

Array.from({ length: 3 }).forEach(() => {
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
