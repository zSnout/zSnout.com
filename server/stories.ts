import { ObjectId } from "mongodb";
import { StoryPreview } from "../shared.server";
import { getAccount, updateAccount, updateAtomic } from "./auth";
import { collection } from "./database";

const _accounts = collection("accounts");
const _stories = collection("stories");

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
