const router = require('express').Router();

router.post('/', (req, res, next) => {
	res.status(200);
	res.send();
});

module.exports = router;