console.log("2">0); //JS automatically converts string to number
console.log("02">0); //both will give true output

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true
/*
equality check == and comparisons <,>,<=,>= work differently
comparisons convert null to an integer which acts as 0
hence output is coming as false, false, true
*/

console.log(undefined == 0);//false
console.log(undefined >= 0);//kuch bhi operator lagao humesha false dega

console.log("2" == 2);//true
console.log("2" === 2);//=== also check the dataType, hence false









