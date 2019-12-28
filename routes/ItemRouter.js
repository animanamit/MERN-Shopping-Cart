const express = require("express");
const router = express.Router();

// get the Item model
const ItemModel = require('../models/item-model');

// fetch all items from database!
router.get('/', (req, res) => {
    ItemModel.find() // this method returns a promise
    .then(items => res.json(items))
    .catch(err => console.log(err));
});


router.get('/getitem', (req, res) => {
    ItemModel.findOne( { title : req.query.title })
    .then(item => res.json(item))
    .catch(err => console.log(err));
});


router.post('/addnewitem', (req, res) => {
    const testItem = new ItemModel({
        title : req.body.title,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        photo : req.body.photo,
        owner : req.body.owner
    });

    testItem.save().then(item => res.json(item))
    .catch(err => console.log(err));
});


router.delete('/deleteitem', (req, res) => {
    ItemModel.findOneAndDelete({ title : req.query.title })
        .then(console.log("deleted!"))
        .catch(err => console.log(err))
});
        

router.put('/addcomment', (req, res) => {
    
    ItemModel.findOneAndUpdate( {title : req.body.title}, { $push : { comments : req.body.comment}} , {new:true})
    .then(item => res.json(item))
    .catch(err => console.log(err));        
    }
)

router.put('/addreview', (req, res) => {

    ItemModel.findOneAndUpdate( {title : req.body.title}, { $push : { reviews : req.body.review }} , {new:true})
    .then(item => res.json(item))
    .catch(err => console.log(err));
        
    }
)

module.exports = router;