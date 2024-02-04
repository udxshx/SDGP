const mongoose = require('mongoose');
const userModel = mongoose.Schema({
    __typename: 'user',
    __id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    role: {
        type: String,
        required: false,
        default: 'basic'
    },
    password: {
        type: String,
        minlength: 10,
        required: true
    }
});
const User = Mongoose.model("user", userModel)
module.exports = User;