const express = require('express');
const monk = require('monk');
const db = monk(process.env.DB_URL)

const app = express();

app.use(express.json())

const v2 = require('./v2/index.js');

app.get("/", (req, res, next) => {
	// const users = db.get('users');
	// users.insert({woot:'foo'}, {woot:'bar'});

	res.json({
		"message": "success"
	});
});

app.use("/v2/", v2);

const notFound = (req, res, next) => {
	res.status(404);
	const error = new Error('Not found - ' + req.originalUrl);
	next(error);
}

const errorHandler = (err, req, res, next) => {
	if (res.headerSent)
		return next(err);
	console.error(err)
	res.json({
		message: err.message,
		path: req.originalUrl
	})
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 4002
const host = '0.0.0.0'
app.listen(port, host, () => {
	console.log("Listening on port: " + port);
});