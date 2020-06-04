const express=require("express")
const app=express()
const morgan=require("morgan")
const mongoose=require('mongoose')
app.use(morgan('dev'))//logs reaquest to console

//connect to database
mongoose.connect('mongodb://localhost:27017/db-methods',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify: false,
  },
  ()=> console.log("connected to db ")
  )


app.use(express.json())
app.use("/books", require('./routes/bookRouter.js'))//looks for request body and turns into req.body
app.use("/author", require('./routes/authorRouter.js'))

app.use((err, req, res, next)=>{
console.log(err)
return res.send({errMsg: err.message})
})

app.listen(9000, () =>{
  console.log('the server is running')
})

//npm install morgan