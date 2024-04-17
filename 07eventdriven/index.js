// let counter = 0;

// function add() {
//     counter += 1;
//     return counter;
// }

const add = function () {
    let counter = 0;
    return () => {
        counter += 1
        return counter
    }
}()

// console.log('Counter value', add());
// console.log('Counter value', add());
// console.log('Counter value', add());

// console.log('Main')

// const fs = require('fs')

// fs.readFile('./basic.ts', 'utf8', () => {
//     setImmediate(function () { console.log('Set Immediate') })

//     setTimeout(function () { console.log('Set Interval') }, 0)

//     process.nextTick(function () { console.log('next tick') })
// })

const getRandomNumber = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(Math.floor(Math.random() * 20))
    }, 1000)
})

const addRandomNumber = async() => {
    const sum = await getRandomNumber() + await getRandomNumber()
    console.log(sum)
}

addRandomNumber()