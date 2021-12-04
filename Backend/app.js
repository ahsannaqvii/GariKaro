const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const loginRoutes = require('./routes/login');
const signupRoutes = require('./routes/signup');

app.use(cors());
app.use(bodyParser({extended: true}));

mongoose.connect("mongodb://localhost:27017/GariKro");

app.post("/login" , loginRoutes);

app.post("/signup" , signupRoutes);

app.listen(4000, function(){
    console.log("Server is running on port 4000");
})