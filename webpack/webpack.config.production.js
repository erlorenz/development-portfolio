/* eslint-disable @typescript-eslint/no-var-requires */
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.config.common');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'assets/scripts/[name].[chunkhash].js',
    chunkFilename: 'assets/scripts/[name].[chunkhash].chunk.js',
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(s?css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/styles/[name].[hash].css',
      chunkFilename: 'assets/styles/[id].[hash].css',
    }),
  ],
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    // Dont split because each page has a totally separate entry point
    // splitChunks: {
    //   chunks: 'all',
    // },
    // runtimeChunk: true,
  },
});
