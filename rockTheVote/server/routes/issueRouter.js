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



issueRouter.get("/issue/:issueId", (req, res, next) => {
  Issue.find({ issue: req.params.issueId }, (err, posts) => {
      if (err) {
          res.status(500);
          return next(err);
      }
      res.status(200).send(posts);
  });
});




module.exports = issueRouter