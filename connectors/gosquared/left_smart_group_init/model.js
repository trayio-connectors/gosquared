
module.exports = {

	method: 'post',

	url: '/account/v1/webhooks',

	data: {
		name: '{{name}}',
		url: '{{url}}',
		trigger: 'exited_smart_group',
		value: '{{value}}'
	}

};
