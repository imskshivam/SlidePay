
const User=require('../models/user');
const encrypt = require('../secure/encryption');
const TokenService = require('../services/token-service');
class UserService {

     // find User
    async finduser(filter){
        const user = await UserModel.findOne(filter);
        return user;
    }

//Create new User
    async createUser(req,res){
        try {
           const {name,age,sex,email,mobile,address,pancard,wallet,payId} = req.body;
          

         

            const getUser = await User.findOne({mobile:mobile});
            getUser.name=name;
            getUser.age=age;
            getUser.sex=sex;
            getUser.email=email;
            getUser.address=address;
            getUser.pancard=pancard;
            getUser.payId=payId;
            getUser.active = true;
           

          const savedUser = await getUser.save();
            

            res.status(200).json(savedUser);
          } catch (error) {
            res.status(400).json({ error: error.message });
          }
    
    }

     // GET /user
    async getUser(req,res){
        try {
            const users = await User.find();
            res.json(users)
           } catch (error) {
            res.status(500).json({ error: error.message });
           }
    
    }


    
     // GET /user
     async verifyPayId(req,res){

        const { verifyPayid , iv} = req.query;

       try {
        const decryptverifyPayid = encrypt.decrypt({ iv: iv,
         content: verifyPayid });
 
         const payId = await User.findOne({payId:decryptverifyPayid});
 
         if (!payId) {
             return res.status(200).json({message:"not valid"});
         }else {
            return res.status(200).json({message:" valid"});
         }
     
       } catch (error) {
        return res.status(404).json({message:error})
       }
    }

    // GET /user/:id
    async getUserById(req,res) {

        const {userId ,iv } = req.query;

        try {

            const decryptuserId = encrypt.decrypt({ iv: iv,
                content: userId });


         const user_Id = await User.findOne({name:decryptuserId});
         res.json(user_Id);
        } catch (error) {
         res.status(500).json({ error: error.message });
        }
    }

    
}

module.exports = new UserService();