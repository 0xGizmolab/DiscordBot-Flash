const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersDB = new Schema({
    id: {
        type: String,
    },
    registeredAt: {
        type: Number,
        default: Date.now(),
    },
    blacklisted: {
        type: Boolean,
        default: false,
    },
    blacklisted_reason: {
        type: String,
        default: 'null',
    },
    premium: {
        type: Boolean,
        default: false,
    },
    tier: {
        type: Number,
        defualt: 0,
    },
    premiumservers: {
        type: Array,
        default: [],
    },
    developer: {
        type: Boolean,
        default: false,
    },
    moderator: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('usersDB', usersDB);
