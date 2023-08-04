const express = require('express');
const monk = require('monk');
const db = monk(process.env.DB_URL)

const app = express();

app.get("/", (req, res, next) => {
	const users = db.get('users');
	users.insert({woot:'foo'}, {woot:'bar'});

	res.json({
		"message": "success"
	});
});

const notFound = (req, res, next) => {
	res.status(404);
	const error = new Error('Not found - ' + req.originalUrl);
	next(error);
}

app.use(notFound);

const port = process.env.PORT || 4002
const host = '0.0.0.0'
app.listen(port, host, () => {
	console.log("Listening on port: " + port);
});