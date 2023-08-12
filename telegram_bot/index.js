const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const middleware = require('./middleware');

const app = express();

const bot = require('./bot');

console.log(process.env.NODE_ENV);

app.use(cors());
app.use(express.json());
app.use(logger('common'));
app.use('/', bot);

app.use(middleware.notFound);
app.use(middleware.errorHandler);

const port = process.env.PORT || 4000;

mongoose.connect(process.env.DB_URL)
.then(() => {
	app.listen(port, () => {
		console.log('Listening on port: ' + port);
	});
})
.catch((err) => {
	console.error('Error connecting to the database.', err);
})