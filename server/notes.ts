import { ObjectId } from "bson";
import { NotePreview, NoteRole } from "../shared.server";
import { checkSession, ReAuthStatus } from "./auth";
import { collection } from "./database";

const _accounts = collection("accounts");
const _notes = collection("notes");

async function addToMyNotes(noteIdAsHex: string, userIds: ObjectId[]) {
  const accounts = await _accounts;
  if (!accounts) return;

  const users = await accounts.find({ _id: { $in: userIds } }).toArray();

  await Promise.all(
    users.map(({ _id, notes }) => {
      notes = notes.filter((id) => id.toHexString() !== noteIdAsHex);
      notes.unshift(ObjectId.createFromHexString(noteIdAsHex));

      return accounts.updateOne({ _id }, { $set: { notes } });
    })
  );
}

async function removeFromMyNotes(noteIdAsHex: string, userIds: ObjectId[]) {
  const accounts = await _accounts;
  if (!accounts) return;

  const users = await accounts.find({ _id: { $in: userIds } }).toArray();

  await Promise.all(
    users.map(({ _id, notes }) => {
      notes = notes.filter((id) => id.toHexString() !== noteIdAsHex);
      return accounts.updateOne({ _id }, { $set: { notes } });
    })
  );
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

  const note = {
    _id: new ObjectId(),
    baseRole: NoteRole.None as const,
    contents: "This is your new note!",
    contributors: { [account._id.toHexString()]: NoteRole.Owner } as const,
    creation: Date.now(),
    title,
  };

  await Promise.all([
    notes.insertOne(note),
    addToMyNotes(note._id.toHexString(), [account._id]),
  ]);
}

export async function roleForNote(session: string, noteId: string | ObjectId) {
  const { status, account } = await checkSession(session);

  if (status === ReAuthStatus.Failure) return NoteRole.None;
  if (status === ReAuthStatus.NoServer) return NoteRole.None;

  const notes = await _notes;
  if (!notes) return NoteRole.None;

  const note = await notes.findOne({
    _id:
      typeof noteId === "string"
        ? ObjectId.createFromHexString(noteId)
        : noteId,
  });

  if (!note) return NoteRole.None;

  return note.contributors[account._id.toHexString()] ?? note.baseRole;
}
