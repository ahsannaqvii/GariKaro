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

module.exports = router;