var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var SRC = path.join(__dirname, 'App.jsx');
var DEST = path.join(__dirname, '../resources/static/dist/');
const PUBLPATH = 'http://localhost:9090/bundle/';
// 'react-hot-loader/patch',
//     'webpack-dev-server/client?http://localhost:$9090',
//     'webpack/hot/only-dev-server',
var config = {
    entry: {
        main: [
            'webpack-hot-middleware/client',
            SRC
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: DEST,
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new HtmlWebpackPlugin({
            title: 'React Spring',
            template: path.join(__dirname, '../resources/templates/index.html')
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: SRC
            }
        ]
    },
    devtool: 'source-map'
};
// devServer: {
//     hot: true,
//         inline: true,
//         port: 9090,
//         proxy: {
//         '/*': {
//             target: 'http://localhost:8080',
//                 secure: false,
//                 // node-http-proxy option - don't add /localhost:8080/ to proxied request paths
//                 prependPath: false
//         }
//     },
//     publicPath: '/static/'
// },
module.exports = config;
