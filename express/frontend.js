exports  = module.exports;

exports.boot = function (runningApp) {


	runningApp.use('/hello', require('hello')); // attach to sub-route

	runningApp.use('/', require('hello')); // attach to root route

	runningApp.use('/', require('auth')); // attach to sub-route


}