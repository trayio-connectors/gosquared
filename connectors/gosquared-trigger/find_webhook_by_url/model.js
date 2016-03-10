var util = require('util');


module.exports = function (params) {
	return when.promise(function (resolve, reject) {

		var webhook;

		console.log(falafel);

		falafel.gosquaredTrigger.listWebhooks(params)

		.then(function (result) {
			return _.find(result.list, function (hook) {
				return (hook.url === params.url);
			});
		})

		.then(function (result) {
			webhook = result;
			if (webhook) {
				return falafel.gosquaredTrigger.findWebhookTriggers(_.extend({
					webhook_id: webhook.id
				}, _.pick(params, ['api_key', 'site_token'])));
			}
		})

		.then(function (triggers) {
			if (triggers) {
				webhook.triggers = triggers.list;
			}
			return webhook;
		})

		.done(resolve, reject)

	});
};
