const transporter = require("../models/transporter");
const env = require("dotenv").config();

exports.sendEmail = (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `${name} has sent you a message from Darling Pretty`,
    text: `
          Email: ${email} 
          Subject: ${subject} 
          Message: ${message}
          `,
  };

  transporter.sendEmail().sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: "Error sending email",
      });
    } else {
      console.log(info);
      res.status(200).json({
        message: "Email sent",
      });
    }
  });
};
