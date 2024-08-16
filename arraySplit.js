function splitArr(nums) {
  if (nums.length % 2 !== 0) {
    throw new Error("Cannot split array");
  } else {
    const nums1 = [];
    const nums2 = [];
    for (let i = 0; i < nums.length; i++) {
      if (i < nums.length / 2) {
        nums1.push(nums[i]);
      } else {
        nums2.push(nums[i]);
      }
    }
    console.log(nums1);
    console.log(nums2);
  }
}

const arr = [1, 2, 4, 5, 6, 8];

splitArr(arr);

const dataTypeValues = [
  undefined, // undefined
  null, // null
  true, // boolean
  42, // number
  9007199254740991n, // bigint
  "Hello, world!", // string
  Symbol("symbol"), // symbol
  52, 
  -1,
  { key: "value" }, // object
  [1, 2, 3], // array (which is a type of object)
  function () {
    return "I am a function";
  }, // function (which is also a type of object)
];


const nums = dataTypeValues.filter(x => (typeof x === 'number'))


console.log(nums)


// (e)=>{e}
// e=>(e)

??=

num = y ?? x

let num;

num ??= 5

