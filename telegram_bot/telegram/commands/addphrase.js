const BullshitModel = require('../../models/Bullshit');
const UserModel = require('../../models/User');
const { sendText, escape } = require('../helpers');

const cmd_addphrase = (body, tokens) => {
	UserModel.countDocuments({username: body.message.from.username})
	.then((count) => {

		let text = '';
		const username = body.message.from.username;
		const date = new Date();

		if (!count){
			let msg = `You (${username}) don't have rights to use this command.`;
			sendText(body.message.chat.id, escape(msg));
			return ;
		}
		else if (!tokens.length) {
			let msg = `There's nothing to save...`;
			console.log('request-body:');
			console.log(body);
			sendText(body.message.chat.id, escape(msg));
			return ;
		}
		tokens.forEach((token) => {text += token + ' '; });
		text = text.trimEnd();
		new BullshitModel({text: text, user: username, date: date}).save();
		let msg = `\\>_${escape(text)}_\\< saved\\.`;
		sendText(body.message.chat.id, msg);
	})
	.catch((error) => {
		console.error(error);
	});
}

module.exports = cmd_addphrase;