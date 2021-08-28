const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'js/app.bundle.js',
    path: path.resolve('public'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  target: 'web',
  mode: 'development',
  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.s?css$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'resolve-url-loader', { loader: 'sass-loader', options: { sourceMap: true } }] },
      { test: /\.(png|svg|jpe?g|gif)$/, type: 'asset/resource', generator: { filename: 'images/[name][ext][query]', }, },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico',
    }),
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
      },
    },
  }
};
