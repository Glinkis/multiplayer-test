import * as io from "socket.io-client";
import { cssRaw, style } from "typestyle";

const socket = io();

cssRaw(`html { height: 100%; }`);
document.body.className = style({
  backgroundImage: "linear-gradient(15deg, #13547a 0%, #80d0c7 100%)",
  height: "75%"
});

const output = document.createElement("h2");
output.className = style({
  color: "white",
  fontFamily: "Arial, sans-serif",
  fontSize: "25pt",
  fontWeight: 100,
  position: "relative",
  textAlign: "center",
  top: "50%",
  transform: "translateY(-50%)",
  verticalAlign: "middle"
});
document.body.appendChild(output);

const log = (message: string) => (output.textContent += message);

socket.on("connection", log);
