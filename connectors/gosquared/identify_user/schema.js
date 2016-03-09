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

		// visitor_id: {
		// 	type: 'string'
		// },

		person_id: {
			type: 'string',
			required: true,
			description: 'A unique ID for the person being tracked. This can be an ID for the user in your database, or another unique key such as an email address.'
		},

		id: {
			type: 'string',
			description: 'Database ID for the user.'
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
			type: 'string',
			description: 'A valid ISO 8601 timestamp of when this user was created.'
		},

		company: {
			type: 'object',
			properties: {
				company_name: {
					type: 'string',
					title: 'Name'
				},
				company_size: {
					type: 'number',
					title: 'Size'
				},
				company_industry: {
					type: 'string',
					title: 'Industry'
				},
				company_position: {
					type: 'string',
					title: 'Position'
				},
			}
		},

		custom: {
			type: 'object',
			additionalProperties: true,
			description: 'Any custom properties associated with this person.'
		}

	}

};