import { Server as HTTPServer } from "node:http";
import { Server } from "socket.io";
import { ClientToServer, ServerToClient } from "../shared";
import {
  AccountStatus,
  checkSession,
  createAccount,
  ReAuthStatus,
} from "./auth";

export function makeIO(server: HTTPServer) {
  const io = new Server<ClientToServer, ServerToClient>(server);

  io.on("connection", (socket) => {
    socket.on("account:check-session", async (session) => {
      const { status, account } = await checkSession(session);

      if (status === ReAuthStatus.Success) {
        socket.emit("account:update:session", account.session);
        socket.emit("account:update:username", account.username);
      } else {
        socket.emit("account:update:session", "");
        socket.emit("account:update:username", "");
      }
    });

    socket.on("account:create", async (username, password, email) => {
      const { status, account } = await createAccount(
        username,
        password,
        email
      );

      if (status === AccountStatus.Success) {
        socket.emit("account:update:session", account.session);
        socket.emit("account:update:username", account.username);
        socket.emit("go-home");
      } else {
        socket.emit(
          "error",
          {
            [AccountStatus.BadEmail]:
              "Your email address is invalid. Make sure it is formatted properly and can recieve emails.",
            [AccountStatus.BadPassword]:
              "Your password should have a letter, number, symbol, and be at least 8 characters long.",
            [AccountStatus.BadUsername]:
              "Your username should only contain letters, numbers, and underscores, and should be at least 6 characters long.",
            [AccountStatus.EmailTaken]: `${email} is already registered with another account.`,
            [AccountStatus.Failure]:
              "An unknown issue occurred. Try again later.",
            [AccountStatus.NoServer]:
              "This instance of zSnout doesn't have a database available.",
            [AccountStatus.UsernameTaken]: `@${username} is already registered with another account.`,
          }[status]
        );
      }
    });
  });
}
