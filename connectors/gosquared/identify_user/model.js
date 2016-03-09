/*
* Message model config.
*
* Documentation: https://github.com/trayio/falafel#model
*/


module.exports = {

	method: 'post',

	url: '/tracking/v1/identify',

	data: {
		person_id: function (params) {
			if (_.isString(params.person_id) && params.person_id.indexOf('@') !== -1) {
				return 'email:'+params.person_id;
			} else {
				return params.person_id;
			}
		},
		// visitor_id: '{{visitor_id}}',
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
			company: {
				name: '{{company_name}}',
				size: '{{company_size}}',
				industry: '{{company_industry}}',
				position: '{{company_position}}'
			},
			custom: '{{custom_properties}}',
		}
	}

}
