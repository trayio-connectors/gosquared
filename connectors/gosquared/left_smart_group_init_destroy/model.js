var util = require('util');


module.exports = function (params) {
	return when.promise(function (resolve, reject) {

		falafel.gosquared.findWebhookByUrl(params)

		// Delete the trigger, and if it's the only trigger, the webhook
		.then(function (webhook) {
			var trigger = _.find(webhook.triggers, function (webhookTrigger) {
				return (webhookTrigger.trigger === 'exited_smart_group');
			});
			if (trigger) {
				return falafel.gosquared.deleteWebhookTrigger(_.extend({
					webhook_id: webhook.id,
					trigger_id: trigger.id
				}, _.pick(params, ['api_key', 'site_token'])));
			}
		})

		.done(resolve, reject);

	});
};
