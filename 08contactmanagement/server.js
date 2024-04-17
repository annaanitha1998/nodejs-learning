const express = require('express')
const errorHandler = require('./middleware/errorhandler')
const dotenv = require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use('/api/contacts', require('./routes/contact'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server listening to port ${PORT}`))