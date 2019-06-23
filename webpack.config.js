const path = require('path')

module.exports = {
	entry: {
		app: './src/App.js'
	},
	output: {
		path: __dirname + '/dist',
    filename: '[name].js'
	},
}