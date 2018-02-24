import * as express from "express";
import { Express } from "express";

export function serveStatic(server: Express, dir: string, htmlFile: string) {
  server.use(express.static(dir));
  server.get("/", (req, res) => {
    res.sendFile(htmlFile);
  });
}
