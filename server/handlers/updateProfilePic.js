"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const updateProfilePic = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { email, newAvatarSrc } = req.body;

  try {
    await client.connect();
    const db = client.db("PowerLift");
    const user = await db.collection("users").findOne({ email: email });

    console.log(newAvatarSrc);

    const newValues = {
      $set: {
        ...user,
        avatar: newAvatarSrc,
      },
    };

    const result = await db
      .collection("users")
      .updateOne({ email: email }, newValues);

    res.status(200).json({ status: 200, email, data: result });

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

module.exports = { updateProfilePic };
