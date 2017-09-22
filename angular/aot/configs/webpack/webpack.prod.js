const path = require('path');
const helpers = require('./helpers');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs

const webpackCommon = require('./webpack.common.js'); // the settings that are common to prod and dev

const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const OptimizeJsPlugin = require('optimize-js-plugin');

let compressionPlugin;

try {
  console.warn('use compression-webpack-plugin');
  const CompressionPlugin = require("compression-webpack-plugin");
  compressionPlugin = new CompressionPlugin({
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.js$|\.html$/,
    threshold: 10240,
    minRatio: 0.8
  })
} catch (e) {
  console.warn('ПИЗДЕЦ ПИЗДЕЦ ПИЗДЕЦ:', e.message);
  compressionPlugin = function() {};
}



module.exports = function (options) {
  return webpackMerge(webpackCommon(), {
    output: {

      publicPath: '/',
      path: helpers.root('dist'),
      filename: '[name].[chunkhash].bundle.js',
      sourceMapFilename: '[name].[chunkhash].bundle.map',
      chunkFilename: '[id].[chunkhash].chunk.js'

    },

    plugins: [
      new OptimizeJsPlugin({
        sourceMap: false
      }),

      /**
       * Plugin: ExtractTextPlugin
       * Description: Extracts imported CSS files into external stylesheet
       *
       * See: https://github.com/webpack/extract-text-webpack-plugin
       */
      new ExtractTextPlugin('[name].[contenthash].css'),

      new UglifyJsPlugin({
        beautify: false, //prod
        output: {
          comments: false
        }, //prod
        mangle: {
          // keep_fnames: true, // keep class name
          screw_ie8: true
        }, //prod
        compress: {
          // keep_fnames: true, // keep class name
          screw_ie8: true,
          warnings: false,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
          negate_iife: false // we need this for lazy v8
        }
      }),

      compressionPlugin,

      // new NormalModuleReplacementPlugin(
      //   /zone\.js(\\|\/)dist(\\|\/)long-stack-trace-zone/,
      //   path.resolve(__dirname, 'empty.js')
      // ),

      /**
       * Plugin LoaderOptionsPlugin (experimental)
       *
       * See: https://gist.github.com/sokra/27b24881210b56bbaff7
       */
      new LoaderOptionsPlugin({
        minimize: true,
        debug: false,
        options: {

          /**
           * Html loader advanced options
           *
           * See: https://github.com/webpack/html-loader#advanced-options
           */
          // TODO: Need to workaround Angular 2's html syntax => #id [bind] (event) *ngFor
          htmlLoader: {
            minimize: true,
            removeAttributeQuotes: false,
            caseSensitive: true,
            customAttrSurround: [
              [/#/, /(?:)/],
              [/\*/, /(?:)/],
              [/\[?\(?/, /(?:)/]
            ],
            customAttrAssign: [/\)?\]?=/]
          }

        }
      })
    ]
  })
};
