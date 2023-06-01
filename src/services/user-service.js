
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
           const {name,age,sex,email,mobile,pancard,wallet,payId,cardDetail, addressDetail,DOB} = req.body;

//            const { address, landMark, Pincode } = addressDetail;
// const { cardName, cardNumber, cVV, expDate } = cardDetail;
          

         

            const getUser = await User.findOne({mobile:mobile});
            getUser.name=name;
            getUser.age=age;
            getUser.sex=sex;
            getUser.email=email;
            getUser.addressDetail=addressDetail;
            
            getUser.pancard=pancard;
            getUser.payId=payId;
            getUser.active = true;
            getUser.cardDetail=cardDetail;
            
            getUser.payId = mobile+"@slidepay";
            getUser.DOB=DOB;
           

          const user = await getUser.save();
            

            res.status(200).json({user});
          } catch (error) {
            res.status(400).json({ error: error.message });
          }
    
    }


    async getUser(req,res){
        try {
           
            const user = await User.find();
            res.json({user});
            
           } catch (error) {
            res.status(500).json({ error: error.message });
           }
    
    }

     // GET /user
    async getUserById(req,res){
        try {
            console.log(req.user);
            const user = await User.findOne({mobile:req.user});
            res.json({user:user});
            
           } catch (error) {
            res.status(500).json({ error: error.message });
           }
    
    }


    
     // GET /user
     async verifyPayId(req,res){

        const id = req.params.id;
        console.log(id);

       try {
       
 
         const payId = await User.findOne({payId:id});
 
         if (!payId) {
             return res.status(400).json(false);
         }else {
            return res.status(200).json(true);
         }
     
       } catch (error) {
        return res.status(404).json({message:error})
       }
    }

    // // GET /user/:id
    // async getUserById(req,res) {

    //     const {userId ,iv } = req.query;

    //     try {

    //         const decryptuserId = encrypt.decrypt({ iv: iv,
    //             content: userId });


    //      const user_Id = await User.findOne({name:decryptuserId});
    //      res.json(user_Id);
    //     } catch (error) {
    //      res.status(500).json({ error: error.message });
    //     }
    // }

    
}

module.exports = new UserService();