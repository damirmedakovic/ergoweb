const express = require('express');
const router = express.Router();



const Case = require('../../models/case');


router.get('/', (req, res) => {

	Case.find().sort({ date: -1 }).then(cases => res.json(cases));
});


module.exports = router; 

