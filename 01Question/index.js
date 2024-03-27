const express = require('express')
const jwt = require('json-web-token')

const security_token = 'ANITHA123'

const app = express()

//middleware
app.use((req, res, next) => {
    const isAuthenticated = jwt.decode(req, security_token)
    if(isAuthenticated.security_token != req.body.security_token) {
        return res.status(401).json({err: 'The user is not authenticated'})
    }
    next()
})

app.get('/api/sum', (req, res) => {
    const firstInput =  req.params.number1;
    const secondInput =  req.params.number2;
    if(!Number(firstInput) || !Number(secondInput) ) {
        return res.status(400).json({err: 'Input should be a number'})
    }
    const sum = firstInput + secondInput
    res.send(`Sum of two numbers is ${sum}`)
})