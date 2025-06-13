let score = "33abc"; //string
console.log(1, typeof score);
let convertedScore = Number(score);
console.log(2, typeof convertedScore);
console.log(3 , convertedScore); //NaN means not a number
console.log(4 , typeof NaN); //NaN is a number by dataType

/*
=> (AFTER CONVERSION)

"33" => 33
"33abc" => NaN
true => 1
false => 0
*/

let isLoggedIn = null;
let boolIsLoggedIn = Boolean(isLoggedIn);
console.log(5, boolIsLoggedIn)
console.log(6, typeof boolIsLoggedIn);

//1=>true
//0=>false
//""=>false
//"Dhruv"=>true
//null=>false


//**************operations*************
let value = 3;
let negValue = -value;
console.log(negValue);

let power = 2**3; //means 2^3

console.log(7, "1" + 2);
console.log(8, 1 + "2");
console.log(9, "1" + 2 + 2);
console.log(10, 1 + 2 + "2");
console.log(11,  3 + 4 * 5 % 3);
console.log(12, +true);
console.log(13, +"");









