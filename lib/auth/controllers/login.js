var passport = require('passport');
var AuthController = module.exports;

AuthController.login = function(req, res) {

  var context = {
    siteTitle: "Node.js Bootstrap Demo Page",
    layout: 'login',
  };

  var template = __dirname + '/../views/login';
  res.render(template, context);

};


AuthController.logout = function (req,res) {
	req.logout();
    res.redirect('/login');
}