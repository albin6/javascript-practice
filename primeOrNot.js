function isPrime(num) {
    if (num < 2) {
        return false
    }
    else {
        for (let i = 2; i <= num/2; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true
    }
}

console.log(isPrime(4))