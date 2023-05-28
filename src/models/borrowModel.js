const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const borrowMoneySchema = new Schema({
    loanId:{
        type: String,
        
    },
  lender: {
    type: String,
    required: true
  },
  lenderPayId:{
    type: String,
    required: true
  },
  borrower: {
    type: String,
    required: true
  },
  borrowerPayId:{
    type: String,
    required: true
  },
  amountBorrowed: {
    type: Number,
    required: true
  },
  dateBorrowed: {
    type: String,
    
  },
  dateReturned: {
    type: Date,
    required: false
  },
  Interest:{
    type:Number,
    required:true,
  },
  totalAmountToBeReturn: {
    type: Number,
    
  },
  tenure:{
    type:String,
    required:true
  },
  lateFee:{
    type:Number,
    
  },
  status: {
    type: String,
    enum: ['Pending', 'Returned'],
    default: 'Pending'
  }
});

const BorrowMoney = mongoose.model('BorrowMoney', borrowMoneySchema);

module.exports = BorrowMoney;
