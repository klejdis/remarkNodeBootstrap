var passport = require('passport');
var config = require('config');

exports  = module.exports;

exports.boot = function (runningApp) {

  // Nothing ever comes from "x-powered-by", but a security hole
  runningApp.disable("x-powered-by");


  // Choose your favorite view engine(s)
  runningApp.set('view engine', 'handlebars');
  runningApp.engine('handlebars', require('hbs').__express);


  //REGISTER PASSPORT MIDDLEWARE
  require('auth/passportConfig.js');

  runningApp.use(require('express-session')({secret: config.get('app.cookie_secret') , resave : false , saveUninitialized: false}));

  runningApp.use(passport.initialize());

  runningApp.use(passport.session());






}