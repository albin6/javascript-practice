const map = new Map();

map.set("name", "Albin");
map.set(1, "class");
map.set(true, "isActive");

console.log(map.get("name"));
console.log(map.get(1));

console.log(map.has("name"));

map.delete("name");

console.log(map)

console.log(map.size)

map.clear()

console.log(map)