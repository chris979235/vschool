const express = require("express")
const issueRouter = express.Router()
const Issue = require('../models/issue.js')

// Get All issues
issueRouter.get("/", (req, res, next) => {
  Issue.find((err, issues) => {
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

// Add new Issue
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


// get one issue by id
issueRouter.get("/issue/:issueId", (req, res, next) => {
  Issue.find({ issue: req.params.issueId }, (err, posts) => {
      if (err) {
          res.status(500);
          return next(err);
      }
      res.status(200).send(posts);
  });
});

// Get all the comments from a specific user, for all issues
issueRouter.get("/user", (req, res, next) => {
  Issue.find({ user: req.user._id }, (err, comments) => {
if(err){
  res.status(500)
  return next(err)
}
return res.status(200).send(comments)
})
})

// Get comments by user id --> will get all the issues for  current user
issueRouter.get("/user/:_id", (req, res, next) => {
  Issue.find({ user: req.user._id, issue: req.params._id }, (err, comments) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(comments)
  })
})


module.exports = issueRouter