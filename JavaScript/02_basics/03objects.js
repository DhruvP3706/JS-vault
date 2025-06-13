//singleton
//literals se singleton nahi banta hai
//constructor se singleton banta hai

//object literals
const mySym = Symbol("key1")

const JSUser = {
    name: "Dhruv",
    "full name": "Dhruv Nitin Pekhale",
    age: 18,
    [mySym]: "myKey1",
    location: "Nashik",
    email: "dhruv@google.com",
    isLoggedIn : false,
    LastLoginDays: ["Monday","Saturday"]
}

// console.log(JSUser.email);
// console.log(JSUser["email"]);
// console.log(JSUser["full name"]);//cannot access full name using JSUser.full name
// //to use symbols in object, we have to use [symbol_name]: "symbol"
// console.log(JSUser[mySym]);
// console.log(typeof JSUser[mySym]);

JSUser.email = "dhruv@chatgpt.com"
// Object.freeze(JSUser)//freezes the object means you cant change anymore values of that object
// JSUser.email = "dhruv@yahoo.com"
// console.log(JSUser);//symbol gets printed last
//this is intentional behaviour by most JS engines
   
JSUser.greetings = function(){
console.log(`Hello JS user, ${this.name}`);
}
JSUser.greetings()






