// const http = require('http');
// const fs = require('fs');
// const url = require('url');

// const myServer = http.createServer((req, res) => {
//     const parsedUrl = url.parse(req.url, true)
//     fs.appendFile('./log.txt', `\n${req.method} Request recieved for ${req.url} at ${Date.now()}`, (err, data) => {
//         if(err) console.log('Error', err)
//         else {
//             console.log(parsedUrl)
//             res.end('Welcome to nodeJs learning')
//         }
//     })
    
// })

// myServer.listen(8000, () => console.log('Connection established'));

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.end("Welcome to Home page")
})

app.get('/about', (req, res) => {
    res.end(`Welcome to About page: ${req.query.name || 'Anitha'}`)
})

app.listen(8000, () => console.log('Connection created'))