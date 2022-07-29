import { readFile } from "node:fs";
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
import {
  allNotes,
  createNote,
  doesOwnNote,
  setNoteContents,
  setNoteTitle,
} from "./notes";

interface SocketData {
  oldSession?: string;
}

type Socket = IOSocket<ClientToServer, ServerToClient, any, SocketData>;

async function verify(socket: Socket, session: string) {
  const { status, account } = await checkSession(session);

  if (status === ReAuthStatus.Success) {
    const deletionTime = account.creation + 15 * 60 * 1000;

    if (account.verified || (!account.verified && deletionTime > Date.now())) {
      socket.emit("account:update:session", account.session);
      socket.emit("account:update:username", account.username);
    }

    if (account.verified) {
      socket.emit("account:needs-verification", false);
    } else {
      socket.emit("account:needs-verification", deletionTime - Date.now());
    }

    if (socket.data.oldSession) {
      socket.leave(`session:${socket.data.oldSession}`);
    }

    socket.join(`session:${(socket.data.oldSession = session)}`);

    return true;
  } else {
    socket.emit("account:update:session", "");
    socket.emit("account:update:username", "");
    socket.emit("account:needs-verification", false);

    if (socket.data.oldSession) {
      socket.leave(`session:${socket.data.oldSession}`);
    }

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
  async "notes:create"(session, title) {
    if (await verify(this, session)) {
      await createNote(session, title);
      this.emit("notes:index", await allNotes(session));
    } else {
      this.emit("notes:index", []);
    }
  },
  async "notes:request:details"(session, noteId) {
    if (await verify(this, session)) {
      const { doesOwn, note } = await doesOwnNote(session, noteId);

      if (doesOwn) {
        this.emit("notes:details", { id: noteId, title: note.title });
      }
    }
  },
  async "notes:request:index"(session) {
    if (await verify(this, session)) {
      this.emit("notes:index", await allNotes(session));
    } else {
      this.emit("notes:index", []);
    }
  },
  async "notes:request:note"(session, noteId) {
    if (await verify(this, session)) {
      const { doesOwn, note } = await doesOwnNote(session, noteId);

      if (doesOwn) {
        this.emit("notes:note", noteId, note.contents);
      } else {
        this.emit("notes:note", noteId, false);
      }
    }
  },
  async "notes:update:note"(session, noteId, contents) {
    if (await verify(this, session)) {
      const { doesOwn } = await doesOwnNote(session, noteId);

      if (doesOwn) {
        setNoteContents(noteId, contents);
        this.to(`session:${session}`).emit("notes:note", noteId, contents);
      }
    }
  },
  async "notes:update:title"(session, noteId, title) {
    if (await verify(this, session)) {
      const { doesOwn } = await doesOwnNote(session, noteId);

      if (doesOwn) {
        await setNoteTitle(noteId, title);

        this.to(`session:${session}`).emit("notes:details", {
          id: noteId,
          title,
        });
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

export function start() {
  const server = new HTTPServer();

  makeIO(server);

  server.addListener("request", (_, res) => {
    readFile("./index.html", (err, data) => {
      if (err) {
        res.statusCode = 503;

        res
          .setHeader("content-type", "application/json")
          .end(JSON.stringify(data));
      } else {
        res.setHeader("content-type", "text/html").end(data);
      }
    });
  });

  const port = +(process.env.PORT || 3000);
  server.listen(Number.isSafeInteger(port) ? port : 3000);
}
