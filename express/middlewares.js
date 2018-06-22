var passport = require('passport');
var config = require('config');
var hbs = require('hbs');

exports  = module.exports;

/**
 * BOOT IS CALLED TO CONFIGURE  RUNNING EXPRESS INSTANCE OLSO TO REIGSTER / CONFIGURE THE MIDDLEWARES
 * @param  runningApp
 * @return void
 */
exports.boot = function (runningApp) {

  // Nothing ever comes from "x-powered-by", but a security hole
  runningApp.disable("x-powered-by");

  //View engine is handlebars by default
  runningApp.set('view engine', 'handlebars');

  runningApp.engine('handlebars', require('hbs').__express);

  hbs.registerPartials(process.env.NBS_CURR_PROJECT_PATH + '/views/partials');

  var helpers = require('handlebars-helpers')({
  handlebars: hbs
  });

  var layouts = require('handlebars-layouts');

  hbs.registerHelper(layouts(require('handlebars')));

  require('helpers/handlebars/handlebars');

  //Express session is used by passport sessions
  runningApp.use(require('express-session')({secret: config.get('app.cookie_secret') , resave : false , saveUninitialized: false}));

  //REGISTER PASSPORT MIDDLEWARE
  require('auth/passportConfig.js');

  runningApp.use(passport.initialize());

  runningApp.use(passport.session());






}