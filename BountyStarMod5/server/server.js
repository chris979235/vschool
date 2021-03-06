const express=require("express")
const ForceUser=express()
const morgan=require("morgan")
const mongoose=require('mongoose')
ForceUser.use(morgan('dev'))//logs reaquest to console

//connect to database
mongoose.connect('mongodb://localhost:27017/bountydb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify: false,
  },
  ()=> console.log("connected to db ")
  )


ForceUser.use(express.json())
ForceUser.use("/routes/bounties", require('./routes/bountiesRouter.js'))//looks for request body and turns into req.body

ForceUser.use((err, req, res, next)=>{
console.log(err)
return res.send({errMsg: err.message})
})

ForceUser.listen(9000, () =>{
  console.log('the server is running')
})

//npm install morgan