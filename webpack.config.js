// webpack.config.js
const path = require('path');

module.exports = {
  entry: './frontend/slacker.jsx',
  output: { 
    path: path.resolve(__dirname),
    filename: './app/assets/javascripts/bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};