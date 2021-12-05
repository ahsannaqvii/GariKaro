const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: 'Password123#@!',
    database: "garikro"
  });

  con.connect(function(err) {
    if (err){
        console.log(err);
    }
    else {
      console.log("Connected!");
    }
  });

module.exports = con;