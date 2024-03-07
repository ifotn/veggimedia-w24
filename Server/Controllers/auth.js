// User model for Auth
let User = require('../Models/user');

let displayRegisterForm = (req, res, next) => {
    res.render('auth/register', { title: 'Register' });
};

let displayLoginForm = (req, res, next) => {
    res.render('auth/login', { title: 'Login' });
};

// make public
module.exports = {
    displayRegisterForm, displayLoginForm
};