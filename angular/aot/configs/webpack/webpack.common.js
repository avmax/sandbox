const webpack = require('webpack');
const path = require('path');
const helpers = require('./helpers.js');

/**
 * Webpack Plugins
 */
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');



module.exports = function (options) {

  return {
    entry: {
      'polyfills': './dll/polyfills.ts',
      'vendor': './dll/vendor.ts',
      'app': './src/main.ts'
    },

    resolve: {
      extensions: ['.ts', '.js'],
      modules: [helpers.root('src'), helpers.root('node_modules')]
    },

    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [
            {
              loader: 'awesome-typescript-loader',
                options: { configFileName: helpers.root('.', 'tsconfig.json') }
            },
            {
              loader: 'angular2-template-loader'
            }
          ]
        },
        {
          test: /\.css$/,
          loader: 'raw-loader'
        },
        {
          test: /\.html$/,
          use: 'raw-loader',
          exclude: [helpers.root('src/index.html')]
        }

      ]

    },
    plugins: [
      new CheckerPlugin(),

      // TODO: check why does not work
      // new CommonsChunkPlugin({
      //   name: 'vendor',
      //   chunks: ['app'],
      //   minChunks: function (module) { return /node_modules/.test(module.resource) }
      // }),

      new CommonsChunkPlugin({
        name: ['vendor', 'polyfills', 'app'].reverse()
      }),

      new ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)@angular/,
        helpers.root('src'), // location of your src
        { }
      ),

      new HtmlWebpackPlugin({
        template: 'src/index.html',
      })
    ]
  };
};

