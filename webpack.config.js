const path = require('path');

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
    directory: path.resolve(__dirname)
    }, //실제로 존재하는 정적 파일들의 경로
    historyApiFallback: true,
    compress: true,
    port: 8080,
  },
};
