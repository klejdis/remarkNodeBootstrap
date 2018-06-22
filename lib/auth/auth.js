
var router = require('express').Router({ mergeParams: true });

var passport = require('passport');

module.exports = router;

router.callbacks    = require('./controllers/login');



/**
 *----------------------------------------------------
 * MODULE  ROUTES
 *----------------------------------------------------
 */

router.get('/login', router.callbacks.login);

router.post('/login', passport.authenticate("local" , { successRedirect: '/', failureRedirect: '/login' }));

router.get('/logout', router.callbacks.logout);
