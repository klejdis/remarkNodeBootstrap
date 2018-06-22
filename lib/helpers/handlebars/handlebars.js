
/**
 * -------------------------------------------------------------
 * HANDLEBAR CUSTOM HELPERS
 * -------------------------------------------------------------
 */



var config = require('config');
var Handlebars = require('hbs');


Handlebars.registerHelper('asset', function(asset,secure){

	//CHECK IF IS VALID URL
	//CHECK THE IF IS SECURE


    return 'http://' + config.get('app.base_url')+'/'+asset;

});