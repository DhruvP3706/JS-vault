function sayMyName(){
    console.log("D");
    console.log("h");
    console.log("r");
    console.log("u");
    console.log("v");
}

// sayMyName()

function addTwoNumbers(num1, num2){
    console.log("Dhruv");
    return num1 + num2
}

// const result = addTwoNumbers(3,4)
// console.log("result:",result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());//this passes username = undefined


//rest operator:
function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000));

function calculateCartPrice1(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice1(100,200,500,1000,2000));
//100 aur 200 chale gaye val1 aur val2 me

const user = {
    username: "Dhruv",
    price: 999
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)

const myNewArr = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([100,200,300]));




 