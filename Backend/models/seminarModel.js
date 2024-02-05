const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const seminarSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    organization: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    }
},{
    timestamps: true,
});

module.exports = mongoose.model('Seminar', seminarSchema);
