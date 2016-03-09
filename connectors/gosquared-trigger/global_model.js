/*
* Global connector config.
*
* Documentation: https://github.com/trayio/falafel#globals
*/


module.exports = {

	url: 'https://api.gosquared.com',

	query: {
		api_key: '{{api_key}}',
		site_token: '{{site_token}}'
	},

	expects: [200, 201],

	options: {
		json: true
	}

};
