const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models/UsersDB');

const router = express.Router();

router.get("/scheduled-rides" , function(req,res){
    const recievedInfo = req.body;
    const driverRollNo = recievedInfo.rollNO;
    
    var sql = "SELECT * FROM RIDESDB WHERE Driver_RollNo = " + driverRollNo + " AND Seats > 0 ;";
    db.query(sql , function(err , result){
        if (err){
            throw(err);
        } else {
           return res.status(200).send(result);
        }
    });
}); 

module.exports = router;