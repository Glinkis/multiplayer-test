"use strict";

const path = require("path");
const webpack = require("webpack");
const loaders = require("./loaders");
const plugins = require("./plugins");

module.exports = {
  context: __dirname,
  entry: "../src/client/client.ts",
  output: {
    path: path.join(__dirname, "/../", "dist"),
    publicPath: "/",
    filename: "[name].bundle.js"
  },
  devtool: "sourcemap",
  module: {
    rules: [...Object.values(loaders)]
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".json", ".ts"]
  },
  plugins: plugins
};
