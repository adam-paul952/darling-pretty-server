import { Router } from "express";
import clientInfoRouter from "./clientInfo.routes";
import contactFormRouter from "./contactForm.routes";
import sessionInfoRouter from "./sessionInfo.routes";

const routes = Router();

routes.use("/clientinfo", clientInfoRouter);
routes.use("/contactform", contactFormRouter);
routes.use("/sessioninfo", sessionInfoRouter);

export default routes;
