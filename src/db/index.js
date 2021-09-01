const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const userRouter = require('../routers/user')
const taskRouter = require('../routers/task')

const app = express()
const port = process.env.PORT || 3000


app.use(morgan('dev'));
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

mongoose.connect('mongodb://127.0.0.1:27017/task-app',{
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false,
useCreateIndex: true
})



app.listen (port, () => {
    console.log('Server is up on port ' + port)
})