// function largestWord(str) {
//     const wordArray = str.split(' ')
//     let wordLenCount = {}
//     wordArray.forEach(word => {
//         if (wordLenCount.hasOwnProperty(word)) {
//             console.log('has property')
//         } else {
//             wordLenCount[word] = word.length
//         }
//     });
//     const maxWordLen = Math.max(...Object.values(wordLenCount))

//     const word = Object.keys(wordLenCount).filter(x => wordLenCount[x] === maxWordLen)

//     return word
// }

function largestWord(str) {
    const wordArray = str.split(' ')

    let largestWord = ''

    for (const word of wordArray) {
        if (word.length > largestWord.length) {
            largestWord = word
        }
    }
    
    return largestWord
}

console.log(largestWord('helloworld hi welcome all'))