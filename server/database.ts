import { MongoClient } from "mongodb";

export const client = process.env.ZSNOUT_DATABASE
  ? new MongoClient(process.env.ZSNOUT_DATABASE).connect()
  : undefined;
