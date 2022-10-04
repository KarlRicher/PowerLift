"use strict";

const { MongoClient } = require("mongodb");
const { faker } = require("@faker-js/faker");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const USERS = [];

const createRandomUser = () => {
  const sex = faker.name.sex();
  const firstName = faker.name.firstName(sex);
  const lastName = faker.name.lastName();
  const email = faker.helpers.unique(faker.internet.email, [
    firstName,
    lastName,
  ]);

  const bench = faker.datatype.number({ min: 45, max: 782 });
  const squat = faker.datatype.number({ min: 45, max: 1080 });
  const deadlift = faker.datatype.number({ min: 45, max: 1074 });
  const total = bench + squat + deadlift;

  return {
    _id: faker.datatype.uuid(),
    connection: "MongoDB",
    client_id: faker.datatype.uuid(),
    avatar: faker.internet.avatar(),
    banner: faker.image.sports(),
    email,
    firstName,
    lastName,
    password: faker.internet.password(),
    gender: sex,
    weight: faker.datatype.number({ min: 100, max: 400 }),
    height: faker.datatype.number({ min: 150, max: 230 }),
    bench,
    squat,
    deadlift,
    total,
  };
};

Array.from({ length: 9 }).forEach(() => {
  USERS.push(createRandomUser());
});

const pushFakeUsers = async () => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();

    const db = client.db("PowerLift");

    await db.collection("users").insertMany(USERS);

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

pushFakeUsers();
