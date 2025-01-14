//for of loops
// const arr=[1,2,3,4,5];
// for(const val of arr){
//     console.log(val);
// }

// const greetings ="hello mauli";
// for(const greet of greetings){
   
//     console.log(greet);
// }
// const map=new Map()
// map.set('IN',"india")
// map.set('fr',"france")
// map.set('usa',"usa")
// // console.log(map);
// for(const [key,values] of map){
//     console.log(key,':-',values)
// }


// const myObject={
//     game:'nfs',
//     game2:'spiderman'
// }

//we can not ise for of loops on the object here we use for in loops

// for(const keyy in myObject){
//     console.log(keyy,myObject[keyy]);
// }


const program=['js','java','cpp','python'];
// for(const key in program){
//     console.log(key);
// }   

// program.forEach(  function (item){
//     console.log(item)
    
// })

// program.forEach((item)=>{
//     console.log(item)
// })

// program.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

const myCode=[
    {
        fileName:"javascript",
        file:'js'


    },
    {
        fileName:"python",
        file:'py'


    },
    {
        fileName:"java",
        file:'j'


    },

]
myCode.forEach((item)=>{
    console.log(item.fileName)
})