if(true){
    let a = 10
    const b = 20
    var c = 30
    d = 40
}
// console.log(a);//a is not defined
// console.log(b);//b is not defined
// console.log(c);// var works even when declared in block scopes
// console.log(d);//same as var

//scope ke andar jo value likhi wo bahar nahi jaani chaiye

//js ke andar scopes are considered as a different entity


//nested scope::

function one(){
    const username = "Dhruv"
    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    console.log(website);
    two()
}
// one()//ye karne se username print ho raha hai, par website print nahi ho paa raha hai
//two() ke liye one() hi global hai

if(""){
    const username = "Dhruv"
    if(username === "Dhruv"){
        const website = "youtube"
        console.log(username,website);
    }
    // console.log(website);//nahi chalega
}
// console.log(username);//nahi chalega


//###############interesting#################
// console.log(addOne(5))//this will work

function addOne(num){
    return num + 1
}

// addTwo(5)//declare nahi hua ab tak isiliye cannot access

const addTwo = function(num){
    return num + 2
}

// console.log(addTwo(5));//this will work

