"use strict";

const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const createPost = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();

    console.log(req.body);

    const { status, authorEmail, url } = req.body;

    const newPost = {
      _id: uuidv4(),
      authorEmail,
      timestamp: moment().format(),
      likedBy: [],
      repostedBy: [],
      status,
      url,
    };

    const db = client.db("PowerLift");

    const result = await db.collection("posts").insertOne(newPost);

    res.status(201).json({
      status: 201,
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

module.exports = { createPost };
