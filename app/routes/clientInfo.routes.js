module.exports = (app) => {
  const clientInfo = require("../controllers/clientInfo.controller");

  // Create client information
  app.post("/clientinfo", clientInfo.create);

  // Read all client information
  app.get("/clientinfo", clientInfo.findAll);

  // Find a single client by Id
  app.get("/clientinfo/:clientId", clientInfo.findOneById);

  // Delete client information
  app.delete("/clientinfo/:clientId", clientInfo.delete);
};
