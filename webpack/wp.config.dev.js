var path = require('path')
var webpack = require('webpack')
var ENV = process.env.ENV
var CDN = process.env.CDN
var ROOT = path.resolve(__dirname, '../')

module.exports = {
	entry:  path.resolve(ROOT, './src/app.js'),
	output: {
		filename: 'main.js',
		path: path.resolve(ROOT, './dist'),
		publicPath: CDN ? CDN : '/dist'
	},
	module: {
		loaders: [
			{ test: /\.css/, loader: 'style-loader!css-loader' },
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {   "presets": ["es2015", "stage-0", "react"]}},
			{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
			{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=1&name=./images/[name].[ext]' },
			{ test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/, loader: 'file-loader' },
		]
	},
	resolve: {
		extensions: ['.js', '.json', '.less'],
		alias: {

		}
	},
	devServer: { // webpack-dev-server配置
			historyApiFallback: true,//不跳转
			noInfo: true,
			inline: true //实时刷新
	},
	performance: {
			hints: false
	},
	plugins: [
		new webpack.DefinePlugin({
				'process.env': '"dev"',
				env: '"dev"'
		}),
	],
	devtool: '#eval-source-map'
}
