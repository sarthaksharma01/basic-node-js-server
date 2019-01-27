const mongoose = require('mongoose');
const schema = mongoose.Schema;


//create ninjaschema and model
 const internschema = new schema({
     name: {
         type: String,
         required:[true, 'Name field is required']
     },
    rank: {
        type: String,
    },
    available: {
        type: Boolean,
        default: false
    }
    //add in geo location
 });

 const interndb = mongoose.model('Intern', internschema);

 //exporting
 module.exports=interndb;