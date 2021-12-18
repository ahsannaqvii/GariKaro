const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models/UsersDB');

const router = express.Router();

router.post("/driver" , function(req,res){
    const recievedInfo = req.body;
    const carRegistrationNumber = recievedInfo.carRegistrationNumber;
    
    var sql = "SELECT Car_Registration_Number FROM VEHICLESDB WHERE Car_Registration_Number = '" + carRegistrationNumber + "';";
    db.query(sql , function(err , result){
        if (err){
            throw(err);
        } else {
            // console.log(result);
            
            if (result.length == 0){
                return res.status(200).json({carFound: "false" });
            }
            else {
                return res.status(200).json({carFound: "true" });
            }
        }
    });
}); 

module.exports = router;