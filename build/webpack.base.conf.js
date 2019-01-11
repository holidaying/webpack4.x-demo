var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //打包html的插件
var ExtractTextPlugin = require('extract-text-webpack-plugin');//css 单独打包
var webpack = require("webpack");
console.log("==================");
module.exports = {
  mode: 'development',
  entry: {index:'./src/index.js'},
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  
  module:{
    //配置一个rules(规则),rules是一个数组,里面包含一条一条的规则
    rules:[
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test:/\.(vue|js)$/,
        use:{
            loader:'babel-loader',
            options:{
                presets:[
                    "es2015"
                ]
            }
        },
        exclude:/node_modules/
      },
    ]
  },
  plugins:[
      new ExtractTextPlugin('css/[name].css'),
      new webpack.HotModuleReplacementPlugin(),
      //将,css和html注入到模板中
      new HtmlWebpackPlugin({
        title:"aaaa",
        chunks:['index'],
        filename:'test.html',
        hash: true, // 会在打包好的bundle.js后面加上hash串
				inject: "body",
        template:'index.html'  
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    hot:true,//热加载
    port: 9000
  }
};