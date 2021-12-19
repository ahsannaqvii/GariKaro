const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models/UsersDB');

const router = express.Router();

router.get("/my-rides" , function(req,res){
    const recievedInfo = req.query;
    const userRollNo = recievedInfo.rollNo;

    var sql = "SELECT R.Ride_ID , R.Fare , R.Leaving_Time , R.Date , R.Pickup_Location , R.Dropoff_Location , R.Car_Registration_Number , P.Seats FROM PASSENGERSDB P , RIDESDB R WHERE R.Ride_ID = P.Ride_ID AND P.Passenger_RollNo =  '" + userRollNo + "';";
    db.query(sql , function(err , result){
        if (err){
            throw(err);
        } else {
           return res.status(200).send(result);
        }
    });
}); 

module.exports = router;