const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const loginRoutes = require('./routes/login');
const signupRoutes = require('./routes/signup');
const driverRoutes = require('./routes/driver');

app.use(cors());
app.use(bodyParser({extended: true}));

app.post("/login" , loginRoutes);

app.post("/signup" , signupRoutes);

app.post("/driver" , driverRoutes);

app.listen(4000, function(){
    console.log("Server is running on port 4000");
})