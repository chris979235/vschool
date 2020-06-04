const express=require("express")
const toDoApp=express()

toDoApp.use(express.json())

toDoApp.use("/toDoExpress", require('./toDoExpress.js'))

toDoApp.listen(9000, () =>{
  console.log('the server is running')
})