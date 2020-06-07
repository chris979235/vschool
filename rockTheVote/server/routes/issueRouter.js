const express = require("express")
const issueRouter = express.Router()
const issue = require('../models/issue.js')

// Get All issues
issueRouter.get("/get", (req, res, next) => {
  issue.find((err, issues) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})

issueRouter.put("/upvote/:issueID", (req, res, next) => {
  Issue.findOneAndUpdate(
      {_id: req.params.issueID},
      {$inc: {upvote: 1}},
      {new: true},
      (err, updatedIssue) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedIssue)
      }
    )
}) 
//////
issueRouter.put("/downvote/:issueID", (req, res, next) => {
  Issue.findOneAndUpdate(
      {_id: req.params.issueID},
      {$inc: {downvote: -1}},
      {new: true},
      (err, updatedIssue) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedIssue)
      })
      }
    )

// Add new issue
issueRouter.post("/", (req, res, next) => {
  req.body.user = req.user._id
  const newIssue = new Issue(req.body)
  newIssue.save((err, savedIssue) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedIssue)
  })
})
/////////////////////
// issueRouter.post("/", (req, res, next) => {
//   const newIssue = new Issue(req.body)
//   newIssue.user = req.user._id
//   newIssue.save((err, savedIssue) => {
//   })
//   if(err){
//     res.status(500)
//     return next(err)
//   }
//   return res.status(201).send(savedIssue)
// })


// Delete issue
issueRouter.delete("/:commentID", (req, res, next) => {
  issue.findOneAndDelete(
    { _id: req.params.commentID, user: req.user._id },
    (err, deletedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully delete issue: ${deletedIssue.title}`)
    }
  )
})

module.exports = issueRouter