function outer(num1) {
    return function(num2) {
        if (num2) {
            return outer(num1 + num2)
        }
        return num1
    }
}

console.log(outer(10)(20)(30)())