const express = require('express');

const encrypt = require('../secure/encryption');
const checkMiddleware  = require('../middlewares/checkbalance');

const transactionService = require('../services/transaction_service');



const transactrouter = express.Router();



// GET /senttransactions
transactrouter.get('/sentTransactions',transactionService.getTransaction );


// GET /recievetransactions
transactrouter.get('/recievetransactions',transactionService.getTransaction );



// POST /transactions
transactrouter.get('/pay',transactionService.postTransaction);



// GET /transactions/:id
transactrouter.get('/transactionId',  transactionService.getTransactionById);



// GET /transactions/:id By date
transactrouter.get('/transactionbyDate', transactionService.getTransactionByDate);    //not complete


// // // GET /transactions/:id By date
// transactrouter.post('/sample', (req,res)=>{
//     const {username} = req.body;

//     var senderencrypted = encrypt.encrypt(username);
//     // var recieverencrypted = encrypt.encrypt(recieverId);
//     // var amountencrypted = encrypt.encrypt(amount);
//     const temp = encrypt.decrypt({iv:senderencrypted.iv,content:senderencrypted.content});



  
   
    
//     // console.log("sender" + " " + senderencrypted.content+"  "+ "reciever"+"  "+recieverencrypted.content+"   "+"amount"+"   "+amountencrypted.content+ "   iv  " + senderencrypted.iv)

//     console.log(temp);

//     res.json({senderencrypted})

// });









// Export the router
module.exports = transactrouter;
