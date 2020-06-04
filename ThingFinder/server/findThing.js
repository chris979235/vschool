const express=require('express')
const findThing=express.Router()

const inventoryItems = [
  {
      name: "banana",
      type: "food",
      price: 200,
  },{
      name: "pants",
      type: "clothing",
      price: 2500,
  },{
      name: "basket ball",
      type: "toy",
      price: 1000,
  },{ 
      name: "rockem sockem robots",
      type: "toy",
      price: 1500,
  },{
      name: "shirt",
      type: "clothing",
      price: 800,
  },{
      name: "soup",
      type: "food",
      price: 300,
  },{
      name: "flour",
      type: "food",
      price: 100,
  }
]

findThing.get("/", (request, response) =>{
  console.log("fired")
  console.log(2121,findThing)
  response.send(inventoryItems)
})

findThing.get("/search/name", (req, res)=>{
    console.log(req )
    const name=req.query.name
    const filteredFruit=inventoryItems.filter(fruit=>fruit.name===name)
    res.send(filteredFruit)
})
module.exports=findThing