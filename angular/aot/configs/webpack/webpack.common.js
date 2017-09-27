const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const AotPlugin = require('@ngtools/webpack').AotPlugin;
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

const helpers = require('./helpers');

const ANALYSE = !!process.env.ANALYSE;
const AOT = !!process.env.AOT;



console.log('------------------------------');
if (AOT) {
    console.log('WEBPACK IS RUNNING IN AOT MODE');
}

if (ANALYSE) {
    console.log('WEBPACK IS RUNNING IN ANALIZE MODE');
}



module.exports = function(options) {
    let cfg = {
        entry: {
            'polyfills': './src/polyfills.ts',
            'vendor': './src/vendor.ts',
            'app': './src/main.ts'
        },

        resolve: {
            extensions: ['.ts', '.js'],
            modules: [helpers.root('src'), helpers.root('node_modules')]
        },

        module: {
            rules: [
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                    loader: 'ignore-loader'
                },
                {
                    test: /\.css$/,
                  loader: 'raw-loader'
                    // loaders: ['raw-loader']
                }
            ]
        },

        plugins: [
            // Workaround for angular/angular#11580
            new webpack.ContextReplacementPlugin(
                // The (\\|\/) piece accounts for path separators in *nix and Windows
                /angular(\\|\/)core(\\|\/)@angular/,
                helpers.root('./src'), // location of your src
                {} // a map of your routes
            ),

            new webpack.optimize.CommonsChunkPlugin({
                name: ['app', 'vendor', 'polyfills']
            }),

            new HtmlWebpackPlugin({
                template: 'src/index.html'
            }),

            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
                    'AOT': JSON.stringify(AOT),
                }
            })
        ]
    };

    if (!AOT) {
        cfg.module.rules.push({
            test: /\.ts$/,
            loaders: [
                'ng-router-loader',
                {
                    loader: 'awesome-typescript-loader',
                    options: { configFileName: helpers.root('.', 'tsconfig.json') }
                },
                'angular2-template-loader'
            ]
        })
    }

    if (AOT) {
        cfg.module.rules.push({
            test: /\.ts$/,
            loaders: ['@ngtools/webpack']
        });

        cfg.plugins.push(
            new AotPlugin({
                tsConfigPath: helpers.root('.', 'tsconfig.json'),
                entryModule: helpers.root('./src/app', 'app.module') + '#AppModule'
            })
        )
    }

    if (ANALYSE) {
        cfg.plugins.push(new BundleAnalyzerPlugin());
    }

    return cfg;
};
