//const tinderUser = new Object()//singleton object
const tinderUser = {}; //nonsingleton objec
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

const regularUser = {
  fullName: {
    userFullName: {
      firstName: "Dhruv",
      lastName: "Pekhale",
    },
  },
};
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
// const obj3 = {obj1,obj2}
const obj3 = Object.assign({}, obj1, obj2);
//{} acts as a source, nahi toh saare objects obj1 me store ho jaate
// console.log(obj3);
const obj4 = { ...obj1, ...obj2 }; //easiest
// console.log(obj4)

const users = [
  {
    id: 1,
    email: "dhruv@gmail.com",
  },
  {
    id: 1,
    email: "dhruv@gmail.com",
  },
  {
    id: 1,
    email: "dhruv@gmail.com",
  },
];

// console.log(users[1].email);
// console.log(Object.keys(tinderUser)); //returns an array
// //useful for loops
// console.log(Object.values(tinderUser)); //returns an array
// //useful for loops
// console.log(Object.entries(tinderUser)); //arrays in array ["key","vaLue"]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//remember the hasOwnProperty syntax





//********************************************







const course = {
  courseName: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

const { courseInstructor: CI } = course; //destructuring of objects
console.log(CI);

//JSON:
// {
//   name: "Dhruv",
//   courseName: "js in hindi",
//   price: "free"
// }

//use json formatter to debug complicated apis
//get random apis from here: 'randomuser.me'
