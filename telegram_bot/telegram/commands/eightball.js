const BullshitModel = require('../../models/Bullshit');
const { sendText } = require('../helpers');

const cmd_eightball = (body, tokens) => {
	const filter = {};
	BullshitModel.find(filter)
	.then((items) => {
		let item = items[Math.floor(Math.random()*items.length)];
		let text = `${item.text}`;
		sendText(344838741, text);
	})
	.catch((error) => {
		console.error(error);
	});
}

module.exports = cmd_eightball;