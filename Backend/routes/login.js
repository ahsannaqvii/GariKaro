const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models/UsersDB');

const router = express.Router();

router.post("/login" , function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    console.log(email + " " + password);
    var sql = "SELECT email , first_name  FROM USERSDB WHERE email = '" + email + "' AND password = '" + password + "'";
    db.query(sql , function(err,result){
        if (err){
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.send(result);
            console.log("User authenticated");
        }
    });
});

module.exports = router;