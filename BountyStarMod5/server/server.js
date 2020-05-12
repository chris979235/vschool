const express=require("express")
const ForceUser=express()

ForceUser.use(express.json())

ForceUser.use("/bounties", require("./bounties.js"))

ForceUser.listen(9000, () =>{
  console.log('the server is running')
})