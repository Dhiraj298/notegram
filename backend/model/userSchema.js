
const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username : {
        type: String ,
        required : true,
    },
    password: {
        type :String,
        required : true,
    },
    profession: {
        type : String,
    }
    
}, {timestamps : true});


module.exports = mongoose.model("user_Notegram", userSchema )