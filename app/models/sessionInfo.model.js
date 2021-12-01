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

// Find Session

// Update Session

// Delete Session

module.exports = SessionInfo;
