

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Schema for a new "case".
A case in the database should include:

- Category
- City sector
- Diagnosis (?) Trenger vi diagnose når vi har kategori?
- Priority
- Status
- What week it was assigned
- Assignee
- Gerica number (?) Skal ergoterapeutene skrive dette inn?


*/

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
