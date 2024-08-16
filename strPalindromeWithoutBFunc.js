function isPalindrome(str) {
    for (let i = 0, j = str.length -1; i < str.length/2; i++, j--) {
        if (str[i] !== str[j]) {
            return false
        }
    }
    return true
}

console.log(isPalindrome('aba'))

console.log(isPalindrome('ab'))