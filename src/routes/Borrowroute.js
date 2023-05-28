const express = require('express');

const transactionService = require('../services/transaction_service');

const BorrowService = require('../services/borrow-service');



const borrowrouter = express.Router();


borrowrouter.post('/sendMoney',BorrowService.sendMoney) ;

borrowrouter.post('/Repay',BorrowService.sendMoney) ;


module.exports = borrowrouter;