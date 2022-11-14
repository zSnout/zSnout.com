import { ObjectId } from "mongodb";
import { randomUUID } from "node:crypto";
import {
  StoryDetails,
  StoryPermissionLevel,
  StoryPreview,
  StorySentence,
  StoryStatPeriod,
  StoryStats,
  StoryStatType,
  UUID,
} from "../shared.server";
import { getAccount, updateAtomic } from "./auth";
import { collection } from "./database";

const _accounts = collection("accounts");
const _stories = collection("stories");

export async function getStoryInfo(session: UUID, storyId: UUID) {
  const [stories, account] = await Promise.all([_stories, getAccount(session)]);

  if (!stories || !account || storyId.length !== 24) {
    return { permission: "none" as const };
  }

  const myId = account._id.toHexString();

  const story = await stories.findOne({
    _id: /** SAFE */ ObjectId.createFromHexString(storyId),
  });

  if (!story) {
    return { permission: "none" as const };
  }

  const permission = story.members[myId];
  if (!permission || permission === "none") {
    return { permission: "none" as const };
  }

  const gems = story.gems[myId] || 0;

  return {
    permission,
    gems,
    title: story.title,
    members: story.members,
    threads: story.threads,
    completed: story.completed,
    userGems: story.gems,
  };
}

export async function getStoryIndex(session: string): Promise<StoryPreview[]> {
  const [stories, account] = await Promise.all([_stories, getAccount(session)]);
  if (!stories || !account) return [];

  const myId = account._id.toHexString();
  const myStories = await stories
    .find({ _id: { $in: account.stories } })
    .toArray();

  return myStories
    .map((story) => {
      return {
        id: story._id.toHexString(),
        title: story.title,
        activeThreadCount: story.threads.length,
        completedThreadCount: story.completed.length,
        level: story.members[myId],
      };
    })
    .filter((story) => story.level && story.level !== "none");
}

export async function createStory(
  session: string,
  title: string
): Promise<boolean> {
  const [stories, accounts, account] = await Promise.all([
    _stories,
    _accounts,
    getAccount(session),
  ]);

  if (!stories || !accounts || !account) {
    return false;
  }

  const myId = account._id.toHexString();

  const myStories = await stories
    .find({ members: { [myId]: "manage" } })
    .toArray();

  if (myStories.length >= 100) {
    return false;
  }

  const id = new ObjectId();

  const { acknowledged } = await stories.insertOne({
    completed: [],
    creation: Date.now(),
    members: { [myId]: "manage" },
    gems: { [myId]: 10 },
    threads: [],
    title,
    _id: id,
  });

  if (!acknowledged) {
    return false;
  }

  if (!(await updateAtomic(session, { $push: { stories: id } }))) {
    return false;
  }

  return true;
}

export async function getStoryDetails(
  session: string,
  storyId: UUID
): Promise<StoryDetails | false> {
  if (storyId.length !== 24) {
    return false;
  }

  const [stories, account] = await Promise.all([_stories, getAccount(session)]);

  if (!stories || !account) {
    return false;
  }

  const myId = account._id.toHexString();

  const story = await stories.findOne({
    _id: /** SAFE */ ObjectId.createFromHexString(storyId),
  });

  if (!story) return false;

  const level = story.members[myId];

  if (level === undefined || level == "none") {
    return false;
  }

  return {
    id: storyId,
    activeThreadCount: story.threads.length,
    completedThreadCount: story.completed.length,
    completableThreadCount: story.threads.filter(
      (thread) => thread.sentences.length >= 20
    ).length,
    gems: story.gems[myId] || 0,
    title: story.title,
    level,
  };
}

export async function createThread(
  session: string,
  storyId: UUID,
  firstSentence: string
): Promise<StoryDetails | false> {
  if (
    firstSentence.length < 20 ||
    firstSentence.length >= 1000 ||
    storyId.length !== 24
  ) {
    return false;
  }

  const [stories, account] = await Promise.all([_stories, getAccount(session)]);

  if (!account || !stories) {
    return false;
  }

  const id = /** SAFE */ ObjectId.createFromHexString(storyId);
  const userId = account._id.toHexString();
  const story = await stories.findOne({ _id: id });

  if (!story) {
    return false;
  }

  const level = story.members[userId];
  const gems = story.gems[userId];

  if (level != "manage" && level != "write") {
    return false;
  }

  if (gems === undefined || gems < 10) {
    return false;
  }

  const { acknowledged } = await stories.updateOne(
    { _id: id },
    {
      $push: {
        threads: {
          id: randomUUID(),
          creation: Date.now(),
          sentences: [
            {
              id: randomUUID(),
              from: userId,
              content: firstSentence,
              username: account.username,
              creation: Date.now(),
            },
          ],
        },
      },
      $set: {
        [`gems.${userId}`]: gems - 10,
      } as {
        [x: `gems.${string}`]: number;
      },
    }
  );

  if (!acknowledged) {
    return false;
  }

  return {
    level,
    id: storyId,
    activeThreadCount: story.threads.length + 1,
    completableThreadCount: story.threads.filter(
      (thread) => thread.sentences.length >= 20
    ).length,
    completedThreadCount: story.completed.length,
    gems: gems - 10,
    title: story.title,
  };
}

