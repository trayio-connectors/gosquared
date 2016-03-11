/*
* Message schema
*
* Documentation: https://github.com/trayio/falafel#schema
*/

module.exports = {

	title: 'Track event',

	description: 'Track a event via tray.',

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

		timestamp: {
			type: 'string'
		},

		event_name: {
			type: 'string',
			required: true
		},

		event_data: {
			type: 'object',
			title: 'Event properties',
			additionalProperties: true
		}

	}

};
