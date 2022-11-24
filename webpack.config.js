import path from 'path';
const __dirname = path.resolve();

export default {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
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
};
