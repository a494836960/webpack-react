let config = require('./webpack.dev.js');
let webpack = require('webpack');
let webpackServer = require('webpack-dev-server');

config.entry.app.unshift('webpack-dev-server/client?http://localhost:8888/');
let compiler = webpack(config);
let server = new webpackServer(compiler,{
	publicPath: '',
	stats:{
		conlor:true
	}
})

server.listen('8888')