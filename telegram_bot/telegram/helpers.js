const axios = require('axios').default;

const sendText = (chatId, text) => {
	axios({
		method: 'post',
		url: `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
		data: {
		  chat_id: chatId,
		  text: text,
		  parse_mode: 'MarkdownV2'
		}
	  });
}

const escape = (text) => {
	const chars = "_*[]()~`>#+-=|{}.!";
	for (let i = 0; i < chars.length; i++)
		text = text.replaceAll(chars[i], `\\${chars[i]}`);
	return (text);
}

module.exports = {
	sendText,
	escape,
}