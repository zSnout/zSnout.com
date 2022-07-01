import { MongoClient } from "mongodb";

export const client = process.env.ZSNOUT_DATABASE
  ? new MongoClient(process.env.ZSNOUT_DATABASE)
      .connect()
      .then(async (client) => {
        const db = client.db("zsnout");

        return {
          collection<T extends keyof Database>(name: T) {
            return db.collection<Database[T]>(name);
          },
        };
      })
  : undefined;

export interface Database {
  accounts: {
    id: string;
    creation: number;
    username: string;
    password: string;
    session: string;
    email: string;
    verified: boolean;
  };
}
