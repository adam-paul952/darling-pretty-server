const nodemailer = require("nodemailer");
const env = require("dotenv").config();

exports.sendEmail = () => {
  const transport = {
    host: "smtp-mail.outlook.com",
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  };

  const transporter = nodemailer.createTransport(transport);

  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take messages");
    }
  });

  return transporter;
};
