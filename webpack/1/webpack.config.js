const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'dev';



module.exports = {
    context: __dirname + '/frontend',
    entry: './app',

    output: {
        path: __dirname + '/public/js',
        publicPath: '/',
        filename: 'app.js',
    },

    externals: {
        lodash: "_"
    }
};

