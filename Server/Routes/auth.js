const express = require('express');
const router = express.Router();

const authController = require('../Controllers/auth');

/* GET: /auth/register => display register form*/
router.get('/register', (req, res, next) => {
    authController.displayRegisterForm(req, res, next);
});

/* GET: /auth/login => display login form */
router.get('/login', (req, res, next) => {
    authController.displayLoginForm(req, res, next);
});

module.exports = router;