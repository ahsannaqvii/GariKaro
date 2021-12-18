const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models/UsersDB');

const router = express.Router();

router.post("/driver" , function(req,res){
    const recievedInfo = req.body;
    const driverRollNo = recievedInfo.rollNo;
    const driverName = recievedInfo.driver;
    const pickup = recievedInfo.pickup;
    const dropoff = recievedInfo.dropoff;
    const carType = req.body.carType;
    const leavingtime = recievedInfo.leavingTime;
    const availableSeats = recievedInfo.seats;
    const carRegistrationNumber = recievedInfo.carRegistrationNumber;
    const date = recievedInfo.Date;
    const fare = recievedInfo.Fare;
    const value = 0;

    console.log(driverRollNo + "','" + driverName + "','" + pickup.address + "','" + dropoff.address + "','" + carType + "','" + leavingtime + "'," + availableSeats + ",'" + carRegistrationNumber + "','" + date + "'," + fare);
    // var sql1 = "INSERT INTO RIDESDB VALUES ("  + value + ",'"  + driverRollNo + "','" + driverName + "','" + pickup + "','" + dropoff + "','" + carType + "','" + leavingtime + "'," + availableSeats + ",'" + carRegistrationNumber + "','" + date + "'," + fare + ")";
    // var sql1 = "SELECT Car_Registration_Number FROM VEHICLESDB WHERE Car_Registration_Number = '" + carRegistrationNumber + "';";
    // db.query(sql1 , function(err , result){
    //     if (err){
    //         throw(err);
    //     } else {
    //         console.log(result);
            
    //         if (result.length == 0){
    //             return res.status(200).json({carFound: "false" });
    //         }
    //         else {
    //             // var sql2 = "INSERT INTO RIDESDB VALUES ("  + value + ",'"  + driverRollNo + "','" + driverName + "','" + pickup.address + "','" + dropoff.address + "','" + carType + "','" + leavingtime + "'," + availableSeats + ",'" + carRegistrationNumber + "','" + date + "'," + fare + ")";
    //             // db.query(sql2, function(error , res){
    //             //     if (err){
    //             //         throw(err);
    //             //     }
    //             //     else {
    //             //         return res.status(200).json({ entryAdded : "true" , carFound: "true" });
    //             //     }
    //             // });
    //             return res.status(200).json({carFound: "true" });
    //         }
    //     }
    // });
}); 

module.exports = router;