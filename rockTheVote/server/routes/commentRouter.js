const express = require("express")
const commentRouter = express.Router()
const Comment = require('../models/comments.js')

// Get All comments
commentRouter.get("/", (req, res, next) => {
  Comment.find((err, comments) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(comments)
  })
})

commentRouter.get('/issues/:issueId', (req,res,next) => {
  Comment.find({ issue: req.params.issueId}, (err, issues)=>{
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})

// Get all the comments from all users for a specific issue
commentRouter.get("/:_id", (req, res, next) => {
  Comment.find({ comments: req.params._id }, (err, comments) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(comments)
  })
})




// Add new Comment
commentRouter.post("/", (req, res, next) => {
  req.body.user = req.user.username
  const newComment = new Comment(req.body)
  newComment.save((err, savedComment) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedComment)
  })
})



// Delete Comment
commentRouter.delete("/:commentId", (req, res, next) => {
  Comment.findOneAndDelete(
    { _id: req.params.commentId},
    (err, deletedComment) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(deletedComment)
    }
  )
})



module.exports = commentRouter