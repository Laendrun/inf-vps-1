const BullshitModel = require('../../models/Bullshit');
const UserModel = require('../../models/User');
const { sendText, escape } = require('../helpers');

const handleReplyTo = (body) => {
	const username = body.message.from.username;

	if (!body.message.hasOwnProperty('reply_to_message') || !body.message.reply_to_message.hasOwnProperty('text'))
		sendText(body.message.chat.id, escape(`There's nothing to save...`));
	else {
		let text = body.message.reply_to_message.text;
		new BullshitModel({text: text, user: username, date: new Date()}).save();
		let msg = `\\>_${escape(text)}_\\< saved\\.`;
		sendText(body.message.chat.id, msg);
	}
}

const handleSameMsg = (body, tokens) => {
	let text = '';
	tokens.forEach((token) => {text += token + ' '; });
	text = text.trimEnd();
	new BullshitModel({text: text, user: username, date: new Date()}).save();
	let msg = `\\>_${escape(text)}_\\< saved\\.`;
	sendText(body.message.chat.id, msg);
}

const cmd_addphrase = (body, tokens) => {
	UserModel.countDocuments({username: body.message.from.username})
	.then((count) => {
		const username = body.message.from.username;

		if (!count){
			let msg = `You (${username}) don't have rights to use this command.`;
			sendText(body.message.chat.id, escape(msg));
			return ;
		}

		if (!tokens.length)
			handleReplyTo(body);
		else
			handleSameMsg(body, tokens);
	})
	.catch((error) => {
		console.error(error);
	});
}

module.exports = cmd_addphrase;