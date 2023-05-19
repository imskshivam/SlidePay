const express = require("express");

const authController = require('../controllers/authController');
const authRouter = express.Router();




authRouter.post('/login',authController.login);
authRouter.post('/verify',authController.login);

module.exports = authRouter;