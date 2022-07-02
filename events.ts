export interface ClientToServer {
  "account:check-session"(session: string): void;

  "account:create-account"(
    username: string,
    password: string,
    email: string
  ): void;
}

export interface ServerToClient {
  "account:update:session"(session: string): void;
  "account:update:username"(username: string): void;
  "go-home"(): void;
  "set-error"(error: string): void;
}
