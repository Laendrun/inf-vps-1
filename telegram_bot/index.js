const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();

const telegram = require('./telegram/');

app.use(cors());

console.log(process.env.NODE_ENV)

app.use(logger('common'));

app.use('/telegram/', telegram);

const port = process.env.PORT || 4000;
app.listen(port, () => {
	console.log('Listening on port: ' + port);
});