
module.exports = {

	method: 'post',

	url: '/account/v1/webhooks',

	expects: 200,

	data: {
		name: '{{name}}',
		url: '{{url}}',
		trigger: 'exited_smart_group',
		value: '{{value}}'
	}

};
