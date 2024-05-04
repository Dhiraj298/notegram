const express = require("express")
const auther = require("../middlewares/auth")
const { getNode, createNode, deleteNode, updateNode } = require("../controller/noteController")
const noteRouter = express.Router()

noteRouter.get("/" , auther , getNode)


noteRouter.post("/" , auther , createNode)


noteRouter.delete("/:id" , auther , deleteNode)


noteRouter.put("/:id" , auther , updateNode)

module.exports = noteRouter;