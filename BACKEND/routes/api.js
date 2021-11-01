const express = require('express');


const router = express.Router();

const jwt =require('jsonwebtoken');//token

const userDB = require('../model/userData')

// const ProductData = require('../model/Productdata'); //database



router.post('/register',(req,res)=>{
    let userData = req.body 
    let user = new userDB(userData);

    user.save((err,registeredUser)=>{
        if(err) console.log(err);
        

        
        else{

            // res.status(200).send(registeredUser);
             let payload = {subject : user._id} 
             let token = jwt.sign(payload,'dan_key')
             res.status(200).send({token}) 


        }
    })
})






router.post('/login' ,(req,res)=>{

    let userData = req.body
    userDB.findOne({email : userData.email} , (err,user)=>{ 
        if(err){
            console.log(err);
        }else if(!user){
            res.status(401).send('Invalid Email');
        }else if( user.password !== userData.password){
            res.status(401).send('Invalid Password');
        }else{

            let payload = {subject : user._id}
            let token = jwt.sign(payload,'dan_key')
            res.status(200).send({token})
            // res.status(200).send(user);
        }
    });
});




// function verifyToken(req,res,next){

//     if(!req.headers.autherization){
//         return res.status(401).send('Unautherized request');
//     }
//     let token = req.headers.autherization.split(' ')[1] //split

//     if(token === 'null'){
//         return res.status(401).send('Unautherized request');

//     }
    
//     let payload = jwt.verify(token, 'dan_key')
//     if(!payload){
//         return res.status(401).send('Unautherized user');   

//     }
//     req.userId = payload.subject;

//     next()

// }













module.exports = router;