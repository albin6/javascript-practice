function mostFreq(arr) {
    const freqOfNumber = {}

    for (const i of arr) {
        if (freqOfNumber.hasOwnProperty(i)) {
            freqOfNumber[i]++
        }
        else {
            freqOfNumber[i] = 1
        }
    }

    const maxFreq = Math.max(...Object.values(freqOfNumber))

    const mostFreqNumber = Object.keys(freqOfNumber).filter(x => freqOfNumber[x] === maxFreq)

    return mostFreqNumber.map(Number)

}

const nums = [1, 3, 2, 3, 4, 3]

console.log(mostFreq(nums))
