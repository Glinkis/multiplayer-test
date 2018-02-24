import * as io from "socket.io-client";

const socket = io();

const output = document.createElement("h2");
document.body.appendChild(output);

socket.on("connection", (message: string) => {
  output.textContent += message;
});
