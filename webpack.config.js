const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: path.resolve(__dirname, "app/app.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0', 'react'],
            plugins: [
              ['import', {
                "libraryName": "material-ui/core",
                "style": true
              }]
            ]
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: ["url-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: ["url-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".scss", ".css"]
  },
  devServer: {
    //webpack-dev-server配置
    historyApiFallback: true, //不跳转
    noInfo: true,
    hot:true,
    port: 8081,
    inline: true //实时刷新
  },
  performance: {
    hints: false
  },
  devtool: "#eval-source-map",
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
};
