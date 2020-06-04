const mongoose=require('mongoose')
const Schema=mongoose.Schema

//bounty blueprint
const bountySchema = new Schema({
  firstName: {
    type:String,
    required: truec
  },
  lastName: {
    type:String,
    required: true
  },
  living:{
    type:String,
    required:true
  },
  bounty: {
   type: Number,
   required: true
  },
  type: {
    type:String,
    required: true
  },
})

module.exports=mongoose.model("bounty", bountySchema)
