const sentences = ["Hello world", "How are you", "Goodbye"]

const res = sentences.map(sentence => sentence.split(' '))
const resOne = res.flat(1)

const result = sentences.flatMap(sentence => sentence.split(' '))

console.log(resOne)
console.log(result)
console.log(sentences)