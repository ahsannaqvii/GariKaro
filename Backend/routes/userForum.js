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
            res.send(result);
        }
    });
});

module.exports = router;