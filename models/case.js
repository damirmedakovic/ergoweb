

const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const CaseSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}

});

module.exports = Case = mongoose.model('case', CaseSchema);
