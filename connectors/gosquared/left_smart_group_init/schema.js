
/*
* Message schema
*
* Documentation: https://github.com/trayio/falafel#schema
*/

module.exports = {

	title: 'When user leaves smart group',

	description: 'Triggers when a user in GoSquared leaves a smart group.',

	// Input schema config
	input: {

		url: {
			type: 'string',
			required: true,
			advanced: true
		},

		value: {
			type: 'string',
      title: 'Smart Group ID',
      description: 'You can find this in your GoSquared dashboard - it\'s the final part of the URL when you\'ve got a smart group open.',
      required: true
		},

		name: {
			type: 'string'
		},



	}

};
