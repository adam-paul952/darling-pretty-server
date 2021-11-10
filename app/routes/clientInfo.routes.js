module.exports = (app) => {
  const clientInfo = require("../controllers/clientInfo.controller");

  // Create client information
  app.post("/clientinfo", clientInfo.create);

  // Read all client information
  app.get("/clientinfo", clientInfo.findAll);

  // Find a single client by Id
  app.get("/clientinfo/:clientId", clientInfo.findOneById);

  // Update client by Id
  app.put("/clientinfo/:clientId", clientInfo.update);

  // Delete client information
  app.delete("/clientinfo/:clientId", clientInfo.delete);
};
