import { MongoClient } from "mongodb";

const client = process.env.ZSNOUT_DATABASE
  ? new MongoClient(process.env.ZSNOUT_DATABASE, { serverApi: "1" })
      .connect()
      .then((client) => {
        client.on("error", async () => {
          await client.close();
          await client.connect();
        });
        return client;
      })
      .catch((e) => (console.log(e), undefined))
  : Promise.resolve((console.log("no database available"), undefined));

const db = client
  .then((client) => client?.db("zsnout"))
  .catch((e) => (console.log(e), undefined));

export const isActive =
  client.then((e) => (e ? true : false)) ?? Promise.resolve(false);

export async function collection<T extends keyof Database>(name: T) {
  return (await db)?.collection<Database[T]>(name);
}

process.on("beforeExit", () => {
  client.then((client) => client?.close());
});

export interface Database {
  accounts: {
    creation: number;
    username: string;
    password: string;
    session: string;
    email: string;
    verified: boolean;
    verifyCode: string;
    bookmarks: Bookmark[];
  };
}

export interface Bookmark {
  name: string;
  url: string;
}
