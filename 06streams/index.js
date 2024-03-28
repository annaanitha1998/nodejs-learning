const express = require('express')
const fs = require('fs')
const status = require('express-status-monitor')
const zlib = require('zlib')

const app = express()
const PORT = 8000

app.use(status())

fs.createReadStream('./user.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('./user.zip'))

app.get('/', (req, res) => {
    const streams = fs.createReadStream('./user.txt', 'utf-8')
    streams.on('data', (chunk) => res.write(chunk))
    streams.on('end', () => res.end())
    // fs.readFile("./user.txt", (err, data) => {
    //     res.end(data);
    // })
})

app.listen(PORT, () => console.log(`App is listening in the port: ${PORT}`))