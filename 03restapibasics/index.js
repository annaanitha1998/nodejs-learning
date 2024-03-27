const express = require('express')
const mongoose = require('mongoose')

const userRouter = require('./routes/user')

const connectMongoDB = require('./connection')

const app = express()
const port = 8000

connectMongoDB('mongodb://localhost:27017/anitha-nodejs')

app.use(express.urlencoded({extended: false}))

app.use('/api/user', userRouter)


app.listen(port, () => {console.log(`Server listening in port number ${port}`)})