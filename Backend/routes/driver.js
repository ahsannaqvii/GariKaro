const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models/UsersDB');

const router = express.Router();

router.post("/driver" , function(req,res){
    const driverName= req.body.driver;
    const pickup=req.body.pickup;
    const dropoff = req.body.dropoff;
    // const carType = req.body.carType;
    const carType = "car";
    const leavingtime = req.body.leavingTime;
    const availableSeats = req.body.seats;
    const carRegistrationNumber = req.body.carRegistrationNumber;
    const date = req.body.Date;
    const fare = req.body.Fare;
    
    const rideDetails = { 
        driverName: driverName,
        pickup: pickup,
        dropoff: dropoff,
        // carType: carType,
        leavingtime: leavingtime,
        availableSeats: availableSeats,
        carRegistrationNumber: carRegistrationNumber,
        Date: date,
        Fare: fare,
    }
   
    var sql1 = "INSERT INTO RIDESDB VALUES ('" + driverName + "','" + pickup.address + "','" + dropoff.address + "','" + carType + "','" + leavingtime + "'," + availableSeats + ",'" + carRegistrationNumber + "','" + date + "'," + fare + ")";
    var sql2 = "SELECT Driver_Name FROM RIDESDB WHERE Car_Registration_Number = '" + carRegistrationNumber + "';";

    db.query(sql1  + ";" + sql2 , [1,2] , function(err,results){
        if (err){
            throw(err);
        }
        else {
            if (results[1]){
                const queryResult = {
                    entryAdded: true,
                    carFound: true
                }
                console.log(queryResult);
                res.send(queryResult);
            }
            else {
                const queryResult = {
                    entryAdded: true,
                    carFound: false
                }
                console.log(queryResult);
                res.send(queryResult);
            }
            
        }
    });
}); 

module.exports = router;