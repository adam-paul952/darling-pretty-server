const mongoServer = require("mongodb-memory-server");
const { MongoClient } = require("mongodb");

const dbName = "test";

const connect = async () => {
  const mongoServer = await MongoMemoryServer.create();
  const connection = await MongoClient.connect(mongoServer.getUri(), {});
};

const close = async () => {
  await connection.dropDatabase();
  await connection.close();
  await mongoServer.stop();
};

const clear = async () => {
  const collections = connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
};

module.exports = { connect, close, clear };
