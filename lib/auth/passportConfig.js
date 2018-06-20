var passport =  require('passport');
var LocalStrategy = require('passport-local').Strategy;
var _ = require("lodash");

var testUsers = require('auth/test/users.json');


passport.use('local' , new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  },function (req , username , password , done){

	var u = _.find(testUsers , u => u.username === username);


	if (!u || u.password !== password) {
		return done(null,false);
	}

	return done(null , u);
}));


passport.serializeUser(function(user, done){
	console.log(user);
	console.log("serializeUser");
	done(null, user);
});


passport.deserializeUser(function(user, done){
	console.log(user);
	console.log("deserializeUser");
	done(null, user);

});


