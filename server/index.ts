import { Server as HTTPServer } from "node:http";
import { Server, Socket as IOSocket } from "socket.io";
import { ClientToServer, ServerToClient } from "../shared.server";
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

type Socket = IOSocket<ClientToServer, ServerToClient> & {
  oldSession?: string;
};

async function verify(socket: Socket, session: string) {
  const { status, account } = await checkSession(session);

  if (status === ReAuthStatus.Success) {
    socket.emit("account:update:session", account.session);
    socket.emit("account:update:username", account.username);

    if (socket.oldSession) socket.leave(`session:${socket.oldSession}`);
    socket.join(`session:${(socket.oldSession = session)}`);

    return true;
  } else {
    socket.emit("account:update:session", "");
    socket.emit("account:update:username", "");
    if (socket.oldSession) socket.leave(`session:${socket.oldSession}`);

    return false;
  }
}

const events: Partial<ClientToServer> & ThisType<Socket> = {
  "account:check-session"(session: string) {
    verify(this, session);
  },
  async "account:create"(username, password, email) {
    const { status, account } = await createAccount(username, password, email);

    if (status === AccountStatus.Success) {
      await verify(this, account.session);
      this.emit("account:complete-login");
    } else {
      this.emit(
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
  },
  async "account:login"(username, password) {
    const { status, account } = await logInUser(username, password);

    if (status === AuthStatus.Success) {
      await verify(this, account.session);
      this.emit("account:complete-login");
    } else {
      this.emit(
        "error",
        {
          [AuthStatus.BadPassword]: "Your username or password is incorrect.",
          [AuthStatus.NoServer]: "This instance of zSnout can't log in users.",
          [AuthStatus.NoUser]: "Your username or password is incorrect.",
        }[status]
      );
    }
  },
  async "account:verify"(verifyCode) {
    const { status, account } = await verifyAccount(verifyCode);

    if (status === VerifyStatus.Success) {
      await verify(this, account.session);
      this.emit("account:complete-login");
    } else {
      this.emit(
        "error",
        {
          [VerifyStatus.NoAccount]:
            "The provided verification code is invalid.",
          [VerifyStatus.NoServer]:
            "This instance of zSnout can't verify accounts.",
        }[status]
      );
    }
  },
  async "bookmarks:request"(session) {
    if (await verify(this, session)) {
      const bookmarks = (await getAccount(session))?.bookmarks;
      if (bookmarks) this.emit("bookmarks:list", bookmarks);
    }
  },
  async "bookmarks:update"(session, bookmarks) {
    if (await verify(this, session)) {
      if (await updateAccount(session, { bookmarks })) {
        if (bookmarks) {
          this.to(`session:${session}`).emit("bookmarks:list", bookmarks);
        }
      }
    }
  },
};

Object.setPrototypeOf(events, null);

export function makeIO(server: HTTPServer) {
  const io = new Server<ClientToServer, ServerToClient>(server);

  io.on("connection", (socket) => {
    for (const event in events) {
      socket.on(event as any, (events as any)[event].bind(socket));
    }
  });
}
