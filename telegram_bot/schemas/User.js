const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
	username: {
		type: String,
		required: true
	}
})