export const enum RequestThreadError {
  IgnoreRequest,
  NotLongEnough,
}

export async function requestThread(
  session: string,
  storyId: UUID,
  toComplete: boolean
): Promise<StorySentence | RequestThreadError> {
  if (storyId.length !== 24) {
    return RequestThreadError.IgnoreRequest;
  }

  const [stories, account] = await Promise.all([_stories, getAccount(session)]);

  if (!stories || !account) {
    return RequestThreadError.IgnoreRequest;
  }

  const myId = account._id.toHexString();

  const story = await stories.findOne({
    _id: /** SAFE */ ObjectId.createFromHexString(storyId),
  });

  if (!story) {
    return RequestThreadError.IgnoreRequest;
  }

  const level = story.members[myId];

  if (level === undefined || level == "none") {
    return RequestThreadError.IgnoreRequest;
  }

  const minimumDistance = Math.min(
    Math.ceil(Object.keys(story.members).length / 2),
    5
  );

  let withDistance = story.threads
    .map((thread) => {
      let distance = Infinity;

      for (let index = thread.sentences.length - 1; index >= 0; index--) {
        if (thread.sentences[index].from == myId) {
          distance = thread.sentences.length - index;
          break;
        }
      }

      return { thread, distance };
    })
    .filter(({ distance }) => distance >= minimumDistance);

  if (toComplete) {
    withDistance = withDistance.filter(
      (thread) => thread.thread.sentences.length >= 20
    );

    if (withDistance.length <= 1) {
      return RequestThreadError.NotLongEnough;
    }
  }

  const thread =
    withDistance[Math.floor(withDistance.length * Math.random())]?.thread;

  if (!thread) {
    return RequestThreadError.NotLongEnough;
  }

  return thread.sentences[thread.sentences.length - 1];
}

export const enum UpdateThreadResult {
  IgnoreRequest,
  AlreadyUpdated,
  Success,
}

export async function updateThread(
  session: string,
  storyId: UUID,
  prevId: UUID,
  nextSentence: string,
  willComplete: boolean
) {
  if (storyId.length !== 24) {
    return UpdateThreadResult.IgnoreRequest;
  }

  const [stories, account] = await Promise.all([_stories, getAccount(session)]);

  if (!stories || !account) {
    return UpdateThreadResult.IgnoreRequest;
  }

  const myId = account._id.toHexString();
  const id = /** SAFE */ ObjectId.createFromHexString(storyId);
  const story = await stories.findOne({ _id: id });

  if (!story) {
    return UpdateThreadResult.IgnoreRequest;
  }

  const level = story.members[myId];

  if (level === undefined || level == "none") {
    return UpdateThreadResult.IgnoreRequest;
  }

  const sentenceFinder = (sentence: StorySentence) => sentence.id == prevId;

  const threadIndex = story.threads.findIndex((thread) =>
    thread.sentences.find(sentenceFinder)
  );

  if (threadIndex == -1) {
    return UpdateThreadResult.IgnoreRequest;
  }

  const thread = story.threads[threadIndex];

  if (!thread) {
    return UpdateThreadResult.IgnoreRequest;
  }

  const last = thread.sentences[thread.sentences.length - 1];

  if (last.id != prevId) {
    return UpdateThreadResult.AlreadyUpdated;
  }

  const next: StorySentence = {
    id: randomUUID(),
    from: myId,
    username: account.username,
    content: nextSentence,
    creation: Date.now(),
  };

  let acknowledged: boolean;

  if (willComplete) {
    const gems = story.gems[myId];

    if (gems === undefined || gems < 10 || story.threads.length <= 1) {
      return UpdateThreadResult.IgnoreRequest;
    }

    thread.sentences.push(next);

    ({ acknowledged } = await stories.updateOne(
      { _id: id },
      {
        $pull: { threads: { id: thread.id } },
        $push: { completed: thread },
        $set: {
          [`gems.${myId}`]: (story.gems[myId] || 0) - 10,
        } as {
          [x: `gems.${string}`]: number;
        },
      }
    ));
  } else {
    ({ acknowledged } = await stories.updateOne(
      { _id: id },
      {
        $push: {
          [`threads.${threadIndex}.sentences`]: next,
        },
        $set: {
          [`gems.${myId}`]: (story.gems[myId] || 0) + 1,
        } as {
          [x: `gems.${string}`]: number;
        },
      }
    ));
  }

  if (!acknowledged) {
    return UpdateThreadResult.IgnoreRequest;
  }

  return {
    type: UpdateThreadResult.Success,
    gems: (story.gems[myId] || 0) + 1,
  };
}

