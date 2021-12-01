const SessionInfo = require("../models/sessionInfo.model");

// Create new session
exports.create = async (req, res) => {
  const newSession = req.body;
  await SessionInfo.create(newSession, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Session.",
      });
    } else res.status(200).send(data);
  });
};

// Find session

// Update session

// Delete session
