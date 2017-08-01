var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './src/app.js',
	output: {
		path: 'dist',
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
		{
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: ['css-loader', 'sass-loader'],
				publicPath: "/dist"
			})﻿
		}
		]
	},
	plugins: [
	new HtmlWebpackPlugin({
		template: './src/index.ejs',
		minify: {
			collapseWhitespace: true
		}
	}),
	new ExtractTextPlugin({
		filename: 'app.css',
		disable: false,
		allChunks: true
	})
	]
}