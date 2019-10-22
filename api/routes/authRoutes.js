var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');

var auth = jwt({
    secret: process.env.API_CLIENT_SECRET,
    userProperty: 'payload'
});

var ctrlProfile = require('../controller/profile');
var ctrlAuth = require('../controller/authentication');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;