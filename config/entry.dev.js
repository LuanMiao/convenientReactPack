//Webpack-IE低版本兼容指南https://www.cnblogs.com/godghdai/p/7657716.html
//ES5的API兼容报错问题
// require("es5-shim");
// require("es5-shim/es5-sham");
// require("console-polyfill"); //Console.log 问题
// require("es6-promise"); //Promise 兼容问题

const catalogPath = require("./base/catalogPath");
const entryConfig = {
  index: ["webpack-dev-server/client?http://localhost:8080", "webpack/hot/only-dev-server", catalogPath.appJsx]
};
module.exports = entryConfig;
