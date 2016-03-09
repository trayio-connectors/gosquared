/*
* Message schema
*
* Documentation: https://github.com/trayio/falafel#schema
*/

module.exports = {

	title: 'Identify user',

	description: 'Track a user via tray into People Analytics.',

	// Input schema config
	input: {

		visitor_id: {
			type: 'string'
		},

		id: {
			type: 'string'
		},

		email: {
			type: 'string'
		},

		name: {
			type: 'string'
		},

		first_name: {
			type: 'string'
		},

		last_name: {
			type: 'string'
		},

		username: {
			type: 'string'
		},

		avatar: {
			type: 'string'
		},

		phone: {
			type: 'string'
		},

		created_at: {
			type: 'string'
		},

		company: {
			type: 'string'
		},

		name: {
			type: 'string'
		},

		size: {
			type: 'string'
		},

		industry: {
			type: 'string'
		},

		position: {
			type: 'string'
		},

		custom: {
			type: 'object',
			additionalProperties: true
		}

	}

};