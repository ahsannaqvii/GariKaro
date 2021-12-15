const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models/UsersDB');

const router = express.Router();

router.post("/driver" , function(req,res){
    const dropoff = req.body.dropoff;
    const availableSeats = req.body.seats;
    const leavingtime = req.body.leavingTime;
    const driverinfo = req.body.driver;
    // const carType = req.body.carType;
    const carReg = req.body.carRegistrationNumber;
    const fare = req.body.Fare;
    const date = req.body.Date;
    const pickup=req.body.pickup;

    console.log(driverinfo + " " + pickup.address + " " + dropoff.address + " " + carReg + " " + fare + " " + date + " " + leavingtime + " " + availableSeats);
    // const d = { 
    //     pickup: pickup,
    //     dropoff: dropoff,
    //     availableSeats: availableSeats,
    //     leavingtime: leavingtime,
    //     driverinfo: driverinfo,
    //     carType: carType,
    //     carReg: carReg
    // }

    // res.send(d);
    // // console.log(carReg);
    // console.log(carType);
    // console.log( driverinfo + " " + pickup.address + " " + dropoff.address + " " + leavingtime + " " + availableSeats);
    
    // var sql = "INSERT INTO RIDESDB VALUES ('" + driverinfo + "','" + pickup + "','" + dropoff + "','" + leavingtime + "'," + availableSeats + ")";
    // db.query(sql , function(err,result){
    //     if (err){
    //         console.log(err);
    //         res.send(err);
    //     }
    //     else {
    //         console.log(result);
    //         res.send(result);
    //         console.log("Ride Uploaded");
    //     }
    // });

    // var sql = "SELECT Car_Registration_Number FROM DRIVERSDB WHERE Car_Registration_Number == " + carReg + ";"; 
    // db.query(sql , function(err,result){
    //     if (err){
    //         res.send(err);
    //     }
    //     else {
    //         console.log(result);
    //         res.send(result);
    //     }
    // })
}); 

module.exports = router;