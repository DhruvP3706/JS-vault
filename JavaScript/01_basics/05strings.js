const name = "Dhruv"
const age = 18
// console.log("hello my name is "+name+"and my age is "+age)//outdated and not prefered syntax
console.log(`hello my name is ${name} and my age is ${age}`);//much prefered in modern coding
const gameName = new  String("TazzTic_03") //use this to declare strings 
console.log(gameName.__proto__);//to view object
console.log(gameName.length);
console.log(gameName.toUpperCase());
const subString = gameName.substring(0,7)//used to create a segment of the string
console.log(`new game name is ${subString}`);
const sliceGameName = gameName.slice(-10,7)
console.log(sliceGameName);
/*
if we use negative values in substring it will just ignore it and start from 0
*/
const newString = new String("    Dhruv    .")
console.log(newString.trim());//unnecessary spaces nikaal deta hai start aur end ke

const url = "https://Dhruv.com/Dhruv%20Pekhale"
//browser automatically converts spaces to %20
console.log(url.replace('%20','-'));//now url is usable in code

console.log(url.includes('Dhruv'));//gives true if Dhruv is present in the string

console.log(gameName.split('_')); //splits the strings which are seperated by '_'
//split function creates an array

const abc = "abc-defg-hi-jklmn"
console.log(abc.split('-',2));
console.log(abc.split('-',3));

//to reverse a sentence:
const temp = abc.split('-')
console.log(temp);
const revTemp = temp.reverse()
const revAbc = revTemp.join('-')
console.log(revAbc);
//:to reverse a sentence






















