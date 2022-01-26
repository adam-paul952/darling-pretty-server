import { Request, Response } from "express";
import {
  create,
  displayAll,
  findById,
  updateById,
  deleteById,
} from "../models/clientInfo.model";
import { IClientInfo } from "../models/clientInfo.model";

export const createClient = async (req: Request, res: Response) => {
  const newClient: IClientInfo = req.body;
  await create(newClient, (err: Error, data: IClientInfo) => {
    if (err) {
      res.status(500).send({
        message: err.message || `Some error occured while creating the client`,
      });
    } else {
      res.status(200).send(data);
    }
  });
};

export const findAll = async (req: Request, res: Response) => {
  await displayAll((err: Error, data: IClientInfo[]) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving clients",
      });
    } else {
      res.status(200).send(data);
    }
  });
};

export const findOneById = async (req: Request, res: Response) => {
  await findById(req.params.clientId, (err: Error, data: IClientInfo) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving client",
      });
    } else {
      res.status(200).send(data);
    }
  });
};

export const updateClient = async (req: Request, res: Response) => {
  await updateById(
    req.params.clientId,
    req.body,
    (err: Error, data: IClientInfo) => {
      if (err) {
        res.status(500).send({
          message: err.message || "Some error occured while updating client",
        });
      } else {
        res.status(200).send(data);
      }
    }
  );
};

export const deleteClient = async (req: Request, res: Response) => {
  await deleteById(req.params.clientId, (err: Error, data: IClientInfo) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured while deleting client",
      });
    } else {
      res.status(200).send({ message: `Client was successfully deleted.` });
    }
  });
};
