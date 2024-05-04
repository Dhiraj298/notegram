const express =require('express');
const { signUp, signIn } = require('../controller/userController');
const userRouter = express.Router();


userRouter.post("/signUp" , signUp)


userRouter.post("/login" , signIn)


module.exports = userRouter;