const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/app.jsx'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { 
        test: /\.jsx$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: false,
      template: './src/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    })
  ]
};