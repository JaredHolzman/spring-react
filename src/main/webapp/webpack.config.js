var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var jeet = require('jeet');
var nib = require('nib');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, '../resources/static'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      minChunks(module, count) {
        return (
          module.resource &&
          module.resource.indexOf(path.resolve('node_modules')) === 0
        )
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Spring React',
      template: path.join(__dirname, 'assets/index-template.html')
    }),
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
    // new ExtractTextPlugin('styles.css')
  ],
  resolve: {
    extensions: ['', '.js'],
    root: path.join(__dirname, 'src')
  },
  module: {
    preLoaders: [
      {
        test: /\.css$/,
        loader: 'stripcomment'
      }
    ],
    loaders: [{
      test: /\.js$/,
      loaders: ['babel?cacheDirectory'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css/,
      loaders: ['style', 'css']
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
    }, {
      test: /\.png$/,
      loader: "file-loader"
    }, {
      test: /\.json/,
      loaders: ['json-loader']
    }]
  },
  stylus: {
    use: [jeet(), nib()]
  }
};
