const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require("../middleware/fetchUser");

const JWT_SECRET = "SayLalisaloveMe";

//ROUTE 1----->: create a user using: POST  "/api/auth/createuser" : no login require auth

router.post('/createuser', [
    body('name', 'Enter a Name Minimum length of 3').isLength({ min: 3 }),
    body('email', 'Enter a valid Email').isEmail(),
    // password must be at least 5 chars long
    body('password', 'Password must be of 8 characters').isLength({ min: 8 }),
], async (req, res) => {

    // if there is an error return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // check weather the user with this email exisit already
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exist" })
        }

        const salt = await bcrypt.genSalt(10);
        SecPass = await bcrypt.hash(req.body.password, salt);
        // create a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: SecPass,
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Some error occured" })
    }
})

//----------------------------------------------------------------------------------
//ROUTE 2 -------->: Authentication of  user: POST  "/api/auth/login" : no login require auth
router.post('/login', [
    body('email', 'Enter a valid Email').isEmail(),
    // password must be at least 5 chars long
    body('password', 'Password  can not be blank').exists(),
], async (req, res) => {

    // if there is an error return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Please try to login with corrrect credentials" })
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please try to login with corrrect credentials" })
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server error occured" })
    }
})

//----------------------------------------------------------------------------------
//ROUTE 3 -------->: Get loggedin user details using: POST  "/api/auth/getuser" : login require auth
router.post('/getuser', fetchuser,async (req, res) => {

    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server error occured" })
    }
})
module.exports = router;