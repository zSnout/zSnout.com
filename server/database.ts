import { MongoClient, ObjectId } from "mongodb";
import { Bookmark, NoteRole } from "../shared.server";

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
    notes: ObjectId[];
    chats: ObjectId[];
  };
  notes: {
    creation: number;
    contributors: {
      [ObjectId: string]:
        | NoteRole.Owner
        | NoteRole.Editor
        | NoteRole.Viewer
        | undefined;
    };
    baseRole: NoteRole.Editor | NoteRole.Viewer | NoteRole.None;
    title: string;
    contents: string;
  };
}
