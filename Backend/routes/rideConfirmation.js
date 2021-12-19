const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models/UsersDB');

const router = express.Router();

router.get ("/ride-confirmation" , function(req,res){
    const recievedData = req.query;
    const rideID = recievedData.id;
    var sql = "SELECT * FROM RIDESDB WHERE Ride_ID = '" + rideID + "';";
    db.query(sql , function(err,result){
        if (err){   
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
});

router.post("/ride-confirmation" , function(req,res){
    const recievedData = req.body;
    const rideID = recievedData.id;
    const passengerRollNo = recievedData.rollNo;
    const bookedSeats = recievedData.bookedSeats;
  
    db.beginTransaction(function(err){
        if (err){
            throw(err);
        }
        var sql = "SELECT * FROM RIDESDB WHERE Ride_ID = "+ rideID + ";";
        db.query(sql , function(err,result){
            if (err){
                db.rollback(function(error){
                    if(error){
                        throw(error);
                    }
                })
            }
            else {
                var newSeats = result[0].Seats;
                newSeats = newSeats - bookedSeats;
                if (newSeats <= 0){
                    newSeats = 0;
                }
                var sql2 = "UPDATE RIDESDB SET Seats = " + newSeats + " WHERE Ride_ID = " + rideID + ";" ;
                db.query(sql2 , function(err , result){
                    if (err){
                        throw(err);
                    }
                    else {
                        var sql4 = "INSERT INTO PASSENGERSDB VALUES ('" + passengerRollNo + "'," + rideID + "," + bookedSeats + ");"; 
                        db.query(sql4 , function(err , result){
                            if (err){
                                throw(err);
                            }
                            else {
                                var log = 'Ride ' + rideID + ' booked by ' + passengerRollNo;
                                var sql3 = "INSERT INTO log SET data= '" + log + "';"; 
                                db.query('INSERT INTO log SET data=?', log, function(err, results) {
                                    if (err) { 
                                        db.rollback(function() {
                                            throw err;
                                        });
                                    }  
                                    db.commit(function(err) {
                                        if (err) { 
                                            db.rollback(function() {
                                            throw err;
                                            });
                                        }
                                    });
                                    res.send(results);
                                });
                            }
                        });
                    }
                });  
            }
        });
    });
});

module.exports = router;