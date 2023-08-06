const router = require('express').Router();

const { sendText } = require('./helpers.js');

const cmd_test = require('./commands/test');

const handleCommand = (body, command, tokens) => {
	command = command.substring(1);
	console.log(command);

	const commands = {
		test: cmd_test
	}

	if (command == 'start')
		sendText(body.message.chat.id, "Welcome bitches !");

	if (commands.hasOwnProperty(command))
		commands[command](body, tokens);
	else
		sendText(body.message.chat.id, `Unknown command: ${command}`);
}

const handleMessage = (body, message) => {
	if (!message.hasOwnProperty('text'))
		return ;
	const text = message.text;
	let tokens = text.split(' ');
	let command = tokens.shift();

	if (command.includes('@'))
		command = command.split('@')[0];

	if (command.charAt(0) === '/')
		handleCommand(body, command, tokens);
}

router.post('/', (req, res, next) => {
	res.status(200);

	if (req.body.hasOwnProperty('message'))
		handleMessage(req.body, req.body.message);
	res.send();
});

module.exports = router;