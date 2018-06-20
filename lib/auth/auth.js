var router = require('express').Router({ mergeParams: true });
var passport = require('passport');

module.exports = router;

router.callbacks    = require('./controllers/login');


router.get('/login', router.callbacks.login);

router.post('/login', passport.authenticate("local" , { successRedirect: '/', failureRedirect: '/login' }));



