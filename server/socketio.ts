import { Server as HTTPServer } from "node:http";
import { Server } from "socket.io";
import { ClientToServer, ServerToClient } from "../events";
import { checkSession, ReAuthStatus } from "./auth";

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
  });
}
