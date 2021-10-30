module.exports = (app) => {
  const clientInfo = require("../controllers/darlingPretty.controller");

  // Create client information
  app.post("/clientinfo");

  // Read all client information
  app.get("/clientinfo", clientInfo.findAll);

  // Update client information
  app.put("/clientinfo/:clientId");

  // Delete client information
  app.delete("/clientinfo/:clientId");
};
