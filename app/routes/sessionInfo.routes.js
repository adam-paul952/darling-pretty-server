module.exports = (app) => {
  const sessionInfo = require("../controllers/sessionInfo.controller");

  // Create session information
  app.post("/sessioninfo", sessionInfo.create);

  //   // Read all session information
  //   app.get("/sessioninfo", sessionInfo.findAll);

  //   // Update session information
  //   app.put("/sessioninfo/:id", sessionInfo.update);

  //   // Delete session information
  //   app.delete("/sessioninfo/:id", sessionInfo.delete);
};
