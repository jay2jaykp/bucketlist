import { Request, Response, NextFunction } from "express";
import { knex } from "../knex/knex";
// import { knex } from "../knex/knex";

const apiName: string = "bucketlist";

const logRequest = (req: Request, api: string) => {
  console.log(`⚡️${api}: ${req.method} ${req.url}`);
};

export const getWishes = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  logRequest(req, apiName);
  const data = await knex.select().from("wishes");
  res.send(data).status(200);
};

export const postWish = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  logRequest(req, apiName);
  console.log(req.body);
  res.sendStatus(200);
};
