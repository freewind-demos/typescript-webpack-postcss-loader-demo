import {Configuration} from 'webpack';
import HtmlWebpackPlugin = require("html-webpack-plugin");

const config: Configuration = {
  mode: "development",
  entry: './entry.ts',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.pcss$/,
      use: [
        'style-loader',
        'postcss-loader'
      ]
    }, {
      test: /\.tsx?$/,
      loader: 'ts-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}

export default config;
