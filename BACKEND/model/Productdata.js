const mongoose = require('mongoose'); // mongoose pkg

mongoose.connect('mongodb://localhost:27017/ProductDB',{ useNewUrlParser: true , useUnifiedTopology: true }); //connection

const Schema = mongoose.Schema; //schema

const NewProductSchema = new Schema({

    productId : String,
    productName : String,
    productCode : String,
    releaseDate : String,
    description : String,
    price : Number,
    starRating : Number,
    imageUrl : String

});

var Productdata = mongoose.model('product' , NewProductSchema ); //model

module.exports = Productdata; //exports