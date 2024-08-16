function subArraySum(arr, target) {
    const out = []
    if (arr.length < 3) {
        return out
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > target) {
            break
        }
        arr.sort((a, b) => a - b)
        let start = i+1
        let end = arr.length - 1
        while (start < end) {
            const sum = arr[i] + arr[start] + arr[end]
            if (sum === target) {
                out.push([arr[i], arr[start], arr[end]])
                start++
                end--
            } else if (sum < target) {
                start++
            }
            else {
                end--
            }
        }
    }
    return out
}

const arr = [1, 2, 3, 4, 5];

console.log(subArraySum(arr, 9))