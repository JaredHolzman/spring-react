var path = require('path');
var webpack = require('webpack');

var SRC = path.join(__dirname, 'index.js');
var DEST = path.join(__dirname, '../resources/static/dist/');
const PUBLPATH = 'http://localhost:3000/bundle/';

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        }]
    },
    devServer: {
        inline: true,
        hot: true,
        port: 3000,
        proxy: {
            '/**': {
                target: 'http://localhost:8080',
                secure: false,
                // node-http-proxy option - don't add /localhost:8080/ to proxied request paths
                prependPath: false
            }
        }
    }
};