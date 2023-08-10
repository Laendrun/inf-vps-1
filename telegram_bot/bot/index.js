const router = require('express').Router();

const { sendText } = require('./helpers.js');

const handleCommand = (body, command, tokens) => {
	command = command.substring(1);

	const commands = {
		eightball: require('./commands/eightball.js'),
		addphrase: require('./commands/addphrase.js')
	}

	if (command == 'start')
		sendText(body.message.chat.id, "Welcome bitches !");
	else if (commands.hasOwnProperty(command))
		commands[command](body, tokens);
	else
		sendText(process.env.BOT_ADMIN_CHATID, `Unknown command: ${command}`);
}

const handleMessage = (body, message) => {
	if (!message.hasOwnProperty('text'))
		return ;
	if (message.text.charAt(0) == '/')
	{
		const text = message.text;
		let tokens = text.split(' ');
		let command = tokens.shift();
		if (command.includes('@'))
			command = command.split('@')[0];
		handleCommand(body, command, tokens);
	}
}

router.post('/', (req, res, next) => {
	if (req.body.hasOwnProperty('message'))
		handleMessage(req.body, req.body.message);
	res.status(200);
	res.send();
});

module.exports = router;