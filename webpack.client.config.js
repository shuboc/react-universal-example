var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    client: [
      'webpack-hot-middleware/client?reload=true',
      './src/client'
    ]
  },
  output: {
    path: `${__dirname}/bin`,
    filename: '[name].js',
    publicPath: 'http://localhost:3000/static/'
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
  // devServer: {
  //   historyApiFallback: true,
  //   hot: true,
  //   inline: true,
  //   stats: 'errors-only',
  //   host: process.env.HOST,
  //   port: process.env.PORT
  // },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
