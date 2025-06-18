//for loop

for (let i = 0; i <= 5; i++) {
    var element = i;
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {

    // console.log(`outer loop value ${i}`);

    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value ${j} and inner loop ${i}`);
        
    }
    
}

let myArray = ["flash","batman","superman"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

//break and continue:

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`detected 5`);
//         break;
//     }
//     console.log(`value is ${i}`);
// }


for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`detected 5`);
        continue;//restarts loop after iteration before executing remaining lines of code within the loop
    }
    console.log(`value is ${i}`);
}

