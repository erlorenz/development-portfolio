/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: './src/pages/main/main.ts',
    projects: './src/pages/projects/projects.ts',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // Inline files smaller than 10kb
              limit: 10 * 1024,
              name: '/assets/img/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
              noquotes: true,
              name: '/assets/img/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/pages/main/main.html',
      filename: 'index.html',
      chunks: ['main'],
    }),
    new HtmlWebPackPlugin({
      template: './src/pages/projects/projects.html',
      filename: 'projects/index.html',
      chunks: ['projects'],
    }),
    new CopyPlugin([{ from: 'public' }]), // Copy things like favicons, 3rd party files
  ],
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'],
  },
};
