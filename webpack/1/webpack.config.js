const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'dev';



module.exports = {
    context: __dirname + '/frontend',
    entry: './main',
    output: {
        path: __dirname + '/public',
        filename: '[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.jade$/,
                loader: 'jade-loader'
            },
            {
                test: /\.css/,
                loader: 'style!css'
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'file?name=[path][name].[ext]'
            }
        ]
    }
};

