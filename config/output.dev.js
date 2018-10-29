const path = require("path");
const catalogPath = require("./base/catalogPath");
module.exports = {
  path: catalogPath.buildCatalog,
  publicPath: "/",
  filename: "index.js"
}
