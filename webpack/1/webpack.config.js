const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'dev';
console.log('NODE_ENV', NODE_ENV);



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

    plugins : [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ]
};