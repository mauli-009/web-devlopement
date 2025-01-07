let mydate=new Date()
console.log(mydate.toString())
console.log(mydate.toLocaleString())

console.log(typeof mydate)

let mytimestamp=Date.now()
console.log(mytimestamp)
console.log(Math.round(Date.now()/1000))

let newdate=new Date();

console.log(newdate.getDate())
console.log(newdate.getMonth()+1)

//customize 
newdate.toLocaleDateString('default',{
    weekday:"long"
})