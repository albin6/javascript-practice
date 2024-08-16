function compress(str) {
  let res = "";

  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      res += str[i] + count;
      count = 1;
    }
  }
  return res;
}

function decompress(str) {
  let res = "";
  for (let i = 1; i < str.length; i += 2) {
    let count = str[i];
    for (let j = 0; j < count; j++) {
      res += str[i - 1];
    }
  }
  return res;
}

const str = "aaabbcabbb";

const compressedSTR = compress(str);

console.log(compressedSTR);

const decompressedSTR = decompress(compressedSTR);

console.log(decompressedSTR);
