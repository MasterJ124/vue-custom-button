const { defineConfig } = require("@vue/cli-service");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      fileName: "index.html",
    },
  },
  // configureWebpack: {
  //   externals: {
  //     vue: "Vue",
  //   },
  // },
  chainWebpack: (config) => {
    config.module
      .rule("js")
      .include.add(resolve("packages"))
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => options);
  },
  lintOnSave: false,
});
