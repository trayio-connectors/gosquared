/*
* High level basic configuration for the connector.
*
* Documentation: https://github.com/trayio/falafel#connector-file
*/

module.exports = {

	// The name of the connector is the folder name

	// The title 
  title: 'GoSquared',

 	// The connector description
  description: 'Interact with the GoSquared tracking APIs.',

  // Version of the connector. Updating this will allow users to choose
  // which connector version they use in advanced settings of the tray UI.
  version: '1.0',

  // Tags attached to the connector
  tags: ['service', 'analytics'],

  // Icon of the connector.
  icon: {
  	type: 'url',
  	value: 'http://images.tray.io.s3.amazonaws.com/static/icons/placeholder.png'
  }

};