export async function updateStoryTitle(
  session: string,
  storyId: UUID,
  title: string
): Promise<boolean> {
  if (!title || storyId.length !== 24) {
    return false;
  }

  const [stories, account] = await Promise.all([_stories, getAccount(session)]);

  if (!account || !stories) {
    return false;
  }

  const id = /** SAFE */ ObjectId.createFromHexString(storyId);
  const userId = account._id.toHexString();
  const story = await stories.findOne({ _id: id });

  if (!story) {
    return false;
  }

  const level = story.members[userId];

  if (level != "manage") {
    return false;
  }

  const { acknowledged } = await stories.updateOne(
    { _id: id },
    { $set: { title: title.slice(0, 100) } }
  );

  return acknowledged;
}

export async function changeIdsToUsername(
  members: Record<string, StoryPermissionLevel | undefined>
): Promise<Record<string, StoryPermissionLevel>> {
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
  members: Record<string, StoryPermissionLevel>
): Promise<Record<string, StoryPermissionLevel>> {
  const next: typeof members = Object.create(null);

  for (const key in members) {
    next[key.toLowerCase()] = members[key];
  }

  const accounts = (await _accounts)?.find({
    username: {
      $in: Object.keys(next).map((name) => new RegExp(`^${name}$`, "i")),
    },
  });
  if (!accounts) return {};

  const values = await accounts.toArray();

  return Object.fromEntries(
    values
      .map<[string, StoryPermissionLevel]>(({ _id, username }) => [
        _id.toHexString(),
        next[username.toLowerCase()],
      ])
      .filter((e) => e[1] && e[1] != "none")
  );
}

export async function updateMemberList(
  storyId: UUID,
  members: Record<string, StoryPermissionLevel>,
  gems: Record<string, number | undefined>
) {
  if (storyId.length != 24) {
    return;
  }

  const [stories, accounts] = await Promise.all([_stories, _accounts]);

  if (!stories || !accounts) {
    return;
  }

  for (const key in members) {
    if (gems[key] === undefined) {
      gems[key] = 10;
    }
  }

  let acknowledged: boolean;

  const id = /** SAFE */ ObjectId.createFromHexString(storyId);

  ({ acknowledged } = await accounts.updateMany(
    {},
    { $pull: { stories: id } }
  ));
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
    { $push: { stories: id } }
  ));
  if (!acknowledged) return false;

  ({ acknowledged } = await stories.updateOne(
    { _id: /** SAFE */ ObjectId.createFromHexString(storyId) },
    { $set: { members, gems } }
  ));

  return acknowledged;
}

export async function removeMember(storyId: UUID, userId: UUID) {
  if (storyId.length !== 24) return;
  if (userId.length !== 24) return;

  const stories = await _stories;
  if (!stories) return;

  const { members } =
    (await stories.findOne({
      _id: /** SAFE */ ObjectId.createFromHexString(storyId),
    })) || {};
  if (!members) return;

  delete members[userId];

  await stories.updateOne(
    { _id: /** SAFE */ ObjectId.createFromHexString(storyId) },
    { $set: { members } }
  );
}

export async function getStoryStats(
  session: UUID,
  storyId: UUID,
  period: StoryStatPeriod,
  type: StoryStatType
): Promise<StoryStats | undefined> {
  const info = await getStoryInfo(session, storyId);

  if (info.permission == "none") {
    return;
  }

  const cutoff =
    Date.now() -
    {
      day: 24 * 60 * 60 * 1000,
      week: 7 * 24 * 60 * 60 * 1000,
      all: Date.now(),
    }[period];

  const output: Record<string, number> = Object.create(null);
  const last: Record<string, number> = Object.create(null);
  let messageCounts: number[] | undefined;
  let total = 0;

  if (type == "contributions") {
    const sentences = info.threads
      .concat(info.completed)
      .flatMap((e) => e.sentences)
      .filter((e) => e.creation >= cutoff);

    for (const { username, creation } of sentences) {
      if (username in output) {
        output[username]++;
      } else {
        output[username] = 1;
      }

      if (username in last) {
        last[username] = Math.max(last[username], creation);
      } else {
        last[username] = creation;
      }
    }

    total = sentences.length;
  } else if (type == "threads") {
    const threads = info.threads
      .map((e) => ({ ...e, completed: false }))
      .concat(info.completed.map((e) => ({ ...e, completed: true })))
      .filter((e) => e.creation >= cutoff);

    messageCounts = [];

    for (const { creation, sentences, completed } of threads) {
      const username = sentences[0].username;

      if (username in output) {
        output[username]++;
      } else {
        output[username] = 1;
      }

      if (username in last) {
        last[username] = Math.max(last[username], creation);
      } else {
        last[username] = creation;
      }

      if (!completed) {
        messageCounts.push(sentences.length);
      }
    }

    total = threads.length;
    messageCounts.sort((a, b) => b - a);
  }

  return {
    period,
    total,
    type,
    messageCounts,
    contributions: Object.entries(output).sort(([_, a], [_2, b]) => b - a),
    last: Object.entries(last).sort(([_, a], [_2, b]) => b - a),
  };
}
