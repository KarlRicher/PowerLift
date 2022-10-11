"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getUser = async (req, res) => {
  const userEmail = req.params.userEmail;
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();

    const db = client.db("PowerLift");
    const result = await db.collection("users").findOne({ email: userEmail });

    result
      ? res.status(200).json({ status: 200, userEmail, item: result })
      : res
          .status(404)
          .json({ status: 404, userEmail, data: "Item Not Found" });

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

module.exports = { getUser };
