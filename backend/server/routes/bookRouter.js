const express=require('express')
const bookRouter=express.Router()
const Book=require('../model/book.js')

//get all
bookRouter.get('/', (req,res,next)=>{
  Book.find((err, book)=>{
    if (err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(book)
  })
})

//get by author
bookRouter.get('/:authorID', (req,res,next) => {
Book.find({author: req.params.authorID}, (err,books)=>{
    if (err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(books)
  })
})

//add new book
bookRouter.post('/:authorID',(req,res,next)=>{
  console.log(req.params )
  req.body.author=req.params.authorID
  const newBook= new Book (req.body)
  newBook.save((err,savedBook)=>{
    if (err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedBook)
  })
})

//like a book
bookRouter.put('/like/:bookID',(req,res,next)=>{
Book.findOneAndUpdate(
  {_id: req.params.bookID},//find the book that has this id
  {$inc: {likes:1}},// increment its like propertires by 1
  {new:true},//send us back the new one
  (err,updatedBook)=>{//handle error
    if (err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(updatedBook)//sending back updated book
  }
)
})

//get authors by search term


module.exports=bookRouter