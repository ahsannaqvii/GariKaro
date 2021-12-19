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
const rideConfirmationRoutes = require('./routes/rideConfirmation');
const pastRidesRoutes = require("./routes/pastRides");
const scheduledRidesRoutes = require("./routes/scheduled-rides");

app.use(cors());
app.use(bodyParser({extended: true}));

app.post("/login" , loginRoutes);

app.post("/signup" , signupRoutes);

app.post("/driver" , driverRoutes);

app.get("/car-details/:CarRegistrationNumber" , carDetailsRoutes);

app.post("/car-details/:CarRegistrationNumber" , carDetailsRoutes);

app.get("/forum" , userForumRoutes);

app.post("/forum" , userForumRoutes);

app.get("/rides-history" , ridesHistoryRoutes);

app.get("/posted-rides" , driverPostedRidesRoutes);

app.post("/ride-confirmation" , rideConfirmationRoutes);

app.get("/ride-confirmation" , rideConfirmationRoutes);

app.get("/scheduled-rides" , scheduledRidesRoutes);

app.get("/past-rides" , pastRidesRoutes);

app.listen(4000, function(){
    console.log("Server is running on port 4000");
})