import { Express } from "express";
import * as webpack from "webpack";
import * as webpackDevMiddleware from "webpack-dev-middleware";
import * as webpackHotMiddleware from "webpack-hot-middleware";
import * as config from "../../webpack/webpack.config.js";

export function serveWebpack(server: Express, htmlFile: string) {
  const compiler = webpack(config as webpack.Configuration);
  const devMiddlewareConfig = { publicPath: config.output.publicPath };

  server.use(webpackDevMiddleware(compiler, devMiddlewareConfig));
  server.use(webpackHotMiddleware(compiler));

  server.get("/", (req, res, next) => {
    compiler.outputFileSystem.readFile(htmlFile, (err: Error, result: any) => {
      if (err) {
        return next(err);
      }
      res.set("content-type", "text/html");
      res.send(result);
      res.end();
    });
  });
}
