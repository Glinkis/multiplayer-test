import { Express } from "express";
import * as path from "path";
import { serveStatic } from "./serveStatic";
import { serveWebpack } from "./serveWebpack";

const DIST_DIR = path.join(__dirname, "../../../dist-client");
const HTML_FILE = path.join(DIST_DIR, "index.html");

export default (server: Express) => {
  if (process.env.NODE_ENV !== "production") {
    serveWebpack(server, HTML_FILE);
  } else {
    serveStatic(server, DIST_DIR, HTML_FILE);
  }
  return server;
};
