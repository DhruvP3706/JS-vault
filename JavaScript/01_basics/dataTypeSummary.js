//#Primitive
// string, number, boolean, null, undefined, symbol, bigint

const ID = Symbol('123')
const anotherID = Symbol('123')
console.log(ID == anotherID);
console.log(ID);
console.log(anotherID);
// let bigNumber = 3476503497560239785623798456n //used n at end to convert number to bigint

//#Reference (non primitive)
// arrays, Objects, functions
 
const arr = [1,2,3,4];
let myObject = {
    name : "Dhruv",
    age : 18,
}
let myFunction = function(){
    console.log("Hello World");
}
/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Stack vs Heap memory
//Stack memory used for primitive dataTypes, Heap memory used for nonPrimitive dataTypes

let name1 = "Dhruv"
let name2 = name1
name2 = "Hitesh"
console.log("name1", name1);
console.log("name2", name2);//in primitive dataTypes a copy of name1 was given to name2

let user1 = {
    name : "User1",
    email : "User1@gmail.com"
}
let user2 = user1 //in heap memory user2 is made to point at the same memory as user1 ka data
user2.email = "somethingElse@gmail.com"
console.log(user1.email);
console.log(user2.email);//user1 ka bhi value change ho gaya





