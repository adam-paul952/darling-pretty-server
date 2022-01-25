/*-----------------------File is not set up with proper credentials to work ---------------------------- */
/*-------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/

const nodemailer = require("nodemailer");
const env = require("dotenv").config();

const transport = {
  host: "smtp-mail.outlook.com",
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error: Error, success: boolean) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

export default transporter;
