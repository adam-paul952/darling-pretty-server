const ClientInfo = require("../models/clientInfo.model");

// Create new client
exports.create = async (req, res) => {
  const newClient = req.body;
  await ClientInfo.create(newClient, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Client.",
      });
    } else {
      res.status(200).send(data);
    }
  });
};

// Find all clients
exports.findAll = async (req, res) => {
  await ClientInfo.showAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving clients.",
      });
    } else {
      res.status(200).send(data);
    }
  });
};

// Find a single client by ID
exports.findOneById = async (req, res) => {
  await ClientInfo.findById(req.params.clientId, (err, data) => {
    if (err) {
      if (err) {
        res.status(500).send({
          message: "Error retrieving Client with id " + req.params.clientId,
        });
      }
    } else res.status(200).send(data);
  });
};

// Update a client by ID
exports.update = async (req, res) => {
  await ClientInfo.updateById(req.params.clientId, req.body, (err, data) => {
    if (err) {
      if (err) {
        res.status(500).send({
          message: "Error updating Client with id " + req.params.clientId,
        });
      }
    } else res.status(200).send({ message: `Client was successfully updated` });
  });
};

// Delete a client by ID
exports.delete = async (req, res) => {
  await ClientInfo.deleteById(req.params.clientId, (err, data) => {
    if (err) {
      if (err) {
        res.status(500).send({
          message: "Error retrieving Client with id " + req.params.clientId,
        });
      }
    } else res.status(200).send({ message: `Client was successfully deleted` });
  });
};
