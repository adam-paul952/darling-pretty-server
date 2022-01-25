/*-----------------------File is not set up with proper credentials to work ---------------------------- */
/*-------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/

import { Request, Response } from "express";
import transporter from "../models/transporter";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const sendMail = (req: Request, res: Response) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: { email }, // Insert FROM email address here
    to: { email }, // Insert TO email address here
    subject: `${name} has sent you a message from your contact form`,
    text: `${message}`,
  };

  transporter
    .sendEmail()
    .sendMail(
      mailOptions,
      (err: Error, info: SMTPTransport.SentMessageInfo) => {
        if (err) {
          console.log(err);
          res.status(500).send("There was an error sending the message");
        } else {
          console.log(info);
          res.status(200).send("Email sent successfully");
        }
      }
    );
};

export default sendMail;
