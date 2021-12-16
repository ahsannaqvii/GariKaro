const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models/UsersDB');

const router = express.Router();

router.post("/login" , function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    console.log(email + " " + password);
    var sql = "SELECT Email_ID , Roll_Number, First_Name FROM USERSDB WHERE Email_ID = '" + email + "' AND Password = '" + password + "'";
    db.query(sql , function(err,result){
        if (err){
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            if (result.email == email){
                console.log("User authenticated");
            }
            res.send(result);
        }
    });
});

module.exports = router;