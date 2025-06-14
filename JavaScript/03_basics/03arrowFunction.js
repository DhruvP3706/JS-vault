const user = {
    username: "Dhruv",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);//this is used for current context
        console.log(this);//prints the current context
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()//is working because of this function

// console.log(this);//empty

// function chai(){
//     let username = "Dhruv"
//     console.log(this.username);//undefined
// }
// chai()

// const chai = function(){
//     let username = "dhruv"
//     console.log(this.username);//undefined
// }

//arrow function:

const chai = () => {
    let username = "dhruv"
    console.log(this.username);//undefined
}
// chai()

//arrow function hota kya hai:

//explicit returns:
const addTwo = (num1,num2) => {
    return num1 + num2
}

//implicit returns for one lined functions: 
// const add2 = (num1,num2) => (num1 + num2)
// console.log(add2(3,4));

/*
{} use kiya toh return likhna padega, () likha toh return nahi likhna padega
--this concept is used a lot in REACT
*/

//to get object returns:
const add2 = (num1,num2) => ({username: "dhruv"})
console.log(add2(1,2));


