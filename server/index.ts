import { ObjectId } from "mongodb";
import { randomUUID } from "node:crypto";
import { Server as HTTPServer } from "node:http";
import { Server, Socket as IOSocket } from "socket.io";
import ytdl from "ytdl-core";
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
  updateAtomic as updateAccountAtomic,
  updatePassword,
  updateUsername,
  verifyAccount,
  VerifyStatus,
} from "./auth";
import {
  changeIdsToUsername,
  changeUsernamesToIds,
  createChat,
  deleteChatMessage,
  getChatIndex,
  getChatInfo,
  removeMember,
  sendChatMessage,
  updateChatMessage,
  updateChatTitle,
  updateMemberList,
} from "./chat";
import {
  allNotes,
  createNote,
  doesOwnNote,
  setNoteContents,
  setNoteTitle,
} from "./notes";
import { createStory, getStoryIndex } from "./stories";

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

    return account;
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

const badUsernameMessage =
  "Your username should only contain letters, numbers, and underscores, and should be 6 to 20 characters long.";

const badPasswordMessage =
  "Your password should contain a letter and number and be at least 8 characters long.";

const events: Partial<ClientToServer> & ThisType<Socket> = {
  "account:check-session"(session: string) {
    verify(this, session);
  },
  async "account:create"(username, password, email) {
    const { status, account } = await createAccount(username, password, email);

    if (status === AccountStatus.Success) {
      await verify(this, account.session);
      this.emit("account:done:verify");
    } else {
      this.emit(
        "error",
        {
          [AccountStatus.BadEmail]:
            "Your email address is invalid. Make sure it is formatted properly and can receive emails.",
          [AccountStatus.BadPassword]: badPasswordMessage,
          [AccountStatus.BadUsername]: badUsernameMessage,
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
      this.emit("account:done:verify");
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
  async "account:reset-session"(session, shouldSendNewSession) {
    const newSession = randomUUID();

    await updateAccount(session, {
      session: newSession,
    });

    const mySession = this.to(`session:${session}`);
    mySession.emit("account:update:session", "");
    mySession.emit("account:update:username", "");

    if (shouldSendNewSession) {
      this.emit("account:update:session", (this.data.oldSession = newSession));
    }

    this.emit("account:done:reset-session");
  },
  async "account:update:username"(session, username) {
    if (await verify(this, session)) {
      const status = await updateUsername(session, username);

      if (status === AccountStatus.Success) {
        this.to(`session:${session}`).emit("account:update:username", username);
        this.emit("account:update:username", username);

        this.emit("account:done:update:username");
      } else {
        this.emit(
          "error",
          {
            [AccountStatus.BadUsername]: badUsernameMessage,
            [AccountStatus.UsernameTaken]: `@${username} is already registered with another account.`,
            [AccountStatus.NoServer]: "This server cannot change usernames.",
            [AccountStatus.Failure]: "An unknown error occurred.",
          }[status]
        );
      }
    }
  },
  async "account:update:password"(session, oldPassword, password) {
    if (await verify(this, session)) {
      const status = await updatePassword(session, oldPassword, password);

      if (status === AccountStatus.Success) {
        this.emit("account:done:update:password");
      } else {
        this.emit(
          "error",
          {
            [AccountStatus.BadPassword]: badPasswordMessage,
            [AccountStatus.IncorrectPassword]:
              "Your old password was incorrect.",
            [AccountStatus.NoServer]: "This server cannot change usernames.",
            [AccountStatus.Failure]: "An unknown error occurred.",
          }[status]
        );
      }
    }
  },
  async "account:verify"(verifyCode) {
    const { status, account } = await verifyAccount(verifyCode);

    if (status === VerifyStatus.Success) {
      await verify(this, account.session);
      this.emit("account:done:verify");
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
  async "blog:request:will-notify"(session) {
    if (await verify(this, session)) {
      this.emit(
        "blog:update:will-notify",
        (await getAccount(session))?.willNotifyForBlog || false
      );
    }
  },
  async "blog:update:will-notify"(session, willNotifyForBlog) {
    if (await verify(this, session)) {
      await updateAccount(session, { willNotifyForBlog });

      this.emit("blog:update:will-notify", willNotifyForBlog);
      this.to(`session-${session}`).emit(
        "blog:update:will-notify",
        willNotifyForBlog
      );

      this.emit("blog:done:update:will-notify");
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
  async "chat:create"(session, title) {
    if (await verify(this, session)) {
      if (await createChat(session, title)) {
        this.emit("chat:index", await getChatIndex(session));
      }
    }
  },
  async "chat:leave"(session, chatId) {
    if (chatId.length !== 24) return;

    const account = await verify(this, session);
    if (!account) return;

    if (
      !(await updateAccountAtomic(session, {
        $pull: {
          chats: /** SAFE */ ObjectId.createFromHexString(chatId),
        },
      }))
    ) {
      return;
    }

    await removeMember(chatId, account._id.toHexString());
  },
  async "chat:message:delete"(session, chatId, messageId) {
    if (chatId.length !== 24) return;

    const account = await verify(this, session);
    if (!account) return;

    if (await deleteChatMessage(account.username, chatId, messageId)) {
      this.to(`chat-${chatId}`).emit("chat:message:delete", chatId, messageId);
      this.emit("chat:message:delete", chatId, messageId);
    }
  },
  async "chat:message:send"(session, chatId, content) {
    if (!content) return;

    const account = await verify(this, session);
    if (!account) return;

    const { permission } = await getChatInfo(session, chatId);

    if (permission === "manage" || permission === "comment") {
      const message = await sendChatMessage(chatId, account.username, content);
      if (!message) return;

      this.to(`chat-${chatId}`).emit("chat:message:update", chatId, message);
      this.emit("chat:message:update", chatId, message);
    }
  },
  async "chat:message:update"(session, chatId, messageId, content) {
    if (chatId.length !== 24) return;

    const account = await verify(this, session);
    if (!account) return;

    const result = await updateChatMessage(
      account.username,
      chatId,
      messageId,
      content
    );

    if (result) {
      this.to(`chat-${chatId}`).emit("chat:message:update", chatId, result);
    }
  },
  async "chat:request:index"(session) {
    if (await verify(this, session)) {
      this.emit("chat:index", await getChatIndex(session));
    }
  },
  async "chat:request:members"(session, chatId) {
    if (await verify(this, session)) {
      const { members, permission } = await getChatInfo(session, chatId);

      this.emit("chat:permission", chatId, permission);
      if (permission !== "manage") return;

      this.emit(
        "chat:update:members",
        chatId,
        await changeIdsToUsername(members)
      );
    }
  },
  async "chat:update:members"(session, chatId, members) {
    const account = await verify(this, session);
    if (!account) return;

    const { permission } = await getChatInfo(session, chatId);

    this.emit("chat:permission", chatId, permission);
    if (permission !== "manage") return;
    if (members[account.username] !== "manage") return;

    const result = await changeUsernamesToIds(members);
    if (result[account._id.toHexString()] !== "manage") return;

    this.emit("chat:update:members", chatId, await changeIdsToUsername(result));

    await updateMemberList(chatId, result);
  },
  async "chat:update:title"(session, chatId, title) {
    if (this.rooms.has(`chat-${chatId}`) || (await verify(this, session))) {
      const { permission } = await getChatInfo(session, chatId);

      if (permission === "manage") {
        if (await updateChatTitle(chatId, title)) {
          this.to(`chat-${chatId}`).emit("chat:update:title", chatId, title);
        }
      }
    }
  },
  async "chat:watch:start"(session, chatId) {
    if (await verify(this, session)) {
      const { title, messages, permission } = await getChatInfo(
        session,
        chatId
      );

      this.emit("chat:permission", chatId, permission);
      if (permission === "none") return;

      this.join(`chat-${chatId}`);
      this.emit("chat:message:list", chatId, messages);
      this.emit("chat:update:title", chatId, title);
    }
  },
  async "chat:watch:stop"(chatId) {
    this.leave(`chat-${chatId}`);
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
  async "story:create"(session, title) {
    if (await verify(this, session)) {
      if (await createStory(session, title)) {
        this.emit("story:index", await getStoryIndex(session));
      }
    }
  },
  async "story:request:index"(session) {
    if (await verify(this, session)) {
      this.emit("story:index", await getStoryIndex(session));
    }
  },
  async "youtube:request"(id) {
    try {
      const info = await ytdl.getInfo(`https://youtube.com/watch?v=${id}`);
      const details = info.videoDetails;
      const formats = info.formats;

      details.thumbnails.sort((a, b) => b.height - a.height);
      const { url: thumbnailURL } = details.thumbnails.sort(
        (a, b) => b.width - a.width
      )[0];

      this.emit("youtube:results", id, {
        title: details.title,
        description: details.description,
        isLive: details.isLiveContent,
        channel: details.ownerChannelName,
        thumbnail: thumbnailURL,
        formats: formats.map(
          ({ url, hasAudio, hasVideo, qualityLabel, audioQuality }) => ({
            url,
            hasAudio,
            hasVideo,
            quality: qualityLabel,
            audio: audioQuality,
          })
        ),
      });
    } catch {}
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

  const port = +(process.env.PORT || 3000);
  server.listen(Number.isSafeInteger(port) ? port : 3000);
}
