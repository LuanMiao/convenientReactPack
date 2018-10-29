const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const catalogPath = require("../base/catalogPath");

const configPlugins = [
  //生成一个新的HTML文件处理
  new HtmlWebpackPlugin({
    //1、html文件标题
    title: "React Router",
    //2、根据指定的模板文件来生成index.html文件
    template: catalogPath.indexHtml,
    //3、生成后的HTML文件名叫index.html,并放在packing文件夹内
    filename: path.resolve(catalogPath.buildCatalog, "./index.html"),
    //4、inject的作用是将script标签放在html文件的body底部
    inject: "body",
    //5、favicon的作用是给生成后的html文件生成一个图标,属性值是favicon文件所在的路径名
    favicon: path.resolve(catalogPath.publicCatalog, "./favicon.ico"),
    //6、是否对html文件进行压缩
    minify: false,
    //7、是否给生成的css、js文件一个独特的hash值
    hash: true
  })
];

module.exports = configPlugins;
