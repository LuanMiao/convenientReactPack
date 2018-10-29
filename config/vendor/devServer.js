const catalogPath = require("../base/catalogPath");
const product = process.env.NODE_ENV === "production";
let pathSwich = null;
if(product){
	pathSwich = catalogPath.buildCatalog
}else{
	pathSwich = "/"
}

module.exports = {
  contentBase: catalogPath.publicCatalog,
  host: "localhost",
  port: 8080,
  hot: true,
  publicPath: pathSwich
}
