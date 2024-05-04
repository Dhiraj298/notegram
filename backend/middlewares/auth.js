const jwt = require('jsonwebtoken')

const auther = (req , res , next)=>{
    try{

        let token = req.headers.authorization;
        if(token){
            // token = token.split(" ")[1];
            let result = jwt.verify(token , "Secret")
            req.userId = result.userId;
            // res.json({result : result})
        }
        else{
            res.status(400).json({msg : "token not present"})
        }
        next()
    }catch(err){
        console.log(err);
        res.status(401).json({msg : "unauthorized user"})
    }
}

module.exports =  auther;