const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
  issues: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})

module.exports = mongoose.model("issue", issueSchema)