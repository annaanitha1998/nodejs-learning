const express = require('express')

const app = express()

app.use("/", (req, res, next) => {
    res.status(200).json({message: 'Contact service'})
})

app.listen(8002, () => console.log('App listening in the post 8002'))