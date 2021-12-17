const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const loginRoutes = require('./routes/login');
const signupRoutes = require('./routes/signup');
const driverRoutes = require('./routes/driver');
const carDetailsRoutes = require('./routes/carInfo');
const userForumRoutes = require('./routes/userForum');
const ridesHistoryRoutes = require('./routes/rideshistory');
const driverPostedRidesRoutes = require('./routes/driverpostedrides');

app.use(cors());
app.use(bodyParser({extended: true}));

app.post("/login" , loginRoutes);

app.post("/signup" , signupRoutes);

app.post("/driver" , driverRoutes);

app.post("/car-details" , carDetailsRoutes);

app.get("/forum" , userForumRoutes);

app.get("/rides-history" , ridesHistoryRoutes);

app.get("/posted-rides" , driverPostedRidesRoutes);

app.listen(4000, function(){
    console.log("Server is running on port 4000");
})