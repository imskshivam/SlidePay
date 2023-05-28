const express = require("express");
const userService= require('../services/user-service');

const auth = require("../middlewares/auth");
const userRouter = express.Router();







// GET /user
userRouter.get('/',auth ,userService.getUser);


// POST /user
userRouter.post('/createUser',userService.createUser);

// POST /verify pay id
userRouter.get('/verifyPayid',userService.verifyPayId);

// GET /all  user
userRouter.get('/user',userService.getUser);

// GET /user/:id
userRouter.get('/userId',userService.getUserById);


 



module.exports = userRouter;