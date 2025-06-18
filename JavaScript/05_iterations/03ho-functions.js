//higher order loops

//array specific

//for of:

// ["","","",""]
// [{},{},{},{}]

const arr = [1,2,3,4,5]

/*
for (const element of object) {
    
}
*/

for (const num of arr) {
    // console.log(num);
}//apne aap pata kar lega sab aur print kar dega

const greetings = "hello world!"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
}//prints each character of the given string

//Maps
//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const map = new Map()
map.set('IN',"India")
map.set("USA","Unites States of America")
map.set("Fr","France")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    'game1':'NFS',
    'game2':'Valorant'
}

for (const [key,value] of myObject) {
    console.log(key, ':-', value);
}//TypeError: myObject is not iterable

//forof can iterate maps but cannot iterate objects 