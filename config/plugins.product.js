const path = require("path");
const webpack = require("webpack");
const catalogPath = require("./base/catalogPath");
const pluginsConfig = require("./inherit/plugins.config");
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const CopyWebpackPlugin = require("copy-webpack-plugin");
//const ImageMinPlugin = require("imagemin-webpack-plugin");

/* 抽取出css */
//pluginsConfig.push(new ExtractTextPlugin({filename: "[name].css", disable: false, allChunks: true}));
pluginsConfig.push(new MiniCssExtractPlugin({ filename: "index.css" }));

// 配合CLI的--bail，一出error就终止webpack的编译进程
pluginsConfig.push(new webpack.NoEmitOnErrorsPlugin());
pluginsConfig.push(new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }));
// pluginsConfig.push(new CopyWebpackPlugin([{
//     from: path.join(catalogPath.appCatalog + "/resource/images/"),
//     to: path.join(catalogPath.buildCatalog + "/images/")
// }]));
// pluginsConfig.push(new ImageMinPlugin({
//     pngquant: {
//         quality: "95-100"
//     }
// }));
pluginsConfig.push(new webpack.LoaderOptionsPlugin({
    options: {
        eslint: require('./vendor/eslint.config.js')
    }
}));

module.exports = pluginsConfig;