//switch keys:

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 857

switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case");
        break;
}

//truthy and falsy values:

// falsy values:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values: 
// "0", 'false', " ", [], {}, function(){}



// if (function name() {
// }) {
//     console.log("executed");
// }                                //damnnnnnnnnnn

//Null Coalescing Operator (??): for null and undefined values

let val;
val = 5 ?? 10//default case, first value will be assigned to val
console.log(val);
val = null ?? 10//safety check for null values is done, and val is assigned 10
console.log(val);
val = null ?? undefined ?? 20
console.log(val);

//ternary operator (?)
//condition ? true : false

const val1 = 20
val1 == 20 ? console.log("val1 = 20") : console.log("val != 20");

