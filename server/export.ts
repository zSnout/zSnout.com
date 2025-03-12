import { WithId } from "mongodb";
import { DataDump } from "../shared.server";
import { getAccount } from "./auth";
import { Database, collection } from "./database";

function map<T>(data: Record<string, T>, props: Props): Record<string, T> {
  return Object.fromEntries(
    Object.entries(data)
      .map(([k, v]) => [
        (props.usernames[k] ??= `<deleted user #${++props.nextDeleted}>`),
        v,
      ])
      .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
  );
}

interface Props {
  account: WithId<Database["accounts"]>;
  usernames: Record<string, string>;
  nextDeleted: number;
}

export async function getDataExport(session: string): Promise<DataDump> {
  const account = await getAccount(session);
  if (!account) throw new Error("You are not logged in.");

  const usernames = (
    await (await collection("accounts"))?.find().toArray()
  )?.map(({ _id, username }) => [_id.toHexString(), username] as const);
  if (!usernames) throw new Error("Unable to fetch username list.");

  const props: Props = {
    account,
    usernames: Object.fromEntries(usernames),
    nextDeleted: 0,
  };

  const [chats, notes, stories] = await Promise.all([
    getChats(props),
    getNotes(props),
    getStories(props),
  ]);

  const { bookmarks, creation, email, username, verified, willNotifyForBlog } =
    account;

  return {
    account: {
      username,
      email,
      verified,
      creation: new Date(creation),
      willNotifyForBlog,
    },
    bookmarks,
    chats,
    notes,
    stories,
  };
}

async function getChats(props: Props): Promise<DataDump["chats"]> {
  const chats = await collection("chats");
  if (!chats) throw new Error("Unable to get chat info.");

  const docs = await chats
    .find({ _id: { $in: props.account.chats } })
    .toArray();

  return docs.map(
    ({ _id, creation, defaultLevel, members, messages, title }) => ({
      id: _id.toJSON(),
      creation: new Date(creation),
      title,
      levels: {
        default: defaultLevel,
        members: map(members, props),
      },
      messages: messages.map(({ from, timestamp, content }) => ({
        creation: new Date(timestamp),
        from,
        content,
      })),
    })
  );
}

async function getNotes(props: Props): Promise<DataDump["notes"]> {
  const notes = await collection("notes");
  if (!notes) throw new Error("Unable to get note info.");

  const docs = await notes
    .find({ _id: { $in: props.account.notes } })
    .toArray();

  return docs.map(({ _id, creation, title, contents }) => ({
    id: _id.toJSON(),
    creation: new Date(creation),
    title,
    contents,
  }));
}

type Info = DataDump["stories"][number]["members"][string];

async function getStories(props: Props): Promise<DataDump["stories"]> {
  const stories = await collection("stories");
  if (!stories) throw new Error("Unable to get note info.");

  const docs = await stories
    .find({ _id: { $in: props.account.stories } })
    .toArray();

  return docs.map(
    ({ _id, creation, title, completed, gems, members, threads }) => ({
      id: _id.toJSON(),
      creation: new Date(creation),
      title,
      members: map(storyMembers({ completed, gems, members, threads }), props),
      threads: [
        ...completed.map((x) => ({ ...x, completed: true })),
        ...threads.map((x) => ({ ...x, completed: false })),
      ]
        .sort((a, b) => a.creation - b.creation)
        .map(({ creation, completed, sentences }) => ({
          creation: new Date(creation),
          completed,
          sentences: sentences.map((x) => x.content),
        })),
    })
  );
}

function storyMembers(
  story: Pick<Database["stories"], "completed" | "gems" | "members" | "threads">
): DataDump["stories"][number]["members"] {
  function defaultInfo(): Info {
    return {
      gems: null,
      level: null,
      threads: { started: 0, completed: 0 },
      sentences: 0,
    };
  }

  const ret: Record<string, Info> = Object.create(null);

  for (const key in story.gems) {
    (ret[key] ??= defaultInfo()).gems = story.gems[key] ?? null;
  }

  for (const key in story.members) {
    (ret[key] ??= defaultInfo()).level = story.members[key] ?? null;
  }

  for (const thread of story.threads) {
    const first = thread.sentences[0];
    if (first) {
      (ret[first.from] ??= defaultInfo()).threads.started++;
    }

    for (const { from } of thread.sentences) {
      (ret[from] ??= defaultInfo()).sentences++;
    }
  }

  for (const thread of story.completed) {
    const first = thread.sentences[0];
    if (first) {
      (ret[first.from] ??= defaultInfo()).threads.started++;
    }

    const last = thread.sentences[thread.sentences.length - 1];
    if (last) {
      (ret[last.from] ??= defaultInfo()).threads.completed++;
    }

    for (const { from } of thread.sentences) {
      (ret[from] ??= defaultInfo()).sentences++;
    }
  }

  return ret;
}
