var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var SRC = path.join(__dirname, '/src/index');
var DEST = path.join(__dirname, '../resources/dist/');
const PUBLPATH = 'http://localhost:3000';

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: PUBLPATH
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new HtmlWebpackPlugin({
            title: 'Spring + React',
            template: path.join(__dirname, 'assets/index.html')
        })
    ],
    resolve: {
        extensions: ['', '.js'],
        root: path.join(__dirname, 'src')
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel?cacheDirectory'],
            include: path.join(__dirname, 'src')
        }]
    },
    devServer: {
        inline: true,
        hot: true,
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                secure: false,
                // node-http-proxy option - don't add /localhost:8080/ to proxied request paths
                prependPath: false
            }
        }
    }
};