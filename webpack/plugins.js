"use strict";

const path = require("path");
const webpack = require("webpack");
// @ts-ignore
const HtmlWebpackPlugin = require("html-webpack-plugin");
// @ts-ignore
const SplitByPathPlugin = require("webpack-split-by-path");

const basePlugins = [
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== "production",
    __PRODUCTION__: process.env.NODE_ENV === "production",
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
  }),
  new SplitByPathPlugin([
    {
      name: "vendor",
      path: path.join(__dirname, "/../", "node_modules")
    }
  ]),
  new HtmlWebpackPlugin({
    title: "multiplayer-test",
    hash: true,
    minify: false
  })
];

const devPlugins = [new webpack.NoEmitOnErrorsPlugin()];

const prodPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    mangle: {
      keep_fnames: true
    },
    compress: {
      warnings: true
    }
  })
];

module.exports = basePlugins
  .concat(process.env.NODE_ENV === "production" ? prodPlugins : [])
  .concat(process.env.NODE_ENV === "development" ? devPlugins : []);
