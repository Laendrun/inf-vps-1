const router = require('express').Router();

const bill = require('./bill/');

router.get('/', (req, res, next) => {
	res.json({
		message: 'success',
		path: req.originalUrl
	});
});

router.use('/bill/', bill);

module.exports = router;