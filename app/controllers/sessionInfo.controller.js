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

// Find all sessions
exports.findAll = async (req, res) => {
  await SessionInfo.findAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving sessions.",
      });
    } else res.send(data);
  });
};

// Find a session by date
exports.findById = async (req, res) => {
  await SessionInfo.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Session with date ${req.params.date} not found.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Session with date " + req.params.date,
        });
      }
    } else res.send(data);
  });
};

// Update session
exports.update = async (req, res) => {
  await SessionInfo.updateById(req.params.id, req.body, (err, data) => {
    if (err) {
      if (err) {
        res.status(500).send({
          message: "Error updating Session with id " + req.params.id,
        });
      }
    } else res.send({ message: `Session was successfully updated` });
  });
};

// Delete session
exports.delete = async (req, res) => {
  await SessionInfo.deleteById(req.params.id, (err, data) => {
    if (err) {
      res
        .status(500)
        .send({ message: `Error deleting Session with id ${req.params.id}` });
    } else {
      res.status(200).send({ message: `Session was successfully deleted` });
    }
  });
};
