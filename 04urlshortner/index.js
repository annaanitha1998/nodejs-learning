const express = require('express')
const urlRouter = require('./routes/url')
const connectMongoDB = require('./connection')
const URL = require('./models/url')

const app = express()
const PORT = 8000

connectMongoDB('mongodb://localhost:27017/url-shortner')

app.use(express.json())

app.use('/api/url', urlRouter)

app.get('/:shortId', (req, res) => {
    const shortId = req.params.shortId;
    const entry = URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            history: {
                timeStamp: Date.now()
            }
        }
    })
    res.end(entry.redirectUrl) 
})

app.listen(PORT, () => console.log(`App is listening in the port ${PORT}`))