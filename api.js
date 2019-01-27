const express = require('express');
const router = express.Router();
const interndb = require('./models/intern');

// get data from database
router.get('/intern' ,function(req,res){

    res.send({type: 'GET'});

});
// add data to database
router.post('/intern' ,function(req,res){
      interndb.create(req.body).then(function(Intern){

        res.send(ninja);
      });
});
// udpdate
router.put('/intern/:id' ,function(req,res){

    res.send({type: 'PUT'});

});

//delete
router.delete('/intern/:id' ,function(req,res){

    res.send({type: 'DELETE'});

});

//exporting
module.exports= router;