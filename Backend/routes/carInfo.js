const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models/UsersDB');

const router = express.Router();

router.post("/car-details" , function(req,res){
    // const driverRollNo = req.body.driverRollNo;
    const carRegistrationNumber = "AEY-335"
    const carName = req.body.carName;
    const carModel = req.body.carModel;
    const carMake = req.body.carMake;
    const carColor = req.body.carColor.background;
    console.log(carName + " " + carModel + " " + carMake + " " + carColor);
    var sql = "INSERT INTO VEHICLESDB VALUES ('" + carRegistrationNumber + "','" + carMake + "','" + carModel + "','" + carName + "','" + carColor + "')";
    db.query(sql , function(err,result){
        if (err){
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.send(result);
            console.log("Car Added");
        }
    });
});

module.exports = router;