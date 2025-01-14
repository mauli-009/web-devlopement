
const program=['js','java','cpp','python'];

// const values=program.forEach((item)=>{
//     console.log(item)
//     return item;
// })
// console.log(values);

//for each dont return values from the function

const nums=[1,2,3,4,5,6,7,8,9];
// const newnums=nums.filter((num)=>{
//     return num>5;
// })
// console.log(newnums)
// const newname=[]
// nums.forEach((num)=>{
//     if(num>4){
//         newname.push(num)

//     }

// })
// console.log(newname);



// const temp=nums.map((num)=>{
//     return num+10;
// })
// console.log(temp);


//reduce
// const total=nums.reduce(function(acc,curr){
//     return acc+curr
// },0)
// console.log(total);

const obj=[
    {
        course:"js",
        price:200,
    },

    {
        course:"ps",
        price:200
    },

    {
        course:"ss",
        price:200
    },
]

const total=obj.reduce((acc,item)=>acc+item.price,0);
console.log(total)

let sum=0;
for(let i=0;i<obj.length;i++){
    sum+=obj[i].price;
}
console.log(sum);

