function say_my_name(){
    console.log("mauli dudhat");
}
say_my_name();
let cnt=0;
for(let i=0;i<3;i++){
    say_my_name();
    cnt++;
}

if(cnt>1){
    console.log("yes");
}

function add_two (  a , b){
   // console.log(a+b);
    return a+b

}
const result=add_two(1,3);
console.log(result);

function login_user_msg(userName="sam"){
    return `${userName} just logged in`
}

console.log(login_user_msg("mauli"))
console.log(login_user_msg())