var path = require('path');
var HtmlWebPackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
      index: './src/ts/index.ts',
      image: './src/ts/image.ts',
    },
    devtool: 'inline-source-map',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
          {
            test: /\.ts$/,
            use: [
              {
                loader: 'awesome-typescript-loader'
              }
            ]
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              {
                loader: MiniCssExtractPlugin.loader
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'sass-loader'
              }
            ]
          },
          {
            test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  name: '[name].[ext]?[hash]',
                  limit: 1
                }
              }
            ]
          }
        ]
    },
    resolve: {
      extensions: ['.ts', '.js', '.json']
    },
    plugins: [
        new HtmlWebPackPlugin({
            template:'./src/index.html',
            filename:'./index.html'
        }),
        new HtmlWebPackPlugin({
          template:'./src/image.html',
          filename:'./image.html'
      }),
        new MiniCssExtractPlugin({
          filename : '[name].css'
        })
    ]
};