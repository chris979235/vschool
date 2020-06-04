const express=require('express')
const inventories=express.Router()
const Inventory= require("../models/inventory.js")

inventories.get("/", (req, res, next) =>{
  Inventory.find((err, inventories)=>{
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(inventories)
  })
})

inventories.get("/:inventoryID", (req, res, next) => {
  console.log(1111,req.params.inventoryID)
  Inventory.findOne({ _id: req.params.inventoryID }, (err, posts) => {
      if (err) {
          res.status(500);
          return next(err);
      }
      res.status(200).send(posts);
  });
});

inventories.get('/type', (req, res, next)=>{
  Inventory.find({type:req.query.type}, (err, inventories)=>{
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(inventories)
  })
  })

inventories.post("/", (req, res, next) =>{
const newBounty= new Inventory(req.body)
newBounty.save((err, savedBounty)=>{
if(err){
  res.status(500)
  return next(err)
}
return res.status(201).send(savedBounty)
})
})

inventories.delete('/:bountyId', (req, res, next)=>{
 Inventory.findOneAndDelete({_id: req.params.bountyId}, (err, deletedItem)=>{
  if(err){
    res.status(500)
    return next(err)
  }
  return res.status(200).send(`successfully deleted bounty from the database`)
 })
})

inventories.put('/:bountyId',(req, res, next)=>{
Inventory.findByIdAndUpdate(
  {_id:req.params.bountyId},//find this one to update
  req.body,//update the object with this data
  { new:true },// send back updated version
  (err, updatedBounty) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(updatedBounty)
  }
)
})


module.exports=inventories