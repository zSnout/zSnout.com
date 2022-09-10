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

  "blog:request:will-notify"(session: string): void;
  "blog:update:will-notify"(session: string, willNotify: boolean): void;

  "bookmarks:request"(session: string): void;
  "bookmarks:update"(session: string, bookmarks: Bookmark[]): void;

  "chat:create"(session: string, title: string): void;
  "chat:request:index"(session: string): void;
  "chat:send"(session: string, chatId: string, content: string): void;
  "chat:update:defaultLevel"(
    session: string,
    chatId: string,
    defaultLevel: string
  ): void;
  "chat:update:members"(
    session: string,
    chatId: string,
    members: Record<string, ChatPermissionLevel>
  ): void;
  "chat:update:title"(session: string, chatId: string, title: string): void;
  "chat:watch:start"(session: string, chatId: string): void;
  "chat:watch:stop"(chatId: string): void;

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

  "blog:done:update:will-notify"(): void;
  "blog:update:will-notify"(willNotify: boolean): void;

  "bookmarks:list"(bookmarks: Bookmark[]): void;

  "chat:index"(chats: ChatPreview[]): void;
  "chat:message:list"(chatId: string, messages: ChatMessage[]): void;
  "chat:message:update"(chatId: string, message: ChatMessage): void;
  "chat:permission"(chatId: string, level: ChatPermissionLevel): void;

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

export interface ChatMessage {
  /** from: Username */
  from: string;
  content: string;
  /** id: UUID */
  id: string;
  timestamp: number;
}

export interface ChatDetails {
  id: string;
  title: string;
  /** Record<Username, ChatPermissionLevel> */
  members: Record<string, ChatPermissionLevel>;
  defaultLevel: Exclude<ChatPermissionLevel, "manage">;
}

export interface ChatPreview {
  id: string;
  title: string;
  level: ChatPermissionLevel;
}

export type ChatPermissionLevel = "none" | "view" | "comment" | "manage";
