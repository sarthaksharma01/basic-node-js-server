const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
//set up express app
const app = express();


//connect to mongodb
mongoose.connect('mongodb://localhost/interns');
mongoose.Promise=global.Promise;

app.use(bodyparser.json());

//initialize routes
app.use('/api',require('./routes/api'));
// listen for request ...
app.listen(4000,function(){
console.log("listening to port 4000!!");
});