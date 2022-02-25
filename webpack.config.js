const path = require('path');
const dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname),
    },
    historyApiFallback: {
      index: 'index.html',
    },
    compress: true,
    port: 8080,
  },
  plugins: [
    new dotenv(),
  ],
};
