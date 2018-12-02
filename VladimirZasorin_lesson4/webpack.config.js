const path = require('path');
const ExtractTextWP = require('extract-text-webpack-plugin');
const HtmlWP = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: path.resolve(__dirname, 'src', 'index.jsx'),
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			components: path.resolve(__dirname, 'src', 'components'),
			containers: path.resolve(__dirname, 'src', 'containers'),
			reducers: path.resolve(__dirname, 'src', 'reducers'),
			actions: path.resolve(__dirname, 'src', 'actions'),
		},
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			},
			{
				test: /\.css$/,
				use: ExtractTextWP.extract({
						fallback: 'style-loader',
						use: ['css-loader'],
				})
			}
		]
	},
	devServer: {
		historyApiFallback: true,
	},
	plugins: [
		new ExtractTextWP({ filename: 'style.css' }),
		new HtmlWP({
			template: path.resolve(__dirname, 'src', 'index.html'),
			filename: 'index.html'
		}),
    ],
}