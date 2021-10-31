const connection = require("./db");

const ClientInfo = {};

// Create client profile
ClientInfo.create = async (newClient, result) => {
  try {
    dbParams = await connection.setupDb();
    await dbParams.col.insertOne(newClient, (err, res) => {
      if (err) {
        console.log(err);
        result(err, null);
        return;
      }
      console.log(newClient);
      result(null, newClient);
    });
  } catch (err) {
    console.log(err.stack);
  }
};

// Find all clients
ClientInfo.showAll = async (result) => {
  try {
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
  } catch (err) {
    console.log(err.stack);
  }
};

// Find client by id
ClientInfo.findById = async (id, result) => {
  try {
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
  } catch (err) {
    console.log(err.stack);
  }
};

// Delete client by id
ClientInfo.deleteById = async (id, result) => {
  try {
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
  } catch (err) {
    console.log(err.stack);
  }
};

module.exports = ClientInfo;
