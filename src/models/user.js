const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const userSchema = new Schema({
  
  name: {
    type: String,
    default:''
    
  },
  age: {
    type: String,
    default:''
    
  },
  DOB: {
    type: String,
    default:''
    
  },
  sex: {
    type: String,
    default:''
  },
  email: {
    type: String,
    default:'' 
  },
  mobile: {
    type: String,
    required: true
  },
 addressDetail: {
    
  address: {
    type: String,
    default:''
   
  },
  landMark:{
    type:String,
    default:''
   
  },
  Pincode:{
    type:String,
    default:''
   
  },

 },
 
  pancard: {
    type: String,
    default:''
    
  },
  wallet: {
    type: Number,
    default: 0
  },
  payId:{
    type:String,
    default:''
   
  },
  accessToken:{
    type:String,
    required :true
  },
  active:{
    type:Boolean,
    default:false
   
  },
  accountType:{
    type:String,
    enum: ['UserAccount', 'MerchantAccount'],
    default: 'UserAccount'
  },
  cardDetail:{

    cardName :{
      type:String,
      default:''
      
    },
    cardNumber :{
      type:String,
      default:''
    },
    cVV :{
      type:String,
      default:''
    },
    expDate :{
      type:String,
      default:''
    }
  }
  
 
  
});


const user= mongoose.model('User', userSchema);

module.exports = user;
