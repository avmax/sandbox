const path = require('path');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs


const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const OptimizeJsPlugin = require('optimize-js-plugin');

const webpackCommon = require('./webpack.common.js'); // the settings that are common to prod and dev
const helpers = require('./helpers');



console.log('WEBPACK IS RUNNING IN PROD MODE');
console.log('------------------------------');



let compressionPlugin;

try {
    const CompressionPlugin = require("compression-webpack-plugin");
    compressionPlugin = new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
    })
} catch (e) {
    console.warn('FAILURE AT CREATING COMPRESSION PLUGIN:', e.message);
    compressionPlugin = function() {};
}

module.exports = function (options) {
    return webpackMerge(webpackCommon(), {
        output: {
            // publicPath: '/assets',
            path: helpers.root('dist'),
            filename: '[name].[chunkhash].bundle.js',
            sourceMapFilename: '[name].[chunkhash].bundle.map',
            chunkFilename: '[id].[chunkhash].chunk.js'

        },
    })
};
