const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cases = require('./routes/api/cases');

// Initialize application
const app = express();

// bodyParser is Express middleware to give access to POST request data
app.use(bodyParser.json());

// Local mongoDB URI and connection
const db = require('./config/keys').mongoURI;
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log(`Connected to MongoDB at: ${db}`)).catch(err => console.log(`Error: ${err}`));

// Routes definition
app.use('/api/cases', cases);

// Use process.env.PORT if deployed on server, otherwise 5000 in development
const port = process.env.PORT || 5000;

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
