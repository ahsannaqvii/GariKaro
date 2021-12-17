const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models/UsersDB');

const router = express.Router();

router.get("/rides-history" , function(req,res){
    const recievedData = req.body;
    const userRollNo = req.body.rollNo;

    var sql = "SELECT * FROM PASSENGERSDB P , RIDESDB R WHERE P.Ride_ID = R.Ride_ID AND P.Passenger_RollNo = '" + userRollNo + "';";

    db.query(sql , function(err,result){
        if (err){
            console.log(err);
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
});

module.exports = router;