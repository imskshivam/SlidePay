const express = require("express");
const userService= require('../services/user-service');

const auth = require("../middlewares/auth");
const userRouter = express.Router();







// GET /user
userRouter.get('/userById',auth ,userService.getUserById);


// POST /user
userRouter.post('/createUser',userService.createUser);

// POST /verify pay id
userRouter.get('/verifyPayid/:id',userService.verifyPayId);

// GET /all  user
userRouter.get('/getAllUser',userService.getUser);

// GET /user/:id
userRouter.get('/userId',userService.getUserById);


 



module.exports = userRouter;