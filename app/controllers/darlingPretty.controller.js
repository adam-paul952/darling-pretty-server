const UserInfo = require("../models/darlingPretty.model");

exports.findAll = (req, res) => {
  UserInfo.showAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving clients.",
      });
    } else {
      res.status(200).send(data);
    }
  });
};
