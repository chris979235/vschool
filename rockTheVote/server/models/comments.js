const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  comments: {
    type: String,
    required: true
  },
  votes:{
    type:Number,
    required: false
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})

module.exports = mongoose.model("comment", commentSchema)