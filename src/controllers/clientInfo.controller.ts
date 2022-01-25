import { Request, Response } from "express";
import { create } from "../models/clientInfo.model";
import { IClientInfo } from "../models/clientInfo.model";

export const createClient = (req: Request, res: Response) => {
  const newClient: IClientInfo = req.body;
};

export const findAll = (req: Request, res: Response) => {};

export const findOneById = (req: Request, res: Response) => {};

export const updateClient = (req: Request, res: Response) => {};

export const deleteClient = (req: Request, res: Response) => {};
