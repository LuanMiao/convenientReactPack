module.exports = {
  mode: "development",
  entry: require("./config/entry.dev"),
  output: require("./config/output.dev"),
  module: require("./config/module.dev"),
  devServer: require("./config/vendor/devServer"),
  plugins: require("./config/plugins.dev"),
  resolve: require("./config/resolve"),
  performance: require("./config/performance")
};
