for (let i = 0; i <= 10; i++) {
    let multiPly = i * i;
    console.log(`${i} X ${i} = ${multiPly}`);

}


console.log(" Using loop print the following pattern 2");

// Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

console.log("i\ti^2\ti^3");

for (let i = 0; i <= 10; i++) {
    // i=0
    let str = ""
    for (let j = 1; j < 4; j++) {
        // j=2
        // console.log(j)
        // str=str==""?str+i**j:str+" "+i**j
        if (str == "") {
            str += i ** j
        } else {
            str = str + " " + i ** j
        }
        //  str=str+" "+i**j
        //  str+=i**j
        // str=str+i**j
        //  str=0**1=0 //first update for i==0
        //  str=0+0**2=0+0=00 //second update for i==0
        //  str=00+0**3=0+0+0=000 //second update for i==0

    }
    console.log(str)
}


console.log("Use for loop to iterate from 0 to 100 and print only even numbers\n");
for (let i = 0; i <= 100; i++) {

    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log("\nBoth Print even or odd number ");
let arr = []
for (let i = 0; i <= 100; i++) {

    if (i % 2 == 0) {
        console.log(i);
    } else {
        arr.push(i)
    }
}
console.log("odd numbers are " + arr + "\n")



//  for print new line
// console.log("odd numbers are ")
// for(let h=0;h<arr.length;h++){
//     console.log(arr[h])
// }

console.log("Use for loop to iterate from 0 to 100 and print the sum of all numbers.<br> The sum of all numbers from 0 to 100 is 5050.");
let sum = 0;
for (i = 0; i <= 100; i++) {
    sum = sum + i;

}
console.log(sum);

console.log("\nUse for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds");

let evenSum = 0;
let oddSum = 0;
arrs = [];
for (i = 0; i <= 100; i++) {

    if (i % 2 == 0) {
        evenSum += i;

    } else {
        oddSum += i;
    }
}

// console.log("Sum of Even Number" + evenSum);
// console.log("Sum of odd Number" + oddSum);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

//   [2550, 2500]

arrs.push(evenSum);
arrs.push(oddSum);
console.log(arrs);

console.log("\n Develop a small script which generate array of 5 random numbers");
let arry = [];
for (i = 0; i <= 4; i++) {
    arry.push(Math.floor(Math.random() * 101))
}
console.log(arry);


// let array = [];
// while (array.length < 5) {
// let num = Math.floor(Math.random() * 101);
// if (!array.includes(num)) {
// array.push(num);
// }
// }
// console.log(array);



let stor = "";
for (i = 0; stor.length < 6; i++) {
    let randomChar = Math.floor((Math.random() * 26) + 97);

    if (randomChar > 97 && randomChar < 122) {
        let randomCharString = String.fromCharCode(randomChar); //d
        stor = stor + randomCharString //"" +e = e  //"e"+d = ed// 
    }
}
console.log("\nDevelop a small script which generate a six characters random id:" + stor);


// second way 
let result = '';
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;
let counter = 0;
while (counter < 6) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
}
console.log("second Develop a small script which generate a six characters random id:" + result);

// Exercises: Level 2


console.log("\nWrite a script which generates a random hexadecimal number");

const hexaChars = '0123456789abcdef';
let hex = "";
for (i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * hexaChars.length);
    hex = hex + hexaChars[index]
}
console.log('#' + hex)


// Write a script which generates a random rgb color number.

// rgb(240,180,80)   


let rgb = "";

for (i = 0; i < 3; i++) {
    let index = Math.floor(Math.random() * 256);

    rgb += index + ',';
    console.log(rgb);
}
rgb = rgb.slice(0, -1);
//   console.log(rgb)
console.log(`Write a script which generates a random rgb color number:1 rgb (${rgb})`)



console.log("\n\nPrint all the elements of array as shown below.")

// const fullStack = [
//   ['HTML', 'CSS', 'JS', 'React'],
//   ['Node', 'Express', 'MongoDB']
// ]
// HTML
// CSS
// JS
// REACT
// NODE
// EXPRESS
// MONGODB  

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
let str = fullStack.toString().toUpperCase();
console.log(str)


// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.


let veg = ['banana', 'orange', 'mango', 'lemon'];
for (i = veg.length - 1; i >= 0; i--) {
    console.log(veg[i])

}
console.log('typeof ' + typeof veg);


// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
let tech = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

for (i = 0; i <= tech.length - 1; i++) {

    console.log(tech[i]);
}

console.log('\nusing for of');
for (let tec of tech) {
    console.log(tec);
}

// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

// Declare the array
let mernStack = ["MongoDB", "Express", "React", "Node"];

// Declare an empty string to store the acronym
let acronym = "";

// Loop through the array and concatenate the first letter of each element to the acronym
// for (let tech of mernStack) {
// acronym += tech[0];
// }
for (let i = 0; i <= mernStack.length - 1; i++) {
    acronym = acronym + mernStack[i].charAt(0);
    console.log(acronym);
}
// Print the acronym
console.log('\n ' + acronym); // MERN


//  //////////////////////////////////////////////////////
var countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];

var newArray = [];
for (let i = 0; i <= countries.length - 1; i++) {
    newArray.push(countries[i].toUpperCase())

    // newArray.push(countries[i].length) 
    //for length each arry items


}
console.log(newArray);


//  //////////////////////////////////////////////////////




const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
let landCountries = [];
let nolandCountries = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes('land')) {
        landCountries.push(countries[i])
    } else {
        nolandCountries.push(countries[i])
    }
}
console.log(`landCountries:`, landCountries) // use template literals to interpolate variables

console.log(`NolandCountries:`, nolandCountries)