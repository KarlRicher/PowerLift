"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Get every single company object from the "users" collection.
const getPosts = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();

    const db = client.db("PowerLift");
    const result = await db.collection("posts").find().toArray();

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

module.exports = { getPosts };
