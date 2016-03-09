/*
* Message model config.
*
* Documentation: https://github.com/trayio/falafel#model
*/


module.exports = {

	method: 'post',

	url: '/tracking/v1/identify',

	data: {
		person_id: '{{id}}',
		visitor_id: '{{visitor_id}}',
		properties: {
			id: '{{id}}',
			email: '{{email}}',
			name: '{{name}}',
			first_name: '{{first_name}}',
			last_name: '{{last_name}}',
			username: '{{username}}',
			avatar: '{{avatar}}',
			phone: '{{phone}}',
			created_at: '{{created_at}}',
			company: '{{company}}',
			name: '{{name}}',
			size: '{{size}}',
			industry: '{{industry}}',
			position: '{{position}}',
			custom: '{{custom_properties}}',
		}
	},



}



