const precss = require("precss");
const autoprefixer = require("autoprefixer");
module.exports = {
  plugins: [require("autoprefixer")({
      "browsers": [
        "defaults",
        "not ie < 11",
        "last 2 versions",
        "> 1%",
        "iOS 7",
        "last 3 iOS versions"
      ]
    })]
};
