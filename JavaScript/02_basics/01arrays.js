//array

const myArr = [0,1,2,3,4,5]
const  myArr1 = [36,37,38,39,40 ]
// console.log(Math.max(...myArr));//method to find max or min
// ... => "spreads" the argument into indivisual arguments for the math library

//array operations:
// myArr.push(6)
// myArr.push(7)
// myArr.pop()//last element ko remove kar denge
// myArr.unshift(8)//adds element to the start (0th position)
// // console.log(myArr);
// myArr.shift()//removes starting element
// // console.log(myArr);
console.log(myArr.includes(3));
console.log(myArr.indexOf(3));//returns -1 if given element is not present in the array



const newArr = myArr.join(myArr1)//joins and converts to string
// console.log(newArr);

//slice and splice
const mna1 = myArr.slice(0,3)//3rd index include nahi hoga
console.log("A ",myArr);
console.log(mna1);
console.log("B ",myArr);
const mna2 = myArr.splice(0,3)//3rd index include nahi hoga
console.log(mna2);
console.log("C ",myArr);//splice operation removes the elements out of the initial array






