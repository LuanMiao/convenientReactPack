'use strict';
const path = require("path");
const moduleExports = {};

moduleExports.rootCatalog = path.resolve(__dirname, "../../");
moduleExports.appCatalog = path.resolve(moduleExports.rootCatalog, "./app");

moduleExports.buildCatalog = path.resolve(moduleExports.rootCatalog, "./build");
moduleExports.publicCatalog = path.resolve(moduleExports.rootCatalog, "./public");
moduleExports.nodeModulesCatalog = path.resolve(moduleExports.rootCatalog, "./node_modules");

moduleExports.appJsx = path.resolve(moduleExports.rootCatalog, "./app/app.jsx");
moduleExports.indexHtml = path.resolve(moduleExports.rootCatalog, "./public/index.html");

module.exports = moduleExports;
