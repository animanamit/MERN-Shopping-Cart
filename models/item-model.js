const mongoose = require('mongoose');

// creating a schema for items
const itemSchema = new mongoose.Schema({

    title: {
        type: String
    },

    description: {
        type: String
    },

    price : {
        type: String
    },

    quantity: {
        type: String
    },

    photo : {
        type: String
    },

    comments : {
        type: [String]
    },

    reviews : {
        type: [String]
    },

    owner : {
        type: String
    }
});

module.exports = Item = mongoose.model('item', itemSchema);
// return and add comment and review arrays!
