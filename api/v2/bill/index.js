const router = require('express').Router();
const fs = require('fs');
const { PDF } = require('swissqrbill/pdf');

router.get('/', (req, res, next) => {
	res.json({
		message: 'success',
		path: req.originalUrl
	});
});

router.post('/generate', (req, res, next) => {

	let pdf_path = __dirname + "/tmp/";
	pdf_path += req.body.filename || "default";
	pdf_name = req.body.filename || "default";
	pdf_name += ".pdf"

	let data = {
		currency: req.body.data.currency,
		amount: req.body.data.amount,
		creditor: {
			name: req.body.data.creditor.name,
			address: req.body.data.creditor.address,
			zip: req.body.data.creditor.zip,
			city: req.body.data.creditor.city,
			account: req.body.data.creditor.account,
			country: req.body.data.creditor.country
		}
	};

	if (req.body.data.reference)
		data.reference = req.body.data.reference;
	if (req.body.data.additionalInformation)
		data.additionalInformation = req.body.data.additionalInformation;
	if (req.body.data.av1)
		data.av1 = req.body.data.av1;
	if (req.body.data.av2)
		data.av2 = req.body.data.av2;
	if (req.body.data.creditor.buildingNumber)
		data.creditor.buildingNumber = req.body.data.creditor.buildingNumber;
	if (req.body.data.debtor)
		data.debtor = req.body.data.debtor;
	if (req.body.data.debtor.buildingNumber)
		data.debtor.buildingNumber = req.body.data.debtor.buildingNumber;

	const options = {
		language: req.body.options.language, // FR, DE, IT, EN
		size: req.body.options.size, // A4, A6/5
		scissors: req.body.options.scissors,
		outlines: req.body.options.outlines,
		separate: req.body.options.separate,
	}

	pdf_path += ".pdf";
	try {
		const pdf = new PDF(data, pdf_path, options);
		pdf.on("finish", () => {
			pdf.end();
			res.download(pdf_path, pdf_name, (err) => {
				if (err)
					console.error(err);
				try {
					fs.unlinkSync(pdf_path);
				} catch (err) {
					console.error(err)
				}
			});
		})
	} catch (err) {
		res.status(400);
		next(err);
	}
})

module.exports = router;