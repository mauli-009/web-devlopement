function calculate_card_price(...num1){
    return num1

} 
console.log(calculate_card_price(100,200,300));

let arr=calculate_card_price(200,300,400);
console.log(arr);

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

function handle_object(any_object){
    console.log(`userName is ${any_object.name}  and price is ${any_object.price}`)
}
user={
    name:"mauli",
    price:"300"
}
handle_object(user);

const my_new_arr=[200,400,500,600];
function Return_second_val(getarr){
    return getarr[1];
}

console.log(Return_second_val(my_new_arr))