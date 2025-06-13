const score = 100
console.log(score)

const newNum = new Number(50)
console.log(newNum);//gives a unique looking output
console.log(newNum.toFixed(2));
const num1 = 23.8966
console.log(num1.toPrecision(3));
const num2 = 123.8966
console.log(num2.toPrecision(3));
const num3 = 1123.8966
console.log(num3.toPrecision(3));//converts to exp
console.log(typeof num1.toPrecision(3));//toPrecision converts number to string
const num4 = 10000000
console.log(num4.toLocaleString('en-US'));//converts to US standards
console.log(num4.toLocaleString('en-IN'));//converts to Indian standards
//by default it will convert to the standard in which your browser is set in

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//######################maths#########################
console.log('############ math outputs:############');

console.log(Math);//object with many properties
// console.log(Math.abs(-4));
// console.log(Math.round(3.4));
// console.log(Math.round(3.6));
// console.log(Math.ceil(3.001));
// console.log(Math.floor(3.999));
// console.log(Math.min(1,2,3,4));
// console.log(Math.max(1,2,3,4));

// console.log(Math.random().toFixed(2));//random value between 0 and 1
//toFixed is just to stop the decimal places at 2
// console.log((Math.random()*10) +1);//random values upto 10 with minimum num possible = 1

//to get random numbers within a given range:
const minimum = 10
const maximum = 20
console.log(Math.floor(Math.random()*(maximum-minimum+1))+minimum);



















