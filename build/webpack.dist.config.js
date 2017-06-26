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
		extensions:['.js','.vue']
	},
	module:{
		rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: 'vue-style-loader!css-loader',
                    },
                    postLoaders: {
                        html: 'babel-loader'
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader', exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'autoprefixer-loader'
                ]
            },
            { test: /\.(html|tpl)$/, loader: 'html-loader' }
        ]
	}
}