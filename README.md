# convenientReactPack 
# npm install
# npm start
{
  "presets": [], //设置转码规则
  "plugins": []  //设置插件
}

# react转码规则
npm install --save-dev babel-preset-react

#react 热加载，局部
npm install --save-dev babel-preset-react-hmre

#解决webpack v4: Entrypoint undefined = index.html
npm install --save-dev html-webpack-plugin@next

#解决webpack v4: Entrypoint undefined = extract-text-webpack-plugin-output-filename
#由于webpack v4的extract-text-webpack-plugin不应该用于css。改为使用mini-css-extract-plugin。
npm install --save-dev mini-css-extract-plugin

对于DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead
这个错误提示，要找到导致警告的插件，将process.traceDeprecation = true
放在webpack配置文件的顶部