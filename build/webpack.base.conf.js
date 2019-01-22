const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') //打包html的插件
// const ExtractTextPlugin = require('extract-text-webpack-plugin') //css 单独打包
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
console.log(VueLoaderPlugin)

console.log('==================')
module.exports = {
	module: {
		//配置一个rules(规则),rules是一个数组,里面包含一条一条的规则
		rules: [
			// {
			// 	test: /\.css$/,
			// 	use: ExtractTextPlugin.extract({
			// 		fallback: 'style-loader',
			// 		use: 'css-loader'
			// 	})
			// },
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
	],
}
