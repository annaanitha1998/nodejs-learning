// let a = null
// // (!a) ? console.log('No value') : console.log('Has Value')
// console.log(a)

const { resolve } = require("path")

// for(let i=0;i<10;i++) {
//     setTimeout(() => console.log(i))
// }

const user = {
    title: 'Anitha',
    sayName: function() {
        console.log(this.title)
    }
}

setTimeout(() => user.sayName(), 3*1000)

//Small code snippet for promises
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Data fetched sucessfully'), 1000) 
    })
}

async function fetchDataAsync() {
    try {
        const result = await fetchData()
        console.log(result)
    } catch(error) {
        console.log(error)
    }
}