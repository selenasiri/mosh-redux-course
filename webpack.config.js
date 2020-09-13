const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  //configuration:
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
  },
  mode: 'development',
}
