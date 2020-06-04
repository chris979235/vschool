const mongoose=require('mongoose')
const Schema=mongoose.Schema

//bounty blueprint
const inventorySchema = new Schema({
    tents: {
    type:String,
    required: true
  },
    sleepingBags:{
      type:String,
      required:true
    }
})

module.exports=mongoose.model("inventory", inventorySchema)
