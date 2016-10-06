var path = require('path');
var webpack = require('webpack');

var SRC  = path.join(__dirname, '/src/index');
var DEST = path.join(__dirname,'../resources/dist/');

var config = {
    entry: SRC,
    output: {
        path: DEST,
        filename: '[name].js'
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
    ],
    resolve: {
        extensions: ['', '.js'],
        root: path.join(__dirname, 'src')
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: ['babel'],
                include: SRC
            }
        ]
    }
};

module.exports = config;
