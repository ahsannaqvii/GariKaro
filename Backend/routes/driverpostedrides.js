const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models/UsersDB');

const router = express.Router();

router.get("/posted-rides" , function(req,res){
    const recievedData = req.body;
    const driverRollNo = req.body.rollNo;

    var sql = "SELECT * FROM RIDESDB WHERE Driver_RollNo = '" + driverRollNo + "';";

    db.query(sql , function(err,result){
        if (err){
            console.log(err);
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
});

module.exports = router;