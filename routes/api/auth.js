const express = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');


// Init router object
const router = express.Router();

// Import User model. Needed for GET, POST, DELETE requests. 
const User = require('../../models/user');

/*

REST-api for users with GET, POST and DELETE requests

*/


// POST /api/auth
// Register new user
router.post('/', (req, res) => {

    const {email, password} = req.body;

    if(!email || !password) {
        return res.status(400).json({msg: 'Please enter all fields'});

    }

    User.findOne({email: email}).then(user => {
        if(!user) return res.status(400).json({msg: 'User does not exist'});


        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(!isMatch) return res.status(400).json({msg: "Invalid credentials"});
            jwt.sign({id: user.id}, 
                config.get('jwtSecret'),
                {expiresIn: 3600},
                (err, token) => {
                    if (err) throw err; 
                    res.json({
                        token: token,
                        user: {

                            id: user.id,
                            name: user.name,
                            email: user.email 
                        }
                    });

                })
            
        })
        })

});



module.exports = router; 

