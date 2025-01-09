const marvel_heroes=["iron man","thor","spider_man"];
const dc=["superman","falsh","batman"];

marvel_heroes.push(dc);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);
// const newarr=marvel_heroes.concat(dc);
// console.log(newarr);


// const all_new_heroes=[...marvel_heroes,...dc];

//console.log(all_new_heroes);

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const flat_arr = another_arr.flat(Infinity);
console.log(flat_arr);

//convert into arr;

console.log(Array.from("hitesh"));