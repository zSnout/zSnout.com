import { ObjectId } from "mongodb";
import { randomUUID } from "node:crypto";
import {
  ChatMessage,
  ChatPermissionLevel,
  ChatPreview,
} from "../shared.server";
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
        // The ! is validated in the .filter
        level: chat.members[myId]!,
        title: chat.title,
      };
    })
    .filter((chat) => chat.level && chat.level !== "none");
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

export async function getChatMessages(
  session: string,
  chatId: string
): Promise<GetChatMessagesResult> {
  if (chatId.length !== 24) return { permission: "none" };

  const [chats, account] = await Promise.all([_chats, getAccount(session)]);
  if (!chats || !account) return { permission: "none" };

  const myId = account._id.toHexString();

  const chat = await chats.findOne({
    _id: /** SAFE */ ObjectId.createFromHexString(chatId),
  });
  if (!chat) return { permission: "none" };

  const permission = chat.members[myId];
  if (!permission || permission === "none") return { permission: "none" };

  return {
    permission,
    messages: chat.messages,
  };
}

export type GetChatMessagesResult =
  | {
      permission: "none";
      messages?: undefined;
    }
  | {
      permission: Exclude<ChatPermissionLevel, "none">;
      messages: ChatMessage[];
    };
