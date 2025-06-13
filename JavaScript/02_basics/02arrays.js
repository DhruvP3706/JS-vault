const marvelHeroes = ["thor", "ironMan", "spiderman"];
const dcHeroes = ["superman", "batman", "flash"];
marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);//array in array
// console.log(marvelHeroes[3][1])//to get data from the array in array
marvelHeroes.pop(dcHeroes)
const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes);
/*
push operation makes changes in the same array
concat operation returns a new array
so to use concat we need to store it manually
*/

//spread operation:
const allHeroes1 = [...marvelHeroes,...dcHeroes]//works just like concat
// console.log(allHeroes1);

const arr = [1,2,[3,4,5],6,[7,[8,9]]]
const arr_ = arr.flat(Infinity)
// console.log(arr_);

// console.log(Array.isArray("Dhruv"));
// console.log(Array.from("Dhruv"));//convrts string to array
console.log(Array.from({name: "Dhruv"}));//interesting
const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1,score2,score3));




