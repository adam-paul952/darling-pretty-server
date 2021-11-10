const connection = require("./db");

const ClientInfo = {};

// Create client profile
ClientInfo.create = async (newClient, result) => {
  dbParams = await connection.setupDb();
  await dbParams.col.insertOne(
    { _id: newClient.email, ...newClient },
    (err, res) => {
      if (err) {
        console.log(`Error: `, err);
        result(err, null);
        return;
      }
      console.log(newClient);
      result(null, { _id: newClient.email, ...newClient });
    }
  );
};

// Find all clients
ClientInfo.showAll = async (result) => {
  dbParams = await connection.setupDb();
  await dbParams.col.find({}).toArray((err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
      return;
    }
    console.log(res);
    result(null, res);
  });
};

// Find client by id
ClientInfo.findById = async (id, result) => {
  dbParams = await connection.setupDb();
  await dbParams.col.findOne({ _id: id }, (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
      return;
    }
    console.log(`Found Client:`, res);
    result(null, res);
  });
};

// Updaye client by id
ClientInfo.updateById = async (id, client, result) => {
  dbParams = await connection.setupDb();
  await dbParams.col.findOneAndUpdate(
    { _id: id },
    { $set: client },
    (err, res) => {
      if (err) {
        console.log(err);
        result(err, null);
        return;
      }
      console.log(`Updated Client:`, client);
      result(null, { returnNewDocument: true });
    }
  );
};

// Delete client by id
ClientInfo.deleteById = async (id, result) => {
  dbParams = await connection.setupDb();
  await dbParams.col.deleteOne({ _id: id }, (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
      return;
    }
    console.log(`Deleted Client:`, id);
    result(null, res);
  });
};

module.exports = ClientInfo;
