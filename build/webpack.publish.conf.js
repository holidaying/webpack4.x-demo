var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin') //打包html的插件
var ExtractTextPlugin = require('extract-text-webpack-plugin') //css 单独打包
var webpack = require('webpack')
var VueLoaderPlugin = require('vue-loader/lib/plugin')
console.log(VueLoaderPlugin)
// const { VueLoaderPlugin } = require("vue-loader");
console.log('==================')
module.exports = {
	mode: 'production',
	entry: { index: './src/main.js' },
	output: {
		path: path.resolve(__dirname, '../static'),
		filename: 'bundle.js',
        publicPath: "./"
	},
	module: {
		//配置一个rules(规则),rules是一个数组,里面包含一条一条的规则
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			},
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015']
					}
				},
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.(sa|sc|le|c)ss$/,
				use: [
						'style-loader',
						'css-loader',
						'less-loader',
						{
							loader: 'postcss-loader',
							options: {
								// 如果没有options这个选项将会报错 No PostCSS Config found
								plugins: loader => [
									require('autoprefixer')() //CSS浏览器兼容
								]
							}
						},
						'sass-loader'
					]
            }
		]
	},
	resolve: {
		alias: {
			vue$: 'vue/dist/vue.esm.js', // 用 webpack 1 时需用 'vue/dist/vue.common.js'
			src: path.resolve(__dirname, '../src'),
			components: path.resolve(__dirname, '../src/components')
		},
		extensions: ['.js', '.vue', '.coffee', '.html', '.css', '.scss', '.less']
	},
	plugins: [
		new VueLoaderPlugin(), //vue插件
		new ExtractTextPlugin('css/[name].css'),
		//将,css和html注入到模板中
		new HtmlWebpackPlugin({
			title: 'aaaa',
			chunks: ['index'],
			filename: 'index.html',
			hash: true, // 会在打包好的bundle.js后面加上hash串
			inject: 'body',
			template: 'index.html'
		}),
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery'
		})
	]
}
