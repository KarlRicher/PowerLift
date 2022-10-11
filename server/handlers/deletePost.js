"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const deletePost = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();

    const { _id } = req.body;

    const db = client.db("PowerLift");

    const result = await db.collection("posts").deleteOne({ _id: _id });

    res.status(204).json({
      status: 204,
      data: result,
      message: "Post has been deleted.",
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

module.exports = { deletePost };
