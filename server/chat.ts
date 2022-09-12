import { ObjectId } from "mongodb";
import { randomUUID } from "node:crypto";
import {
  ChatMessage,
  ChatPermissionLevel,
  ChatPreview,
} from "../shared.server";
import { getAccount, updateAccount } from "./auth";
import { collection } from "./database";

const _accounts = collection("accounts");
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

export async function getChatInfo(session: string, chatId: string) {
  if (chatId.length !== 24) {
    return { permission: "none" as const };
  }

  const [chats, account] = await Promise.all([_chats, getAccount(session)]);
  if (!chats || !account) {
    return { permission: "none" as const };
  }

  const myId = account._id.toHexString();

  const chat = await chats.findOne({
    _id: /** SAFE */ ObjectId.createFromHexString(chatId),
  });
  if (!chat) return { permission: "none" as const };

  const permission = chat.members[myId] || chat.defaultLevel;
  if (!permission || permission === "none") {
    return { permission: "none" as const };
  }

  return {
    permission,
    messages: chat.messages,
    title: chat.title,
    members: chat.members,
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

export async function changeIdsToUsername(
  members: Record<string, ChatPermissionLevel | undefined>
): Promise<Record<string, ChatPermissionLevel>> {
  const accounts = (await _accounts)?.find({
    _id: {
      $in: Object.keys(members)
        .filter((id) => id.length === 24)
        .map((id) => /** SAFE */ ObjectId.createFromHexString(id)),
    },
  });
  if (!accounts) return Object.create(null);

  const values = await accounts.toArray();

  return Object.fromEntries(
    values
      .map(({ _id, username }) => [username, members[_id.toHexString()]!])
      .filter((e) => e[1])
  );
}

export async function changeUsernamesToIds(
  members: Record<string, ChatPermissionLevel>
): Promise<Record<string, ChatPermissionLevel>> {
  const accounts = (await _accounts)?.find({
    username: { $in: Object.keys(members) },
  });
  if (!accounts) return Object.create(null);

  const values = await accounts.toArray();

  return Object.fromEntries(
    values
      .map(({ _id }) => [_id.toHexString(), members[_id.toHexString()]!])
      .filter((e) => e[1])
  );
}

export async function updateMemberList(
  chatIdAsHex: string,
  members: Record<string, ChatPermissionLevel>
) {
  if (chatIdAsHex.length !== 24) return false;

  for (let key in members) if (key.length !== 24) return false;

  const [accounts, chats] = await Promise.all([_accounts, _chats]);
  if (!accounts || !chats) return false;

  const chatId = ObjectId.createFromHexString(chatIdAsHex);

  let { acknowledged } = await accounts.updateMany(
    {},
    { $pull: { chats: chatId } }
  );
  if (!acknowledged) return false;

  ({ acknowledged } = await accounts.updateMany(
    {
      _id: {
        $in: Object.keys(members)
          .filter((id) => id.length === 24)
          .filter((id) => members[id] !== "none")
          .map((id) => /** SAFE */ ObjectId.createFromHexString(id)),
      },
    },
    { $push: { chats: chatId } }
  ));
  if (!acknowledged) return false;

  ({ acknowledged } = await chats.updateOne(
    { _id: chatId },
    { $set: { members } }
  ));

  return acknowledged;
}
