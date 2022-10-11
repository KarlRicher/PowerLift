"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getUserPosts = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { email } = req.params;

  try {
    await client.connect();

    const db = client.db("PowerLift");
    const posts = await db.collection("posts").find().toArray();

    const result = posts.filter((post) => {
      return post.authorEmail === email;
    });

    res.status(200).json({
      status: 200,
      data: result,
    });

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

module.exports = { getUserPosts };
