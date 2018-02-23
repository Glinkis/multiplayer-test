import * as express from "express";
import * as io from "socket.io";

const app = express();

app.get("/", (req: any, res: any) => {
  res.send("Hello World");
});

app.listen(3000);
