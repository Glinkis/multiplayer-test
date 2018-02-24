import * as io from "socket.io-client";

const socket = io();

const output = document.createElement("h2");
document.body.appendChild(output);

const log = (message: string) => (output.textContent += message);

socket.on("connection", log);
