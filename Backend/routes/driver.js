const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models/UsersDB');

const router = express.Router();

router.post("/driver" , function(req,res){
    const recievedInfo = req.body;
    let driverRollNo = recievedInfo.rollNo;
    const driverName = recievedInfo.driver;
    const pickup = recievedInfo.pickup;
    const dropoff = recievedInfo.dropoff;
    // const carType = req.body.carType;
    const carType = "car";
    const leavingtime = recievedInfo.leavingTime;
    const availableSeats = recievedInfo.seats;
    const carRegistrationNumber = recievedInfo.carRegistrationNumber;
    const date = recievedInfo.Date;
    const fare = recievedInfo.Fare;
    const value = 0;
    
    var sql1 = "INSERT INTO RIDESDB VALUES ("  + value + ",'"  + driverRollNo + "','" + driverName + "','" + pickup.address + "','" + dropoff.address + "','" + carType + "','" + leavingtime + "'," + availableSeats + ",'" + carRegistrationNumber + "','" + date + "'," + fare + ")";
    var sql2 = "SELECT Car_Registration_Number FROM VEHICLESDB WHERE Car_Registration_Number = '" + carRegistrationNumber + "';";

    db.query(sql1  + ";" + sql2 , [1,2] , function(err,results){
        if (err){
            const queryResult = {
                entryAdded: true,
                carFound: false
            }
            console.log(queryResult);
            res.send(queryResult);
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
        }
    });
}); 

module.exports = router;