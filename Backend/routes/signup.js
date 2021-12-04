const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const User = require("../models/user");

router.post("/signup" , function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: req.body.email} , function(err , foundUser){
        if (foundUser){
            console.log("Email ID Already Registered.");
            res.send("Already Exists");
        } else if (err){
            res.send(error);
        } else {
            const newUser = new User ({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                phoneNumber: req.body.phoneNumber
            });
            newUser.save();
            res.send(email);
        }
    });
});

module.exports = router;