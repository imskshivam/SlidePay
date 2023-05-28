

const encrypt = require('../secure/encryption');
const User = require('../models/user');
const BorrowModel = require('../models/borrowModel');



class BorrowService {

    async sendMoney(req,res){
        try {
            const borrow = new BorrowModel(req.body);

            console.log(borrow.borrowerPayId);
            //FIND IF ALREADY PREVIOUS PENDING DATA

            const Preborrow = await BorrowModel.findOne({loanId:borrow.loanId});

           

            if (Preborrow==null) {
           borrow.totalAmountToBeReturn=(borrow.amountBorrowed*borrow.Interest)/100+borrow.amountBorrowed;
                borrow.dateBorrowed=new Date();
                borrow.loanId=borrow.lenderPayId+borrow.borrowerPayId;
                console.log("not present");
            }else if(Preborrow.status=="Pending") {

                console.log(Preborrow.totalAmountToBeReturn);
                console.log((borrow.amountBorrowed*borrow.Interest)/100);
                console.log(borrow.amountBorrowed);


           borrow.totalAmountToBeReturn=Preborrow.totalAmountToBeReturn+(borrow.amountBorrowed*borrow.Interest)/100+borrow.amountBorrowed;
                borrow.dateBorrowed=new Date();

                       // Update the document
    const filter = {loanId:borrow.loanId};
    const update = {
      $set: {
        totalAmountToBeReturn: 1200,
        Interest: 12,
        tenure: '6',
        status: 'Updated'
      }
    };

            const savedBorrow = await borrow.updateOne(filter,update); 
               
                console.log( borrow.totalAmountToBeReturn+"    "+ Preborrow.amountBorrowed);

            }

        
            // BORROWED MONEY 

            //HERE WE CUT WALLET AMOUNT OF LENDER OR BORROWER 

            const lenderwallet = await  User.findOne({payId:borrow.lenderPayId});
            const Borrowerwallet = await  User.findOne({payId:borrow.borrowerPayId});

            

            lenderwallet.wallet -=borrow.amountBorrowed;
            Borrowerwallet.wallet+=borrow.amountBorrowed;

     
            await lenderwallet.save();
            await Borrowerwallet.save();

            res.status(200).json({});
        } catch (error) {
            res.status(200).json({error});
        }
        
    }

}

module.exports = new BorrowService();