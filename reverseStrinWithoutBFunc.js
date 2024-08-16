// function reverseString(str) {
//     return str.split('').reverse().join('')
// }

function reverseString(str) {
    let reverseStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i]
    }
    return reverseStr
}

console.log(reverseString("hello"))