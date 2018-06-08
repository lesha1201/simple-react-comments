const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  entry: './preview/index.tsx',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    port: 3012,
  },
});
