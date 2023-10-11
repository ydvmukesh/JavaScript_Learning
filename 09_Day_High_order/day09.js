// const arr = [1, 2, 3, 4, 5];

// for (let num of arr) {
//     console.log(num);
// }

// forof
let greeting = 'Hello World';
for (let greet of greeting) {
    if (greet == ' ') {
        continue;
    }
    // console.log(greet);
}

/*-------------------------------------------------------------------------------*/

// map
// map is not itratable 
const map = new Map();
map.set("IN", "India");
map.set("USA", "United State");
map.set("Fr", "France");
map.set("IN", "India"); // map no print duplicate and same order as input

// console.log(map);
for (const [key, value] of map) // destructure of array/map using kee
{
    // console.log(key, ':-', value);
}

/*-------------------------------------------------------------------------------*/

// forin
// in object we use forin loop
const myObject = {
    Name: "Mason",
    LastName: "HTML"

}
for (const obj in myObject) {
    console.log(`Key : ${obj}  |  Value: ${myObject[obj]}`);
}


/*-------------------------------------------------------------------------------*/

// forEach

//  default not Return any value
const coding = ['java', 'html', 'css', 'wordpress', 'javascript'];


coding.forEach(function(item) {
    console.log(item);
});

// arrow 
coding.forEach((item) => {
    console.log(item);
});

// forEach have more parameters
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});


// -------------------------------------------------------------

const myCode = [{
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "React",
        languageFile: "jsx"
    },
    {
        languageName: "Java",
        languageFile: "java"
    }
]
myCode.forEach((item) => {
        console.log(item.languageName);
    })
    /*___________________________________________________________________________*/


// filter

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNum.filter((num) => num > 5);
// console.log(newNum);

// forEach

const newNum = [];
myNum.forEach((num) => {
    if (num > 5) {
        newNum.push(num);
    }

});
console.log(newNum);


/*___________________________________________________________________________*/


// map

const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addNew = newNums.map((num) => {
    return num + 10

});
console.log(addNew);


// reduce 
//  this have two value accumulator(hold result value after once initial ) and current value

const numbers = [1, 2, 3, 4];
let totalOfNumber = numbers.reduce((acc, curr) => {
    console.log(`acc ${acc} curr ${curr}`);
    return acc + curr;
}, 0);

console.log(totalOfNumber);