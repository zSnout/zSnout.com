import { ObjectId } from "bson";
import { NotePreview } from "../shared.server";
import { checkSession, ReAuthStatus } from "./auth";
import { collection, Database } from "./database";

const _accounts = collection("accounts");
const _notes = collection("notes");

async function addToMyNotes(noteId: ObjectId, userId: ObjectId) {
  const accounts = await _accounts;
  if (!accounts) return;

  await accounts.updateOne({ _id: userId }, { $push: { notes: noteId } });
}

async function removeFromMyNotes(noteId: ObjectId, userId: ObjectId) {
  const accounts = await _accounts;
  if (!accounts) return;

  await accounts.updateOne({ _id: userId }, { $pull: { notes: noteId } });
}

export async function allNotes(session: string): Promise<NotePreview[]> {
  const { status, account } = await checkSession(session);

  if (status === ReAuthStatus.Failure) return [];
  if (status === ReAuthStatus.NoServer) return [];

  const notes = await _notes;
  if (!notes) return [];

  const myNotes = notes.find({ _id: { $in: account.notes } }).toArray();
  return (await myNotes).map(({ _id, title, contents }) => ({
    id: _id.toHexString(),
    title,
    desc: contents.slice(0, 80).replaceAll("\n", " "),
  }));
}

export async function createNote(session: string, title: string) {
  const { status, account } = await checkSession(session);

  if (status === ReAuthStatus.Failure) return;
  if (status === ReAuthStatus.NoServer) return;

  const notes = await _notes;
  if (!notes) return;

  if (account.notes.length >= 100) return;

  const note = {
    _id: new ObjectId(),
    contents: "<p>This is your new note!</p>",
    creation: Date.now(),
    owner: account._id,
    title,
  };

  await Promise.all([
    notes.insertOne(note),
    addToMyNotes(note._id, account._id),
  ]);
}

export async function doesOwnNote(session: string, noteIdAsHex: string) {
  const { status, account } = await checkSession(session);

  if (status === ReAuthStatus.Failure) return { doesOwn: false as const };
  if (status === ReAuthStatus.NoServer) return { doesOwn: false as const };

  const notes = await _notes;
  if (!notes) return { doesOwn: false as const };

  const note = await notes.findOne({
    _id: ObjectId.createFromHexString(noteIdAsHex),
    owner: account._id,
  });

  if (!note) return { doesOwn: false as const };

  return {
    doesOwn: true as const,
    note,
  };
}

export async function setNoteContents(noteIdAsHex: string, contents: string) {
  if (contents.length >= 10000) return;

  const notes = await _notes;
  if (!notes) return;

  await notes.updateOne(
    { _id: ObjectId.createFromHexString(noteIdAsHex) },
    { $set: { contents } }
  );
}

export async function setNoteTitle(noteIdAsHex: string, title: string) {
  if (title.length >= 100) return;

  const notes = await _notes;
  if (!notes) return;

  await notes.updateOne(
    { _id: ObjectId.createFromHexString(noteIdAsHex) },
    { $set: { title } }
  );
}
