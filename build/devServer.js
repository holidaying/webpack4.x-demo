var path = require('path')
module.exports = {
	devServer: {
		contentBase: path.join(__dirname, '../static'),
		compress: true,
		port: 9003
	}
}
