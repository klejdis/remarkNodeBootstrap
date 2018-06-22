exports  = module.exports;

/**
 * METHOD BOOT IS CALLED BY APP CONFIG TO REGISTER FRONT END MODULES
 * @param  runningApp express running app instance
 * @return void
 */
exports.boot = function (runningApp) {

	//@note the .user first param server as route prefix

	runningApp.use('/hello', require('hello'));

	runningApp.use('/', require('hello'));

	runningApp.use('/', require('auth'));


}