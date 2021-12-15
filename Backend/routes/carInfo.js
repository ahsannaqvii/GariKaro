const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models/UsersDB');

const router = express.Router();

router.post("/carDetails" , function(req,res){
    const driverRollNo = req.body.driverRollNo;
    const 
    const pickup = req.body.pickup;
    const dropoff = req.body.dropoff;

    console.log(email + " " + password);
    // var sql = "SELECT email FROM USERSDB WHERE email = '" + email + "' AND password = '" + password + "'";
    // db.query(sql , function(err,result){
    //     if (err){
    //         console.log(err);
    //         res.send(err);
    //     }
    //     else {
    //         console.log(result);
    //         res.send(result);
    //         console.log("User authenticated");
    //     }
    // });
});

module.exports = router;