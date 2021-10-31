const ClientInfo = require("../models/darlingPretty.model");

// Create new client
exports.create = async (req, res) => {
  const newClient = {
    _id: req.body.email,
    name: { first: req.body.firstName, last: req.body.lastName },
    email: req.body.email,
    phoneNumber: req.body.phone,
    billing: {
      address1: req.body.address1,
      address2: req.body.address2,
      city: req.body.city,
      province: req.body.province,
      postalCode: req.body.postalCode,
      country: req.body.country,
    },
  };
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
  ClientInfo.findById(req.params.clientId, (err, data) => {
    if (err) {
      if (err) {
        res.status(500).send({
          message: "Error retrieving Client with id " + req.params.clientId,
        });
      }
    } else res.status(200).send(data);
  });
};

// Delete a client by ID
exports.delete = async (req, res) => {
  ClientInfo.deleteById(req.params.clientId, (err, data) => {
    if (err) {
      if (err) {
        res.status(500).send({
          message: "Error retrieving Client with id " + req.params.clientId,
        });
      }
    } else res.status(200).send({ message: `Client was successfully deleted` });
  });
};
