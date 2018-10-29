const catalogPath = require("./base/catalogPath");
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const moduleConfig = require('./inherit/module.config.js');

moduleConfig.rules.push({
    test: /\.css$/,
    include: catalogPath.appCatalog,
    exclude: catalogPath.nodeModulesCatalog,
    use: [
        { loader: MiniCssExtractPlugin.loader },
        { loader: "css-loader", options: { importLoaders: 1 } },
        { loader: "postcss-loader" },
    ]
    // use: ExtractTextPlugin.extract({
    //   fallback: "style-loader",
    //   use: [
    //     {
    //       loader: "css-loader",
    //       options: {importLoaders: 1}
    //     }, {
    //       loader: 'postcss-loader'
    //     }
    //   ],
    //   publicPath: catalogPath.publicCatalog
    // })
});

moduleConfig.rules.push({
    test: /\.less$/,
    include: catalogPath.appCatalog,
    exclude: catalogPath.nodeModulesCatalog,
    use: [
        { loader: MiniCssExtractPlugin.loader },
        { loader: "css-loader", options: { importLoaders: 1 } },
        { loader: "postcss-loader" },
        { loader: "less-loader" }
    ]
    // use: ExtractTextPlugin.extract({
    //   fallback: "style-loader",
    //   use: [
    //     {
    //       loader: "css-loader",
    //       options: {importLoaders: 1}
    //     }, {
    //       loader: 'postcss-loader'
    //     }, {
    //       loader: "less-loader"
    //     }
    //   ],
    //   publicPath: catalogPath.publicCatalog
    // })
});

module.exports = moduleConfig;