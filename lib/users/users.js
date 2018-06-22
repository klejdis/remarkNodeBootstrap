var router = require('express').Router({ mergeParams: true });

module.exports = router;

router.callbacks    = require('./controllers/UsersController');



/**
 *----------------------------------------------------
 * MODULE  ROUTES
 *----------------------------------------------------
 */

router.get('/users', router.callbacks.index);

