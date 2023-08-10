const mongoose = require('mongoose');
const userSchema = require('../../schemas/User');

module.exports = new mongoose.model('User', userSchema, 'authorized_telegram_users');