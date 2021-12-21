const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models/UsersDB');

const router = express.Router();

router.get("/car-details/:CarRegistrationNumber" , function(req,res){
    
    var carRegistrationNumber = req.params.CarRegistrationNumber;
    var sql = "SELECT * FROM VEHICLESDB WHERE Car_Registration_Number='" + carRegistrationNumber + "';";
    db.query(sql , function(err,result){
        if (err){
            throw(err);
        }
        else {
           
            res.send(result);
        }
    });
});

router.post("/car-details/:CarRegistrationNumber" , function(request,response){
    const recievedInfo = request.body;
    const driverRollNo = recievedInfo.rollNo;
    const driverName = recievedInfo.driver;
    const pickup = recievedInfo.pickup;
    const dropoff = recievedInfo.dropoff;
    const carType = recievedInfo.carType;
    const leavingtime = recievedInfo.leavingTime;S
    const availableSeats = recievedInfo.seats;
    const carRegistrationNumber = recievedInfo.CarRegistrationNumber;

    const date = recievedInfo.Date;
    const fare = recievedInfo.Fare;
    const value = 0;
    const carFound = recievedInfo.carFound;
    const carName = recievedInfo.carName;
    const carModel = recievedInfo.carModel;
    const carMake = recievedInfo.carMake;
    const carColor = recievedInfo.carColor.background;
    
    if (carFound){
        var sql2 = "INSERT INTO RIDESDB VALUES ("  + value + ",'"  + driverRollNo + "','" + driverName + "','" + pickup.address + "','" + dropoff.address + "','" + carType + "','" + leavingtime + "'," + availableSeats + ",'" + carRegistrationNumber + "','" + date + "'," + fare + ")";
        db.query(sql2 , function(error , res){
            if (error){
                return response.status(200).json({carAdded: "true" , rideAdded : "false"});
            } else {
                return response.status(200).json({carAdded: "true" , rideAdded : "true"});
            }
        })
    }
    else {
        var sql1 = "INSERT INTO VEHICLESDB VALUES ('" + carRegistrationNumber + "','" + carMake + "','" + carModel + "','" + carName + "','" + carColor + "')";

        db.query(sql1 , function(err,result){
            if (err){
                response.status(200).json({carAdded: "false" , rideAdded : "false"});
            }
            else {
                var sql2 = "INSERT INTO RIDESDB VALUES ("  + value + ",'"  + driverRollNo + "','" + driverName + "','" + pickup.address + "','" + dropoff.address + "','" + carType + "','" + leavingtime + "'," + availableSeats + ",'" + carRegistrationNumber + "','" + date + "'," + fare + ")";
                db.query(sql2 , function(error , res){
                    if (error){
                        return response.status(200).json({carAdded: "true" , rideAdded : "false"});
                    } else {
                        console.log("1540");
                        return response.status(200).json({carAdded: "true" , rideAdded : "true"});
                    }
                })
                // return response.status(200).json({carAdded: "true" , rideAdded : "true"});
            }
        })
    }
});

module.exports = router;