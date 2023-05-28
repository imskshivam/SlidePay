const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const userSchema = new Schema({
  
  name: {
    type: String,
    
  },
  age: {
    type: Number,
    
  },
  sex: {
    type: String,
  },
  email: {
    type: String, 
  },
  mobile: {
    type: String,
    required: true
  },
  address: {
    type: String,
   
  },
  pancard: {
    type: String,
    
  },
  wallet: {
    type: Number,
    default: 0
  },
  payId:{
    type:String,
   
  },
  accessToken:{
    type:String,
  },
  active:{
    type:Boolean,
    default:false
  },
  accountType:{
    type:String,
    enum: ['UserAccount', 'MerchantAccount'],
    default: 'UserAccount'
  }
 
  
});


const user= mongoose.model('User', userSchema);

module.exports = user;
