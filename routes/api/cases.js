const express = require('express');
const router = express.Router();



const Case = require('../../models/case');

//Get all cases
router.get('/', (req, res) => {

	Case.find().sort({ date: -1 }).then(cases => res.json(cases));
});

//Post a case
router.post('/', (req, res) => {

	const newCase = new Case({
		name: req.body.name
	});

	newCase.save().then(item => res.json(item));
});

//Delete a case
router.delete ('/:id', (req, res) => {

	Case.findById(req.params.id)
	.then(entry => entry.remove().then(() => res.json({success: true})))
	.catch(err => res.status(404).json({failure: `${err}`}));
});

module.exports = router; 

