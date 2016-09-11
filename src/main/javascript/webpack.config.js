var path = require('path');

var SRC  = path.join(__dirname, 'App.jsx');
var DEST = path.join(__dirname,'../resources/static/dist/');

var config = {
    entry: SRC,
    resolve: {
        extensions: ['', '.js', '.jsx' ]
    },
    output: {
        path: DEST,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: SRC
            }
        ]
    }
};

module.exports = config;
