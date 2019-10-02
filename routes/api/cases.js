const express = require('express');


// Init router object
const router = express.Router();

// Import Case model. Needed for GET, POST, DELETE requests etc. 
const Case = require('../../models/case');

/*

REST-api for cases with GET, POST and DELETE requests

*/


// GET /api/cases
// gets all cases
router.get('/', (req, res) => {

	Case.find().sort({ date: -1 }).then(cases => res.json(cases));
});

// POST /api/cases
// adds a new case
router.post('/', (req, res) => {

	const newCase = new Case({
		name: req.body.name
	});

	newCase.save().then(item => res.json(item));
});

// DELETE /api/cases/:id
// deletes a case
router.delete ('/:id', (req, res) => {

	Case.findById(req.params.id)
	.then(entry => entry.remove().then(() => res.json({Success: `Item with id: ${req.params.id} deleted`})))
	.catch(err => res.status(404).json({Error: `${err}`}));
});

module.exports = router; 

