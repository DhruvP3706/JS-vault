//DATES

let myDate = new Date()//myDate == current date
// console.log(myDate);//gives a non readable output
// console.log(myDate.toString());//gives a slightly readable output
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toJSON());//internally calls toISOString
// console.log(myDate.toISOString());
let myCreatedDate = new Date(2024, 0, 9, 16, 50, 16)//year,month,day,hour(24),min,sec
// console.log(myCreatedDate.toLocaleString());//months start from 0
myCreatedDate = new Date("2024-01-9")//yyyy-mm-dd
// console.log(myCreatedDate.toLocaleDateString());
myCreatedDate = new Date("1-9-2024")//mm-dd-yyyy
// console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()//returns milliseconds from jan-1-1970 till now
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());//gives us milliseconds passed from jan-1-1970 and that date

//TO CONVERT ms into seconds:
console.log(Math.floor(Date.now() / 1000));

/*
you can also get specific values of a date by using getHour,getDay,getMonth etc
*/

const newDate = new Date()
console.log(newDate.toLocaleString('default',{
    weekday: "long",
}))
console.log(newDate.getDay());





