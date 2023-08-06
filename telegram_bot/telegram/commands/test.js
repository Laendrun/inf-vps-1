const mongoose = require('mongoose');
const bullshitSchema = require('../../schemas/Bullshit');

const BullshitModel = new mongoose.model('Bullshit', bullshitSchema, 'bullshits');

const cmd_test = (body, tokens) => {
	let date = new Date();
	let bullshit = new BullshitModel({ text: 'Test Bullshit', user: 'Laendrun', date: date});
	bullshit.save();
}

module.exports = cmd_test;