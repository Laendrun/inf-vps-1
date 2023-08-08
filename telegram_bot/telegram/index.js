const router = require('express').Router();

const { sendText } = require('./helpers.js');

const cmd_test = require('./commands/test.js');
const cmd_eightball = require('./commands/eightball.js');

const handleCommand = (body, command, tokens) => {
	command = command.substring(1);
	console.log(command);

	const commands = {
		test: cmd_test,
		eightball: cmd_eightball
	}

	if (command == 'start')
		sendText(body.message.chat.id, "Welcome bitches !");

	if (commands.hasOwnProperty(command))
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
	res.status(200);

	if (req.body.hasOwnProperty('message'))
		handleMessage(req.body, req.body.message);
	res.send();
});

module.exports = router;