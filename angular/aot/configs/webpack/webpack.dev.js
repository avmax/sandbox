const helpers = require('./helpers');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const webpackCommon = require('./webpack.common.js'); // the settings that are common to prod and dev

// const webpackMergeDll = webpackMerge.strategy({plugins: 'replace'});
// const DllBundlesPlugin = require('webpack-dll-bundles-plugin').DllBundlesPlugin;
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');



module.exports = function (options) {
  return webpackMerge(webpackCommon(), {
    devtool: 'inline-source-map',

    output: {
      path: helpers.root('dist'),
      publicPath: '/',
      filename: '[name].bundle.js',
      sourceMapFilename: '[name].bundle.map',
      chunkFilename: '[id].chunk.js'
    },


    // TODO: add DLL Plugin

    devServer: {
      historyApiFallback: true,
      stats: 'minimal',
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      }
    }
  })
};

