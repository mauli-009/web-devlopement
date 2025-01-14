// const user={
//     userName:"mauli",
//     price:999,

//     welcome:function (){
//         console.log( `${this.userName} ,welcome to the website`)
//     }

// }
// user.welcome();
// user.userName="sam";
// user.welcome();

// function one(){
//     console.log(this);
// }
// one();


const chai=() =>{
    let userName="mauli";
    console.log(userName);
}
chai();


//pure arrow function
// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }
// console .log(addTwo(2,3));

const addTwo=(num1,num2)=>(num1+num2); 

