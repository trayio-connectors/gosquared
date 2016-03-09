/*
* Message model config.
*
* Documentation: https://github.com/trayio/falafel#model
*/


module.exports = {

	method: 'post',

	url: '/tracking/v1/event',

	data: {
		person_id: function (params) {
			if (_.isString(params.person_id) && params.person_id.indexOf('@') !== -1) {
				return 'email:'+params.person_id;
			} else {
				return params.person_id;
			}
		},
		
		timestamp: '{{timestamp}}',

		event: {
			name: '{{event_name}}',
			data: '{{event_data}}'
		}

	}


}



