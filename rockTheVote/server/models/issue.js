const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
  issue: {//issue is the title
    type: String,
    required: true
  },
  description:{
    type:String,
    required:true
  },
  downvote:{
    type:Number,
    default:0
  },
  upvote:{
    type:Number,
    default:0
  },
  comments: {
    type: [Schema.Types.ObjectId],
    ref: "Comment",
    default: []
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})

module.exports = mongoose.model("Issue", issueSchema)