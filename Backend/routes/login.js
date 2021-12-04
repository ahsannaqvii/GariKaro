const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const User = require("../models/user");

router.post("/login" , function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email:req.body.email} , function(err, foundUser){
        if (err){
            res.send(err);
        } else if (foundUser){
            if (foundUser.password === password){
                res.send("access granted");
            } else {
                res.send("access denied");
            }
        }
    });
});

module.exports = router;