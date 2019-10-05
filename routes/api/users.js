const express = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth')

// Init router object
const router = express.Router();

// Import User model. Needed for GET, POST, DELETE requests. 
const User = require('../../models/user');

/*

REST-api for users with GET, POST and DELETE requests

*/


// POST /api/users
// Register new user
router.post('/', (req, res) => {

    const {name, email, password} = req.body;

    if(!name || !email || !password) {
        return res.status(400).json({msg: 'Please enter all fields'});

    }

    User.findOne({email: email}).then(user => {
        if(user) return res.status(400).json({msg: 'User already exists'});

        const newUser = new User({
            name: name,
            email: email, 
            password: password 
        });

        console.log(newUser.name, newUser.email, newUser.password)

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err) throw err;
                console.log("AAAY!!", hash)
                newUser.password = hash;
                newUser.save().then(user => {
                    
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

                    });
                })
            })
        })

});

// GET /api/auth/user
// gets user data
router.get('/user', auth, (res, req) => {
    User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));

});

module.exports = router; 

