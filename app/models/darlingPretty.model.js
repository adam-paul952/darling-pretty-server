const connection = require("./db");

let dbParams;

UserInfo.showAll = async (result) => {
  try {
    dbParams = await connection.setupDb();
    const listOfClients = await dbParams.col.find({}).toArray();
    console.log(listOfClients);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await dbParams.client.close();
  }
};

module.exports = UserInfo;
