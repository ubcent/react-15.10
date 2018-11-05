const path = require('path');
const ExtractTextWP = require('extract-text-webpack-plugin');
const HtmlWP = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: path.resolve(__dirname, 'src/js', 'index.jsx'),
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx']
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
	plugins: [
		new ExtractTextWP({ filename: 'style.css' }),
		new HtmlWP({
			template: path.resolve(__dirname, 'src', 'index.html'),
			filename: 'index.html'
		}),
    ],
}