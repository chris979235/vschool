const express=require("express")
const inventoryItems=express()

inventoryItems.use(express.json())

inventoryItems.use("/findThing", require('./findThing.js'))

inventoryItems.listen(9000, () =>{
  console.log('the server is running')
})