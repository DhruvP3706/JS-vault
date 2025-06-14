//IIFE - Immediately Invoked Function Expressions

// function chai(){
//     console.log(`DB is connecetd`);
// }
// chai()

// IIFE:

(function chai(){
    //named iife
    console.log(`DB is connecetd`);
})();//immediately invoked or executed
//(function)()
//global scope ke pollution ko hataane ke liye humne iife ka use kiya

((name) => {
    //simple iife
    console.log(`db connected ${name}`);
})('dhruv');

//; is required after ()() as it does not know ehre to stop the execution