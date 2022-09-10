import { ObjectId } from "mongodb";
import { randomUUID } from "node:crypto";
import { ChatPreview } from "../shared.server";
import { getAccount, updateAccount } from "./auth";
import { collection } from "./database";

const _chats = collection("chats");

export async function getChatIndex(session: string): Promise<ChatPreview[]> {
  const [chats, account] = await Promise.all([_chats, getAccount(session)]);
  if (!chats || !account) return [];

  const myId = account._id.toHexString();
  const myChats = await chats.find({ _id: { $in: account.chats } }).toArray();

  return myChats
    .map((chat) => {
      return {
        id: chat._id.toHexString(),
        level: chat.members[myId],
        title: chat.title,
      };
    })
    .filter((chat) => chat.level !== "none");
}

export async function createChat(
  session: string,
  title: string
): Promise<boolean> {
  const [chats, account] = await Promise.all([_chats, getAccount(session)]);
  if (!chats || !account) return false;

  const _id = new ObjectId();

  if (!(await updateAccount(session, { chats: account.chats.concat(_id) }))) {
    return false;
  }

  const result = await chats.insertOne({
    _id,
    creation: Date.now(),
    members: { [account._id.toHexString()]: "manage" },
    messages: [
      {
        content: "Welcome to your new chat, ",
        from: "zSnout",
        id: randomUUID(),
        timestamp: Date.now(),
      },
    ],
    title,
  });

  if (!result.acknowledged) {
    return false;
  }

  return true;
}
