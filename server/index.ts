import { Server as HTTPServer } from "node:http";
import { Server } from "socket.io";
import { ClientToServer, ServerToClient } from "../shared";
import {
  AccountStatus,
  AuthStatus,
  checkSession,
  createAccount,
  getAccount,
  logInUser,
  ReAuthStatus,
  updateAccount,
  verifyAccount,
  VerifyStatus,
} from "./auth";

export function makeIO(server: HTTPServer) {
  const io = new Server<ClientToServer, ServerToClient>(server);

  io.on("connection", (socket) => {
    let oldSession: string | undefined;

    async function verify(session: string) {
      const { status, account } = await checkSession(session);

      if (status === ReAuthStatus.Success) {
        socket.emit("account:update:session", account.session);
        socket.emit("account:update:username", account.username);

        if (oldSession) socket.leave(`session:${oldSession}`);
        socket.join(`session:${session}`);

        return true;
      } else {
        socket.emit("account:update:session", "");
        socket.emit("account:update:username", "");
        if (oldSession) socket.leave(`session:${oldSession}`);

        return false;
      }
    }

    socket.on("account:check-session", verify);

    socket.on("account:create", async (username, password, email) => {
      const { status, account } = await createAccount(
        username,
        password,
        email
      );

      if (status === AccountStatus.Success) {
        await verify(account.session);
        socket.emit("account:complete-login");
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
              "This instance of zSnout can't log in users.",
            [AccountStatus.UsernameTaken]: `@${username} is already registered with another account.`,
          }[status]
        );
      }
    });

    socket.on("account:login", async (username, password) => {
      const { status, account } = await logInUser(username, password);

      if (status === AuthStatus.Success) {
        await verify(account.session);
        socket.emit("account:complete-login");
      } else {
        socket.emit(
          "error",
          {
            [AuthStatus.BadPassword]: "Your username or password is incorrect.",
            [AuthStatus.NoServer]:
              "This instance of zSnout can't log in users.",
            [AuthStatus.NoUser]: "Your username or password is incorrect.",
          }[status]
        );
      }
    });

    socket.on("account:verify", async (verifyCode) => {
      const { status, account } = await verifyAccount(verifyCode);

      if (status === VerifyStatus.Success) {
        await verify(account.session);
        socket.emit("account:complete-login");
      } else {
        socket.emit(
          "error",
          {
            [VerifyStatus.NoAccount]:
              "The provided verification code is invalid.",
            [VerifyStatus.NoServer]:
              "This instance of zSnout can't verify accounts.",
          }[status]
        );
      }
    });

    socket.on("bookmarks:request", async (session) => {
      if (await verify(session)) {
        const bookmarks = (await getAccount(session))?.bookmarks;
        if (bookmarks) socket.emit("bookmarks:list", bookmarks);
      }
    });

    socket.on("bookmarks:update", async (session, bookmarks) => {
      if (await verify(session)) {
        if (await updateAccount(session, { bookmarks })) {
          if (bookmarks) {
            socket.to(`session:${session}`).emit("bookmarks:list", bookmarks);
          }
        }
      }
    });
  });
}
