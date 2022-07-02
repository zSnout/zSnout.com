export interface ClientToServer {
  "account:check-session"(session: string): void;
}

export interface ServerToClient {
  "account:update:session"(session: string): void;
  "account:update:username"(username: string): void;
}
