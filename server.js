// @see: https://gist.github.com/branneman/8048520
require('app-module-path').addPath(__dirname + '/lib');
const Sequelize = require('sequelize');


var server = require('nodebootstrap-server')
  , appConfig = require('./appConfig')
  , app    = require('express')();


//CONFIGURE HTML APP GENERAL SETTINGS
app = require('nodebootstrap-htmlapp').setup(app);


server.setup(app, appConfig.setup);


const sequelize = new Sequelize({dialect:'mysql'});
