import { Request, Response } from "express";
import {
  createOne,
  displayAll,
  displayOneById,
  updateOne,
  deleteOne,
} from "../models/sessionInfo.model";

import { ISessionInfo } from "../models/sessionInfo.model";

export const createSession = async (req: Request, res: Response) => {
  const newSession: ISessionInfo = req.body;
  await createOne(newSession, (err: Error, data: ISessionInfo) => {
    if (err) {
      res.status(500).send({
        message: err.message || `Some error occured while creating the session`,
      });
    } else {
      res.status(200).send(data);
    }
  });
};
export const getAll = async (req: Request, res: Response) => {
  await displayAll((err: Error, data: ISessionInfo[]) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving sessions",
      });
    } else {
      res.status(200).send(data);
    }
  });
};
export const getById = async (req: Request, res: Response) => {
  await displayOneById(req.params.id, (err: Error, data: ISessionInfo) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving session",
      });
    } else {
      res.status(200).send(data);
    }
  });
};
export const updateClient = async (req: Request, res: Response) => {
  await updateOne(req.params.id, req.body, (err: Error, data: ISessionInfo) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured while updating session",
      });
    } else {
      res.status(200).send(data);
    }
  });
};
export const deleteById = async (req: Request, res: Response) => {
  await deleteOne(req.params.id, (err: Error, data: ISessionInfo) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured while deleting session",
      });
    } else {
      res.status(200).send(data);
    }
  });
};
