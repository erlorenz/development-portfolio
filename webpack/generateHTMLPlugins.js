/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Use this for apps with multiple HTML Files
 */
const glob = require('glob');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

function generateHTMLPlugins() {
  // Get project views
  return glob.sync('./src/pages/projects/views/*.html').map(
    file =>
      // Output plugin
      new HtmlWebPackPlugin({
        filename: 'projects/' + path.basename(file, '.html') + '/index.html',
        template: file,
        chunks: ['projects', 'vendor'],
      }),
  );
}

module.exports = generateHTMLPlugins;
