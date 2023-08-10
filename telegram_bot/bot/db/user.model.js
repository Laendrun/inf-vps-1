const mongoose = require('mongoose');
const userSchema = require('./user.schema');

module.exports = new mongoose.model('User', userSchema, 'authorized_telegram_users');