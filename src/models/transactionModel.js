const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const transactionSchema = new Schema({
   
    amount: {
        type: Number,
        required: true
      },
     
      date: {
        type: String,
       
      },
      sender: {
          type: String,
          required: true
      },
      reciever: {
          type: String,
          required: true
      },
      transactionId: {
          type:String,
          required:true
      },
      status:{
        type:String,

      },
    
  });




const transaction= mongoose.model('Transaction', transactionSchema);

module.exports = transaction;