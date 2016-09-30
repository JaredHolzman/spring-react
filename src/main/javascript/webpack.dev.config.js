var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var SRC = path.join(__dirname, 'index.js');
var DEST = path.join(__dirname, '../resources/static/dist/');
const PUBLPATH = 'http://localhost:3000/bundle/';

module.exports = {
    devtool: 'eval',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './index.js'
    ],
    resolve: {
        extensions: ['', '.js']
    },
    output: {
        path: path.join(__dirname, '../resources/static/dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loader: [{
            test: /\.js$/,
            loaders: ['react-hot', 'jsx?harmony'],
            include: SRC
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('development')
            }
        })
    ]
};