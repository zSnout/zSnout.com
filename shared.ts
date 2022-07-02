export interface ClientToServer {
  "account:check-session"(session: string): void;
  "account:create"(username: string, password: string, email: string): void;

  "bookmarks:request"(): void;
  "bookmarks:update"(bookmarks: Bookmark[]): void;
}

export interface ServerToClient {
  "account:update:session"(session: string): void;
  "account:update:username"(username: string): void;

  "bookmarks:list"(bookmarks: Bookmark[]): void;

  "error"(error: string): void;
  "go-home"(): void;
}

export interface Bookmark {
  name: string;
  url: string;
}
