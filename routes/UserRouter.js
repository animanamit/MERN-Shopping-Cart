const express = require("express");
const router = express.Router();

const userModel = require('../models/user-model');

const ItemModel = require('../models/item-model');

// fetch all items from database!
router.get('/', (req, res) => {
    userModel.find() 
    .then(users => res.json(users))
    .catch(err => console.log(err));
});

// register
router.post('/', (req, res) => {
 
    const testUser = new userModel({
        username : req.body.username,
     
        password : req.body.password,
     
        cartItems : req.body.cartItems
    });
    testUser.save().then(user => res.json(user))
});

// log in
router.get('/login', (req, res) => {

    userModel.findOne({ username : req.query.username})
    .then(user => res.json(user))
    .catch(err => console.log(err));
});


// adding new item to cart
router.put('/addtocart', (req, res) => {

    const newCartItem = new ItemModel({
        title : req.body.body.title,
        description: req.body.body.description,
        price: req.body.body.price,
        quantity: req.body.body.quantity,
        photo : req.body.body.photo,
        comments : [],
        reviews : [],
        id : req.body.body.id
    })

    userModel.findOneAndUpdate( { username : req.body.username }, { $push : { cartItems : newCartItem }} , {new:true})
    .then(item => res.json(item))
    .catch(err => console.log(err));        
});

router.get('/getcartids', (req, res) => {

    userModel.findOne( { username : req.query.username})
    .then(user => res.json(user))
    .catch(err => console.log(err));
});

module.exports = router;