import { Router } from "express";
import sendMail from "../controllers/contactForm.controller";

const contactFormRouter = Router();

contactFormRouter.get("/test", (req, res) => {
  res.send("Hello from CONTACTFORM routes");
});

contactFormRouter.get("/", sendMail);

export default contactFormRouter;
