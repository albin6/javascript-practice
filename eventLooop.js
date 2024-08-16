
const fs = require('fs')

setImmediate(() => {
    console.log('in setImmediate 1')
})


fs.readFile('newText.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})


setTimeout(() => {
    console.log('in setTimeout 1')
    setTimeout(() => {
        console.log('in setTimeout inside setTimeout 1')
    })
    process.nextTick(() => {
        console.log('in nextick inside setTimeout 1')
    })
    setTimeout(() => {
        console.log('in setTimeout inside setTimeout 1 next to nextTick')
    })
})

process.nextTick(() => {
    console.log('in nextTick 1')
})