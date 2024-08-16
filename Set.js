const set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(1);

set.forEach((x) => console.log(x));

console.log(set.size);

console.log(set);

console.log(set.delete(2));

console.log(set);

console.log(set.has(2));

console.log(set.size);

set.clear();

console.log(set);
