const arr=[0,1,2,3,4,"mauli"];
console.log(arr);
console.log(arr[0]);

//const my =new Array["iron","spider"]
//array methods

arr.push(6);
console.log(arr)
arr.unshift(0)
console.log(arr)
arr.shift();

console.log(arr);

console.log(arr.includes(9)); //is 9 included in the arr

console.log(arr.indexOf(4));

const newarr=arr.join() //convert arr into the strings

console.log(arr);
console.log(newarr);

console.log("a",arr);

const my1=arr.slice(1,3);
console.log(my1);

//diff between slice and splice-> splice removes a poryion that given in the input and slice takes only the portion that given in the input
