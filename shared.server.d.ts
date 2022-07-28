export interface ClientToServer {
  "account:check-session"(session: string): void;
  "account:create"(username: string, password: string, email: string): void;
  "account:login"(username: string, password: string): void;
  "account:verify"(verifyCode: string): void;

  "bookmarks:request"(session: string): void;
  "bookmarks:update"(session: string, bookmarks: Bookmark[]): void;
}

export interface ServerToClient {
  "account:update:session"(session: string): void;
  "account:update:username"(username: string): void;
  "account:complete-login"(): void;

  "bookmarks:list"(bookmarks: Bookmark[]): void;

  "error"(error: string): void;
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
