var path = require('path');
var webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, './dist/js/'),
  modulesPath: __dirname
};

module.exports = {
  entry: {
    app: './src/js/slicknav.js'
  },
  mode: "development",
  resolve: {
    extensions: ['.js', '.scss']
  },
  output: {
    path: __dirname,
    filename: './dist/js/slicknav.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['sass-loader']
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/, loader: "file-loader"
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        loader: 'json-loader'
      }
    ]
  }
};
