const User  = require('../models/user');
const encrypt = require('../secure/encryption');

async function checkBalance (req, res,next) {

    const  senderId  = req.query.senderId;
    const  amount  = req.query.amount;
    const iv = req.query.iv;

    const decryptsenderId = encrypt.decrypt({ iv: iv,
        content: senderId });

        const decryptamountId = encrypt.decrypt({ iv: iv,
            content: amount });

        const user = await User.findOne({sender:decryptsenderId});
        if (user.wallet >=decryptamountId ) {
            next();
        }else {
            return res.status(404).json({});
        }



    next();

}

module.exports = {checkBalance};