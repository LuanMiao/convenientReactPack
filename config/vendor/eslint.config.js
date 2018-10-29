const path = require("path");
const catalogPath = require("../base/catalogPath");
module.exports = {
  configFile: path.resolve(catalogPath.rootCatalog, "./.eslintrc.js"),
  failOnWarning: true,
  failOnError: true,
  cache: true,
};
