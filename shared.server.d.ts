import { ObjectIdLike } from "bson";

export interface ClientToServer {
  "account:check-session"(session: string): void;
  "account:create"(username: string, password: string, email: string): void;
  "account:login"(username: string, password: string): void;
  "account:verify"(verifyCode: string): void;

  "bookmarks:request"(session: string): void;
  "bookmarks:update"(session: string, bookmarks: Bookmark[]): void;

  "notes:create"(session: string, title: string): void;
  "notes:request:details"(session: string, noteId: string): void;
  "notes:request:index"(session: string): void;
  "notes:request:note"(session: string, noteId: string): void;
  "notes:update:details"(
    session: string,
    noteId: string,
    details: NoteDetails
  ): void;
}

export interface ServerToClient {
  "account:update:session"(session: string): void;
  "account:update:username"(username: string): void;
  "account:complete-login"(): void;
  "account:needs-verification"(timeLeft: false | number): void;

  "bookmarks:list"(bookmarks: Bookmark[]): void;

  "error"(error: string): void;

  "notes:index"(notes: NotePreview[]): void;
  "notes:note"(note: string): void;
  "notes:details"(details: NoteDetails): void;
}

export interface Bookmark {
  name: string;
  url: string;
}

export interface ChatMessage {
  creation: number;
  sentBy: string; // username of sender at the send time
  message: string;
}

export interface NoteDetails {
  id: string;
  contributors:
    | {
        username: string;
        level: "owner" | "editor" | "viewer";
      }[]
    | false;
  baseRole: "editor" | "viewer" | "none";
  title: string;
}

export interface NotePreview {
  title: string;
  desc: string;
  id: string;
}
