const express=require('express')
const toDoExpress=express.Router()
const { v4: uuid } = require('uuid');

   const toDoApp=[
    {name: "yo mama", description: "needs to go hiking", imageUrl: "https://unsplash.com/photos/Yizrl9N_eDA",
    completed: false, _id: uuid()}
]

toDoExpress.get("/", (request, response) =>{
  console.log("fired")
  console.log(2121,toDoApp)
  response.send(toDoApp)
})

toDoExpress.get('/:peopleId', (req, res)=>{
  const bountyId=req.params.peopleId
  const foundId=toDoApp.find(forcey => forcey._id===bountyId)
  res.send(foundId)
})
///////////////
toDoExpress.delete('/:peopleId', (req, res)=>{
  const delBountyId=req.params.peopleId
  const bounty=toDoApp.findIndex(forceBlessed=>forceBlessed._id===delBountyId)
  toDoApp.splice(bounty,1)
  res.send('successfully deleted bounty')
})
///////
toDoExpress.put('/:peopleId',(req, res)=>{
  const bountyId=req.params.peopleId
  const bountyIndex=toDoApp.findIndex(toDoPeople=>toDoPeople._id===bountyId)
  const updatedPeople=Object.assign(toDoApp[bountyIndex], req.body)
  res.send(updatedPeople)
})

toDoExpress.post("/", (req, res) =>{
  const newPerson=req.body
  newPerson._id=uuid()
  toDoApp.push(newPerson)
console.log(req)
res.send(`succusfully added new bounty to the database`)
})


module.exports=toDoExpress