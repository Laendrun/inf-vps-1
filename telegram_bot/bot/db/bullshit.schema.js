const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
	text: {
		type: String,
		required: true
	},
	user: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		required: true,
		index: true
	},
})