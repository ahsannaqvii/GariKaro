const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models/UsersDB');

const router = express.Router();

router.get("/forum" , function(req,res){
    // const recievedData = req.body;

    var sql = "SELECT * FROM RIDESDB;";

    db.query(sql , function(err,result){
        if (err){
            console.log(err);
            res.send(err);
        }
        else {
            // console.log(result);
            res.send(result);
        }
    });
});

router.post("/forum" , function(req,res){
    const recievedData = req.body;
    const rideID = req.body.rideID;
    var sql = "SELECT * from RIDESDB WHERE Ride_ID = " + rideID + ";";
    db.query(sql , function(err , result){
        if (err){
            throw err;
        } else {
            res.status(200).send(result);
        }
    }); 

    
})

module.exports = router;