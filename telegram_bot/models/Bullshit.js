const mongoose = require('mongoose');
const bullshitSchema = require('../schemas/Bullshit');

module.exports = new mongoose.model('Bullshit', bullshitSchema, 'bullshit');