let path = require('path');
let autoprefixer = require('autoprefixer');
let extract = require('extract-text-webpack-plugin');
let htmlPulgin = require('html-webpack-plugin');
let excludeReg=/(node_modules|bower_components)/;
let webpack = require('webpack');

module.exports = {
	entry:{
		app: [path.join(__dirname,'../src/app')]
	},
	output:{
		path: path.join(__dirname,'../app'),
		filename:'[name].js'
	},
	module:{
		loaders:[
			{
				test:/\.(js|jsx)$/,
				loader:'babel-loader',
				exclude:excludeReg
			},{
				test: /\.scss$/,
				loader: extract.extract({fallback:'style-loader',use:['css-loader','postcss-loader','sass-loader']})
			},{
				test:/\.(jpg|jpeg|png|gif)/,
				loader:'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
				exclude:excludeReg
			}
		]
	},
	resolve:{
		alias:{
			'img': path.join(__dirname,'../src/assets/imgs'),
			'component': path.join(__dirname,'../src/components'),
			'page': path.join(__dirname,'../src/pages'),
			'scss': path.join(__dirname,'../src/assets/scss'),
			'action': path.join(__dirname,'../src/redux/action'),
			'reducer': path.join(__dirname,'../src/redux/reducer')
		},
		 extensions: ['.js', '.jsx']
	},
	plugins:[
		new htmlPulgin({
			template: path.join(__dirname,'../template/index.html')
		}),
		new extract('[name].css')
	]
}