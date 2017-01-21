var webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/index'
  },
  output: {
    path: './bin',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: /src/
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", '.jsx']
  },
  devtool: "#source-map",
  devServer: {
    historyApiFallback: true,
    hot: true,
    hotOnly: true,
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
