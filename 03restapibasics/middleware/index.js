const express = require('express')

const app = express()



app.use((req, res, next) => {
    req.userName = 'Anitha'
    console.log('Hi From middleware 1')
    next()
})