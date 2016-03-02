var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname, './app'),
    entry: './index.js',
    output: {
        path: path.join(__dirname, './app/build'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    watch: true,
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/, '/\.spec\.js$/'],
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.jade$/,
                loader: 'ng-cache?prefix=[dir]/[dir]!jade-html'
            },
            {
                test: /\.styl$/,
                loader: 'css!cssnext!stylus'
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff)/,
                loader: 'url'
            }
        ]
    }
};