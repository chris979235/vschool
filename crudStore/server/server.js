const express=require("express")
const crud=express()
const morgan=require("morgan")
const mongoose=require('mongoose')
crud.use(morgan('dev'))//logs reaquest to console

//connect to database
mongoose.connect('mongodb://localhost:27017/crud',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify: false,
  },
  ()=> console.log("connected to db ")
  )


crud.use(express.json())
crud.use("/routes/inventory", require('./routes/inventoryRoute.js'))//looks for request body and turns into req.body

crud.use((err, req, res, next)=>{
console.log(err)
return res.send({errMsg: err.message})
})

crud.listen(9000, () =>{
  console.log('the server is running')
})

//npm install morgan