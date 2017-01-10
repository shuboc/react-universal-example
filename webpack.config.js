module.exports = {
  entry: './src/index',
  output: {
    path: './bin',
    filename: 'client.bundle.js'
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
  devtool: "eval"
}
