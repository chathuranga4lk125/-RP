const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const {jwtKey} = require('../keys')
const router = express.Router();
const User = mongoose.model('User');

router.post('/signup', async (req, res) => {

    const { email, password } = req.body;
    try {
        const user = new User({ email, password });
        await user.save();
        res.send("Saved");
    }
    catch (err) {
        res.send("Error" + err);
    }
})


module.exports = router