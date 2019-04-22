/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

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
      chunks: ['main', 'webpack-runtime', 'vendor'],
    }),
    new HtmlWebPackPlugin({
      template: './src/pages/projects/views/peappreact.html',
      filename: 'projects/peappreact/index.html',
      chunks: ['projects', 'webpack-runtime', 'vendor'],
    }),
    new HtmlWebPackPlugin({
      template: './src/pages/projects/views/personalportfolio.html',
      filename: 'projects/personalportfolio/index.html',
      chunks: ['projects', 'webpack-runtime', 'vendor'],
    }),
    new CopyPlugin([{ from: 'public' }]), // Copy things like favicons, 3rd party files
  ],
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'],
  },
};
