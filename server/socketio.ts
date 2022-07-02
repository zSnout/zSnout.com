import { Server as HTTPServer } from "node:http";
import { Server } from "socket.io";

export function makeIO(server: HTTPServer) {
  const io = new Server(server);

  io.on("connection", (socket) => {
    socket.send("hey!");
  });
}
