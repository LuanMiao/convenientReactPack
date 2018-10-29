const catalogPath = require("./base/catalogPath");
const moduleConfig = require("./inherit/module.config");

/*
 由于ExtractTextPlugin不支持热更新，因此选择在开发环境下直接用style-loader加载样式。
 如有问题，可切换回ExtractTextPlugin，即使不能用热更新，也可实现LiveReload
 */
moduleConfig.rules.push({
    test: /\.css$/,
    include: catalogPath.appCatalog,
    exclude: catalogPath.nodeModulesCatalog,
    use: [{
        loader: "style-loader"
    }, {
        loader: "css-loader",
        options: { importLoaders: 1 }
    }, {
        loader: "extract-loader"
    }, {
        loader: 'postcss-loader'
    }]
});

moduleConfig.rules.push({
    test: /\.less$/,
    include: catalogPath.appCatalog,
    exclude: catalogPath.nodeModulesCatalog,
    use: [{
        loader: "style-loader"
    }, {
        loader: "css-loader",
        options: { importLoaders: 1 }
    }, {
        loader: 'postcss-loader'
    }, {
        loader: "less-loader"
    }]
});

module.exports = moduleConfig;