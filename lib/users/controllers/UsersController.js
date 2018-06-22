var router = require('express').Router({ mergeParams: true });
var UserController = module.exports;
var app = require('express')();

UserController.index = function (req , res) {


  var context = {
	    siteTitle: "Users",
	    layout: false,
	    moduleName : 'Users',
	    cardTitle : 'Users',
  };


  var template = __dirname + '/../views/index';
  res.render(template, context);
}