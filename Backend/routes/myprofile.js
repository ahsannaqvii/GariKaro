const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models/UsersDB');

const router = express.Router();

router.get("/profile" , function(req,res){
    const recievedInfo = req.query;
    const userRollNo = recievedInfo.rollNo;
    
    var sql = "SELECT * FROM USERSDB WHERE Roll_Number = '" + userRollNo + "';";
    db.query(sql , function(err , result){
        if (err){
            throw(err);
        } else {
           return res.status(200).send(result);
        }
    });
}); 

router.post("/profile" , function(req,res){
    const recievedInfo = req.body;
    // console.log(recievedInfo);

    const rollNo = recievedInfo.rollNo;
    const password = recievedInfo.password;
    const fname = recievedInfo.fname;
    const lname = recievedInfo.lname;
    const contactNumber = recievedInfo.contactNumber;
    const emailID = recievedInfo.emailID;

    var sql = "UPDATE USERSDB SET Email_ID = '" + emailID + "'," + "Roll_Number = '" + rollNo + "',First_Name = '" + fname + "', Last_Name = '" + lname + "', Password='" + password + "',Contact_Number='" + contactNumber + "' WHERE Roll_Number='" + rollNo + "';";   
    db.query(sql , function(err,result){
        if (err){
            throw(err);
        } else {
            res.send(result);
        }
    })

});

module.exports = router;