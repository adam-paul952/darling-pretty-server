module.exports = (app) => {
  const sessionInfo = require("../controllers/sessionInfo.controller");

  // Create session information
  app.post("/sessioninfo", sessionInfo.create);

  // Read all session information
  app.get("/sessioninfo", sessionInfo.findAll);

  // Read session information by date
  app.get("/sessioninfo/:id", sessionInfo.findById);

  // Update session information
  app.put("/sessioninfo/:id", sessionInfo.update);

  // Delete session information
  app.delete("/sessioninfo/:id", sessionInfo.delete);
};
