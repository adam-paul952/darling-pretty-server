import { Router } from "express";
import {
  createClient,
  findAll,
  findOneById,
  updateClient,
  deleteClient,
} from "../controllers/clientInfo.controller";

const clientInfoRouter = Router();

clientInfoRouter.get("/test", (req, res) => {
  res.send("Hello from CLIENTINFO routes");
});

clientInfoRouter.post("/", createClient);

clientInfoRouter.get("/", findAll);

clientInfoRouter.get("/:clientId", findOneById);

clientInfoRouter.put("/:clientId", updateClient);

clientInfoRouter.delete("/:clientId", deleteClient);

export default clientInfoRouter;
