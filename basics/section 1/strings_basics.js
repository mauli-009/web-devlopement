const name="mauli";

const repo=50

console.log(name+repo+"value");


console.log(`hello my name is ${name} and my rpo count is ${repo}`)

const gameName=new String('mauli');
console.log(gameName[0]);
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('u'))

const newstring =gameName.substring(0,2);
console.log(newstring)
const another=gameName.slice(-3,2)
console.log(another)

const newstrin1="    mauli   ";

console.log(newstrin1.trim());

const temp="https://mauli.com/maulii%20dudhat"

temp.replace('%20','_');
console.log(temp);

//convert to array

const temp2="my name is mauli";

console.log(temp2.split(' '))