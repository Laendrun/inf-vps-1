const BullshitModel = require('../../models/Bullshit');
const { sendText } = require('../helpers');

const cmd_eightball = (body, tokens) => {
	BullshitModel.find({})
	.then((items) => {
		let item = items[Math.floor(Math.random()*items.length)];
		let text = `${item.text}`;
		sendText(body.message.chat.id, text);
	})
	.catch((error) => {
		console.error(error);
	});
}

module.exports = cmd_eightball;