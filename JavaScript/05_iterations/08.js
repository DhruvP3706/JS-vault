//reduce

const myNums = [1,2,3]

// const myTotal = myNums.reduce((acc, currVal) => {
//     console.log(`acc: ${acc}, currVal: ${currVal}`);
//     return acc + currVal
// }, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'js course',
        price: 2999
    },
    {
        itemName: 'python course',
        price: 999
    },
    {
        itemName: 'data science course',
        price: 12999
    }
]

const total = shoppingCart.reduce((acc, curr) => {return acc + curr.price},0)
console.log(`your order total is: ${total}`);
