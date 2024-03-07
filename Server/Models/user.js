const mongoose = require('mongoose');

// define schema for Media object
let userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        minLength: 8
    }
});

let User = mongoose.model('User', userSchema);
module.exports = User;