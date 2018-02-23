"use strict";

exports.ts = {
  test: /\.ts$/,
  use: "awesome-typescript-loader",
  exclude: /(node_modules\/|\.test\.ts$|tests\.\w+\.ts$)/
};
