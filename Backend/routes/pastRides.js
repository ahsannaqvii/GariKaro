const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models/UsersDB');

const router = express.Router();

router.get("/past-rides" , function(req,res){
    const recievedInfo = req.query;

    var sql = "SELECT * FROM RIDESDB WHERE Driver_RollNo = '" + recievedInfo.rollNo + "';";
    db.query(sql , function(err , result){
        if (err){
            throw(err);
        } else {
            // console.log(result);
           return res.status(200).send(result);
        }
    });
}); 

module.exports = router;