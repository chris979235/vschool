const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
  issues: {
    type: String,
    required: true
  },
  downvote:{
    type:Number,
    default:0
  },
  upvote:{
    type:Number,
    default:0
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "comment",
    required: true
  }
})

module.exports = mongoose.model("Issue", issueSchema)