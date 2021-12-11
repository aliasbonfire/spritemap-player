const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.APP_ENV;

module.exports = {
  mode,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
          }
        }
      ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    compress: false,
    port: 3000,
    open: true,
  },
};
