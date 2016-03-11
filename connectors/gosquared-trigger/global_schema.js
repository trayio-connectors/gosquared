

module.exports = {

	input: {

		api_key: {
			type: 'string',
			advanced: true,
			required: true,
			defaultJsonPath: '$.auth.api_key'
		},

		site_token: {
			type: 'string',
			advanced: true,
			required: true,
			defaultJsonPath: '$.auth.site_token'
		}

	}



};
