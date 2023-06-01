
const Transaction=require('../models/transactionModel');
const { v4: uuidv4 } = require('uuid');
const encrypt = require('../secure/encryption');
const User = require('../models/user');



class  transactionService {

    async getTransaction(req,res){
        const { senderId,iv,page} = req.query;

        const pageNumber = parseInt(page) || 1;
        const pageSize = 5;
        const skipAmount = (pageNumber - 1) * pageSize;


        try {
          const decryptsenderId = encrypt.decrypt({ iv: iv,
            content: senderId });

            const  senderuser = await Transaction.find({sender:decryptsenderId}).sort({date:"desc"}).skip(skipAmount).limit(pageSize).exec();
            return res.status(200).json({senderuser});

        } catch (error) {
          return res.status(404).json({ error });
        }
    }


    // POST /transactions
    async postTransaction (req,res) {

        const { senderId , recieverId , amount } = req.body;

     

     


      try {

        
         const senderuser = await User.findOne({payId:senderId});
            const recieveruser = await User.findOne({payId:recieverId});
             if (!senderuser) {
                  // User not found
        return res.status(404).json({ message: 'Your Account Not Active' });
           }
           if (!recieveruser) {
                  // User not found
        return res.status(404).json({ message: 'User not found' });
           }
  
  
           senderuser.wallet=senderuser.wallet-parseInt(amount);
  
           recieveruser.wallet=parseInt(amount)+recieveruser.wallet;
          const updatesender = await senderuser.save();
          const updatereciever = await recieveruser.save();


               // Create a new transaction object
  const newTransaction = new Transaction({
    amount:amount,
    sender:senderId,
    reciever:recieverId,
    transactionId:`SLIDE${uuidv4().split('-').join('').toUpperCase()}`,
    status:"successfull",
    date:new Date()
  });

  const successfull = await newTransaction.save();


        
        return res.json({reciever:updatereciever,sender:updatesender,successfull});
      } catch (error) {
        res.json({error});
      }


   

            
           
        

    }



    async getTransactionById (req,res) {
        const { transactionId } = req.query;

      

    try {
      const decrypttransactionId = encrypt.decrypt({ iv: iv,
        content: transactionId });

      
     const transaction_Id = await Transaction.findOne({transactionId:decrypttransactionId});
     res.json(transaction_Id)
    } catch (error) {
     res.status(500).json({ error: error.message });
    }


    }


    // GET /transactions/:id By date


    async getTransactionByDate (req,res) {
        const { startDate, endDate } = req.query;

        try {
         const transaction = await Transaction.find({
            date: { $gte: new Date(startDate), $lte: new Date(endDate) }
         });
         res.json(transaction)
        } catch (error) {
         res.status(500).json({ error: error.message });
        }
    }


 }


 module.exports = new transactionService();