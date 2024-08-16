const bigint1 = 123345678909876532216788n;
const bigint2 = BigInt("23456789997654321545");

// console.log(typeof bigint1, typeof bigint2)

// const result = bigint1 + bigint2 // works
// const result = bigint1 + 10 // type error : cannot mix with other types
// const result = bigint1 + BigInt(20) // works
// const result = Number(bigint1) + 10

// console.log(result)

const symbol1 = Symbol()
const symbol2 = Symbol()

console.log(symbol1 == symbol2)