const express=require('express')
const bounties=express.Router()
const { v4: uuid } = require('uuid');

const ForceUser=[
  {firstName:"Luke", lastName:'Skywalker', living:true, bounty:2500000, type:'jedi knight', _id:uuid()},
  {firstName:"Darth", lastName:'Vader', living:true, bounty:999999999, type:'sith lord', _id:uuid()},
  {firstName:"yo", lastName:'da', living:true, bounty:1000000000000, type:'jedi master', _id:uuid()},
  {firstName:"emperror", lastName:'palpatine', living:false, bounty:"claimed", type:'sith lord', _id:uuid()},
  {firstName:"obi-wan", lastName:'kenobi', living:false, bounty:'claimed', type:'jedi master', _id:uuid()},
  {firstName:"mace", lastName:'windu', living:true, bounty:23515312, type:'jedi master', _id:uuid()},
  {firstName:"count", lastName:'dooku', living:true, bounty:345435345, type:'sith lord', _id:uuid()}
]

bounties.get("/", (request, response) =>{
  console.log("fired")
  console.log(2121,ForceUser)
  response.send(ForceUser)
})

bounties.get('/:bountyId', (req, res)=>{
  const bountyId=req.params.bountyId
  const foundId=ForceUser.find(forcey => forcey._id===bountyId)
  res.send(foundId)
})
///////////////
bounties.delete('/:bountyId'), (req, res)=>{
  const delBountyId=req.params.bountyId
  ForceUser.filter(forcey => forcey._id===delBountyId
  )}
///////
// bounties.put('/:bountyID'),(req, res)=>{
  
// }

bounties.post("/", (req, res) =>{
  const newbounty=req.body
  newbounty._id=uuid()
  ForceUser.push(newbounty)
console.log(req)
res.send(`succusfully added new bounty to the database`)
})

module.exports=bounties