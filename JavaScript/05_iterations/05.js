//for each loop
//sabse zyada use hota hai

const coding = ["js", "rb", "java", "python", "cpp"]

//kuch loops array ke properties me integrated hote hai

coding.forEach(element => {
    // console.log(element);
});

function printMe(item) {
    console.log(item);
}

// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})
//foreach => element, index, array

const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js',
    },
    {
        languageName: 'java',
        languageFileName: 'jav',
    },
    {
        languageName: 'python',
        languageFileName: 'py',
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})