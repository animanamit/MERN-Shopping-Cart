const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

   username : {
       type: String
   },

   password : {
       type: String
   },

   cartItems : {
    type: Array
   }
});

module.exports = User = mongoose.model('Accounts', userSchema);