const noteModel = require('../model/noteSchema')



const createNode =async (req , res)=>{
    const {title , description } = req.body;
    const newNote = new noteModel({
        title : title,
        description : description,
        userId : req.userId
    })

    try{
        await newNote.save();
        res.status(200).json({success:true  ,newNote : newNote})

    }catch(err){
        console.log(err);
        res.status(400).json({success:false , msg : "new note cant created"})
    }
}

const getNode = async(req , res)=>{
    try{    
        const notes = await noteModel.find({userId : req.userId})

        res.status(200).json({notes})

    }   
    catch(err){
        console.log(err);
        res.status(400).json({msg : "notes not found"})
    }
}

const updateNode =async (req, res)=>{
    
    const id = req.params.id;
    const {title , description} = req.body;

    const newNote = {
        title : title ,
        description : description ,
        userId : req.userId
    }

    try {

        await noteModel.findByIdAndUpdate(id,newNote,{new : true})
        res.status(200).json(newNote)


    }catch(error){
        console.log(error);
        res.status(500).json({msg : "Something went wrong"})
    }
}

const deleteNode = async (req , res)=>{
    const id = req.params.id;
    try{
        // const note = await noteModel.findByIdAndRemove(id);
        const existingUser = await noteModel.findOne({_id : id})
        const note = await noteModel.deleteOne(existingUser);
        res.status(202).json({note : note , success: true})
    }catch(error){
        console.log(error);
        res.status(500).json({msg : "Something went wrong" , success: false})
    }
}


module.exports = {createNode , updateNode , deleteNode , getNode}