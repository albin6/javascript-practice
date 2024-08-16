// let str = "hello"
let str = "hello"

if (str.split('').reverse().join('') === str) {
    console.log("palindrome")
}

const arr = Array.from(str).reverse().join('')
console.log(arr)

1 | 2 // 1 => 01, 2 => 10 = 11 => 3

1 || 2