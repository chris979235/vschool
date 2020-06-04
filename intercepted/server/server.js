const express=require("express")
const peopleArr=express()
const { v4: uuid } = require('uuid');

peopleArr.use(express.json())


peopleArr.use("/people", (req,res,next)=>{
  console.log("middleware stuff")
  next()
})

peopleArr.use("/people", (req,res,next)=>{
  req.body = {name: 'joe'}
  next()
 })

 
peopleArr.get("/people", (req,res,next)=>{
  console.log("get requst recieved")
  res.send(req.body)
  })



peopleArr.listen(9000, () =>{
  console.log('the server is running')
})