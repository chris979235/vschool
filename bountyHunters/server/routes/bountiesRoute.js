const express=require('express')
const bountiesRoute=express.Router()
const { v4: uuid } = require('uuid');

const ForceUser=[
  {firstName:"Luke", lastName:'Skywalker', living:'alive', bounty:2500000, type:'jedi knight', _id:uuid()},
  {firstName:"Darth", lastName:'Vader', living:'alive', bounty:999999999, type:'sith lord', _id:uuid()},
  {firstName:"yo", lastName:'da', living:'alive', bounty:1000000000000, type:'jedi master', _id:uuid()},
  {firstName:"emperror", lastName:'palpatine', living:'dead', bounty:"claimed", type:'sith lord', _id:uuid()},
  {firstName:"obi-wan", lastName:'kenobi', living:'dead', bounty:'claimed', type:'jedi master', _id:uuid()},
  {firstName:"mace", lastName:'windu', living:'alive', bounty:23515312, type:'jedi master', _id:uuid()},
  {firstName:"count", lastName:'dooku', living:'alive', bounty:345435345, type:'sith lord', _id:uuid()}
]

bountiesRoute.get("/", (request, response) =>{
  console.log("fired")
  console.log(2121,ForceUser)
  response.send(ForceUser)
})

bountiesRoute.get('/:bountyId', (req, res)=>{
  const bountyId=req.params.bountyId
  const foundId=ForceUser.find(forcey => forcey._id===bountyId)
  res.send(foundId)
})
///////////////
bountiesRoute.delete('/:bountyId'), (req, res)=>{
  const delBountyId=req.params.bountyId
  ForceUser.filter(forcey => forcey._id===delBountyId
  )}
///////
// bounties.put('/:bountyID'),(req, res)=>{
  
// }

bountiesRoute.post("/", (req, res) =>{
  const newbounty=req.body
  newbounty._id=uuid()
  ForceUser.push(newbounty)
console.log(req)
res.send(`succusfully added new bounty to the database`)
})

module.exports=bountiesRoute