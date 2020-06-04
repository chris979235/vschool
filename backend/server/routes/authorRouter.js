const express=require('express')
const authorRouter=express.Router()
const Author=require('../model/author.js')

authorRouter.get('/', (req,res,next)=>{
  Author.find((err, author)=>{
    if (err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(author)
  })
})

authorRouter.post('/',(req,res,next)=>{
  const newAuthor= new Author (req.body)
  newAuthor.save((err,savedAuthor)=>{
    if (err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedAuthor)
  })
})

//get author by search term
authorRouter.get('/search',(req,res,next)=>{
  const {author}=req.query
  // { <field>: { $regex: /pattern/, $options: '<options>' } }
  const pattern= new RegExp(author)  //author//
  Author.find(
    { name: {$regex: pattern, $options:'i'} }, 
  (err,authors)=>{
    if (err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(authors)
  })
})
 
module.exports=authorRouter