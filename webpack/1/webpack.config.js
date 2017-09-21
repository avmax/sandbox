const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'dev';



module.exports = {
    entry: './home',

    output: {
        filename: 'build.js',
        library: 'home'
    },

    watch: NODE_ENV === 'dev',

    watchOptions : {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV ==='dev' ? 'source-map' : null,

    resolve : {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*', '*-loader'],
        extensions: ['', '.js']
    },

    module : {
        loaders : [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }
        ]
    },

    plugins : [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ]
};

if (NODE_ENV === 'prod') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress : {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    )
}