require('app-module-path').addPath(__dirname + '/lib');
require('app-module-path').addPath(__dirname + '/express')

var passport = require('passport');
var config = require('config');
var frontend = require('./express/frontend');
var backend = require('./express/backend');
var middleware = require('./express/middlewares');


exports.setup = function(runningApp, callback) {

  /**
   *-------------------------------------------------------------------------
   * REGISTER EXPRESS MIDDLEWARES AND APP CONFIG VARIABLES
   *-------------------------------------------------------------------------
   */

    middleware.boot(runningApp);


  /**
   *-------------------------------------------------------------------------
   * FRONT END  MODULES
   *-------------------------------------------------------------------------
   */

    frontend.boot(runningApp);

  /**
   *-------------------------------------------------------------------------
   * BACKEND END  MODULES
   *-------------------------------------------------------------------------
   */
    backend.boot(runningApp);

   /**
   *-------------------------------------------------------------------------
   * API  MODULES
   *-------------------------------------------------------------------------
   */

  // API endpoint attached to root route:
  runningApp.use('/api', require('homedoc')); // attach to sub-route



  // If you need websockets:
  // var socketio = require('socket.io')(runningApp.http);
  // require('fauxchatapp')(socketio);

  if(typeof callback === 'function') {
    callback(runningApp);
  }

};
