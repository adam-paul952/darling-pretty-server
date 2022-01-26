import { MongoClient } from "mongodb";

const setupDb = async () => {
  const url = process.env.DB_URL!;
  const dbName = "darling-pretty";

  try {
    const client = new MongoClient(url);
    await client.connect();
    console.log(`Successfully connected to MongoDB`);
    const db = client.db(dbName);
    const col = db.collection("clientinfo");
    return { client: client, col: col };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default setupDb;
