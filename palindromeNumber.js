let number = 1011
function isPalindrome(num) {
    if (String(num).split('').reverse().join('') === String(num)) {
        return true
    }
    else {
        return false
    }
}

console.log(isPalindrome(number))