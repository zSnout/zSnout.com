import { MongoClient } from "mongodb";

const client = process.env.ZSNOUT_DATABASE
  ? new MongoClient(process.env.ZSNOUT_DATABASE)
      .connect()
      .catch(() => undefined)
  : undefined;

const db = client
  ?.then((client) => client?.db("zsnout"))
  .catch(() => undefined);

export async function collection<T extends keyof Database>(name: T) {
  return (await db)?.collection<Database[T]>(name);
}

export interface Database {
  accounts: {
    creation: number;
    username: string;
    password: string;
    session: string;
    email: string;
    verified: boolean;
  };
}
