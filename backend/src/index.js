const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('../routes/userRoutes');
const noteRouter = require('../routes/noteRoutes');
// const auther = require('../middlewares/auth');
const cors = require('cors')
const app = express()

app.use(express.json())
// app.use(auther)
app.use(cors())
app.use("/users" , userRouter)
app.use("/notes" , noteRouter)

app.get("/" , (req,res)=>{
    res.send("the app is noteApp");
})

mongoose.connect("mongodb+srv://dhirajisme123:mern123@cluster0.h5nbkjf.mongodb.net/")
.then(()=>{
    
    app.listen(5341 , ()=>{
        console.log("hello the app is running at 5341");
    })
})
.catch(()=>{
    console.log("not connectd db something problemm")
})

