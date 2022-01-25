import { Router } from "express";

const sessionInfoRouter = Router();

sessionInfoRouter.get("/", (req, res) => {
  res.send("Hello from SESSIONINFO routes");
});

export default sessionInfoRouter;
