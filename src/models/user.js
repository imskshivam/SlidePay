const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const userSchema = new Schema({
  
  name: {
    type: String,
    
  },
  age: {
    type: Number,
    
  },
  DOB: {
    type: String,
    
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
 addressDetail: {
    
  address: {
    type: String,
   
  },
  landMark:{
    type:String,
   
  },
  Pincode:{
    type:String,
   
  },
  
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
    required :true
  },
  active:{
    type:Boolean,
   
  },
  accountType:{
    type:String,
    enum: ['UserAccount', 'MerchantAccount'],
    default: 'UserAccount'
  },
  cardDetail:{

    cardName :{
      type:String,
      
    },
    cardNumber :{
      type:String,
    },
    cVV :{
      type:String,
    },
    expDate :{
      type:String,
    }
  }
  
 
  
});


const user= mongoose.model('User', userSchema);

module.exports = user;
