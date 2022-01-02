const { MongoClient } = require("mongodb");
const env = require("dotenv").config();

exports.setupDb = async () => {
  const url = process.env.DB_URL;
  const dbName = "darling-pretty";

  try {
    const client = new MongoClient(url);
    await client.connect();
    console.log("Successfully connected to server");
    const db = client.db(dbName);
    const col = db.collection("clientinfo");
    const col2 = db.collection("sessionInfo");
    const testDb = db.collection("test");
    return { client: client, col: col, col2: col2, testDb: testDb };
  } catch (err) {
    console.log(err.stack);
  }
};
