const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => ({
  output: {
    filename: "chunk.[chunkhash].js"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "chunk.[contenthash].css",
      chunkFilename: "chunk.[contenthash].css",
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, "css-loader"
        ]
      }
    ]
  }
});