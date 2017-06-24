let base = require('./webpack.base.js');
let webpack =require('webpack');

let plugins = [
	new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production') //定义生产环境
        }
    }),
	new webpack.optimize.CommonsChunkPlugin({'name': 'common', 'filename':'common.bundle.js'}),
    new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false, // remove all comments
        },
        compress: {
            warnings: false
        }
    })
];
base.output.publicPath='/resources/protal/mobile/';
base.plugins.push(...plugins);
module.exports = base;