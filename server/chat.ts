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

  const { acknowledged } = await chats.insertOne({
    _id,
    creation: Date.now(),
    members: { [account._id.toHexString()]: "manage" },
    messages: [
      {
        content: `Welcome to your new chat, ${account.username}!`,
        from: "zSnout",
        id: randomUUID(),
        timestamp: Date.now(),
      },
    ],
    title: title.slice(0, 100),
    defaultLevel: "none",
  });

  return acknowledged;
}

export async function getChatInfo(
  session: string,
  chatId: string
): Promise<GetChatInfoResult> {
  if (chatId.length !== 24) return { permission: "none" };

  const [chats, account] = await Promise.all([_chats, getAccount(session)]);
  if (!chats || !account) return { permission: "none" };

  const myId = account._id.toHexString();

  const chat = await chats.findOne({
    _id: /** SAFE */ ObjectId.createFromHexString(chatId),
  });
  if (!chat) return { permission: "none" };

  const permission = chat.members[myId] || chat.defaultLevel;
  if (!permission || permission === "none") return { permission: "none" };

  return {
    permission,
    messages: chat.messages,
    title: chat.title,
  };
}

export async function updateChatTitle(chatId: string, title: string) {
  if (chatId.length !== 24) return false;

  const chats = await _chats;
  if (!chats) return false;

  const { acknowledged } = await chats.updateOne(
    { _id: /** SAFE */ ObjectId.createFromHexString(chatId) },
    { $set: { title: title.slice(0, 100) } }
  );

  return acknowledged;
}

export async function sendChatMessage(
  chatId: string,
  from: string,
  content: string
) {
  if (chatId.length !== 24) return false;

  const chats = await _chats;
  if (!chats) return false;

  const message = {
    content: content.slice(0, 1000),
    id: randomUUID(),
    timestamp: Date.now(),
    from,
  };

  const { acknowledged } = await chats.updateOne(
    { _id: /** SAFE */ ObjectId.createFromHexString(chatId) },
    { $push: { messages: message } }
  );

  if (!acknowledged) return false;
  return message;
}

export async function deleteChatMessage(
  username: string,
  chatId: string,
  messageId: string
) {
  if (chatId.length !== 24) return false;

  const chats = await _chats;
  if (!chats) return false;

  const { acknowledged } = await chats.updateOne(
    { _id: /** SAFE */ ObjectId.createFromHexString(chatId) },
    { $pull: { messages: { id: messageId, from: username } } }
  );

  return acknowledged;
}

export type GetChatInfoResult =
  | {
      permission: "none";
      messages?: undefined;
      title?: undefined;
    }
  | {
      permission: Exclude<ChatPermissionLevel, "none">;
      messages: ChatMessage[];
      title: string;
    };
