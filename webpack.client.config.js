var webpack = require('webpack')
var path = require('path')
var fs = require('fs')

module.exports = {
  entry: {
    client: [
      'webpack-hot-middleware/client?reload=true',
      './src/client'
    ]
  },
  output: {
    path: `${__dirname}/bin`,
    filename: '[name].[hash].js',
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoErrorsPlugin(),
    function(compiler) {
      this.plugin("done", function(stats) {
        var statsPath = path.resolve("./bin/client.stats.json");
        fs.writeFileSync(statsPath, JSON.stringify(stats.toJson()));
      });
    }
  ]
}
