
exports  = module.exports;

/**
 * METHOD BOOT IS CALLED BY APP CONFIG TO REGISTER BACKEND MODULES
 * @param  runningApp express running app instance
 * @return void
 */
exports.boot = function (runningApp) {

	//@note the .user first param server as route prefix

	runningApp.use('/', require('users'));


}