const express = require('express'); //express
const ProductData = require('./model/Productdata'); //database
const bodyparser = require('body-parser'); //body parser
const cors = require('cors'); //cors

const port = process.env.PORT || 3010 ;

 

const api = require('./routes/api')


var app = new express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use('/api',api)







app.get('/products',function(req,res){

    res.header('Access-Control-Allow-Origin' , "*") // from any source getting request , it will accept it
    res.header('Access-Control-Allow-Methods : GET , POST , PATCH , PUT , DELETE , ') // which method are accepting

    ProductData.find()
    .then(function(products){
        res.send(products);
    });

});



app.post('/insert' , (req,res)=>{

    res.header('Access-Control-Allow-Origin' , "*") // from any source getting request , it will accept it
    res.header('Access-Control-Allow-Methods : GET , POST , PATCH , PUT , DELETE , ') // which method are accepting

    // console.log(req.body);

    var product = {
        productId : req.body.product.productId,
        productName : req.body.product.productName,
        productCode : req.body.product.productCode,
        releaseDate : req.body.product.releaseDate,
        description : req.body.product.description,
        price : req.body.product.price,
        starRating : req.body.product.starRating,
        imageUrl : req.body.product.imageUrl
    
    }

    var product = new ProductData(product);

    product.save();

});


//delete

app.post('/delete',function(req,res){

    res.header('Access-Control-Allow-Origin' , "*") // from any source getting request , it will accept it
    res.header('Access-Control-Allow-Methods : GET , POST , PATCH , PUT , DELETE , ') // which method are accepting

    // console.log(req.body);


    var Id = req.body.product._id;

    // console.log(Id)


    ProductData.deleteOne({ _id  : Id })

    .then((data)=>{
        res.status(200).json(data,)
    },
    err=>{
        res.status(500).json({ err})
    }
    )
    

});







// update

app.post('/update',function(req,res){

    res.header('Access-Control-Allow-Origin' , "*") 
    res.header('Access-Control-Allow-Methods : GET , POST , PATCH , PUT , DELETE , ')
    
    console.log(req.body)

    var id = req.body.list._id;

    var IDedited = req.body.list.productId;
    var NAMEedited = req.body.list.productName;
    var CODEedited = req.body.list.productCode;
    var DATEedited = req.body.list.releaseDate;
    var DISCedited = req.body.list.description;
    var PRICEedited = req.body.list.price;
    var RATEedited = req.body.list.starRating;
    var IMGedited = req.body.list.imageUrl;

    ProductData.updateMany( {_id: id} , { $set : { productId : IDedited , productName : NAMEedited , productCode : CODEedited ,releaseDate : DATEedited  ,description : DISCedited  ,price : PRICEedited  ,starRating : RATEedited  ,imageUrl : IMGedited  ,    multi:true }  } )
    .then((data)=>{
        res.status(200).json(data)
    },
    err=>{
        res.status(500).json({ err})
    }
    )

    

    // res.status(200).json({ msg : 'Post request is working'});



    
    

});





app.listen(port, function(){
    console.log('listening to port 3010');
}); 