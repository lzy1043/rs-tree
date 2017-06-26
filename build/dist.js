var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry:{
		main:'./src/index.js'
	},
	output:{
		path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: 'rstree.js',
        library: 'rstree',
		libraryTarget: 'umd',
        umdNamedDefine: true
	},
	externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
	resolve:{
		extensions:['','.js','.vue']
	},
	module:{
		loaders:[{
			test:/\.vue$/,
			loader:'vue'
		},{
			test:/\.js$/,
			loader:'babel',
			exclude:'/node_modules/',
		},{
			test:/\.css$/,
			loader:'style!css!less'
		},{
			test: /\.(html|tpl)$/,
            loader: 'vue-html'
		}]
	}
}