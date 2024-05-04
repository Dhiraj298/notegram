const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const userModel = require('../model/userSchema')

const signUp = async (req , res )=>{

    const { username , password , profession} = req.body;

    try{

        const existingUser = await userModel.findOne({username: username})
        if(existingUser) {
            return res.status(400).json({msg : "user already existed"});
        }
        

        const hashedPass = await bcrypt.hash(password , 10)
        const result = await userModel.create({
            username : username,
            password : hashedPass,
            profession : profession
        })

        const token = jwt.sign({success: true , username : username , userId : result._id} , "Secret");

        res.status(201).json({success: true , user : result , token : token} )
    }
    catch(err){
        console.log(err);
        res.status(500).json({success: false , msg : "something wrong in signUp"})
    }
}




const signIn = async (req,res)=>{

    const {username , password} = req.body;

    try{

        const existingUser = await userModel.findOne({username : username});
        if(!existingUser){
            return res.status(400).json({success : false  , msg : "user NOt found"});
        }

        const matchPass = await bcrypt.compare(password , existingUser.password);
        if(!matchPass){
            return res.status(400).json({success : false , msg : "wrong credentials"});
        }

        const token = jwt.sign({username : username , userId : existingUser._id} , "Secret" )
        res.status(201).json({success : true , username : username,msg : "user Logged in" , token : token})
    }
    catch(err){
        console.log(err);
        res.status(500).json({success : false ,msg : "something wrong in login"})
    }

}

module.exports = {signIn , signUp}