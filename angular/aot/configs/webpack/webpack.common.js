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
const DefinePlugin = require('webpack/lib/DefinePlugin');
// const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const AotPlugin = require('@ngtools/webpack').AotPlugin;



const AOT = process.env.AOT;

if (AOT) {
  console.log('WEBPACK RUNNING IN AOT MODE:');
}

const config = {
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
      template: 'src/index.html'
    }),

    new DefinePlugin({
      'process.env': {
        'AOT': JSON.stringify(AOT)
      }
    })

    // new BundleAnalyzerPlugin()
  ]
};



module.exports = function (options) {
  if (!AOT) {
    config.module.rules.push({
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
    })
  }

  if (AOT) {
    config.module.rules.push({
      test: /\.ts$/,
      loaders: ['@ngtools/webpack']
    });

    config.plugins.push(
      new AotPlugin({
        tsConfigPath: helpers.root('.', 'tsconfig.json'),
        entryModule: helpers.root('./src/app', 'app.module') + '#AppModule'
      })
    )
  }

  return config;
};

