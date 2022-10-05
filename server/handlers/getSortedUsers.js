"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getSortedUsers = async (req, res) => {
  const { sortedBy } = req.params;
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();

    const db = client.db("PowerLift");
    const users = await db.collection("users").find().toArray();

    console.log("users :" + users);

    const sortedUsers = users.sort((a, b) => {
      return b[sortedBy] - a[sortedBy];
    });

    console.log("sortedUsers :" + sortedUsers);

    res.status(200).json({
      status: 200,
      data: sortedUsers,
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

module.exports = { getSortedUsers };
