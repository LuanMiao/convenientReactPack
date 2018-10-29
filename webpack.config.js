process.traceDeprecation = true;
module.exports = {
  mode: "production",
  entry: require("./config/entry.product"),
  output: require("./config/output.product"),
  module: require("./config/module.product"),
  plugins: require("./config/plugins.product"),
  resolve: require("./config/resolve"),
  performance: require("./config/performance")
}
