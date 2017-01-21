var webpack = require('webpack')

module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './src/index']
  },
  output: {
    path: './bin',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
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
    inline: true,
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
