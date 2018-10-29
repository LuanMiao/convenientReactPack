const webpack = require("webpack");
const pluginsConfig = require("./inherit/plugins.config");

pluginsConfig.push(new webpack.LoaderOptionsPlugin({
  options: {
    eslint: require('./vendor/eslint.config.js')
  }
}));

/**
 * 开启全局的模块热替换（HMR）——如在package.json中加入--hot之后就不需要
 * new webpack.HotModuleReplacementPlugin()了，不然会报错：
 * Maximum call stack size exceeded(最大调用栈溢出)
 */
//pluginsConfig.push(new webpack.HotModuleReplacementPlugin());
// 当模块热替换（HMR）时在浏览器控制台输出对用户更友好的模块名字信息
pluginsConfig.push(new webpack.NamedModulesPlugin());
pluginsConfig.push(new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }));

module.exports = pluginsConfig;
