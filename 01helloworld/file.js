const fs = require('fs')

// fs.writeFileSync('./test.txt', 'Hi Anitha')

// fs.writeFile('./test.txt', 'Hi Anitha', (err) => {})
console.log(1);
// const data = fs.readFileSync('./dummy.txt','utf-8')
// console.log(data)
fs.readFile('./dummy.txt','utf-8', (err, data) => {
    if(err) console.log("Error", err)
    else console.log(data)
})
console.log(2);
console.log(3);



// fs.appendFileSync('./dummy.txt', `\nAnimaai`)

// fs.unlinkSync('./test.txt')

// console.log(fs.statSync('./dummy.txt'))