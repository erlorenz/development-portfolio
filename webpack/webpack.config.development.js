/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const common = require('./webpack.config.common');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].js', // dont use hash in dev mode
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(s?css)$/, // Sass or CSS
        use: ['style-loader', 'css-loader', 'sass-loader'],
        // Style loader for HMR in development
      },
    ],
  },
  // No code splitting for multi page app in dev
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
