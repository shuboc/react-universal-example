var webpack = require('webpack')

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
        loaders: ['react-hot', 'babel', 'eslint'],
        include: /src/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: '#source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
