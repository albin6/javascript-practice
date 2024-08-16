// const fs = require("fs");

// fs.rmdir('new_folder', {recursive : true}, (err) => {
//     console.log(err)
// })

// console.log('folder created')

// const isExixts = fs.existsSync('text.txt')

// console.log(isExixts)

// fs.writeFile('text.txt', 'This is new file', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('file created and writed')
//     }
// })

// fs.rename('text.txt', 'newText.txt', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('file renamed successfully')
//     }
// })



// const fs = require('fs').promises

// fs.readFile('newText.txt', 'utf-8').then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })

// async function readFile() {
//     try {
//         const data = await fs.readFile('newText.txt', 'utf-8')
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// readFile()

// const crypto = require('crypto')

// process.env.UV_THREADPOOL_SIZE = 5

// const start = new Date()
// for (let i = 0; i < 5; i++) {
//     crypto.pbkdf2('myPassword', 'abcd', 1000000, 512,'sha512', () => {
//         console.log(`hash ${i+1} - ${new Date() - start}`)
//     })
// }

