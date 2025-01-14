//singleton
//obeject litrals

const jsUser={
    name:"mauli",
    age:20,
    "full name":"mauli dudhat",
    location:"maharastra",
    email:"mad",
    isLoggedIn:false,
    lastLoginDay:["mon,fri"]
};
//we can acces by two ways
console.log(jsUser.age)
console.log(jsUser["email"])
console.log(jsUser["full name"])

//if we have not change the values 

//Object.freeze(jsUser);

//functions in the jvscript

jsUser.greeting = function () {
    console.log("hello JS user");
};

jsUser.greeting2 = function () {
    console.log(`hello JS user, ${this.name}`);
};

jsUser.greeting(); // Call the greeting method
jsUser.greeting2(); 