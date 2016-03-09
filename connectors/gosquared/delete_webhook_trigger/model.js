

module.exports = {

	method: 'delete',

	url: '/account/v1/webhooks/{{webhook_id}}/triggers/{{trigger_id}}',

	data: {
		name: '{{name}}',
		url: '{{url}}',
		trigger: 'entered_smart_group',
		value: '{{value}}'
	}

};
