"use strict";

const path = require("path");
const webpack = require("webpack");
const loaders = require("./loaders");

module.exports = {
  context: __dirname,
  entry: "../src/server/server.ts",
  output: {
    path: path.join(__dirname, "../", "dist-server"),
    publicPath: "/",
    filename: "[name].bundle.js"
  },
  target: "node",
  devtool: "sourcemap",
  module: {
    rules: [loaders.ts]
  },
  externals: [
    /^[a-z\-0-9]+$/ // Ignore node_modules folder
  ],
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".json", ".ts"]
  }
};
