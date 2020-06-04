const express=require('express')
const bounties=express.Router()
const Bounty= require("../model/hunter.js")

bounties.get("/", (req, res, next) =>{
  Bounty.find((err, bounties)=>{
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(bounties)
  })
})

// bounties.get('/:bountyId', (req, res, next)=>{
//   const bountyId=req.params.bountyId
//   if(!foundId){
//     const error= new Error(`the item with id ${bountyId} not found`)
//     res.status(500)
//     return next(error)
//   }
//   res.status(200).send(foundId)
// })

bounties.get('/search/type', (req, res, next)=>{
  Bounty.find({type:req.query.type}, (err, bounties)=>{
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(bounties)
  })
  })

bounties.post("/", (req, res, next) =>{
const newBounty= new Bounty(req.body)
newBounty.save((err, savedBounty)=>{
if(err){
  res.status(500)
  return next(err)
}
return res.status(201).send(savedBounty)
})
})

bounties.delete('/:bountyId', (req, res, next)=>{
 Bounty.findOneAndDelete({_id: req.params.bountyId}, (err, deletedItem)=>{
  if(err){
    res.status(500)
    return next(err)
  }
  return res.status(200).send(`successfully deleted bounty from the database`)
 })
})

bounties.put('/:bountyId',(req, res, next)=>{
Bounty.findByIdAndUpdate(
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


module.exports=bounties