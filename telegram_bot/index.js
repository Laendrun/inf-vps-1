const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const telegram = require('./telegram/');

app.use(cors());

app.use(express.json());

app.use(logger('common'));

app.use('/', telegram);

const port = process.env.PORT || 4000;

console.log(process.env.DB_URL)

mongoose.connect(process.env.DB_URL)
.then(() => {
	app.listen(port, () => {
		console.log('Listening on port: ' + port);
	});
})
.catch((err) => {
	console.error('Error connecting to the database.', err);
})