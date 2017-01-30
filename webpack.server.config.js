var webpack = require('webpack')
var fs = require('fs')

var nodeModules = {}
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod
  })

module.exports = {
  target: 'node',
  entry: {
    server: [
      'webpack/hot/poll?1000',
      './src/server'
    ]
  },
  output: {
    path: `${__dirname}/bin`,
    filename: '[name].js',
    publicPath: 'http://localhost:3000/static/'
  },
  externals: nodeModules,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel', 'eslint'],
        include: /src/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: '#eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
