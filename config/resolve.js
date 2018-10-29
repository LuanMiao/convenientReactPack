const path = require("path");
const catalogPath = require("./base/catalogPath");
module.exports = {
  // 模块别名的配置，为了使用方便，一般来说所有模块都是要配置一下别名的
  alias: {
    components: path.resolve(catalogPath.appCatalog, "components/"),
    resource: path.resolve(catalogPath.appCatalog, "resource/")
  },
  // 当require的模块找不到时，尝试添加这些后缀后进行寻找
  extensions: [".js", ".json", ".jsx", ".less"]
};
