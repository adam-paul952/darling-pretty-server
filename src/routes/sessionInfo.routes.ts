import { Router } from "express";

import {
  createSession,
  getAll,
  getById,
  updateClient,
  deleteById,
} from "../controllers/sessionInfo.controller";

const sessionInfoRouter = Router();

sessionInfoRouter.get("/test", (req, res) => {
  res.send("Hello from SESSIONINFO routes");
});

sessionInfoRouter.post("/", createSession);

sessionInfoRouter.get("/", getAll);

sessionInfoRouter.get("/:id", getById);

sessionInfoRouter.put("/:id", updateClient);

sessionInfoRouter.delete("/:id", deleteById);

export default sessionInfoRouter;
