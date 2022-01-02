const connection = require("./db");

const SessionInfo = {};

// Create Session
SessionInfo.create = async (newSession, result) => {
  dbParams = await connection.setupDb();
  await dbParams.col2.insertOne(newSession, (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
      return;
    }
    console.log(`Created Session: ${newSession}`);
    result(null, res);
  });
};

// Find all Sessions
SessionInfo.findAll = async (result) => {
  dbParams = await connection.setupDb();
  await dbParams.col2.find().toArray((err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
      return;
    }
    console.log(`Found Sessions: ${res}`);
    result(null, res);
  });
};

// Find Session by date
SessionInfo.findById = async (id, result) => {
  dbParams = await connection.setupDb();
  await dbParams.col2.findOne({ _id: id }, (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
      return;
    }
    console.log(`Found Session: `, res);
    result(null, res);
  });
};

// Update Session
SessionInfo.updateById = async (id, session, result) => {
  dbParams = await connection.setupDb();
  await dbParams.col2.findOneAndUpdate(
    { _id: id },
    { $set: session },
    (err, res) => {
      if (err) {
        console.log(err);
        result(err, null);
        return;
      }
      console.log(`Updated Session: ${session}`);
      result(null, { returnNewDocument: true });
    }
  );
};

// Delete Session
SessionInfo.deleteById = async (id, result) => {
  dbParams = await connection.setupDb();
  await dbParams.col2.deleteOne({ _id: id }, (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
      return;
    }
    console.log(`Deleted Session: ${id}`);
    result(null, res);
  });
};

module.exports = SessionInfo;
