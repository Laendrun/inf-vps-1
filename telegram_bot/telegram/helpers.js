const axios = require('axios').default;

const sendText = (chatId, text) => {
	let req = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`
	req += `?chat_id=${chatId}&text=${text}`;

	axios.post(req, {})
	.then((response) => {})
	.catch((error) => { console.error(error)});
}

module.exports = {
	sendText
}