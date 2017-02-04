var webpack = require('webpack')

module.exports = {
  entry: {
    client: [
      'webpack/hot/dev-server',
      './src/client'
    ]
  },
  output: {
    path: `${__dirname}/bin`,
    filename: '[name].js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel', 'eslint'],
        include: /src/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: '#source-map',
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
