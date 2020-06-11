const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  comments: {
    type: String,
    required: true
  },
  issue: {
    type: Schema.Types.ObjectId,
    ref: 'Issue'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = mongoose.model("Comment", commentSchema)