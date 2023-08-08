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

module.exports = {
	sendText
}