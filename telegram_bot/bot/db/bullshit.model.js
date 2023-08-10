const mongoose = require('mongoose');
const bullshitSchema = require('./bullshit.schema');

module.exports = new mongoose.model('Bullshit', bullshitSchema, 'bullshits');