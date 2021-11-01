const mongoose = require('mongoose'); 

mongoose.connect('mongodb://localhost:27017/ProductDB',{ useNewUrlParser: true , useUnifiedTopology: true }); 

const Schema = mongoose.Schema;

const userSchema = new Schema({

    email:String,
    password:String
    

});

var userDB = mongoose.model('user' , userSchema  );

module.exports = userDB;