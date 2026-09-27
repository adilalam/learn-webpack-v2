const CompressWebpackPlugin = require("compression-webpack-plugin");

module.exports = env => ({
  plugins: [
    new CompressWebpackPlugin()
  ]
});
