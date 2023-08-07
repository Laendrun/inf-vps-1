const axios = require('axios').default;

const sendText = (chatId, text) => {
	// let req = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`
	// req += `?chat_id=${chatId}&text=${text}&parse_mode=MarkdownV2`;

	console.log("Text in sendText: ");
	console.log(text);

	axios({
		method: 'post',
		url: `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
		data: {
		  chat_id: chatId,
		  text: text,
		  parse_mode: 'MarkdownV2'
		}
	  });

	// axios.post(req, {})
	// .then((response) => {})
	// .catch((error) => { console.error(error)});
}

module.exports = {
	sendText
}