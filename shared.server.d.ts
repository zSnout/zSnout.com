export interface ClientToServer {
  "account:check-session"(session: string): void;
  "account:create"(username: string, password: string, email: string): void;
  "account:login"(username: string, password: string): void;
  "account:reset-session"(session: string, shouldSendNewSession: boolean): void;
  "account:update:password"(
    session: string,
    oldPassword: string,
    password: string
  ): void;
  "account:update:username"(session: string, username: string): void;
  "account:verify"(verifyCode: string): void;

  "bookmarks:request"(session: string): void;
  "bookmarks:update"(session: string, bookmarks: Bookmark[]): void;

  "notes:create"(session: string, title: string): void;
  "notes:request:details"(session: string, noteId: string): void;
  "notes:request:index"(session: string): void;
  "notes:request:note"(session: string, noteId: string): void;
  "notes:update:note"(session: string, noteId: string, contents: string): void;
  "notes:update:title"(session: string, noteId: string, title: string): void;
}

export interface ServerToClient {
  "account:update:session"(session: string): void;
  "account:update:username"(username: string): void;
  "account:done:reset-session"(): void;
  "account:done:update:password"(): void;
  "account:done:update:username"(): void;
  "account:done:verify"(): void;
  "account:needs-verification"(timeLeft: false | number): void;

  "bookmarks:list"(bookmarks: Bookmark[]): void;

  "error"(error: string): void;

  "notes:index"(notes: NotePreview[]): void;
  "notes:note"(noteId: string, contents: string | false): void;
  "notes:details"(details: NoteDetails): void;
}

export interface Bookmark {
  name: string;
  url: string;
}

export interface NoteDetails {
  id: string;
  title: string;
}

export interface NotePreview {
  id: string;
  title: string;
  desc: string;
}