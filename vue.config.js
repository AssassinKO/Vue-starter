/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
	lintOnSave: false,
	configureWebpack: {
		resolve: {
			alias: {
				'~': path.join(__dirname, '/src'),
			},
		},
	},
}
