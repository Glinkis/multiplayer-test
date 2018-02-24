import * as express from "express";
import * as path from "path";
import { serveStatic } from "./serveStatic";
import { serveWebpack } from "./serveWebpack";

const DIST_DIR = path.join(__dirname, "../../dist-client");
const HTML_FILE = path.join(DIST_DIR, "index.html");
const server = express();

if (process.env.NODE_ENV !== "production") {
  serveWebpack(server, HTML_FILE);
} else {
  serveStatic(server, DIST_DIR, HTML_FILE);
}

server.listen(3000);
