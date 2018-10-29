const catalogPath = require("../base/catalogPath");
const eslintFormatter = require("eslint-friendly-formatter");

module.exports = {
    rules: [{
        test: /\.js$/,
        enforce: "pre",
        include: catalogPath.appCatalog,
        exclude: catalogPath.nodeModulesCatalog,
        use: [{
            loader: "eslint-loader",
            options: {
                formatter: eslintFormatter,
                fix: true
            }
        }]
    }, {
        test: /\.(js|jsx)$/,
        include: catalogPath.appCatalog,
        exclude: catalogPath.nodeModulesCatalog,
        use: "babel-loader"
    }, {
        test: /\.html$/,
        include: catalogPath.appCatalog || catalogPath.publicCatalog,
        exclude: catalogPath.nodeModulesCatalog,
        use: "html-loader"
    }, {
        test: /\.json$/,
        include: catalogPath.appCatalog,
        exclude: catalogPath.nodeModulesCatalog,
        use: "json-loader"
    }, {
        // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
        // 如下配置，将小于10k byte的图片转成base64码
        test: /\.(gif|jpeg|ico|jpg|png|svg)$/,
        include: catalogPath.appCatalog,
        exclude: catalogPath.nodeModulesCatalog,
        use: [{
            loader: "file-loader",
            options: {
                name: "[name].[ext]",
                publicPath: "./images/",
                outputPath: "images/" //将打包好的图片放到build文件夹的images文件夹
            }
        }, {
            loader: "image-webpack-loader",
            options: {
                mozjpeg: {//压缩 jpeg 图片
                    progressive: true,
                    quality: 65
                },
                optipng: {//压缩 png 图片
                    enabled: false
                },
                pngquant: {//压缩 png 图片
                    quality: '65-90',
                    speed: 4
                },
                gifsicle: {//压缩 gif 图片
                    interlaced: false,
                },
                webp: {//将 jpg 和 png 图片压缩为 webp
                    quality: 75
                },
            }
        }]
    }, {
        test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
        include: catalogPath.appCatalog,
        exclude: catalogPath.nodeModulesCatalog,
        use: [{
            loader: "file-loader",
            options: {
                name: "[name].[ext]",
                publicPath: "./fonts/",
                outputPath: "fonts/" //将打包好的字体放到build文件夹的fonts文件夹
            }
        }]
    }]
};