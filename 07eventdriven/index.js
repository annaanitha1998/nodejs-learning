const event = require('events')

const eventEmitter = new event.EventEmitter();

eventEmitter.on('hello', () => {console.log('hello world')})

eventEmitter.emit('hello')