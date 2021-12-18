const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models/UsersDB');

const router = express.Router();

router.post("/signup" , function(req,res){
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const phonenumber = req.body.phoneNumber;
    const Rollno = req.body.Rollno;
    var sql = "INSERT INTO USERSDB VALUES ('" + email + "','" + Rollno+ "','" + firstname + "','" + lastname + "','" + password + "'," + phonenumber + ")";
    db.query(sql , function(err,result){
        if (err){
            console.log(err);
            return res.status(200).json({signupStatus: "false" });
        }
        else {
            console.log(result);
            return res.status(200).json({signupStatus: "true" });
        }
        
    });
});

module.exports = router;