const mongoose = require('mongoose')

const connectMongoDB = (url) => {
    mongoose.connect(url).then(()=> console.log('MongoDB connection is established'))
}

module.exports = connectMongoDB