import * as express from "express";
import { createServer } from "http";
import * as path from "path";
import * as socketio from "socket.io";
import serve from "./serve";

const { log } = console;

const server = serve(express());
const http = createServer(server);
const io = socketio(http);

io.on("connection", socket => {
  log(`${socket.id} connected.`);
  socket.emit("connection", `You have been assigned the id ${socket.id}`);
  socket.on("disconnect", () => log(`${socket.id} disconnected.`));
});

http.listen(3000);
